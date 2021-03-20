// Compiled by ClojureScript 1.10.520 {}
goog.provide('go.vector_tree');
goog.require('cljs.core');
/**
 * Return the branch containing position, starting after previous
 *   branch point.
 */
go.vector_tree.current_branch = (function go$vector_tree$current_branch(tree,position){
var branch_position = cljs.core.pop.call(null,position);
var branch = cljs.core.get_in.call(null,tree,branch_position);
return branch;
});
/**
 * Return a position pointing to the end of the current branch.
 * E.g. If the current branch has length 5, [34 23 3] -> [34 23 5].
 */
go.vector_tree.end_of_branch = (function go$vector_tree$end_of_branch(tree,position){
return cljs.core.conj.call(null,cljs.core.pop.call(null,position),(cljs.core.count.call(null,go.vector_tree.current_branch.call(null,tree,position)) - (1)));
});
/**
 * True if the given position is a branch point
 */
go.vector_tree.branch_point_QMARK_ = (function go$vector_tree$branch_point_QMARK_(tree,position){
return cljs.core.vector_QMARK_.call(null,cljs.core.get_in.call(null,tree,position));
});
/**
 * Return the index of the last common element in the branch.
 */
go.vector_tree.get_branch_node = (function go$vector_tree$get_branch_node(branch){
while(true){
if(cljs.core.vector_QMARK_.call(null,cljs.core.last.call(null,branch))){
var G__2906 = cljs.core.pop.call(null,branch);
branch = G__2906;
continue;
} else {
return (cljs.core.count.call(null,branch) - (1));
}
break;
}
});
/**
 * Get the previous position going up the tree.
 */
go.vector_tree.previous_position = (function go$vector_tree$previous_position(tree,position){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,position))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4219__auto__ = (0);
var y__4220__auto__ = (cljs.core.last.call(null,position) - (1));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()], null);
} else {
if(cljs.core._EQ_.call(null,(0),cljs.core.last.call(null,position))){
return cljs.core.conj.call(null,cljs.core.pop.call(null,cljs.core.pop.call(null,position)),go.vector_tree.get_branch_node.call(null,cljs.core.get_in.call(null,tree,cljs.core.pop.call(null,cljs.core.pop.call(null,position)))));
} else {
return cljs.core.update.call(null,position,(cljs.core.count.call(null,position) - (1)),cljs.core.dec);

}
}
});
/**
 * Get the next position, going down the tree.
 *   If position is at a branch point, go into the first created child branch.
 */
go.vector_tree.next_position = (function go$vector_tree$next_position(tree,position){
var next_pos = cljs.core.update_in.call(null,position,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count.call(null,position) - (1))], null),cljs.core.inc);
if(cljs.core._EQ_.call(null,go.vector_tree.end_of_branch.call(null,tree,position),position)){
return position;
} else {
if(go.vector_tree.branch_point_QMARK_.call(null,tree,next_pos)){
return cljs.core.conj.call(null,next_pos,(0));
} else {
return next_pos;

}
}
});
/**
 * True if the index represents the last position in the vector
 */
go.vector_tree.last_index_in_vector_QMARK_ = (function go$vector_tree$last_index_in_vector_QMARK_(index,vect){
return cljs.core._EQ_.call(null,(cljs.core.count.call(null,vect) - (1)),index);
});
/**
 * True if the index is the last element, or if the next element is a vector..
 * E.g. with index 3, [0 1 2 3 [4 5] [6 7]] is true.
 */
go.vector_tree.last_common_branch_element_QMARK_ = (function go$vector_tree$last_common_branch_element_QMARK_(index,v){
return ((go.vector_tree.last_index_in_vector_QMARK_.call(null,index,v)) || (cljs.core.vector_QMARK_.call(null,v.call(null,(index + (1))))));
});
/**
 * The enclosing vector of the new branched vector.
 * Position here should just be a scalar.
 * Takes [1 2 3 4 5] with position 1 to [1 2 [3 4 5]].
 */
go.vector_tree.branched_vector = (function go$vector_tree$branched_vector(enclosing_vector,position){
var branch_start = (position + (1));
return cljs.core.conj.call(null,cljs.core.subvec.call(null,enclosing_vector,(0),branch_start),cljs.core.subvec.call(null,enclosing_vector,branch_start));
});
/**
 * True if two positions are in the same sub-branch.
 * One being in a child branch of the other doesn't count.
 */
go.vector_tree.in_same_branch_QMARK_ = (function go$vector_tree$in_same_branch_QMARK_(pos1,pos2){
return cljs.core._EQ_.call(null,cljs.core.drop_last.call(null,pos1),cljs.core.drop_last.call(null,pos2));
});
/**
 * True if the tree contains an element at position.
 * Tree is a vector-based tree, position is a get-in type vector.
 */
go.vector_tree.tree_contains_QMARK_ = (function go$vector_tree$tree_contains_QMARK_(tree,position){
if(cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,position))){
return true;
} else {
if((!(cljs.core.coll_QMARK_.call(null,tree)))){
return false;
} else {
if(cljs.core.contains_QMARK_.call(null,tree,cljs.core.first.call(null,position))){
return go.vector_tree.tree_contains_QMARK_.call(null,tree.call(null,cljs.core.first.call(null,position)),cljs.core.rest.call(null,position));
} else {
return false;

}
}
}
});
/**
 * Position of the next sibling branch.
 */
go.vector_tree.position_down_parallel_branch = (function go$vector_tree$position_down_parallel_branch(tree,position){
if((cljs.core.count.call(null,position) >= (2))){
var new_position = cljs.core.update.call(null,position,(cljs.core.count.call(null,position) - (2)),cljs.core.inc);
if(cljs.core.truth_(go.vector_tree.tree_contains_QMARK_.call(null,tree,new_position))){
return new_position;
} else {
return position;
}
} else {
return position;
}
});
/**
 * Position of the next sibling branch.
 */
go.vector_tree.position_up_parallel_branch = (function go$vector_tree$position_up_parallel_branch(tree,position){
if((cljs.core.count.call(null,position) >= (2))){
var new_position = cljs.core.update.call(null,position,(cljs.core.count.call(null,position) - (2)),cljs.core.dec);
if(cljs.core.truth_(go.vector_tree.tree_contains_QMARK_.call(null,tree,new_position))){
return new_position;
} else {
return position;
}
} else {
return position;
}
});
/**
 * Search for item in same position in all parallel branches.
 * Return first occurence of item.
 * item-eq-fn [item tree-node] should compare the equality of the item searched for
 * and the elements of the tree.
 */
go.vector_tree.tree_parallel_search = (function go$vector_tree$tree_parallel_search(var_args){
var G__2908 = arguments.length;
switch (G__2908) {
case 4:
return go.vector_tree.tree_parallel_search.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return go.vector_tree.tree_parallel_search.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

go.vector_tree.tree_parallel_search.cljs$core$IFn$_invoke$arity$4 = (function (tree,position,item,item_eq_fn){
while(true){
if(cljs.core.truth_(item_eq_fn.call(null,item,cljs.core.get_in.call(null,tree,position)))){
return position;
} else {
var next_pos = go.vector_tree.position_down_parallel_branch.call(null,tree,position);
if(cljs.core._EQ_.call(null,position,next_pos)){
return null;
} else {
var G__2910 = tree;
var G__2911 = next_pos;
var G__2912 = item;
var G__2913 = item_eq_fn;
tree = G__2910;
position = G__2911;
item = G__2912;
item_eq_fn = G__2913;
continue;
}
}
break;
}
});

go.vector_tree.tree_parallel_search.cljs$core$IFn$_invoke$arity$3 = (function (tree,position,item){
return go.vector_tree.tree_parallel_search.call(null,tree,position,item,cljs.core._EQ_);
});

go.vector_tree.tree_parallel_search.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=vector_tree.js.map
