// Compiled by ClojureScript 1.10.520 {}
goog.provide('go.game_state');
goog.require('cljs.core');
goog.require('go.vector_tree');
/**
 * Return a new empty game board
 */
go.game_state.get_empty_board = (function go$game_state$get_empty_board(size){
return cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.first.call(null,size),cljs.core.repeat.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.second.call(null,size),cljs.core.repeat.call(null,(0)))))));
});
/**
 * Return a position pointing to the end of the current branch.
 * E.g. If the current branch has length 5, [34 23 3] -> [34 23 5].
 */
go.game_state.end_of_branch = (function go$game_state$end_of_branch(game_state){
var map__2974 = game_state;
var map__2974__$1 = (((((!((map__2974 == null))))?(((((map__2974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2974):map__2974);
var history = cljs.core.get.call(null,map__2974__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var position = cljs.core.get.call(null,map__2974__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return go.vector_tree.end_of_branch.call(null,history,position);
});
/**
 * Return the current state from the game history.
 */
go.game_state.get_current_state = (function go$game_state$get_current_state(game_state){
var map__2976 = game_state;
var map__2976__$1 = (((((!((map__2976 == null))))?(((((map__2976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2976):map__2976);
var history = cljs.core.get.call(null,map__2976__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var position = cljs.core.get.call(null,map__2976__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return cljs.core.get_in.call(null,history,position);
});
/**
 * Return the state or branch at a supplied position.
 */
go.game_state.get_state_at_position = (function go$game_state$get_state_at_position(game_state,position){
return cljs.core.get_in.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(game_state),position);
});
/**
 * Return the current gameboard from the game history.
 */
go.game_state.get_current_board = (function go$game_state$get_current_board(game_state){
return new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(go.game_state.get_current_state.call(null,game_state));
});
/**
 * Return the last move from the current path.
 */
go.game_state.get_last_move = (function go$game_state$get_last_move(game_state){
return new cljs.core.Keyword(null,"last-move","last-move",2069214404).cljs$core$IFn$_invoke$arity$1(go.game_state.get_current_state.call(null,game_state));
});
/**
 * Return the last move at a specific position in history.
 */
go.game_state.get_move_at_position = (function go$game_state$get_move_at_position(game_state,position){
return new cljs.core.Keyword(null,"last-move","last-move",2069214404).cljs$core$IFn$_invoke$arity$1(go.game_state.get_state_at_position.call(null,game_state,position));
});
/**
 * Compares the move from a board state to the given move.
 */
go.game_state.matches_move_QMARK_ = (function go$game_state$matches_move_QMARK_(move,board_state){
return cljs.core._EQ_.call(null,move,new cljs.core.Keyword(null,"last-move","last-move",2069214404).cljs$core$IFn$_invoke$arity$1(board_state));
});
/**
 * Get the previous state along this branch.
 */
go.game_state.move_to_previous_state = (function go$game_state$move_to_previous_state(game_state){
var map__2978 = game_state;
var map__2978__$1 = (((((!((map__2978 == null))))?(((((map__2978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2978):map__2978);
var history = cljs.core.get.call(null,map__2978__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var position = cljs.core.get.call(null,map__2978__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return cljs.core.assoc.call(null,game_state,new cljs.core.Keyword(null,"position","position",-2011731912),go.vector_tree.previous_position.call(null,history,position));
});
/**
 * Create an empty game-state.
 */
go.game_state.create_game_state = (function go$game_state$create_game_state(var_args){
var G__2981 = arguments.length;
switch (G__2981) {
case 1:
return go.game_state.create_game_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return go.game_state.create_game_state.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

go.game_state.create_game_state.cljs$core$IFn$_invoke$arity$1 = (function (size){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),go.game_state.get_empty_board.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [size,size], null)),new cljs.core.Keyword(null,"last-move","last-move",2069214404),null], null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)], null);
});

go.game_state.create_game_state.cljs$core$IFn$_invoke$arity$0 = (function (){
return go.game_state.create_game_state.call(null,(19));
});

go.game_state.create_game_state.cljs$lang$maxFixedArity = 1;

/**
 * Move the position to the next state in the branch, or hold here if final.
 */
go.game_state.move_to_next_state = (function go$game_state$move_to_next_state(game_state){
var map__2983 = game_state;
var map__2983__$1 = (((((!((map__2983 == null))))?(((((map__2983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2983):map__2983);
var history = cljs.core.get.call(null,map__2983__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var position = cljs.core.get.call(null,map__2983__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return cljs.core.assoc.call(null,game_state,new cljs.core.Keyword(null,"position","position",-2011731912),go.vector_tree.next_position.call(null,history,position));
});
/**
 * Create a branch point at the current location in the game state history.
 * Only create the branch if the element pointed to by (:position game-state) is not
 * the last element of its branch. Create an empty branch and point position to it.
 * Note: the position returned from make-branch will always be right after
 * the last element, so settable but not gettable.
 */
go.game_state.make_branch = (function go$game_state$make_branch(game_state){
var map__2989 = game_state;
var map__2989__$1 = (((((!((map__2989 == null))))?(((((map__2989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2989):map__2989);
var history = cljs.core.get.call(null,map__2989__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var position = cljs.core.get.call(null,map__2989__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var enclosing_vector_position = cljs.core.pop.call(null,position);
var enclosing_vector = cljs.core.get_in.call(null,history,enclosing_vector_position);
if(go.vector_tree.last_index_in_vector_QMARK_.call(null,cljs.core.last.call(null,position),enclosing_vector)){
return cljs.core.assoc.call(null,game_state,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.update.call(null,go.game_state.end_of_branch.call(null,game_state),(cljs.core.count.call(null,go.game_state.end_of_branch.call(null,game_state)) - (1)),cljs.core.inc));
} else {
if(go.vector_tree.last_common_branch_element_QMARK_.call(null,cljs.core.last.call(null,position),enclosing_vector)){
cljs.core.print.call(null,["enclosing-vector-position",cljs.core.str.cljs$core$IFn$_invoke$arity$1(enclosing_vector_position)].join(''));

return ((function (map__2989,map__2989__$1,history,position,enclosing_vector_position,enclosing_vector){
return (function (p1__2986_SHARP_){
return cljs.core.assoc.call(null,p1__2986_SHARP_,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.conj.call(null,go.game_state.end_of_branch.call(null,p1__2986_SHARP_),(0)));
});})(map__2989,map__2989__$1,history,position,enclosing_vector_position,enclosing_vector))
.call(null,cljs.core.assoc.call(null,game_state,new cljs.core.Keyword(null,"history","history",-247395220),((cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,enclosing_vector_position)))?cljs.core.conj.call(null,history,cljs.core.PersistentVector.EMPTY):cljs.core.update_in.call(null,history,enclosing_vector_position,((function (map__2989,map__2989__$1,history,position,enclosing_vector_position,enclosing_vector){
return (function (p1__2985_SHARP_){
return cljs.core.conj.call(null,p1__2985_SHARP_,cljs.core.PersistentVector.EMPTY);
});})(map__2989,map__2989__$1,history,position,enclosing_vector_position,enclosing_vector))
))));
} else {
return ((function (map__2989,map__2989__$1,history,position,enclosing_vector_position,enclosing_vector){
return (function (p1__2988_SHARP_){
return cljs.core.assoc.call(null,p1__2988_SHARP_,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.conj.call(null,go.game_state.end_of_branch.call(null,p1__2988_SHARP_),(0)));
});})(map__2989,map__2989__$1,history,position,enclosing_vector_position,enclosing_vector))
.call(null,cljs.core.assoc.call(null,game_state,new cljs.core.Keyword(null,"history","history",-247395220),((cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,enclosing_vector_position)))?cljs.core.conj.call(null,go.vector_tree.branched_vector.call(null,enclosing_vector,cljs.core.last.call(null,position)),cljs.core.PersistentVector.EMPTY):cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,history,enclosing_vector_position,go.vector_tree.branched_vector.call(null,enclosing_vector,cljs.core.last.call(null,position))),enclosing_vector_position,((function (map__2989,map__2989__$1,history,position,enclosing_vector_position,enclosing_vector){
return (function (p1__2987_SHARP_){
return cljs.core.conj.call(null,p1__2987_SHARP_,cljs.core.PersistentVector.EMPTY);
});})(map__2989,map__2989__$1,history,position,enclosing_vector_position,enclosing_vector))
))));

}
}
});
/**
 * Move down to the next sibling branch.
 */
go.game_state.move_down_parallel_branch = (function go$game_state$move_down_parallel_branch(game_state){
return cljs.core.assoc.call(null,game_state,new cljs.core.Keyword(null,"position","position",-2011731912),go.vector_tree.position_down_parallel_branch.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(game_state),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(game_state)));
});
/**
 * Move down to the next sibling branch.
 */
go.game_state.move_up_parallel_branch = (function go$game_state$move_up_parallel_branch(game_state){
return cljs.core.assoc.call(null,game_state,new cljs.core.Keyword(null,"position","position",-2011731912),go.vector_tree.position_up_parallel_branch.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(game_state),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(game_state)));
});
/**
 * Find the position of the given move, if it's the next move in the branch (or its children).
 */
go.game_state.find_move_if_next = (function go$game_state$find_move_if_next(game_state,move){
var map__2991 = game_state;
var map__2991__$1 = (((((!((map__2991 == null))))?(((((map__2991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2991):map__2991);
var history = cljs.core.get.call(null,map__2991__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var position = cljs.core.get.call(null,map__2991__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var next_pos = go.vector_tree.next_position.call(null,history,position);
if((!(go.vector_tree.in_same_branch_QMARK_.call(null,position,next_pos)))){
return go.vector_tree.tree_parallel_search.call(null,history,next_pos,move,go.game_state.matches_move_QMARK_);
} else {
if(cljs.core._EQ_.call(null,move,go.game_state.get_move_at_position.call(null,game_state,next_pos))){
return next_pos;
} else {
return null;

}
}
});
/**
 * If the given move is the next move in the branch (or its children), advance to it.
 */
go.game_state.advance_if_next_move = (function go$game_state$advance_if_next_move(game_state,move){
var temp__5751__auto__ = go.game_state.find_move_if_next.call(null,game_state,move);
if(cljs.core.truth_(temp__5751__auto__)){
var move_position = temp__5751__auto__;
return cljs.core.assoc.call(null,game_state,new cljs.core.Keyword(null,"position","position",-2011731912),move_position);
} else {
return null;
}
});
/**
 * Add a new move to the game state history.
 */
go.game_state.add_move = (function go$game_state$add_move(game_state,move,board){
cljs.core.println.call(null,"add-move ",move);

var new_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),board,new cljs.core.Keyword(null,"last-move","last-move",2069214404),move], null);
var branched_game_state = go.game_state.make_branch.call(null,game_state);
var temp__5751__auto__ = go.game_state.advance_if_next_move.call(null,game_state,move);
if(cljs.core.truth_(temp__5751__auto__)){
var new_game_state = temp__5751__auto__;
return new_game_state;
} else {
return cljs.core.assoc.call(null,branched_game_state,new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.assoc_in.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(branched_game_state),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(branched_game_state),new_state));
}
});

//# sourceMappingURL=game_state.js.map
