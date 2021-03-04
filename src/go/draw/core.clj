(ns go.draw.core
  (:require [go.game-engine :as game]
            [quil.core :as q]
            [quil.middleware :as m]))

(def stone-size 50)
(def board-size 950)
(def board-top 25)
(def board-left 25)
(def board-size-x 19)
(def board-size-y 19)

;;; Interaction with game-engine board

(defn location-to-coords
  [[y-loc x-loc]]
  "Return the coordinates for drawing from a basic location.
   e.g. location of [10 10] (tengen) to coords of [105 105]."
  {:x (+ board-left (* stone-size x-loc))
   :y (+ board-top (* stone-size y-loc))}
  )

(defn get-stones-from-board
  [board]
  "Return set of stones in {:x :y :color} format from board."
  (let [black 1
        white 2
        [y-dim x-dim] (game/board-dimensions board)]
    (set (for [x-loc (range x-dim)
               y-loc (range y-dim)
               :when (not (game/is-empty-intersection? board [y-loc x-loc]))
               :let [coords (location-to-coords [y-loc x-loc])]]
           {:x (:x coords)
            :y (:y coords)
            :color (game/num-to-stone-name (game/get-intersection-value [y-loc x-loc] board))}
           ))))

(defn import-board
  [board state]
  "Import a game engine board into the drawing state."
  (if board (assoc state :stones (get-stones-from-board board))
      (assoc state :error true)))

(defn coords-to-location
  [coords]
  "Return a location from the {:x :y} coords"
  [(int (/ (- (:y coords) board-top) stone-size))
   (int (/ (- (:x coords) board-left) stone-size))])

(defn add-stone-to-board
  [board stone]
  "Insert one {:x :y :color} stone into the game-engine board"
  (game/set-intersection (coords-to-location stone) (game/stone-name-to-num (:color stone)) board))

(defn get-board-from-stones
  [stones]
  "Return a game-engine board format from map of {:x :y :color} stones."
  (reduce add-stone-to-board (game/get-empty-board [board-size-y board-size-x]) stones))

(defn export-board
  [state]
  "Return a game-engine board from the state"
  (get-board-from-stones (:stones state)))

;;; Find the nearest grid point to a location
(defn nearest-grid-point [loc]
  "Find nearest grid point to loc and return as [x y]"
  (let [x (loc 0)
        y (loc 1)]
    [(+ (#(- % (mod % stone-size)) (int (+ x (/ stone-size 2) (- board-left)))) board-top)
     (+ (#(- % (mod % stone-size)) (int (+ y (/ stone-size 2) (- board-top)))) board-top)]))


;;; Next player's turn, if no error. If error don't advance, unflag error.
(defn next-color [color]
  (if (= color "b") "w" "b"))

(defn switch-color [state]
  (if (:error state) (assoc state :error false)
      (update state :color next-color)))


;;; Background - maybe include board?
(defn setup []
  (q/background 255) ; white background
  (q/frame-rate 30)
  {:color "b"}
  )


;;;; Draw functions. These all have side effects, though don't alter
;;;; any data, just the drawing.

;;; Draw the board
(defn draw-board []
  "Draw the board with global params"
  (q/fill 255 255 186)
  (doseq [x (range board-left (+ board-left (* stone-size (dec board-size-x))) stone-size)
          y (range board-top (+ board-top (* stone-size (dec board-size-x))) stone-size)]
    (q/rect x y stone-size stone-size))
  (q/fill 0 0 0)
  (doseq [x [3 9 15]
          y [3 9 15]]
    (q/ellipse (+ board-left (* stone-size x)) (+ board-top (* stone-size y)) (/ stone-size 5) (/ stone-size 5)))
  (q/no-fill))

;;; Draw a single stone of a given color
(defn draw-stone [stone this-stone-size]
  "Draw a stone (map with color and loc)"
  (if stone 
    (let [color (:color stone)
          x (:x stone)
          y (:y stone)]
      (cond (= color "b") (q/fill 0 0 0)
            (= color "w") (q/fill 255 255 255))
      (q/ellipse x y this-stone-size this-stone-size)))
  (q/no-fill) ; reset to the default of no fill
  )


;;; Draw the board and stones
(defn draw-stones [state]
  "Draw board, stones and hover stone."
  (q/background 255)
  (draw-board)
  (draw-stone (:hover-stone state) (/ stone-size 2))
  (if (:stones state) (doseq [stone (:stones state)] (draw-stone stone stone-size)))
  ;;(if (:stones state) (draw-stone ((:stones state) 0)))
  )

;;; Draw a stone and change color when mouse is clicked
(defn mouse-clicked [state event]
  (let [[grid-x grid-y] (nearest-grid-point [(:x event) (:y event)])
        new-stone {:x grid-x :y grid-y :color (:color state)}
        new-stone-loc (coords-to-location new-stone)
        new-stone-color (:color state)]
    (-> state
        export-board
        (game/make-move new-stone-loc (game/stone-name-to-num new-stone-color))
        (import-board state)
        (switch-color))
    ;; Update the state to reflect the new game state
    ;; (-> state
    ;;     ;;(game/make-move new-stone) ; Return the new board, with or without move
    ;;     ;;(partial import-board state)
    ;;     (update :stones (fnil conj []) new-stone)
    ;;     (update :color switch-color))
    ))

;;; Draw an empty stone to follow along with the mouse
(defn mouse-moved [state event]
  (let [[grid-x grid-y] (nearest-grid-point [(:x event) (:y event)])]
    (assoc state :hover-stone {:x grid-x :y grid-y :color (:color state)})))

;;; Update the stone color


;;; Create the sketch
(q/defsketch drawn-board
  :size [board-size board-size]
  :title "Go"
  :setup setup
  :draw draw-stones
  :mouse-moved mouse-moved
  :mouse-clicked mouse-clicked
  :middleware [m/fun-mode])
