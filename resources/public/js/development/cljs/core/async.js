// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__24062 = arguments.length;
switch (G__24062) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24063 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24063 = (function (f,blockable,meta24064){
this.f = f;
this.blockable = blockable;
this.meta24064 = meta24064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24065,meta24064__$1){
var self__ = this;
var _24065__$1 = this;
return (new cljs.core.async.t_cljs$core$async24063(self__.f,self__.blockable,meta24064__$1));
});

cljs.core.async.t_cljs$core$async24063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24065){
var self__ = this;
var _24065__$1 = this;
return self__.meta24064;
});

cljs.core.async.t_cljs$core$async24063.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24063.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24063.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24063.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24063.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24064","meta24064",-1086962182,null)], null);
});

cljs.core.async.t_cljs$core$async24063.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24063.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24063";

cljs.core.async.t_cljs$core$async24063.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24063");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24063.
 */
cljs.core.async.__GT_t_cljs$core$async24063 = (function cljs$core$async$__GT_t_cljs$core$async24063(f__$1,blockable__$1,meta24064){
return (new cljs.core.async.t_cljs$core$async24063(f__$1,blockable__$1,meta24064));
});

}

return (new cljs.core.async.t_cljs$core$async24063(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__24069 = arguments.length;
switch (G__24069) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__24072 = arguments.length;
switch (G__24072) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__24075 = arguments.length;
switch (G__24075) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24077 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24077);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24077,ret){
return (function (){
return fn1.call(null,val_24077);
});})(val_24077,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__24079 = arguments.length;
switch (G__24079) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5751__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5751__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___24081 = n;
var x_24082 = (0);
while(true){
if((x_24082 < n__4607__auto___24081)){
(a[x_24082] = (0));

var G__24083 = (x_24082 + (1));
x_24082 = G__24083;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__24084 = (i + (1));
i = G__24084;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24085 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24085 = (function (flag,meta24086){
this.flag = flag;
this.meta24086 = meta24086;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24087,meta24086__$1){
var self__ = this;
var _24087__$1 = this;
return (new cljs.core.async.t_cljs$core$async24085(self__.flag,meta24086__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24085.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24087){
var self__ = this;
var _24087__$1 = this;
return self__.meta24086;
});})(flag))
;

cljs.core.async.t_cljs$core$async24085.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24085.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24085.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24085.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24085.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24086","meta24086",-1511209481,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24085.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24085.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24085";

cljs.core.async.t_cljs$core$async24085.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24085");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24085.
 */
cljs.core.async.__GT_t_cljs$core$async24085 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24085(flag__$1,meta24086){
return (new cljs.core.async.t_cljs$core$async24085(flag__$1,meta24086));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24085(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24088 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24088 = (function (flag,cb,meta24089){
this.flag = flag;
this.cb = cb;
this.meta24089 = meta24089;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24090,meta24089__$1){
var self__ = this;
var _24090__$1 = this;
return (new cljs.core.async.t_cljs$core$async24088(self__.flag,self__.cb,meta24089__$1));
});

cljs.core.async.t_cljs$core$async24088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24090){
var self__ = this;
var _24090__$1 = this;
return self__.meta24089;
});

cljs.core.async.t_cljs$core$async24088.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24088.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24088.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24088.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24088.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24089","meta24089",1721810909,null)], null);
});

cljs.core.async.t_cljs$core$async24088.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24088.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24088";

cljs.core.async.t_cljs$core$async24088.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24088");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24088.
 */
cljs.core.async.__GT_t_cljs$core$async24088 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24088(flag__$1,cb__$1,meta24089){
return (new cljs.core.async.t_cljs$core$async24088(flag__$1,cb__$1,meta24089));
});

}

return (new cljs.core.async.t_cljs$core$async24088(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24091_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24091_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24092_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24092_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24093 = (i + (1));
i = G__24093;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24099 = arguments.length;
var i__4731__auto___24100 = (0);
while(true){
if((i__4731__auto___24100 < len__4730__auto___24099)){
args__4736__auto__.push((arguments[i__4731__auto___24100]));

var G__24101 = (i__4731__auto___24100 + (1));
i__4731__auto___24100 = G__24101;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24096){
var map__24097 = p__24096;
var map__24097__$1 = (((((!((map__24097 == null))))?(((((map__24097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24097):map__24097);
var opts = map__24097__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24094){
var G__24095 = cljs.core.first.call(null,seq24094);
var seq24094__$1 = cljs.core.next.call(null,seq24094);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24095,seq24094__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__24103 = arguments.length;
switch (G__24103) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24002__auto___24149 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24002__auto___24149){
return (function (){
var f__24003__auto__ = (function (){var switch__23907__auto__ = ((function (c__24002__auto___24149){
return (function (state_24127){
var state_val_24128 = (state_24127[(1)]);
if((state_val_24128 === (7))){
var inst_24123 = (state_24127[(2)]);
var state_24127__$1 = state_24127;
var statearr_24129_24150 = state_24127__$1;
(statearr_24129_24150[(2)] = inst_24123);

(statearr_24129_24150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24128 === (1))){
var state_24127__$1 = state_24127;
var statearr_24130_24151 = state_24127__$1;
(statearr_24130_24151[(2)] = null);

(statearr_24130_24151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24128 === (4))){
var inst_24106 = (state_24127[(7)]);
var inst_24106__$1 = (state_24127[(2)]);
var inst_24107 = (inst_24106__$1 == null);
var state_24127__$1 = (function (){var statearr_24131 = state_24127;
(statearr_24131[(7)] = inst_24106__$1);

return statearr_24131;
})();
if(cljs.core.truth_(inst_24107)){
var statearr_24132_24152 = state_24127__$1;
(statearr_24132_24152[(1)] = (5));

} else {
var statearr_24133_24153 = state_24127__$1;
(statearr_24133_24153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24128 === (13))){
var state_24127__$1 = state_24127;
var statearr_24134_24154 = state_24127__$1;
(statearr_24134_24154[(2)] = null);

(statearr_24134_24154[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24128 === (6))){
var inst_24106 = (state_24127[(7)]);
var state_24127__$1 = state_24127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24127__$1,(11),to,inst_24106);
} else {
if((state_val_24128 === (3))){
var inst_24125 = (state_24127[(2)]);
var state_24127__$1 = state_24127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24127__$1,inst_24125);
} else {
if((state_val_24128 === (12))){
var state_24127__$1 = state_24127;
var statearr_24135_24155 = state_24127__$1;
(statearr_24135_24155[(2)] = null);

(statearr_24135_24155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24128 === (2))){
var state_24127__$1 = state_24127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24127__$1,(4),from);
} else {
if((state_val_24128 === (11))){
var inst_24116 = (state_24127[(2)]);
var state_24127__$1 = state_24127;
if(cljs.core.truth_(inst_24116)){
var statearr_24136_24156 = state_24127__$1;
(statearr_24136_24156[(1)] = (12));

} else {
var statearr_24137_24157 = state_24127__$1;
(statearr_24137_24157[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24128 === (9))){
var state_24127__$1 = state_24127;
var statearr_24138_24158 = state_24127__$1;
(statearr_24138_24158[(2)] = null);

(statearr_24138_24158[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24128 === (5))){
var state_24127__$1 = state_24127;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24139_24159 = state_24127__$1;
(statearr_24139_24159[(1)] = (8));

} else {
var statearr_24140_24160 = state_24127__$1;
(statearr_24140_24160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24128 === (14))){
var inst_24121 = (state_24127[(2)]);
var state_24127__$1 = state_24127;
var statearr_24141_24161 = state_24127__$1;
(statearr_24141_24161[(2)] = inst_24121);

(statearr_24141_24161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24128 === (10))){
var inst_24113 = (state_24127[(2)]);
var state_24127__$1 = state_24127;
var statearr_24142_24162 = state_24127__$1;
(statearr_24142_24162[(2)] = inst_24113);

(statearr_24142_24162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24128 === (8))){
var inst_24110 = cljs.core.async.close_BANG_.call(null,to);
var state_24127__$1 = state_24127;
var statearr_24143_24163 = state_24127__$1;
(statearr_24143_24163[(2)] = inst_24110);

(statearr_24143_24163[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24002__auto___24149))
;
return ((function (switch__23907__auto__,c__24002__auto___24149){
return (function() {
var cljs$core$async$state_machine__23908__auto__ = null;
var cljs$core$async$state_machine__23908__auto____0 = (function (){
var statearr_24144 = [null,null,null,null,null,null,null,null];
(statearr_24144[(0)] = cljs$core$async$state_machine__23908__auto__);

(statearr_24144[(1)] = (1));

return statearr_24144;
});
var cljs$core$async$state_machine__23908__auto____1 = (function (state_24127){
while(true){
var ret_value__23909__auto__ = (function (){try{while(true){
var result__23910__auto__ = switch__23907__auto__.call(null,state_24127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23910__auto__;
}
break;
}
}catch (e24145){if((e24145 instanceof Object)){
var ex__23911__auto__ = e24145;
var statearr_24146_24164 = state_24127;
(statearr_24146_24164[(5)] = ex__23911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24165 = state_24127;
state_24127 = G__24165;
continue;
} else {
return ret_value__23909__auto__;
}
break;
}
});
cljs$core$async$state_machine__23908__auto__ = function(state_24127){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23908__auto____1.call(this,state_24127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23908__auto____0;
cljs$core$async$state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23908__auto____1;
return cljs$core$async$state_machine__23908__auto__;
})()
;})(switch__23907__auto__,c__24002__auto___24149))
})();
var state__24004__auto__ = (function (){var statearr_24147 = f__24003__auto__.call(null);
(statearr_24147[(6)] = c__24002__auto___24149);

return statearr_24147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24004__auto__);
});})(c__24002__auto___24149))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24166){
var vec__24167 = p__24166;
var v = cljs.core.nth.call(null,vec__24167,(0),null);
var p = cljs.core.nth.call(null,vec__24167,(1),null);
var job = vec__24167;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24002__auto___24338 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24002__auto___24338,res,vec__24167,v,p,job,jobs,results){
return (function (){
var f__24003__auto__ = (function (){var switch__23907__auto__ = ((function (c__24002__auto___24338,res,vec__24167,v,p,job,jobs,results){
return (function (state_24174){
var state_val_24175 = (state_24174[(1)]);
if((state_val_24175 === (1))){
var state_24174__$1 = state_24174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24174__$1,(2),res,v);
} else {
if((state_val_24175 === (2))){
var inst_24171 = (state_24174[(2)]);
var inst_24172 = cljs.core.async.close_BANG_.call(null,res);
var state_24174__$1 = (function (){var statearr_24176 = state_24174;
(statearr_24176[(7)] = inst_24171);

return statearr_24176;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24174__$1,inst_24172);
} else {
return null;
}
}
});})(c__24002__auto___24338,res,vec__24167,v,p,job,jobs,results))
;
return ((function (switch__23907__auto__,c__24002__auto___24338,res,vec__24167,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23908__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23908__auto____0 = (function (){
var statearr_24177 = [null,null,null,null,null,null,null,null];
(statearr_24177[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23908__auto__);

(statearr_24177[(1)] = (1));

return statearr_24177;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23908__auto____1 = (function (state_24174){
while(true){
var ret_value__23909__auto__ = (function (){try{while(true){
var result__23910__auto__ = switch__23907__auto__.call(null,state_24174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23910__auto__;
}
break;
}
}catch (e24178){if((e24178 instanceof Object)){
var ex__23911__auto__ = e24178;
var statearr_24179_24339 = state_24174;
(statearr_24179_24339[(5)] = ex__23911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24340 = state_24174;
state_24174 = G__24340;
continue;
} else {
return ret_value__23909__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23908__auto__ = function(state_24174){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23908__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23908__auto____1.call(this,state_24174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23908__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23908__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23908__auto__;
})()
;})(switch__23907__auto__,c__24002__auto___24338,res,vec__24167,v,p,job,jobs,results))
})();
var state__24004__auto__ = (function (){var statearr_24180 = f__24003__auto__.call(null);
(statearr_24180[(6)] = c__24002__auto___24338);

return statearr_24180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24004__auto__);
});})(c__24002__auto___24338,res,vec__24167,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24181){
var vec__24182 = p__24181;
var v = cljs.core.nth.call(null,vec__24182,(0),null);
var p = cljs.core.nth.call(null,vec__24182,(1),null);
var job = vec__24182;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___24341 = n;
var __24342 = (0);
while(true){
if((__24342 < n__4607__auto___24341)){
var G__24185_24343 = type;
var G__24185_24344__$1 = (((G__24185_24343 instanceof cljs.core.Keyword))?G__24185_24343.fqn:null);
switch (G__24185_24344__$1) {
case "compute":
var c__24002__auto___24346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24342,c__24002__auto___24346,G__24185_24343,G__24185_24344__$1,n__4607__auto___24341,jobs,results,process,async){
return (function (){
var f__24003__auto__ = (function (){var switch__23907__auto__ = ((function (__24342,c__24002__auto___24346,G__24185_24343,G__24185_24344__$1,n__4607__auto___24341,jobs,results,process,async){
return (function (state_24198){
var state_val_24199 = (state_24198[(1)]);
if((state_val_24199 === (1))){
var state_24198__$1 = state_24198;
var statearr_24200_24347 = state_24198__$1;
(statearr_24200_24347[(2)] = null);

(statearr_24200_24347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (2))){
var state_24198__$1 = state_24198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24198__$1,(4),jobs);
} else {
if((state_val_24199 === (3))){
var inst_24196 = (state_24198[(2)]);
var state_24198__$1 = state_24198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24198__$1,inst_24196);
} else {
if((state_val_24199 === (4))){
var inst_24188 = (state_24198[(2)]);
var inst_24189 = process.call(null,inst_24188);
var state_24198__$1 = state_24198;
if(cljs.core.truth_(inst_24189)){
var statearr_24201_24348 = state_24198__$1;
(statearr_24201_24348[(1)] = (5));

} else {
var statearr_24202_24349 = state_24198__$1;
(statearr_24202_24349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (5))){
var state_24198__$1 = state_24198;
var statearr_24203_24350 = state_24198__$1;
(statearr_24203_24350[(2)] = null);

(statearr_24203_24350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (6))){
var state_24198__$1 = state_24198;
var statearr_24204_24351 = state_24198__$1;
(statearr_24204_24351[(2)] = null);

(statearr_24204_24351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (7))){
var inst_24194 = (state_24198[(2)]);
var state_24198__$1 = state_24198;
var statearr_24205_24352 = state_24198__$1;
(statearr_24205_24352[(2)] = inst_24194);

(statearr_24205_24352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__24342,c__24002__auto___24346,G__24185_24343,G__24185_24344__$1,n__4607__auto___24341,jobs,results,process,async))
;
return ((function (__24342,switch__23907__auto__,c__24002__auto___24346,G__24185_24343,G__24185_24344__$1,n__4607__auto___24341,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23908__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23908__auto____0 = (function (){
var statearr_24206 = [null,null,null,null,null,null,null];
(statearr_24206[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23908__auto__);

(statearr_24206[(1)] = (1));

return statearr_24206;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23908__auto____1 = (function (state_24198){
while(true){
var ret_value__23909__auto__ = (function (){try{while(true){
var result__23910__auto__ = switch__23907__auto__.call(null,state_24198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23910__auto__;
}
break;
}
}catch (e24207){if((e24207 instanceof Object)){
var ex__23911__auto__ = e24207;
var statearr_24208_24353 = state_24198;
(statearr_24208_24353[(5)] = ex__23911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24354 = state_24198;
state_24198 = G__24354;
continue;
} else {
return ret_value__23909__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23908__auto__ = function(state_24198){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23908__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23908__auto____1.call(this,state_24198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23908__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23908__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23908__auto__;
})()
;})(__24342,switch__23907__auto__,c__24002__auto___24346,G__24185_24343,G__24185_24344__$1,n__4607__auto___24341,jobs,results,process,async))
})();
var state__24004__auto__ = (function (){var statearr_24209 = f__24003__auto__.call(null);
(statearr_24209[(6)] = c__24002__auto___24346);

return statearr_24209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24004__auto__);
});})(__24342,c__24002__auto___24346,G__24185_24343,G__24185_24344__$1,n__4607__auto___24341,jobs,results,process,async))
);


break;
case "async":
var c__24002__auto___24355 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24342,c__24002__auto___24355,G__24185_24343,G__24185_24344__$1,n__4607__auto___24341,jobs,results,process,async){
return (function (){
var f__24003__auto__ = (function (){var switch__23907__auto__ = ((function (__24342,c__24002__auto___24355,G__24185_24343,G__24185_24344__$1,n__4607__auto___24341,jobs,results,process,async){
return (function (state_24222){
var state_val_24223 = (state_24222[(1)]);
if((state_val_24223 === (1))){
var state_24222__$1 = state_24222;
var statearr_24224_24356 = state_24222__$1;
(statearr_24224_24356[(2)] = null);

(statearr_24224_24356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24223 === (2))){
var state_24222__$1 = state_24222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24222__$1,(4),jobs);
} else {
if((state_val_24223 === (3))){
var inst_24220 = (state_24222[(2)]);
var state_24222__$1 = state_24222;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24222__$1,inst_24220);
} else {
if((state_val_24223 === (4))){
var inst_24212 = (state_24222[(2)]);
var inst_24213 = async.call(null,inst_24212);
var state_24222__$1 = state_24222;
if(cljs.core.truth_(inst_24213)){
var statearr_24225_24357 = state_24222__$1;
(statearr_24225_24357[(1)] = (5));

} else {
var statearr_24226_24358 = state_24222__$1;
(statearr_24226_24358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24223 === (5))){
var state_24222__$1 = state_24222;
var statearr_24227_24359 = state_24222__$1;
(statearr_24227_24359[(2)] = null);

(statearr_24227_24359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24223 === (6))){
var state_24222__$1 = state_24222;
var statearr_24228_24360 = state_24222__$1;
(statearr_24228_24360[(2)] = null);

(statearr_24228_24360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24223 === (7))){
var inst_24218 = (state_24222[(2)]);
var state_24222__$1 = state_24222;
var statearr_24229_24361 = state_24222__$1;
(statearr_24229_24361[(2)] = inst_24218);

(statearr_24229_24361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__24342,c__24002__auto___24355,G__24185_24343,G__24185_24344__$1,n__4607__auto___24341,jobs,results,process,async))
;
return ((function (__24342,switch__23907__auto__,c__24002__auto___24355,G__24185_24343,G__24185_24344__$1,n__4607__auto___24341,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23908__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23908__auto____0 = (function (){
var statearr_24230 = [null,null,null,null,null,null,null];
(statearr_24230[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23908__auto__);

(statearr_24230[(1)] = (1));

return statearr_24230;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23908__auto____1 = (function (state_24222){
while(true){
var ret_value__23909__auto__ = (function (){try{while(true){
var result__23910__auto__ = switch__23907__auto__.call(null,state_24222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23910__auto__;
}
break;
}
}catch (e24231){if((e24231 instanceof Object)){
var ex__23911__auto__ = e24231;
var statearr_24232_24362 = state_24222;
(statearr_24232_24362[(5)] = ex__23911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24363 = state_24222;
state_24222 = G__24363;
continue;
} else {
return ret_value__23909__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23908__auto__ = function(state_24222){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23908__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23908__auto____1.call(this,state_24222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23908__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23908__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23908__auto__;
})()
;})(__24342,switch__23907__auto__,c__24002__auto___24355,G__24185_24343,G__24185_24344__$1,n__4607__auto___24341,jobs,results,process,async))
})();
var state__24004__auto__ = (function (){var statearr_24233 = f__24003__auto__.call(null);
(statearr_24233[(6)] = c__24002__auto___24355);

return statearr_24233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24004__auto__);
});})(__24342,c__24002__auto___24355,G__24185_24343,G__24185_24344__$1,n__4607__auto___24341,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24185_24344__$1)].join('')));

}

var G__24364 = (__24342 + (1));
__24342 = G__24364;
continue;
} else {
}
break;
}

var c__24002__auto___24365 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24002__auto___24365,jobs,results,process,async){
return (function (){
var f__24003__auto__ = (function (){var switch__23907__auto__ = ((function (c__24002__auto___24365,jobs,results,process,async){
return (function (state_24255){
var state_val_24256 = (state_24255[(1)]);
if((state_val_24256 === (7))){
var inst_24251 = (state_24255[(2)]);
var state_24255__$1 = state_24255;
var statearr_24257_24366 = state_24255__$1;
(statearr_24257_24366[(2)] = inst_24251);

(statearr_24257_24366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (1))){
var state_24255__$1 = state_24255;
var statearr_24258_24367 = state_24255__$1;
(statearr_24258_24367[(2)] = null);

(statearr_24258_24367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (4))){
var inst_24236 = (state_24255[(7)]);
var inst_24236__$1 = (state_24255[(2)]);
var inst_24237 = (inst_24236__$1 == null);
var state_24255__$1 = (function (){var statearr_24259 = state_24255;
(statearr_24259[(7)] = inst_24236__$1);

return statearr_24259;
})();
if(cljs.core.truth_(inst_24237)){
var statearr_24260_24368 = state_24255__$1;
(statearr_24260_24368[(1)] = (5));

} else {
var statearr_24261_24369 = state_24255__$1;
(statearr_24261_24369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (6))){
var inst_24236 = (state_24255[(7)]);
var inst_24241 = (state_24255[(8)]);
var inst_24241__$1 = cljs.core.async.chan.call(null,(1));
var inst_24242 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24243 = [inst_24236,inst_24241__$1];
var inst_24244 = (new cljs.core.PersistentVector(null,2,(5),inst_24242,inst_24243,null));
var state_24255__$1 = (function (){var statearr_24262 = state_24255;
(statearr_24262[(8)] = inst_24241__$1);

return statearr_24262;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24255__$1,(8),jobs,inst_24244);
} else {
if((state_val_24256 === (3))){
var inst_24253 = (state_24255[(2)]);
var state_24255__$1 = state_24255;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24255__$1,inst_24253);
} else {
if((state_val_24256 === (2))){
var state_24255__$1 = state_24255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24255__$1,(4),from);
} else {
if((state_val_24256 === (9))){
var inst_24248 = (state_24255[(2)]);
var state_24255__$1 = (function (){var statearr_24263 = state_24255;
(statearr_24263[(9)] = inst_24248);

return statearr_24263;
})();
var statearr_24264_24370 = state_24255__$1;
(statearr_24264_24370[(2)] = null);

(statearr_24264_24370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (5))){
var inst_24239 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24255__$1 = state_24255;
var statearr_24265_24371 = state_24255__$1;
(statearr_24265_24371[(2)] = inst_24239);

(statearr_24265_24371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (8))){
var inst_24241 = (state_24255[(8)]);
var inst_24246 = (state_24255[(2)]);
var state_24255__$1 = (function (){var statearr_24266 = state_24255;
(statearr_24266[(10)] = inst_24246);

return statearr_24266;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24255__$1,(9),results,inst_24241);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__24002__auto___24365,jobs,results,process,async))
;
return ((function (switch__23907__auto__,c__24002__auto___24365,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23908__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23908__auto____0 = (function (){
var statearr_24267 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24267[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23908__auto__);

(statearr_24267[(1)] = (1));

return statearr_24267;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23908__auto____1 = (function (state_24255){
while(true){
var ret_value__23909__auto__ = (function (){try{while(true){
var result__23910__auto__ = switch__23907__auto__.call(null,state_24255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23910__auto__;
}
break;
}
}catch (e24268){if((e24268 instanceof Object)){
var ex__23911__auto__ = e24268;
var statearr_24269_24372 = state_24255;
(statearr_24269_24372[(5)] = ex__23911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24373 = state_24255;
state_24255 = G__24373;
continue;
} else {
return ret_value__23909__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23908__auto__ = function(state_24255){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23908__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23908__auto____1.call(this,state_24255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23908__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23908__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23908__auto__;
})()
;})(switch__23907__auto__,c__24002__auto___24365,jobs,results,process,async))
})();
var state__24004__auto__ = (function (){var statearr_24270 = f__24003__auto__.call(null);
(statearr_24270[(6)] = c__24002__auto___24365);

return statearr_24270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24004__auto__);
});})(c__24002__auto___24365,jobs,results,process,async))
);


var c__24002__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24002__auto__,jobs,results,process,async){
return (function (){
var f__24003__auto__ = (function (){var switch__23907__auto__ = ((function (c__24002__auto__,jobs,results,process,async){
return (function (state_24308){
var state_val_24309 = (state_24308[(1)]);
if((state_val_24309 === (7))){
var inst_24304 = (state_24308[(2)]);
var state_24308__$1 = state_24308;
var statearr_24310_24374 = state_24308__$1;
(statearr_24310_24374[(2)] = inst_24304);

(statearr_24310_24374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24309 === (20))){
var state_24308__$1 = state_24308;
var statearr_24311_24375 = state_24308__$1;
(statearr_24311_24375[(2)] = null);

(statearr_24311_24375[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24309 === (1))){
var state_24308__$1 = state_24308;
var statearr_24312_24376 = state_24308__$1;
(statearr_24312_24376[(2)] = null);

(statearr_24312_24376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24309 === (4))){
var inst_24273 = (state_24308[(7)]);
var inst_24273__$1 = (state_24308[(2)]);
var inst_24274 = (inst_24273__$1 == null);
var state_24308__$1 = (function (){var statearr_24313 = state_24308;
(statearr_24313[(7)] = inst_24273__$1);

return statearr_24313;
})();
if(cljs.core.truth_(inst_24274)){
var statearr_24314_24377 = state_24308__$1;
(statearr_24314_24377[(1)] = (5));

} else {
var statearr_24315_24378 = state_24308__$1;
(statearr_24315_24378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24309 === (15))){
var inst_24286 = (state_24308[(8)]);
var state_24308__$1 = state_24308;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24308__$1,(18),to,inst_24286);
} else {
if((state_val_24309 === (21))){
var inst_24299 = (state_24308[(2)]);
var state_24308__$1 = state_24308;
var statearr_24316_24379 = state_24308__$1;
(statearr_24316_24379[(2)] = inst_24299);

(statearr_24316_24379[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24309 === (13))){
var inst_24301 = (state_24308[(2)]);
var state_24308__$1 = (function (){var statearr_24317 = state_24308;
(statearr_24317[(9)] = inst_24301);

return statearr_24317;
})();
var statearr_24318_24380 = state_24308__$1;
(statearr_24318_24380[(2)] = null);

(statearr_24318_24380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24309 === (6))){
var inst_24273 = (state_24308[(7)]);
var state_24308__$1 = state_24308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24308__$1,(11),inst_24273);
} else {
if((state_val_24309 === (17))){
var inst_24294 = (state_24308[(2)]);
var state_24308__$1 = state_24308;
if(cljs.core.truth_(inst_24294)){
var statearr_24319_24381 = state_24308__$1;
(statearr_24319_24381[(1)] = (19));

} else {
var statearr_24320_24382 = state_24308__$1;
(statearr_24320_24382[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24309 === (3))){
var inst_24306 = (state_24308[(2)]);
var state_24308__$1 = state_24308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24308__$1,inst_24306);
} else {
if((state_val_24309 === (12))){
var inst_24283 = (state_24308[(10)]);
var state_24308__$1 = state_24308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24308__$1,(14),inst_24283);
} else {
if((state_val_24309 === (2))){
var state_24308__$1 = state_24308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24308__$1,(4),results);
} else {
if((state_val_24309 === (19))){
var state_24308__$1 = state_24308;
var statearr_24321_24383 = state_24308__$1;
(statearr_24321_24383[(2)] = null);

(statearr_24321_24383[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24309 === (11))){
var inst_24283 = (state_24308[(2)]);
var state_24308__$1 = (function (){var statearr_24322 = state_24308;
(statearr_24322[(10)] = inst_24283);

return statearr_24322;
})();
var statearr_24323_24384 = state_24308__$1;
(statearr_24323_24384[(2)] = null);

(statearr_24323_24384[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24309 === (9))){
var state_24308__$1 = state_24308;
var statearr_24324_24385 = state_24308__$1;
(statearr_24324_24385[(2)] = null);

(statearr_24324_24385[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24309 === (5))){
var state_24308__$1 = state_24308;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24325_24386 = state_24308__$1;
(statearr_24325_24386[(1)] = (8));

} else {
var statearr_24326_24387 = state_24308__$1;
(statearr_24326_24387[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24309 === (14))){
var inst_24286 = (state_24308[(8)]);
var inst_24288 = (state_24308[(11)]);
var inst_24286__$1 = (state_24308[(2)]);
var inst_24287 = (inst_24286__$1 == null);
var inst_24288__$1 = cljs.core.not.call(null,inst_24287);
var state_24308__$1 = (function (){var statearr_24327 = state_24308;
(statearr_24327[(8)] = inst_24286__$1);

(statearr_24327[(11)] = inst_24288__$1);

return statearr_24327;
})();
if(inst_24288__$1){
var statearr_24328_24388 = state_24308__$1;
(statearr_24328_24388[(1)] = (15));

} else {
var statearr_24329_24389 = state_24308__$1;
(statearr_24329_24389[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24309 === (16))){
var inst_24288 = (state_24308[(11)]);
var state_24308__$1 = state_24308;
var statearr_24330_24390 = state_24308__$1;
(statearr_24330_24390[(2)] = inst_24288);

(statearr_24330_24390[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24309 === (10))){
var inst_24280 = (state_24308[(2)]);
var state_24308__$1 = state_24308;
var statearr_24331_24391 = state_24308__$1;
(statearr_24331_24391[(2)] = inst_24280);

(statearr_24331_24391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24309 === (18))){
var inst_24291 = (state_24308[(2)]);
var state_24308__$1 = state_24308;
var statearr_24332_24392 = state_24308__$1;
(statearr_24332_24392[(2)] = inst_24291);

(statearr_24332_24392[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24309 === (8))){
var inst_24277 = cljs.core.async.close_BANG_.call(null,to);
var state_24308__$1 = state_24308;
var statearr_24333_24393 = state_24308__$1;
(statearr_24333_24393[(2)] = inst_24277);

(statearr_24333_24393[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24002__auto__,jobs,results,process,async))
;
return ((function (switch__23907__auto__,c__24002__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23908__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23908__auto____0 = (function (){
var statearr_24334 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24334[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23908__auto__);

(statearr_24334[(1)] = (1));

return statearr_24334;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23908__auto____1 = (function (state_24308){
while(true){
var ret_value__23909__auto__ = (function (){try{while(true){
var result__23910__auto__ = switch__23907__auto__.call(null,state_24308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23910__auto__;
}
break;
}
}catch (e24335){if((e24335 instanceof Object)){
var ex__23911__auto__ = e24335;
var statearr_24336_24394 = state_24308;
(statearr_24336_24394[(5)] = ex__23911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24395 = state_24308;
state_24308 = G__24395;
continue;
} else {
return ret_value__23909__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23908__auto__ = function(state_24308){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23908__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23908__auto____1.call(this,state_24308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23908__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23908__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23908__auto__;
})()
;})(switch__23907__auto__,c__24002__auto__,jobs,results,process,async))
})();
var state__24004__auto__ = (function (){var statearr_24337 = f__24003__auto__.call(null);
(statearr_24337[(6)] = c__24002__auto__);

return statearr_24337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24004__auto__);
});})(c__24002__auto__,jobs,results,process,async))
);

return c__24002__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__24397 = arguments.length;
switch (G__24397) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__24400 = arguments.length;
switch (G__24400) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__24403 = arguments.length;
switch (G__24403) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24002__auto___24452 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24002__auto___24452,tc,fc){
return (function (){
var f__24003__auto__ = (function (){var switch__23907__auto__ = ((function (c__24002__auto___24452,tc,fc){
return (function (state_24429){
var state_val_24430 = (state_24429[(1)]);
if((state_val_24430 === (7))){
var inst_24425 = (state_24429[(2)]);
var state_24429__$1 = state_24429;
var statearr_24431_24453 = state_24429__$1;
(statearr_24431_24453[(2)] = inst_24425);

(statearr_24431_24453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24430 === (1))){
var state_24429__$1 = state_24429;
var statearr_24432_24454 = state_24429__$1;
(statearr_24432_24454[(2)] = null);

(statearr_24432_24454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24430 === (4))){
var inst_24406 = (state_24429[(7)]);
var inst_24406__$1 = (state_24429[(2)]);
var inst_24407 = (inst_24406__$1 == null);
var state_24429__$1 = (function (){var statearr_24433 = state_24429;
(statearr_24433[(7)] = inst_24406__$1);

return statearr_24433;
})();
if(cljs.core.truth_(inst_24407)){
var statearr_24434_24455 = state_24429__$1;
(statearr_24434_24455[(1)] = (5));

} else {
var statearr_24435_24456 = state_24429__$1;
(statearr_24435_24456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24430 === (13))){
var state_24429__$1 = state_24429;
var statearr_24436_24457 = state_24429__$1;
(statearr_24436_24457[(2)] = null);

(statearr_24436_24457[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24430 === (6))){
var inst_24406 = (state_24429[(7)]);
var inst_24412 = p.call(null,inst_24406);
var state_24429__$1 = state_24429;
if(cljs.core.truth_(inst_24412)){
var statearr_24437_24458 = state_24429__$1;
(statearr_24437_24458[(1)] = (9));

} else {
var statearr_24438_24459 = state_24429__$1;
(statearr_24438_24459[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24430 === (3))){
var inst_24427 = (state_24429[(2)]);
var state_24429__$1 = state_24429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24429__$1,inst_24427);
} else {
if((state_val_24430 === (12))){
var state_24429__$1 = state_24429;
var statearr_24439_24460 = state_24429__$1;
(statearr_24439_24460[(2)] = null);

(statearr_24439_24460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24430 === (2))){
var state_24429__$1 = state_24429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24429__$1,(4),ch);
} else {
if((state_val_24430 === (11))){
var inst_24406 = (state_24429[(7)]);
var inst_24416 = (state_24429[(2)]);
var state_24429__$1 = state_24429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24429__$1,(8),inst_24416,inst_24406);
} else {
if((state_val_24430 === (9))){
var state_24429__$1 = state_24429;
var statearr_24440_24461 = state_24429__$1;
(statearr_24440_24461[(2)] = tc);

(statearr_24440_24461[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24430 === (5))){
var inst_24409 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24410 = cljs.core.async.close_BANG_.call(null,fc);
var state_24429__$1 = (function (){var statearr_24441 = state_24429;
(statearr_24441[(8)] = inst_24409);

return statearr_24441;
})();
var statearr_24442_24462 = state_24429__$1;
(statearr_24442_24462[(2)] = inst_24410);

(statearr_24442_24462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24430 === (14))){
var inst_24423 = (state_24429[(2)]);
var state_24429__$1 = state_24429;
var statearr_24443_24463 = state_24429__$1;
(statearr_24443_24463[(2)] = inst_24423);

(statearr_24443_24463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24430 === (10))){
var state_24429__$1 = state_24429;
var statearr_24444_24464 = state_24429__$1;
(statearr_24444_24464[(2)] = fc);

(statearr_24444_24464[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24430 === (8))){
var inst_24418 = (state_24429[(2)]);
var state_24429__$1 = state_24429;
if(cljs.core.truth_(inst_24418)){
var statearr_24445_24465 = state_24429__$1;
(statearr_24445_24465[(1)] = (12));

} else {
var statearr_24446_24466 = state_24429__$1;
(statearr_24446_24466[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24002__auto___24452,tc,fc))
;
return ((function (switch__23907__auto__,c__24002__auto___24452,tc,fc){
return (function() {
var cljs$core$async$state_machine__23908__auto__ = null;
var cljs$core$async$state_machine__23908__auto____0 = (function (){
var statearr_24447 = [null,null,null,null,null,null,null,null,null];
(statearr_24447[(0)] = cljs$core$async$state_machine__23908__auto__);

(statearr_24447[(1)] = (1));

return statearr_24447;
});
var cljs$core$async$state_machine__23908__auto____1 = (function (state_24429){
while(true){
var ret_value__23909__auto__ = (function (){try{while(true){
var result__23910__auto__ = switch__23907__auto__.call(null,state_24429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23910__auto__;
}
break;
}
}catch (e24448){if((e24448 instanceof Object)){
var ex__23911__auto__ = e24448;
var statearr_24449_24467 = state_24429;
(statearr_24449_24467[(5)] = ex__23911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24468 = state_24429;
state_24429 = G__24468;
continue;
} else {
return ret_value__23909__auto__;
}
break;
}
});
cljs$core$async$state_machine__23908__auto__ = function(state_24429){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23908__auto____1.call(this,state_24429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23908__auto____0;
cljs$core$async$state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23908__auto____1;
return cljs$core$async$state_machine__23908__auto__;
})()
;})(switch__23907__auto__,c__24002__auto___24452,tc,fc))
})();
var state__24004__auto__ = (function (){var statearr_24450 = f__24003__auto__.call(null);
(statearr_24450[(6)] = c__24002__auto___24452);

return statearr_24450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24004__auto__);
});})(c__24002__auto___24452,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__24002__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24002__auto__){
return (function (){
var f__24003__auto__ = (function (){var switch__23907__auto__ = ((function (c__24002__auto__){
return (function (state_24489){
var state_val_24490 = (state_24489[(1)]);
if((state_val_24490 === (7))){
var inst_24485 = (state_24489[(2)]);
var state_24489__$1 = state_24489;
var statearr_24491_24509 = state_24489__$1;
(statearr_24491_24509[(2)] = inst_24485);

(statearr_24491_24509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24490 === (1))){
var inst_24469 = init;
var state_24489__$1 = (function (){var statearr_24492 = state_24489;
(statearr_24492[(7)] = inst_24469);

return statearr_24492;
})();
var statearr_24493_24510 = state_24489__$1;
(statearr_24493_24510[(2)] = null);

(statearr_24493_24510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24490 === (4))){
var inst_24472 = (state_24489[(8)]);
var inst_24472__$1 = (state_24489[(2)]);
var inst_24473 = (inst_24472__$1 == null);
var state_24489__$1 = (function (){var statearr_24494 = state_24489;
(statearr_24494[(8)] = inst_24472__$1);

return statearr_24494;
})();
if(cljs.core.truth_(inst_24473)){
var statearr_24495_24511 = state_24489__$1;
(statearr_24495_24511[(1)] = (5));

} else {
var statearr_24496_24512 = state_24489__$1;
(statearr_24496_24512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24490 === (6))){
var inst_24472 = (state_24489[(8)]);
var inst_24469 = (state_24489[(7)]);
var inst_24476 = (state_24489[(9)]);
var inst_24476__$1 = f.call(null,inst_24469,inst_24472);
var inst_24477 = cljs.core.reduced_QMARK_.call(null,inst_24476__$1);
var state_24489__$1 = (function (){var statearr_24497 = state_24489;
(statearr_24497[(9)] = inst_24476__$1);

return statearr_24497;
})();
if(inst_24477){
var statearr_24498_24513 = state_24489__$1;
(statearr_24498_24513[(1)] = (8));

} else {
var statearr_24499_24514 = state_24489__$1;
(statearr_24499_24514[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24490 === (3))){
var inst_24487 = (state_24489[(2)]);
var state_24489__$1 = state_24489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24489__$1,inst_24487);
} else {
if((state_val_24490 === (2))){
var state_24489__$1 = state_24489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24489__$1,(4),ch);
} else {
if((state_val_24490 === (9))){
var inst_24476 = (state_24489[(9)]);
var inst_24469 = inst_24476;
var state_24489__$1 = (function (){var statearr_24500 = state_24489;
(statearr_24500[(7)] = inst_24469);

return statearr_24500;
})();
var statearr_24501_24515 = state_24489__$1;
(statearr_24501_24515[(2)] = null);

(statearr_24501_24515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24490 === (5))){
var inst_24469 = (state_24489[(7)]);
var state_24489__$1 = state_24489;
var statearr_24502_24516 = state_24489__$1;
(statearr_24502_24516[(2)] = inst_24469);

(statearr_24502_24516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24490 === (10))){
var inst_24483 = (state_24489[(2)]);
var state_24489__$1 = state_24489;
var statearr_24503_24517 = state_24489__$1;
(statearr_24503_24517[(2)] = inst_24483);

(statearr_24503_24517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24490 === (8))){
var inst_24476 = (state_24489[(9)]);
var inst_24479 = cljs.core.deref.call(null,inst_24476);
var state_24489__$1 = state_24489;
var statearr_24504_24518 = state_24489__$1;
(statearr_24504_24518[(2)] = inst_24479);

(statearr_24504_24518[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__24002__auto__))
;
return ((function (switch__23907__auto__,c__24002__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23908__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23908__auto____0 = (function (){
var statearr_24505 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24505[(0)] = cljs$core$async$reduce_$_state_machine__23908__auto__);

(statearr_24505[(1)] = (1));

return statearr_24505;
});
var cljs$core$async$reduce_$_state_machine__23908__auto____1 = (function (state_24489){
while(true){
var ret_value__23909__auto__ = (function (){try{while(true){
var result__23910__auto__ = switch__23907__auto__.call(null,state_24489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23910__auto__;
}
break;
}
}catch (e24506){if((e24506 instanceof Object)){
var ex__23911__auto__ = e24506;
var statearr_24507_24519 = state_24489;
(statearr_24507_24519[(5)] = ex__23911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24520 = state_24489;
state_24489 = G__24520;
continue;
} else {
return ret_value__23909__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23908__auto__ = function(state_24489){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23908__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23908__auto____1.call(this,state_24489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23908__auto____0;
cljs$core$async$reduce_$_state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23908__auto____1;
return cljs$core$async$reduce_$_state_machine__23908__auto__;
})()
;})(switch__23907__auto__,c__24002__auto__))
})();
var state__24004__auto__ = (function (){var statearr_24508 = f__24003__auto__.call(null);
(statearr_24508[(6)] = c__24002__auto__);

return statearr_24508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24004__auto__);
});})(c__24002__auto__))
);

return c__24002__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24002__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24002__auto__,f__$1){
return (function (){
var f__24003__auto__ = (function (){var switch__23907__auto__ = ((function (c__24002__auto__,f__$1){
return (function (state_24526){
var state_val_24527 = (state_24526[(1)]);
if((state_val_24527 === (1))){
var inst_24521 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24526__$1 = state_24526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24526__$1,(2),inst_24521);
} else {
if((state_val_24527 === (2))){
var inst_24523 = (state_24526[(2)]);
var inst_24524 = f__$1.call(null,inst_24523);
var state_24526__$1 = state_24526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24526__$1,inst_24524);
} else {
return null;
}
}
});})(c__24002__auto__,f__$1))
;
return ((function (switch__23907__auto__,c__24002__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23908__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23908__auto____0 = (function (){
var statearr_24528 = [null,null,null,null,null,null,null];
(statearr_24528[(0)] = cljs$core$async$transduce_$_state_machine__23908__auto__);

(statearr_24528[(1)] = (1));

return statearr_24528;
});
var cljs$core$async$transduce_$_state_machine__23908__auto____1 = (function (state_24526){
while(true){
var ret_value__23909__auto__ = (function (){try{while(true){
var result__23910__auto__ = switch__23907__auto__.call(null,state_24526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23910__auto__;
}
break;
}
}catch (e24529){if((e24529 instanceof Object)){
var ex__23911__auto__ = e24529;
var statearr_24530_24532 = state_24526;
(statearr_24530_24532[(5)] = ex__23911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24533 = state_24526;
state_24526 = G__24533;
continue;
} else {
return ret_value__23909__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23908__auto__ = function(state_24526){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23908__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23908__auto____1.call(this,state_24526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23908__auto____0;
cljs$core$async$transduce_$_state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23908__auto____1;
return cljs$core$async$transduce_$_state_machine__23908__auto__;
})()
;})(switch__23907__auto__,c__24002__auto__,f__$1))
})();
var state__24004__auto__ = (function (){var statearr_24531 = f__24003__auto__.call(null);
(statearr_24531[(6)] = c__24002__auto__);

return statearr_24531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24004__auto__);
});})(c__24002__auto__,f__$1))
);

return c__24002__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__24535 = arguments.length;
switch (G__24535) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24002__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24002__auto__){
return (function (){
var f__24003__auto__ = (function (){var switch__23907__auto__ = ((function (c__24002__auto__){
return (function (state_24560){
var state_val_24561 = (state_24560[(1)]);
if((state_val_24561 === (7))){
var inst_24542 = (state_24560[(2)]);
var state_24560__$1 = state_24560;
var statearr_24562_24583 = state_24560__$1;
(statearr_24562_24583[(2)] = inst_24542);

(statearr_24562_24583[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (1))){
var inst_24536 = cljs.core.seq.call(null,coll);
var inst_24537 = inst_24536;
var state_24560__$1 = (function (){var statearr_24563 = state_24560;
(statearr_24563[(7)] = inst_24537);

return statearr_24563;
})();
var statearr_24564_24584 = state_24560__$1;
(statearr_24564_24584[(2)] = null);

(statearr_24564_24584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (4))){
var inst_24537 = (state_24560[(7)]);
var inst_24540 = cljs.core.first.call(null,inst_24537);
var state_24560__$1 = state_24560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24560__$1,(7),ch,inst_24540);
} else {
if((state_val_24561 === (13))){
var inst_24554 = (state_24560[(2)]);
var state_24560__$1 = state_24560;
var statearr_24565_24585 = state_24560__$1;
(statearr_24565_24585[(2)] = inst_24554);

(statearr_24565_24585[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (6))){
var inst_24545 = (state_24560[(2)]);
var state_24560__$1 = state_24560;
if(cljs.core.truth_(inst_24545)){
var statearr_24566_24586 = state_24560__$1;
(statearr_24566_24586[(1)] = (8));

} else {
var statearr_24567_24587 = state_24560__$1;
(statearr_24567_24587[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (3))){
var inst_24558 = (state_24560[(2)]);
var state_24560__$1 = state_24560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24560__$1,inst_24558);
} else {
if((state_val_24561 === (12))){
var state_24560__$1 = state_24560;
var statearr_24568_24588 = state_24560__$1;
(statearr_24568_24588[(2)] = null);

(statearr_24568_24588[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (2))){
var inst_24537 = (state_24560[(7)]);
var state_24560__$1 = state_24560;
if(cljs.core.truth_(inst_24537)){
var statearr_24569_24589 = state_24560__$1;
(statearr_24569_24589[(1)] = (4));

} else {
var statearr_24570_24590 = state_24560__$1;
(statearr_24570_24590[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (11))){
var inst_24551 = cljs.core.async.close_BANG_.call(null,ch);
var state_24560__$1 = state_24560;
var statearr_24571_24591 = state_24560__$1;
(statearr_24571_24591[(2)] = inst_24551);

(statearr_24571_24591[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (9))){
var state_24560__$1 = state_24560;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24572_24592 = state_24560__$1;
(statearr_24572_24592[(1)] = (11));

} else {
var statearr_24573_24593 = state_24560__$1;
(statearr_24573_24593[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (5))){
var inst_24537 = (state_24560[(7)]);
var state_24560__$1 = state_24560;
var statearr_24574_24594 = state_24560__$1;
(statearr_24574_24594[(2)] = inst_24537);

(statearr_24574_24594[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (10))){
var inst_24556 = (state_24560[(2)]);
var state_24560__$1 = state_24560;
var statearr_24575_24595 = state_24560__$1;
(statearr_24575_24595[(2)] = inst_24556);

(statearr_24575_24595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24561 === (8))){
var inst_24537 = (state_24560[(7)]);
var inst_24547 = cljs.core.next.call(null,inst_24537);
var inst_24537__$1 = inst_24547;
var state_24560__$1 = (function (){var statearr_24576 = state_24560;
(statearr_24576[(7)] = inst_24537__$1);

return statearr_24576;
})();
var statearr_24577_24596 = state_24560__$1;
(statearr_24577_24596[(2)] = null);

(statearr_24577_24596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24002__auto__))
;
return ((function (switch__23907__auto__,c__24002__auto__){
return (function() {
var cljs$core$async$state_machine__23908__auto__ = null;
var cljs$core$async$state_machine__23908__auto____0 = (function (){
var statearr_24578 = [null,null,null,null,null,null,null,null];
(statearr_24578[(0)] = cljs$core$async$state_machine__23908__auto__);

(statearr_24578[(1)] = (1));

return statearr_24578;
});
var cljs$core$async$state_machine__23908__auto____1 = (function (state_24560){
while(true){
var ret_value__23909__auto__ = (function (){try{while(true){
var result__23910__auto__ = switch__23907__auto__.call(null,state_24560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23910__auto__;
}
break;
}
}catch (e24579){if((e24579 instanceof Object)){
var ex__23911__auto__ = e24579;
var statearr_24580_24597 = state_24560;
(statearr_24580_24597[(5)] = ex__23911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24598 = state_24560;
state_24560 = G__24598;
continue;
} else {
return ret_value__23909__auto__;
}
break;
}
});
cljs$core$async$state_machine__23908__auto__ = function(state_24560){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23908__auto____1.call(this,state_24560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23908__auto____0;
cljs$core$async$state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23908__auto____1;
return cljs$core$async$state_machine__23908__auto__;
})()
;})(switch__23907__auto__,c__24002__auto__))
})();
var state__24004__auto__ = (function (){var statearr_24581 = f__24003__auto__.call(null);
(statearr_24581[(6)] = c__24002__auto__);

return statearr_24581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24004__auto__);
});})(c__24002__auto__))
);

return c__24002__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24599 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24599 = (function (ch,cs,meta24600){
this.ch = ch;
this.cs = cs;
this.meta24600 = meta24600;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24601,meta24600__$1){
var self__ = this;
var _24601__$1 = this;
return (new cljs.core.async.t_cljs$core$async24599(self__.ch,self__.cs,meta24600__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24599.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24601){
var self__ = this;
var _24601__$1 = this;
return self__.meta24600;
});})(cs))
;

cljs.core.async.t_cljs$core$async24599.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24599.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24599.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24599.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24599.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24599.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24599.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24600","meta24600",957845086,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24599.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24599.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24599";

cljs.core.async.t_cljs$core$async24599.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24599");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24599.
 */
cljs.core.async.__GT_t_cljs$core$async24599 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24599(ch__$1,cs__$1,meta24600){
return (new cljs.core.async.t_cljs$core$async24599(ch__$1,cs__$1,meta24600));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24599(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__24002__auto___24821 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24002__auto___24821,cs,m,dchan,dctr,done){
return (function (){
var f__24003__auto__ = (function (){var switch__23907__auto__ = ((function (c__24002__auto___24821,cs,m,dchan,dctr,done){
return (function (state_24736){
var state_val_24737 = (state_24736[(1)]);
if((state_val_24737 === (7))){
var inst_24732 = (state_24736[(2)]);
var state_24736__$1 = state_24736;
var statearr_24738_24822 = state_24736__$1;
(statearr_24738_24822[(2)] = inst_24732);

(statearr_24738_24822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (20))){
var inst_24635 = (state_24736[(7)]);
var inst_24647 = cljs.core.first.call(null,inst_24635);
var inst_24648 = cljs.core.nth.call(null,inst_24647,(0),null);
var inst_24649 = cljs.core.nth.call(null,inst_24647,(1),null);
var state_24736__$1 = (function (){var statearr_24739 = state_24736;
(statearr_24739[(8)] = inst_24648);

return statearr_24739;
})();
if(cljs.core.truth_(inst_24649)){
var statearr_24740_24823 = state_24736__$1;
(statearr_24740_24823[(1)] = (22));

} else {
var statearr_24741_24824 = state_24736__$1;
(statearr_24741_24824[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (27))){
var inst_24677 = (state_24736[(9)]);
var inst_24604 = (state_24736[(10)]);
var inst_24679 = (state_24736[(11)]);
var inst_24684 = (state_24736[(12)]);
var inst_24684__$1 = cljs.core._nth.call(null,inst_24677,inst_24679);
var inst_24685 = cljs.core.async.put_BANG_.call(null,inst_24684__$1,inst_24604,done);
var state_24736__$1 = (function (){var statearr_24742 = state_24736;
(statearr_24742[(12)] = inst_24684__$1);

return statearr_24742;
})();
if(cljs.core.truth_(inst_24685)){
var statearr_24743_24825 = state_24736__$1;
(statearr_24743_24825[(1)] = (30));

} else {
var statearr_24744_24826 = state_24736__$1;
(statearr_24744_24826[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (1))){
var state_24736__$1 = state_24736;
var statearr_24745_24827 = state_24736__$1;
(statearr_24745_24827[(2)] = null);

(statearr_24745_24827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (24))){
var inst_24635 = (state_24736[(7)]);
var inst_24654 = (state_24736[(2)]);
var inst_24655 = cljs.core.next.call(null,inst_24635);
var inst_24613 = inst_24655;
var inst_24614 = null;
var inst_24615 = (0);
var inst_24616 = (0);
var state_24736__$1 = (function (){var statearr_24746 = state_24736;
(statearr_24746[(13)] = inst_24654);

(statearr_24746[(14)] = inst_24615);

(statearr_24746[(15)] = inst_24613);

(statearr_24746[(16)] = inst_24614);

(statearr_24746[(17)] = inst_24616);

return statearr_24746;
})();
var statearr_24747_24828 = state_24736__$1;
(statearr_24747_24828[(2)] = null);

(statearr_24747_24828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (39))){
var state_24736__$1 = state_24736;
var statearr_24751_24829 = state_24736__$1;
(statearr_24751_24829[(2)] = null);

(statearr_24751_24829[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (4))){
var inst_24604 = (state_24736[(10)]);
var inst_24604__$1 = (state_24736[(2)]);
var inst_24605 = (inst_24604__$1 == null);
var state_24736__$1 = (function (){var statearr_24752 = state_24736;
(statearr_24752[(10)] = inst_24604__$1);

return statearr_24752;
})();
if(cljs.core.truth_(inst_24605)){
var statearr_24753_24830 = state_24736__$1;
(statearr_24753_24830[(1)] = (5));

} else {
var statearr_24754_24831 = state_24736__$1;
(statearr_24754_24831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (15))){
var inst_24615 = (state_24736[(14)]);
var inst_24613 = (state_24736[(15)]);
var inst_24614 = (state_24736[(16)]);
var inst_24616 = (state_24736[(17)]);
var inst_24631 = (state_24736[(2)]);
var inst_24632 = (inst_24616 + (1));
var tmp24748 = inst_24615;
var tmp24749 = inst_24613;
var tmp24750 = inst_24614;
var inst_24613__$1 = tmp24749;
var inst_24614__$1 = tmp24750;
var inst_24615__$1 = tmp24748;
var inst_24616__$1 = inst_24632;
var state_24736__$1 = (function (){var statearr_24755 = state_24736;
(statearr_24755[(14)] = inst_24615__$1);

(statearr_24755[(15)] = inst_24613__$1);

(statearr_24755[(16)] = inst_24614__$1);

(statearr_24755[(18)] = inst_24631);

(statearr_24755[(17)] = inst_24616__$1);

return statearr_24755;
})();
var statearr_24756_24832 = state_24736__$1;
(statearr_24756_24832[(2)] = null);

(statearr_24756_24832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (21))){
var inst_24658 = (state_24736[(2)]);
var state_24736__$1 = state_24736;
var statearr_24760_24833 = state_24736__$1;
(statearr_24760_24833[(2)] = inst_24658);

(statearr_24760_24833[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (31))){
var inst_24684 = (state_24736[(12)]);
var inst_24688 = done.call(null,null);
var inst_24689 = cljs.core.async.untap_STAR_.call(null,m,inst_24684);
var state_24736__$1 = (function (){var statearr_24761 = state_24736;
(statearr_24761[(19)] = inst_24688);

return statearr_24761;
})();
var statearr_24762_24834 = state_24736__$1;
(statearr_24762_24834[(2)] = inst_24689);

(statearr_24762_24834[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (32))){
var inst_24678 = (state_24736[(20)]);
var inst_24677 = (state_24736[(9)]);
var inst_24679 = (state_24736[(11)]);
var inst_24676 = (state_24736[(21)]);
var inst_24691 = (state_24736[(2)]);
var inst_24692 = (inst_24679 + (1));
var tmp24757 = inst_24678;
var tmp24758 = inst_24677;
var tmp24759 = inst_24676;
var inst_24676__$1 = tmp24759;
var inst_24677__$1 = tmp24758;
var inst_24678__$1 = tmp24757;
var inst_24679__$1 = inst_24692;
var state_24736__$1 = (function (){var statearr_24763 = state_24736;
(statearr_24763[(20)] = inst_24678__$1);

(statearr_24763[(9)] = inst_24677__$1);

(statearr_24763[(22)] = inst_24691);

(statearr_24763[(11)] = inst_24679__$1);

(statearr_24763[(21)] = inst_24676__$1);

return statearr_24763;
})();
var statearr_24764_24835 = state_24736__$1;
(statearr_24764_24835[(2)] = null);

(statearr_24764_24835[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (40))){
var inst_24704 = (state_24736[(23)]);
var inst_24708 = done.call(null,null);
var inst_24709 = cljs.core.async.untap_STAR_.call(null,m,inst_24704);
var state_24736__$1 = (function (){var statearr_24765 = state_24736;
(statearr_24765[(24)] = inst_24708);

return statearr_24765;
})();
var statearr_24766_24836 = state_24736__$1;
(statearr_24766_24836[(2)] = inst_24709);

(statearr_24766_24836[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (33))){
var inst_24695 = (state_24736[(25)]);
var inst_24697 = cljs.core.chunked_seq_QMARK_.call(null,inst_24695);
var state_24736__$1 = state_24736;
if(inst_24697){
var statearr_24767_24837 = state_24736__$1;
(statearr_24767_24837[(1)] = (36));

} else {
var statearr_24768_24838 = state_24736__$1;
(statearr_24768_24838[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (13))){
var inst_24625 = (state_24736[(26)]);
var inst_24628 = cljs.core.async.close_BANG_.call(null,inst_24625);
var state_24736__$1 = state_24736;
var statearr_24769_24839 = state_24736__$1;
(statearr_24769_24839[(2)] = inst_24628);

(statearr_24769_24839[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (22))){
var inst_24648 = (state_24736[(8)]);
var inst_24651 = cljs.core.async.close_BANG_.call(null,inst_24648);
var state_24736__$1 = state_24736;
var statearr_24770_24840 = state_24736__$1;
(statearr_24770_24840[(2)] = inst_24651);

(statearr_24770_24840[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (36))){
var inst_24695 = (state_24736[(25)]);
var inst_24699 = cljs.core.chunk_first.call(null,inst_24695);
var inst_24700 = cljs.core.chunk_rest.call(null,inst_24695);
var inst_24701 = cljs.core.count.call(null,inst_24699);
var inst_24676 = inst_24700;
var inst_24677 = inst_24699;
var inst_24678 = inst_24701;
var inst_24679 = (0);
var state_24736__$1 = (function (){var statearr_24771 = state_24736;
(statearr_24771[(20)] = inst_24678);

(statearr_24771[(9)] = inst_24677);

(statearr_24771[(11)] = inst_24679);

(statearr_24771[(21)] = inst_24676);

return statearr_24771;
})();
var statearr_24772_24841 = state_24736__$1;
(statearr_24772_24841[(2)] = null);

(statearr_24772_24841[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (41))){
var inst_24695 = (state_24736[(25)]);
var inst_24711 = (state_24736[(2)]);
var inst_24712 = cljs.core.next.call(null,inst_24695);
var inst_24676 = inst_24712;
var inst_24677 = null;
var inst_24678 = (0);
var inst_24679 = (0);
var state_24736__$1 = (function (){var statearr_24773 = state_24736;
(statearr_24773[(20)] = inst_24678);

(statearr_24773[(27)] = inst_24711);

(statearr_24773[(9)] = inst_24677);

(statearr_24773[(11)] = inst_24679);

(statearr_24773[(21)] = inst_24676);

return statearr_24773;
})();
var statearr_24774_24842 = state_24736__$1;
(statearr_24774_24842[(2)] = null);

(statearr_24774_24842[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (43))){
var state_24736__$1 = state_24736;
var statearr_24775_24843 = state_24736__$1;
(statearr_24775_24843[(2)] = null);

(statearr_24775_24843[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (29))){
var inst_24720 = (state_24736[(2)]);
var state_24736__$1 = state_24736;
var statearr_24776_24844 = state_24736__$1;
(statearr_24776_24844[(2)] = inst_24720);

(statearr_24776_24844[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (44))){
var inst_24729 = (state_24736[(2)]);
var state_24736__$1 = (function (){var statearr_24777 = state_24736;
(statearr_24777[(28)] = inst_24729);

return statearr_24777;
})();
var statearr_24778_24845 = state_24736__$1;
(statearr_24778_24845[(2)] = null);

(statearr_24778_24845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (6))){
var inst_24668 = (state_24736[(29)]);
var inst_24667 = cljs.core.deref.call(null,cs);
var inst_24668__$1 = cljs.core.keys.call(null,inst_24667);
var inst_24669 = cljs.core.count.call(null,inst_24668__$1);
var inst_24670 = cljs.core.reset_BANG_.call(null,dctr,inst_24669);
var inst_24675 = cljs.core.seq.call(null,inst_24668__$1);
var inst_24676 = inst_24675;
var inst_24677 = null;
var inst_24678 = (0);
var inst_24679 = (0);
var state_24736__$1 = (function (){var statearr_24779 = state_24736;
(statearr_24779[(20)] = inst_24678);

(statearr_24779[(9)] = inst_24677);

(statearr_24779[(30)] = inst_24670);

(statearr_24779[(11)] = inst_24679);

(statearr_24779[(29)] = inst_24668__$1);

(statearr_24779[(21)] = inst_24676);

return statearr_24779;
})();
var statearr_24780_24846 = state_24736__$1;
(statearr_24780_24846[(2)] = null);

(statearr_24780_24846[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (28))){
var inst_24695 = (state_24736[(25)]);
var inst_24676 = (state_24736[(21)]);
var inst_24695__$1 = cljs.core.seq.call(null,inst_24676);
var state_24736__$1 = (function (){var statearr_24781 = state_24736;
(statearr_24781[(25)] = inst_24695__$1);

return statearr_24781;
})();
if(inst_24695__$1){
var statearr_24782_24847 = state_24736__$1;
(statearr_24782_24847[(1)] = (33));

} else {
var statearr_24783_24848 = state_24736__$1;
(statearr_24783_24848[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (25))){
var inst_24678 = (state_24736[(20)]);
var inst_24679 = (state_24736[(11)]);
var inst_24681 = (inst_24679 < inst_24678);
var inst_24682 = inst_24681;
var state_24736__$1 = state_24736;
if(cljs.core.truth_(inst_24682)){
var statearr_24784_24849 = state_24736__$1;
(statearr_24784_24849[(1)] = (27));

} else {
var statearr_24785_24850 = state_24736__$1;
(statearr_24785_24850[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (34))){
var state_24736__$1 = state_24736;
var statearr_24786_24851 = state_24736__$1;
(statearr_24786_24851[(2)] = null);

(statearr_24786_24851[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (17))){
var state_24736__$1 = state_24736;
var statearr_24787_24852 = state_24736__$1;
(statearr_24787_24852[(2)] = null);

(statearr_24787_24852[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (3))){
var inst_24734 = (state_24736[(2)]);
var state_24736__$1 = state_24736;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24736__$1,inst_24734);
} else {
if((state_val_24737 === (12))){
var inst_24663 = (state_24736[(2)]);
var state_24736__$1 = state_24736;
var statearr_24788_24853 = state_24736__$1;
(statearr_24788_24853[(2)] = inst_24663);

(statearr_24788_24853[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (2))){
var state_24736__$1 = state_24736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24736__$1,(4),ch);
} else {
if((state_val_24737 === (23))){
var state_24736__$1 = state_24736;
var statearr_24789_24854 = state_24736__$1;
(statearr_24789_24854[(2)] = null);

(statearr_24789_24854[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (35))){
var inst_24718 = (state_24736[(2)]);
var state_24736__$1 = state_24736;
var statearr_24790_24855 = state_24736__$1;
(statearr_24790_24855[(2)] = inst_24718);

(statearr_24790_24855[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (19))){
var inst_24635 = (state_24736[(7)]);
var inst_24639 = cljs.core.chunk_first.call(null,inst_24635);
var inst_24640 = cljs.core.chunk_rest.call(null,inst_24635);
var inst_24641 = cljs.core.count.call(null,inst_24639);
var inst_24613 = inst_24640;
var inst_24614 = inst_24639;
var inst_24615 = inst_24641;
var inst_24616 = (0);
var state_24736__$1 = (function (){var statearr_24791 = state_24736;
(statearr_24791[(14)] = inst_24615);

(statearr_24791[(15)] = inst_24613);

(statearr_24791[(16)] = inst_24614);

(statearr_24791[(17)] = inst_24616);

return statearr_24791;
})();
var statearr_24792_24856 = state_24736__$1;
(statearr_24792_24856[(2)] = null);

(statearr_24792_24856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (11))){
var inst_24613 = (state_24736[(15)]);
var inst_24635 = (state_24736[(7)]);
var inst_24635__$1 = cljs.core.seq.call(null,inst_24613);
var state_24736__$1 = (function (){var statearr_24793 = state_24736;
(statearr_24793[(7)] = inst_24635__$1);

return statearr_24793;
})();
if(inst_24635__$1){
var statearr_24794_24857 = state_24736__$1;
(statearr_24794_24857[(1)] = (16));

} else {
var statearr_24795_24858 = state_24736__$1;
(statearr_24795_24858[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (9))){
var inst_24665 = (state_24736[(2)]);
var state_24736__$1 = state_24736;
var statearr_24796_24859 = state_24736__$1;
(statearr_24796_24859[(2)] = inst_24665);

(statearr_24796_24859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (5))){
var inst_24611 = cljs.core.deref.call(null,cs);
var inst_24612 = cljs.core.seq.call(null,inst_24611);
var inst_24613 = inst_24612;
var inst_24614 = null;
var inst_24615 = (0);
var inst_24616 = (0);
var state_24736__$1 = (function (){var statearr_24797 = state_24736;
(statearr_24797[(14)] = inst_24615);

(statearr_24797[(15)] = inst_24613);

(statearr_24797[(16)] = inst_24614);

(statearr_24797[(17)] = inst_24616);

return statearr_24797;
})();
var statearr_24798_24860 = state_24736__$1;
(statearr_24798_24860[(2)] = null);

(statearr_24798_24860[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (14))){
var state_24736__$1 = state_24736;
var statearr_24799_24861 = state_24736__$1;
(statearr_24799_24861[(2)] = null);

(statearr_24799_24861[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (45))){
var inst_24726 = (state_24736[(2)]);
var state_24736__$1 = state_24736;
var statearr_24800_24862 = state_24736__$1;
(statearr_24800_24862[(2)] = inst_24726);

(statearr_24800_24862[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (26))){
var inst_24668 = (state_24736[(29)]);
var inst_24722 = (state_24736[(2)]);
var inst_24723 = cljs.core.seq.call(null,inst_24668);
var state_24736__$1 = (function (){var statearr_24801 = state_24736;
(statearr_24801[(31)] = inst_24722);

return statearr_24801;
})();
if(inst_24723){
var statearr_24802_24863 = state_24736__$1;
(statearr_24802_24863[(1)] = (42));

} else {
var statearr_24803_24864 = state_24736__$1;
(statearr_24803_24864[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (16))){
var inst_24635 = (state_24736[(7)]);
var inst_24637 = cljs.core.chunked_seq_QMARK_.call(null,inst_24635);
var state_24736__$1 = state_24736;
if(inst_24637){
var statearr_24804_24865 = state_24736__$1;
(statearr_24804_24865[(1)] = (19));

} else {
var statearr_24805_24866 = state_24736__$1;
(statearr_24805_24866[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (38))){
var inst_24715 = (state_24736[(2)]);
var state_24736__$1 = state_24736;
var statearr_24806_24867 = state_24736__$1;
(statearr_24806_24867[(2)] = inst_24715);

(statearr_24806_24867[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (30))){
var state_24736__$1 = state_24736;
var statearr_24807_24868 = state_24736__$1;
(statearr_24807_24868[(2)] = null);

(statearr_24807_24868[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (10))){
var inst_24614 = (state_24736[(16)]);
var inst_24616 = (state_24736[(17)]);
var inst_24624 = cljs.core._nth.call(null,inst_24614,inst_24616);
var inst_24625 = cljs.core.nth.call(null,inst_24624,(0),null);
var inst_24626 = cljs.core.nth.call(null,inst_24624,(1),null);
var state_24736__$1 = (function (){var statearr_24808 = state_24736;
(statearr_24808[(26)] = inst_24625);

return statearr_24808;
})();
if(cljs.core.truth_(inst_24626)){
var statearr_24809_24869 = state_24736__$1;
(statearr_24809_24869[(1)] = (13));

} else {
var statearr_24810_24870 = state_24736__$1;
(statearr_24810_24870[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (18))){
var inst_24661 = (state_24736[(2)]);
var state_24736__$1 = state_24736;
var statearr_24811_24871 = state_24736__$1;
(statearr_24811_24871[(2)] = inst_24661);

(statearr_24811_24871[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (42))){
var state_24736__$1 = state_24736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24736__$1,(45),dchan);
} else {
if((state_val_24737 === (37))){
var inst_24704 = (state_24736[(23)]);
var inst_24695 = (state_24736[(25)]);
var inst_24604 = (state_24736[(10)]);
var inst_24704__$1 = cljs.core.first.call(null,inst_24695);
var inst_24705 = cljs.core.async.put_BANG_.call(null,inst_24704__$1,inst_24604,done);
var state_24736__$1 = (function (){var statearr_24812 = state_24736;
(statearr_24812[(23)] = inst_24704__$1);

return statearr_24812;
})();
if(cljs.core.truth_(inst_24705)){
var statearr_24813_24872 = state_24736__$1;
(statearr_24813_24872[(1)] = (39));

} else {
var statearr_24814_24873 = state_24736__$1;
(statearr_24814_24873[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (8))){
var inst_24615 = (state_24736[(14)]);
var inst_24616 = (state_24736[(17)]);
var inst_24618 = (inst_24616 < inst_24615);
var inst_24619 = inst_24618;
var state_24736__$1 = state_24736;
if(cljs.core.truth_(inst_24619)){
var statearr_24815_24874 = state_24736__$1;
(statearr_24815_24874[(1)] = (10));

} else {
var statearr_24816_24875 = state_24736__$1;
(statearr_24816_24875[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24002__auto___24821,cs,m,dchan,dctr,done))
;
return ((function (switch__23907__auto__,c__24002__auto___24821,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23908__auto__ = null;
var cljs$core$async$mult_$_state_machine__23908__auto____0 = (function (){
var statearr_24817 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24817[(0)] = cljs$core$async$mult_$_state_machine__23908__auto__);

(statearr_24817[(1)] = (1));

return statearr_24817;
});
var cljs$core$async$mult_$_state_machine__23908__auto____1 = (function (state_24736){
while(true){
var ret_value__23909__auto__ = (function (){try{while(true){
var result__23910__auto__ = switch__23907__auto__.call(null,state_24736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23910__auto__;
}
break;
}
}catch (e24818){if((e24818 instanceof Object)){
var ex__23911__auto__ = e24818;
var statearr_24819_24876 = state_24736;
(statearr_24819_24876[(5)] = ex__23911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24877 = state_24736;
state_24736 = G__24877;
continue;
} else {
return ret_value__23909__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23908__auto__ = function(state_24736){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23908__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23908__auto____1.call(this,state_24736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23908__auto____0;
cljs$core$async$mult_$_state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23908__auto____1;
return cljs$core$async$mult_$_state_machine__23908__auto__;
})()
;})(switch__23907__auto__,c__24002__auto___24821,cs,m,dchan,dctr,done))
})();
var state__24004__auto__ = (function (){var statearr_24820 = f__24003__auto__.call(null);
(statearr_24820[(6)] = c__24002__auto___24821);

return statearr_24820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24004__auto__);
});})(c__24002__auto___24821,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__24879 = arguments.length;
switch (G__24879) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24891 = arguments.length;
var i__4731__auto___24892 = (0);
while(true){
if((i__4731__auto___24892 < len__4730__auto___24891)){
args__4736__auto__.push((arguments[i__4731__auto___24892]));

var G__24893 = (i__4731__auto___24892 + (1));
i__4731__auto___24892 = G__24893;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24885){
var map__24886 = p__24885;
var map__24886__$1 = (((((!((map__24886 == null))))?(((((map__24886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24886):map__24886);
var opts = map__24886__$1;
var statearr_24888_24894 = state;
(statearr_24888_24894[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts.call(null,((function (map__24886,map__24886__$1,opts){
return (function (val){
var statearr_24889_24895 = state;
(statearr_24889_24895[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24886,map__24886__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_24890_24896 = state;
(statearr_24890_24896[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24881){
var G__24882 = cljs.core.first.call(null,seq24881);
var seq24881__$1 = cljs.core.next.call(null,seq24881);
var G__24883 = cljs.core.first.call(null,seq24881__$1);
var seq24881__$2 = cljs.core.next.call(null,seq24881__$1);
var G__24884 = cljs.core.first.call(null,seq24881__$2);
var seq24881__$3 = cljs.core.next.call(null,seq24881__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24882,G__24883,G__24884,seq24881__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24897 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24897 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24898){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24898 = meta24898;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24899,meta24898__$1){
var self__ = this;
var _24899__$1 = this;
return (new cljs.core.async.t_cljs$core$async24897(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24898__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24897.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24899){
var self__ = this;
var _24899__$1 = this;
return self__.meta24898;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24897.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24897.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24897.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24897.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24897.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24897.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24897.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24897.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24897.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24898","meta24898",-2112222469,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24897.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24897.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24897";

cljs.core.async.t_cljs$core$async24897.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24897");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24897.
 */
cljs.core.async.__GT_t_cljs$core$async24897 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24897(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24898){
return (new cljs.core.async.t_cljs$core$async24897(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24898));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24897(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24002__auto___25061 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24002__auto___25061,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24003__auto__ = (function (){var switch__23907__auto__ = ((function (c__24002__auto___25061,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25001){
var state_val_25002 = (state_25001[(1)]);
if((state_val_25002 === (7))){
var inst_24916 = (state_25001[(2)]);
var state_25001__$1 = state_25001;
var statearr_25003_25062 = state_25001__$1;
(statearr_25003_25062[(2)] = inst_24916);

(statearr_25003_25062[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (20))){
var inst_24928 = (state_25001[(7)]);
var state_25001__$1 = state_25001;
var statearr_25004_25063 = state_25001__$1;
(statearr_25004_25063[(2)] = inst_24928);

(statearr_25004_25063[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (27))){
var state_25001__$1 = state_25001;
var statearr_25005_25064 = state_25001__$1;
(statearr_25005_25064[(2)] = null);

(statearr_25005_25064[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (1))){
var inst_24903 = (state_25001[(8)]);
var inst_24903__$1 = calc_state.call(null);
var inst_24905 = (inst_24903__$1 == null);
var inst_24906 = cljs.core.not.call(null,inst_24905);
var state_25001__$1 = (function (){var statearr_25006 = state_25001;
(statearr_25006[(8)] = inst_24903__$1);

return statearr_25006;
})();
if(inst_24906){
var statearr_25007_25065 = state_25001__$1;
(statearr_25007_25065[(1)] = (2));

} else {
var statearr_25008_25066 = state_25001__$1;
(statearr_25008_25066[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (24))){
var inst_24961 = (state_25001[(9)]);
var inst_24975 = (state_25001[(10)]);
var inst_24952 = (state_25001[(11)]);
var inst_24975__$1 = inst_24952.call(null,inst_24961);
var state_25001__$1 = (function (){var statearr_25009 = state_25001;
(statearr_25009[(10)] = inst_24975__$1);

return statearr_25009;
})();
if(cljs.core.truth_(inst_24975__$1)){
var statearr_25010_25067 = state_25001__$1;
(statearr_25010_25067[(1)] = (29));

} else {
var statearr_25011_25068 = state_25001__$1;
(statearr_25011_25068[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (4))){
var inst_24919 = (state_25001[(2)]);
var state_25001__$1 = state_25001;
if(cljs.core.truth_(inst_24919)){
var statearr_25012_25069 = state_25001__$1;
(statearr_25012_25069[(1)] = (8));

} else {
var statearr_25013_25070 = state_25001__$1;
(statearr_25013_25070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (15))){
var inst_24946 = (state_25001[(2)]);
var state_25001__$1 = state_25001;
if(cljs.core.truth_(inst_24946)){
var statearr_25014_25071 = state_25001__$1;
(statearr_25014_25071[(1)] = (19));

} else {
var statearr_25015_25072 = state_25001__$1;
(statearr_25015_25072[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (21))){
var inst_24951 = (state_25001[(12)]);
var inst_24951__$1 = (state_25001[(2)]);
var inst_24952 = cljs.core.get.call(null,inst_24951__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24953 = cljs.core.get.call(null,inst_24951__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24954 = cljs.core.get.call(null,inst_24951__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25001__$1 = (function (){var statearr_25016 = state_25001;
(statearr_25016[(12)] = inst_24951__$1);

(statearr_25016[(11)] = inst_24952);

(statearr_25016[(13)] = inst_24953);

return statearr_25016;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25001__$1,(22),inst_24954);
} else {
if((state_val_25002 === (31))){
var inst_24983 = (state_25001[(2)]);
var state_25001__$1 = state_25001;
if(cljs.core.truth_(inst_24983)){
var statearr_25017_25073 = state_25001__$1;
(statearr_25017_25073[(1)] = (32));

} else {
var statearr_25018_25074 = state_25001__$1;
(statearr_25018_25074[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (32))){
var inst_24960 = (state_25001[(14)]);
var state_25001__$1 = state_25001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25001__$1,(35),out,inst_24960);
} else {
if((state_val_25002 === (33))){
var inst_24951 = (state_25001[(12)]);
var inst_24928 = inst_24951;
var state_25001__$1 = (function (){var statearr_25019 = state_25001;
(statearr_25019[(7)] = inst_24928);

return statearr_25019;
})();
var statearr_25020_25075 = state_25001__$1;
(statearr_25020_25075[(2)] = null);

(statearr_25020_25075[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (13))){
var inst_24928 = (state_25001[(7)]);
var inst_24935 = inst_24928.cljs$lang$protocol_mask$partition0$;
var inst_24936 = (inst_24935 & (64));
var inst_24937 = inst_24928.cljs$core$ISeq$;
var inst_24938 = (cljs.core.PROTOCOL_SENTINEL === inst_24937);
var inst_24939 = ((inst_24936) || (inst_24938));
var state_25001__$1 = state_25001;
if(cljs.core.truth_(inst_24939)){
var statearr_25021_25076 = state_25001__$1;
(statearr_25021_25076[(1)] = (16));

} else {
var statearr_25022_25077 = state_25001__$1;
(statearr_25022_25077[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (22))){
var inst_24961 = (state_25001[(9)]);
var inst_24960 = (state_25001[(14)]);
var inst_24959 = (state_25001[(2)]);
var inst_24960__$1 = cljs.core.nth.call(null,inst_24959,(0),null);
var inst_24961__$1 = cljs.core.nth.call(null,inst_24959,(1),null);
var inst_24962 = (inst_24960__$1 == null);
var inst_24963 = cljs.core._EQ_.call(null,inst_24961__$1,change);
var inst_24964 = ((inst_24962) || (inst_24963));
var state_25001__$1 = (function (){var statearr_25023 = state_25001;
(statearr_25023[(9)] = inst_24961__$1);

(statearr_25023[(14)] = inst_24960__$1);

return statearr_25023;
})();
if(cljs.core.truth_(inst_24964)){
var statearr_25024_25078 = state_25001__$1;
(statearr_25024_25078[(1)] = (23));

} else {
var statearr_25025_25079 = state_25001__$1;
(statearr_25025_25079[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (36))){
var inst_24951 = (state_25001[(12)]);
var inst_24928 = inst_24951;
var state_25001__$1 = (function (){var statearr_25026 = state_25001;
(statearr_25026[(7)] = inst_24928);

return statearr_25026;
})();
var statearr_25027_25080 = state_25001__$1;
(statearr_25027_25080[(2)] = null);

(statearr_25027_25080[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (29))){
var inst_24975 = (state_25001[(10)]);
var state_25001__$1 = state_25001;
var statearr_25028_25081 = state_25001__$1;
(statearr_25028_25081[(2)] = inst_24975);

(statearr_25028_25081[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (6))){
var state_25001__$1 = state_25001;
var statearr_25029_25082 = state_25001__$1;
(statearr_25029_25082[(2)] = false);

(statearr_25029_25082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (28))){
var inst_24971 = (state_25001[(2)]);
var inst_24972 = calc_state.call(null);
var inst_24928 = inst_24972;
var state_25001__$1 = (function (){var statearr_25030 = state_25001;
(statearr_25030[(7)] = inst_24928);

(statearr_25030[(15)] = inst_24971);

return statearr_25030;
})();
var statearr_25031_25083 = state_25001__$1;
(statearr_25031_25083[(2)] = null);

(statearr_25031_25083[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (25))){
var inst_24997 = (state_25001[(2)]);
var state_25001__$1 = state_25001;
var statearr_25032_25084 = state_25001__$1;
(statearr_25032_25084[(2)] = inst_24997);

(statearr_25032_25084[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (34))){
var inst_24995 = (state_25001[(2)]);
var state_25001__$1 = state_25001;
var statearr_25033_25085 = state_25001__$1;
(statearr_25033_25085[(2)] = inst_24995);

(statearr_25033_25085[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (17))){
var state_25001__$1 = state_25001;
var statearr_25034_25086 = state_25001__$1;
(statearr_25034_25086[(2)] = false);

(statearr_25034_25086[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (3))){
var state_25001__$1 = state_25001;
var statearr_25035_25087 = state_25001__$1;
(statearr_25035_25087[(2)] = false);

(statearr_25035_25087[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (12))){
var inst_24999 = (state_25001[(2)]);
var state_25001__$1 = state_25001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25001__$1,inst_24999);
} else {
if((state_val_25002 === (2))){
var inst_24903 = (state_25001[(8)]);
var inst_24908 = inst_24903.cljs$lang$protocol_mask$partition0$;
var inst_24909 = (inst_24908 & (64));
var inst_24910 = inst_24903.cljs$core$ISeq$;
var inst_24911 = (cljs.core.PROTOCOL_SENTINEL === inst_24910);
var inst_24912 = ((inst_24909) || (inst_24911));
var state_25001__$1 = state_25001;
if(cljs.core.truth_(inst_24912)){
var statearr_25036_25088 = state_25001__$1;
(statearr_25036_25088[(1)] = (5));

} else {
var statearr_25037_25089 = state_25001__$1;
(statearr_25037_25089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (23))){
var inst_24960 = (state_25001[(14)]);
var inst_24966 = (inst_24960 == null);
var state_25001__$1 = state_25001;
if(cljs.core.truth_(inst_24966)){
var statearr_25038_25090 = state_25001__$1;
(statearr_25038_25090[(1)] = (26));

} else {
var statearr_25039_25091 = state_25001__$1;
(statearr_25039_25091[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (35))){
var inst_24986 = (state_25001[(2)]);
var state_25001__$1 = state_25001;
if(cljs.core.truth_(inst_24986)){
var statearr_25040_25092 = state_25001__$1;
(statearr_25040_25092[(1)] = (36));

} else {
var statearr_25041_25093 = state_25001__$1;
(statearr_25041_25093[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (19))){
var inst_24928 = (state_25001[(7)]);
var inst_24948 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24928);
var state_25001__$1 = state_25001;
var statearr_25042_25094 = state_25001__$1;
(statearr_25042_25094[(2)] = inst_24948);

(statearr_25042_25094[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (11))){
var inst_24928 = (state_25001[(7)]);
var inst_24932 = (inst_24928 == null);
var inst_24933 = cljs.core.not.call(null,inst_24932);
var state_25001__$1 = state_25001;
if(inst_24933){
var statearr_25043_25095 = state_25001__$1;
(statearr_25043_25095[(1)] = (13));

} else {
var statearr_25044_25096 = state_25001__$1;
(statearr_25044_25096[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (9))){
var inst_24903 = (state_25001[(8)]);
var state_25001__$1 = state_25001;
var statearr_25045_25097 = state_25001__$1;
(statearr_25045_25097[(2)] = inst_24903);

(statearr_25045_25097[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (5))){
var state_25001__$1 = state_25001;
var statearr_25046_25098 = state_25001__$1;
(statearr_25046_25098[(2)] = true);

(statearr_25046_25098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (14))){
var state_25001__$1 = state_25001;
var statearr_25047_25099 = state_25001__$1;
(statearr_25047_25099[(2)] = false);

(statearr_25047_25099[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (26))){
var inst_24961 = (state_25001[(9)]);
var inst_24968 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24961);
var state_25001__$1 = state_25001;
var statearr_25048_25100 = state_25001__$1;
(statearr_25048_25100[(2)] = inst_24968);

(statearr_25048_25100[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (16))){
var state_25001__$1 = state_25001;
var statearr_25049_25101 = state_25001__$1;
(statearr_25049_25101[(2)] = true);

(statearr_25049_25101[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (38))){
var inst_24991 = (state_25001[(2)]);
var state_25001__$1 = state_25001;
var statearr_25050_25102 = state_25001__$1;
(statearr_25050_25102[(2)] = inst_24991);

(statearr_25050_25102[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (30))){
var inst_24961 = (state_25001[(9)]);
var inst_24952 = (state_25001[(11)]);
var inst_24953 = (state_25001[(13)]);
var inst_24978 = cljs.core.empty_QMARK_.call(null,inst_24952);
var inst_24979 = inst_24953.call(null,inst_24961);
var inst_24980 = cljs.core.not.call(null,inst_24979);
var inst_24981 = ((inst_24978) && (inst_24980));
var state_25001__$1 = state_25001;
var statearr_25051_25103 = state_25001__$1;
(statearr_25051_25103[(2)] = inst_24981);

(statearr_25051_25103[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (10))){
var inst_24903 = (state_25001[(8)]);
var inst_24924 = (state_25001[(2)]);
var inst_24925 = cljs.core.get.call(null,inst_24924,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24926 = cljs.core.get.call(null,inst_24924,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24927 = cljs.core.get.call(null,inst_24924,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24928 = inst_24903;
var state_25001__$1 = (function (){var statearr_25052 = state_25001;
(statearr_25052[(16)] = inst_24926);

(statearr_25052[(7)] = inst_24928);

(statearr_25052[(17)] = inst_24927);

(statearr_25052[(18)] = inst_24925);

return statearr_25052;
})();
var statearr_25053_25104 = state_25001__$1;
(statearr_25053_25104[(2)] = null);

(statearr_25053_25104[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (18))){
var inst_24943 = (state_25001[(2)]);
var state_25001__$1 = state_25001;
var statearr_25054_25105 = state_25001__$1;
(statearr_25054_25105[(2)] = inst_24943);

(statearr_25054_25105[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (37))){
var state_25001__$1 = state_25001;
var statearr_25055_25106 = state_25001__$1;
(statearr_25055_25106[(2)] = null);

(statearr_25055_25106[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (8))){
var inst_24903 = (state_25001[(8)]);
var inst_24921 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24903);
var state_25001__$1 = state_25001;
var statearr_25056_25107 = state_25001__$1;
(statearr_25056_25107[(2)] = inst_24921);

(statearr_25056_25107[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24002__auto___25061,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23907__auto__,c__24002__auto___25061,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23908__auto__ = null;
var cljs$core$async$mix_$_state_machine__23908__auto____0 = (function (){
var statearr_25057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25057[(0)] = cljs$core$async$mix_$_state_machine__23908__auto__);

(statearr_25057[(1)] = (1));

return statearr_25057;
});
var cljs$core$async$mix_$_state_machine__23908__auto____1 = (function (state_25001){
while(true){
var ret_value__23909__auto__ = (function (){try{while(true){
var result__23910__auto__ = switch__23907__auto__.call(null,state_25001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23910__auto__;
}
break;
}
}catch (e25058){if((e25058 instanceof Object)){
var ex__23911__auto__ = e25058;
var statearr_25059_25108 = state_25001;
(statearr_25059_25108[(5)] = ex__23911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25109 = state_25001;
state_25001 = G__25109;
continue;
} else {
return ret_value__23909__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23908__auto__ = function(state_25001){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23908__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23908__auto____1.call(this,state_25001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23908__auto____0;
cljs$core$async$mix_$_state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23908__auto____1;
return cljs$core$async$mix_$_state_machine__23908__auto__;
})()
;})(switch__23907__auto__,c__24002__auto___25061,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24004__auto__ = (function (){var statearr_25060 = f__24003__auto__.call(null);
(statearr_25060[(6)] = c__24002__auto___25061);

return statearr_25060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24004__auto__);
});})(c__24002__auto___25061,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__25111 = arguments.length;
switch (G__25111) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__25115 = arguments.length;
switch (G__25115) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__25113_SHARP_){
if(cljs.core.truth_(p1__25113_SHARP_.call(null,topic))){
return p1__25113_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25113_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25116 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25116 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25117){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25117 = meta25117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25118,meta25117__$1){
var self__ = this;
var _25118__$1 = this;
return (new cljs.core.async.t_cljs$core$async25116(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25117__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25116.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25118){
var self__ = this;
var _25118__$1 = this;
return self__.meta25117;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25116.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25116.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25116.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25116.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25116.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25116.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25116.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25116.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25117","meta25117",-1612837450,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25116.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25116.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25116";

cljs.core.async.t_cljs$core$async25116.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25116");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25116.
 */
cljs.core.async.__GT_t_cljs$core$async25116 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25116(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25117){
return (new cljs.core.async.t_cljs$core$async25116(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25117));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25116(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24002__auto___25236 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24002__auto___25236,mults,ensure_mult,p){
return (function (){
var f__24003__auto__ = (function (){var switch__23907__auto__ = ((function (c__24002__auto___25236,mults,ensure_mult,p){
return (function (state_25190){
var state_val_25191 = (state_25190[(1)]);
if((state_val_25191 === (7))){
var inst_25186 = (state_25190[(2)]);
var state_25190__$1 = state_25190;
var statearr_25192_25237 = state_25190__$1;
(statearr_25192_25237[(2)] = inst_25186);

(statearr_25192_25237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25191 === (20))){
var state_25190__$1 = state_25190;
var statearr_25193_25238 = state_25190__$1;
(statearr_25193_25238[(2)] = null);

(statearr_25193_25238[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25191 === (1))){
var state_25190__$1 = state_25190;
var statearr_25194_25239 = state_25190__$1;
(statearr_25194_25239[(2)] = null);

(statearr_25194_25239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25191 === (24))){
var inst_25169 = (state_25190[(7)]);
var inst_25178 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25169);
var state_25190__$1 = state_25190;
var statearr_25195_25240 = state_25190__$1;
(statearr_25195_25240[(2)] = inst_25178);

(statearr_25195_25240[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25191 === (4))){
var inst_25121 = (state_25190[(8)]);
var inst_25121__$1 = (state_25190[(2)]);
var inst_25122 = (inst_25121__$1 == null);
var state_25190__$1 = (function (){var statearr_25196 = state_25190;
(statearr_25196[(8)] = inst_25121__$1);

return statearr_25196;
})();
if(cljs.core.truth_(inst_25122)){
var statearr_25197_25241 = state_25190__$1;
(statearr_25197_25241[(1)] = (5));

} else {
var statearr_25198_25242 = state_25190__$1;
(statearr_25198_25242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25191 === (15))){
var inst_25163 = (state_25190[(2)]);
var state_25190__$1 = state_25190;
var statearr_25199_25243 = state_25190__$1;
(statearr_25199_25243[(2)] = inst_25163);

(statearr_25199_25243[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25191 === (21))){
var inst_25183 = (state_25190[(2)]);
var state_25190__$1 = (function (){var statearr_25200 = state_25190;
(statearr_25200[(9)] = inst_25183);

return statearr_25200;
})();
var statearr_25201_25244 = state_25190__$1;
(statearr_25201_25244[(2)] = null);

(statearr_25201_25244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25191 === (13))){
var inst_25145 = (state_25190[(10)]);
var inst_25147 = cljs.core.chunked_seq_QMARK_.call(null,inst_25145);
var state_25190__$1 = state_25190;
if(inst_25147){
var statearr_25202_25245 = state_25190__$1;
(statearr_25202_25245[(1)] = (16));

} else {
var statearr_25203_25246 = state_25190__$1;
(statearr_25203_25246[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25191 === (22))){
var inst_25175 = (state_25190[(2)]);
var state_25190__$1 = state_25190;
if(cljs.core.truth_(inst_25175)){
var statearr_25204_25247 = state_25190__$1;
(statearr_25204_25247[(1)] = (23));

} else {
var statearr_25205_25248 = state_25190__$1;
(statearr_25205_25248[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25191 === (6))){
var inst_25171 = (state_25190[(11)]);
var inst_25121 = (state_25190[(8)]);
var inst_25169 = (state_25190[(7)]);
var inst_25169__$1 = topic_fn.call(null,inst_25121);
var inst_25170 = cljs.core.deref.call(null,mults);
var inst_25171__$1 = cljs.core.get.call(null,inst_25170,inst_25169__$1);
var state_25190__$1 = (function (){var statearr_25206 = state_25190;
(statearr_25206[(11)] = inst_25171__$1);

(statearr_25206[(7)] = inst_25169__$1);

return statearr_25206;
})();
if(cljs.core.truth_(inst_25171__$1)){
var statearr_25207_25249 = state_25190__$1;
(statearr_25207_25249[(1)] = (19));

} else {
var statearr_25208_25250 = state_25190__$1;
(statearr_25208_25250[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25191 === (25))){
var inst_25180 = (state_25190[(2)]);
var state_25190__$1 = state_25190;
var statearr_25209_25251 = state_25190__$1;
(statearr_25209_25251[(2)] = inst_25180);

(statearr_25209_25251[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25191 === (17))){
var inst_25145 = (state_25190[(10)]);
var inst_25154 = cljs.core.first.call(null,inst_25145);
var inst_25155 = cljs.core.async.muxch_STAR_.call(null,inst_25154);
var inst_25156 = cljs.core.async.close_BANG_.call(null,inst_25155);
var inst_25157 = cljs.core.next.call(null,inst_25145);
var inst_25131 = inst_25157;
var inst_25132 = null;
var inst_25133 = (0);
var inst_25134 = (0);
var state_25190__$1 = (function (){var statearr_25210 = state_25190;
(statearr_25210[(12)] = inst_25131);

(statearr_25210[(13)] = inst_25156);

(statearr_25210[(14)] = inst_25133);

(statearr_25210[(15)] = inst_25134);

(statearr_25210[(16)] = inst_25132);

return statearr_25210;
})();
var statearr_25211_25252 = state_25190__$1;
(statearr_25211_25252[(2)] = null);

(statearr_25211_25252[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25191 === (3))){
var inst_25188 = (state_25190[(2)]);
var state_25190__$1 = state_25190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25190__$1,inst_25188);
} else {
if((state_val_25191 === (12))){
var inst_25165 = (state_25190[(2)]);
var state_25190__$1 = state_25190;
var statearr_25212_25253 = state_25190__$1;
(statearr_25212_25253[(2)] = inst_25165);

(statearr_25212_25253[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25191 === (2))){
var state_25190__$1 = state_25190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25190__$1,(4),ch);
} else {
if((state_val_25191 === (23))){
var state_25190__$1 = state_25190;
var statearr_25213_25254 = state_25190__$1;
(statearr_25213_25254[(2)] = null);

(statearr_25213_25254[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25191 === (19))){
var inst_25171 = (state_25190[(11)]);
var inst_25121 = (state_25190[(8)]);
var inst_25173 = cljs.core.async.muxch_STAR_.call(null,inst_25171);
var state_25190__$1 = state_25190;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25190__$1,(22),inst_25173,inst_25121);
} else {
if((state_val_25191 === (11))){
var inst_25131 = (state_25190[(12)]);
var inst_25145 = (state_25190[(10)]);
var inst_25145__$1 = cljs.core.seq.call(null,inst_25131);
var state_25190__$1 = (function (){var statearr_25214 = state_25190;
(statearr_25214[(10)] = inst_25145__$1);

return statearr_25214;
})();
if(inst_25145__$1){
var statearr_25215_25255 = state_25190__$1;
(statearr_25215_25255[(1)] = (13));

} else {
var statearr_25216_25256 = state_25190__$1;
(statearr_25216_25256[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25191 === (9))){
var inst_25167 = (state_25190[(2)]);
var state_25190__$1 = state_25190;
var statearr_25217_25257 = state_25190__$1;
(statearr_25217_25257[(2)] = inst_25167);

(statearr_25217_25257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25191 === (5))){
var inst_25128 = cljs.core.deref.call(null,mults);
var inst_25129 = cljs.core.vals.call(null,inst_25128);
var inst_25130 = cljs.core.seq.call(null,inst_25129);
var inst_25131 = inst_25130;
var inst_25132 = null;
var inst_25133 = (0);
var inst_25134 = (0);
var state_25190__$1 = (function (){var statearr_25218 = state_25190;
(statearr_25218[(12)] = inst_25131);

(statearr_25218[(14)] = inst_25133);

(statearr_25218[(15)] = inst_25134);

(statearr_25218[(16)] = inst_25132);

return statearr_25218;
})();
var statearr_25219_25258 = state_25190__$1;
(statearr_25219_25258[(2)] = null);

(statearr_25219_25258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25191 === (14))){
var state_25190__$1 = state_25190;
var statearr_25223_25259 = state_25190__$1;
(statearr_25223_25259[(2)] = null);

(statearr_25223_25259[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25191 === (16))){
var inst_25145 = (state_25190[(10)]);
var inst_25149 = cljs.core.chunk_first.call(null,inst_25145);
var inst_25150 = cljs.core.chunk_rest.call(null,inst_25145);
var inst_25151 = cljs.core.count.call(null,inst_25149);
var inst_25131 = inst_25150;
var inst_25132 = inst_25149;
var inst_25133 = inst_25151;
var inst_25134 = (0);
var state_25190__$1 = (function (){var statearr_25224 = state_25190;
(statearr_25224[(12)] = inst_25131);

(statearr_25224[(14)] = inst_25133);

(statearr_25224[(15)] = inst_25134);

(statearr_25224[(16)] = inst_25132);

return statearr_25224;
})();
var statearr_25225_25260 = state_25190__$1;
(statearr_25225_25260[(2)] = null);

(statearr_25225_25260[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25191 === (10))){
var inst_25131 = (state_25190[(12)]);
var inst_25133 = (state_25190[(14)]);
var inst_25134 = (state_25190[(15)]);
var inst_25132 = (state_25190[(16)]);
var inst_25139 = cljs.core._nth.call(null,inst_25132,inst_25134);
var inst_25140 = cljs.core.async.muxch_STAR_.call(null,inst_25139);
var inst_25141 = cljs.core.async.close_BANG_.call(null,inst_25140);
var inst_25142 = (inst_25134 + (1));
var tmp25220 = inst_25131;
var tmp25221 = inst_25133;
var tmp25222 = inst_25132;
var inst_25131__$1 = tmp25220;
var inst_25132__$1 = tmp25222;
var inst_25133__$1 = tmp25221;
var inst_25134__$1 = inst_25142;
var state_25190__$1 = (function (){var statearr_25226 = state_25190;
(statearr_25226[(12)] = inst_25131__$1);

(statearr_25226[(14)] = inst_25133__$1);

(statearr_25226[(17)] = inst_25141);

(statearr_25226[(15)] = inst_25134__$1);

(statearr_25226[(16)] = inst_25132__$1);

return statearr_25226;
})();
var statearr_25227_25261 = state_25190__$1;
(statearr_25227_25261[(2)] = null);

(statearr_25227_25261[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25191 === (18))){
var inst_25160 = (state_25190[(2)]);
var state_25190__$1 = state_25190;
var statearr_25228_25262 = state_25190__$1;
(statearr_25228_25262[(2)] = inst_25160);

(statearr_25228_25262[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25191 === (8))){
var inst_25133 = (state_25190[(14)]);
var inst_25134 = (state_25190[(15)]);
var inst_25136 = (inst_25134 < inst_25133);
var inst_25137 = inst_25136;
var state_25190__$1 = state_25190;
if(cljs.core.truth_(inst_25137)){
var statearr_25229_25263 = state_25190__$1;
(statearr_25229_25263[(1)] = (10));

} else {
var statearr_25230_25264 = state_25190__$1;
(statearr_25230_25264[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24002__auto___25236,mults,ensure_mult,p))
;
return ((function (switch__23907__auto__,c__24002__auto___25236,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23908__auto__ = null;
var cljs$core$async$state_machine__23908__auto____0 = (function (){
var statearr_25231 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25231[(0)] = cljs$core$async$state_machine__23908__auto__);

(statearr_25231[(1)] = (1));

return statearr_25231;
});
var cljs$core$async$state_machine__23908__auto____1 = (function (state_25190){
while(true){
var ret_value__23909__auto__ = (function (){try{while(true){
var result__23910__auto__ = switch__23907__auto__.call(null,state_25190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23910__auto__;
}
break;
}
}catch (e25232){if((e25232 instanceof Object)){
var ex__23911__auto__ = e25232;
var statearr_25233_25265 = state_25190;
(statearr_25233_25265[(5)] = ex__23911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25266 = state_25190;
state_25190 = G__25266;
continue;
} else {
return ret_value__23909__auto__;
}
break;
}
});
cljs$core$async$state_machine__23908__auto__ = function(state_25190){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23908__auto____1.call(this,state_25190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23908__auto____0;
cljs$core$async$state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23908__auto____1;
return cljs$core$async$state_machine__23908__auto__;
})()
;})(switch__23907__auto__,c__24002__auto___25236,mults,ensure_mult,p))
})();
var state__24004__auto__ = (function (){var statearr_25234 = f__24003__auto__.call(null);
(statearr_25234[(6)] = c__24002__auto___25236);

return statearr_25234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24004__auto__);
});})(c__24002__auto___25236,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__25268 = arguments.length;
switch (G__25268) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__25271 = arguments.length;
switch (G__25271) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__25274 = arguments.length;
switch (G__25274) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__24002__auto___25341 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24002__auto___25341,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24003__auto__ = (function (){var switch__23907__auto__ = ((function (c__24002__auto___25341,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25313){
var state_val_25314 = (state_25313[(1)]);
if((state_val_25314 === (7))){
var state_25313__$1 = state_25313;
var statearr_25315_25342 = state_25313__$1;
(statearr_25315_25342[(2)] = null);

(statearr_25315_25342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25314 === (1))){
var state_25313__$1 = state_25313;
var statearr_25316_25343 = state_25313__$1;
(statearr_25316_25343[(2)] = null);

(statearr_25316_25343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25314 === (4))){
var inst_25277 = (state_25313[(7)]);
var inst_25279 = (inst_25277 < cnt);
var state_25313__$1 = state_25313;
if(cljs.core.truth_(inst_25279)){
var statearr_25317_25344 = state_25313__$1;
(statearr_25317_25344[(1)] = (6));

} else {
var statearr_25318_25345 = state_25313__$1;
(statearr_25318_25345[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25314 === (15))){
var inst_25309 = (state_25313[(2)]);
var state_25313__$1 = state_25313;
var statearr_25319_25346 = state_25313__$1;
(statearr_25319_25346[(2)] = inst_25309);

(statearr_25319_25346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25314 === (13))){
var inst_25302 = cljs.core.async.close_BANG_.call(null,out);
var state_25313__$1 = state_25313;
var statearr_25320_25347 = state_25313__$1;
(statearr_25320_25347[(2)] = inst_25302);

(statearr_25320_25347[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25314 === (6))){
var state_25313__$1 = state_25313;
var statearr_25321_25348 = state_25313__$1;
(statearr_25321_25348[(2)] = null);

(statearr_25321_25348[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25314 === (3))){
var inst_25311 = (state_25313[(2)]);
var state_25313__$1 = state_25313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25313__$1,inst_25311);
} else {
if((state_val_25314 === (12))){
var inst_25299 = (state_25313[(8)]);
var inst_25299__$1 = (state_25313[(2)]);
var inst_25300 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25299__$1);
var state_25313__$1 = (function (){var statearr_25322 = state_25313;
(statearr_25322[(8)] = inst_25299__$1);

return statearr_25322;
})();
if(cljs.core.truth_(inst_25300)){
var statearr_25323_25349 = state_25313__$1;
(statearr_25323_25349[(1)] = (13));

} else {
var statearr_25324_25350 = state_25313__$1;
(statearr_25324_25350[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25314 === (2))){
var inst_25276 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25277 = (0);
var state_25313__$1 = (function (){var statearr_25325 = state_25313;
(statearr_25325[(9)] = inst_25276);

(statearr_25325[(7)] = inst_25277);

return statearr_25325;
})();
var statearr_25326_25351 = state_25313__$1;
(statearr_25326_25351[(2)] = null);

(statearr_25326_25351[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25314 === (11))){
var inst_25277 = (state_25313[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25313,(10),Object,null,(9));
var inst_25286 = chs__$1.call(null,inst_25277);
var inst_25287 = done.call(null,inst_25277);
var inst_25288 = cljs.core.async.take_BANG_.call(null,inst_25286,inst_25287);
var state_25313__$1 = state_25313;
var statearr_25327_25352 = state_25313__$1;
(statearr_25327_25352[(2)] = inst_25288);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25313__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25314 === (9))){
var inst_25277 = (state_25313[(7)]);
var inst_25290 = (state_25313[(2)]);
var inst_25291 = (inst_25277 + (1));
var inst_25277__$1 = inst_25291;
var state_25313__$1 = (function (){var statearr_25328 = state_25313;
(statearr_25328[(10)] = inst_25290);

(statearr_25328[(7)] = inst_25277__$1);

return statearr_25328;
})();
var statearr_25329_25353 = state_25313__$1;
(statearr_25329_25353[(2)] = null);

(statearr_25329_25353[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25314 === (5))){
var inst_25297 = (state_25313[(2)]);
var state_25313__$1 = (function (){var statearr_25330 = state_25313;
(statearr_25330[(11)] = inst_25297);

return statearr_25330;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25313__$1,(12),dchan);
} else {
if((state_val_25314 === (14))){
var inst_25299 = (state_25313[(8)]);
var inst_25304 = cljs.core.apply.call(null,f,inst_25299);
var state_25313__$1 = state_25313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25313__$1,(16),out,inst_25304);
} else {
if((state_val_25314 === (16))){
var inst_25306 = (state_25313[(2)]);
var state_25313__$1 = (function (){var statearr_25331 = state_25313;
(statearr_25331[(12)] = inst_25306);

return statearr_25331;
})();
var statearr_25332_25354 = state_25313__$1;
(statearr_25332_25354[(2)] = null);

(statearr_25332_25354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25314 === (10))){
var inst_25281 = (state_25313[(2)]);
var inst_25282 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25313__$1 = (function (){var statearr_25333 = state_25313;
(statearr_25333[(13)] = inst_25281);

return statearr_25333;
})();
var statearr_25334_25355 = state_25313__$1;
(statearr_25334_25355[(2)] = inst_25282);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25313__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25314 === (8))){
var inst_25295 = (state_25313[(2)]);
var state_25313__$1 = state_25313;
var statearr_25335_25356 = state_25313__$1;
(statearr_25335_25356[(2)] = inst_25295);

(statearr_25335_25356[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24002__auto___25341,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23907__auto__,c__24002__auto___25341,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23908__auto__ = null;
var cljs$core$async$state_machine__23908__auto____0 = (function (){
var statearr_25336 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25336[(0)] = cljs$core$async$state_machine__23908__auto__);

(statearr_25336[(1)] = (1));

return statearr_25336;
});
var cljs$core$async$state_machine__23908__auto____1 = (function (state_25313){
while(true){
var ret_value__23909__auto__ = (function (){try{while(true){
var result__23910__auto__ = switch__23907__auto__.call(null,state_25313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23910__auto__;
}
break;
}
}catch (e25337){if((e25337 instanceof Object)){
var ex__23911__auto__ = e25337;
var statearr_25338_25357 = state_25313;
(statearr_25338_25357[(5)] = ex__23911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25358 = state_25313;
state_25313 = G__25358;
continue;
} else {
return ret_value__23909__auto__;
}
break;
}
});
cljs$core$async$state_machine__23908__auto__ = function(state_25313){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23908__auto____1.call(this,state_25313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23908__auto____0;
cljs$core$async$state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23908__auto____1;
return cljs$core$async$state_machine__23908__auto__;
})()
;})(switch__23907__auto__,c__24002__auto___25341,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24004__auto__ = (function (){var statearr_25339 = f__24003__auto__.call(null);
(statearr_25339[(6)] = c__24002__auto___25341);

return statearr_25339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24004__auto__);
});})(c__24002__auto___25341,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__25361 = arguments.length;
switch (G__25361) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24002__auto___25415 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24002__auto___25415,out){
return (function (){
var f__24003__auto__ = (function (){var switch__23907__auto__ = ((function (c__24002__auto___25415,out){
return (function (state_25393){
var state_val_25394 = (state_25393[(1)]);
if((state_val_25394 === (7))){
var inst_25372 = (state_25393[(7)]);
var inst_25373 = (state_25393[(8)]);
var inst_25372__$1 = (state_25393[(2)]);
var inst_25373__$1 = cljs.core.nth.call(null,inst_25372__$1,(0),null);
var inst_25374 = cljs.core.nth.call(null,inst_25372__$1,(1),null);
var inst_25375 = (inst_25373__$1 == null);
var state_25393__$1 = (function (){var statearr_25395 = state_25393;
(statearr_25395[(9)] = inst_25374);

(statearr_25395[(7)] = inst_25372__$1);

(statearr_25395[(8)] = inst_25373__$1);

return statearr_25395;
})();
if(cljs.core.truth_(inst_25375)){
var statearr_25396_25416 = state_25393__$1;
(statearr_25396_25416[(1)] = (8));

} else {
var statearr_25397_25417 = state_25393__$1;
(statearr_25397_25417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (1))){
var inst_25362 = cljs.core.vec.call(null,chs);
var inst_25363 = inst_25362;
var state_25393__$1 = (function (){var statearr_25398 = state_25393;
(statearr_25398[(10)] = inst_25363);

return statearr_25398;
})();
var statearr_25399_25418 = state_25393__$1;
(statearr_25399_25418[(2)] = null);

(statearr_25399_25418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (4))){
var inst_25363 = (state_25393[(10)]);
var state_25393__$1 = state_25393;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25393__$1,(7),inst_25363);
} else {
if((state_val_25394 === (6))){
var inst_25389 = (state_25393[(2)]);
var state_25393__$1 = state_25393;
var statearr_25400_25419 = state_25393__$1;
(statearr_25400_25419[(2)] = inst_25389);

(statearr_25400_25419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (3))){
var inst_25391 = (state_25393[(2)]);
var state_25393__$1 = state_25393;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25393__$1,inst_25391);
} else {
if((state_val_25394 === (2))){
var inst_25363 = (state_25393[(10)]);
var inst_25365 = cljs.core.count.call(null,inst_25363);
var inst_25366 = (inst_25365 > (0));
var state_25393__$1 = state_25393;
if(cljs.core.truth_(inst_25366)){
var statearr_25402_25420 = state_25393__$1;
(statearr_25402_25420[(1)] = (4));

} else {
var statearr_25403_25421 = state_25393__$1;
(statearr_25403_25421[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (11))){
var inst_25363 = (state_25393[(10)]);
var inst_25382 = (state_25393[(2)]);
var tmp25401 = inst_25363;
var inst_25363__$1 = tmp25401;
var state_25393__$1 = (function (){var statearr_25404 = state_25393;
(statearr_25404[(10)] = inst_25363__$1);

(statearr_25404[(11)] = inst_25382);

return statearr_25404;
})();
var statearr_25405_25422 = state_25393__$1;
(statearr_25405_25422[(2)] = null);

(statearr_25405_25422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (9))){
var inst_25373 = (state_25393[(8)]);
var state_25393__$1 = state_25393;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25393__$1,(11),out,inst_25373);
} else {
if((state_val_25394 === (5))){
var inst_25387 = cljs.core.async.close_BANG_.call(null,out);
var state_25393__$1 = state_25393;
var statearr_25406_25423 = state_25393__$1;
(statearr_25406_25423[(2)] = inst_25387);

(statearr_25406_25423[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (10))){
var inst_25385 = (state_25393[(2)]);
var state_25393__$1 = state_25393;
var statearr_25407_25424 = state_25393__$1;
(statearr_25407_25424[(2)] = inst_25385);

(statearr_25407_25424[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (8))){
var inst_25374 = (state_25393[(9)]);
var inst_25363 = (state_25393[(10)]);
var inst_25372 = (state_25393[(7)]);
var inst_25373 = (state_25393[(8)]);
var inst_25377 = (function (){var cs = inst_25363;
var vec__25368 = inst_25372;
var v = inst_25373;
var c = inst_25374;
return ((function (cs,vec__25368,v,c,inst_25374,inst_25363,inst_25372,inst_25373,state_val_25394,c__24002__auto___25415,out){
return (function (p1__25359_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25359_SHARP_);
});
;})(cs,vec__25368,v,c,inst_25374,inst_25363,inst_25372,inst_25373,state_val_25394,c__24002__auto___25415,out))
})();
var inst_25378 = cljs.core.filterv.call(null,inst_25377,inst_25363);
var inst_25363__$1 = inst_25378;
var state_25393__$1 = (function (){var statearr_25408 = state_25393;
(statearr_25408[(10)] = inst_25363__$1);

return statearr_25408;
})();
var statearr_25409_25425 = state_25393__$1;
(statearr_25409_25425[(2)] = null);

(statearr_25409_25425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24002__auto___25415,out))
;
return ((function (switch__23907__auto__,c__24002__auto___25415,out){
return (function() {
var cljs$core$async$state_machine__23908__auto__ = null;
var cljs$core$async$state_machine__23908__auto____0 = (function (){
var statearr_25410 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25410[(0)] = cljs$core$async$state_machine__23908__auto__);

(statearr_25410[(1)] = (1));

return statearr_25410;
});
var cljs$core$async$state_machine__23908__auto____1 = (function (state_25393){
while(true){
var ret_value__23909__auto__ = (function (){try{while(true){
var result__23910__auto__ = switch__23907__auto__.call(null,state_25393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23910__auto__;
}
break;
}
}catch (e25411){if((e25411 instanceof Object)){
var ex__23911__auto__ = e25411;
var statearr_25412_25426 = state_25393;
(statearr_25412_25426[(5)] = ex__23911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25427 = state_25393;
state_25393 = G__25427;
continue;
} else {
return ret_value__23909__auto__;
}
break;
}
});
cljs$core$async$state_machine__23908__auto__ = function(state_25393){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23908__auto____1.call(this,state_25393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23908__auto____0;
cljs$core$async$state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23908__auto____1;
return cljs$core$async$state_machine__23908__auto__;
})()
;})(switch__23907__auto__,c__24002__auto___25415,out))
})();
var state__24004__auto__ = (function (){var statearr_25413 = f__24003__auto__.call(null);
(statearr_25413[(6)] = c__24002__auto___25415);

return statearr_25413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24004__auto__);
});})(c__24002__auto___25415,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__25429 = arguments.length;
switch (G__25429) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24002__auto___25474 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24002__auto___25474,out){
return (function (){
var f__24003__auto__ = (function (){var switch__23907__auto__ = ((function (c__24002__auto___25474,out){
return (function (state_25453){
var state_val_25454 = (state_25453[(1)]);
if((state_val_25454 === (7))){
var inst_25435 = (state_25453[(7)]);
var inst_25435__$1 = (state_25453[(2)]);
var inst_25436 = (inst_25435__$1 == null);
var inst_25437 = cljs.core.not.call(null,inst_25436);
var state_25453__$1 = (function (){var statearr_25455 = state_25453;
(statearr_25455[(7)] = inst_25435__$1);

return statearr_25455;
})();
if(inst_25437){
var statearr_25456_25475 = state_25453__$1;
(statearr_25456_25475[(1)] = (8));

} else {
var statearr_25457_25476 = state_25453__$1;
(statearr_25457_25476[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25454 === (1))){
var inst_25430 = (0);
var state_25453__$1 = (function (){var statearr_25458 = state_25453;
(statearr_25458[(8)] = inst_25430);

return statearr_25458;
})();
var statearr_25459_25477 = state_25453__$1;
(statearr_25459_25477[(2)] = null);

(statearr_25459_25477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25454 === (4))){
var state_25453__$1 = state_25453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25453__$1,(7),ch);
} else {
if((state_val_25454 === (6))){
var inst_25448 = (state_25453[(2)]);
var state_25453__$1 = state_25453;
var statearr_25460_25478 = state_25453__$1;
(statearr_25460_25478[(2)] = inst_25448);

(statearr_25460_25478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25454 === (3))){
var inst_25450 = (state_25453[(2)]);
var inst_25451 = cljs.core.async.close_BANG_.call(null,out);
var state_25453__$1 = (function (){var statearr_25461 = state_25453;
(statearr_25461[(9)] = inst_25450);

return statearr_25461;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25453__$1,inst_25451);
} else {
if((state_val_25454 === (2))){
var inst_25430 = (state_25453[(8)]);
var inst_25432 = (inst_25430 < n);
var state_25453__$1 = state_25453;
if(cljs.core.truth_(inst_25432)){
var statearr_25462_25479 = state_25453__$1;
(statearr_25462_25479[(1)] = (4));

} else {
var statearr_25463_25480 = state_25453__$1;
(statearr_25463_25480[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25454 === (11))){
var inst_25430 = (state_25453[(8)]);
var inst_25440 = (state_25453[(2)]);
var inst_25441 = (inst_25430 + (1));
var inst_25430__$1 = inst_25441;
var state_25453__$1 = (function (){var statearr_25464 = state_25453;
(statearr_25464[(10)] = inst_25440);

(statearr_25464[(8)] = inst_25430__$1);

return statearr_25464;
})();
var statearr_25465_25481 = state_25453__$1;
(statearr_25465_25481[(2)] = null);

(statearr_25465_25481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25454 === (9))){
var state_25453__$1 = state_25453;
var statearr_25466_25482 = state_25453__$1;
(statearr_25466_25482[(2)] = null);

(statearr_25466_25482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25454 === (5))){
var state_25453__$1 = state_25453;
var statearr_25467_25483 = state_25453__$1;
(statearr_25467_25483[(2)] = null);

(statearr_25467_25483[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25454 === (10))){
var inst_25445 = (state_25453[(2)]);
var state_25453__$1 = state_25453;
var statearr_25468_25484 = state_25453__$1;
(statearr_25468_25484[(2)] = inst_25445);

(statearr_25468_25484[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25454 === (8))){
var inst_25435 = (state_25453[(7)]);
var state_25453__$1 = state_25453;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25453__$1,(11),out,inst_25435);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24002__auto___25474,out))
;
return ((function (switch__23907__auto__,c__24002__auto___25474,out){
return (function() {
var cljs$core$async$state_machine__23908__auto__ = null;
var cljs$core$async$state_machine__23908__auto____0 = (function (){
var statearr_25469 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25469[(0)] = cljs$core$async$state_machine__23908__auto__);

(statearr_25469[(1)] = (1));

return statearr_25469;
});
var cljs$core$async$state_machine__23908__auto____1 = (function (state_25453){
while(true){
var ret_value__23909__auto__ = (function (){try{while(true){
var result__23910__auto__ = switch__23907__auto__.call(null,state_25453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23910__auto__;
}
break;
}
}catch (e25470){if((e25470 instanceof Object)){
var ex__23911__auto__ = e25470;
var statearr_25471_25485 = state_25453;
(statearr_25471_25485[(5)] = ex__23911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25486 = state_25453;
state_25453 = G__25486;
continue;
} else {
return ret_value__23909__auto__;
}
break;
}
});
cljs$core$async$state_machine__23908__auto__ = function(state_25453){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23908__auto____1.call(this,state_25453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23908__auto____0;
cljs$core$async$state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23908__auto____1;
return cljs$core$async$state_machine__23908__auto__;
})()
;})(switch__23907__auto__,c__24002__auto___25474,out))
})();
var state__24004__auto__ = (function (){var statearr_25472 = f__24003__auto__.call(null);
(statearr_25472[(6)] = c__24002__auto___25474);

return statearr_25472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24004__auto__);
});})(c__24002__auto___25474,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25488 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25488 = (function (f,ch,meta25489){
this.f = f;
this.ch = ch;
this.meta25489 = meta25489;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25490,meta25489__$1){
var self__ = this;
var _25490__$1 = this;
return (new cljs.core.async.t_cljs$core$async25488(self__.f,self__.ch,meta25489__$1));
});

cljs.core.async.t_cljs$core$async25488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25490){
var self__ = this;
var _25490__$1 = this;
return self__.meta25489;
});

cljs.core.async.t_cljs$core$async25488.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25488.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25488.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25488.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25488.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25491 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25491 = (function (f,ch,meta25489,_,fn1,meta25492){
this.f = f;
this.ch = ch;
this.meta25489 = meta25489;
this._ = _;
this.fn1 = fn1;
this.meta25492 = meta25492;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25493,meta25492__$1){
var self__ = this;
var _25493__$1 = this;
return (new cljs.core.async.t_cljs$core$async25491(self__.f,self__.ch,self__.meta25489,self__._,self__.fn1,meta25492__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25491.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25493){
var self__ = this;
var _25493__$1 = this;
return self__.meta25492;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25491.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25491.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25491.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25491.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25487_SHARP_){
return f1.call(null,(((p1__25487_SHARP_ == null))?null:self__.f.call(null,p1__25487_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25491.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25489","meta25489",-855616617,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25488","cljs.core.async/t_cljs$core$async25488",2119296676,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25492","meta25492",-1195728685,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25491.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25491.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25491";

cljs.core.async.t_cljs$core$async25491.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25491");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25491.
 */
cljs.core.async.__GT_t_cljs$core$async25491 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25491(f__$1,ch__$1,meta25489__$1,___$2,fn1__$1,meta25492){
return (new cljs.core.async.t_cljs$core$async25491(f__$1,ch__$1,meta25489__$1,___$2,fn1__$1,meta25492));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25491(self__.f,self__.ch,self__.meta25489,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25488.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25488.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25488.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25489","meta25489",-855616617,null)], null);
});

cljs.core.async.t_cljs$core$async25488.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25488.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25488";

cljs.core.async.t_cljs$core$async25488.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25488");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25488.
 */
cljs.core.async.__GT_t_cljs$core$async25488 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25488(f__$1,ch__$1,meta25489){
return (new cljs.core.async.t_cljs$core$async25488(f__$1,ch__$1,meta25489));
});

}

return (new cljs.core.async.t_cljs$core$async25488(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25494 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25494 = (function (f,ch,meta25495){
this.f = f;
this.ch = ch;
this.meta25495 = meta25495;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25496,meta25495__$1){
var self__ = this;
var _25496__$1 = this;
return (new cljs.core.async.t_cljs$core$async25494(self__.f,self__.ch,meta25495__$1));
});

cljs.core.async.t_cljs$core$async25494.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25496){
var self__ = this;
var _25496__$1 = this;
return self__.meta25495;
});

cljs.core.async.t_cljs$core$async25494.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25494.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25494.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25494.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25494.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25494.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25494.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25495","meta25495",-1923967757,null)], null);
});

cljs.core.async.t_cljs$core$async25494.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25494.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25494";

cljs.core.async.t_cljs$core$async25494.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25494");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25494.
 */
cljs.core.async.__GT_t_cljs$core$async25494 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25494(f__$1,ch__$1,meta25495){
return (new cljs.core.async.t_cljs$core$async25494(f__$1,ch__$1,meta25495));
});

}

return (new cljs.core.async.t_cljs$core$async25494(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25497 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25497 = (function (p,ch,meta25498){
this.p = p;
this.ch = ch;
this.meta25498 = meta25498;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25499,meta25498__$1){
var self__ = this;
var _25499__$1 = this;
return (new cljs.core.async.t_cljs$core$async25497(self__.p,self__.ch,meta25498__$1));
});

cljs.core.async.t_cljs$core$async25497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25499){
var self__ = this;
var _25499__$1 = this;
return self__.meta25498;
});

cljs.core.async.t_cljs$core$async25497.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25497.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25497.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25497.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25497.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25497.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25497.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25497.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25498","meta25498",850766451,null)], null);
});

cljs.core.async.t_cljs$core$async25497.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25497.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25497";

cljs.core.async.t_cljs$core$async25497.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25497");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25497.
 */
cljs.core.async.__GT_t_cljs$core$async25497 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25497(p__$1,ch__$1,meta25498){
return (new cljs.core.async.t_cljs$core$async25497(p__$1,ch__$1,meta25498));
});

}

return (new cljs.core.async.t_cljs$core$async25497(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__25501 = arguments.length;
switch (G__25501) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24002__auto___25541 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24002__auto___25541,out){
return (function (){
var f__24003__auto__ = (function (){var switch__23907__auto__ = ((function (c__24002__auto___25541,out){
return (function (state_25522){
var state_val_25523 = (state_25522[(1)]);
if((state_val_25523 === (7))){
var inst_25518 = (state_25522[(2)]);
var state_25522__$1 = state_25522;
var statearr_25524_25542 = state_25522__$1;
(statearr_25524_25542[(2)] = inst_25518);

(statearr_25524_25542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (1))){
var state_25522__$1 = state_25522;
var statearr_25525_25543 = state_25522__$1;
(statearr_25525_25543[(2)] = null);

(statearr_25525_25543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (4))){
var inst_25504 = (state_25522[(7)]);
var inst_25504__$1 = (state_25522[(2)]);
var inst_25505 = (inst_25504__$1 == null);
var state_25522__$1 = (function (){var statearr_25526 = state_25522;
(statearr_25526[(7)] = inst_25504__$1);

return statearr_25526;
})();
if(cljs.core.truth_(inst_25505)){
var statearr_25527_25544 = state_25522__$1;
(statearr_25527_25544[(1)] = (5));

} else {
var statearr_25528_25545 = state_25522__$1;
(statearr_25528_25545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (6))){
var inst_25504 = (state_25522[(7)]);
var inst_25509 = p.call(null,inst_25504);
var state_25522__$1 = state_25522;
if(cljs.core.truth_(inst_25509)){
var statearr_25529_25546 = state_25522__$1;
(statearr_25529_25546[(1)] = (8));

} else {
var statearr_25530_25547 = state_25522__$1;
(statearr_25530_25547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (3))){
var inst_25520 = (state_25522[(2)]);
var state_25522__$1 = state_25522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25522__$1,inst_25520);
} else {
if((state_val_25523 === (2))){
var state_25522__$1 = state_25522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25522__$1,(4),ch);
} else {
if((state_val_25523 === (11))){
var inst_25512 = (state_25522[(2)]);
var state_25522__$1 = state_25522;
var statearr_25531_25548 = state_25522__$1;
(statearr_25531_25548[(2)] = inst_25512);

(statearr_25531_25548[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (9))){
var state_25522__$1 = state_25522;
var statearr_25532_25549 = state_25522__$1;
(statearr_25532_25549[(2)] = null);

(statearr_25532_25549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (5))){
var inst_25507 = cljs.core.async.close_BANG_.call(null,out);
var state_25522__$1 = state_25522;
var statearr_25533_25550 = state_25522__$1;
(statearr_25533_25550[(2)] = inst_25507);

(statearr_25533_25550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (10))){
var inst_25515 = (state_25522[(2)]);
var state_25522__$1 = (function (){var statearr_25534 = state_25522;
(statearr_25534[(8)] = inst_25515);

return statearr_25534;
})();
var statearr_25535_25551 = state_25522__$1;
(statearr_25535_25551[(2)] = null);

(statearr_25535_25551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (8))){
var inst_25504 = (state_25522[(7)]);
var state_25522__$1 = state_25522;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25522__$1,(11),out,inst_25504);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24002__auto___25541,out))
;
return ((function (switch__23907__auto__,c__24002__auto___25541,out){
return (function() {
var cljs$core$async$state_machine__23908__auto__ = null;
var cljs$core$async$state_machine__23908__auto____0 = (function (){
var statearr_25536 = [null,null,null,null,null,null,null,null,null];
(statearr_25536[(0)] = cljs$core$async$state_machine__23908__auto__);

(statearr_25536[(1)] = (1));

return statearr_25536;
});
var cljs$core$async$state_machine__23908__auto____1 = (function (state_25522){
while(true){
var ret_value__23909__auto__ = (function (){try{while(true){
var result__23910__auto__ = switch__23907__auto__.call(null,state_25522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23910__auto__;
}
break;
}
}catch (e25537){if((e25537 instanceof Object)){
var ex__23911__auto__ = e25537;
var statearr_25538_25552 = state_25522;
(statearr_25538_25552[(5)] = ex__23911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25553 = state_25522;
state_25522 = G__25553;
continue;
} else {
return ret_value__23909__auto__;
}
break;
}
});
cljs$core$async$state_machine__23908__auto__ = function(state_25522){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23908__auto____1.call(this,state_25522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23908__auto____0;
cljs$core$async$state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23908__auto____1;
return cljs$core$async$state_machine__23908__auto__;
})()
;})(switch__23907__auto__,c__24002__auto___25541,out))
})();
var state__24004__auto__ = (function (){var statearr_25539 = f__24003__auto__.call(null);
(statearr_25539[(6)] = c__24002__auto___25541);

return statearr_25539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24004__auto__);
});})(c__24002__auto___25541,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25555 = arguments.length;
switch (G__25555) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24002__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24002__auto__){
return (function (){
var f__24003__auto__ = (function (){var switch__23907__auto__ = ((function (c__24002__auto__){
return (function (state_25618){
var state_val_25619 = (state_25618[(1)]);
if((state_val_25619 === (7))){
var inst_25614 = (state_25618[(2)]);
var state_25618__$1 = state_25618;
var statearr_25620_25658 = state_25618__$1;
(statearr_25620_25658[(2)] = inst_25614);

(statearr_25620_25658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25619 === (20))){
var inst_25584 = (state_25618[(7)]);
var inst_25595 = (state_25618[(2)]);
var inst_25596 = cljs.core.next.call(null,inst_25584);
var inst_25570 = inst_25596;
var inst_25571 = null;
var inst_25572 = (0);
var inst_25573 = (0);
var state_25618__$1 = (function (){var statearr_25621 = state_25618;
(statearr_25621[(8)] = inst_25571);

(statearr_25621[(9)] = inst_25595);

(statearr_25621[(10)] = inst_25573);

(statearr_25621[(11)] = inst_25570);

(statearr_25621[(12)] = inst_25572);

return statearr_25621;
})();
var statearr_25622_25659 = state_25618__$1;
(statearr_25622_25659[(2)] = null);

(statearr_25622_25659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25619 === (1))){
var state_25618__$1 = state_25618;
var statearr_25623_25660 = state_25618__$1;
(statearr_25623_25660[(2)] = null);

(statearr_25623_25660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25619 === (4))){
var inst_25559 = (state_25618[(13)]);
var inst_25559__$1 = (state_25618[(2)]);
var inst_25560 = (inst_25559__$1 == null);
var state_25618__$1 = (function (){var statearr_25624 = state_25618;
(statearr_25624[(13)] = inst_25559__$1);

return statearr_25624;
})();
if(cljs.core.truth_(inst_25560)){
var statearr_25625_25661 = state_25618__$1;
(statearr_25625_25661[(1)] = (5));

} else {
var statearr_25626_25662 = state_25618__$1;
(statearr_25626_25662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25619 === (15))){
var state_25618__$1 = state_25618;
var statearr_25630_25663 = state_25618__$1;
(statearr_25630_25663[(2)] = null);

(statearr_25630_25663[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25619 === (21))){
var state_25618__$1 = state_25618;
var statearr_25631_25664 = state_25618__$1;
(statearr_25631_25664[(2)] = null);

(statearr_25631_25664[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25619 === (13))){
var inst_25571 = (state_25618[(8)]);
var inst_25573 = (state_25618[(10)]);
var inst_25570 = (state_25618[(11)]);
var inst_25572 = (state_25618[(12)]);
var inst_25580 = (state_25618[(2)]);
var inst_25581 = (inst_25573 + (1));
var tmp25627 = inst_25571;
var tmp25628 = inst_25570;
var tmp25629 = inst_25572;
var inst_25570__$1 = tmp25628;
var inst_25571__$1 = tmp25627;
var inst_25572__$1 = tmp25629;
var inst_25573__$1 = inst_25581;
var state_25618__$1 = (function (){var statearr_25632 = state_25618;
(statearr_25632[(8)] = inst_25571__$1);

(statearr_25632[(10)] = inst_25573__$1);

(statearr_25632[(14)] = inst_25580);

(statearr_25632[(11)] = inst_25570__$1);

(statearr_25632[(12)] = inst_25572__$1);

return statearr_25632;
})();
var statearr_25633_25665 = state_25618__$1;
(statearr_25633_25665[(2)] = null);

(statearr_25633_25665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25619 === (22))){
var state_25618__$1 = state_25618;
var statearr_25634_25666 = state_25618__$1;
(statearr_25634_25666[(2)] = null);

(statearr_25634_25666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25619 === (6))){
var inst_25559 = (state_25618[(13)]);
var inst_25568 = f.call(null,inst_25559);
var inst_25569 = cljs.core.seq.call(null,inst_25568);
var inst_25570 = inst_25569;
var inst_25571 = null;
var inst_25572 = (0);
var inst_25573 = (0);
var state_25618__$1 = (function (){var statearr_25635 = state_25618;
(statearr_25635[(8)] = inst_25571);

(statearr_25635[(10)] = inst_25573);

(statearr_25635[(11)] = inst_25570);

(statearr_25635[(12)] = inst_25572);

return statearr_25635;
})();
var statearr_25636_25667 = state_25618__$1;
(statearr_25636_25667[(2)] = null);

(statearr_25636_25667[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25619 === (17))){
var inst_25584 = (state_25618[(7)]);
var inst_25588 = cljs.core.chunk_first.call(null,inst_25584);
var inst_25589 = cljs.core.chunk_rest.call(null,inst_25584);
var inst_25590 = cljs.core.count.call(null,inst_25588);
var inst_25570 = inst_25589;
var inst_25571 = inst_25588;
var inst_25572 = inst_25590;
var inst_25573 = (0);
var state_25618__$1 = (function (){var statearr_25637 = state_25618;
(statearr_25637[(8)] = inst_25571);

(statearr_25637[(10)] = inst_25573);

(statearr_25637[(11)] = inst_25570);

(statearr_25637[(12)] = inst_25572);

return statearr_25637;
})();
var statearr_25638_25668 = state_25618__$1;
(statearr_25638_25668[(2)] = null);

(statearr_25638_25668[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25619 === (3))){
var inst_25616 = (state_25618[(2)]);
var state_25618__$1 = state_25618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25618__$1,inst_25616);
} else {
if((state_val_25619 === (12))){
var inst_25604 = (state_25618[(2)]);
var state_25618__$1 = state_25618;
var statearr_25639_25669 = state_25618__$1;
(statearr_25639_25669[(2)] = inst_25604);

(statearr_25639_25669[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25619 === (2))){
var state_25618__$1 = state_25618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25618__$1,(4),in$);
} else {
if((state_val_25619 === (23))){
var inst_25612 = (state_25618[(2)]);
var state_25618__$1 = state_25618;
var statearr_25640_25670 = state_25618__$1;
(statearr_25640_25670[(2)] = inst_25612);

(statearr_25640_25670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25619 === (19))){
var inst_25599 = (state_25618[(2)]);
var state_25618__$1 = state_25618;
var statearr_25641_25671 = state_25618__$1;
(statearr_25641_25671[(2)] = inst_25599);

(statearr_25641_25671[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25619 === (11))){
var inst_25584 = (state_25618[(7)]);
var inst_25570 = (state_25618[(11)]);
var inst_25584__$1 = cljs.core.seq.call(null,inst_25570);
var state_25618__$1 = (function (){var statearr_25642 = state_25618;
(statearr_25642[(7)] = inst_25584__$1);

return statearr_25642;
})();
if(inst_25584__$1){
var statearr_25643_25672 = state_25618__$1;
(statearr_25643_25672[(1)] = (14));

} else {
var statearr_25644_25673 = state_25618__$1;
(statearr_25644_25673[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25619 === (9))){
var inst_25606 = (state_25618[(2)]);
var inst_25607 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25618__$1 = (function (){var statearr_25645 = state_25618;
(statearr_25645[(15)] = inst_25606);

return statearr_25645;
})();
if(cljs.core.truth_(inst_25607)){
var statearr_25646_25674 = state_25618__$1;
(statearr_25646_25674[(1)] = (21));

} else {
var statearr_25647_25675 = state_25618__$1;
(statearr_25647_25675[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25619 === (5))){
var inst_25562 = cljs.core.async.close_BANG_.call(null,out);
var state_25618__$1 = state_25618;
var statearr_25648_25676 = state_25618__$1;
(statearr_25648_25676[(2)] = inst_25562);

(statearr_25648_25676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25619 === (14))){
var inst_25584 = (state_25618[(7)]);
var inst_25586 = cljs.core.chunked_seq_QMARK_.call(null,inst_25584);
var state_25618__$1 = state_25618;
if(inst_25586){
var statearr_25649_25677 = state_25618__$1;
(statearr_25649_25677[(1)] = (17));

} else {
var statearr_25650_25678 = state_25618__$1;
(statearr_25650_25678[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25619 === (16))){
var inst_25602 = (state_25618[(2)]);
var state_25618__$1 = state_25618;
var statearr_25651_25679 = state_25618__$1;
(statearr_25651_25679[(2)] = inst_25602);

(statearr_25651_25679[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25619 === (10))){
var inst_25571 = (state_25618[(8)]);
var inst_25573 = (state_25618[(10)]);
var inst_25578 = cljs.core._nth.call(null,inst_25571,inst_25573);
var state_25618__$1 = state_25618;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25618__$1,(13),out,inst_25578);
} else {
if((state_val_25619 === (18))){
var inst_25584 = (state_25618[(7)]);
var inst_25593 = cljs.core.first.call(null,inst_25584);
var state_25618__$1 = state_25618;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25618__$1,(20),out,inst_25593);
} else {
if((state_val_25619 === (8))){
var inst_25573 = (state_25618[(10)]);
var inst_25572 = (state_25618[(12)]);
var inst_25575 = (inst_25573 < inst_25572);
var inst_25576 = inst_25575;
var state_25618__$1 = state_25618;
if(cljs.core.truth_(inst_25576)){
var statearr_25652_25680 = state_25618__$1;
(statearr_25652_25680[(1)] = (10));

} else {
var statearr_25653_25681 = state_25618__$1;
(statearr_25653_25681[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24002__auto__))
;
return ((function (switch__23907__auto__,c__24002__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23908__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23908__auto____0 = (function (){
var statearr_25654 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25654[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23908__auto__);

(statearr_25654[(1)] = (1));

return statearr_25654;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23908__auto____1 = (function (state_25618){
while(true){
var ret_value__23909__auto__ = (function (){try{while(true){
var result__23910__auto__ = switch__23907__auto__.call(null,state_25618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23910__auto__;
}
break;
}
}catch (e25655){if((e25655 instanceof Object)){
var ex__23911__auto__ = e25655;
var statearr_25656_25682 = state_25618;
(statearr_25656_25682[(5)] = ex__23911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25683 = state_25618;
state_25618 = G__25683;
continue;
} else {
return ret_value__23909__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23908__auto__ = function(state_25618){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23908__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23908__auto____1.call(this,state_25618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23908__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23908__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23908__auto__;
})()
;})(switch__23907__auto__,c__24002__auto__))
})();
var state__24004__auto__ = (function (){var statearr_25657 = f__24003__auto__.call(null);
(statearr_25657[(6)] = c__24002__auto__);

return statearr_25657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24004__auto__);
});})(c__24002__auto__))
);

return c__24002__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25685 = arguments.length;
switch (G__25685) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__25688 = arguments.length;
switch (G__25688) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__25691 = arguments.length;
switch (G__25691) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24002__auto___25738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24002__auto___25738,out){
return (function (){
var f__24003__auto__ = (function (){var switch__23907__auto__ = ((function (c__24002__auto___25738,out){
return (function (state_25715){
var state_val_25716 = (state_25715[(1)]);
if((state_val_25716 === (7))){
var inst_25710 = (state_25715[(2)]);
var state_25715__$1 = state_25715;
var statearr_25717_25739 = state_25715__$1;
(statearr_25717_25739[(2)] = inst_25710);

(statearr_25717_25739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25716 === (1))){
var inst_25692 = null;
var state_25715__$1 = (function (){var statearr_25718 = state_25715;
(statearr_25718[(7)] = inst_25692);

return statearr_25718;
})();
var statearr_25719_25740 = state_25715__$1;
(statearr_25719_25740[(2)] = null);

(statearr_25719_25740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25716 === (4))){
var inst_25695 = (state_25715[(8)]);
var inst_25695__$1 = (state_25715[(2)]);
var inst_25696 = (inst_25695__$1 == null);
var inst_25697 = cljs.core.not.call(null,inst_25696);
var state_25715__$1 = (function (){var statearr_25720 = state_25715;
(statearr_25720[(8)] = inst_25695__$1);

return statearr_25720;
})();
if(inst_25697){
var statearr_25721_25741 = state_25715__$1;
(statearr_25721_25741[(1)] = (5));

} else {
var statearr_25722_25742 = state_25715__$1;
(statearr_25722_25742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25716 === (6))){
var state_25715__$1 = state_25715;
var statearr_25723_25743 = state_25715__$1;
(statearr_25723_25743[(2)] = null);

(statearr_25723_25743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25716 === (3))){
var inst_25712 = (state_25715[(2)]);
var inst_25713 = cljs.core.async.close_BANG_.call(null,out);
var state_25715__$1 = (function (){var statearr_25724 = state_25715;
(statearr_25724[(9)] = inst_25712);

return statearr_25724;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25715__$1,inst_25713);
} else {
if((state_val_25716 === (2))){
var state_25715__$1 = state_25715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25715__$1,(4),ch);
} else {
if((state_val_25716 === (11))){
var inst_25695 = (state_25715[(8)]);
var inst_25704 = (state_25715[(2)]);
var inst_25692 = inst_25695;
var state_25715__$1 = (function (){var statearr_25725 = state_25715;
(statearr_25725[(7)] = inst_25692);

(statearr_25725[(10)] = inst_25704);

return statearr_25725;
})();
var statearr_25726_25744 = state_25715__$1;
(statearr_25726_25744[(2)] = null);

(statearr_25726_25744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25716 === (9))){
var inst_25695 = (state_25715[(8)]);
var state_25715__$1 = state_25715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25715__$1,(11),out,inst_25695);
} else {
if((state_val_25716 === (5))){
var inst_25692 = (state_25715[(7)]);
var inst_25695 = (state_25715[(8)]);
var inst_25699 = cljs.core._EQ_.call(null,inst_25695,inst_25692);
var state_25715__$1 = state_25715;
if(inst_25699){
var statearr_25728_25745 = state_25715__$1;
(statearr_25728_25745[(1)] = (8));

} else {
var statearr_25729_25746 = state_25715__$1;
(statearr_25729_25746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25716 === (10))){
var inst_25707 = (state_25715[(2)]);
var state_25715__$1 = state_25715;
var statearr_25730_25747 = state_25715__$1;
(statearr_25730_25747[(2)] = inst_25707);

(statearr_25730_25747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25716 === (8))){
var inst_25692 = (state_25715[(7)]);
var tmp25727 = inst_25692;
var inst_25692__$1 = tmp25727;
var state_25715__$1 = (function (){var statearr_25731 = state_25715;
(statearr_25731[(7)] = inst_25692__$1);

return statearr_25731;
})();
var statearr_25732_25748 = state_25715__$1;
(statearr_25732_25748[(2)] = null);

(statearr_25732_25748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24002__auto___25738,out))
;
return ((function (switch__23907__auto__,c__24002__auto___25738,out){
return (function() {
var cljs$core$async$state_machine__23908__auto__ = null;
var cljs$core$async$state_machine__23908__auto____0 = (function (){
var statearr_25733 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25733[(0)] = cljs$core$async$state_machine__23908__auto__);

(statearr_25733[(1)] = (1));

return statearr_25733;
});
var cljs$core$async$state_machine__23908__auto____1 = (function (state_25715){
while(true){
var ret_value__23909__auto__ = (function (){try{while(true){
var result__23910__auto__ = switch__23907__auto__.call(null,state_25715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23910__auto__;
}
break;
}
}catch (e25734){if((e25734 instanceof Object)){
var ex__23911__auto__ = e25734;
var statearr_25735_25749 = state_25715;
(statearr_25735_25749[(5)] = ex__23911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25750 = state_25715;
state_25715 = G__25750;
continue;
} else {
return ret_value__23909__auto__;
}
break;
}
});
cljs$core$async$state_machine__23908__auto__ = function(state_25715){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23908__auto____1.call(this,state_25715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23908__auto____0;
cljs$core$async$state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23908__auto____1;
return cljs$core$async$state_machine__23908__auto__;
})()
;})(switch__23907__auto__,c__24002__auto___25738,out))
})();
var state__24004__auto__ = (function (){var statearr_25736 = f__24003__auto__.call(null);
(statearr_25736[(6)] = c__24002__auto___25738);

return statearr_25736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24004__auto__);
});})(c__24002__auto___25738,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25752 = arguments.length;
switch (G__25752) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24002__auto___25818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24002__auto___25818,out){
return (function (){
var f__24003__auto__ = (function (){var switch__23907__auto__ = ((function (c__24002__auto___25818,out){
return (function (state_25790){
var state_val_25791 = (state_25790[(1)]);
if((state_val_25791 === (7))){
var inst_25786 = (state_25790[(2)]);
var state_25790__$1 = state_25790;
var statearr_25792_25819 = state_25790__$1;
(statearr_25792_25819[(2)] = inst_25786);

(statearr_25792_25819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (1))){
var inst_25753 = (new Array(n));
var inst_25754 = inst_25753;
var inst_25755 = (0);
var state_25790__$1 = (function (){var statearr_25793 = state_25790;
(statearr_25793[(7)] = inst_25755);

(statearr_25793[(8)] = inst_25754);

return statearr_25793;
})();
var statearr_25794_25820 = state_25790__$1;
(statearr_25794_25820[(2)] = null);

(statearr_25794_25820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (4))){
var inst_25758 = (state_25790[(9)]);
var inst_25758__$1 = (state_25790[(2)]);
var inst_25759 = (inst_25758__$1 == null);
var inst_25760 = cljs.core.not.call(null,inst_25759);
var state_25790__$1 = (function (){var statearr_25795 = state_25790;
(statearr_25795[(9)] = inst_25758__$1);

return statearr_25795;
})();
if(inst_25760){
var statearr_25796_25821 = state_25790__$1;
(statearr_25796_25821[(1)] = (5));

} else {
var statearr_25797_25822 = state_25790__$1;
(statearr_25797_25822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (15))){
var inst_25780 = (state_25790[(2)]);
var state_25790__$1 = state_25790;
var statearr_25798_25823 = state_25790__$1;
(statearr_25798_25823[(2)] = inst_25780);

(statearr_25798_25823[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (13))){
var state_25790__$1 = state_25790;
var statearr_25799_25824 = state_25790__$1;
(statearr_25799_25824[(2)] = null);

(statearr_25799_25824[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (6))){
var inst_25755 = (state_25790[(7)]);
var inst_25776 = (inst_25755 > (0));
var state_25790__$1 = state_25790;
if(cljs.core.truth_(inst_25776)){
var statearr_25800_25825 = state_25790__$1;
(statearr_25800_25825[(1)] = (12));

} else {
var statearr_25801_25826 = state_25790__$1;
(statearr_25801_25826[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (3))){
var inst_25788 = (state_25790[(2)]);
var state_25790__$1 = state_25790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25790__$1,inst_25788);
} else {
if((state_val_25791 === (12))){
var inst_25754 = (state_25790[(8)]);
var inst_25778 = cljs.core.vec.call(null,inst_25754);
var state_25790__$1 = state_25790;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25790__$1,(15),out,inst_25778);
} else {
if((state_val_25791 === (2))){
var state_25790__$1 = state_25790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25790__$1,(4),ch);
} else {
if((state_val_25791 === (11))){
var inst_25770 = (state_25790[(2)]);
var inst_25771 = (new Array(n));
var inst_25754 = inst_25771;
var inst_25755 = (0);
var state_25790__$1 = (function (){var statearr_25802 = state_25790;
(statearr_25802[(10)] = inst_25770);

(statearr_25802[(7)] = inst_25755);

(statearr_25802[(8)] = inst_25754);

return statearr_25802;
})();
var statearr_25803_25827 = state_25790__$1;
(statearr_25803_25827[(2)] = null);

(statearr_25803_25827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (9))){
var inst_25754 = (state_25790[(8)]);
var inst_25768 = cljs.core.vec.call(null,inst_25754);
var state_25790__$1 = state_25790;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25790__$1,(11),out,inst_25768);
} else {
if((state_val_25791 === (5))){
var inst_25755 = (state_25790[(7)]);
var inst_25758 = (state_25790[(9)]);
var inst_25754 = (state_25790[(8)]);
var inst_25763 = (state_25790[(11)]);
var inst_25762 = (inst_25754[inst_25755] = inst_25758);
var inst_25763__$1 = (inst_25755 + (1));
var inst_25764 = (inst_25763__$1 < n);
var state_25790__$1 = (function (){var statearr_25804 = state_25790;
(statearr_25804[(12)] = inst_25762);

(statearr_25804[(11)] = inst_25763__$1);

return statearr_25804;
})();
if(cljs.core.truth_(inst_25764)){
var statearr_25805_25828 = state_25790__$1;
(statearr_25805_25828[(1)] = (8));

} else {
var statearr_25806_25829 = state_25790__$1;
(statearr_25806_25829[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (14))){
var inst_25783 = (state_25790[(2)]);
var inst_25784 = cljs.core.async.close_BANG_.call(null,out);
var state_25790__$1 = (function (){var statearr_25808 = state_25790;
(statearr_25808[(13)] = inst_25783);

return statearr_25808;
})();
var statearr_25809_25830 = state_25790__$1;
(statearr_25809_25830[(2)] = inst_25784);

(statearr_25809_25830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (10))){
var inst_25774 = (state_25790[(2)]);
var state_25790__$1 = state_25790;
var statearr_25810_25831 = state_25790__$1;
(statearr_25810_25831[(2)] = inst_25774);

(statearr_25810_25831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (8))){
var inst_25754 = (state_25790[(8)]);
var inst_25763 = (state_25790[(11)]);
var tmp25807 = inst_25754;
var inst_25754__$1 = tmp25807;
var inst_25755 = inst_25763;
var state_25790__$1 = (function (){var statearr_25811 = state_25790;
(statearr_25811[(7)] = inst_25755);

(statearr_25811[(8)] = inst_25754__$1);

return statearr_25811;
})();
var statearr_25812_25832 = state_25790__$1;
(statearr_25812_25832[(2)] = null);

(statearr_25812_25832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24002__auto___25818,out))
;
return ((function (switch__23907__auto__,c__24002__auto___25818,out){
return (function() {
var cljs$core$async$state_machine__23908__auto__ = null;
var cljs$core$async$state_machine__23908__auto____0 = (function (){
var statearr_25813 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25813[(0)] = cljs$core$async$state_machine__23908__auto__);

(statearr_25813[(1)] = (1));

return statearr_25813;
});
var cljs$core$async$state_machine__23908__auto____1 = (function (state_25790){
while(true){
var ret_value__23909__auto__ = (function (){try{while(true){
var result__23910__auto__ = switch__23907__auto__.call(null,state_25790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23910__auto__;
}
break;
}
}catch (e25814){if((e25814 instanceof Object)){
var ex__23911__auto__ = e25814;
var statearr_25815_25833 = state_25790;
(statearr_25815_25833[(5)] = ex__23911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25834 = state_25790;
state_25790 = G__25834;
continue;
} else {
return ret_value__23909__auto__;
}
break;
}
});
cljs$core$async$state_machine__23908__auto__ = function(state_25790){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23908__auto____1.call(this,state_25790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23908__auto____0;
cljs$core$async$state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23908__auto____1;
return cljs$core$async$state_machine__23908__auto__;
})()
;})(switch__23907__auto__,c__24002__auto___25818,out))
})();
var state__24004__auto__ = (function (){var statearr_25816 = f__24003__auto__.call(null);
(statearr_25816[(6)] = c__24002__auto___25818);

return statearr_25816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24004__auto__);
});})(c__24002__auto___25818,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25836 = arguments.length;
switch (G__25836) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24002__auto___25906 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24002__auto___25906,out){
return (function (){
var f__24003__auto__ = (function (){var switch__23907__auto__ = ((function (c__24002__auto___25906,out){
return (function (state_25878){
var state_val_25879 = (state_25878[(1)]);
if((state_val_25879 === (7))){
var inst_25874 = (state_25878[(2)]);
var state_25878__$1 = state_25878;
var statearr_25880_25907 = state_25878__$1;
(statearr_25880_25907[(2)] = inst_25874);

(statearr_25880_25907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25879 === (1))){
var inst_25837 = [];
var inst_25838 = inst_25837;
var inst_25839 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25878__$1 = (function (){var statearr_25881 = state_25878;
(statearr_25881[(7)] = inst_25839);

(statearr_25881[(8)] = inst_25838);

return statearr_25881;
})();
var statearr_25882_25908 = state_25878__$1;
(statearr_25882_25908[(2)] = null);

(statearr_25882_25908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25879 === (4))){
var inst_25842 = (state_25878[(9)]);
var inst_25842__$1 = (state_25878[(2)]);
var inst_25843 = (inst_25842__$1 == null);
var inst_25844 = cljs.core.not.call(null,inst_25843);
var state_25878__$1 = (function (){var statearr_25883 = state_25878;
(statearr_25883[(9)] = inst_25842__$1);

return statearr_25883;
})();
if(inst_25844){
var statearr_25884_25909 = state_25878__$1;
(statearr_25884_25909[(1)] = (5));

} else {
var statearr_25885_25910 = state_25878__$1;
(statearr_25885_25910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25879 === (15))){
var inst_25868 = (state_25878[(2)]);
var state_25878__$1 = state_25878;
var statearr_25886_25911 = state_25878__$1;
(statearr_25886_25911[(2)] = inst_25868);

(statearr_25886_25911[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25879 === (13))){
var state_25878__$1 = state_25878;
var statearr_25887_25912 = state_25878__$1;
(statearr_25887_25912[(2)] = null);

(statearr_25887_25912[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25879 === (6))){
var inst_25838 = (state_25878[(8)]);
var inst_25863 = inst_25838.length;
var inst_25864 = (inst_25863 > (0));
var state_25878__$1 = state_25878;
if(cljs.core.truth_(inst_25864)){
var statearr_25888_25913 = state_25878__$1;
(statearr_25888_25913[(1)] = (12));

} else {
var statearr_25889_25914 = state_25878__$1;
(statearr_25889_25914[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25879 === (3))){
var inst_25876 = (state_25878[(2)]);
var state_25878__$1 = state_25878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25878__$1,inst_25876);
} else {
if((state_val_25879 === (12))){
var inst_25838 = (state_25878[(8)]);
var inst_25866 = cljs.core.vec.call(null,inst_25838);
var state_25878__$1 = state_25878;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25878__$1,(15),out,inst_25866);
} else {
if((state_val_25879 === (2))){
var state_25878__$1 = state_25878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25878__$1,(4),ch);
} else {
if((state_val_25879 === (11))){
var inst_25842 = (state_25878[(9)]);
var inst_25846 = (state_25878[(10)]);
var inst_25856 = (state_25878[(2)]);
var inst_25857 = [];
var inst_25858 = inst_25857.push(inst_25842);
var inst_25838 = inst_25857;
var inst_25839 = inst_25846;
var state_25878__$1 = (function (){var statearr_25890 = state_25878;
(statearr_25890[(7)] = inst_25839);

(statearr_25890[(8)] = inst_25838);

(statearr_25890[(11)] = inst_25858);

(statearr_25890[(12)] = inst_25856);

return statearr_25890;
})();
var statearr_25891_25915 = state_25878__$1;
(statearr_25891_25915[(2)] = null);

(statearr_25891_25915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25879 === (9))){
var inst_25838 = (state_25878[(8)]);
var inst_25854 = cljs.core.vec.call(null,inst_25838);
var state_25878__$1 = state_25878;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25878__$1,(11),out,inst_25854);
} else {
if((state_val_25879 === (5))){
var inst_25839 = (state_25878[(7)]);
var inst_25842 = (state_25878[(9)]);
var inst_25846 = (state_25878[(10)]);
var inst_25846__$1 = f.call(null,inst_25842);
var inst_25847 = cljs.core._EQ_.call(null,inst_25846__$1,inst_25839);
var inst_25848 = cljs.core.keyword_identical_QMARK_.call(null,inst_25839,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25849 = ((inst_25847) || (inst_25848));
var state_25878__$1 = (function (){var statearr_25892 = state_25878;
(statearr_25892[(10)] = inst_25846__$1);

return statearr_25892;
})();
if(cljs.core.truth_(inst_25849)){
var statearr_25893_25916 = state_25878__$1;
(statearr_25893_25916[(1)] = (8));

} else {
var statearr_25894_25917 = state_25878__$1;
(statearr_25894_25917[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25879 === (14))){
var inst_25871 = (state_25878[(2)]);
var inst_25872 = cljs.core.async.close_BANG_.call(null,out);
var state_25878__$1 = (function (){var statearr_25896 = state_25878;
(statearr_25896[(13)] = inst_25871);

return statearr_25896;
})();
var statearr_25897_25918 = state_25878__$1;
(statearr_25897_25918[(2)] = inst_25872);

(statearr_25897_25918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25879 === (10))){
var inst_25861 = (state_25878[(2)]);
var state_25878__$1 = state_25878;
var statearr_25898_25919 = state_25878__$1;
(statearr_25898_25919[(2)] = inst_25861);

(statearr_25898_25919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25879 === (8))){
var inst_25842 = (state_25878[(9)]);
var inst_25838 = (state_25878[(8)]);
var inst_25846 = (state_25878[(10)]);
var inst_25851 = inst_25838.push(inst_25842);
var tmp25895 = inst_25838;
var inst_25838__$1 = tmp25895;
var inst_25839 = inst_25846;
var state_25878__$1 = (function (){var statearr_25899 = state_25878;
(statearr_25899[(7)] = inst_25839);

(statearr_25899[(8)] = inst_25838__$1);

(statearr_25899[(14)] = inst_25851);

return statearr_25899;
})();
var statearr_25900_25920 = state_25878__$1;
(statearr_25900_25920[(2)] = null);

(statearr_25900_25920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24002__auto___25906,out))
;
return ((function (switch__23907__auto__,c__24002__auto___25906,out){
return (function() {
var cljs$core$async$state_machine__23908__auto__ = null;
var cljs$core$async$state_machine__23908__auto____0 = (function (){
var statearr_25901 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25901[(0)] = cljs$core$async$state_machine__23908__auto__);

(statearr_25901[(1)] = (1));

return statearr_25901;
});
var cljs$core$async$state_machine__23908__auto____1 = (function (state_25878){
while(true){
var ret_value__23909__auto__ = (function (){try{while(true){
var result__23910__auto__ = switch__23907__auto__.call(null,state_25878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23910__auto__;
}
break;
}
}catch (e25902){if((e25902 instanceof Object)){
var ex__23911__auto__ = e25902;
var statearr_25903_25921 = state_25878;
(statearr_25903_25921[(5)] = ex__23911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25922 = state_25878;
state_25878 = G__25922;
continue;
} else {
return ret_value__23909__auto__;
}
break;
}
});
cljs$core$async$state_machine__23908__auto__ = function(state_25878){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23908__auto____1.call(this,state_25878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23908__auto____0;
cljs$core$async$state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23908__auto____1;
return cljs$core$async$state_machine__23908__auto__;
})()
;})(switch__23907__auto__,c__24002__auto___25906,out))
})();
var state__24004__auto__ = (function (){var statearr_25904 = f__24003__auto__.call(null);
(statearr_25904[(6)] = c__24002__auto___25906);

return statearr_25904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24004__auto__);
});})(c__24002__auto___25906,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1616194470114
