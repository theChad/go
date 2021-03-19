(defproject go "0.1.0-SNAPSHOT"
  :description "My second start on go (baduk) implementation"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.10.3"]
                 [quil "3.1.0"]
                 [compojure "1.6.2"]
                 [ring/ring-jetty-adapter "1.7.1"]
                 [environ "1.1.0"]
                 [org.clojure/clojurescript "1.10.520"]]
  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel "0.5.19"]]
  :min-lein-version "2.0.0"
  ;;:main ^:skip-aot go.core
  ;;:target-path "target/%s"
  :uberjar-name "go-standalone.jar"
  :profiles {:production {:env {:production true}}}
  ;;{:uberjar {:aot :all}}
  
  :cljsbuild
  {:builds [; development build with figwheel hot swap
            {:id "development"
             :source-paths ["src"]
             :figwheel true
             :compiler
             {:main "hello_quil.core"
              :output-to "resources/public/js/main.js"
              :output-dir "resources/public/js/development"
              :asset-path "js/development"}}
            ; minified and bundled build for deployment
            {:id "optimized"
             :source-paths ["src"]
             :compiler
             {:main "hello_quil.core"
              :output-to "resources/public/js/main.js"
              :output-dir "resources/public/js/optimized"
              :asset-path "js/optimized"
              :optimizations :advanced}}]}
  )
