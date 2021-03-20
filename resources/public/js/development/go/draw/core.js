// Compiled by ClojureScript 1.10.520 {}
goog.provide('go.draw.core');
goog.require('cljs.core');
goog.require('go.game_engine');
goog.require('go.game_state');
goog.require('quil.core');
goog.require('quil.middleware');
go.draw.core.stone_size = (50);
go.draw.core.board_size = (950);
go.draw.core.board_top = (25);
go.draw.core.board_left = (25);
go.draw.core.board_size_x = (19);
go.draw.core.board_size_y = (19);
go.draw.core.location_to_coords = (function go$draw$core$location_to_coords(p__34832){
var vec__34833 = p__34832;
var y_loc = cljs.core.nth.call(null,vec__34833,(0),null);
var x_loc = cljs.core.nth.call(null,vec__34833,(1),null);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(go.draw.core.board_left + (go.draw.core.stone_size * x_loc)),new cljs.core.Keyword(null,"y","y",-1757859776),(go.draw.core.board_top + (go.draw.core.stone_size * y_loc))], null);
});
go.draw.core.get_stones_from_board = (function go$draw$core$get_stones_from_board(board){

var black = (1);
var white = (2);
var vec__34836 = go.game_engine.board_dimensions.call(null,board);
var y_dim = cljs.core.nth.call(null,vec__34836,(0),null);
var x_dim = cljs.core.nth.call(null,vec__34836,(1),null);
return cljs.core.set.call(null,(function (){var iter__4523__auto__ = ((function (black,white,vec__34836,y_dim,x_dim){
return (function go$draw$core$get_stones_from_board_$_iter__34839(s__34840){
return (new cljs.core.LazySeq(null,((function (black,white,vec__34836,y_dim,x_dim){
return (function (){
var s__34840__$1 = s__34840;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__34840__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var x_loc = cljs.core.first.call(null,xs__6308__auto__);
var iterys__4519__auto__ = ((function (s__34840__$1,x_loc,xs__6308__auto__,temp__5753__auto__,black,white,vec__34836,y_dim,x_dim){
return (function go$draw$core$get_stones_from_board_$_iter__34839_$_iter__34841(s__34842){
return (new cljs.core.LazySeq(null,((function (s__34840__$1,x_loc,xs__6308__auto__,temp__5753__auto__,black,white,vec__34836,y_dim,x_dim){
return (function (){
var s__34842__$1 = s__34842;
while(true){
var temp__5753__auto____$1 = cljs.core.seq.call(null,s__34842__$1);
if(temp__5753__auto____$1){
var s__34842__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34842__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34842__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34844 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34843 = (0);
while(true){
if((i__34843 < size__4522__auto__)){
var y_loc = cljs.core._nth.call(null,c__4521__auto__,i__34843);
if((!(go.game_engine.is_empty_intersection_QMARK_.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y_loc,x_loc], null))))){
var coords = go.draw.core.location_to_coords.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y_loc,x_loc], null));
cljs.core.chunk_append.call(null,b__34844,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(coords),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(coords),new cljs.core.Keyword(null,"color","color",1011675173),go.game_engine.num_to_stone_name.call(null,go.game_engine.get_intersection_value.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y_loc,x_loc], null),board))], null));

var G__34845 = (i__34843 + (1));
i__34843 = G__34845;
continue;
} else {
var G__34846 = (i__34843 + (1));
i__34843 = G__34846;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34844),go$draw$core$get_stones_from_board_$_iter__34839_$_iter__34841.call(null,cljs.core.chunk_rest.call(null,s__34842__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34844),null);
}
} else {
var y_loc = cljs.core.first.call(null,s__34842__$2);
if((!(go.game_engine.is_empty_intersection_QMARK_.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y_loc,x_loc], null))))){
var coords = go.draw.core.location_to_coords.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y_loc,x_loc], null));
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(coords),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(coords),new cljs.core.Keyword(null,"color","color",1011675173),go.game_engine.num_to_stone_name.call(null,go.game_engine.get_intersection_value.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y_loc,x_loc], null),board))], null),go$draw$core$get_stones_from_board_$_iter__34839_$_iter__34841.call(null,cljs.core.rest.call(null,s__34842__$2)));
} else {
var G__34847 = cljs.core.rest.call(null,s__34842__$2);
s__34842__$1 = G__34847;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__34840__$1,x_loc,xs__6308__auto__,temp__5753__auto__,black,white,vec__34836,y_dim,x_dim))
,null,null));
});})(s__34840__$1,x_loc,xs__6308__auto__,temp__5753__auto__,black,white,vec__34836,y_dim,x_dim))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,y_dim)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,go$draw$core$get_stones_from_board_$_iter__34839.call(null,cljs.core.rest.call(null,s__34840__$1)));
} else {
var G__34848 = cljs.core.rest.call(null,s__34840__$1);
s__34840__$1 = G__34848;
continue;
}
} else {
return null;
}
break;
}
});})(black,white,vec__34836,y_dim,x_dim))
,null,null));
});})(black,white,vec__34836,y_dim,x_dim))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,x_dim));
})());
});
go.draw.core.next_color = (function go$draw$core$next_color(color){
if(cljs.core._EQ_.call(null,color,"b")){
return "w";
} else {
return "b";
}
});
go.draw.core.import_board = (function go$draw$core$import_board(state){

var board = go.game_state.get_current_board.call(null,new cljs.core.Keyword(null,"game-state","game-state",935682735).cljs$core$IFn$_invoke$arity$1(state));
var last_color = go.game_engine.num_to_stone_name.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(go.game_state.get_last_move.call(null,new cljs.core.Keyword(null,"game-state","game-state",935682735).cljs$core$IFn$_invoke$arity$1(state))));
if(cljs.core.truth_(board)){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"stones","stones",2138534597),go.draw.core.get_stones_from_board.call(null,board),new cljs.core.Keyword(null,"color","color",1011675173),go.draw.core.next_color.call(null,last_color));
} else {
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"error","error",-978969032),true);
}
});
go.draw.core.coords_to_location = (function go$draw$core$coords_to_location(coords){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(coords) - go.draw.core.board_top) / go.draw.core.stone_size) | (0)),(((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(coords) - go.draw.core.board_left) / go.draw.core.stone_size) | (0))], null);
});
go.draw.core.add_stone_to_board = (function go$draw$core$add_stone_to_board(board,stone){

return go.game_engine.set_intersection.call(null,go.draw.core.coords_to_location.call(null,stone),go.game_engine.stone_name_to_num.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(stone)),board);
});
go.draw.core.get_board_from_stones = (function go$draw$core$get_board_from_stones(stones){

return cljs.core.reduce.call(null,go.draw.core.add_stone_to_board,go.game_engine.get_empty_board.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [go.draw.core.board_size_y,go.draw.core.board_size_x], null)),stones);
});
go.draw.core.export_board = (function go$draw$core$export_board(state){

return go.draw.core.get_board_from_stones.call(null,new cljs.core.Keyword(null,"stones","stones",2138534597).cljs$core$IFn$_invoke$arity$1(state));
});
go.draw.core.nearest_grid_point = (function go$draw$core$nearest_grid_point(loc){

var x = loc.call(null,(0));
var y = loc.call(null,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((function (x,y){
return (function (p1__34849_SHARP_){
return (p1__34849_SHARP_ - cljs.core.mod.call(null,p1__34849_SHARP_,go.draw.core.stone_size));
});})(x,y))
.call(null,(((x + (go.draw.core.stone_size / (2))) + (- go.draw.core.board_left)) | (0))) + go.draw.core.board_top),(((function (x,y){
return (function (p1__34850_SHARP_){
return (p1__34850_SHARP_ - cljs.core.mod.call(null,p1__34850_SHARP_,go.draw.core.stone_size));
});})(x,y))
.call(null,(((y + (go.draw.core.stone_size / (2))) + (- go.draw.core.board_top)) | (0))) + go.draw.core.board_top)], null);
});
/**
 * Switch the current color if a valid move was made
 */
go.draw.core.switch_color = (function go$draw$core$switch_color(state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(state))){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"color","color",1011675173),go.draw.core.next_color);
}
});
go.draw.core.setup = (function go$draw$core$setup(size){
quil.core.background.call(null,(255));

quil.core.frame_rate.call(null,(30));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"game-state","game-state",935682735),go.game_state.create_game_state.call(null,size),new cljs.core.Keyword(null,"color","color",1011675173),"b"], null);
});
go.draw.core.draw_board = (function go$draw$core$draw_board(){

quil.core.fill.call(null,(255),(255),(186));

var seq__34851_34875 = cljs.core.seq.call(null,cljs.core.range.call(null,go.draw.core.board_left,(go.draw.core.board_left + (go.draw.core.stone_size * (go.draw.core.board_size_x - (1)))),go.draw.core.stone_size));
var chunk__34856_34876 = null;
var count__34857_34877 = (0);
var i__34858_34878 = (0);
while(true){
if((i__34858_34878 < count__34857_34877)){
var x_34879 = cljs.core._nth.call(null,chunk__34856_34876,i__34858_34878);
var seq__34859_34880 = cljs.core.seq.call(null,cljs.core.range.call(null,go.draw.core.board_top,(go.draw.core.board_top + (go.draw.core.stone_size * (go.draw.core.board_size_x - (1)))),go.draw.core.stone_size));
var chunk__34860_34881 = null;
var count__34861_34882 = (0);
var i__34862_34883 = (0);
while(true){
if((i__34862_34883 < count__34861_34882)){
var y_34884 = cljs.core._nth.call(null,chunk__34860_34881,i__34862_34883);
quil.core.rect.call(null,x_34879,y_34884,go.draw.core.stone_size,go.draw.core.stone_size);


var G__34885 = seq__34859_34880;
var G__34886 = chunk__34860_34881;
var G__34887 = count__34861_34882;
var G__34888 = (i__34862_34883 + (1));
seq__34859_34880 = G__34885;
chunk__34860_34881 = G__34886;
count__34861_34882 = G__34887;
i__34862_34883 = G__34888;
continue;
} else {
var temp__5753__auto___34889 = cljs.core.seq.call(null,seq__34859_34880);
if(temp__5753__auto___34889){
var seq__34859_34890__$1 = temp__5753__auto___34889;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34859_34890__$1)){
var c__4550__auto___34891 = cljs.core.chunk_first.call(null,seq__34859_34890__$1);
var G__34892 = cljs.core.chunk_rest.call(null,seq__34859_34890__$1);
var G__34893 = c__4550__auto___34891;
var G__34894 = cljs.core.count.call(null,c__4550__auto___34891);
var G__34895 = (0);
seq__34859_34880 = G__34892;
chunk__34860_34881 = G__34893;
count__34861_34882 = G__34894;
i__34862_34883 = G__34895;
continue;
} else {
var y_34896 = cljs.core.first.call(null,seq__34859_34890__$1);
quil.core.rect.call(null,x_34879,y_34896,go.draw.core.stone_size,go.draw.core.stone_size);


var G__34897 = cljs.core.next.call(null,seq__34859_34890__$1);
var G__34898 = null;
var G__34899 = (0);
var G__34900 = (0);
seq__34859_34880 = G__34897;
chunk__34860_34881 = G__34898;
count__34861_34882 = G__34899;
i__34862_34883 = G__34900;
continue;
}
} else {
}
}
break;
}

var G__34901 = seq__34851_34875;
var G__34902 = chunk__34856_34876;
var G__34903 = count__34857_34877;
var G__34904 = (i__34858_34878 + (1));
seq__34851_34875 = G__34901;
chunk__34856_34876 = G__34902;
count__34857_34877 = G__34903;
i__34858_34878 = G__34904;
continue;
} else {
var temp__5753__auto___34905 = cljs.core.seq.call(null,seq__34851_34875);
if(temp__5753__auto___34905){
var seq__34851_34906__$1 = temp__5753__auto___34905;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34851_34906__$1)){
var c__4550__auto___34907 = cljs.core.chunk_first.call(null,seq__34851_34906__$1);
var G__34908 = cljs.core.chunk_rest.call(null,seq__34851_34906__$1);
var G__34909 = c__4550__auto___34907;
var G__34910 = cljs.core.count.call(null,c__4550__auto___34907);
var G__34911 = (0);
seq__34851_34875 = G__34908;
chunk__34856_34876 = G__34909;
count__34857_34877 = G__34910;
i__34858_34878 = G__34911;
continue;
} else {
var x_34912 = cljs.core.first.call(null,seq__34851_34906__$1);
var seq__34852_34913 = cljs.core.seq.call(null,cljs.core.range.call(null,go.draw.core.board_top,(go.draw.core.board_top + (go.draw.core.stone_size * (go.draw.core.board_size_x - (1)))),go.draw.core.stone_size));
var chunk__34853_34914 = null;
var count__34854_34915 = (0);
var i__34855_34916 = (0);
while(true){
if((i__34855_34916 < count__34854_34915)){
var y_34917 = cljs.core._nth.call(null,chunk__34853_34914,i__34855_34916);
quil.core.rect.call(null,x_34912,y_34917,go.draw.core.stone_size,go.draw.core.stone_size);


var G__34918 = seq__34852_34913;
var G__34919 = chunk__34853_34914;
var G__34920 = count__34854_34915;
var G__34921 = (i__34855_34916 + (1));
seq__34852_34913 = G__34918;
chunk__34853_34914 = G__34919;
count__34854_34915 = G__34920;
i__34855_34916 = G__34921;
continue;
} else {
var temp__5753__auto___34922__$1 = cljs.core.seq.call(null,seq__34852_34913);
if(temp__5753__auto___34922__$1){
var seq__34852_34923__$1 = temp__5753__auto___34922__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34852_34923__$1)){
var c__4550__auto___34924 = cljs.core.chunk_first.call(null,seq__34852_34923__$1);
var G__34925 = cljs.core.chunk_rest.call(null,seq__34852_34923__$1);
var G__34926 = c__4550__auto___34924;
var G__34927 = cljs.core.count.call(null,c__4550__auto___34924);
var G__34928 = (0);
seq__34852_34913 = G__34925;
chunk__34853_34914 = G__34926;
count__34854_34915 = G__34927;
i__34855_34916 = G__34928;
continue;
} else {
var y_34929 = cljs.core.first.call(null,seq__34852_34923__$1);
quil.core.rect.call(null,x_34912,y_34929,go.draw.core.stone_size,go.draw.core.stone_size);


var G__34930 = cljs.core.next.call(null,seq__34852_34923__$1);
var G__34931 = null;
var G__34932 = (0);
var G__34933 = (0);
seq__34852_34913 = G__34930;
chunk__34853_34914 = G__34931;
count__34854_34915 = G__34932;
i__34855_34916 = G__34933;
continue;
}
} else {
}
}
break;
}

var G__34934 = cljs.core.next.call(null,seq__34851_34906__$1);
var G__34935 = null;
var G__34936 = (0);
var G__34937 = (0);
seq__34851_34875 = G__34934;
chunk__34856_34876 = G__34935;
count__34857_34877 = G__34936;
i__34858_34878 = G__34937;
continue;
}
} else {
}
}
break;
}

quil.core.fill.call(null,(0),(0),(0));

var seq__34863_34938 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(9),(15)], null));
var chunk__34868_34939 = null;
var count__34869_34940 = (0);
var i__34870_34941 = (0);
while(true){
if((i__34870_34941 < count__34869_34940)){
var x_34942 = cljs.core._nth.call(null,chunk__34868_34939,i__34870_34941);
var seq__34871_34943 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(9),(15)], null));
var chunk__34872_34944 = null;
var count__34873_34945 = (0);
var i__34874_34946 = (0);
while(true){
if((i__34874_34946 < count__34873_34945)){
var y_34947 = cljs.core._nth.call(null,chunk__34872_34944,i__34874_34946);
quil.core.ellipse.call(null,(go.draw.core.board_left + (go.draw.core.stone_size * x_34942)),(go.draw.core.board_top + (go.draw.core.stone_size * y_34947)),(go.draw.core.stone_size / (5)),(go.draw.core.stone_size / (5)));


var G__34948 = seq__34871_34943;
var G__34949 = chunk__34872_34944;
var G__34950 = count__34873_34945;
var G__34951 = (i__34874_34946 + (1));
seq__34871_34943 = G__34948;
chunk__34872_34944 = G__34949;
count__34873_34945 = G__34950;
i__34874_34946 = G__34951;
continue;
} else {
var temp__5753__auto___34952 = cljs.core.seq.call(null,seq__34871_34943);
if(temp__5753__auto___34952){
var seq__34871_34953__$1 = temp__5753__auto___34952;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34871_34953__$1)){
var c__4550__auto___34954 = cljs.core.chunk_first.call(null,seq__34871_34953__$1);
var G__34955 = cljs.core.chunk_rest.call(null,seq__34871_34953__$1);
var G__34956 = c__4550__auto___34954;
var G__34957 = cljs.core.count.call(null,c__4550__auto___34954);
var G__34958 = (0);
seq__34871_34943 = G__34955;
chunk__34872_34944 = G__34956;
count__34873_34945 = G__34957;
i__34874_34946 = G__34958;
continue;
} else {
var y_34959 = cljs.core.first.call(null,seq__34871_34953__$1);
quil.core.ellipse.call(null,(go.draw.core.board_left + (go.draw.core.stone_size * x_34942)),(go.draw.core.board_top + (go.draw.core.stone_size * y_34959)),(go.draw.core.stone_size / (5)),(go.draw.core.stone_size / (5)));


var G__34960 = cljs.core.next.call(null,seq__34871_34953__$1);
var G__34961 = null;
var G__34962 = (0);
var G__34963 = (0);
seq__34871_34943 = G__34960;
chunk__34872_34944 = G__34961;
count__34873_34945 = G__34962;
i__34874_34946 = G__34963;
continue;
}
} else {
}
}
break;
}

var G__34964 = seq__34863_34938;
var G__34965 = chunk__34868_34939;
var G__34966 = count__34869_34940;
var G__34967 = (i__34870_34941 + (1));
seq__34863_34938 = G__34964;
chunk__34868_34939 = G__34965;
count__34869_34940 = G__34966;
i__34870_34941 = G__34967;
continue;
} else {
var temp__5753__auto___34968 = cljs.core.seq.call(null,seq__34863_34938);
if(temp__5753__auto___34968){
var seq__34863_34969__$1 = temp__5753__auto___34968;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34863_34969__$1)){
var c__4550__auto___34970 = cljs.core.chunk_first.call(null,seq__34863_34969__$1);
var G__34971 = cljs.core.chunk_rest.call(null,seq__34863_34969__$1);
var G__34972 = c__4550__auto___34970;
var G__34973 = cljs.core.count.call(null,c__4550__auto___34970);
var G__34974 = (0);
seq__34863_34938 = G__34971;
chunk__34868_34939 = G__34972;
count__34869_34940 = G__34973;
i__34870_34941 = G__34974;
continue;
} else {
var x_34975 = cljs.core.first.call(null,seq__34863_34969__$1);
var seq__34864_34976 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(9),(15)], null));
var chunk__34865_34977 = null;
var count__34866_34978 = (0);
var i__34867_34979 = (0);
while(true){
if((i__34867_34979 < count__34866_34978)){
var y_34980 = cljs.core._nth.call(null,chunk__34865_34977,i__34867_34979);
quil.core.ellipse.call(null,(go.draw.core.board_left + (go.draw.core.stone_size * x_34975)),(go.draw.core.board_top + (go.draw.core.stone_size * y_34980)),(go.draw.core.stone_size / (5)),(go.draw.core.stone_size / (5)));


var G__34981 = seq__34864_34976;
var G__34982 = chunk__34865_34977;
var G__34983 = count__34866_34978;
var G__34984 = (i__34867_34979 + (1));
seq__34864_34976 = G__34981;
chunk__34865_34977 = G__34982;
count__34866_34978 = G__34983;
i__34867_34979 = G__34984;
continue;
} else {
var temp__5753__auto___34985__$1 = cljs.core.seq.call(null,seq__34864_34976);
if(temp__5753__auto___34985__$1){
var seq__34864_34986__$1 = temp__5753__auto___34985__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34864_34986__$1)){
var c__4550__auto___34987 = cljs.core.chunk_first.call(null,seq__34864_34986__$1);
var G__34988 = cljs.core.chunk_rest.call(null,seq__34864_34986__$1);
var G__34989 = c__4550__auto___34987;
var G__34990 = cljs.core.count.call(null,c__4550__auto___34987);
var G__34991 = (0);
seq__34864_34976 = G__34988;
chunk__34865_34977 = G__34989;
count__34866_34978 = G__34990;
i__34867_34979 = G__34991;
continue;
} else {
var y_34992 = cljs.core.first.call(null,seq__34864_34986__$1);
quil.core.ellipse.call(null,(go.draw.core.board_left + (go.draw.core.stone_size * x_34975)),(go.draw.core.board_top + (go.draw.core.stone_size * y_34992)),(go.draw.core.stone_size / (5)),(go.draw.core.stone_size / (5)));


var G__34993 = cljs.core.next.call(null,seq__34864_34986__$1);
var G__34994 = null;
var G__34995 = (0);
var G__34996 = (0);
seq__34864_34976 = G__34993;
chunk__34865_34977 = G__34994;
count__34866_34978 = G__34995;
i__34867_34979 = G__34996;
continue;
}
} else {
}
}
break;
}

var G__34997 = cljs.core.next.call(null,seq__34863_34969__$1);
var G__34998 = null;
var G__34999 = (0);
var G__35000 = (0);
seq__34863_34938 = G__34997;
chunk__34868_34939 = G__34998;
count__34869_34940 = G__34999;
i__34870_34941 = G__35000;
continue;
}
} else {
}
}
break;
}

return quil.core.no_fill.call(null);
});
go.draw.core.draw_stone = (function go$draw$core$draw_stone(stone,this_stone_size){

if(cljs.core.truth_(stone)){
var color_35001 = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(stone);
var x_35002 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(stone);
var y_35003 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(stone);
if(cljs.core._EQ_.call(null,color_35001,"b")){
quil.core.fill.call(null,(0),(0),(0));
} else {
if(cljs.core._EQ_.call(null,color_35001,"w")){
quil.core.fill.call(null,(255),(255),(255));
} else {
}
}

quil.core.ellipse.call(null,x_35002,y_35003,this_stone_size,this_stone_size);
} else {
}

return quil.core.no_fill.call(null);
});
go.draw.core.draw_stones = (function go$draw$core$draw_stones(state){

quil.core.background.call(null,(255));

go.draw.core.draw_board.call(null);

go.draw.core.draw_stone.call(null,new cljs.core.Keyword(null,"hover-stone","hover-stone",1868105983).cljs$core$IFn$_invoke$arity$1(state),(go.draw.core.stone_size / 1.5));

if(cljs.core.truth_(new cljs.core.Keyword(null,"stones","stones",2138534597).cljs$core$IFn$_invoke$arity$1(state))){
var seq__35004 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"stones","stones",2138534597).cljs$core$IFn$_invoke$arity$1(state));
var chunk__35005 = null;
var count__35006 = (0);
var i__35007 = (0);
while(true){
if((i__35007 < count__35006)){
var stone = cljs.core._nth.call(null,chunk__35005,i__35007);
go.draw.core.draw_stone.call(null,stone,go.draw.core.stone_size);


var G__35008 = seq__35004;
var G__35009 = chunk__35005;
var G__35010 = count__35006;
var G__35011 = (i__35007 + (1));
seq__35004 = G__35008;
chunk__35005 = G__35009;
count__35006 = G__35010;
i__35007 = G__35011;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__35004);
if(temp__5753__auto__){
var seq__35004__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35004__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35004__$1);
var G__35012 = cljs.core.chunk_rest.call(null,seq__35004__$1);
var G__35013 = c__4550__auto__;
var G__35014 = cljs.core.count.call(null,c__4550__auto__);
var G__35015 = (0);
seq__35004 = G__35012;
chunk__35005 = G__35013;
count__35006 = G__35014;
i__35007 = G__35015;
continue;
} else {
var stone = cljs.core.first.call(null,seq__35004__$1);
go.draw.core.draw_stone.call(null,stone,go.draw.core.stone_size);


var G__35016 = cljs.core.next.call(null,seq__35004__$1);
var G__35017 = null;
var G__35018 = (0);
var G__35019 = (0);
seq__35004 = G__35016;
chunk__35005 = G__35017;
count__35006 = G__35018;
i__35007 = G__35019;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
go.draw.core.mouse_clicked = (function go$draw$core$mouse_clicked(state,event){
var vec__35020 = go.draw.core.nearest_grid_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(event)], null));
var grid_x = cljs.core.nth.call(null,vec__35020,(0),null);
var grid_y = cljs.core.nth.call(null,vec__35020,(1),null);
var new_stone = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),grid_x,new cljs.core.Keyword(null,"y","y",-1757859776),grid_y,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state)], null);
var new_stone_loc = go.draw.core.coords_to_location.call(null,new_stone);
var new_stone_color = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state);
return go.draw.core.import_board.call(null,cljs.core.partial.call(null,cljs.core.assoc,state,new cljs.core.Keyword(null,"game-state","game-state",935682735)).call(null,go.game_engine.handle_move.call(null,new cljs.core.Keyword(null,"game-state","game-state",935682735).cljs$core$IFn$_invoke$arity$1(state),new_stone_loc,go.game_engine.stone_name_to_num.call(null,new_stone_color))));
});
go.draw.core.mouse_moved = (function go$draw$core$mouse_moved(state,event){
var vec__35023 = go.draw.core.nearest_grid_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(event)], null));
var grid_x = cljs.core.nth.call(null,vec__35023,(0),null);
var grid_y = cljs.core.nth.call(null,vec__35023,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"hover-stone","hover-stone",1868105983),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),grid_x,new cljs.core.Keyword(null,"y","y",-1757859776),grid_y,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state)], null));
});
/**
 * Return the function to be called on the game-state given a key press.
 */
go.draw.core.key_to_fn = (function go$draw$core$key_to_fn(k){
var temp__5751__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ArrowLeft","ArrowLeft",-974160950),go.game_state.move_to_previous_state,new cljs.core.Keyword(null,"ArrowRight","ArrowRight",1621754469),go.game_state.move_to_next_state,new cljs.core.Keyword(null,"ArrowDown","ArrowDown",-251004205),go.game_state.move_down_parallel_branch,new cljs.core.Keyword(null,"ArrowUp","ArrowUp",-538953684),go.game_state.move_up_parallel_branch], null).call(null,k);
if(cljs.core.truth_(temp__5751__auto__)){
var f = temp__5751__auto__;
return f;
} else {
return cljs.core.identity;
}
});
/**
 * Navigate through the game tree when arrows pressed.
 */
go.draw.core.key_pressed = (function go$draw$core$key_pressed(state,event){
cljs.core.print.call(null,quil.core.key_as_keyword.call(null));

return go.draw.core.import_board.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"game-state","game-state",935682735),go.draw.core.key_to_fn.call(null,quil.core.key_as_keyword.call(null)).call(null,new cljs.core.Keyword(null,"game-state","game-state",935682735).cljs$core$IFn$_invoke$arity$1(state))));
});
go.draw.core.start_gui = (function go$draw$core$start_gui(size){

go.draw.core.drawn_board = (function go$draw$core$start_gui_$_drawn_board(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),((cljs.core.fn_QMARK_.call(null,go.draw.core.mouse_clicked))?(function() { 
var G__35026__delegate = function (args){
return cljs.core.apply.call(null,go.draw.core.mouse_clicked,args);
};
var G__35026 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35027__i = 0, G__35027__a = new Array(arguments.length -  0);
while (G__35027__i < G__35027__a.length) {G__35027__a[G__35027__i] = arguments[G__35027__i + 0]; ++G__35027__i;}
  args = new cljs.core.IndexedSeq(G__35027__a,0,null);
} 
return G__35026__delegate.call(this,args);};
G__35026.cljs$lang$maxFixedArity = 0;
G__35026.cljs$lang$applyTo = (function (arglist__35028){
var args = cljs.core.seq(arglist__35028);
return G__35026__delegate(args);
});
G__35026.cljs$core$IFn$_invoke$arity$variadic = G__35026__delegate;
return G__35026;
})()
:go.draw.core.mouse_clicked),new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),((cljs.core.fn_QMARK_.call(null,go.draw.core.mouse_moved))?(function() { 
var G__35029__delegate = function (args){
return cljs.core.apply.call(null,go.draw.core.mouse_moved,args);
};
var G__35029 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35030__i = 0, G__35030__a = new Array(arguments.length -  0);
while (G__35030__i < G__35030__a.length) {G__35030__a[G__35030__i] = arguments[G__35030__i + 0]; ++G__35030__i;}
  args = new cljs.core.IndexedSeq(G__35030__a,0,null);
} 
return G__35029__delegate.call(this,args);};
G__35029.cljs$lang$maxFixedArity = 0;
G__35029.cljs$lang$applyTo = (function (arglist__35031){
var args = cljs.core.seq(arglist__35031);
return G__35029__delegate(args);
});
G__35029.cljs$core$IFn$_invoke$arity$variadic = G__35029__delegate;
return G__35029;
})()
:go.draw.core.mouse_moved),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [go.draw.core.board_size,go.draw.core.board_size], null),new cljs.core.Keyword(null,"title","title",636505583),"Go",new cljs.core.Keyword(null,"setup","setup",1987730512),cljs.core.partial.call(null,go.draw.core.setup,size),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"host","host",-1558485167),"go",new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,go.draw.core.key_pressed))?(function() { 
var G__35032__delegate = function (args){
return cljs.core.apply.call(null,go.draw.core.key_pressed,args);
};
var G__35032 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35033__i = 0, G__35033__a = new Array(arguments.length -  0);
while (G__35033__i < G__35033__a.length) {G__35033__a[G__35033__i] = arguments[G__35033__i + 0]; ++G__35033__i;}
  args = new cljs.core.IndexedSeq(G__35033__a,0,null);
} 
return G__35032__delegate.call(this,args);};
G__35032.cljs$lang$maxFixedArity = 0;
G__35032.cljs$lang$applyTo = (function (arglist__35034){
var args = cljs.core.seq(arglist__35034);
return G__35032__delegate(args);
});
G__35032.cljs$core$IFn$_invoke$arity$variadic = G__35032__delegate;
return G__35032;
})()
:go.draw.core.key_pressed),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,go.draw.core.draw_stones))?(function() { 
var G__35035__delegate = function (args){
return cljs.core.apply.call(null,go.draw.core.draw_stones,args);
};
var G__35035 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35036__i = 0, G__35036__a = new Array(arguments.length -  0);
while (G__35036__i < G__35036__a.length) {G__35036__a[G__35036__i] = arguments[G__35036__i + 0]; ++G__35036__i;}
  args = new cljs.core.IndexedSeq(G__35036__a,0,null);
} 
return G__35035__delegate.call(this,args);};
G__35035.cljs$lang$maxFixedArity = 0;
G__35035.cljs$lang$applyTo = (function (arglist__35037){
var args = cljs.core.seq(arglist__35037);
return G__35035__delegate(args);
});
G__35035.cljs$core$IFn$_invoke$arity$variadic = G__35035__delegate;
return G__35035;
})()
:go.draw.core.draw_stones));
});
goog.exportSymbol('go.draw.core.drawn_board', go.draw.core.drawn_board);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__33896__33897__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__33896__33897__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),go.draw.core.drawn_board,new cljs.core.Keyword(null,"host-id","host-id",742376279),"go"], null));
}
});

//# sourceMappingURL=core.js.map?rel=1616195226127
