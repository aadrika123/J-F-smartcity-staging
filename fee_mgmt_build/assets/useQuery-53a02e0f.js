import{S as V,s as U,n as q,m as P,o as D,t as z,q as N,v as W,w as k,x as H,y as m,r as y,z as G,C as J}from"./index-dd1288ad.js";class X extends V{constructor(e,t){super(),this.client=e,this.options=t,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(t)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.currentQuery.addObserver(this),A(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return I(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return I(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,t){const s=this.options,i=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),U(s,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=s.queryKey),this.updateQuery();const n=this.hasListeners();n&&L(this.currentQuery,i,this.options,s)&&this.executeFetch(),this.updateResult(t),n&&(this.currentQuery!==i||this.options.enabled!==s.enabled||this.options.staleTime!==s.staleTime)&&this.updateStaleTimeout();const u=this.computeRefetchInterval();n&&(this.currentQuery!==i||this.options.enabled!==s.enabled||u!==this.currentRefetchInterval)&&this.updateRefetchInterval(u)}getOptimisticResult(e){const t=this.client.getQueryCache().build(this.client,e),s=this.createResult(t,e);return Z(this,s,e)&&(this.currentResult=s,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),s}getCurrentResult(){return this.currentResult}trackResult(e){const t={};return Object.keys(e).forEach(s=>{Object.defineProperty(t,s,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(s),e[s])})}),t}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...t}={}){return this.fetch({...t,meta:{refetchPage:e}})}fetchOptimistic(e){const t=this.client.defaultQueryOptions(e),s=this.client.getQueryCache().build(this.client,t);return s.isFetchingOptimistic=!0,s.fetch().then(()=>this.createResult(s,t))}fetch(e){var t;return this.executeFetch({...e,cancelRefetch:(t=e.cancelRefetch)!=null?t:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(e){this.updateQuery();let t=this.currentQuery.fetch(this.options,e);return e!=null&&e.throwOnError||(t=t.catch(q)),t}updateStaleTimeout(){if(this.clearStaleTimeout(),P||this.currentResult.isStale||!D(this.options.staleTime))return;const t=z(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},t)}computeRefetchInterval(){var e;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(e=this.options.refetchInterval)!=null?e:!1}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!(P||this.options.enabled===!1||!D(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||N.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,t){const s=this.currentQuery,i=this.options,n=this.currentResult,u=this.currentResultState,c=this.currentResultOptions,d=e!==s,p=d?e.state:this.currentQueryInitialState,l=d?this.currentResult:this.previousQueryResult,{state:a}=e;let{dataUpdatedAt:S,error:x,errorUpdatedAt:T,fetchStatus:v,status:f}=a,F=!1,w=!1,h;if(t._optimisticResults){const o=this.hasListeners(),E=!o&&A(e,t),K=o&&L(e,s,t,i);(E||K)&&(v=W(e.options.networkMode)?"fetching":"paused",S||(f="loading")),t._optimisticResults==="isRestoring"&&(v="idle")}if(t.keepPreviousData&&!a.dataUpdatedAt&&l!=null&&l.isSuccess&&f!=="error")h=l.data,S=l.dataUpdatedAt,f=l.status,F=!0;else if(t.select&&typeof a.data<"u")if(n&&a.data===(u==null?void 0:u.data)&&t.select===this.selectFn)h=this.selectResult;else try{this.selectFn=t.select,h=t.select(a.data),h=k(n==null?void 0:n.data,h,t),this.selectResult=h,this.selectError=null}catch(o){this.selectError=o}else h=a.data;if(typeof t.placeholderData<"u"&&typeof h>"u"&&f==="loading"){let o;if(n!=null&&n.isPlaceholderData&&t.placeholderData===(c==null?void 0:c.placeholderData))o=n.data;else if(o=typeof t.placeholderData=="function"?t.placeholderData():t.placeholderData,t.select&&typeof o<"u")try{o=t.select(o),this.selectError=null}catch(E){this.selectError=E}typeof o<"u"&&(f="success",h=k(n==null?void 0:n.data,o,t),w=!0)}this.selectError&&(x=this.selectError,h=this.selectResult,T=Date.now(),f="error");const b=v==="fetching",g=f==="loading",Q=f==="error";return{status:f,fetchStatus:v,isLoading:g,isSuccess:f==="success",isError:Q,isInitialLoading:g&&b,data:h,dataUpdatedAt:S,error:x,errorUpdatedAt:T,failureCount:a.fetchFailureCount,failureReason:a.fetchFailureReason,errorUpdateCount:a.errorUpdateCount,isFetched:a.dataUpdateCount>0||a.errorUpdateCount>0,isFetchedAfterMount:a.dataUpdateCount>p.dataUpdateCount||a.errorUpdateCount>p.errorUpdateCount,isFetching:b,isRefetching:b&&!g,isLoadingError:Q&&a.dataUpdatedAt===0,isPaused:v==="paused",isPlaceholderData:w,isPreviousData:F,isRefetchError:Q&&a.dataUpdatedAt!==0,isStale:O(e,t),refetch:this.refetch,remove:this.remove}}updateResult(e){const t=this.currentResult,s=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,U(s,t))return;this.currentResult=s;const i={cache:!0},n=()=>{if(!t)return!0;const{notifyOnChangeProps:u}=this.options,c=typeof u=="function"?u():u;if(c==="all"||!c&&!this.trackedProps.size)return!0;const d=new Set(c??this.trackedProps);return this.options.useErrorBoundary&&d.add("error"),Object.keys(this.currentResult).some(p=>{const l=p;return this.currentResult[l]!==t[l]&&d.has(l)})};(e==null?void 0:e.listeners)!==!1&&n()&&(i.listeners=!0),this.notify({...i,...e})}updateQuery(){const e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;const t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(t==null||t.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){const t={};e.type==="success"?t.onSuccess=!e.manual:e.type==="error"&&!H(e.error)&&(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()}notify(e){m.batch(()=>{if(e.onSuccess){var t,s,i,n;(t=(s=this.options).onSuccess)==null||t.call(s,this.currentResult.data),(i=(n=this.options).onSettled)==null||i.call(n,this.currentResult.data,null)}else if(e.onError){var u,c,d,p;(u=(c=this.options).onError)==null||u.call(c,this.currentResult.error),(d=(p=this.options).onSettled)==null||d.call(p,void 0,this.currentResult.error)}e.listeners&&this.listeners.forEach(({listener:l})=>{l(this.currentResult)}),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function Y(r,e){return e.enabled!==!1&&!r.state.dataUpdatedAt&&!(r.state.status==="error"&&e.retryOnMount===!1)}function A(r,e){return Y(r,e)||r.state.dataUpdatedAt>0&&I(r,e,e.refetchOnMount)}function I(r,e,t){if(e.enabled!==!1){const s=typeof t=="function"?t(r):t;return s==="always"||s!==!1&&O(r,e)}return!1}function L(r,e,t,s){return t.enabled!==!1&&(r!==e||s.enabled===!1)&&(!t.suspense||r.state.status!=="error")&&O(r,t)}function O(r,e){return r.isStaleByTime(e.staleTime)}function Z(r,e,t){return t.keepPreviousData?!1:t.placeholderData!==void 0?e.isPlaceholderData:r.getCurrentResult()!==e}var M={exports:{}},B={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R=y;function _(r,e){return r===e&&(r!==0||1/r===1/e)||r!==r&&e!==e}var $=typeof Object.is=="function"?Object.is:_,ee=R.useState,te=R.useEffect,re=R.useLayoutEffect,se=R.useDebugValue;function ne(r,e){var t=e(),s=ee({inst:{value:t,getSnapshot:e}}),i=s[0].inst,n=s[1];return re(function(){i.value=t,i.getSnapshot=e,C(i)&&n({inst:i})},[r,t,e]),te(function(){return C(i)&&n({inst:i}),r(function(){C(i)&&n({inst:i})})},[r]),se(t),t}function C(r){var e=r.getSnapshot;r=r.value;try{var t=e();return!$(r,t)}catch{return!0}}function ie(r,e){return e()}var ue=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?ie:ne;B.useSyncExternalStore=R.useSyncExternalStore!==void 0?R.useSyncExternalStore:ue;M.exports=B;var ce=M.exports;const ae=ce.useSyncExternalStore,j=y.createContext(!1),oe=()=>y.useContext(j);j.Provider;function le(){let r=!1;return{clearReset:()=>{r=!1},reset:()=>{r=!0},isReset:()=>r}}const he=y.createContext(le()),de=()=>y.useContext(he);function fe(r,e){return typeof r=="function"?r(...e):!!r}const pe=(r,e)=>{(r.suspense||r.useErrorBoundary)&&(e.isReset()||(r.retryOnMount=!1))},ye=r=>{y.useEffect(()=>{r.clearReset()},[r])},Re=({result:r,errorResetBoundary:e,useErrorBoundary:t,query:s})=>r.isError&&!e.isReset()&&!r.isFetching&&fe(t,[r.error,s]),ve=r=>{r.suspense&&typeof r.staleTime!="number"&&(r.staleTime=1e3)},me=(r,e)=>r.isLoading&&r.isFetching&&!e,Se=(r,e,t)=>(r==null?void 0:r.suspense)&&me(e,t),be=(r,e,t)=>e.fetchOptimistic(r).then(({data:s})=>{r.onSuccess==null||r.onSuccess(s),r.onSettled==null||r.onSettled(s,null)}).catch(s=>{t.clearReset(),r.onError==null||r.onError(s),r.onSettled==null||r.onSettled(void 0,s)});function ge(r,e){const t=G({context:r.context}),s=oe(),i=de(),n=t.defaultQueryOptions(r);n._optimisticResults=s?"isRestoring":"optimistic",n.onError&&(n.onError=m.batchCalls(n.onError)),n.onSuccess&&(n.onSuccess=m.batchCalls(n.onSuccess)),n.onSettled&&(n.onSettled=m.batchCalls(n.onSettled)),ve(n),pe(n,i),ye(i);const[u]=y.useState(()=>new e(t,n)),c=u.getOptimisticResult(n);if(ae(y.useCallback(d=>{const p=s?()=>{}:u.subscribe(m.batchCalls(d));return u.updateResult(),p},[u,s]),()=>u.getCurrentResult(),()=>u.getCurrentResult()),y.useEffect(()=>{u.setOptions(n,{listeners:!1})},[n,u]),Se(n,c,s))throw be(n,u,i);if(Re({result:c,errorResetBoundary:i,useErrorBoundary:n.useErrorBoundary,query:u.getCurrentQuery()}))throw c.error;return n.notifyOnChangeProps?c:u.trackResult(c)}function Ce(r,e,t){const s=J(r,e,t);return ge(s,X)}export{Ce as u};
