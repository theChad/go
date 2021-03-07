(ns go.game-state
  (:require [go.vector-tree :as tree]))

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

(defn end-of-branch
  "Return a position pointing to the end of the current branch.
   E.g. If the current branch has length 5, [34 23 3] -> [34 23 5]."
  [game-state]
  (let [{:keys [history position]} game-state]
    (tree/end-of-branch history position)))

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

(defn move-to-previous-state
  "Get the previous state along this branch."
  [game-state]
  ;; Decrement the last index by one, or go up one level.
  (let [{:keys [history position]} game-state]
    ;;(print "move-to-previous-state ")
    ;;(clojure.pprint/pprint (assoc game-state :position (previous-position game-state)))
    (assoc game-state :position (tree/previous-position history position)))
  )

(defn create-game-state
  "Create an empty game-state."
  ([size]
   {:history [{:board (get-empty-board [size size]) :last-move nil}]
    :position [0]})
  ([]
   (create-game-state 19)))

;;;; Updating the state

(defn move-to-next-state
  "Move the position to the next state in the branch, or hold here if final."
  [game-state]
  ;;  (println "move-to-next-state")
  ;;  (clojure.pprint/pprint (assoc game-state :position (next-position game-state)))
  ;; Make sure there is a next state on this branch before moving.
  (let [{:keys [history position]} game-state]
    (assoc game-state :position (tree/next-position history position))))


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
      (tree/last-index-in-vector? (last position) enclosing-vector)
      (assoc game-state
             :position (update (end-of-branch game-state) (dec (count (end-of-branch game-state))) inc))
      ;; At a branch point, need to create new branch.
      (tree/last-common-branch-element? (last position) enclosing-vector)
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
                   (-> (tree/branched-vector enclosing-vector (last position))
                       (conj []))
                   (-> history
                       (assoc-in enclosing-vector-position (tree/branched-vector enclosing-vector (last position)))
                       (update-in enclosing-vector-position #(conj % [])))
                   ))
          (#(assoc % :position (conj (end-of-branch %) 0)))))))

(defn move-down-parallel-branch
  "Move down to the next sibling branch."
  [game-state]
  (assoc game-state :position (tree/position-down-parallel-branch (:history game-state) (:position game-state))))

(defn move-up-parallel-branch
  "Move down to the next sibling branch."
  [game-state]
  (assoc game-state :position (tree/position-up-parallel-branch (:history game-state) (:position game-state))))

(defn tree-parallel-search
  "Search for item in same position in all parallel branches.
   Return first occurence of item.
   item-eq-fn [item tree-node] should compare the equality of the item searched for
   and the elements of the tree."
  ([tree position item item-eq-fn]
   (if (item-eq-fn item (get-in tree position)) position
       (let [next-pos (tree/position-down-parallel-branch tree position)]
         (if (= position next-pos) nil
             (recur tree next-pos item item-eq-fn)))))
  ([tree position item]
   (tree-parallel-search tree position item =)))

(defn find-move-if-next
  "Find the position of the given move, if it's the next move in the branch (or its children)."
  [game-state move]
  (let [{:keys [history position]} game-state
        next-pos (tree/next-position history position)]
    (cond
      (not (tree/in-same-branch? position next-pos))
      (tree/tree-parallel-search history next-pos move matches-move?)
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
  (println "add-move " move)
  (let [new-state {:board board :last-move move}
        branched-game-state (make-branch game-state)]
    (if-let [new-game-state (advance-if-next-move game-state move)]
      new-game-state
      ;; Put the new state at the end of the current branch
      (assoc branched-game-state
             :history
             (assoc-in (:history branched-game-state) (:position branched-game-state) new-state)))))

