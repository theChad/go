// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__27486){
var map__27487 = p__27486;
var map__27487__$1 = (((((!((map__27487 == null))))?(((((map__27487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27487):map__27487);
var m = map__27487__$1;
var n = cljs.core.get.call(null,map__27487__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__27487__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27489_27521 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27490_27522 = null;
var count__27491_27523 = (0);
var i__27492_27524 = (0);
while(true){
if((i__27492_27524 < count__27491_27523)){
var f_27525 = cljs.core._nth.call(null,chunk__27490_27522,i__27492_27524);
cljs.core.println.call(null,"  ",f_27525);


var G__27526 = seq__27489_27521;
var G__27527 = chunk__27490_27522;
var G__27528 = count__27491_27523;
var G__27529 = (i__27492_27524 + (1));
seq__27489_27521 = G__27526;
chunk__27490_27522 = G__27527;
count__27491_27523 = G__27528;
i__27492_27524 = G__27529;
continue;
} else {
var temp__5753__auto___27530 = cljs.core.seq.call(null,seq__27489_27521);
if(temp__5753__auto___27530){
var seq__27489_27531__$1 = temp__5753__auto___27530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27489_27531__$1)){
var c__4550__auto___27532 = cljs.core.chunk_first.call(null,seq__27489_27531__$1);
var G__27533 = cljs.core.chunk_rest.call(null,seq__27489_27531__$1);
var G__27534 = c__4550__auto___27532;
var G__27535 = cljs.core.count.call(null,c__4550__auto___27532);
var G__27536 = (0);
seq__27489_27521 = G__27533;
chunk__27490_27522 = G__27534;
count__27491_27523 = G__27535;
i__27492_27524 = G__27536;
continue;
} else {
var f_27537 = cljs.core.first.call(null,seq__27489_27531__$1);
cljs.core.println.call(null,"  ",f_27537);


var G__27538 = cljs.core.next.call(null,seq__27489_27531__$1);
var G__27539 = null;
var G__27540 = (0);
var G__27541 = (0);
seq__27489_27521 = G__27538;
chunk__27490_27522 = G__27539;
count__27491_27523 = G__27540;
i__27492_27524 = G__27541;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27542 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27542);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27542)))?cljs.core.second.call(null,arglists_27542):arglists_27542));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27493_27543 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27494_27544 = null;
var count__27495_27545 = (0);
var i__27496_27546 = (0);
while(true){
if((i__27496_27546 < count__27495_27545)){
var vec__27507_27547 = cljs.core._nth.call(null,chunk__27494_27544,i__27496_27546);
var name_27548 = cljs.core.nth.call(null,vec__27507_27547,(0),null);
var map__27510_27549 = cljs.core.nth.call(null,vec__27507_27547,(1),null);
var map__27510_27550__$1 = (((((!((map__27510_27549 == null))))?(((((map__27510_27549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27510_27549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27510_27549):map__27510_27549);
var doc_27551 = cljs.core.get.call(null,map__27510_27550__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27552 = cljs.core.get.call(null,map__27510_27550__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_27548);

cljs.core.println.call(null," ",arglists_27552);

if(cljs.core.truth_(doc_27551)){
cljs.core.println.call(null," ",doc_27551);
} else {
}


var G__27553 = seq__27493_27543;
var G__27554 = chunk__27494_27544;
var G__27555 = count__27495_27545;
var G__27556 = (i__27496_27546 + (1));
seq__27493_27543 = G__27553;
chunk__27494_27544 = G__27554;
count__27495_27545 = G__27555;
i__27496_27546 = G__27556;
continue;
} else {
var temp__5753__auto___27557 = cljs.core.seq.call(null,seq__27493_27543);
if(temp__5753__auto___27557){
var seq__27493_27558__$1 = temp__5753__auto___27557;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27493_27558__$1)){
var c__4550__auto___27559 = cljs.core.chunk_first.call(null,seq__27493_27558__$1);
var G__27560 = cljs.core.chunk_rest.call(null,seq__27493_27558__$1);
var G__27561 = c__4550__auto___27559;
var G__27562 = cljs.core.count.call(null,c__4550__auto___27559);
var G__27563 = (0);
seq__27493_27543 = G__27560;
chunk__27494_27544 = G__27561;
count__27495_27545 = G__27562;
i__27496_27546 = G__27563;
continue;
} else {
var vec__27512_27564 = cljs.core.first.call(null,seq__27493_27558__$1);
var name_27565 = cljs.core.nth.call(null,vec__27512_27564,(0),null);
var map__27515_27566 = cljs.core.nth.call(null,vec__27512_27564,(1),null);
var map__27515_27567__$1 = (((((!((map__27515_27566 == null))))?(((((map__27515_27566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27515_27566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27515_27566):map__27515_27566);
var doc_27568 = cljs.core.get.call(null,map__27515_27567__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27569 = cljs.core.get.call(null,map__27515_27567__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_27565);

cljs.core.println.call(null," ",arglists_27569);

if(cljs.core.truth_(doc_27568)){
cljs.core.println.call(null," ",doc_27568);
} else {
}


var G__27570 = cljs.core.next.call(null,seq__27493_27558__$1);
var G__27571 = null;
var G__27572 = (0);
var G__27573 = (0);
seq__27493_27543 = G__27570;
chunk__27494_27544 = G__27571;
count__27495_27545 = G__27572;
i__27496_27546 = G__27573;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.call(null,"Spec");

var seq__27517 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__27518 = null;
var count__27519 = (0);
var i__27520 = (0);
while(true){
if((i__27520 < count__27519)){
var role = cljs.core._nth.call(null,chunk__27518,i__27520);
var temp__5753__auto___27574__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___27574__$1)){
var spec_27575 = temp__5753__auto___27574__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_27575));
} else {
}


var G__27576 = seq__27517;
var G__27577 = chunk__27518;
var G__27578 = count__27519;
var G__27579 = (i__27520 + (1));
seq__27517 = G__27576;
chunk__27518 = G__27577;
count__27519 = G__27578;
i__27520 = G__27579;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq.call(null,seq__27517);
if(temp__5753__auto____$1){
var seq__27517__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27517__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27517__$1);
var G__27580 = cljs.core.chunk_rest.call(null,seq__27517__$1);
var G__27581 = c__4550__auto__;
var G__27582 = cljs.core.count.call(null,c__4550__auto__);
var G__27583 = (0);
seq__27517 = G__27580;
chunk__27518 = G__27581;
count__27519 = G__27582;
i__27520 = G__27583;
continue;
} else {
var role = cljs.core.first.call(null,seq__27517__$1);
var temp__5753__auto___27584__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___27584__$2)){
var spec_27585 = temp__5753__auto___27584__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_27585));
} else {
}


var G__27586 = cljs.core.next.call(null,seq__27517__$1);
var G__27587 = null;
var G__27588 = (0);
var G__27589 = (0);
seq__27517 = G__27586;
chunk__27518 = G__27587;
count__27519 = G__27588;
i__27520 = G__27589;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__27590 = cljs.core.conj.call(null,via,t);
var G__27591 = cljs.core.ex_cause.call(null,t);
via = G__27590;
t = G__27591;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__27594 = datafied_throwable;
var map__27594__$1 = (((((!((map__27594 == null))))?(((((map__27594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27594):map__27594);
var via = cljs.core.get.call(null,map__27594__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__27594__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__27594__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__27595 = cljs.core.last.call(null,via);
var map__27595__$1 = (((((!((map__27595 == null))))?(((((map__27595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27595):map__27595);
var type = cljs.core.get.call(null,map__27595__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__27595__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__27595__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__27596 = data;
var map__27596__$1 = (((((!((map__27596 == null))))?(((((map__27596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27596):map__27596);
var problems = cljs.core.get.call(null,map__27596__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__27596__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__27596__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__27597 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__27597__$1 = (((((!((map__27597 == null))))?(((((map__27597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27597):map__27597);
var top_data = map__27597__$1;
var source = cljs.core.get.call(null,map__27597__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__27602 = phase;
var G__27602__$1 = (((G__27602 instanceof cljs.core.Keyword))?G__27602.fqn:null);
switch (G__27602__$1) {
case "read-source":
var map__27603 = data;
var map__27603__$1 = (((((!((map__27603 == null))))?(((((map__27603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27603):map__27603);
var line = cljs.core.get.call(null,map__27603__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__27603__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__27605 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__27605__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__27605,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27605);
var G__27605__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__27605__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27605__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__27605__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27605__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__27606 = top_data;
var G__27606__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__27606,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27606);
var G__27606__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__27606__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27606__$1);
var G__27606__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__27606__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27606__$2);
var G__27606__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__27606__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27606__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__27606__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27606__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__27607 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__27607,(0),null);
var method = cljs.core.nth.call(null,vec__27607,(1),null);
var file = cljs.core.nth.call(null,vec__27607,(2),null);
var line = cljs.core.nth.call(null,vec__27607,(3),null);
var G__27610 = top_data;
var G__27610__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__27610,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__27610);
var G__27610__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__27610__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__27610__$1);
var G__27610__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__27610__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__27610__$2);
var G__27610__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__27610__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27610__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__27610__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27610__$4;
}

break;
case "execution":
var vec__27611 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__27611,(0),null);
var method = cljs.core.nth.call(null,vec__27611,(1),null);
var file = cljs.core.nth.call(null,vec__27611,(2),null);
var line = cljs.core.nth.call(null,vec__27611,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__27611,source__$1,method,file,line,G__27602,G__27602__$1,map__27594,map__27594__$1,via,trace,phase,map__27595,map__27595__$1,type,message,data,map__27596,map__27596__$1,problems,fn,caller,map__27597,map__27597__$1,top_data,source){
return (function (p1__27593_SHARP_){
var or__4131__auto__ = (p1__27593_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__27593_SHARP_);
}
});})(vec__27611,source__$1,method,file,line,G__27602,G__27602__$1,map__27594,map__27594__$1,via,trace,phase,map__27595,map__27595__$1,type,message,data,map__27596,map__27596__$1,problems,fn,caller,map__27597,map__27597__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__27614 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__27614__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__27614,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__27614);
var G__27614__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__27614__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27614__$1);
var G__27614__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__27614__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__27614__$2);
var G__27614__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__27614__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__27614__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__27614__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27614__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27602__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__27618){
var map__27619 = p__27618;
var map__27619__$1 = (((((!((map__27619 == null))))?(((((map__27619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27619):map__27619);
var triage_data = map__27619__$1;
var phase = cljs.core.get.call(null,map__27619__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__27619__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__27619__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__27619__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__27619__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__27619__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__27619__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__27619__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__27621 = phase;
var G__27621__$1 = (((G__27621 instanceof cljs.core.Keyword))?G__27621.fqn:null);
switch (G__27621__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27622_27631 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27623_27632 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27624_27633 = true;
var _STAR_print_fn_STAR__temp_val__27625_27634 = ((function (_STAR_print_newline_STAR__orig_val__27622_27631,_STAR_print_fn_STAR__orig_val__27623_27632,_STAR_print_newline_STAR__temp_val__27624_27633,sb__4661__auto__,G__27621,G__27621__$1,loc,class_name,simple_class,cause_type,format,map__27619,map__27619__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__27622_27631,_STAR_print_fn_STAR__orig_val__27623_27632,_STAR_print_newline_STAR__temp_val__27624_27633,sb__4661__auto__,G__27621,G__27621__$1,loc,class_name,simple_class,cause_type,format,map__27619,map__27619__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27624_27633;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27625_27634;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__27622_27631,_STAR_print_fn_STAR__orig_val__27623_27632,_STAR_print_newline_STAR__temp_val__27624_27633,_STAR_print_fn_STAR__temp_val__27625_27634,sb__4661__auto__,G__27621,G__27621__$1,loc,class_name,simple_class,cause_type,format,map__27619,map__27619__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__27622_27631,_STAR_print_fn_STAR__orig_val__27623_27632,_STAR_print_newline_STAR__temp_val__27624_27633,_STAR_print_fn_STAR__temp_val__27625_27634,sb__4661__auto__,G__27621,G__27621__$1,loc,class_name,simple_class,cause_type,format,map__27619,map__27619__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__27616_SHARP_){
return cljs.core.dissoc.call(null,p1__27616_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__27622_27631,_STAR_print_fn_STAR__orig_val__27623_27632,_STAR_print_newline_STAR__temp_val__27624_27633,_STAR_print_fn_STAR__temp_val__27625_27634,sb__4661__auto__,G__27621,G__27621__$1,loc,class_name,simple_class,cause_type,format,map__27619,map__27619__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__27622_27631,_STAR_print_fn_STAR__orig_val__27623_27632,_STAR_print_newline_STAR__temp_val__27624_27633,_STAR_print_fn_STAR__temp_val__27625_27634,sb__4661__auto__,G__27621,G__27621__$1,loc,class_name,simple_class,cause_type,format,map__27619,map__27619__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27623_27632;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27622_27631;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27626_27635 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27627_27636 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27628_27637 = true;
var _STAR_print_fn_STAR__temp_val__27629_27638 = ((function (_STAR_print_newline_STAR__orig_val__27626_27635,_STAR_print_fn_STAR__orig_val__27627_27636,_STAR_print_newline_STAR__temp_val__27628_27637,sb__4661__auto__,G__27621,G__27621__$1,loc,class_name,simple_class,cause_type,format,map__27619,map__27619__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__27626_27635,_STAR_print_fn_STAR__orig_val__27627_27636,_STAR_print_newline_STAR__temp_val__27628_27637,sb__4661__auto__,G__27621,G__27621__$1,loc,class_name,simple_class,cause_type,format,map__27619,map__27619__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27628_27637;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27629_27638;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__27626_27635,_STAR_print_fn_STAR__orig_val__27627_27636,_STAR_print_newline_STAR__temp_val__27628_27637,_STAR_print_fn_STAR__temp_val__27629_27638,sb__4661__auto__,G__27621,G__27621__$1,loc,class_name,simple_class,cause_type,format,map__27619,map__27619__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__27626_27635,_STAR_print_fn_STAR__orig_val__27627_27636,_STAR_print_newline_STAR__temp_val__27628_27637,_STAR_print_fn_STAR__temp_val__27629_27638,sb__4661__auto__,G__27621,G__27621__$1,loc,class_name,simple_class,cause_type,format,map__27619,map__27619__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__27617_SHARP_){
return cljs.core.dissoc.call(null,p1__27617_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__27626_27635,_STAR_print_fn_STAR__orig_val__27627_27636,_STAR_print_newline_STAR__temp_val__27628_27637,_STAR_print_fn_STAR__temp_val__27629_27638,sb__4661__auto__,G__27621,G__27621__$1,loc,class_name,simple_class,cause_type,format,map__27619,map__27619__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__27626_27635,_STAR_print_fn_STAR__orig_val__27627_27636,_STAR_print_newline_STAR__temp_val__27628_27637,_STAR_print_fn_STAR__temp_val__27629_27638,sb__4661__auto__,G__27621,G__27621__$1,loc,class_name,simple_class,cause_type,format,map__27619,map__27619__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27627_27636;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27626_27635;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27621__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1616194472563
