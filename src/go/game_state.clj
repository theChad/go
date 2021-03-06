(ns go.game-state)

;;;; Module for handling views and manipulations of the game state
;;;; game-state will be a map. {:history [] :position []}.
;;;;  :history is a tree implemented as a vector of vectors. Any branches
;;;;   will appear as the final elements of the common vector.
;;;;   e.g. [&common-elements [path-1] [path-2 [path2-a] [path2-b]] [path-3]]
;;;;   Each element in the history vector will be a map of the state
;;;;   at that point, containing :board and :last-move. 


;;;; Dealing with the game board

(defn get-empty-board
  "Return a new empty game board"
  [size]
  (vec (take (first size) (repeat
                           (vec (take (second size) (repeat 0)))))))

;;;; Functions for accessing state

(defn get-current-state
  "Return the current state from the game history."
  [game-state]
  (let [{:keys [history position]} game-state]
    (get-in history position)))

(defn get-state-at-position
  "Return the state or branch at a supplied position."
  [game-state position]
  (get-in (:history game-state) position))

(defn get-current-board
  "Return the current gameboard from the game history."
  [game-state]
  (:board (get-current-state game-state)))

(defn get-last-move
  "Return the last move from the current path."
  [game-state]
  (:last-move (get-current-state game-state)))

(defn get-move-at-position
  "Return the last move at a specific position in history."
  [game-state position]
  (:last-move (get-state-at-position game-state position)))

(defn matches-move?
  "Compares the move from a board state to the given move."
  [move board-state]
  (= move (:last-move board-state)))

(defn get-last-common-index
  "Return the index of the last common element in the branch."
  [branch]
  ;; Since all scalars (common elements) in a branch occur before
  ;; all vectors (other branches), work backwards until finding a scalar. 
  (if (vector? (last branch))
    (recur (pop branch))
    (dec (count branch))))

(defn previous-position
  "Get the previous position from a game-state."
  [game-state]
  (let [{:keys [history position]} game-state]
    (cond
      (= 1 (count position)) [(max 0 (dec (last position)))]
      (= 0 (last position)) (conj (pop (pop position))
                                  (get-last-common-index (get-state-at-position game-state (pop (pop position)))))
      :else (update position (dec (count position)) dec)
      )))

(defn move-to-previous-state
  "Get the previous state along this branch."
  [game-state]
  ;; Decrement the last index by one, or go up one level.
  (let [{:keys [history position]} game-state]
    ;;(print "move-to-previous-state ")
    ;;(clojure.pprint/pprint (assoc game-state :position (previous-position game-state)))
    (assoc game-state :position (previous-position game-state)))
  )

(defn create-game-state
  "Create an empty game-state."
  ([size]
   {:history [{:board (get-empty-board [size size]) :last-move nil}]
    :position [0]})
  ([]
   (create-game-state 19)))

;;;; Updating the state

(defn current-branch
  "Return only the current branch from history"
  [game-state]
  (let [{:keys [history position]} game-state
        branch-position (pop position)
        branch-vector (get-in history branch-position)]
    branch-vector))

(defn end-of-branch
  "Return a position pointing to the end of the current branch.
   E.g. If the current branch has length 5, [34 23 3] -> [34 23 5]."
  [game-state]
  (let [position (:position game-state)]
    (conj (pop position) (dec (count (current-branch game-state))))))

(defn last-index-in-vector?
  "True if the index represents the last position in the vector"
  [index vect]
  (= (dec (count vect)) index))

(defn last-common-branch-element?
  "True if the index is the last element, or if the next element is a vector..
   E.g. with index 3, [0 1 2 3 [4 5] [6 7]] is true."
  [index v]
  (or (last-index-in-vector? index v)
      (vector? (v (inc index)))))

(defn branch-point?
  "True if the given position is a branch point"
  [game-state position]
  (vector? (get-state-at-position game-state position)))


;; Error showing up here. Nil position?

(defn next-position
  "Get what would be the next position index."
  [game-state]
  (let [{:keys [history position]} game-state
        next-pos (update-in position [(dec (count position))] inc)]
    
    (cond (= (end-of-branch game-state) position)
          position ; end of branch
          (branch-point? game-state next-pos)
          (conj next-pos 0) ; Into first continuing branch
          :else
          next-pos ; next spot is a valid state
      )))

(defn move-to-next-state
  "Move the position to the next state in the branch, or hold here if final."
  [game-state]
  ;;  (println "move-to-next-state")
  ;;  (clojure.pprint/pprint (assoc game-state :position (next-position game-state)))
  ;; Make sure there is a next state on this branch before moving.
  (assoc game-state :position (next-position game-state)))


(defn branched-vector
  "The enclosing vector of the new branched vector.
   Position here should just be a scalar.
   Takes [1 2 3 4 5] with position 1 to [1 2 [3 4 5]]."
  [enclosing-vector position]
  (let [branch-start (inc position)]
    (conj (subvec enclosing-vector 0 branch-start) (subvec enclosing-vector branch-start))))


(defn conj-empty
  "for debugging"
  ([s]
   (conj s [])
   []
   (conj-empty [])))

(defn create-new-branch-point
  "Create a new branch point"
  [history position enclosing-vector-position enclosing-vector]
  (print "new branch point" enclosing-vector-position " "
         (-> history
             (assoc-in enclosing-vector-position (branched-vector enclosing-vector (last position)))
             (get-in enclosing-vector-position))
         )
  (-> history
      (assoc-in enclosing-vector-position (branched-vector enclosing-vector (last position)))
      (update-in enclosing-vector-position #(conj % []))))


(defn make-branch
  "Create a branch point at the current location in the game state history.
   Only create the branch if the element pointed to by (:position game-state) is not
   the last element of its branch. Create an empty branch and point position to it.
   Note: the position returned from make-branch will always be right after
   the last element, so settable but not gettable."
  [game-state]
  (let [{:keys [history position]} game-state
        enclosing-vector-position (pop position)
        enclosing-vector (get-in history enclosing-vector-position)]
    (cond
      ;; At end of branch, no need to make a new branch point. Update position only.
      (last-index-in-vector? (last position) enclosing-vector)
      (assoc game-state
             :position (update (end-of-branch game-state) (dec (count (end-of-branch game-state))) inc))
      ;; At a branch point, need to create new branch.
      (last-common-branch-element? (last position) enclosing-vector)
      (do (print (str "enclosing-vector-position" enclosing-vector-position))
          (-> game-state
              (assoc 
                     :history
                     (if (= 0 (count enclosing-vector-position))
                       (conj history [])
                       (update-in history enclosing-vector-position #(conj % []))))
              (#(assoc % :position (conj (end-of-branch %) 0)))))
      ;; Not at a branch point, need to create it and a new branch.
      :else
      (-> (assoc game-state
                 :history
                 ;; If enclosing-vector is entire vector, position is [] and won't update-in
                 (if (= 0 (count enclosing-vector-position))
                   (-> (branched-vector enclosing-vector (last position))
                       (conj []))
                   (-> history
                       (assoc-in enclosing-vector-position (branched-vector enclosing-vector (last position)))
                       (update-in enclosing-vector-position #(conj % [])))
                   ))
          (#(assoc % :position (conj (end-of-branch %) 0)))))))

(defn in-same-branch?
  "True if two positions are in the same sub-branch.
   One being in a child branch of the other doesn't count."
  [pos1 pos2]
  (= (drop-last pos1) (drop-last pos2)))

(defn tree-contains?
  "True if the tree contains an element at position.
   Tree is a vector-based tree, position is a get-in type vector."
  [tree position]
  (cond (= 0 (count position)) true
        (not (coll? tree)) false
        (contains? tree (first position)) (tree-contains? (tree (first position)) (rest position))
        :else false))

(defn position-down-parallel-branch
  "Position of the next sibling branch."
  [tree position]
  (if (>= (count position) 2) ; no siblings if position is top-level in tree
    (let [new-position  
          (update position (- (count position) 2) inc)]
      (if (tree-contains? tree new-position) new-position position))
    position)
  )

(defn move-down-parallel-branch
  "Move down to the next sibling branch."
  [game-state]
  (assoc game-state :position (position-down-parallel-branch (:history game-state) (:position game-state))))

(defn position-up-parallel-branch
  "Position of the next sibling branch."
  [tree position]
  (if (>= (count position) 2) ; no siblings if position is top-level in tree
    (let [new-position  
          (update position (- (count position) 2) dec)]
      (if (tree-contains? tree new-position) new-position position))
    position)
  )

(defn move-up-parallel-branch
  "Move down to the next sibling branch."
  [game-state]
  (assoc game-state :position (position-up-parallel-branch (:history game-state) (:position game-state))))

(defn tree-parallel-search
  "Search for item in same position in all parallel branches.
   Return first occurence of item.
   item-eq-fn [item tree-node] should compare the equality of the item searched for
   and the elements of the tree."
  ([tree position item item-eq-fn]
   (if (item-eq-fn item (get-in tree position)) position
       (let [next-pos (position-down-parallel-branch tree position)]
         (if (= position next-pos) nil
             (recur tree next-pos item item-eq-fn)))))
  ([tree position item]
   (tree-parallel-search tree position item =)))

(defn find-move-if-next
  "Find the position of the given move, if it's the next move in the branch (or its children)."
  [game-state move]
  (let [{:keys [history position]} game-state
        next-pos (next-position game-state)]
    (cond
      (not (in-same-branch? position next-pos))
      (tree-parallel-search history next-pos move matches-move?)
      (= move (get-move-at-position game-state next-pos)) next-pos
      :else nil)))

(defn advance-if-next-move
  "If the given move is the next move in the branch (or its children), advance to it."
  [game-state move]
  (if-let [move-position (find-move-if-next game-state move)]
    (assoc game-state :position move-position)
    nil))

(defn add-move
  "Add a new move to the game state history."
  [game-state move board]
  ;; If the current position is the last element of the vector it's in,
  ;; just add a move at the end. Otherwise, vectorize the remaining
  ;; (future) states and create a new vector at the end for the new state.
  (println "add-move")
  (println move)
  (let [new-state {:board board :last-move move}
        branched-game-state (make-branch game-state)]
    (if-let [new-game-state (advance-if-next-move game-state move)]
      new-game-state
      ;; Put the new state at the end of the current branch
      (assoc branched-game-state
             :history
             (assoc-in (:history branched-game-state) (:position branched-game-state) new-state)))))


(branched-vector [1 2 3 4 5] 4)


(def a {:history [1 2 [3 4 5] [6 7 [8 9 [10] [101 102]] [11 12]]] :position [3 2 1]})

(get-current-state a)


(make-branch a)
(add-move a 4 5)
(assoc-in (:history a) [3 2 3] 78)
(end-of-branch a)
