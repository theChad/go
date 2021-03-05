(ns go.game-state)

;;;; Module for handling views and manipulations of the game state
;;;; game-state will be a map. {:history [] :position []}.
;;;;  :history is a tree implemented as a vector of vectors. Any branches
;;;;   will appear as the final elements of the common vector.
;;;;   e.g. [&common-elements [path-1] [path-2 [path2-a] [path2-b]] [path-3]]
;;;;   Each element in the history vector will be a map of the state
;;;;   at that point, containing :board and :last-move. 

;;;; Functions for accessing state

(defn get-current-state
  "Return the current state from the game history."
  [game-state]
  (let [{:keys [history position]} game-state]
    (get-in history position)))

(defn get-current-board
  "Return the current gameboard from the game history."
  [game-state]
  (:board (get-current-state game-state)))

(defn get-last-move
  "Return the last move from the current path."
  [game-state]
  (:last-move (get-current-state game-state)))


;;;; Updating the state

(defn next-position
  "Get what would be the next position index."
  [position]
  (update-in position [(dec (count position))] inc))

(defn branched-vector
  "The enclosing vector of the new branched vector.
   Position here should just be a scalar.
   Takes [1 2 3 4 5] with position 2 to [1 2 [3 4 5]]."
  [enclosing-vector position]
  (conj (subvec enclosing-vector 0 position) (subvec enclosing-vector position)))

(defn make-branch
  "Create a branch at the current location in the game state history."
  [game-state]
  (let [{:keys [history position]} game-state
        enclosing-vector-position (pop position)
        enclosing-vector (get-in history enclosing-vector-position)]
    (assoc-in history enclosing-vector-position (branched-vector enclosing-vector (last position)))
    )
  )

(defn add-move
  "Add a new move to the game state history."
  [game-state move board]
  ;; If the current position is the last element of the vector it's in,
  ;; just add a move at the end. Otherwise, vectorize the remaining
  ;; (future) states and create a new vector at the end for the new state.
  (let [position (:position game-state)
        enclosing-vector-position (pop position)
        enclosing-vector (get-in (:history game-state) enclosing-vector-position)
        last-element (= (last position) (count enclosing-vector))
        new-state {:board board :last-move move}
        branched-game-state (if last-element game-state (make-branch game-state))]
    (if true
      ;; Just put the new state at the end of the current branch
      (assoc game-state :history (assoc-in (:history game-state) (next-position position) new-state))
      ;; Create a "main" branch of existing elements, and a new
      ;; branch for this new state.
      
      )))


(branched-vector [1 2 3 4 5] 4)


(def a {:history [1 2 [3 4 5] [6 7 [8 9 10] [11 12]]] :position [3 2 2]})

(get-current-state a)

(next-position [1 2 3])
(make-branch a)
(add-move a 4 5)
(assoc a :history 4)
