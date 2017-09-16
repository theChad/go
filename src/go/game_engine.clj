(ns go.game-engine)


(defn get-empty-board
  "Return a new empty game board"
  [size]
  (vec (take (first size) (repeat
                           (vec (take (second size) (repeat "empty")))))))

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


(defn get-all-liberties
  "Update the liberties of every group in the board"
  [board])

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


(defn get-connections
  "Return values of all connected intersections."
  [location board])

(defn get-group-name
  "Name groups from connections"
  [board])

(defn get-group-board
  "Return a board with positions naming groups"
  [board]
  (map (comp get-group-name get-connections) board))


(defn capture-stones
  [location color board])


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
