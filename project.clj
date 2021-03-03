(defproject go "0.1.0-SNAPSHOT"
  :description "My second start on go (baduk) implemntation"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [quil "3.1.0"]]
  :main ^:skip-aot go.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
