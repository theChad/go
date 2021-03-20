(ns go.core
  ;;(:gen-class) ;; taking this out for clojurescript
  (:require [go.draw.core :as draw]
            [go.game-engine :as game]))

(defn ^:export main
  "Just fires up the GUI game board for a new game."
  ([& args]
   (println "Okay, so at least I'm here.")
   (draw/start-gui (js/parseInt (first args)))
   )
  ([]
   (main "19")
   ))

;;(-main)


