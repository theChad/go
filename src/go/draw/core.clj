(ns go.draw.core
  (:require [quil.core :as q]
            [quil.middleware :as m]))

(def stone-size 50)
(def board-size 1000)
(def board-top 25)
(def board-left 25)
(def board-size-x 19)
(def board-size-y 19)



;;; Find the nearest grid point to a location
(defn nearest-grid-point [loc]
  "Find nearest grid point to loc and return as [x y]"
  (let [x (loc 0)
        y (loc 1)]
    [(+ (#(- % (mod % stone-size)) (int (+ x (/ stone-size 2) (- board-left)))) board-top)
     (+ (#(- % (mod % stone-size)) (int (+ y (/ stone-size 2) (- board-top)))) board-top)]))


;;; Next player's turn
(defn switch-color [color]
  (if (= color "b") "w" "b"))


;;; Background - maybe include board?
(defn setup []
  (q/background 255) ; white background
  (q/frame-rate 30)
  {:color "b"}
  )

;;; Draw the board
(defn draw-board []
  "Draw the board with global params"
  (q/fill 255 255 186)
  (doseq [x (range board-left (+ board-left (* stone-size (dec board-size-x))) stone-size)
          y (range board-top (+ board-top (* stone-size (dec board-size-x))) stone-size)]
    (q/rect x y stone-size stone-size)))

;;; Draw a single stone of a given color
(defn draw-stone [stone]
  "Draw a stone (map with color and loc)"
  (if stone 
    (let [color (:color stone)
          x (:x stone)
          y (:y stone)]
      (cond (= color "b") (q/fill 0 0 0)
            (= color "w") (q/fill 255 255 255))
      (q/ellipse x y stone-size stone-size)))
  (q/no-fill) ; reset to the default of no fill
  )


;;; Draw the board and stones
(defn draw-stones [state]
  "Draw board, stones and hover stone."
  (q/no-fill) ; just borders of rectangles for now
  (q/background 255)
  (draw-board)
  (if (:stones state) (doseq [stone (:stones state)] (draw-stone stone)))
  ;;(if (:stones state) (draw-stone ((:stones state) 0)))
  (draw-stone (:hover-stone state)))

;;; Draw a stone and change color when mouse is clicked
(defn mouse-clicked [state event]
  (let [[grid-x grid-y] (nearest-grid-point [(:x event) (:y event)])
        new-stone {:x grid-x :y grid-y :color (:color state)}]
    (-> state
        (update :stones (fnil conj []) new-stone)
        (update :color switch-color))))

;;; Draw an empty stone to follow along with the mouse
(defn mouse-moved [state event]
  (let [[grid-x grid-y] (nearest-grid-point [(:x event) (:y event)])]
    (assoc state :hover-stone {:x grid-x :y grid-y})))

;;; Update the stone color


;;; Create the sketch
(q/defsketch drawn-board
  :size [board-size board-size]
  :setup setup
  :draw draw-stones
  :mouse-moved mouse-moved
  :mouse-clicked mouse-clicked
  :middleware [m/fun-mode])
