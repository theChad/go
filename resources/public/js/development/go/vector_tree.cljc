(ns go.vector-tree)

;;;; Implementation of tree using vectors
;;;; A node with multiple children has its children directly after the parent, each at the
;;;; start of their own vector. A node with one child is followed directly by that child.
;;;;      1
;;;;      2
;;;;     /\            <-- [1 2 [3] [4]]
;;;;    3 4





(defn current-branch
  "Return the branch containing position, starting after previous
  branch point."
  [tree position]
  (let [branch-position (pop position)
        branch (get-in tree branch-position)]
    branch))

(defn end-of-branch
  "Return a position pointing to the end of the current branch.
   E.g. If the current branch has length 5, [34 23 3] -> [34 23 5]."
  [tree position]
  (conj (pop position) (dec (count (current-branch tree position)))))

(defn branch-point?
  "True if the given position is a branch point"
  [tree position]
  (vector? (get-in tree position)))


(defn get-branch-node
  "Return the index of the last common element in the branch."
  [branch]
  ;; Since all scalars (common elements) in a branch occur before
  ;; all vectors (other branches), work backwards until finding a scalar. 
  (if (vector? (last branch))
    (recur (pop branch))
    (dec (count branch))))

(defn previous-position
  "Get the previous position going up the tree."
  [tree position]
  (cond
    (= 1 (count position)) [(max 0 (dec (last position)))]
    (= 0 (last position)) (conj (pop (pop position))
                                (get-branch-node (get-in tree (pop (pop position)))))
    :else (update position (dec (count position)) dec)
    ))

(defn next-position
  "Get the next position, going down the tree.
  If position is at a branch point, go into the first created child branch."
  [tree position]
  (let [next-pos (update-in position [(dec (count position))] inc)]    
    (cond (= (end-of-branch tree position) position)
          position ; end of branch, no further
          (branch-point? tree next-pos)
          (conj next-pos 0) ; Into first continuing branch
          :else
          next-pos ; next spot is a valid state
      )))



(defn last-index-in-vector?
  "True if the index represents the last position in the vector"
  [index vect]
  (= (dec (count vect)) index))

(defn last-common-branch-element?
  "True if the index is the last element, or if the next element is a vector..
   E.g. with index 3, [0 1 2 3 [4 5] [6 7]] is true."
  [index v]
  (or (last-index-in-vector? index v)
      (vector? (v (inc index)))))

(defn branched-vector
  "The enclosing vector of the new branched vector.
   Position here should just be a scalar.
   Takes [1 2 3 4 5] with position 1 to [1 2 [3 4 5]]."
  [enclosing-vector position]
  (let [branch-start (inc position)]
    (conj (subvec enclosing-vector 0 branch-start) (subvec enclosing-vector branch-start))))

(defn in-same-branch?
  "True if two positions are in the same sub-branch.
   One being in a child branch of the other doesn't count."
  [pos1 pos2]
  (= (drop-last pos1) (drop-last pos2)))

(defn tree-contains?
  "True if the tree contains an element at position.
   Tree is a vector-based tree, position is a get-in type vector."
  [tree position]
  (cond (= 0 (count position)) true
        (not (coll? tree)) false
        (contains? tree (first position)) (tree-contains? (tree (first position)) (rest position))
        :else false))

(defn position-down-parallel-branch
  "Position of the next sibling branch."
  [tree position]
  (if (>= (count position) 2) ; no siblings if position is top-level in tree
    (let [new-position  
          (update position (- (count position) 2) inc)]
      (if (tree-contains? tree new-position) new-position position))
    position)
  )

(defn position-up-parallel-branch
  "Position of the next sibling branch."
  [tree position]
  (if (>= (count position) 2) ; no siblings if position is top-level in tree
    (let [new-position  
          (update position (- (count position) 2) dec)]
      (if (tree-contains? tree new-position) new-position position))
    position)
  )

(defn tree-parallel-search
  "Search for item in same position in all parallel branches.
   Return first occurence of item.
   item-eq-fn [item tree-node] should compare the equality of the item searched for
   and the elements of the tree."
  ([tree position item item-eq-fn]
   (if (item-eq-fn item (get-in tree position)) position
       (let [next-pos (position-down-parallel-branch tree position)]
         (if (= position next-pos) nil
             (recur tree next-pos item item-eq-fn)))))
  ([tree position item]
   (tree-parallel-search tree position item =)))
