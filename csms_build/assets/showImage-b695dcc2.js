import{ag as it,y as st,r as I,K as at,A as ct,Z as lt,Q as Fe,j as H,B as ut,g as ft}from"./index-de640f8f.js";import{A as dt}from"./ApiHeader2-f80ad0bc.js";var ze={exports:{}};(()=>{var F={n:t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return F.d(e,{a:e}),e},d:(t,e)=>{for(var i in e)F.o(e,i)&&!F.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},D={};F.r(D),F.d(D,{default:()=>ot});const ee=st;var x=F.n(ee);const C=I;var h=F.n(C),y="fslightbox-",_="".concat(y,"styles"),Y="".concat(y,"cursor-grabbing"),N="".concat(y,"full-dimension"),U="".concat(y,"flex-centered"),$="".concat(y,"transform-transition"),z="".concat(y,"absoluted"),k="".concat(y,"fade-in"),L="".concat(y,"fade-out"),M=k+"-strong",W=L+"-strong",Q="".concat(y,"opacity-1");const X=function(t){var e=t.size,i=t.viewBox,c=t.d;return h().createElement("svg",{width:e,height:e,viewBox:i,xmlns:"http://www.w3.org/2000/svg"},h().createElement("path",{className:"".concat(y,"svg-path"),d:c}))},q=function(t){var e=t.onClick,i=t.viewBox,c=t.size,o=t.d,a=t.title;return h().createElement("div",{onClick:e,className:"".concat(y,"toolbar-button ").concat(U),title:a},h().createElement(X,{viewBox:i,size:c,d:o}))};function G(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,c=new Array(e);i<e;i++)c[i]=t[i];return c}function ke(t){var e=t.o,i=e.fs,c=i.o,o=i.x,a=e.fss,l=function(s,f){return function(u){if(Array.isArray(u))return u}(s)||function(u,d){var p=u==null?null:typeof Symbol<"u"&&u[Symbol.iterator]||u["@@iterator"];if(p!=null){var g,m,b,v,E=[],w=!0,A=!1;try{if(b=(p=p.call(u)).next,d===0){if(Object(p)!==p)return;w=!1}else for(;!(w=(g=b.call(p)).done)&&(E.push(g.value),E.length!==d);w=!0);}catch(S){A=!0,m=S}finally{try{if(!w&&p.return!=null&&(v=p.return(),Object(v)!==v))return}finally{if(A)throw m}}return E}}(s,f)||function(u,d){if(u){if(typeof u=="string")return G(u,d);var p=Object.prototype.toString.call(u).slice(8,-1);return p==="Object"&&u.constructor&&(p=u.constructor.name),p==="Map"||p==="Set"?Array.from(u):p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p)?G(u,d):void 0}}(s,f)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}((0,C.useState)(!1),2),n=l[0],r=l[1];return a.g=function(){return n},a.s=r,h().createElement(q,{onClick:n?o:c,viewBox:n?"0 0 950 1024":"0 0 18 18",size:n?"24px":"20px",d:n?"M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z":"M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z",title:n?"Exit fullscreen":"Enter fullscreen"})}const Te=function(t){var e=t.fsLightbox.core.lightboxCloser.closeLightbox;return h().createElement(q,{onClick:e,viewBox:"0 0 24 24",size:"20px",d:"M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z",title:"Close"})},Re=function(t){var e=t.fsLightbox;return h().createElement("div",{className:"".concat(y,"toolbar")},h().createElement(ke,{o:e}),h().createElement(Te,{fsLightbox:e}))};function le(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,c=new Array(e);i<e;i++)c[i]=t[i];return c}const He=function(t){var e,i,c=t.fsLightbox,o=c.componentsServices,a=c.props.sources,l=c.stageIndexes,n=(e=(0,C.useState)(l.current+1),i=2,function(d){if(Array.isArray(d))return d}(e)||function(d,p){var g=d==null?null:typeof Symbol<"u"&&d[Symbol.iterator]||d["@@iterator"];if(g!=null){var m,b,v,E,w=[],A=!0,S=!1;try{if(v=(g=g.call(d)).next,p===0){if(Object(g)!==g)return;A=!1}else for(;!(A=(m=v.call(g)).done)&&(w.push(m.value),w.length!==p);A=!0);}catch(O){S=!0,b=O}finally{try{if(!A&&g.return!=null&&(E=g.return(),Object(E)!==E))return}finally{if(S)throw b}}return w}}(e,i)||function(d,p){if(d){if(typeof d=="string")return le(d,p);var g=Object.prototype.toString.call(d).slice(8,-1);return g==="Object"&&d.constructor&&(g=d.constructor.name),g==="Map"||g==="Set"?Array.from(d):g==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g)?le(d,p):void 0}}(e,i)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),r=n[0],s=n[1];o.setSlideNumber=function(d){s(d)};var f=h().createRef(),u=h().createRef();return(0,C.useEffect)(function(){u.current.offsetWidth>55&&(f.current.style.justifyContent="flex-start")},[]),h().createElement("div",{ref:f,className:"".concat(y,"slide-number-container")},h().createElement("div",{ref:u,className:"fslightbox-flex-centered"},h().createElement("span",null,r),h().createElement("span",{className:"".concat(y,"slash")}),h().createElement("span",null,a.length)))},Ne=function(t){var e=t.fsLightbox;return h().createElement("div",{className:"".concat(y,"nav")},h().createElement(Re,{fsLightbox:e}),e.props.sources.length>1&&h().createElement(He,{fsLightbox:e}))};function ue(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,c=new Array(e);i<e;i++)c[i]=t[i];return c}const Me=function(t){var e,i,c=t.fsLightbox.componentsServices,o=(e=(0,C.useState)(!1),i=2,function(n){if(Array.isArray(n))return n}(e)||function(n,r){var s=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(s!=null){var f,u,d,p,g=[],m=!0,b=!1;try{if(d=(s=s.call(n)).next,r===0){if(Object(s)!==s)return;m=!1}else for(;!(m=(f=d.call(s)).done)&&(g.push(f.value),g.length!==r);m=!0);}catch(v){b=!0,u=v}finally{try{if(!m&&s.return!=null&&(p=s.return(),Object(p)!==p))return}finally{if(b)throw u}}return g}}(e,i)||function(n,r){if(n){if(typeof n=="string")return ue(n,r);var s=Object.prototype.toString.call(n).slice(8,-1);return s==="Object"&&n.constructor&&(s=n.constructor.name),s==="Map"||s==="Set"?Array.from(n):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?ue(n,r):void 0}}(e,i)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),a=o[0],l=o[1];return c.showSlideSwipingHovererIfNotYet=function(){a||l(!0)},c.hideSlideSwipingHovererIfShown=function(){a&&l(!1)},a&&h().createElement("div",{className:"".concat(y,"slide-swiping-hoverer ").concat(N," ").concat(z)})},fe=function(t){var e=t.onClick,i=t.name,c=t.d,o=i.charAt(0).toUpperCase()+i.slice(1),a="".concat(y,"slide-btn");return h().createElement("div",{onClick:e,title:"".concat(o," slide"),className:"".concat(a,"-container ").concat(a,"-").concat(i,"-container")},h().createElement("div",{className:"".concat(a," ").concat(U)},h().createElement(X,{viewBox:"0 0 20 20",size:"20px",d:c})))};function de(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,c=new Array(e);i<e;i++)c[i]=t[i];return c}function Ue(t){var e=t.o,i=e.elements.sourcesComponents,c=e.isl,o=e.loc,a=e.saw,l=e.sawu,n=e.st,r=e.stageIndexes.current,s=t.i,f=function(p,g){return function(m){if(Array.isArray(m))return m}(p)||function(m,b){var v=m==null?null:typeof Symbol<"u"&&m[Symbol.iterator]||m["@@iterator"];if(v!=null){var E,w,A,S,O=[],j=!0,V=!1;try{if(A=(v=v.call(m)).next,b===0){if(Object(v)!==v)return;j=!1}else for(;!(j=(E=A.call(v)).done)&&(O.push(E.value),O.length!==b);j=!0);}catch(P){V=!0,w=P}finally{try{if(!j&&v.return!=null&&(S=v.return(),Object(S)!==S))return}finally{if(V)throw w}}return O}}(p,g)||function(m,b){if(m){if(typeof m=="string")return de(m,b);var v=Object.prototype.toString.call(m).slice(8,-1);return v==="Object"&&m.constructor&&(v=m.constructor.name),v==="Map"||v==="Set"?Array.from(m):v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v)?de(m,b):void 0}}(p,g)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}((0,C.useState)(!1),2),u=f[0],d=f[1];return l[s]=function(){d(!u)},h().createElement("div",{ref:a[s]},!c[s]&&h().createElement("div",{className:"fslightboxl"},h().createElement("div",null),h().createElement("div",null),h().createElement("div",null),h().createElement("div",null)),(s===r||!o&&n.i(s))&&i[s])}function Be(t){var e=t.o,i=t.i,c=e.props.slideDistance,o=e.smw,a=e.smwm,l=e.st,n=0;a[i]={};var r=a[i];function s(){return o[i].current}function f(d){s().style.transform="translateX(".concat(d+n,"px)"),n=0}function u(){return(1+c)*innerWidth}return r.s=function(){s().style.display="flex"},r.h=function(){s().style.display="none"},r.a=function(){s().classList.add($)},r.d=function(){s().classList.remove($)},r.n=function(){s().style.removeProperty("transform")},r.v=function(d){return n=d,r},r.ne=function(){f(-u())},r.z=function(){f(0)},r.p=function(){f(u())},h().createElement("div",{ref:o[i],className:"".concat(z," ").concat(N," ").concat(U),style:l.i(i)?{}:{display:"none"}},h().createElement(Ue,{o:e,i}))}function pe(t){return t.touches?t.touches[0].screenX:t.screenX}const Pe=function(t){for(var e=t.o,i=[],c=0;c<e.sl;c++)i.push(h().createElement(Be,{o:e,i:c,key:c}));return h().createElement("div",{className:"".concat(z," ").concat(N),onPointerDown:function(o){(function(a,l){var n=a.elements.sources,r=a.p,s=a.smwm,f=a.stageIndexes;l.target.tagName==="IMG"&&l.preventDefault(),r.isSwiping=!0,r.downScreenX=pe(l),r.swipedX=0;var u=n[f.current].current;u&&u.contains(l.target)?r.isSourceDownEventTarget=!0:r.isSourceDownEventTarget=!1;for(var d=0;d<s.length;d++)s[d].d()})(e,o)}},i)};var De=".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .25s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .25s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .25s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .25s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px!important;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-previous-container{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-previous-container{padding-left:3px}}.fslightbox-slide-btn-next-container{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-next-container{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-next-container{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-next-container{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightboxin{font-size:22px;color:#eaebeb;margin:auto}.fslightboxv{object-fit:cover}.fslightboxl{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightboxl div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightboxl 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightboxl div:nth-child(1){animation-delay:-.45s}.fslightboxl div:nth-child(2){animation-delay:-.3s}.fslightboxl div:nth-child(3){animation-delay:-.15s}@keyframes fslightboxl{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightboxs{position:relative;z-index:2;opacity:0;transform:translateZ(0);margin:auto;backface-visibility:hidden}";function me(){var t=document.createElement("style");t.className=_,t.appendChild(document.createTextNode(De)),document.head.appendChild(t)}function te(t){for(var e=t.props.sources,i=[],c=0;c<e.length;c++)i.push(h().createRef());return i}function he(t,e,i){for(var c=0;c<t.props.sources.length;c++)t.collections[e][c]=t.resolve(i,[c])}var ge="fslightbox-types";function We(t){var e,i=t.props,c=!1,o={},a=0;if(this.getSourceTypeFromLocalStorageByUrl=function(n){return e[n]?e[n]:l(n)},this.handleReceivedSourceTypeForUrl=function(n,r){if(o[r]===c&&(a--,n!=="invalid"?o[r]=n:delete o[r],a===0)){(function(s,f){for(var u in f)s[u]=f[u]})(e,o);try{localStorage.setItem(ge,JSON.stringify(e))}catch{}}},i.disableLocalStorage)this.getSourceTypeFromLocalStorageByUrl=function(){},this.handleReceivedSourceTypeForUrl=function(){};else{try{e=JSON.parse(localStorage.getItem(ge))}catch{}e||(e={},this.getSourceTypeFromLocalStorageByUrl=l)}function l(n){a++,o[n]=c}}var ve="image",be="video",xe="youtube",ye="custom",we="invalid";function ne(){return ne=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&(t[c]=i[c])}return t},ne.apply(this,arguments)}function Xe(t){var e=t.o,i=e.collections.sourceLoadHandlers,c=e.elements.sources,o=e.props,a=o.customAttributes,l=o.sources,n=t.i;return h().createElement("img",ne({className:"fslightboxs",onLoad:i[n].handleImageLoad,ref:c[n],src:l[n]},a&&a[n]?a[n]:{}))}function re(){return re=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&(t[c]=i[c])}return t},re.apply(this,arguments)}function qe(t){var e=t.o,i=e.collections.sourceLoadHandlers,c=e.elements.sources,o=e.props,a=o.customAttributes,l=o.sources,n=e.timeout,r=t.i;return n(i[r].handleNotMetaDatedVideoLoad,3e3),h().createElement("video",re({ref:c[r],className:"fslightboxs fslightboxv",src:l[r],onLoadedMetadata:i[r].handleVideoLoad,controls:!0},a&&a[r]?a[r]:{}))}function oe(){return oe=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&(t[c]=i[c])}return t},oe.apply(this,arguments)}function Ve(t){var e=t.o,i=e.elements.sources,c=e.collections.sourceLoadHandlers,o=e.props,a=o.customAttributes,l=o.sources,n=t.i;(0,C.useEffect)(c[n].handleYoutubeLoad);var r=l[n],s=r.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2],f=r.split("?")[1];return f=f||"",h().createElement("iframe",oe({ref:i[n],className:"fslightboxs",src:"https://www.youtube.com/embed/".concat(s,"?").concat(f),frameBorder:"0",allowFullScreen:!0},a&&a[n]?a[n]:{}))}function _e(t){var e=t.o,i=e.isl,c=e.sawu,o=e.smw,a=t.i;return(0,C.useEffect)(function(){i[a]=!0,c[a](),o[a].current.classList.add(M)}),h().createElement("div",{className:"fslightboxin ".concat(U)},"Invalid source")}function Ye(t){var e=t.o,i=e.collections.sourceLoadHandlers,c=e.elements.sources,o=e.props.sources,a=t.i;(0,C.useEffect)(i[a].handleCustomLoad);var l=o[a].props.className;return h().cloneElement(o[a],{ref:c[a],className:l?"".concat(l," fslightboxs"):"fslightboxs"})}function $e(t){var e=t.componentsServices.isLightboxOpenManager,i=t.elements.sourcesComponents,c=t.sawu;this.runActionsForSourceTypeAndIndex=function(o,a){var l;switch(o){case ve:l=Xe;break;case be:l=qe;break;case xe:l=Ve;break;case ye:l=Ye;break;default:l=_e}i[a]=h().createElement(l,{o:t,i:a}),e.get()&&c[a]()}}function Qe(t,e,i){var c=t.props,o=c.types,a=c.type,l=c.sources;this.getTypeSetByClientForIndex=function(n){var r;return o&&o[n]?r=o[n]:a&&(r=a),r},this.retrieveTypeWithXhrForIndex=function(n){(function(r,s){var f=document.createElement("a");f.href=r;var u=f.hostname;if(u==="www.youtube.com"||u==="youtu.be")return s(xe);var d=new XMLHttpRequest;d.onreadystatechange=function(){if(d.readyState!==4){if(d.readyState===2){var p,g=d.getResponseHeader("content-type");switch(g.slice(0,g.indexOf("/"))){case"image":p=ve;break;case"video":p=be;break;default:p=we}d.onreadystatechange=null,d.abort(),s(p)}}else s(we)},d.open("GET",r),d.send()})(l[n],function(r){e.handleReceivedSourceTypeForUrl(r,l[n]),i.runActionsForSourceTypeAndIndex(r,n)})}}function Ge(t){var e=t.componentsServices.isLightboxOpenManager,i=t.core,c=i.lightboxCloser,o=i.slideIndexChanger,a=t.stageIndexes;this.runTogglerUpdateActions=function(){e.get()?c.closeLightbox():t.ii?t.o():t.i()},this.runCurrentStageIndexUpdateActionsFor=function(l){l!==a.current&&(e.get()?o.jumpTo(l):a.current=l)}}function Se(t){var e=t.core.lightboxUpdater,i=(0,t.resolve)(Ge);e.handleUpdate=function(c){var o=t.props;o.source!==void 0?i.runCurrentStageIndexUpdateActionsFor(o.sources.indexOf(o.source)):o.sourceIndex!==void 0?i.runCurrentStageIndexUpdateActionsFor(o.sourceIndex):o.slide!==void 0&&i.runCurrentStageIndexUpdateActionsFor(o.slide-1),c.toggler!==o.toggler&&i.runTogglerUpdateActions()}}var Ee=250;function Le(t){var e=t.loc,i=t.stageIndexes,c=t.sawu;if(e)c[i.current]();else for(var o in i){var a=i[o];a!==void 0&&c[a]()}}function J(t,e){var i=t.current.classList;i.contains(e)&&i.remove(e)}function Je(t){var e,i=t.dss,c=t.p,o=t.sl,a=(e=!1,function(){return!e&&(e=!0,requestAnimationFrame(function(){e=!1}),!0)});this.a=o===1||i?function(){c.swipedX=1}:function(l){c.isSwiping&&a()&&function(n,r){var s=n.componentsServices,f=n.elements.container,u=n.p,d=n.smwm,p=n.stageIndexes;s.showSlideSwipingHovererIfNotYet(),f.current.classList.add(Y),u.swipedX=pe(r)-u.downScreenX;var g=p.previous,m=p.next;function b(v,E){d[v].v(u.swipedX)[E]()}b(p.current,"z"),g!==void 0&&u.swipedX>0?b(g,"ne"):m!==void 0&&u.swipedX<0&&b(m,"p")}(t,l)}}function Ze(t){var e=t.core.slideIndexChanger,i=t.smwm,c=t.stageIndexes,o=t.sws;function a(n){var r=i[c.current];r.a(),r[n]()}function l(n,r){n!==void 0&&(i[n].s(),i[n][r]())}this.p=function(){var n=c.previous;if(n===void 0)a("z");else{a("p");var r=c.next;e.changeTo(n);var s=c.previous;o.d(s),o.b(r),a("z"),l(s,"ne")}},this.n=function(){var n=c.next;if(n===void 0)a("z");else{a("ne");var r=c.previous;e.changeTo(n);var s=c.next;o.d(s),o.b(r),a("z"),l(s,"p")}}}function Ke(t){var e=t.componentsServices,i=t.core.lightboxCloser,c=t.dss,o=t.elements.container,a=t.p,l=t.props.disableBackgroundClose,n=(0,t.r)(Ze);this.n=function(){e.hideSlideSwipingHovererIfShown(),a.isSourceDownEventTarget||l||i.closeLightbox(),a.isSwiping=!1},this.s=function(){c||(a.swipedX>0?n.p():n.n()),e.hideSlideSwipingHovererIfShown(),o.current.classList.remove(Y),a.isSwiping=!1}}function et(t){var e,i,c;(function(o){var a=o.props.sources,l=o.st,n=o.stageIndexes,r=a.length-1;l.p=function(){return n.current===0?r:n.current-1},l.n=function(){return n.current===r?0:n.current+1},l.u=r===0?function(){}:r===1?function(){n.current===0?(n.next=1,delete n.previous):(n.previous=0,delete n.next)}:function(){n.previous=l.p(),n.next=l.n()},l.i=r<=2?function(){return!0}:function(s){var f=n.current;if(f===0&&s===r||f===r&&s===0)return!0;var u=f-s;return u===-1||u===0||u===1}})(t),i=(e=t).core.classFacade,c=e.elements,i.removeFromEachElementClassIfContains=function(o,a){for(var l=0;l<c[o].length;l++)J(c[o][l],a)},function(o){var a=o.fs,l=o.fss,n=["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"];function r(f){for(var u=0;u<n.length;u++)document[f](n[u],s)}function s(){l.s(document.fullscreenElement||document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement)}a.o=function(){l.s(!0);var f=document.documentElement;f.requestFullscreen?f.requestFullscreen():f.mozRequestFullScreen?f.mozRequestFullScreen():f.webkitRequestFullscreen?f.webkitRequestFullscreen():f.msRequestFullscreen&&f.msRequestFullscreen()},a.x=function(){l.s(!1),document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()},a.t=function(){l.g()?a.x():a.o()},a.l=function(){r("addEventListener")},a.q=function(){r("removeEventListener")}}(t),function(o){var a,l,n=o.core,r=n.globalEventsController,s=n.windowResizeActioner,f=o.fs,u=(0,o.r)(Je);r.attachListeners=function(){document.addEventListener("pointermove",u.a),l=function(d){var p,g,m;g=(p=o).p,m=(0,p.r)(Ke),g.isSwiping&&(g.swipedX?m.s():m.n())},document.addEventListener("pointerup",l),addEventListener("resize",s.runActions),a=function(d){(function(p,g){var m=p.core.lightboxCloser,b=p.fs;switch(g.key){case"Escape":m.closeLightbox();break;case"ArrowLeft":p.pr();break;case"ArrowRight":p.n();break;case"F11":g.preventDefault(),b.t()}})(o,d)},document.addEventListener("keydown",a),f.l()},r.removeListeners=function(){document.removeEventListener("pointermove",u.a),document.removeEventListener("pointerup",l),removeEventListener("resize",s.runActions),document.removeEventListener("keydown",a),f.q()}}(t),function(o){var a=o.core,l=a.lightboxCloser,n=a.lightboxCloseActioner;l.closeLightbox=function(){n.isLightboxFadingOut||n.runActions()}}(t),function(o){var a=o.componentsServices.isLightboxOpenManager,l=o.core,n=l.globalEventsController,r=l.lightboxCloseActioner,s=l.scrollbarRecompensor,f=o.e,u=o.elements.container,d=o.fs,p=o.fss,g=o.p,m=o.props,b=o.timeout;r.isLightboxFadingOut=!1,r.runActions=function(){r.isLightboxFadingOut=!0,u.current.classList.add(W),n.removeListeners(),m.exitFullscreenOnClose&&p.g()&&d.x(),b(function(){r.isLightboxFadingOut=!1,g.isSwiping=!1,u.current.classList.remove(W),document.documentElement.classList.remove("fslightbox-open"),s.removeRecompense(),a.set(!1),f("onClose")},Ee-30)}}(t),Se(t),function(o){var a=o.data,l=o.core.scrollbarRecompensor;l.addRecompense=function(){document.readyState==="complete"?n():window.addEventListener("load",function(){n(),l.addRecompense=n})};var n=function(){document.body.offsetHeight>window.innerHeight&&(document.body.style.marginRight=a.scrollbarWidth+"px")};l.removeRecompense=function(){document.body.style.removeProperty("margin-right")}}(t),function(o){var a=o.core.slideIndexChanger,l=o.sl,n=o.st;l>1?(o.pr=function(){a.jumpTo(n.p())},o.n=function(){a.jumpTo(n.n())}):(o.pr=function(){},o.n=function(){})}(t),function(o){var a=o.componentsServices,l=o.core.slideIndexChanger,n=o.isl,r=o.saw,s=o.smwm,f=o.st,u=o.stageIndexes,d=o.sws;l.changeTo=function(p){u.current=p,f.u(),a.setSlideNumber(p+1),Le(o)},l.jumpTo=function(p){var g=u.previous,m=u.current,b=u.next,v=n[m],E=n[p];l.changeTo(p);for(var w=0;w<s.length;w++)s[w].d();d.d(m),d.c(),requestAnimationFrame(function(){requestAnimationFrame(function(){var A=u.previous,S=u.current,O=u.next;function j(){f.i(m)?m===u.previous?s[m].ne():m===u.next&&s[m].p():(s[m].h(),s[m].n())}v&&r[m].current.classList.add(L),E&&r[S].current.classList.add(k),d.a(),A!==void 0&&A!==m&&s[A].ne(),s[S].n(),O!==void 0&&O!==m&&s[O].p(),d.b(g),d.b(b),n[m]?setTimeout(j,Ee-40):j()})})}}(t),function(o){var a=o.isl,l=o.stageIndexes,n=o.saw,r=o.smwm,s=o.st,f=o.sws;f.a=function(){for(var u in l)r[l[u]].s()},f.b=function(u){u===void 0||s.i(u)||(r[u].h(),r[u].n())},f.c=function(){for(var u in l)f.d(l[u])},f.d=function(u){if(a[u]){var d=n[u];J(d,M),J(d,k),J(d,L)}}}(t),function(o){var a=o.collections.sourceSizers,l=o.core.windowResizeActioner,n=o.data,r=o.elements.sources,s=o.smwm,f=o.stageIndexes;l.runActions=function(){innerWidth<992?n.maxSourceWidth=innerWidth:n.maxSourceWidth=.9*innerWidth,n.maxSourceHeight=.9*innerHeight;for(var u=0;u<r.length;u++)s[u].d(),a[u]&&r[u].current&&a[u].adjustSize();var d=f.previous,p=f.next;d!==void 0&&s[d].ne(),p!==void 0&&s[p].p()}}(t)}function tt(t,e,i,c){var o=t.data,a=t.elements.sources,l=i/c,n=0;this.adjustSize=function(){if((n=o.maxSourceWidth/l)<o.maxSourceHeight)return i<o.maxSourceWidth&&(n=c),r();n=c>o.maxSourceHeight?o.maxSourceHeight:c,r()};var r=function(){var s=a[e].current.style;s.width=n*l+"px",s.height=n+"px"}}function nt(t,e){var i=this,c=t.collections.sourceSizers,o=t.elements.sources,a=t.isl,l=t.resolve,n=t.saw,r=t.sawu;function s(f,u){c[e]=l(tt,[e,f,u]),c[e].adjustSize()}this.runActions=function(f,u){a[e]=!0,r[e](),o[e].current.classList.add(Q),n[e].current.classList.add(M),s(f,u),i.runActions=s}}function Ae(t,e){var i,c=this,o=t.elements.sources,a=t.props,l=(0,t.resolve)(nt,[e]);this.handleImageLoad=function(n){var r=n.target,s=r.naturalWidth,f=r.naturalHeight;l.runActions(s,f)},this.handleVideoLoad=function(n){var r=n.target,s=r.videoWidth,f=r.videoHeight;i=!0,l.runActions(s,f)},this.handleNotMetaDatedVideoLoad=function(){i||c.handleYoutubeLoad()},this.handleYoutubeLoad=function(){var n=1920,r=1080;a.maxYoutubeVideoDimensions&&(n=a.maxYoutubeVideoDimensions.width,r=a.maxYoutubeVideoDimensions.height),l.runActions(n,r)},this.handleCustomLoad=function(){var n=o[e].current;if(n){var r=n.offsetWidth,s=n.offsetHeight;r&&s?l.runActions(r,s):setTimeout(c.handleCustomLoad)}}}function ie(t){return ie=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ie(t)}function B(t){return B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(t)}function se(t,e,i){return se=Oe()?Reflect.construct.bind():function(c,o,a){var l=[null];l.push.apply(l,o);var n=new(Function.bind.apply(c,l));return a&&Z(n,a.prototype),n},se.apply(null,arguments)}function ae(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,c=new Array(e);i<e;i++)c[i]=t[i];return c}function rt(t,e){for(var i=0;i<e.length;i++){var c=e[i];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(t,(o=function(a,l){if(B(a)!=="object"||a===null)return a;var n=a[Symbol.toPrimitive];if(n!==void 0){var r=n.call(a,"string");if(B(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(a)}(c.key),B(o)==="symbol"?o:String(o)),c)}var o}function Z(t,e){return Z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,c){return i.__proto__=c,i},Z(t,e)}function R(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Oe(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function K(t){return K=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},K(t)}(typeof document>"u"?"undefined":ie(document))==="object"&&me();var ce=function(t){(function(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),r&&Z(n,r)})(l,t);var e,i,c,o,a=(c=l,o=Oe(),function(){var n,r=K(c);if(o){var s=K(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return function(f,u){if(u&&(B(u)==="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return R(f)}(this,n)});function l(n){var r;return function(s,f){if(!(s instanceof f))throw new TypeError("Cannot call a class as a function")}(this,l),(r=a.call(this,n)).state={isOpen:!1},r.data={maxSourceWidth:0,maxSourceHeight:0,scrollbarWidth:0},r.isl=[],r.p={isSwiping:!1,downScreenX:null,isSourceDownEventTarget:!1,swipedX:0},r.stageIndexes={current:0},r.componentsServices={showSlideSwipingHovererIfNotYet:null,hideSlideSwipingHovererIfShown:null,setSlideNumber:null,isSlideSwipingHovererShown:{},isLightboxOpenManager:{get:function(){return r.state.isOpen},set:function(s,f){r.setState({isOpen:s},f)}}},r.fss={},r.sawu=[],r.elements={container:h().createRef(),sources:null,sourcesComponents:[]},r.collections={sourceLoadHandlers:[],sourceSizers:[],xhrs:[]},r.smwm=[],r.core={classFacade:{},globalEventsController:{},lightboxCloser:{},lightboxCloseActioner:{},lightboxUpdater:{},scrollbarRecompensor:{},slideIndexChanger:{},windowResizeActioner:{}},r.fs={},r.st={},r.sws={},r.timeout=r.timeout.bind(R(r)),r.getQueuedAction=r.getQueuedAction.bind(R(r)),r.r=r.resolve.bind(R(r)),r.resolve=r.resolve.bind(R(r)),r.e=r.e.bind(R(r)),Se(R(r)),function(s){var f=s.componentsServices.isLightboxOpenManager,u=s.core,d=u.globalEventsController,p=u.scrollbarRecompensor,g=u.windowResizeActioner,m=s.e,b=s.elements,v=s.st,E=s.stageIndexes,w=s.sws;function A(){Le(s),document.documentElement.classList.add("fslightbox-open"),p.addRecompense(),d.attachListeners(),g.runActions(),m("onOpen")}s.o=function(){he(s,"sourceLoadHandlers",Ae),f.set(!0,function(){w.b(E.previous),w.b(E.current),w.b(E.next),v.u(),w.c(),w.a(),A(),m("onShow")})},s.i=function(){s.ii=!0,function(S){var O=S.props;S.s=O.sources,S.sl=S.s.length,S.dss=O.disableSlideSwiping,S.loc=O.loadOnlyCurrentSource}(s),s.smw=te(s),s.saw=te(s),b.sources=te(s),he(s,"sourceLoadHandlers",Ae),et(s),v.u(),f.set(!0,function(){A(),function(S){for(var O=S.props.sources,j=S.resolve,V=j(We),P=j($e),Ce=j(Qe,[V,P]),T=0;T<O.length;T++)if(typeof O[T]=="string"){var Ie=Ce.getTypeSetByClientForIndex(T);if(Ie)P.runActionsForSourceTypeAndIndex(Ie,T);else{var je=V.getSourceTypeFromLocalStorageByUrl(O[T]);je?P.runActionsForSourceTypeAndIndex(je,T):Ce.retrieveTypeWithXhrForIndex(T)}}else P.runActionsForSourceTypeAndIndex(ye,T)}(s),m("onInit")})}}(R(r)),r}return e=l,i=[{key:"timeout",value:function(n,r){var s=this;setTimeout(function(){s.elements.container.current&&n()},r)}},{key:"getQueuedAction",value:function(n,r){var s=this,f=[];return function(){f.push(!0),s.timeout(function(){f.pop(),f.length||n()},r)}}},{key:"resolve",value:function(n){var r,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return s.unshift(this),se(n,function(f){if(Array.isArray(f))return ae(f)}(r=s)||function(f){if(typeof Symbol<"u"&&f[Symbol.iterator]!=null||f["@@iterator"]!=null)return Array.from(f)}(r)||function(f,u){if(f){if(typeof f=="string")return ae(f,u);var d=Object.prototype.toString.call(f).slice(8,-1);return d==="Object"&&f.constructor&&(d=f.constructor.name),d==="Map"||d==="Set"?Array.from(f):d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)?ae(f,u):void 0}}(r)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}())}},{key:"e",value:function(n){var r=this.props[n];r&&r(this)}},{key:"componentDidUpdate",value:function(n,r,s){this.core.lightboxUpdater.handleUpdate(n)}},{key:"componentDidMount",value:function(){var n,r,s,f;r=(n=this).data,s=n.i,f=n.props.openOnMount,document.getElementsByClassName(_).length||me(),r.scrollbarWidth=function(){var u=document.createElement("div"),d=u.style,p=document.createElement("div");d.visibility="hidden",d.width="100px",d.msOverflowStyle="scrollbar",d.overflow="scroll",p.style.width="100%",document.body.appendChild(u);var g=u.offsetWidth;u.appendChild(p);var m=p.offsetWidth;return document.body.removeChild(u),g-m}(),f&&s()}},{key:"componentWillUnmount",value:function(){(function(n){for(var r=n.collections.xhrs,s=n.componentsServices.isLightboxOpenManager,f=n.core.globalEventsController,u=0;u<r.length;u++)r[u].abort();s.get()&&f.removeListeners()})(this)}},{key:"render",value:function(){return this.state.isOpen?h().createElement("div",{ref:this.elements.container,className:"".concat(y,"container ").concat(N," ").concat(M)},h().createElement(Me,{fsLightbox:this}),h().createElement(Ne,{fsLightbox:this}),this.props.sources.length>1?h().createElement(h().Fragment,null,h().createElement(fe,{onClick:this.pr,name:"previous",d:"M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"}),h().createElement(fe,{onClick:this.n,name:"next",d:"M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z"})):null,h().createElement(Pe,{o:this})):null}}],i&&rt(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),l}(C.Component);ce.propTypes={toggler:x().bool,sources:x().array,slide:x().number,source:x().string,sourceIndex:x().number,onOpen:x().func,onClose:x().func,onInit:x().func,onShow:x().func,disableLocalStorage:x().bool,types:x().array,type:x().string,customAttributes:x().array,maxYoutubeVideoDimensions:x().object,disableBackgroundClose:x().bool,disableSlideSwiping:x().bool,exitFullscreenOnClose:x().bool,loadOnlyCurrentSource:x().bool,openOnMount:x().bool,slideDistance:x().number},ce.defaultProps={slideDistance:.3};const ot=ce;ze.exports=D})();var pt=ze.exports;const mt=it(pt);function vt(){I.useState(1);const[F,D]=I.useState(!1),[ee,x]=I.useState(0),[C,h]=I.useState(!1);I.useState(10),I.useState(),I.useState(),I.useState();const[y,_]=I.useState([]);I.useState(!1);const{api_getById:Y}=ft(),{id:N}=at();console.log("hi",N),I.useEffect(()=>{U()},[]);const U=()=>{let z,k;k={categoryName:N},z=Y,h(!0),ct.post(z,k,dt()).then(function(L){var M,W,Q,X,q;((M=L==null?void 0:L.data)==null?void 0:M.status)===!0?(console.log("exam term data",(W=L==null?void 0:L.data)==null?void 0:W.data),_((X=(Q=L==null?void 0:L.data)==null?void 0:Q.data)==null?void 0:X.pics.map(function(G){return`${lt}/api/${G.pic_url}`}))):Fe.error(`${(q=L==null?void 0:L.data)==null?void 0:q.message}`),h(!1)}).catch(function(L){Fe.warning("Error occured while fetching data."),h(!1)})},$=z=>{x(z),D(!F)};return console.log(y),H.jsxs(H.Fragment,{children:[C&&H.jsx(ut,{}),H.jsxs("div",{className:"flex",children:[y.map((z,k)=>H.jsx(H.Fragment,{children:H.jsx("img",{src:z,alt:`Image ${k+1}`,onClick:()=>$(k),className:"w-[10vh] h-[10vh] m-5"},k)})),H.jsx(mt,{toggler:F,sources:y,sourceIndex:ee,type:"image"})]})]})}export{vt as default};
