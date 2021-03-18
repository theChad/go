(defproject go "0.1.0-SNAPSHOT"
  :description "My second start on go (baduk) implementation"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.10.3"]
                 [quil "3.1.0"]
                 [compojure "1.6.2"]
                 [ring/ring-jetty-adapter "1.7.1"]
                 [environ "1.1.0"]]
  :min-lein-version "2.0.0"
  ;;:main ^:skip-aot go.core
  ;;:target-path "target/%s"
  :uberjar-name "go-standalone.jar"
  :profiles {:production {:env {:production true}}}
  ;;{:uberjar {:aot :all}}
  )
