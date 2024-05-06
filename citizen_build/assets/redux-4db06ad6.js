import{r as ke}from"./react-09dd1212.js";import{r as p,a as _}from"./router-87042356.js";import{_ as Me,a as W,h as ve}from"./mui-8e804a04.js";var Re={exports:{}},_e={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F=p;function qe(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ze=typeof Object.is=="function"?Object.is:qe,Ke=F.useState,De=F.useEffect,He=F.useLayoutEffect,Ye=F.useDebugValue;function Ge(e,t){var r=t(),n=Ke({inst:{value:r,getSnapshot:t}}),u=n[0].inst,o=n[1];return He(function(){u.value=r,u.getSnapshot=t,ce(u)&&o({inst:u})},[e,r,t]),De(function(){return ce(u)&&o({inst:u}),e(function(){ce(u)&&o({inst:u})})},[e]),Ye(r),r}function ce(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!ze(e,r)}catch{return!0}}function Je(e,t){return t()}var Qe=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Je:Ge;_e.useSyncExternalStore=F.useSyncExternalStore!==void 0?F.useSyncExternalStore:Qe;Re.exports=_e;var Fe=Re.exports,Xe={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q=p,Ze=Fe;function et(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tt=typeof Object.is=="function"?Object.is:et,rt=Ze.useSyncExternalStore,nt=q.useRef,ot=q.useEffect,ut=q.useMemo,st=q.useDebugValue;Xe.useSyncExternalStoreWithSelector=function(e,t,r,n,u){var o=nt(null);if(o.current===null){var i={hasValue:!1,value:null};o.current=i}else i=o.current;o=ut(function(){function c(w){if(!s){if(s=!0,a=w,w=n(w),u!==void 0&&i.hasValue){var h=i.value;if(u(h,w))return d=h}return d=w}if(h=d,tt(a,w))return h;var S=n(w);return u!==void 0&&u(h,S)?h:(a=w,d=S)}var s=!1,a,d,m=r===void 0?null:r;return[function(){return c(t())},m===null?void 0:function(){return c(m())}]},[t,r,n,u]);var f=rt(e,o[0],o[1]);return ot(function(){i.hasValue=!0,i.value=f},[f]),st(f),f};function it(e){e()}let Ie=it;const ct=e=>Ie=e,ft=()=>Ie,ge=Symbol.for(`react-redux-context-${p.version}`),Pe=globalThis;function lt(){let e=Pe[ge];return e||(e=p.createContext(null),Pe[ge]=e),e}const Le=new Proxy({},new Proxy({},{get(e,t){const r=lt();return(n,...u)=>Reflect[t](r,...u)}})),at=()=>{throw new Error("uSES not initialized!")};var je={exports:{}},l={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var de=Symbol.for("react.element"),pe=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),H=Symbol.for("react.provider"),Y=Symbol.for("react.context"),dt=Symbol.for("react.server_context"),G=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),pt=Symbol.for("react.offscreen"),Ae;Ae=Symbol.for("react.module.reference");function x(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case de:switch(e=e.type,e){case z:case D:case K:case J:case Q:return e;default:switch(e=e&&e.$$typeof,e){case dt:case Y:case G:case Z:case X:case H:return e;default:return t}}case pe:return t}}}l.ContextConsumer=Y;l.ContextProvider=H;l.Element=de;l.ForwardRef=G;l.Fragment=z;l.Lazy=Z;l.Memo=X;l.Portal=pe;l.Profiler=D;l.StrictMode=K;l.Suspense=J;l.SuspenseList=Q;l.isAsyncMode=function(){return!1};l.isConcurrentMode=function(){return!1};l.isContextConsumer=function(e){return x(e)===Y};l.isContextProvider=function(e){return x(e)===H};l.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===de};l.isForwardRef=function(e){return x(e)===G};l.isFragment=function(e){return x(e)===z};l.isLazy=function(e){return x(e)===Z};l.isMemo=function(e){return x(e)===X};l.isPortal=function(e){return x(e)===pe};l.isProfiler=function(e){return x(e)===D};l.isStrictMode=function(e){return x(e)===K};l.isSuspense=function(e){return x(e)===J};l.isSuspenseList=function(e){return x(e)===Q};l.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===z||e===D||e===K||e===J||e===Q||e===pt||typeof e=="object"&&e!==null&&(e.$$typeof===Z||e.$$typeof===X||e.$$typeof===H||e.$$typeof===Y||e.$$typeof===G||e.$$typeof===Ae||e.getModuleId!==void 0)};l.typeOf=x;je.exports=l;var yt=je.exports;const bt=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function mt(e,t,r,n,{areStatesEqual:u,areOwnPropsEqual:o,areStatePropsEqual:i}){let f=!1,c,s,a,d,m;function w(b,v){return c=b,s=v,a=e(c,s),d=t(n,s),m=r(a,d,s),f=!0,m}function h(){return a=e(c,s),t.dependsOnOwnProps&&(d=t(n,s)),m=r(a,d,s),m}function S(){return e.dependsOnOwnProps&&(a=e(c,s)),t.dependsOnOwnProps&&(d=t(n,s)),m=r(a,d,s),m}function y(){const b=e(c,s),v=!i(b,a);return a=b,v&&(m=r(a,d,s)),m}function g(b,v){const O=!o(v,s),ee=!u(b,c,v,s);return c=b,s=v,O&&ee?h():O?S():ee?y():m}return function(v,O){return f?g(v,O):w(v,O)}}function St(e,t){let{initMapStateToProps:r,initMapDispatchToProps:n,initMergeProps:u}=t,o=Me(t,bt);const i=r(e,o),f=n(e,o),c=u(e,o);return mt(i,f,c,e,o)}function wt(e,t){const r={};for(const n in e){const u=e[n];typeof u=="function"&&(r[n]=(...o)=>t(u(...o)))}return r}function ae(e){return function(r){const n=e(r);function u(){return n}return u.dependsOnOwnProps=!1,u}}function xe(e){return e.dependsOnOwnProps?!!e.dependsOnOwnProps:e.length!==1}function Te(e,t){return function(n,{displayName:u}){const o=function(f,c){return o.dependsOnOwnProps?o.mapToProps(f,c):o.mapToProps(f,void 0)};return o.dependsOnOwnProps=!0,o.mapToProps=function(f,c){o.mapToProps=e,o.dependsOnOwnProps=xe(e);let s=o(f,c);return typeof s=="function"&&(o.mapToProps=s,o.dependsOnOwnProps=xe(s),s=o(f,c)),s},o}}function ye(e,t){return(r,n)=>{throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`)}}function ht(e){return e&&typeof e=="object"?ae(t=>wt(e,t)):e?typeof e=="function"?Te(e):ye(e,"mapDispatchToProps"):ae(t=>({dispatch:t}))}function vt(e){return e?typeof e=="function"?Te(e):ye(e,"mapStateToProps"):ae(()=>({}))}function gt(e,t,r){return W({},r,e,t)}function Pt(e){return function(r,{displayName:n,areMergedPropsEqual:u}){let o=!1,i;return function(c,s,a){const d=e(c,s,a);return o?u(d,i)||(i=d):(o=!0,i=d),i}}}function xt(e){return e?typeof e=="function"?Pt(e):ye(e,"mergeProps"):()=>gt}function Ot(){const e=ft();let t=null,r=null;return{clear(){t=null,r=null},notify(){e(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){let n=[],u=t;for(;u;)n.push(u),u=u.next;return n},subscribe(n){let u=!0,o=r={callback:n,next:null,prev:r};return o.prev?o.prev.next=o:t=o,function(){!u||t===null||(u=!1,o.next?o.next.prev=o.prev:r=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}const Oe={notify(){},get:()=>[]};function Ue(e,t){let r,n=Oe;function u(d){return c(),n.subscribe(d)}function o(){n.notify()}function i(){a.onStateChange&&a.onStateChange()}function f(){return!!r}function c(){r||(r=t?t.addNestedSub(i):e.subscribe(i),n=Ot())}function s(){r&&(r(),r=void 0,n.clear(),n=Oe)}const a={addNestedSub:u,notifyNestedSubs:o,handleChangeWrapper:i,isSubscribed:f,trySubscribe:c,tryUnsubscribe:s,getListeners:()=>n};return a}const Ct=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",k=Ct?p.useLayoutEffect:p.useEffect;function Ce(e,t){return e===t?e!==0||t!==0||1/e===1/t:e!==e&&t!==t}function fe(e,t){if(Ce(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;const r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(let u=0;u<r.length;u++)if(!Object.prototype.hasOwnProperty.call(t,r[u])||!Ce(e[r[u]],t[r[u]]))return!1;return!0}const Et=["reactReduxForwardedRef"];let Be=at;const $t=e=>{Be=e},Nt=[null,null];function Mt(e,t,r){k(()=>e(...t),r)}function Rt(e,t,r,n,u,o){e.current=n,r.current=!1,u.current&&(u.current=null,o())}function _t(e,t,r,n,u,o,i,f,c,s,a){if(!e)return()=>{};let d=!1,m=null;const w=()=>{if(d||!f.current)return;const S=t.getState();let y,g;try{y=n(S,u.current)}catch(b){g=b,m=b}g||(m=null),y===o.current?i.current||s():(o.current=y,c.current=y,i.current=!0,a())};return r.onStateChange=w,r.trySubscribe(),w(),()=>{if(d=!0,r.tryUnsubscribe(),r.onStateChange=null,m)throw m}}function Ft(e,t){return e===t}function kt(e,t,r,{pure:n,areStatesEqual:u=Ft,areOwnPropsEqual:o=fe,areStatePropsEqual:i=fe,areMergedPropsEqual:f=fe,forwardRef:c=!1,context:s=Le}={}){const a=s,d=vt(e),m=ht(t),w=xt(r),h=!!e;return y=>{const g=y.displayName||y.name||"Component",b=`Connect(${g})`,v={shouldHandleStateChanges:h,displayName:b,wrappedComponentName:g,WrappedComponent:y,initMapStateToProps:d,initMapDispatchToProps:m,initMergeProps:w,areStatesEqual:u,areStatePropsEqual:i,areOwnPropsEqual:o,areMergedPropsEqual:f};function O(E){const[$,te,M]=p.useMemo(()=>{const{reactReduxForwardedRef:C}=E,T=Me(E,Et);return[E.context,C,T]},[E]),I=p.useMemo(()=>$&&$.Consumer&&yt.isContextConsumer(_.createElement($.Consumer,null))?$:a,[$,a]),N=p.useContext(I),L=!!E.store&&!!E.store.getState&&!!E.store.dispatch,Ve=!!N&&!!N.store,R=L?E.store:N.store,be=Ve?N.getServerState:R.getState,re=p.useMemo(()=>St(R.dispatch,v),[R]),[j,me]=p.useMemo(()=>{if(!h)return Nt;const C=Ue(R,L?void 0:N.subscription),T=C.notifyNestedSubs.bind(C);return[C,T]},[R,L,N]),Se=p.useMemo(()=>L?N:W({},N,{subscription:j}),[L,N,j]),ne=p.useRef(),oe=p.useRef(M),A=p.useRef(),we=p.useRef(!1);p.useRef(!1);const ue=p.useRef(!1),se=p.useRef();k(()=>(ue.current=!0,()=>{ue.current=!1}),[]);const he=p.useMemo(()=>()=>A.current&&M===oe.current?A.current:re(R.getState(),M),[R,M]),We=p.useMemo(()=>T=>j?_t(h,R,j,re,oe,ne,we,ue,A,me,T):()=>{},[j]);Mt(Rt,[oe,ne,we,M,A,me]);let V;try{V=Be(We,he,be?()=>re(be(),M):he)}catch(C){throw se.current&&(C.message+=`
The error may be correlated with this previous error:
${se.current.stack}

`),C}k(()=>{se.current=void 0,A.current=void 0,ne.current=V});const ie=p.useMemo(()=>_.createElement(y,W({},V,{ref:te})),[te,y,V]);return p.useMemo(()=>h?_.createElement(I.Provider,{value:Se},ie):ie,[I,ie,Se])}const B=_.memo(O);if(B.WrappedComponent=y,B.displayName=O.displayName=b,c){const $=_.forwardRef(function(M,I){return _.createElement(B,W({},M,{reactReduxForwardedRef:I}))});return $.displayName=b,$.WrappedComponent=y,ve($,y)}return ve(B,y)}}function qt({store:e,context:t,children:r,serverState:n,stabilityCheck:u="once",noopCheck:o="once"}){const i=p.useMemo(()=>{const s=Ue(e);return{store:e,subscription:s,getServerState:n?()=>n:void 0,stabilityCheck:u,noopCheck:o}},[e,n,u,o]),f=p.useMemo(()=>e.getState(),[e]);k(()=>{const{subscription:s}=i;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),f!==e.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[i,f]);const c=t||Le;return _.createElement(c.Provider,{value:i},r)}$t(Fe.useSyncExternalStore);ct(ke.unstable_batchedUpdates);function U(e){"@babel/helpers - typeof";return U=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(e)}function It(e,t){if(U(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(U(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Lt(e){var t=It(e,"string");return U(t)==="symbol"?t:String(t)}function jt(e,t,r){return t=Lt(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable})),r.push.apply(r,n)}return r}function zt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Ee(Object(r),!0).forEach(function(n){jt(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ee(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function P(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var $e=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),le=function(){return Math.random().toString(36).substring(7).split("").join(".")},Ne={INIT:"@@redux/INIT"+le(),REPLACE:"@@redux/REPLACE"+le(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+le()}};function At(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Tt(e,t,r){var n;if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(P(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(P(1));return r(Tt)(e,t)}if(typeof e!="function")throw new Error(P(2));var u=e,o=t,i=[],f=i,c=!1;function s(){f===i&&(f=i.slice())}function a(){if(c)throw new Error(P(3));return o}function d(S){if(typeof S!="function")throw new Error(P(4));if(c)throw new Error(P(5));var y=!0;return s(),f.push(S),function(){if(y){if(c)throw new Error(P(6));y=!1,s();var b=f.indexOf(S);f.splice(b,1),i=null}}}function m(S){if(!At(S))throw new Error(P(7));if(typeof S.type>"u")throw new Error(P(8));if(c)throw new Error(P(9));try{c=!0,o=u(o,S)}finally{c=!1}for(var y=i=f,g=0;g<y.length;g++){var b=y[g];b()}return S}function w(S){if(typeof S!="function")throw new Error(P(10));u=S,m({type:Ne.REPLACE})}function h(){var S,y=d;return S={subscribe:function(b){if(typeof b!="object"||b===null)throw new Error(P(11));function v(){b.next&&b.next(a())}v();var O=y(v);return{unsubscribe:O}}},S[$e]=function(){return this},S}return m({type:Ne.INIT}),n={dispatch:m,subscribe:d,getState:a,replaceReducer:w},n[$e]=h,n}export{qt as P,U as _,kt as a,Lt as b,Tt as c,zt as d,jt as e};
