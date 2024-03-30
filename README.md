# go

Bare-bones implemntation of a local go game. Allows placement of stones and enforces turn order, but will not enforce the ko rule or do any scoring (nor allow passing yet). Likely never will - this was just a hobby project. This is now a clojurescript version, written for the browser.

## See it in action

[Here](https://thechad.github.io/go/resources/public/index.html). Click on an intersection to make a move. Left and right arrow keys show the history of the game, while up and down arrows will take you to different branches.

## Installation

Clone the repo, or just the `resources/public` folder, which contains the html and javascript.

## Usage

    $ lein figwheel

Runs an interactive environmet, with the game in the browser at `localhost:3449`. Alternatively, open `resources/public/index.html` in a browser.
   

Copyright © 2021 theChad

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
