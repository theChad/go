// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25946_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25946_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__25947 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25948 = null;
var count__25949 = (0);
var i__25950 = (0);
while(true){
if((i__25950 < count__25949)){
var n = cljs.core._nth.call(null,chunk__25948,i__25950);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__25951 = seq__25947;
var G__25952 = chunk__25948;
var G__25953 = count__25949;
var G__25954 = (i__25950 + (1));
seq__25947 = G__25951;
chunk__25948 = G__25952;
count__25949 = G__25953;
i__25950 = G__25954;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__25947);
if(temp__5753__auto__){
var seq__25947__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25947__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__25947__$1);
var G__25955 = cljs.core.chunk_rest.call(null,seq__25947__$1);
var G__25956 = c__4550__auto__;
var G__25957 = cljs.core.count.call(null,c__4550__auto__);
var G__25958 = (0);
seq__25947 = G__25955;
chunk__25948 = G__25956;
count__25949 = G__25957;
i__25950 = G__25958;
continue;
} else {
var n = cljs.core.first.call(null,seq__25947__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__25959 = cljs.core.next.call(null,seq__25947__$1);
var G__25960 = null;
var G__25961 = (0);
var G__25962 = (0);
seq__25947 = G__25959;
chunk__25948 = G__25960;
count__25949 = G__25961;
i__25950 = G__25962;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__25963){
var vec__25964 = p__25963;
var _ = cljs.core.nth.call(null,vec__25964,(0),null);
var v = cljs.core.nth.call(null,vec__25964,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__25967){
var vec__25968 = p__25967;
var k = cljs.core.nth.call(null,vec__25968,(0),null);
var v = cljs.core.nth.call(null,vec__25968,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__25980_25988 = cljs.core.seq.call(null,deps);
var chunk__25981_25989 = null;
var count__25982_25990 = (0);
var i__25983_25991 = (0);
while(true){
if((i__25983_25991 < count__25982_25990)){
var dep_25992 = cljs.core._nth.call(null,chunk__25981_25989,i__25983_25991);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_25992;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_25992));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_25992,(depth + (1)),state);
} else {
}


var G__25993 = seq__25980_25988;
var G__25994 = chunk__25981_25989;
var G__25995 = count__25982_25990;
var G__25996 = (i__25983_25991 + (1));
seq__25980_25988 = G__25993;
chunk__25981_25989 = G__25994;
count__25982_25990 = G__25995;
i__25983_25991 = G__25996;
continue;
} else {
var temp__5753__auto___25997 = cljs.core.seq.call(null,seq__25980_25988);
if(temp__5753__auto___25997){
var seq__25980_25998__$1 = temp__5753__auto___25997;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25980_25998__$1)){
var c__4550__auto___25999 = cljs.core.chunk_first.call(null,seq__25980_25998__$1);
var G__26000 = cljs.core.chunk_rest.call(null,seq__25980_25998__$1);
var G__26001 = c__4550__auto___25999;
var G__26002 = cljs.core.count.call(null,c__4550__auto___25999);
var G__26003 = (0);
seq__25980_25988 = G__26000;
chunk__25981_25989 = G__26001;
count__25982_25990 = G__26002;
i__25983_25991 = G__26003;
continue;
} else {
var dep_26004 = cljs.core.first.call(null,seq__25980_25998__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_26004;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_26004));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_26004,(depth + (1)),state);
} else {
}


var G__26005 = cljs.core.next.call(null,seq__25980_25998__$1);
var G__26006 = null;
var G__26007 = (0);
var G__26008 = (0);
seq__25980_25988 = G__26005;
chunk__25981_25989 = G__26006;
count__25982_25990 = G__26007;
i__25983_25991 = G__26008;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25984){
var vec__25985 = p__25984;
var seq__25986 = cljs.core.seq.call(null,vec__25985);
var first__25987 = cljs.core.first.call(null,seq__25986);
var seq__25986__$1 = cljs.core.next.call(null,seq__25986);
var x = first__25987;
var xs = seq__25986__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25985,seq__25986,first__25987,seq__25986__$1,x,xs,get_deps__$1){
return (function (p1__25971_SHARP_){
return clojure.set.difference.call(null,p1__25971_SHARP_,x);
});})(vec__25985,seq__25986,first__25987,seq__25986__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26009 = cljs.core.seq.call(null,provides);
var chunk__26010 = null;
var count__26011 = (0);
var i__26012 = (0);
while(true){
if((i__26012 < count__26011)){
var prov = cljs.core._nth.call(null,chunk__26010,i__26012);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26021_26029 = cljs.core.seq.call(null,requires);
var chunk__26022_26030 = null;
var count__26023_26031 = (0);
var i__26024_26032 = (0);
while(true){
if((i__26024_26032 < count__26023_26031)){
var req_26033 = cljs.core._nth.call(null,chunk__26022_26030,i__26024_26032);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26033,prov);


var G__26034 = seq__26021_26029;
var G__26035 = chunk__26022_26030;
var G__26036 = count__26023_26031;
var G__26037 = (i__26024_26032 + (1));
seq__26021_26029 = G__26034;
chunk__26022_26030 = G__26035;
count__26023_26031 = G__26036;
i__26024_26032 = G__26037;
continue;
} else {
var temp__5753__auto___26038 = cljs.core.seq.call(null,seq__26021_26029);
if(temp__5753__auto___26038){
var seq__26021_26039__$1 = temp__5753__auto___26038;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26021_26039__$1)){
var c__4550__auto___26040 = cljs.core.chunk_first.call(null,seq__26021_26039__$1);
var G__26041 = cljs.core.chunk_rest.call(null,seq__26021_26039__$1);
var G__26042 = c__4550__auto___26040;
var G__26043 = cljs.core.count.call(null,c__4550__auto___26040);
var G__26044 = (0);
seq__26021_26029 = G__26041;
chunk__26022_26030 = G__26042;
count__26023_26031 = G__26043;
i__26024_26032 = G__26044;
continue;
} else {
var req_26045 = cljs.core.first.call(null,seq__26021_26039__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26045,prov);


var G__26046 = cljs.core.next.call(null,seq__26021_26039__$1);
var G__26047 = null;
var G__26048 = (0);
var G__26049 = (0);
seq__26021_26029 = G__26046;
chunk__26022_26030 = G__26047;
count__26023_26031 = G__26048;
i__26024_26032 = G__26049;
continue;
}
} else {
}
}
break;
}


var G__26050 = seq__26009;
var G__26051 = chunk__26010;
var G__26052 = count__26011;
var G__26053 = (i__26012 + (1));
seq__26009 = G__26050;
chunk__26010 = G__26051;
count__26011 = G__26052;
i__26012 = G__26053;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__26009);
if(temp__5753__auto__){
var seq__26009__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26009__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__26009__$1);
var G__26054 = cljs.core.chunk_rest.call(null,seq__26009__$1);
var G__26055 = c__4550__auto__;
var G__26056 = cljs.core.count.call(null,c__4550__auto__);
var G__26057 = (0);
seq__26009 = G__26054;
chunk__26010 = G__26055;
count__26011 = G__26056;
i__26012 = G__26057;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26009__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26025_26058 = cljs.core.seq.call(null,requires);
var chunk__26026_26059 = null;
var count__26027_26060 = (0);
var i__26028_26061 = (0);
while(true){
if((i__26028_26061 < count__26027_26060)){
var req_26062 = cljs.core._nth.call(null,chunk__26026_26059,i__26028_26061);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26062,prov);


var G__26063 = seq__26025_26058;
var G__26064 = chunk__26026_26059;
var G__26065 = count__26027_26060;
var G__26066 = (i__26028_26061 + (1));
seq__26025_26058 = G__26063;
chunk__26026_26059 = G__26064;
count__26027_26060 = G__26065;
i__26028_26061 = G__26066;
continue;
} else {
var temp__5753__auto___26067__$1 = cljs.core.seq.call(null,seq__26025_26058);
if(temp__5753__auto___26067__$1){
var seq__26025_26068__$1 = temp__5753__auto___26067__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26025_26068__$1)){
var c__4550__auto___26069 = cljs.core.chunk_first.call(null,seq__26025_26068__$1);
var G__26070 = cljs.core.chunk_rest.call(null,seq__26025_26068__$1);
var G__26071 = c__4550__auto___26069;
var G__26072 = cljs.core.count.call(null,c__4550__auto___26069);
var G__26073 = (0);
seq__26025_26058 = G__26070;
chunk__26026_26059 = G__26071;
count__26027_26060 = G__26072;
i__26028_26061 = G__26073;
continue;
} else {
var req_26074 = cljs.core.first.call(null,seq__26025_26068__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26074,prov);


var G__26075 = cljs.core.next.call(null,seq__26025_26068__$1);
var G__26076 = null;
var G__26077 = (0);
var G__26078 = (0);
seq__26025_26058 = G__26075;
chunk__26026_26059 = G__26076;
count__26027_26060 = G__26077;
i__26028_26061 = G__26078;
continue;
}
} else {
}
}
break;
}


var G__26079 = cljs.core.next.call(null,seq__26009__$1);
var G__26080 = null;
var G__26081 = (0);
var G__26082 = (0);
seq__26009 = G__26079;
chunk__26010 = G__26080;
count__26011 = G__26081;
i__26012 = G__26082;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26083_26087 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26084_26088 = null;
var count__26085_26089 = (0);
var i__26086_26090 = (0);
while(true){
if((i__26086_26090 < count__26085_26089)){
var ns_26091 = cljs.core._nth.call(null,chunk__26084_26088,i__26086_26090);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26091);


var G__26092 = seq__26083_26087;
var G__26093 = chunk__26084_26088;
var G__26094 = count__26085_26089;
var G__26095 = (i__26086_26090 + (1));
seq__26083_26087 = G__26092;
chunk__26084_26088 = G__26093;
count__26085_26089 = G__26094;
i__26086_26090 = G__26095;
continue;
} else {
var temp__5753__auto___26096 = cljs.core.seq.call(null,seq__26083_26087);
if(temp__5753__auto___26096){
var seq__26083_26097__$1 = temp__5753__auto___26096;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26083_26097__$1)){
var c__4550__auto___26098 = cljs.core.chunk_first.call(null,seq__26083_26097__$1);
var G__26099 = cljs.core.chunk_rest.call(null,seq__26083_26097__$1);
var G__26100 = c__4550__auto___26098;
var G__26101 = cljs.core.count.call(null,c__4550__auto___26098);
var G__26102 = (0);
seq__26083_26087 = G__26099;
chunk__26084_26088 = G__26100;
count__26085_26089 = G__26101;
i__26086_26090 = G__26102;
continue;
} else {
var ns_26103 = cljs.core.first.call(null,seq__26083_26097__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26103);


var G__26104 = cljs.core.next.call(null,seq__26083_26097__$1);
var G__26105 = null;
var G__26106 = (0);
var G__26107 = (0);
seq__26083_26087 = G__26104;
chunk__26084_26088 = G__26105;
count__26085_26089 = G__26106;
i__26086_26090 = G__26107;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__26108__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26108 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26109__i = 0, G__26109__a = new Array(arguments.length -  0);
while (G__26109__i < G__26109__a.length) {G__26109__a[G__26109__i] = arguments[G__26109__i + 0]; ++G__26109__i;}
  args = new cljs.core.IndexedSeq(G__26109__a,0,null);
} 
return G__26108__delegate.call(this,args);};
G__26108.cljs$lang$maxFixedArity = 0;
G__26108.cljs$lang$applyTo = (function (arglist__26110){
var args = cljs.core.seq(arglist__26110);
return G__26108__delegate(args);
});
G__26108.cljs$core$IFn$_invoke$arity$variadic = G__26108__delegate;
return G__26108;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__26111_SHARP_,p2__26112_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26111_SHARP_)),p2__26112_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__26113_SHARP_,p2__26114_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26113_SHARP_),p2__26114_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__26115 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__26115.addCallback(((function (G__26115){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__26115))
);

G__26115.addErrback(((function (G__26115){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__26115))
);

return G__26115;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e26116){if((e26116 instanceof Error)){
var e = e26116;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26116;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26117){if((e26117 instanceof Error)){
var e = e26117;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26117;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26118 = cljs.core._EQ_;
var expr__26119 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26118.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26119))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__26118.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26119))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__26118.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__26119))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__26118,expr__26119){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26118,expr__26119))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26121,callback){
var map__26122 = p__26121;
var map__26122__$1 = (((((!((map__26122 == null))))?(((((map__26122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26122):map__26122);
var file_msg = map__26122__$1;
var request_url = cljs.core.get.call(null,map__26122__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__26122,map__26122__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26122,map__26122__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__24002__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24002__auto__){
return (function (){
var f__24003__auto__ = (function (){var switch__23907__auto__ = ((function (c__24002__auto__){
return (function (state_26160){
var state_val_26161 = (state_26160[(1)]);
if((state_val_26161 === (7))){
var inst_26156 = (state_26160[(2)]);
var state_26160__$1 = state_26160;
var statearr_26162_26188 = state_26160__$1;
(statearr_26162_26188[(2)] = inst_26156);

(statearr_26162_26188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26161 === (1))){
var state_26160__$1 = state_26160;
var statearr_26163_26189 = state_26160__$1;
(statearr_26163_26189[(2)] = null);

(statearr_26163_26189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26161 === (4))){
var inst_26126 = (state_26160[(7)]);
var inst_26126__$1 = (state_26160[(2)]);
var state_26160__$1 = (function (){var statearr_26164 = state_26160;
(statearr_26164[(7)] = inst_26126__$1);

return statearr_26164;
})();
if(cljs.core.truth_(inst_26126__$1)){
var statearr_26165_26190 = state_26160__$1;
(statearr_26165_26190[(1)] = (5));

} else {
var statearr_26166_26191 = state_26160__$1;
(statearr_26166_26191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26161 === (15))){
var inst_26139 = (state_26160[(8)]);
var inst_26141 = (state_26160[(9)]);
var inst_26143 = inst_26141.call(null,inst_26139);
var state_26160__$1 = state_26160;
var statearr_26167_26192 = state_26160__$1;
(statearr_26167_26192[(2)] = inst_26143);

(statearr_26167_26192[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26161 === (13))){
var inst_26150 = (state_26160[(2)]);
var state_26160__$1 = state_26160;
var statearr_26168_26193 = state_26160__$1;
(statearr_26168_26193[(2)] = inst_26150);

(statearr_26168_26193[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26161 === (6))){
var state_26160__$1 = state_26160;
var statearr_26169_26194 = state_26160__$1;
(statearr_26169_26194[(2)] = null);

(statearr_26169_26194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26161 === (17))){
var inst_26147 = (state_26160[(2)]);
var state_26160__$1 = state_26160;
var statearr_26170_26195 = state_26160__$1;
(statearr_26170_26195[(2)] = inst_26147);

(statearr_26170_26195[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26161 === (3))){
var inst_26158 = (state_26160[(2)]);
var state_26160__$1 = state_26160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26160__$1,inst_26158);
} else {
if((state_val_26161 === (12))){
var state_26160__$1 = state_26160;
var statearr_26171_26196 = state_26160__$1;
(statearr_26171_26196[(2)] = null);

(statearr_26171_26196[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26161 === (2))){
var state_26160__$1 = state_26160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26160__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26161 === (11))){
var inst_26131 = (state_26160[(10)]);
var inst_26137 = figwheel.client.file_reloading.blocking_load.call(null,inst_26131);
var state_26160__$1 = state_26160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26160__$1,(14),inst_26137);
} else {
if((state_val_26161 === (9))){
var inst_26131 = (state_26160[(10)]);
var state_26160__$1 = state_26160;
if(cljs.core.truth_(inst_26131)){
var statearr_26172_26197 = state_26160__$1;
(statearr_26172_26197[(1)] = (11));

} else {
var statearr_26173_26198 = state_26160__$1;
(statearr_26173_26198[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26161 === (5))){
var inst_26126 = (state_26160[(7)]);
var inst_26132 = (state_26160[(11)]);
var inst_26131 = cljs.core.nth.call(null,inst_26126,(0),null);
var inst_26132__$1 = cljs.core.nth.call(null,inst_26126,(1),null);
var state_26160__$1 = (function (){var statearr_26174 = state_26160;
(statearr_26174[(10)] = inst_26131);

(statearr_26174[(11)] = inst_26132__$1);

return statearr_26174;
})();
if(cljs.core.truth_(inst_26132__$1)){
var statearr_26175_26199 = state_26160__$1;
(statearr_26175_26199[(1)] = (8));

} else {
var statearr_26176_26200 = state_26160__$1;
(statearr_26176_26200[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26161 === (14))){
var inst_26131 = (state_26160[(10)]);
var inst_26141 = (state_26160[(9)]);
var inst_26139 = (state_26160[(2)]);
var inst_26140 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26141__$1 = cljs.core.get.call(null,inst_26140,inst_26131);
var state_26160__$1 = (function (){var statearr_26177 = state_26160;
(statearr_26177[(8)] = inst_26139);

(statearr_26177[(9)] = inst_26141__$1);

return statearr_26177;
})();
if(cljs.core.truth_(inst_26141__$1)){
var statearr_26178_26201 = state_26160__$1;
(statearr_26178_26201[(1)] = (15));

} else {
var statearr_26179_26202 = state_26160__$1;
(statearr_26179_26202[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26161 === (16))){
var inst_26139 = (state_26160[(8)]);
var inst_26145 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26139);
var state_26160__$1 = state_26160;
var statearr_26180_26203 = state_26160__$1;
(statearr_26180_26203[(2)] = inst_26145);

(statearr_26180_26203[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26161 === (10))){
var inst_26152 = (state_26160[(2)]);
var state_26160__$1 = (function (){var statearr_26181 = state_26160;
(statearr_26181[(12)] = inst_26152);

return statearr_26181;
})();
var statearr_26182_26204 = state_26160__$1;
(statearr_26182_26204[(2)] = null);

(statearr_26182_26204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26161 === (8))){
var inst_26132 = (state_26160[(11)]);
var inst_26134 = eval(inst_26132);
var state_26160__$1 = state_26160;
var statearr_26183_26205 = state_26160__$1;
(statearr_26183_26205[(2)] = inst_26134);

(statearr_26183_26205[(1)] = (10));


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
});})(c__24002__auto__))
;
return ((function (switch__23907__auto__,c__24002__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23908__auto__ = null;
var figwheel$client$file_reloading$state_machine__23908__auto____0 = (function (){
var statearr_26184 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26184[(0)] = figwheel$client$file_reloading$state_machine__23908__auto__);

(statearr_26184[(1)] = (1));

return statearr_26184;
});
var figwheel$client$file_reloading$state_machine__23908__auto____1 = (function (state_26160){
while(true){
var ret_value__23909__auto__ = (function (){try{while(true){
var result__23910__auto__ = switch__23907__auto__.call(null,state_26160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23910__auto__;
}
break;
}
}catch (e26185){if((e26185 instanceof Object)){
var ex__23911__auto__ = e26185;
var statearr_26186_26206 = state_26160;
(statearr_26186_26206[(5)] = ex__23911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26207 = state_26160;
state_26160 = G__26207;
continue;
} else {
return ret_value__23909__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23908__auto__ = function(state_26160){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23908__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23908__auto____1.call(this,state_26160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23908__auto____0;
figwheel$client$file_reloading$state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23908__auto____1;
return figwheel$client$file_reloading$state_machine__23908__auto__;
})()
;})(switch__23907__auto__,c__24002__auto__))
})();
var state__24004__auto__ = (function (){var statearr_26187 = f__24003__auto__.call(null);
(statearr_26187[(6)] = c__24002__auto__);

return statearr_26187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24004__auto__);
});})(c__24002__auto__))
);

return c__24002__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__26209 = arguments.length;
switch (G__26209) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26211,callback){
var map__26212 = p__26211;
var map__26212__$1 = (((((!((map__26212 == null))))?(((((map__26212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26212):map__26212);
var file_msg = map__26212__$1;
var namespace = cljs.core.get.call(null,map__26212__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26212,map__26212__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26212,map__26212__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__26214){
var map__26215 = p__26214;
var map__26215__$1 = (((((!((map__26215 == null))))?(((((map__26215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26215):map__26215);
var file_msg = map__26215__$1;
var namespace = cljs.core.get.call(null,map__26215__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26217){
var map__26218 = p__26217;
var map__26218__$1 = (((((!((map__26218 == null))))?(((((map__26218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26218):map__26218);
var file_msg = map__26218__$1;
var namespace = cljs.core.get.call(null,map__26218__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26220,callback){
var map__26221 = p__26220;
var map__26221__$1 = (((((!((map__26221 == null))))?(((((map__26221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26221):map__26221);
var file_msg = map__26221__$1;
var request_url = cljs.core.get.call(null,map__26221__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26221__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__24002__auto___26271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24002__auto___26271,out){
return (function (){
var f__24003__auto__ = (function (){var switch__23907__auto__ = ((function (c__24002__auto___26271,out){
return (function (state_26256){
var state_val_26257 = (state_26256[(1)]);
if((state_val_26257 === (1))){
var inst_26230 = cljs.core.seq.call(null,files);
var inst_26231 = cljs.core.first.call(null,inst_26230);
var inst_26232 = cljs.core.next.call(null,inst_26230);
var inst_26233 = files;
var state_26256__$1 = (function (){var statearr_26258 = state_26256;
(statearr_26258[(7)] = inst_26231);

(statearr_26258[(8)] = inst_26232);

(statearr_26258[(9)] = inst_26233);

return statearr_26258;
})();
var statearr_26259_26272 = state_26256__$1;
(statearr_26259_26272[(2)] = null);

(statearr_26259_26272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (2))){
var inst_26239 = (state_26256[(10)]);
var inst_26233 = (state_26256[(9)]);
var inst_26238 = cljs.core.seq.call(null,inst_26233);
var inst_26239__$1 = cljs.core.first.call(null,inst_26238);
var inst_26240 = cljs.core.next.call(null,inst_26238);
var inst_26241 = (inst_26239__$1 == null);
var inst_26242 = cljs.core.not.call(null,inst_26241);
var state_26256__$1 = (function (){var statearr_26260 = state_26256;
(statearr_26260[(11)] = inst_26240);

(statearr_26260[(10)] = inst_26239__$1);

return statearr_26260;
})();
if(inst_26242){
var statearr_26261_26273 = state_26256__$1;
(statearr_26261_26273[(1)] = (4));

} else {
var statearr_26262_26274 = state_26256__$1;
(statearr_26262_26274[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (3))){
var inst_26254 = (state_26256[(2)]);
var state_26256__$1 = state_26256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26256__$1,inst_26254);
} else {
if((state_val_26257 === (4))){
var inst_26239 = (state_26256[(10)]);
var inst_26244 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26239);
var state_26256__$1 = state_26256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26256__$1,(7),inst_26244);
} else {
if((state_val_26257 === (5))){
var inst_26250 = cljs.core.async.close_BANG_.call(null,out);
var state_26256__$1 = state_26256;
var statearr_26263_26275 = state_26256__$1;
(statearr_26263_26275[(2)] = inst_26250);

(statearr_26263_26275[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (6))){
var inst_26252 = (state_26256[(2)]);
var state_26256__$1 = state_26256;
var statearr_26264_26276 = state_26256__$1;
(statearr_26264_26276[(2)] = inst_26252);

(statearr_26264_26276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (7))){
var inst_26240 = (state_26256[(11)]);
var inst_26246 = (state_26256[(2)]);
var inst_26247 = cljs.core.async.put_BANG_.call(null,out,inst_26246);
var inst_26233 = inst_26240;
var state_26256__$1 = (function (){var statearr_26265 = state_26256;
(statearr_26265[(12)] = inst_26247);

(statearr_26265[(9)] = inst_26233);

return statearr_26265;
})();
var statearr_26266_26277 = state_26256__$1;
(statearr_26266_26277[(2)] = null);

(statearr_26266_26277[(1)] = (2));


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
});})(c__24002__auto___26271,out))
;
return ((function (switch__23907__auto__,c__24002__auto___26271,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23908__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23908__auto____0 = (function (){
var statearr_26267 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26267[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23908__auto__);

(statearr_26267[(1)] = (1));

return statearr_26267;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23908__auto____1 = (function (state_26256){
while(true){
var ret_value__23909__auto__ = (function (){try{while(true){
var result__23910__auto__ = switch__23907__auto__.call(null,state_26256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23910__auto__;
}
break;
}
}catch (e26268){if((e26268 instanceof Object)){
var ex__23911__auto__ = e26268;
var statearr_26269_26278 = state_26256;
(statearr_26269_26278[(5)] = ex__23911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26279 = state_26256;
state_26256 = G__26279;
continue;
} else {
return ret_value__23909__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23908__auto__ = function(state_26256){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23908__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23908__auto____1.call(this,state_26256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23908__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23908__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23908__auto__;
})()
;})(switch__23907__auto__,c__24002__auto___26271,out))
})();
var state__24004__auto__ = (function (){var statearr_26270 = f__24003__auto__.call(null);
(statearr_26270[(6)] = c__24002__auto___26271);

return statearr_26270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24004__auto__);
});})(c__24002__auto___26271,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26280,opts){
var map__26281 = p__26280;
var map__26281__$1 = (((((!((map__26281 == null))))?(((((map__26281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26281):map__26281);
var eval_body = cljs.core.get.call(null,map__26281__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26281__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e26283){var e = e26283;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5751__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__26284_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26284_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5751__auto__)){
var file_msg = temp__5751__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__26285){
var vec__26286 = p__26285;
var k = cljs.core.nth.call(null,vec__26286,(0),null);
var v = cljs.core.nth.call(null,vec__26286,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26289){
var vec__26290 = p__26289;
var k = cljs.core.nth.call(null,vec__26290,(0),null);
var v = cljs.core.nth.call(null,vec__26290,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26296,p__26297){
var map__26298 = p__26296;
var map__26298__$1 = (((((!((map__26298 == null))))?(((((map__26298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26298):map__26298);
var opts = map__26298__$1;
var before_jsload = cljs.core.get.call(null,map__26298__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__26298__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__26298__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__26299 = p__26297;
var map__26299__$1 = (((((!((map__26299 == null))))?(((((map__26299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26299):map__26299);
var msg = map__26299__$1;
var files = cljs.core.get.call(null,map__26299__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__26299__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__26299__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24002__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24002__auto__,map__26298,map__26298__$1,opts,before_jsload,on_jsload,reload_dependents,map__26299,map__26299__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24003__auto__ = (function (){var switch__23907__auto__ = ((function (c__24002__auto__,map__26298,map__26298__$1,opts,before_jsload,on_jsload,reload_dependents,map__26299,map__26299__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_26453){
var state_val_26454 = (state_26453[(1)]);
if((state_val_26454 === (7))){
var inst_26314 = (state_26453[(7)]);
var inst_26315 = (state_26453[(8)]);
var inst_26313 = (state_26453[(9)]);
var inst_26316 = (state_26453[(10)]);
var inst_26321 = cljs.core._nth.call(null,inst_26314,inst_26316);
var inst_26322 = figwheel.client.file_reloading.eval_body.call(null,inst_26321,opts);
var inst_26323 = (inst_26316 + (1));
var tmp26455 = inst_26314;
var tmp26456 = inst_26315;
var tmp26457 = inst_26313;
var inst_26313__$1 = tmp26457;
var inst_26314__$1 = tmp26455;
var inst_26315__$1 = tmp26456;
var inst_26316__$1 = inst_26323;
var state_26453__$1 = (function (){var statearr_26458 = state_26453;
(statearr_26458[(7)] = inst_26314__$1);

(statearr_26458[(8)] = inst_26315__$1);

(statearr_26458[(9)] = inst_26313__$1);

(statearr_26458[(11)] = inst_26322);

(statearr_26458[(10)] = inst_26316__$1);

return statearr_26458;
})();
var statearr_26459_26542 = state_26453__$1;
(statearr_26459_26542[(2)] = null);

(statearr_26459_26542[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (20))){
var inst_26356 = (state_26453[(12)]);
var inst_26364 = figwheel.client.file_reloading.sort_files.call(null,inst_26356);
var state_26453__$1 = state_26453;
var statearr_26460_26543 = state_26453__$1;
(statearr_26460_26543[(2)] = inst_26364);

(statearr_26460_26543[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (27))){
var state_26453__$1 = state_26453;
var statearr_26461_26544 = state_26453__$1;
(statearr_26461_26544[(2)] = null);

(statearr_26461_26544[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (1))){
var inst_26305 = (state_26453[(13)]);
var inst_26302 = before_jsload.call(null,files);
var inst_26303 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26304 = (function (){return ((function (inst_26305,inst_26302,inst_26303,state_val_26454,c__24002__auto__,map__26298,map__26298__$1,opts,before_jsload,on_jsload,reload_dependents,map__26299,map__26299__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26293_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26293_SHARP_);
});
;})(inst_26305,inst_26302,inst_26303,state_val_26454,c__24002__auto__,map__26298,map__26298__$1,opts,before_jsload,on_jsload,reload_dependents,map__26299,map__26299__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26305__$1 = cljs.core.filter.call(null,inst_26304,files);
var inst_26306 = cljs.core.not_empty.call(null,inst_26305__$1);
var state_26453__$1 = (function (){var statearr_26462 = state_26453;
(statearr_26462[(14)] = inst_26303);

(statearr_26462[(15)] = inst_26302);

(statearr_26462[(13)] = inst_26305__$1);

return statearr_26462;
})();
if(cljs.core.truth_(inst_26306)){
var statearr_26463_26545 = state_26453__$1;
(statearr_26463_26545[(1)] = (2));

} else {
var statearr_26464_26546 = state_26453__$1;
(statearr_26464_26546[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (24))){
var state_26453__$1 = state_26453;
var statearr_26465_26547 = state_26453__$1;
(statearr_26465_26547[(2)] = null);

(statearr_26465_26547[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (39))){
var inst_26406 = (state_26453[(16)]);
var state_26453__$1 = state_26453;
var statearr_26466_26548 = state_26453__$1;
(statearr_26466_26548[(2)] = inst_26406);

(statearr_26466_26548[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (46))){
var inst_26448 = (state_26453[(2)]);
var state_26453__$1 = state_26453;
var statearr_26467_26549 = state_26453__$1;
(statearr_26467_26549[(2)] = inst_26448);

(statearr_26467_26549[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (4))){
var inst_26350 = (state_26453[(2)]);
var inst_26351 = cljs.core.List.EMPTY;
var inst_26352 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_26351);
var inst_26353 = (function (){return ((function (inst_26350,inst_26351,inst_26352,state_val_26454,c__24002__auto__,map__26298,map__26298__$1,opts,before_jsload,on_jsload,reload_dependents,map__26299,map__26299__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26294_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26294_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26294_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__26294_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_26350,inst_26351,inst_26352,state_val_26454,c__24002__auto__,map__26298,map__26298__$1,opts,before_jsload,on_jsload,reload_dependents,map__26299,map__26299__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26354 = cljs.core.filter.call(null,inst_26353,files);
var inst_26355 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_26356 = cljs.core.concat.call(null,inst_26354,inst_26355);
var state_26453__$1 = (function (){var statearr_26468 = state_26453;
(statearr_26468[(17)] = inst_26350);

(statearr_26468[(18)] = inst_26352);

(statearr_26468[(12)] = inst_26356);

return statearr_26468;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26469_26550 = state_26453__$1;
(statearr_26469_26550[(1)] = (16));

} else {
var statearr_26470_26551 = state_26453__$1;
(statearr_26470_26551[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (15))){
var inst_26340 = (state_26453[(2)]);
var state_26453__$1 = state_26453;
var statearr_26471_26552 = state_26453__$1;
(statearr_26471_26552[(2)] = inst_26340);

(statearr_26471_26552[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (21))){
var inst_26366 = (state_26453[(19)]);
var inst_26366__$1 = (state_26453[(2)]);
var inst_26367 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26366__$1);
var state_26453__$1 = (function (){var statearr_26472 = state_26453;
(statearr_26472[(19)] = inst_26366__$1);

return statearr_26472;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26453__$1,(22),inst_26367);
} else {
if((state_val_26454 === (31))){
var inst_26451 = (state_26453[(2)]);
var state_26453__$1 = state_26453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26453__$1,inst_26451);
} else {
if((state_val_26454 === (32))){
var inst_26406 = (state_26453[(16)]);
var inst_26411 = inst_26406.cljs$lang$protocol_mask$partition0$;
var inst_26412 = (inst_26411 & (64));
var inst_26413 = inst_26406.cljs$core$ISeq$;
var inst_26414 = (cljs.core.PROTOCOL_SENTINEL === inst_26413);
var inst_26415 = ((inst_26412) || (inst_26414));
var state_26453__$1 = state_26453;
if(cljs.core.truth_(inst_26415)){
var statearr_26473_26553 = state_26453__$1;
(statearr_26473_26553[(1)] = (35));

} else {
var statearr_26474_26554 = state_26453__$1;
(statearr_26474_26554[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (40))){
var inst_26428 = (state_26453[(20)]);
var inst_26427 = (state_26453[(2)]);
var inst_26428__$1 = cljs.core.get.call(null,inst_26427,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26429 = cljs.core.get.call(null,inst_26427,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26430 = cljs.core.not_empty.call(null,inst_26428__$1);
var state_26453__$1 = (function (){var statearr_26475 = state_26453;
(statearr_26475[(20)] = inst_26428__$1);

(statearr_26475[(21)] = inst_26429);

return statearr_26475;
})();
if(cljs.core.truth_(inst_26430)){
var statearr_26476_26555 = state_26453__$1;
(statearr_26476_26555[(1)] = (41));

} else {
var statearr_26477_26556 = state_26453__$1;
(statearr_26477_26556[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (33))){
var state_26453__$1 = state_26453;
var statearr_26478_26557 = state_26453__$1;
(statearr_26478_26557[(2)] = false);

(statearr_26478_26557[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (13))){
var inst_26326 = (state_26453[(22)]);
var inst_26330 = cljs.core.chunk_first.call(null,inst_26326);
var inst_26331 = cljs.core.chunk_rest.call(null,inst_26326);
var inst_26332 = cljs.core.count.call(null,inst_26330);
var inst_26313 = inst_26331;
var inst_26314 = inst_26330;
var inst_26315 = inst_26332;
var inst_26316 = (0);
var state_26453__$1 = (function (){var statearr_26479 = state_26453;
(statearr_26479[(7)] = inst_26314);

(statearr_26479[(8)] = inst_26315);

(statearr_26479[(9)] = inst_26313);

(statearr_26479[(10)] = inst_26316);

return statearr_26479;
})();
var statearr_26480_26558 = state_26453__$1;
(statearr_26480_26558[(2)] = null);

(statearr_26480_26558[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (22))){
var inst_26366 = (state_26453[(19)]);
var inst_26374 = (state_26453[(23)]);
var inst_26370 = (state_26453[(24)]);
var inst_26369 = (state_26453[(25)]);
var inst_26369__$1 = (state_26453[(2)]);
var inst_26370__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26369__$1);
var inst_26371 = (function (){var all_files = inst_26366;
var res_SINGLEQUOTE_ = inst_26369__$1;
var res = inst_26370__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_26366,inst_26374,inst_26370,inst_26369,inst_26369__$1,inst_26370__$1,state_val_26454,c__24002__auto__,map__26298,map__26298__$1,opts,before_jsload,on_jsload,reload_dependents,map__26299,map__26299__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26295_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26295_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_26366,inst_26374,inst_26370,inst_26369,inst_26369__$1,inst_26370__$1,state_val_26454,c__24002__auto__,map__26298,map__26298__$1,opts,before_jsload,on_jsload,reload_dependents,map__26299,map__26299__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26372 = cljs.core.filter.call(null,inst_26371,inst_26369__$1);
var inst_26373 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_26374__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26373);
var inst_26375 = cljs.core.not_empty.call(null,inst_26374__$1);
var state_26453__$1 = (function (){var statearr_26481 = state_26453;
(statearr_26481[(23)] = inst_26374__$1);

(statearr_26481[(24)] = inst_26370__$1);

(statearr_26481[(26)] = inst_26372);

(statearr_26481[(25)] = inst_26369__$1);

return statearr_26481;
})();
if(cljs.core.truth_(inst_26375)){
var statearr_26482_26559 = state_26453__$1;
(statearr_26482_26559[(1)] = (23));

} else {
var statearr_26483_26560 = state_26453__$1;
(statearr_26483_26560[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (36))){
var state_26453__$1 = state_26453;
var statearr_26484_26561 = state_26453__$1;
(statearr_26484_26561[(2)] = false);

(statearr_26484_26561[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (41))){
var inst_26428 = (state_26453[(20)]);
var inst_26432 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_26433 = cljs.core.map.call(null,inst_26432,inst_26428);
var inst_26434 = cljs.core.pr_str.call(null,inst_26433);
var inst_26435 = ["figwheel-no-load meta-data: ",inst_26434].join('');
var inst_26436 = figwheel.client.utils.log.call(null,inst_26435);
var state_26453__$1 = state_26453;
var statearr_26485_26562 = state_26453__$1;
(statearr_26485_26562[(2)] = inst_26436);

(statearr_26485_26562[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (43))){
var inst_26429 = (state_26453[(21)]);
var inst_26439 = (state_26453[(2)]);
var inst_26440 = cljs.core.not_empty.call(null,inst_26429);
var state_26453__$1 = (function (){var statearr_26486 = state_26453;
(statearr_26486[(27)] = inst_26439);

return statearr_26486;
})();
if(cljs.core.truth_(inst_26440)){
var statearr_26487_26563 = state_26453__$1;
(statearr_26487_26563[(1)] = (44));

} else {
var statearr_26488_26564 = state_26453__$1;
(statearr_26488_26564[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (29))){
var inst_26406 = (state_26453[(16)]);
var inst_26366 = (state_26453[(19)]);
var inst_26374 = (state_26453[(23)]);
var inst_26370 = (state_26453[(24)]);
var inst_26372 = (state_26453[(26)]);
var inst_26369 = (state_26453[(25)]);
var inst_26402 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26405 = (function (){var all_files = inst_26366;
var res_SINGLEQUOTE_ = inst_26369;
var res = inst_26370;
var files_not_loaded = inst_26372;
var dependencies_that_loaded = inst_26374;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26406,inst_26366,inst_26374,inst_26370,inst_26372,inst_26369,inst_26402,state_val_26454,c__24002__auto__,map__26298,map__26298__$1,opts,before_jsload,on_jsload,reload_dependents,map__26299,map__26299__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26404){
var map__26489 = p__26404;
var map__26489__$1 = (((((!((map__26489 == null))))?(((((map__26489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26489):map__26489);
var namespace = cljs.core.get.call(null,map__26489__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26406,inst_26366,inst_26374,inst_26370,inst_26372,inst_26369,inst_26402,state_val_26454,c__24002__auto__,map__26298,map__26298__$1,opts,before_jsload,on_jsload,reload_dependents,map__26299,map__26299__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26406__$1 = cljs.core.group_by.call(null,inst_26405,inst_26372);
var inst_26408 = (inst_26406__$1 == null);
var inst_26409 = cljs.core.not.call(null,inst_26408);
var state_26453__$1 = (function (){var statearr_26491 = state_26453;
(statearr_26491[(16)] = inst_26406__$1);

(statearr_26491[(28)] = inst_26402);

return statearr_26491;
})();
if(inst_26409){
var statearr_26492_26565 = state_26453__$1;
(statearr_26492_26565[(1)] = (32));

} else {
var statearr_26493_26566 = state_26453__$1;
(statearr_26493_26566[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (44))){
var inst_26429 = (state_26453[(21)]);
var inst_26442 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26429);
var inst_26443 = cljs.core.pr_str.call(null,inst_26442);
var inst_26444 = ["not required: ",inst_26443].join('');
var inst_26445 = figwheel.client.utils.log.call(null,inst_26444);
var state_26453__$1 = state_26453;
var statearr_26494_26567 = state_26453__$1;
(statearr_26494_26567[(2)] = inst_26445);

(statearr_26494_26567[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (6))){
var inst_26347 = (state_26453[(2)]);
var state_26453__$1 = state_26453;
var statearr_26495_26568 = state_26453__$1;
(statearr_26495_26568[(2)] = inst_26347);

(statearr_26495_26568[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (28))){
var inst_26372 = (state_26453[(26)]);
var inst_26399 = (state_26453[(2)]);
var inst_26400 = cljs.core.not_empty.call(null,inst_26372);
var state_26453__$1 = (function (){var statearr_26496 = state_26453;
(statearr_26496[(29)] = inst_26399);

return statearr_26496;
})();
if(cljs.core.truth_(inst_26400)){
var statearr_26497_26569 = state_26453__$1;
(statearr_26497_26569[(1)] = (29));

} else {
var statearr_26498_26570 = state_26453__$1;
(statearr_26498_26570[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (25))){
var inst_26370 = (state_26453[(24)]);
var inst_26386 = (state_26453[(2)]);
var inst_26387 = cljs.core.not_empty.call(null,inst_26370);
var state_26453__$1 = (function (){var statearr_26499 = state_26453;
(statearr_26499[(30)] = inst_26386);

return statearr_26499;
})();
if(cljs.core.truth_(inst_26387)){
var statearr_26500_26571 = state_26453__$1;
(statearr_26500_26571[(1)] = (26));

} else {
var statearr_26501_26572 = state_26453__$1;
(statearr_26501_26572[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (34))){
var inst_26422 = (state_26453[(2)]);
var state_26453__$1 = state_26453;
if(cljs.core.truth_(inst_26422)){
var statearr_26502_26573 = state_26453__$1;
(statearr_26502_26573[(1)] = (38));

} else {
var statearr_26503_26574 = state_26453__$1;
(statearr_26503_26574[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (17))){
var state_26453__$1 = state_26453;
var statearr_26504_26575 = state_26453__$1;
(statearr_26504_26575[(2)] = recompile_dependents);

(statearr_26504_26575[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (3))){
var state_26453__$1 = state_26453;
var statearr_26505_26576 = state_26453__$1;
(statearr_26505_26576[(2)] = null);

(statearr_26505_26576[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (12))){
var inst_26343 = (state_26453[(2)]);
var state_26453__$1 = state_26453;
var statearr_26506_26577 = state_26453__$1;
(statearr_26506_26577[(2)] = inst_26343);

(statearr_26506_26577[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (2))){
var inst_26305 = (state_26453[(13)]);
var inst_26312 = cljs.core.seq.call(null,inst_26305);
var inst_26313 = inst_26312;
var inst_26314 = null;
var inst_26315 = (0);
var inst_26316 = (0);
var state_26453__$1 = (function (){var statearr_26507 = state_26453;
(statearr_26507[(7)] = inst_26314);

(statearr_26507[(8)] = inst_26315);

(statearr_26507[(9)] = inst_26313);

(statearr_26507[(10)] = inst_26316);

return statearr_26507;
})();
var statearr_26508_26578 = state_26453__$1;
(statearr_26508_26578[(2)] = null);

(statearr_26508_26578[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (23))){
var inst_26366 = (state_26453[(19)]);
var inst_26374 = (state_26453[(23)]);
var inst_26370 = (state_26453[(24)]);
var inst_26372 = (state_26453[(26)]);
var inst_26369 = (state_26453[(25)]);
var inst_26377 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_26379 = (function (){var all_files = inst_26366;
var res_SINGLEQUOTE_ = inst_26369;
var res = inst_26370;
var files_not_loaded = inst_26372;
var dependencies_that_loaded = inst_26374;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26366,inst_26374,inst_26370,inst_26372,inst_26369,inst_26377,state_val_26454,c__24002__auto__,map__26298,map__26298__$1,opts,before_jsload,on_jsload,reload_dependents,map__26299,map__26299__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26378){
var map__26509 = p__26378;
var map__26509__$1 = (((((!((map__26509 == null))))?(((((map__26509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26509):map__26509);
var request_url = cljs.core.get.call(null,map__26509__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26366,inst_26374,inst_26370,inst_26372,inst_26369,inst_26377,state_val_26454,c__24002__auto__,map__26298,map__26298__$1,opts,before_jsload,on_jsload,reload_dependents,map__26299,map__26299__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26380 = cljs.core.reverse.call(null,inst_26374);
var inst_26381 = cljs.core.map.call(null,inst_26379,inst_26380);
var inst_26382 = cljs.core.pr_str.call(null,inst_26381);
var inst_26383 = figwheel.client.utils.log.call(null,inst_26382);
var state_26453__$1 = (function (){var statearr_26511 = state_26453;
(statearr_26511[(31)] = inst_26377);

return statearr_26511;
})();
var statearr_26512_26579 = state_26453__$1;
(statearr_26512_26579[(2)] = inst_26383);

(statearr_26512_26579[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (35))){
var state_26453__$1 = state_26453;
var statearr_26513_26580 = state_26453__$1;
(statearr_26513_26580[(2)] = true);

(statearr_26513_26580[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (19))){
var inst_26356 = (state_26453[(12)]);
var inst_26362 = figwheel.client.file_reloading.expand_files.call(null,inst_26356);
var state_26453__$1 = state_26453;
var statearr_26514_26581 = state_26453__$1;
(statearr_26514_26581[(2)] = inst_26362);

(statearr_26514_26581[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (11))){
var state_26453__$1 = state_26453;
var statearr_26515_26582 = state_26453__$1;
(statearr_26515_26582[(2)] = null);

(statearr_26515_26582[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (9))){
var inst_26345 = (state_26453[(2)]);
var state_26453__$1 = state_26453;
var statearr_26516_26583 = state_26453__$1;
(statearr_26516_26583[(2)] = inst_26345);

(statearr_26516_26583[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (5))){
var inst_26315 = (state_26453[(8)]);
var inst_26316 = (state_26453[(10)]);
var inst_26318 = (inst_26316 < inst_26315);
var inst_26319 = inst_26318;
var state_26453__$1 = state_26453;
if(cljs.core.truth_(inst_26319)){
var statearr_26517_26584 = state_26453__$1;
(statearr_26517_26584[(1)] = (7));

} else {
var statearr_26518_26585 = state_26453__$1;
(statearr_26518_26585[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (14))){
var inst_26326 = (state_26453[(22)]);
var inst_26335 = cljs.core.first.call(null,inst_26326);
var inst_26336 = figwheel.client.file_reloading.eval_body.call(null,inst_26335,opts);
var inst_26337 = cljs.core.next.call(null,inst_26326);
var inst_26313 = inst_26337;
var inst_26314 = null;
var inst_26315 = (0);
var inst_26316 = (0);
var state_26453__$1 = (function (){var statearr_26519 = state_26453;
(statearr_26519[(7)] = inst_26314);

(statearr_26519[(8)] = inst_26315);

(statearr_26519[(9)] = inst_26313);

(statearr_26519[(10)] = inst_26316);

(statearr_26519[(32)] = inst_26336);

return statearr_26519;
})();
var statearr_26520_26586 = state_26453__$1;
(statearr_26520_26586[(2)] = null);

(statearr_26520_26586[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (45))){
var state_26453__$1 = state_26453;
var statearr_26521_26587 = state_26453__$1;
(statearr_26521_26587[(2)] = null);

(statearr_26521_26587[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (26))){
var inst_26366 = (state_26453[(19)]);
var inst_26374 = (state_26453[(23)]);
var inst_26370 = (state_26453[(24)]);
var inst_26372 = (state_26453[(26)]);
var inst_26369 = (state_26453[(25)]);
var inst_26389 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26391 = (function (){var all_files = inst_26366;
var res_SINGLEQUOTE_ = inst_26369;
var res = inst_26370;
var files_not_loaded = inst_26372;
var dependencies_that_loaded = inst_26374;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26366,inst_26374,inst_26370,inst_26372,inst_26369,inst_26389,state_val_26454,c__24002__auto__,map__26298,map__26298__$1,opts,before_jsload,on_jsload,reload_dependents,map__26299,map__26299__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26390){
var map__26522 = p__26390;
var map__26522__$1 = (((((!((map__26522 == null))))?(((((map__26522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26522):map__26522);
var namespace = cljs.core.get.call(null,map__26522__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26522__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26366,inst_26374,inst_26370,inst_26372,inst_26369,inst_26389,state_val_26454,c__24002__auto__,map__26298,map__26298__$1,opts,before_jsload,on_jsload,reload_dependents,map__26299,map__26299__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26392 = cljs.core.map.call(null,inst_26391,inst_26370);
var inst_26393 = cljs.core.pr_str.call(null,inst_26392);
var inst_26394 = figwheel.client.utils.log.call(null,inst_26393);
var inst_26395 = (function (){var all_files = inst_26366;
var res_SINGLEQUOTE_ = inst_26369;
var res = inst_26370;
var files_not_loaded = inst_26372;
var dependencies_that_loaded = inst_26374;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26366,inst_26374,inst_26370,inst_26372,inst_26369,inst_26389,inst_26391,inst_26392,inst_26393,inst_26394,state_val_26454,c__24002__auto__,map__26298,map__26298__$1,opts,before_jsload,on_jsload,reload_dependents,map__26299,map__26299__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26366,inst_26374,inst_26370,inst_26372,inst_26369,inst_26389,inst_26391,inst_26392,inst_26393,inst_26394,state_val_26454,c__24002__auto__,map__26298,map__26298__$1,opts,before_jsload,on_jsload,reload_dependents,map__26299,map__26299__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26396 = setTimeout(inst_26395,(10));
var state_26453__$1 = (function (){var statearr_26524 = state_26453;
(statearr_26524[(33)] = inst_26394);

(statearr_26524[(34)] = inst_26389);

return statearr_26524;
})();
var statearr_26525_26588 = state_26453__$1;
(statearr_26525_26588[(2)] = inst_26396);

(statearr_26525_26588[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (16))){
var state_26453__$1 = state_26453;
var statearr_26526_26589 = state_26453__$1;
(statearr_26526_26589[(2)] = reload_dependents);

(statearr_26526_26589[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (38))){
var inst_26406 = (state_26453[(16)]);
var inst_26424 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26406);
var state_26453__$1 = state_26453;
var statearr_26527_26590 = state_26453__$1;
(statearr_26527_26590[(2)] = inst_26424);

(statearr_26527_26590[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (30))){
var state_26453__$1 = state_26453;
var statearr_26528_26591 = state_26453__$1;
(statearr_26528_26591[(2)] = null);

(statearr_26528_26591[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (10))){
var inst_26326 = (state_26453[(22)]);
var inst_26328 = cljs.core.chunked_seq_QMARK_.call(null,inst_26326);
var state_26453__$1 = state_26453;
if(inst_26328){
var statearr_26529_26592 = state_26453__$1;
(statearr_26529_26592[(1)] = (13));

} else {
var statearr_26530_26593 = state_26453__$1;
(statearr_26530_26593[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (18))){
var inst_26360 = (state_26453[(2)]);
var state_26453__$1 = state_26453;
if(cljs.core.truth_(inst_26360)){
var statearr_26531_26594 = state_26453__$1;
(statearr_26531_26594[(1)] = (19));

} else {
var statearr_26532_26595 = state_26453__$1;
(statearr_26532_26595[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (42))){
var state_26453__$1 = state_26453;
var statearr_26533_26596 = state_26453__$1;
(statearr_26533_26596[(2)] = null);

(statearr_26533_26596[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (37))){
var inst_26419 = (state_26453[(2)]);
var state_26453__$1 = state_26453;
var statearr_26534_26597 = state_26453__$1;
(statearr_26534_26597[(2)] = inst_26419);

(statearr_26534_26597[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (8))){
var inst_26313 = (state_26453[(9)]);
var inst_26326 = (state_26453[(22)]);
var inst_26326__$1 = cljs.core.seq.call(null,inst_26313);
var state_26453__$1 = (function (){var statearr_26535 = state_26453;
(statearr_26535[(22)] = inst_26326__$1);

return statearr_26535;
})();
if(inst_26326__$1){
var statearr_26536_26598 = state_26453__$1;
(statearr_26536_26598[(1)] = (10));

} else {
var statearr_26537_26599 = state_26453__$1;
(statearr_26537_26599[(1)] = (11));

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
}
});})(c__24002__auto__,map__26298,map__26298__$1,opts,before_jsload,on_jsload,reload_dependents,map__26299,map__26299__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23907__auto__,c__24002__auto__,map__26298,map__26298__$1,opts,before_jsload,on_jsload,reload_dependents,map__26299,map__26299__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23908__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23908__auto____0 = (function (){
var statearr_26538 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26538[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23908__auto__);

(statearr_26538[(1)] = (1));

return statearr_26538;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23908__auto____1 = (function (state_26453){
while(true){
var ret_value__23909__auto__ = (function (){try{while(true){
var result__23910__auto__ = switch__23907__auto__.call(null,state_26453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23910__auto__;
}
break;
}
}catch (e26539){if((e26539 instanceof Object)){
var ex__23911__auto__ = e26539;
var statearr_26540_26600 = state_26453;
(statearr_26540_26600[(5)] = ex__23911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26601 = state_26453;
state_26453 = G__26601;
continue;
} else {
return ret_value__23909__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23908__auto__ = function(state_26453){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23908__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23908__auto____1.call(this,state_26453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23908__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23908__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23908__auto__;
})()
;})(switch__23907__auto__,c__24002__auto__,map__26298,map__26298__$1,opts,before_jsload,on_jsload,reload_dependents,map__26299,map__26299__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24004__auto__ = (function (){var statearr_26541 = f__24003__auto__.call(null);
(statearr_26541[(6)] = c__24002__auto__);

return statearr_26541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24004__auto__);
});})(c__24002__auto__,map__26298,map__26298__$1,opts,before_jsload,on_jsload,reload_dependents,map__26299,map__26299__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24002__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26604,link){
var map__26605 = p__26604;
var map__26605__$1 = (((((!((map__26605 == null))))?(((((map__26605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26605):map__26605);
var file = cljs.core.get.call(null,map__26605__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5753__auto__ = link.href;
if(cljs.core.truth_(temp__5753__auto__)){
var link_href = temp__5753__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5753__auto__,map__26605,map__26605__$1,file){
return (function (p1__26602_SHARP_,p2__26603_SHARP_){
if(cljs.core._EQ_.call(null,p1__26602_SHARP_,p2__26603_SHARP_)){
return p1__26602_SHARP_;
} else {
return false;
}
});})(link_href,temp__5753__auto__,map__26605,map__26605__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5753__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26608){
var map__26609 = p__26608;
var map__26609__$1 = (((((!((map__26609 == null))))?(((((map__26609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26609):map__26609);
var match_length = cljs.core.get.call(null,map__26609__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26609__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26607_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26607_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5753__auto__)){
var res = temp__5753__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26611_SHARP_,p2__26612_SHARP_){
return cljs.core.assoc.call(null,p1__26611_SHARP_,cljs.core.get.call(null,p2__26612_SHARP_,key),p2__26612_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5751__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5751__auto__)){
var link = temp__5751__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5751__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5751__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_26613 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_26613);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_26613);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26614,p__26615){
var map__26616 = p__26614;
var map__26616__$1 = (((((!((map__26616 == null))))?(((((map__26616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26616):map__26616);
var on_cssload = cljs.core.get.call(null,map__26616__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__26617 = p__26615;
var map__26617__$1 = (((((!((map__26617 == null))))?(((((map__26617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26617):map__26617);
var files_msg = map__26617__$1;
var files = cljs.core.get.call(null,map__26617__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5753__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5753__auto__)){
var f_datas = temp__5753__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1616194470775
