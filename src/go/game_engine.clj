;;;; Main engine containing all necessary functions for now, could split it up
(ns go.game-engine)


;;; Creating boards and interpreting their values

(defn get-empty-board
  "Return a new empty game board"
  [size]
  (vec (take (first size) (repeat
                           (vec (take (second size) (repeat "empty")))))))

(defn num-to-stone-name
  "Convert numbers to readable description of the stone in an intersection"
  [intersection-num]
  ({0 "empty", 1 "black", 2 "white"} intersection-num))


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
           updated-total-group (clojure.set/union group neighbors-in-group)
           remaining-neighbors (clojure.set/difference neighbors-in-group group)]
       (reduce #(get-group-from-point %2 board :group %1) updated-total-group remaining-neighbors)
       ))))


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



(defn get-all-liberties
  "Update the liberties of every group in the board"
  [board])


(defn capture-stones
  [location color board]
  board)


(defn is-valid-move
  [location color board])


(defn place-stone
  "Place the stone"
  [location color board]
  (set-intersection location color
                    (capture-stones location color board)))

(comment
  (defn try-place-stone
    "Try to place a stone of a given color on the board"
    [location color game-board]
    (if (is-valid-move location color game-board)
      (update-board game-board (place-stone location color (current-board game-board)))
      nil)))
