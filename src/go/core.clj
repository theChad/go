(ns go.core
  (:gen-class)
  (:require [go.draw.core :as draw]
            [go.game-engine :as game]))

(defn -main
  "Just fires up the GUI game board for a new game."
  [& args]
  (draw/start-gui 19))
