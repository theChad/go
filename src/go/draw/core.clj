(ns go.draw.core
  (:require [go.game-engine :as game]
            [go.game-state :as game-state]
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
  [state]
  "Import a game engine board into the drawing state."
  ;; go.game-engine/make-move returns nil if no move was made,
  ;; so in that case keep the board and set the :error flag.
  (let [board (game-state/get-current-board (:game-state state))
        last-color
        (game/num-to-stone-name (:color (game-state/get-last-move (:game-state state))))]
    (if board
      (assoc state :stones (get-stones-from-board board)
             :color (next-color last-color))
      (assoc state :error true))))

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

(defn switch-color
  "Switch the current color if a valid move was made"
  [state]
  ;; If the move was invalid, :error will be true. Reset it and keep the same color.
  (if (:error state) (assoc state :error false)
      (update state :color next-color)))


;;; Background - maybe include board?
(defn setup [size]
  (q/background 255) ; white background
  (q/frame-rate 30)
  {:game-state (game-state/create-game-state size)
   :color "b"}
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
  (draw-stone (:hover-stone state) (/ stone-size 1.5))
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
        :game-state ; extract the game-state format
        ;; Tell the game engine to make a move, get back updated board
        (game/handle-move new-stone-loc (game/stone-name-to-num new-stone-color))
        ((partial assoc state :game-state))
        import-board ; import game-engine board back to draw state format
        ;;(switch-color)
        )
    ))

;;; Draw an empty stone to follow along with the mouse
(defn mouse-moved [state event]
  (let [[grid-x grid-y] (nearest-grid-point [(:x event) (:y event)])]
    (assoc state :hover-stone {:x grid-x :y grid-y :color (:color state)})))


(defn key-to-fn
  "Return the function to be called on the game-state given a key press."
  [k]
  (if-let [f ({:left game-state/move-to-previous-state
               :right game-state/move-to-next-state}
              k)]
    f
    identity))

;;; Navigate through the game-state tree with left/right arrows
(defn key-pressed
  "Navigate through the game tree when arrows pressed."
  [state event]
  ;; Only moves backwards on any key press right now.
  (print (q/key-as-keyword))
  (import-board
   (assoc state :game-state
          ((key-to-fn (q/key-as-keyword)) (:game-state state)))))

;;; Create the sketch

(defn start-gui [size]
  "Draw the board and start the gui."
  (q/defsketch drawn-board
    :size [board-size board-size]
    :title "Go"
    :setup (partial setup size)
    :draw draw-stones
    :mouse-moved mouse-moved
    :mouse-clicked mouse-clicked
    :key-pressed key-pressed
    :middleware [m/fun-mode]))
