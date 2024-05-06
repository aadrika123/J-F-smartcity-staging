import{f as We,r as p,R as vt}from"./index-faef4408.js";const gt=Math.min,at=Math.max,Qt=Math.round,Jt=Math.floor,it=t=>({x:t,y:t}),Fe={left:"right",right:"left",bottom:"top",top:"bottom"},He={start:"end",end:"start"};function ie(t,e,o){return at(t,gt(e,o))}function Bt(t,e){return typeof t=="function"?t(e):t}function ut(t){return t.split("-")[0]}function $t(t){return t.split("-")[1]}function _e(t){return t==="x"?"y":"x"}function le(t){return t==="y"?"height":"width"}function Gt(t){return["top","bottom"].includes(ut(t))?"y":"x"}function ce(t){return _e(Gt(t))}function Me(t,e,o){o===void 0&&(o=!1);const n=$t(t),r=ce(t),i=le(r);let s=r==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[i]>e.floating[i]&&(s=Ut(s)),[s,Ut(s)]}function je(t){const e=Ut(t);return[se(t),e,se(e)]}function se(t){return t.replace(/start|end/g,e=>He[e])}function Ie(t,e,o){const n=["left","right"],r=["right","left"],i=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return o?e?r:n:e?n:r;case"left":case"right":return e?i:s;default:return[]}}function ze(t,e,o,n){const r=$t(t);let i=Ie(ut(t),o==="start",n);return r&&(i=i.map(s=>s+"-"+r),e&&(i=i.concat(i.map(se)))),i}function Ut(t){return t.replace(/left|right|bottom|top/g,e=>Fe[e])}function qe(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ae(t){return typeof t!="number"?qe(t):{top:t,right:t,bottom:t,left:t}}function Zt(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function pe(t,e,o){let{reference:n,floating:r}=t;const i=Gt(e),s=ce(e),l=le(s),c=ut(e),u=i==="y",y=n.x+n.width/2-r.width/2,h=n.y+n.height/2-r.height/2,g=n[l]/2-r[l]/2;let d;switch(c){case"top":d={x:y,y:n.y-r.height};break;case"bottom":d={x:y,y:n.y+n.height};break;case"right":d={x:n.x+n.width,y:h};break;case"left":d={x:n.x-r.width,y:h};break;default:d={x:n.x,y:n.y}}switch($t(e)){case"start":d[s]-=g*(o&&u?-1:1);break;case"end":d[s]+=g*(o&&u?-1:1);break}return d}const Ve=async(t,e,o)=>{const{placement:n="bottom",strategy:r="absolute",middleware:i=[],platform:s}=o,l=i.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(e));let u=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:y,y:h}=pe(u,n,c),g=n,d={},m=0;for(let v=0;v<l.length;v++){const{name:S,fn:w}=l[v],{x:E,y:_,data:T,reset:R}=await w({x:y,y:h,initialPlacement:n,placement:g,strategy:r,middlewareData:d,rects:u,platform:s,elements:{reference:t,floating:e}});if(y=E??y,h=_??h,d={...d,[S]:{...d[S],...T}},R&&m<=50){m++,typeof R=="object"&&(R.placement&&(g=R.placement),R.rects&&(u=R.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:r}):R.rects),{x:y,y:h}=pe(u,g,c)),v=-1;continue}}return{x:y,y:h,placement:g,strategy:r,middlewareData:d}};async function Re(t,e){var o;e===void 0&&(e={});const{x:n,y:r,platform:i,rects:s,elements:l,strategy:c}=t,{boundary:u="clippingAncestors",rootBoundary:y="viewport",elementContext:h="floating",altBoundary:g=!1,padding:d=0}=Bt(e,t),m=Ae(d),S=l[g?h==="floating"?"reference":"floating":h],w=Zt(await i.getClippingRect({element:(o=await(i.isElement==null?void 0:i.isElement(S)))==null||o?S:S.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(l.floating)),boundary:u,rootBoundary:y,strategy:c})),E=h==="floating"?{...s.floating,x:n,y:r}:s.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(l.floating)),T=await(i.isElement==null?void 0:i.isElement(_))?await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1}:{x:1,y:1},R=Zt(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:E,offsetParent:_,strategy:c}):E);return{top:(w.top-R.top+m.top)/T.y,bottom:(R.bottom-w.bottom+m.bottom)/T.y,left:(w.left-R.left+m.left)/T.x,right:(R.right-w.right+m.right)/T.x}}const Ke=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:n,placement:r,rects:i,platform:s,elements:l,middlewareData:c}=e,{element:u,padding:y=0}=Bt(t,e)||{};if(u==null)return{};const h=Ae(y),g={x:o,y:n},d=ce(r),m=le(d),v=await s.getDimensions(u),S=d==="y",w=S?"top":"left",E=S?"bottom":"right",_=S?"clientHeight":"clientWidth",T=i.reference[m]+i.reference[d]-g[d]-i.floating[m],R=g[d]-i.reference[d],k=await(s.getOffsetParent==null?void 0:s.getOffsetParent(u));let N=k?k[_]:0;(!N||!await(s.isElement==null?void 0:s.isElement(k)))&&(N=l.floating[_]||i.floating[m]);const z=T/2-R/2,Y=N/2-v[m]/2-1,D=gt(h[w],Y),M=gt(h[E],Y),C=D,W=N-v[m]-M,A=N/2-v[m]/2+z,L=ie(C,A,W),B=!c.arrow&&$t(r)!=null&&A!=L&&i.reference[m]/2-(A<C?D:M)-v[m]/2<0,F=B?A<C?A-C:A-W:0;return{[d]:g[d]+F,data:{[d]:L,centerOffset:A-L-F,...B&&{alignmentOffset:F}},reset:B}}}),Ye=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:r,middlewareData:i,rects:s,initialPlacement:l,platform:c,elements:u}=e,{mainAxis:y=!0,crossAxis:h=!0,fallbackPlacements:g,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:v=!0,...S}=Bt(t,e);if((o=i.arrow)!=null&&o.alignmentOffset)return{};const w=ut(r),E=ut(l)===l,_=await(c.isRTL==null?void 0:c.isRTL(u.floating)),T=g||(E||!v?[Ut(l)]:je(l));!g&&m!=="none"&&T.push(...ze(l,v,m,_));const R=[l,...T],k=await Re(e,S),N=[];let z=((n=i.flip)==null?void 0:n.overflows)||[];if(y&&N.push(k[w]),h){const C=Me(r,s,_);N.push(k[C[0]],k[C[1]])}if(z=[...z,{placement:r,overflows:N}],!N.every(C=>C<=0)){var Y,D;const C=(((Y=i.flip)==null?void 0:Y.index)||0)+1,W=R[C];if(W)return{data:{index:C,overflows:z},reset:{placement:W}};let A=(D=z.filter(L=>L.overflows[0]<=0).sort((L,B)=>L.overflows[1]-B.overflows[1])[0])==null?void 0:D.placement;if(!A)switch(d){case"bestFit":{var M;const L=(M=z.map(B=>[B.placement,B.overflows.filter(F=>F>0).reduce((F,dt)=>F+dt,0)]).sort((B,F)=>B[1]-F[1])[0])==null?void 0:M[0];L&&(A=L);break}case"initialPlacement":A=l;break}if(r!==A)return{reset:{placement:A}}}return{}}}};async function Xe(t,e){const{placement:o,platform:n,elements:r}=t,i=await(n.isRTL==null?void 0:n.isRTL(r.floating)),s=ut(o),l=$t(o),c=Gt(o)==="y",u=["left","top"].includes(s)?-1:1,y=i&&c?-1:1,h=Bt(e,t);let{mainAxis:g,crossAxis:d,alignmentAxis:m}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...h};return l&&typeof m=="number"&&(d=l==="end"?m*-1:m),c?{x:d*y,y:g*u}:{x:g*u,y:d*y}}const Je=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:o,y:n}=e,r=await Xe(e,t);return{x:o+r.x,y:n+r.y,data:r}}}},Qe=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:r}=e,{mainAxis:i=!0,crossAxis:s=!1,limiter:l={fn:S=>{let{x:w,y:E}=S;return{x:w,y:E}}},...c}=Bt(t,e),u={x:o,y:n},y=await Re(e,c),h=Gt(ut(r)),g=_e(h);let d=u[g],m=u[h];if(i){const S=g==="y"?"top":"left",w=g==="y"?"bottom":"right",E=d+y[S],_=d-y[w];d=ie(E,d,_)}if(s){const S=h==="y"?"top":"left",w=h==="y"?"bottom":"right",E=m+y[S],_=m-y[w];m=ie(E,m,_)}const v=l.fn({...e,[g]:d,[h]:m});return{...v,data:{x:v.x-o,y:v.y-n}}}}};function st(t){return Oe(t)?(t.nodeName||"").toLowerCase():"#document"}function I(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function tt(t){var e;return(e=(Oe(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Oe(t){return t instanceof Node||t instanceof I(t).Node}function G(t){return t instanceof Element||t instanceof I(t).Element}function Q(t){return t instanceof HTMLElement||t instanceof I(t).HTMLElement}function me(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof I(t).ShadowRoot}function Wt(t){const{overflow:e,overflowX:o,overflowY:n,display:r}=V(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!["inline","contents"].includes(r)}function Ue(t){return["table","td","th"].includes(st(t))}function ae(t){const e=ue(),o=V(t);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(o.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(o.contain||"").includes(n))}function Ze(t){let e=bt(t);for(;Q(e)&&!te(e);){if(ae(e))return e;e=bt(e)}return null}function ue(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function te(t){return["html","body","#document"].includes(st(t))}function V(t){return I(t).getComputedStyle(t)}function ee(t){return G(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function bt(t){if(st(t)==="html")return t;const e=t.assignedSlot||t.parentNode||me(t)&&t.host||tt(t);return me(e)?e.host:e}function Te(t){const e=bt(t);return te(e)?t.ownerDocument?t.ownerDocument.body:t.body:Q(e)&&Wt(e)?e:Te(e)}function Pt(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);const r=Te(t),i=r===((n=t.ownerDocument)==null?void 0:n.body),s=I(r);return i?e.concat(s,s.visualViewport||[],Wt(r)?r:[],s.frameElement&&o?Pt(s.frameElement):[]):e.concat(r,Pt(r,[],o))}function Ce(t){const e=V(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const r=Q(t),i=r?t.offsetWidth:o,s=r?t.offsetHeight:n,l=Qt(o)!==i||Qt(n)!==s;return l&&(o=i,n=s),{width:o,height:n,$:l}}function fe(t){return G(t)?t:t.contextElement}function wt(t){const e=fe(t);if(!Q(e))return it(1);const o=e.getBoundingClientRect(),{width:n,height:r,$:i}=Ce(e);let s=(i?Qt(o.width):o.width)/n,l=(i?Qt(o.height):o.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const Ge=it(0);function Le(t){const e=I(t);return!ue()||!e.visualViewport?Ge:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function to(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==I(t)?!1:e}function ft(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const r=t.getBoundingClientRect(),i=fe(t);let s=it(1);e&&(n?G(n)&&(s=wt(n)):s=wt(t));const l=to(i,o,n)?Le(i):it(0);let c=(r.left+l.x)/s.x,u=(r.top+l.y)/s.y,y=r.width/s.x,h=r.height/s.y;if(i){const g=I(i),d=n&&G(n)?I(n):n;let m=g.frameElement;for(;m&&n&&d!==g;){const v=wt(m),S=m.getBoundingClientRect(),w=V(m),E=S.left+(m.clientLeft+parseFloat(w.paddingLeft))*v.x,_=S.top+(m.clientTop+parseFloat(w.paddingTop))*v.y;c*=v.x,u*=v.y,y*=v.x,h*=v.y,c+=E,u+=_,m=I(m).frameElement}}return Zt({width:y,height:h,x:c,y:u})}function eo(t){let{rect:e,offsetParent:o,strategy:n}=t;const r=Q(o),i=tt(o);if(o===i)return e;let s={scrollLeft:0,scrollTop:0},l=it(1);const c=it(0);if((r||!r&&n!=="fixed")&&((st(o)!=="body"||Wt(i))&&(s=ee(o)),Q(o))){const u=ft(o);l=wt(o),c.x=u.x+o.clientLeft,c.y=u.y+o.clientTop}return{width:e.width*l.x,height:e.height*l.y,x:e.x*l.x-s.scrollLeft*l.x+c.x,y:e.y*l.y-s.scrollTop*l.y+c.y}}function oo(t){return Array.from(t.getClientRects())}function ke(t){return ft(tt(t)).left+ee(t).scrollLeft}function no(t){const e=tt(t),o=ee(t),n=t.ownerDocument.body,r=at(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=at(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let s=-o.scrollLeft+ke(t);const l=-o.scrollTop;return V(n).direction==="rtl"&&(s+=at(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:s,y:l}}function ro(t,e){const o=I(t),n=tt(t),r=o.visualViewport;let i=n.clientWidth,s=n.clientHeight,l=0,c=0;if(r){i=r.width,s=r.height;const u=ue();(!u||u&&e==="fixed")&&(l=r.offsetLeft,c=r.offsetTop)}return{width:i,height:s,x:l,y:c}}function io(t,e){const o=ft(t,!0,e==="fixed"),n=o.top+t.clientTop,r=o.left+t.clientLeft,i=Q(t)?wt(t):it(1),s=t.clientWidth*i.x,l=t.clientHeight*i.y,c=r*i.x,u=n*i.y;return{width:s,height:l,x:c,y:u}}function he(t,e,o){let n;if(e==="viewport")n=ro(t,o);else if(e==="document")n=no(tt(t));else if(G(e))n=io(e,o);else{const r=Le(t);n={...e,x:e.x-r.x,y:e.y-r.y}}return Zt(n)}function Ne(t,e){const o=bt(t);return o===e||!G(o)||te(o)?!1:V(o).position==="fixed"||Ne(o,e)}function so(t,e){const o=e.get(t);if(o)return o;let n=Pt(t,[],!1).filter(l=>G(l)&&st(l)!=="body"),r=null;const i=V(t).position==="fixed";let s=i?bt(t):t;for(;G(s)&&!te(s);){const l=V(s),c=ae(s);!c&&l.position==="fixed"&&(r=null),(i?!c&&!r:!c&&l.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||Wt(s)&&!c&&Ne(t,s))?n=n.filter(y=>y!==s):r=l,s=bt(s)}return e.set(t,n),n}function lo(t){let{element:e,boundary:o,rootBoundary:n,strategy:r}=t;const s=[...o==="clippingAncestors"?so(e,this._c):[].concat(o),n],l=s[0],c=s.reduce((u,y)=>{const h=he(e,y,r);return u.top=at(h.top,u.top),u.right=gt(h.right,u.right),u.bottom=gt(h.bottom,u.bottom),u.left=at(h.left,u.left),u},he(e,l,r));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function co(t){return Ce(t)}function ao(t,e,o){const n=Q(e),r=tt(e),i=o==="fixed",s=ft(t,!0,i,e);let l={scrollLeft:0,scrollTop:0};const c=it(0);if(n||!n&&!i)if((st(e)!=="body"||Wt(r))&&(l=ee(e)),n){const u=ft(e,!0,i,e);c.x=u.x+e.clientLeft,c.y=u.y+e.clientTop}else r&&(c.x=ke(r));return{x:s.left+l.scrollLeft-c.x,y:s.top+l.scrollTop-c.y,width:s.width,height:s.height}}function ye(t,e){return!Q(t)||V(t).position==="fixed"?null:e?e(t):t.offsetParent}function De(t,e){const o=I(t);if(!Q(t))return o;let n=ye(t,e);for(;n&&Ue(n)&&V(n).position==="static";)n=ye(n,e);return n&&(st(n)==="html"||st(n)==="body"&&V(n).position==="static"&&!ae(n))?o:n||Ze(t)||o}const uo=async function(t){let{reference:e,floating:o,strategy:n}=t;const r=this.getOffsetParent||De,i=this.getDimensions;return{reference:ao(e,await r(o),n),floating:{x:0,y:0,...await i(o)}}};function fo(t){return V(t).direction==="rtl"}const po={convertOffsetParentRelativeRectToViewportRelativeRect:eo,getDocumentElement:tt,getClippingRect:lo,getOffsetParent:De,getElementRects:uo,getClientRects:oo,getDimensions:co,getScale:wt,isElement:G,isRTL:fo};function mo(t,e){let o=null,n;const r=tt(t);function i(){clearTimeout(n),o&&o.disconnect(),o=null}function s(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),i();const{left:u,top:y,width:h,height:g}=t.getBoundingClientRect();if(l||e(),!h||!g)return;const d=Jt(y),m=Jt(r.clientWidth-(u+h)),v=Jt(r.clientHeight-(y+g)),S=Jt(u),E={rootMargin:-d+"px "+-m+"px "+-v+"px "+-S+"px",threshold:at(0,gt(1,c))||1};let _=!0;function T(R){const k=R[0].intersectionRatio;if(k!==c){if(!_)return s();k?s(!1,k):n=setTimeout(()=>{s(!1,1e-7)},100)}_=!1}try{o=new IntersectionObserver(T,{...E,root:r.ownerDocument})}catch{o=new IntersectionObserver(T,E)}o.observe(t)}return s(!0),i}function ho(t,e,o,n){n===void 0&&(n={});const{ancestorScroll:r=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=n,u=fe(t),y=r||i?[...u?Pt(u):[],...Pt(e)]:[];y.forEach(w=>{r&&w.addEventListener("scroll",o,{passive:!0}),i&&w.addEventListener("resize",o)});const h=u&&l?mo(u,o):null;let g=-1,d=null;s&&(d=new ResizeObserver(w=>{let[E]=w;E&&E.target===u&&d&&(d.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{d&&d.observe(e)})),o()}),u&&!c&&d.observe(u),d.observe(e));let m,v=c?ft(t):null;c&&S();function S(){const w=ft(t);v&&(w.x!==v.x||w.y!==v.y||w.width!==v.width||w.height!==v.height)&&o(),v=w,m=requestAnimationFrame(S)}return o(),()=>{y.forEach(w=>{r&&w.removeEventListener("scroll",o),i&&w.removeEventListener("resize",o)}),h&&h(),d&&d.disconnect(),d=null,c&&cancelAnimationFrame(m)}}const ve=(t,e,o)=>{const n=new Map,r={platform:po,...o},i={...r.platform,_c:n};return Ve(t,e,{...r,platform:i})};var Pe={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function o(){for(var n=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var s=typeof i;if(s==="string"||s==="number")n.push(i);else if(Array.isArray(i)){if(i.length){var l=o.apply(null,i);l&&n.push(l)}}else if(s==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){n.push(i.toString());continue}for(var c in i)e.call(i,c)&&i[c]&&n.push(c)}}}return n.join(" ")}t.exports?(o.default=o,t.exports=o):window.classNames=o})()})(Pe);var yo=Pe.exports;const we=We(yo);/*
* React Tooltip
* {@link https://github.com/ReactTooltip/react-tooltip}
* @copyright ReactTooltip Team
* @license MIT
*/const vo="react-tooltip-core-styles",wo="react-tooltip-base-styles",ge={core:!1,base:!1};function be({css:t,id:e=wo,type:o="base",ref:n}){var r,i;if(!t||typeof document>"u"||ge[o]||o==="core"&&typeof process<"u"&&(!((r=process==null?void 0:process.env)===null||r===void 0)&&r.REACT_TOOLTIP_DISABLE_CORE_STYLES)||o!=="base"&&typeof process<"u"&&(!((i=process==null?void 0:process.env)===null||i===void 0)&&i.REACT_TOOLTIP_DISABLE_BASE_STYLES))return;o==="core"&&(e=vo),n||(n={});const{insertAt:s}=n;if(document.getElementById(e))return;const l=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.id=e,c.type="text/css",s==="top"&&l.firstChild?l.insertBefore(c,l.firstChild):l.appendChild(c),c.styleSheet?c.styleSheet.cssText=t:c.appendChild(document.createTextNode(t)),ge[o]=!0}const xe=(t,e,o)=>{let n=null;return function(...r){const i=()=>{n=null,o||t.apply(this,r)};o&&!n&&(t.apply(this,r),n=setTimeout(i,e)),o||(n&&clearTimeout(n),n=setTimeout(i,e))}},go="DEFAULT_TOOLTIP_ID",bo={anchorRefs:new Set,activeAnchor:{current:null},attach:()=>{},detach:()=>{},setActiveAnchor:()=>{}},xo=p.createContext({getTooltipData:()=>bo});function Be(t=go){return p.useContext(xo).getTooltipData(t)}const Eo=typeof window<"u"?p.useLayoutEffect:p.useEffect,So=t=>{if(!(t instanceof HTMLElement||t instanceof SVGElement))return!1;const e=getComputedStyle(t);return["overflow","overflow-x","overflow-y"].some(o=>{const n=e.getPropertyValue(o);return n==="auto"||n==="scroll"})},Ee=t=>{if(!t)return null;let e=t.parentElement;for(;e;){if(So(e))return e;e=e.parentElement}return document.scrollingElement||document.documentElement},Se=async({elementReference:t=null,tooltipReference:e=null,tooltipArrowReference:o=null,place:n="top",offset:r=10,strategy:i="absolute",middlewares:s=[Je(Number(r)),Ye(),Qe({padding:5})],border:l})=>{if(!t)return{tooltipStyles:{},tooltipArrowStyles:{},place:n};if(e===null)return{tooltipStyles:{},tooltipArrowStyles:{},place:n};const c=s;return o?(c.push(Ke({element:o,padding:5})),ve(t,e,{placement:n,strategy:i,middleware:c}).then(({x:u,y,placement:h,middlewareData:g})=>{var d,m;const v={left:`${u}px`,top:`${y}px`,border:l},{x:S,y:w}=(d=g.arrow)!==null&&d!==void 0?d:{x:0,y:0},E=(m={top:"bottom",right:"left",bottom:"top",left:"right"}[h.split("-")[0]])!==null&&m!==void 0?m:"bottom",_=l&&{borderBottom:l,borderRight:l};let T=0;if(l){const R=`${l}`.match(/(\d+)px/);T=R!=null&&R[1]?Number(R[1]):1}return{tooltipStyles:v,tooltipArrowStyles:{left:S!=null?`${S}px`:"",top:w!=null?`${w}px`:"",right:"",bottom:"",..._,[E]:`-${4+T}px`},place:h}})):ve(t,e,{placement:"bottom",strategy:i,middleware:c}).then(({x:u,y,placement:h})=>({tooltipStyles:{left:`${u}px`,top:`${y}px`},tooltipArrowStyles:{},place:h}))};var _o="core-styles-module_tooltip__3vRRp",Ao="core-styles-module_fixed__pcSol",Ro="core-styles-module_arrow__cvMwQ",Oo="core-styles-module_noArrow__xock6",To="core-styles-module_clickable__ZuTTB",Co="core-styles-module_show__Nt9eE",re={tooltip:"styles-module_tooltip__mnnfp",arrow:"styles-module_arrow__K0L3T",dark:"styles-module_dark__xNqje",light:"styles-module_light__Z6W-X",success:"styles-module_success__A2AKt",warning:"styles-module_warning__SCK0X",error:"styles-module_error__JvumD",info:"styles-module_info__BWdHW"};const Lo=({id:t,className:e,classNameArrow:o,variant:n="dark",anchorId:r,anchorSelect:i,place:s="top",offset:l=10,events:c=["hover"],openOnClick:u=!1,positionStrategy:y="absolute",middlewares:h,wrapper:g,delayShow:d=0,delayHide:m=0,float:v=!1,hidden:S=!1,noArrow:w=!1,clickable:E=!1,closeOnEsc:_=!1,closeOnScroll:T=!1,closeOnResize:R=!1,style:k,position:N,afterShow:z,afterHide:Y,content:D,contentWrapperRef:M,isOpen:C,setIsOpen:W,activeAnchor:A,setActiveAnchor:L,border:B,opacity:F,arrowColor:dt})=>{const j=p.useRef(null),et=p.useRef(null),H=p.useRef(null),q=p.useRef(null),[Ft,Ht]=p.useState(s),[xt,Mt]=p.useState({}),[jt,It]=p.useState({}),[K,zt]=p.useState(!1),[Et,pt]=p.useState(!1),St=p.useRef(!1),_t=p.useRef(null),{anchorRefs:At,setActiveAnchor:qt}=Be(t),mt=p.useRef(!1),[ot,Rt]=p.useState([]),lt=p.useRef(!1),ht=u||c.includes("click");Eo(()=>(lt.current=!0,()=>{lt.current=!1}),[]),p.useEffect(()=>{if(!K){const f=setTimeout(()=>{pt(!1)},150);return()=>{clearTimeout(f)}}return()=>null},[K]);const X=f=>{lt.current&&(f&&pt(!0),setTimeout(()=>{lt.current&&(W==null||W(f),C===void 0&&zt(f))},10))};p.useEffect(()=>{if(C===void 0)return()=>null;C&&pt(!0);const f=setTimeout(()=>{zt(C)},10);return()=>{clearTimeout(f)}},[C]),p.useEffect(()=>{K!==St.current&&(St.current=K,K?z==null||z():Y==null||Y())},[K]);const yt=(f=m)=>{q.current&&clearTimeout(q.current),q.current=setTimeout(()=>{mt.current||X(!1)},f)},nt=f=>{var b;if(!f)return;const a=(b=f.currentTarget)!==null&&b!==void 0?b:f.target;if(!(a!=null&&a.isConnected))return L(null),void qt({current:null});d?(H.current&&clearTimeout(H.current),H.current=setTimeout(()=>{X(!0)},d)):X(!0),L(a),qt({current:a}),q.current&&clearTimeout(q.current)},Vt=()=>{E?yt(m||100):m?yt():X(!1),H.current&&clearTimeout(H.current)},Ot=({x:f,y:b})=>{Se({place:s,offset:l,elementReference:{getBoundingClientRect:()=>({x:f,y:b,width:0,height:0,top:b,left:f,right:f,bottom:b})},tooltipReference:j.current,tooltipArrowReference:et.current,strategy:y,middlewares:h,border:B}).then(a=>{Object.keys(a.tooltipStyles).length&&Mt(a.tooltipStyles),Object.keys(a.tooltipArrowStyles).length&&It(a.tooltipArrowStyles),Ht(a.place)})},Kt=f=>{if(!f)return;const b=f,a={x:b.clientX,y:b.clientY};Ot(a),_t.current=a},Yt=f=>{nt(f),m&&yt()},Tt=f=>{var b;[document.querySelector(`[id='${r}']`),...ot].some(a=>a==null?void 0:a.contains(f.target))||!((b=j.current)===null||b===void 0)&&b.contains(f.target)||(X(!1),H.current&&clearTimeout(H.current))},Ct=xe(nt,50,!0),ct=xe(Vt,50,!0),rt=p.useCallback(()=>{N?Ot(N):v?_t.current&&Ot(_t.current):Se({place:s,offset:l,elementReference:A,tooltipReference:j.current,tooltipArrowReference:et.current,strategy:y,middlewares:h,border:B}).then(f=>{lt.current&&(Object.keys(f.tooltipStyles).length&&Mt(f.tooltipStyles),Object.keys(f.tooltipArrowStyles).length&&It(f.tooltipArrowStyles),Ht(f.place))})},[K,A,D,k,s,l,y,N,v]);p.useEffect(()=>{var f,b;const a=new Set(At);ot.forEach(Z=>{a.add({current:Z})});const x=document.querySelector(`[id='${r}']`);x&&a.add({current:x});const O=()=>{X(!1)},$=Ee(A),P=Ee(j.current);T&&(window.addEventListener("scroll",O),$==null||$.addEventListener("scroll",O),P==null||P.addEventListener("scroll",O));let J=null;R?window.addEventListener("resize",O):A&&j.current&&(J=ho(A,j.current,rt,{ancestorResize:!0,elementResize:!0,layoutShift:!0}));const kt=Z=>{Z.key==="Escape"&&X(!1)};_&&window.addEventListener("keydown",kt);const U=[];ht?(window.addEventListener("click",Tt),U.push({event:"click",listener:Yt})):(U.push({event:"mouseenter",listener:Ct},{event:"mouseleave",listener:ct},{event:"focus",listener:Ct},{event:"blur",listener:ct}),v&&U.push({event:"mousemove",listener:Kt}));const Xt=()=>{mt.current=!0},de=()=>{mt.current=!1,Vt()};return E&&!ht&&((f=j.current)===null||f===void 0||f.addEventListener("mouseenter",Xt),(b=j.current)===null||b===void 0||b.addEventListener("mouseleave",de)),U.forEach(({event:Z,listener:Nt})=>{a.forEach(oe=>{var Dt;(Dt=oe.current)===null||Dt===void 0||Dt.addEventListener(Z,Nt)})}),()=>{var Z,Nt;T&&(window.removeEventListener("scroll",O),$==null||$.removeEventListener("scroll",O),P==null||P.removeEventListener("scroll",O)),R?window.removeEventListener("resize",O):J==null||J(),ht&&window.removeEventListener("click",Tt),_&&window.removeEventListener("keydown",kt),E&&!ht&&((Z=j.current)===null||Z===void 0||Z.removeEventListener("mouseenter",Xt),(Nt=j.current)===null||Nt===void 0||Nt.removeEventListener("mouseleave",de)),U.forEach(({event:oe,listener:Dt})=>{a.forEach($e=>{var ne;(ne=$e.current)===null||ne===void 0||ne.removeEventListener(oe,Dt)})})}},[A,rt,Et,At,ot,_,c]),p.useEffect(()=>{let f=i??"";!f&&t&&(f=`[data-tooltip-id='${t}']`);const b=new MutationObserver(a=>{const x=[];a.forEach(O=>{if(O.type==="attributes"&&O.attributeName==="data-tooltip-id"&&O.target.getAttribute("data-tooltip-id")===t&&x.push(O.target),O.type==="childList"&&(A&&[...O.removedNodes].some($=>{var P;return!!(!((P=$==null?void 0:$.contains)===null||P===void 0)&&P.call($,A))&&(pt(!1),X(!1),L(null),H.current&&clearTimeout(H.current),q.current&&clearTimeout(q.current),!0)}),f))try{const $=[...O.addedNodes].filter(P=>P.nodeType===1);x.push(...$.filter(P=>P.matches(f))),x.push(...$.flatMap(P=>[...P.querySelectorAll(f)]))}catch{}}),x.length&&Rt(O=>[...O,...x])});return b.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["data-tooltip-id"]}),()=>{b.disconnect()}},[t,i,A]),p.useEffect(()=>{rt()},[rt]),p.useEffect(()=>{if(!(M!=null&&M.current))return()=>null;const f=new ResizeObserver(()=>{rt()});return f.observe(M.current),()=>{f.disconnect()}},[D,M==null?void 0:M.current]),p.useEffect(()=>{var f;const b=document.querySelector(`[id='${r}']`),a=[...ot,b];A&&a.includes(A)||L((f=ot[0])!==null&&f!==void 0?f:b)},[r,ot,A]),p.useEffect(()=>()=>{H.current&&clearTimeout(H.current),q.current&&clearTimeout(q.current)},[]),p.useEffect(()=>{let f=i;if(!f&&t&&(f=`[data-tooltip-id='${t}']`),f)try{const b=Array.from(document.querySelectorAll(f));Rt(b)}catch{Rt([])}},[t,i]);const Lt=!S&&D&&K&&Object.keys(xt).length>0;return Et?vt.createElement(g,{id:t,role:"tooltip",className:we("react-tooltip",_o,re.tooltip,re[n],e,`react-tooltip__place-${Ft}`,{"react-tooltip__show":Lt,[Co]:Lt,[Ao]:y==="fixed",[To]:E}),style:{...k,...xt,opacity:F!==void 0&&Lt?F:void 0},ref:j},D,vt.createElement(g,{className:we("react-tooltip-arrow",Ro,re.arrow,o,{[Oo]:w}),style:{...jt,background:dt?`linear-gradient(to right bottom, transparent 50%, ${dt} 50%)`:void 0},ref:et})):null},ko=({content:t})=>vt.createElement("span",{dangerouslySetInnerHTML:{__html:t}}),Do=({id:t,anchorId:e,anchorSelect:o,content:n,html:r,render:i,className:s,classNameArrow:l,variant:c="dark",place:u="top",offset:y=10,wrapper:h="div",children:g=null,events:d=["hover"],openOnClick:m=!1,positionStrategy:v="absolute",middlewares:S,delayShow:w=0,delayHide:E=0,float:_=!1,hidden:T=!1,noArrow:R=!1,clickable:k=!1,closeOnEsc:N=!1,closeOnScroll:z=!1,closeOnResize:Y=!1,style:D,position:M,isOpen:C,disableStyleInjection:W=!1,border:A,opacity:L,arrowColor:B,setIsOpen:F,afterShow:dt,afterHide:j})=>{const[et,H]=p.useState(n),[q,Ft]=p.useState(r),[Ht,xt]=p.useState(u),[Mt,jt]=p.useState(c),[It,K]=p.useState(y),[zt,Et]=p.useState(w),[pt,St]=p.useState(E),[_t,At]=p.useState(_),[qt,mt]=p.useState(T),[ot,Rt]=p.useState(h),[lt,ht]=p.useState(d),[X,yt]=p.useState(v),[nt,Vt]=p.useState(null),Ot=p.useRef(W),{anchorRefs:Kt,activeAnchor:Yt}=Be(t),Tt=f=>f==null?void 0:f.getAttributeNames().reduce((b,a)=>{var x;return a.startsWith("data-tooltip-")&&(b[a.replace(/^data-tooltip-/,"")]=(x=f==null?void 0:f.getAttribute(a))!==null&&x!==void 0?x:null),b},{}),Ct=f=>{const b={place:a=>{var x;xt((x=a)!==null&&x!==void 0?x:u)},content:a=>{H(a??n)},html:a=>{Ft(a??r)},variant:a=>{var x;jt((x=a)!==null&&x!==void 0?x:c)},offset:a=>{K(a===null?y:Number(a))},wrapper:a=>{var x;Rt((x=a)!==null&&x!==void 0?x:h)},events:a=>{const x=a==null?void 0:a.split(" ");ht(x??d)},"position-strategy":a=>{var x;yt((x=a)!==null&&x!==void 0?x:v)},"delay-show":a=>{Et(a===null?w:Number(a))},"delay-hide":a=>{St(a===null?E:Number(a))},float:a=>{At(a===null?_:a==="true")},hidden:a=>{mt(a===null?T:a==="true")}};Object.values(b).forEach(a=>a(null)),Object.entries(f).forEach(([a,x])=>{var O;(O=b[a])===null||O===void 0||O.call(b,x)})};p.useEffect(()=>{H(n)},[n]),p.useEffect(()=>{Ft(r)},[r]),p.useEffect(()=>{xt(u)},[u]),p.useEffect(()=>{jt(c)},[c]),p.useEffect(()=>{K(y)},[y]),p.useEffect(()=>{Et(w)},[w]),p.useEffect(()=>{St(E)},[E]),p.useEffect(()=>{At(_)},[_]),p.useEffect(()=>{mt(T)},[T]),p.useEffect(()=>{yt(v)},[v]),p.useEffect(()=>{Ot.current},[W]),p.useEffect(()=>{typeof window<"u"&&window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles",{detail:{disableCore:W==="core",disableBase:W}}))},[]),p.useEffect(()=>{var f;const b=new Set(Kt);let a=o;if(!a&&t&&(a=`[data-tooltip-id='${t}']`),a)try{document.querySelectorAll(a).forEach(J=>{b.add({current:J})})}catch{}const x=document.querySelector(`[id='${e}']`);if(x&&b.add({current:x}),!b.size)return()=>null;const O=(f=nt??x)!==null&&f!==void 0?f:Yt.current,$=new MutationObserver(J=>{J.forEach(kt=>{var U;if(!O||kt.type!=="attributes"||!(!((U=kt.attributeName)===null||U===void 0)&&U.startsWith("data-tooltip-")))return;const Xt=Tt(O);Ct(Xt)})}),P={attributes:!0,childList:!1,subtree:!1};if(O){const J=Tt(O);Ct(J),$.observe(O,P)}return()=>{$.disconnect()}},[Kt,Yt,nt,e,o]),p.useEffect(()=>{D!=null&&D.border,A&&CSS.supports("border",`${A}`),D!=null&&D.opacity,L&&CSS.supports("opacity",`${L}`)},[]);let ct=g;const rt=p.useRef(null);if(i){const f=i({content:et??null,activeAnchor:nt});ct=f?vt.createElement("div",{ref:rt,className:"react-tooltip-content-wrapper"},f):null}else et&&(ct=et);q&&(ct=vt.createElement(ko,{content:q}));const Lt={id:t,anchorId:e,anchorSelect:o,className:s,classNameArrow:l,content:ct,contentWrapperRef:rt,place:Ht,variant:Mt,offset:It,wrapper:ot,events:lt,openOnClick:m,positionStrategy:X,middlewares:S,delayShow:zt,delayHide:pt,float:_t,hidden:qt,noArrow:R,clickable:k,closeOnEsc:N,closeOnScroll:z,closeOnResize:Y,style:D,position:M,isOpen:C,border:A,opacity:L,arrowColor:B,setIsOpen:F,afterShow:dt,afterHide:j,activeAnchor:nt,setActiveAnchor:f=>Vt(f)};return vt.createElement(Lo,{...Lt})};typeof window<"u"&&window.addEventListener("react-tooltip-inject-styles",t=>{t.detail.disableCore||be({css:":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9}.core-styles-module_tooltip__3vRRp{visibility:hidden;position:absolute;top:0;left:0;pointer-events:none;opacity:0;transition:opacity 0.3s ease-out;will-change:opacity,visibility}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{visibility:visible;opacity:var(--rt-opacity)}",type:"core"}),t.detail.disableBase||be({css:`
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`,type:"base"})});export{Do as W};
