(ns go.core
  (:gen-class)
  (:require [go.draw.core :as draw]))

(defn -main
  "Just fires up the GUI game board for a new game."
  [& args]
  (draw/start-gui))
