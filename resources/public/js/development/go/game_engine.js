// Compiled by ClojureScript 1.10.520 {}
goog.provide('go.game_engine');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('go.game_state');
go.game_engine.empty_color = (0);
/**
 * Return a new empty game board
 */
go.game_engine.get_empty_board = (function go$game_engine$get_empty_board(size){
return cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.first.call(null,size),cljs.core.repeat.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.second.call(null,size),cljs.core.repeat.call(null,(0)))))));
});
/**
 * Convert numbers to readable description of the stone in an intersection
 */
go.game_engine.num_to_stone_name = (function go$game_engine$num_to_stone_name(intersection_num){
return new cljs.core.PersistentArrayMap(null, 3, [(0),"empty",(1),"b",(2),"w"], null).call(null,intersection_num);
});
go.game_engine.stone_name_to_num = (function go$game_engine$stone_name_to_num(stone_name){

return new cljs.core.PersistentArrayMap(null, 3, ["empty",(0),"b",(1),"w",(2)], null).call(null,stone_name);
});
/**
 * Convert numbers to names across the entire board
 */
go.game_engine.board_nums_to_names = (function go$game_engine$board_nums_to_names(board){
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,go.game_engine.num_to_stone_name),board);
});
/**
 * Return a randomized board of given size
 */
go.game_engine.create_test_board = (function go$game_engine$create_test_board(size){
return cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.first.call(null,size),cljs.core.repeatedly.call(null,(function (){
return cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.second.call(null,size),cljs.core.repeatedly.call(null,cljs.core.partial.call(null,cljs.core.rand_int,(3)))));
}))));
});
go.game_engine.board_dimensions = (function go$game_engine$board_dimensions(board){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,board),cljs.core.count.call(null,cljs.core.first.call(null,board))], null);
});
/**
 * Convert to 0 based coordinates from 1 based
 */
go.game_engine.convert_location = (function go$game_engine$convert_location(location){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__2995_SHARP_){
return (p1__2995_SHARP_ - (1));
}),location));
});
/**
 * Place a stone on an intersection
 */
go.game_engine.set_intersection = (function go$game_engine$set_intersection(location,color,board){
return cljs.core.assoc_in.call(null,board,location,color);
});
/**
 * Return the value of the location
 */
go.game_engine.get_intersection_value = (function go$game_engine$get_intersection_value(location,board){
return cljs.core.get_in.call(null,board,location);
});
/**
 * True if the given location is empty
 */
go.game_engine.is_empty_intersection_QMARK_ = (function go$game_engine$is_empty_intersection_QMARK_(board,location){
return cljs.core._EQ_.call(null,go.game_engine.get_intersection_value.call(null,location,board),(0));
});
go.game_engine.is_enemy_intersection_QMARK_ = (function go$game_engine$is_enemy_intersection_QMARK_(board,location,color){

return (!(((go.game_engine.is_empty_intersection_QMARK_.call(null,board,location)) || (cljs.core._EQ_.call(null,color,go.game_engine.get_intersection_value.call(null,location,board))))));
});
/**
 * Return lower bound from bounds
 */
go.game_engine.lower_bound = (function go$game_engine$lower_bound(bounds){
return cljs.core.first.call(null,bounds);
});
/**
 * Return upper bound from bounds
 */
go.game_engine.upper_bound = (function go$game_engine$upper_bound(bounds){
return cljs.core.second.call(null,bounds);
});
/**
 * Determine whether location is within given inclusive bounds
 */
go.game_engine.location_within_bounds_QMARK_ = (function go$game_engine$location_within_bounds_QMARK_(bounds,location){
return cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__2997_SHARP_,p2__2996_SHARP_){
return (((go.game_engine.lower_bound.call(null,p2__2996_SHARP_) <= p1__2997_SHARP_)) && ((p1__2997_SHARP_ <= go.game_engine.upper_bound.call(null,p2__2996_SHARP_))));
}),location,bounds));
});
/**
 * Return the possible locations of all connected intersections
 */
go.game_engine.get_possible_connected_locations = (function go$game_engine$get_possible_connected_locations(location){
var iter__4523__auto__ = (function go$game_engine$get_possible_connected_locations_$_iter__2998(s__2999){
return (new cljs.core.LazySeq(null,(function (){
var s__2999__$1 = s__2999;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__2999__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var x = cljs.core.first.call(null,xs__6308__auto__);
var iterys__4519__auto__ = ((function (s__2999__$1,x,xs__6308__auto__,temp__5753__auto__){
return (function go$game_engine$get_possible_connected_locations_$_iter__2998_$_iter__3000(s__3001){
return (new cljs.core.LazySeq(null,((function (s__2999__$1,x,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__3001__$1 = s__3001;
while(true){
var temp__5753__auto____$1 = cljs.core.seq.call(null,s__3001__$1);
if(temp__5753__auto____$1){
var s__3001__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3001__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3001__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3003 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3002 = (0);
while(true){
if((i__3002 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__3002);
if(((((cljs.core._EQ_.call(null,(0),x)) || (cljs.core._EQ_.call(null,(0),y)))) && ((!(cljs.core._EQ_.call(null,x,y,(0))))))){
cljs.core.chunk_append.call(null,b__3003,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + cljs.core.first.call(null,location)),(y + cljs.core.second.call(null,location))], null));

var G__3004 = (i__3002 + (1));
i__3002 = G__3004;
continue;
} else {
var G__3005 = (i__3002 + (1));
i__3002 = G__3005;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3003),go$game_engine$get_possible_connected_locations_$_iter__2998_$_iter__3000.call(null,cljs.core.chunk_rest.call(null,s__3001__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3003),null);
}
} else {
var y = cljs.core.first.call(null,s__3001__$2);
if(((((cljs.core._EQ_.call(null,(0),x)) || (cljs.core._EQ_.call(null,(0),y)))) && ((!(cljs.core._EQ_.call(null,x,y,(0))))))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + cljs.core.first.call(null,location)),(y + cljs.core.second.call(null,location))], null),go$game_engine$get_possible_connected_locations_$_iter__2998_$_iter__3000.call(null,cljs.core.rest.call(null,s__3001__$2)));
} else {
var G__3006 = cljs.core.rest.call(null,s__3001__$2);
s__3001__$1 = G__3006;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__2999__$1,x,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__2999__$1,x,xs__6308__auto__,temp__5753__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,go$game_engine$get_possible_connected_locations_$_iter__2998.call(null,cljs.core.rest.call(null,s__2999__$1)));
} else {
var G__3007 = cljs.core.rest.call(null,s__2999__$1);
s__2999__$1 = G__3007;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null));
});
/**
 * Return the locations of all connected intersections
 */
go.game_engine.get_connected_locations = (function go$game_engine$get_connected_locations(location,board){
var vec__3008 = go.game_engine.board_dimensions.call(null,board);
var rows = cljs.core.nth.call(null,vec__3008,(0),null);
var columns = cljs.core.nth.call(null,vec__3008,(1),null);
var bounds = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(rows - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(columns - (1))], null)], null);
return cljs.core.filter.call(null,cljs.core.partial.call(null,go.game_engine.location_within_bounds_QMARK_,bounds),go.game_engine.get_possible_connected_locations.call(null,location));
});
go.game_engine.get_enemy_neighbors = (function go$game_engine$get_enemy_neighbors(board,location,color){

return cljs.core.filter.call(null,(function (p1__3011_SHARP_){
return go.game_engine.is_enemy_intersection_QMARK_.call(null,board,p1__3011_SHARP_,color);
}),go.game_engine.get_connected_locations.call(null,location,board));
});
/**
 * Draw (or return, for now) a board highlighting a collection of intersections
 */
go.game_engine.highlight_group = (function go$game_engine$highlight_group(board,group){
return cljs.core.reduce.call(null,(function (p1__3012_SHARP_,p2__3013_SHARP_){
return cljs.core.assoc_in.call(null,p1__3012_SHARP_,p2__3013_SHARP_,new cljs.core.Symbol(null,"*","*",345799209,null));
}),board,group);
});
/**
 * Return the locations of all direct neighbors in the same group (i.e. of the same value)
 */
go.game_engine.get_neighbors_in_group = (function go$game_engine$get_neighbors_in_group(location,board){
var neighbor_locations = go.game_engine.get_connected_locations.call(null,location,board);
return cljs.core.filter.call(null,((function (neighbor_locations){
return (function (p1__3014_SHARP_){
return cljs.core._EQ_.call(null,go.game_engine.get_intersection_value.call(null,location,board),go.game_engine.get_intersection_value.call(null,p1__3014_SHARP_,board));
});})(neighbor_locations))
,neighbor_locations);
});
/**
 * Return values of all connected intersections.
 */
go.game_engine.get_connections = (function go$game_engine$get_connections(location,board){
return null;
});
/**
 * Return a set of all points in the same group as a given point.
 */
go.game_engine.get_group_from_point = cljs.core.memoize.call(null,(function() { 
var G__3020__delegate = function (location,board,p__3017){
var map__3018 = p__3017;
var map__3018__$1 = (((((!((map__3018 == null))))?(((((map__3018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3018):map__3018);
var group = cljs.core.get.call(null,map__3018__$1,new cljs.core.Keyword(null,"group","group",582596132),cljs.core.PersistentHashSet.EMPTY);
var neighbors_in_group = cljs.core.set.call(null,go.game_engine.get_neighbors_in_group.call(null,location,board));
var updated_total_group = clojure.set.union.call(null,group,neighbors_in_group,cljs.core.PersistentHashSet.createAsIfByAssoc([location]));
var remaining_neighbors = clojure.set.difference.call(null,neighbors_in_group,group);
return cljs.core.reduce.call(null,((function (neighbors_in_group,updated_total_group,remaining_neighbors,map__3018,map__3018__$1,group){
return (function (p1__3016_SHARP_,p2__3015_SHARP_){
return go.game_engine.get_group_from_point.call(null,p2__3015_SHARP_,board,new cljs.core.Keyword(null,"group","group",582596132),p1__3016_SHARP_);
});})(neighbors_in_group,updated_total_group,remaining_neighbors,map__3018,map__3018__$1,group))
,updated_total_group,remaining_neighbors);
};
var G__3020 = function (location,board,var_args){
var p__3017 = null;
if (arguments.length > 2) {
var G__3021__i = 0, G__3021__a = new Array(arguments.length -  2);
while (G__3021__i < G__3021__a.length) {G__3021__a[G__3021__i] = arguments[G__3021__i + 2]; ++G__3021__i;}
  p__3017 = new cljs.core.IndexedSeq(G__3021__a,0,null);
} 
return G__3020__delegate.call(this,location,board,p__3017);};
G__3020.cljs$lang$maxFixedArity = 2;
G__3020.cljs$lang$applyTo = (function (arglist__3022){
var location = cljs.core.first(arglist__3022);
arglist__3022 = cljs.core.next(arglist__3022);
var board = cljs.core.first(arglist__3022);
var p__3017 = cljs.core.rest(arglist__3022);
return G__3020__delegate(location,board,p__3017);
});
G__3020.cljs$core$IFn$_invoke$arity$variadic = G__3020__delegate;
return G__3020;
})()
);
go.game_engine.get_enemy_neighbor_groups = (function go$game_engine$get_enemy_neighbor_groups(board,location,color){

return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__3023_SHARP_){
return go.game_engine.get_group_from_point.call(null,p1__3023_SHARP_,board);
}),go.game_engine.get_enemy_neighbors.call(null,board,location,color)));
});
/**
 * Name groups from connections
 */
go.game_engine.get_group_name = (function go$game_engine$get_group_name(board){
return null;
});
/**
 * Return a board with positions naming groups
 */
go.game_engine.get_group_board = (function go$game_engine$get_group_board(board){
return cljs.core.map.call(null,cljs.core.comp.call(null,go.game_engine.get_group_name,go.game_engine.get_connections),board);
});
/**
 * Return the empty intersections in a collection of locations.
 */
go.game_engine.find_empty_intersections = (function go$game_engine$find_empty_intersections(board,intersections){
return cljs.core.filter.call(null,cljs.core.partial.call(null,go.game_engine.is_empty_intersection_QMARK_,board),intersections);
});
/**
 * Return a count of the empty intersections in a collection of locations
 */
go.game_engine.count_empty_intersections = (function go$game_engine$count_empty_intersections(board,intersections){
return cljs.core.count.call(null,go.game_engine.find_empty_intersections.call(null,board,intersections));
});
/**
 * Return the locations of the immediate neighbors of a group
 */
go.game_engine.get_group_neighbors = (function go$game_engine$get_group_neighbors(board,group){
var group_with_neighbors = cljs.core.apply.call(null,clojure.set.union,cljs.core.map.call(null,(function (p1__3024_SHARP_){
return cljs.core.set.call(null,go.game_engine.get_connected_locations.call(null,p1__3024_SHARP_,board));
}),group));
var neighbors_only = clojure.set.difference.call(null,group_with_neighbors,cljs.core.set.call(null,group));
return neighbors_only;
});
/**
 * Get the liberties for a given group
 */
go.game_engine.get_group_liberties = (function go$game_engine$get_group_liberties(board,group){
return go.game_engine.find_empty_intersections.call(null,board,go.game_engine.get_group_neighbors.call(null,board,group));
});
/**
 * Get the group liberty count
 */
go.game_engine.count_group_liberties = (function go$game_engine$count_group_liberties(board,group){
return cljs.core.count.call(null,go.game_engine.get_group_liberties.call(null,board,group));
});
go.game_engine.dead_group_QMARK_ = (function go$game_engine$dead_group_QMARK_(board,group){

return cljs.core._EQ_.call(null,(0),go.game_engine.count_group_liberties.call(null,board,group));
});
go.game_engine.get_point_liberties = (function go$game_engine$get_point_liberties(board,location){

return go.game_engine.get_group_liberties.call(null,board,go.game_engine.get_group_from_point.call(null,location,board));
});
go.game_engine.count_point_liberties = (function go$game_engine$count_point_liberties(board,location){

return go.game_engine.count_group_liberties.call(null,board,go.game_engine.get_group_from_point.call(null,location,board));
});
go.game_engine.dead_stone_QMARK_ = (function go$game_engine$dead_stone_QMARK_(board,location){

return cljs.core._EQ_.call(null,(0),go.game_engine.count_point_liberties.call(null,board,location));
});
go.game_engine.any_dead_stones_QMARK_ = (function go$game_engine$any_dead_stones_QMARK_(board,locations){

return (cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,go.game_engine.dead_stone_QMARK_,board),locations)) > (0));
});
/**
 * Update the liberties of every group in the board
 */
go.game_engine.get_all_liberties = (function go$game_engine$get_all_liberties(board){
return null;
});
go.game_engine.capture_group = (function go$game_engine$capture_group(board,group){

return cljs.core.reduce.call(null,(function (p1__3026_SHARP_,p2__3025_SHARP_){
return go.game_engine.set_intersection.call(null,p2__3025_SHARP_,go.game_engine.empty_color,p1__3026_SHARP_);
}),board,group);
});
go.game_engine.capture_stones = (function go$game_engine$capture_stones(board,location,color){
var temp_board = go.game_engine.set_intersection.call(null,location,color,board);
var enemy_groups = go.game_engine.get_enemy_neighbor_groups.call(null,temp_board,location,color);
var dead_groups = cljs.core.filter.call(null,cljs.core.partial.call(null,go.game_engine.dead_group_QMARK_,temp_board),enemy_groups);
return cljs.core.reduce.call(null,cljs.core.partial.call(null,go.game_engine.capture_group),temp_board,dead_groups);
});
go.game_engine.captured_enemy_QMARK_ = (function go$game_engine$captured_enemy_QMARK_(board,location,color){
var neighbors = go.game_engine.get_connected_locations.call(null,location,board);
var enemy_neighbors = cljs.core.filter.call(null,((function (neighbors){
return (function (p1__3027_SHARP_){
return go.game_engine.is_enemy_intersection_QMARK_.call(null,board,p1__3027_SHARP_,color);
});})(neighbors))
,neighbors);
return go.game_engine.any_dead_stones_QMARK_.call(null,board,enemy_neighbors);
});
go.game_engine.is_valid_move_QMARK_ = (function go$game_engine$is_valid_move_QMARK_(board,location,color){
var temp_board = go.game_engine.set_intersection.call(null,location,color,board);
var point_liberties = go.game_engine.count_point_liberties.call(null,temp_board,location);
return ((go.game_engine.is_empty_intersection_QMARK_.call(null,board,location)) && ((((point_liberties > (0))) || (go.game_engine.captured_enemy_QMARK_.call(null,temp_board,location,color)))));
});
/**
 * Place the stone
 */
go.game_engine.place_stone = (function go$game_engine$place_stone(board,location,color){
return go.game_engine.set_intersection.call(null,location,color,go.game_engine.capture_stones.call(null,board,location,color));
});
go.game_engine.make_move = (function go$game_engine$make_move(board,location,color){

if(go.game_engine.is_valid_move_QMARK_.call(null,board,location,color)){
return go.game_engine.place_stone.call(null,board,location,color);
} else {
return null;
}
});
/**
 * Create a move map from the location and color
 */
go.game_engine.create_single_move = (function go$game_engine$create_single_move(location,color){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"location","location",1815599388),location,new cljs.core.Keyword(null,"color","color",1011675173),color], null);
});
/**
 * Handle a move from the GUI, including updating the game-state.
 * Return the updated game-state.
 */
go.game_engine.handle_move = (function go$game_engine$handle_move(game_state,location,color){
var move = go.game_engine.create_single_move.call(null,location,color);
var temp__5751__auto__ = go.game_state.advance_if_next_move.call(null,game_state,move);
if(cljs.core.truth_(temp__5751__auto__)){
var advanced_game_state = temp__5751__auto__;
return advanced_game_state;
} else {
var temp__5751__auto____$1 = go.game_engine.make_move.call(null,go.game_state.get_current_board.call(null,game_state),location,color);
if(cljs.core.truth_(temp__5751__auto____$1)){
var new_board = temp__5751__auto____$1;
return go.game_state.add_move.call(null,game_state,move,new_board);
} else {
return game_state;
}
}
});

//# sourceMappingURL=game_engine.js.map
