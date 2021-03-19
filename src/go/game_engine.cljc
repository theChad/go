;;;; Main engine containing all necessary functions for now, could split it up
(ns go.game-engine
  (:require [clojure.set]
            [go.game-state :as game-state]))


;;; Creating boards and interpreting their values

(def empty-color 0)

(defn get-empty-board
  "Return a new empty game board"
  [size]
  (vec (take (first size) (repeat
                           (vec (take (second size) (repeat 0)))))))

(defn num-to-stone-name
  "Convert numbers to readable description of the stone in an intersection"
  [intersection-num]
  ({0 "empty", 1 "b", 2 "w"} intersection-num))

(defn stone-name-to-num
  [stone-name]
  "Convert b, w, or empty to the right numbers"
  ({"empty" 0, "b" 1, "w" 2} stone-name))


(defn board-nums-to-names
  "Convert numbers to names across the entire board"
  [board]
  (map (partial map num-to-stone-name) board))

(defn create-test-board
  "Return a randomized board of given size"
  [size]
  (vec (take (first size) (repeatedly
                           #(vec (take (second size) (repeatedly (partial rand-int 3)))))))
  )


;;; Dimensions and locations

(defn board-dimensions
  [board]
  [(count board) (count (first board))])

(defn convert-location
  "Convert to 0 based coordinates from 1 based"
  [location]
  (vec (map #(- % 1) location)))

(defn set-intersection
  "Place a stone on an intersection"
  [location color board]
  (assoc-in board location color))

(defn get-intersection-value
  "Return the value of the location"
  [location board]
  (get-in board location))

(defn is-empty-intersection?
  "True if the given location is empty"
  [board location]
  (= (get-intersection-value location board) 0))

(defn is-enemy-intersection?
  [board location color]
  "True if location has a stone not matching color."
  (not (or (is-empty-intersection? board location)
           (= color (get-intersection-value location board)))))


(defn lower-bound
  "Return lower bound from bounds"
  [bounds]
  (first bounds))

(defn upper-bound
  "Return upper bound from bounds"
  [bounds]
  (second bounds))

(defn location-within-bounds?
  "Determine whether location is within given inclusive bounds"
  [bounds location]
  (every? true? (map #(<= (lower-bound %2) %1 (upper-bound %2))
               location bounds)))

(defn get-possible-connected-locations
  "Return the possible locations of all connected intersections"
  [location]
  (for [x [-1 0 1] y [-1 0 1] :when (and (or (= 0 x) (= 0 y)) (not (= x y 0)))]
    [(+ x (first location)) (+ y (second location))]))

(defn get-connected-locations
  "Return the locations of all connected intersections"
  [location board]
  (let [[rows columns] (board-dimensions board)
        bounds [[0 (dec rows)] [0 (dec columns)]]]
    (filter (partial location-within-bounds? bounds)
            (get-possible-connected-locations location))))

(defn get-enemy-neighbors
  [board location color]
  "Return a collection of immediate neighbors which are enemy stones."
  (filter #(is-enemy-intersection? board % color) (get-connected-locations location board)))


;;;; Display

(defn highlight-group
  "Draw (or return, for now) a board highlighting a collection of intersections"
  [board group]
  (reduce #(assoc-in %1 %2 '*) board group))



;;;; Find groups

;;; Small-scale, just the adjacent neighbors in the group
(defn get-neighbors-in-group
  "Return the locations of all direct neighbors in the same group (i.e. of the same value)"
  [location board]
  (let [neighbor-locations (get-connected-locations location board)]
    (filter #(= (get-intersection-value location board) (get-intersection-value % board)) neighbor-locations )))

;;; Return values as a map I guess? Might need this later, not yet.
;;; Maybe this was supposed to be what get-group-from-point is
(defn get-connections
  "Return values of all connected intersections."
  [location board])


(def get-group-from-point
  "Return a set of all points in the same group as a given point."
  ;; Takes in location and board, as well as the group as it currently stands
  ;; The memoization shouldn't be necessary, as only non-group locations are explored
  (memoize
   (fn [location board & {:keys [group] :or {group #{}}}]
     ;Return a set consisting of groups of neighbors not already in this group
     (let [neighbors-in-group (set (get-neighbors-in-group location board))
           updated-total-group (clojure.set/union group neighbors-in-group #{location})
           remaining-neighbors (clojure.set/difference neighbors-in-group group)]
       (reduce #(get-group-from-point %2 board :group %1) updated-total-group remaining-neighbors)
       ))))

(defn get-enemy-neighbor-groups
  [board location color]
  "Return a collection of neighbor groups."
  (set (map #(get-group-from-point % board) (get-enemy-neighbors board location color))))


(defn get-group-name
  "Name groups from connections"
  [board])

(defn get-group-board
  "Return a board with positions naming groups"
  [board]
  (map (comp get-group-name get-connections) board))

;;;; Handle liberties

;;; Return all the liberty locations
(defn find-empty-intersections
  "Return the empty intersections in a collection of locations."
  [board intersections]
  (filter (partial  is-empty-intersection? board) intersections))

(defn count-empty-intersections
  "Return a count of the empty intersections in a collection of locations"
  [board intersections]
  (count (find-empty-intersections board intersections)))

(defn get-group-neighbors
  "Return the locations of the immediate neighbors of a group"
  [board group]
  (let [group-with-neighbors (apply clojure.set/union (map #(set (get-connected-locations % board)) group))
        neighbors-only (clojure.set/difference group-with-neighbors (set group))]
    neighbors-only))

(defn get-group-liberties
  "Get the liberties for a given group"
  [board group]
  (find-empty-intersections board (get-group-neighbors board group))
  )

(defn count-group-liberties
  "Get the group liberty count"
  [board group]
  (count (get-group-liberties board group)))

(defn dead-group?
  [board group]
  "True if a group is dead"
  (= 0 (count-group-liberties board group)))

(defn get-point-liberties [board location]
  "Get the liberties of a group at point"
  (get-group-liberties board (get-group-from-point location board)))

(defn count-point-liberties [board location]
  "Count the liberties of the group at point"
  (count-group-liberties board (get-group-from-point location board)))

(defn dead-stone? [board location]
  "Stone is dead if group has zero liberties"
  (= 0 (count-point-liberties board location)))

(defn any-dead-stones? [board locations]
  "True if any location in locations is dead/should be captured"
  (> (count (filter (partial dead-stone? board) locations)) 0))

(defn get-all-liberties
  "Update the liberties of every group in the board"
  [board])

;;; Take a group off the board
(defn capture-group
  [board group]
  "Capture all stones in the collection group"
  (reduce #(set-intersection %2 empty-color %1) board group))

;;; Given a move by color at location, capture all appropriate stones
(defn capture-stones
  [board location color]
  (let [temp-board (set-intersection location color board)
        enemy-groups (get-enemy-neighbor-groups temp-board location color)
        dead-groups (filter (partial dead-group? temp-board) enemy-groups)]
    (reduce (partial capture-group) temp-board dead-groups)))


;;; Did this move capture an ememy group?
(defn captured-enemy?
  [board location color]
  (let [neighbors (get-connected-locations location board)
        enemy-neighbors (filter #(is-enemy-intersection? board % color) neighbors)]
    (any-dead-stones? board enemy-neighbors))
  )

(defn is-valid-move?
  [board location color]
  ;; First test if empty intersection
  (let [temp-board (set-intersection location color board)
        point-liberties (count-point-liberties temp-board location)]
    
    (and (is-empty-intersection? board location) ; was it empty on board?
         ;; After placing a stone, is the group still alive?
         ;; Does it still have a liberty, or would it gain a liberty if not?
         (or (> point-liberties 0)
             (captured-enemy? temp-board location color))))
  )


(defn place-stone
  "Place the stone"
  [board location color]
  (set-intersection location color
                    (capture-stones board location color)))

(defn make-move
  [board location color]
  "Take in a move and make it if appropriate. Return the board, or nil if no move was made."
  (if (is-valid-move? board location color) (place-stone board location color) nil))

(defn create-single-move
  "Create a move map from the location and color"
  [location color]
  {:location location :color color})

;;;; Interact with the total game-state

(defn handle-move
  "Handle a move from the GUI, including updating the game-state.
   Return the updated game-state."
  [game-state location color]
  (let [move (create-single-move location color)]
    ;; Check to see if this move is already the next move in the branch.
    ;; If it is, just shift the position.
    (if-let [advanced-game-state (game-state/advance-if-next-move game-state move)]
      advanced-game-state
      ;; Not the next move in the game-state, so make the move.
      (if-let [new-board (make-move (game-state/get-current-board game-state) location color)]
        (game-state/add-move game-state move new-board)
        game-state))))


(comment
  (defn try-place-stone
    "Try to place a stone of a given color on the board"
    [location color game-board]
    (if (is-valid-move location color game-board)
      (update-board game-board (place-stone location color (current-board game-board)))
      nil)))


