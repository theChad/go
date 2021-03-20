// Compiled by ClojureScript 1.10.520 {}
goog.provide('go.core');
goog.require('cljs.core');
goog.require('go.draw.core');
goog.require('go.game_engine');
/**
 * Just fires up the GUI game board for a new game.
 */
go.core.main = (function go$core$main(var_args){
var G__35042 = arguments.length;
switch (G__35042) {
case 0:
return go.core.main.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___35044 = arguments.length;
var i__4731__auto___35045 = (0);
while(true){
if((i__4731__auto___35045 < len__4730__auto___35044)){
args_arr__4751__auto__.push((arguments[i__4731__auto___35045]));

var G__35046 = (i__4731__auto___35045 + (1));
i__4731__auto___35045 = G__35046;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((0)),(0),null));
return go.core.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4752__auto__);

}
});
goog.exportSymbol('go.core.main', go.core.main);

go.core.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
cljs.core.println.call(null,"Okay, so at least I'm here.");

return go.draw.core.start_gui.call(null,parseInt(cljs.core.first.call(null,args)));
});

/** @this {Function} */
go.core.main.cljs$lang$applyTo = (function (seq35041){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35041));
});

go.core.main.cljs$core$IFn$_invoke$arity$0 = (function (){
return go.core.main.call(null,"19");
});

go.core.main.cljs$lang$maxFixedArity = (0);


//# sourceMappingURL=core.js.map?rel=1616195226160
