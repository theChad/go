(defproject go "0.1.0-SNAPSHOT"
  :description "My second start on go (baduk) implementation"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.10.3"]
                 [quil "3.1.0"]]
  :main ^:skip-aot go.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
