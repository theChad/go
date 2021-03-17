(ns go.core
  (:gen-class)
  (:require [go.draw.core :as draw]
            [go.game-engine :as game]))

(defn -main
  "Just fires up the GUI game board for a new game."
  ([& args]
   (println "Okay, so at least I'm here.")
   ;;(draw/start-gui (Integer/parseInt (first args)))
   )
  ([]
   (-main "19")
   ))


