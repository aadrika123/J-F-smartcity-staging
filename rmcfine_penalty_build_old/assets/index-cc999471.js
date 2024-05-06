import{r as Ce,h as qe,k as $e,f as Be}from"./index-faef4408.js";import{p as Ee}from"./index-eab1d8e2.js";var ae={exports:{}},L={},le={exports:{}},T={},se={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=m;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var o="none",a="contents",l=/input|select|textarea|button|object|iframe/;function d(c,p){return p.getPropertyValue("overflow")!=="visible"||c.scrollWidth<=0&&c.scrollHeight<=0}function g(c){var p=c.offsetWidth<=0&&c.offsetHeight<=0;if(p&&!c.innerHTML)return!0;try{var h=window.getComputedStyle(c),E=h.getPropertyValue("display");return p?E!==a&&d(c,h):E===o}catch{return!1}}function r(c){for(var p=c,h=c.getRootNode&&c.getRootNode();p&&p!==document.body;){if(h&&p===h&&(p=h.host.parentNode),g(p))return!1;p=p.parentNode}return!0}function b(c,p){var h=c.nodeName.toLowerCase(),E=l.test(h)&&!c.disabled||h==="a"&&c.href||p;return E&&r(c)}function v(c){var p=c.getAttribute("tabindex");p===null&&(p=void 0);var h=isNaN(p);return(h||p>=0)&&b(c,!h)}function m(c){var p=[].slice.call(c.querySelectorAll("*"),0).reduce(function(h,E){return h.concat(E.shadowRoot?m(E.shadowRoot):[E])},[]);return p.filter(v)}t.exports=e.default})(se,se.exports);var Se=se.exports;Object.defineProperty(T,"__esModule",{value:!0});T.resetState=Ye;T.log=Ve;T.handleBlur=j;T.handleFocus=z;T.markForFocusLater=Ge;T.returnFocus=Je;T.popWithoutFocus=Qe;T.setupScopedFocus=Xe;T.teardownScopedFocus=Ze;var Ke=Se,je=ze(Ke);function ze(t){return t&&t.__esModule?t:{default:t}}var H=[],W=null,ie=!1;function Ye(){H=[]}function Ve(){}function j(){ie=!0}function z(){if(ie){if(ie=!1,!W)return;setTimeout(function(){if(!W.contains(document.activeElement)){var t=(0,je.default)(W)[0]||W;t.focus()}},0)}}function Ge(){H.push(document.activeElement)}function Je(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{H.length!==0&&(e=H.pop(),e.focus({preventScroll:t}));return}catch{}}function Qe(){H.length>0&&H.pop()}function Xe(t){W=t,window.addEventListener?(window.addEventListener("blur",j,!1),document.addEventListener("focus",z,!0)):(window.attachEvent("onBlur",j),document.attachEvent("onFocus",z))}function Ze(){W=null,window.addEventListener?(window.removeEventListener("blur",j),document.removeEventListener("focus",z)):(window.detachEvent("onBlur",j),document.detachEvent("onFocus",z))}var ue={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=g;var o=Se,a=l(o);function l(r){return r&&r.__esModule?r:{default:r}}function d(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return r.activeElement.shadowRoot?d(r.activeElement.shadowRoot):r.activeElement}function g(r,b){var v=(0,a.default)(r);if(!v.length){b.preventDefault();return}var m=void 0,c=b.shiftKey,p=v[0],h=v[v.length-1],E=d();if(r===E){if(!c)return;m=h}if(h===E&&!c&&(m=p),p===E&&c&&(m=h),m){b.preventDefault(),m.focus();return}var P=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),$=P!=null&&P[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if($){var U=v.indexOf(E);if(U>-1&&(U+=c?-1:1),m=v[U],typeof m>"u"){b.preventDefault(),m=c?h:p,m.focus();return}b.preventDefault(),m.focus()}}t.exports=e.default})(ue,ue.exports);var et=ue.exports,R={},tt=function(){},nt=tt,N={},we={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),o={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=o:window.ExecutionEnvironment=o})()})(we);var ot=we.exports;Object.defineProperty(N,"__esModule",{value:!0});N.canUseDOM=N.SafeNodeList=N.SafeHTMLCollection=void 0;var rt=ot,at=lt(rt);function lt(t){return t&&t.__esModule?t:{default:t}}var te=at.default,st=te.canUseDOM?window.HTMLElement:{};N.SafeHTMLCollection=te.canUseDOM?window.HTMLCollection:{};N.SafeNodeList=te.canUseDOM?window.NodeList:{};N.canUseDOM=te.canUseDOM;N.default=st;Object.defineProperty(R,"__esModule",{value:!0});R.resetState=dt;R.log=pt;R.assertNodeList=Me;R.setElement=vt;R.validateElement=fe;R.hide=mt;R.show=ht;R.documentNotReadyOrSSRTesting=yt;var it=nt,ut=ct(it),ft=N;function ct(t){return t&&t.__esModule?t:{default:t}}var w=null;function dt(){w&&(w.removeAttribute?w.removeAttribute("aria-hidden"):w.length!=null?w.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll(w).forEach(function(t){return t.removeAttribute("aria-hidden")})),w=null}function pt(){}function Me(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function vt(t){var e=t;if(typeof e=="string"&&ft.canUseDOM){var o=document.querySelectorAll(e);Me(o,e),e=o}return w=e||w,w}function fe(t){var e=t||w;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,ut.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function mt(t){var e=!0,o=!1,a=void 0;try{for(var l=fe(t)[Symbol.iterator](),d;!(e=(d=l.next()).done);e=!0){var g=d.value;g.setAttribute("aria-hidden","true")}}catch(r){o=!0,a=r}finally{try{!e&&l.return&&l.return()}finally{if(o)throw a}}}function ht(t){var e=!0,o=!1,a=void 0;try{for(var l=fe(t)[Symbol.iterator](),d;!(e=(d=l.next()).done);e=!0){var g=d.value;g.removeAttribute("aria-hidden")}}catch(r){o=!0,a=r}finally{try{!e&&l.return&&l.return()}finally{if(o)throw a}}}function yt(){w=null}var I={};Object.defineProperty(I,"__esModule",{value:!0});I.resetState=bt;I.log=Ot;var B={},K={};function ve(t,e){t.classList.remove(e)}function bt(){var t=document.getElementsByTagName("html")[0];for(var e in B)ve(t,B[e]);var o=document.body;for(var a in K)ve(o,K[a]);B={},K={}}function Ot(){}var gt=function(e,o){return e[o]||(e[o]=0),e[o]+=1,o},_t=function(e,o){return e[o]&&(e[o]-=1),o},Ct=function(e,o,a){a.forEach(function(l){gt(o,l),e.add(l)})},Et=function(e,o,a){a.forEach(function(l){_t(o,l),o[l]===0&&e.remove(l)})};I.add=function(e,o){return Ct(e.classList,e.nodeName.toLowerCase()=="html"?B:K,o.split(" "))};I.remove=function(e,o){return Et(e.classList,e.nodeName.toLowerCase()=="html"?B:K,o.split(" "))};var q={};Object.defineProperty(q,"__esModule",{value:!0});q.log=wt;q.resetState=Mt;function St(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Ne=function t(){var e=this;St(this,t),this.register=function(o){e.openInstances.indexOf(o)===-1&&(e.openInstances.push(o),e.emit("register"))},this.deregister=function(o){var a=e.openInstances.indexOf(o);a!==-1&&(e.openInstances.splice(a,1),e.emit("deregister"))},this.subscribe=function(o){e.subscribers.push(o)},this.emit=function(o){e.subscribers.forEach(function(a){return a(o,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},ce=new Ne;function wt(){ce.openInstances.forEach(function(t){})}function Mt(){ce=new Ne}q.default=ce;var de={};Object.defineProperty(de,"__esModule",{value:!0});de.resetState=Pt;de.log=At;var Nt=q,Tt=Rt(Nt);function Rt(t){return t&&t.__esModule?t:{default:t}}var C=void 0,M=void 0,k=[];function Pt(){for(var t=[C,M],e=0;e<t.length;e++){var o=t[e];o&&o.parentNode&&o.parentNode.removeChild(o)}C=M=null,k=[]}function At(){for(var t=[C,M],e=0;e<t.length;e++)var o=t[e],a=o||{}}function me(){k.length!==0&&k[k.length-1].focusContent()}function Dt(t,e){!C&&!M&&(C=document.createElement("div"),C.setAttribute("data-react-modal-body-trap",""),C.style.position="absolute",C.style.opacity="0",C.setAttribute("tabindex","0"),C.addEventListener("focus",me),M=C.cloneNode(),M.addEventListener("focus",me)),k=e,k.length>0?(document.body.firstChild!==C&&document.body.insertBefore(C,document.body.firstChild),document.body.lastChild!==M&&document.body.appendChild(M)):(C.parentElement&&C.parentElement.removeChild(C),M.parentElement&&M.parentElement.removeChild(M))}Tt.default.subscribe(Dt);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(f){for(var u=1;u<arguments.length;u++){var y=arguments[u];for(var n in y)Object.prototype.hasOwnProperty.call(y,n)&&(f[n]=y[n])}return f},a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},l=function(){function f(u,y){for(var n=0;n<y.length;n++){var s=y[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(u,s.key,s)}}return function(u,y,n){return y&&f(u.prototype,y),n&&f(u,n),u}}(),d=Ce,g=Ee,r=G(g),b=T,v=ne(b),m=et,c=G(m),p=R,h=ne(p),E=I,P=ne(E),$=N,U=G($),De=q,pe=G(De);function ne(f){if(f&&f.__esModule)return f;var u={};if(f!=null)for(var y in f)Object.prototype.hasOwnProperty.call(f,y)&&(u[y]=f[y]);return u.default=f,u}function G(f){return f&&f.__esModule?f:{default:f}}function Fe(f,u){if(!(f instanceof u))throw new TypeError("Cannot call a class as a function")}function xe(f,u){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u&&(typeof u=="object"||typeof u=="function")?u:f}function Le(f,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof u);f.prototype=Object.create(u&&u.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),u&&(Object.setPrototypeOf?Object.setPrototypeOf(f,u):f.__proto__=u)}var oe={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},Ue=function(u){return u.code==="Tab"||u.keyCode===9},We=function(u){return u.code==="Escape"||u.keyCode===27},J=0,re=function(f){Le(u,f);function u(y){Fe(this,u);var n=xe(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,y));return n.setOverlayRef=function(s){n.overlay=s,n.props.overlayRef&&n.props.overlayRef(s)},n.setContentRef=function(s){n.content=s,n.props.contentRef&&n.props.contentRef(s)},n.afterClose=function(){var s=n.props,_=s.appElement,S=s.ariaHideApp,O=s.htmlOpenClassName,D=s.bodyOpenClassName,F=s.parentSelector,Q=F&&F().ownerDocument||document;D&&P.remove(Q.body,D),O&&P.remove(Q.getElementsByTagName("html")[0],O),S&&J>0&&(J-=1,J===0&&h.show(_)),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(v.returnFocus(n.props.preventScroll),v.teardownScopedFocus()):v.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose(),pe.default.deregister(n)},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(v.setupScopedFocus(n.node),v.markForFocusLater()),n.setState({isOpen:!0},function(){n.openAnimationFrame=requestAnimationFrame(function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})})}))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus({preventScroll:!0})},n.closeWithTimeout=function(){var s=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:s},function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())})},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(s){Ue(s)&&(0,c.default)(n.content,s),n.props.shouldCloseOnEsc&&We(s)&&(s.stopPropagation(),n.requestClose(s))},n.handleOverlayOnClick=function(s){n.shouldClose===null&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(s):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(s){!n.props.shouldCloseOnOverlayClick&&s.target==n.overlay&&s.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(s){return n.ownerHandlesClose()&&n.props.onRequestClose(s)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(s,_){var S=(typeof _>"u"?"undefined":a(_))==="object"?_:{base:oe[s],afterOpen:oe[s]+"--after-open",beforeClose:oe[s]+"--before-close"},O=S.base;return n.state.afterOpen&&(O=O+" "+S.afterOpen),n.state.beforeClose&&(O=O+" "+S.beforeClose),typeof _=="string"&&_?O+" "+_:O},n.attributesFromObject=function(s,_){return Object.keys(_).reduce(function(S,O){return S[s+"-"+O]=_[O],S},{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return l(u,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(n,s){this.props.isOpen&&!n.isOpen?this.open():!this.props.isOpen&&n.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!s.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var n=this.props,s=n.appElement,_=n.ariaHideApp,S=n.htmlOpenClassName,O=n.bodyOpenClassName,D=n.parentSelector,F=D&&D().ownerDocument||document;O&&P.add(F.body,O),S&&P.add(F.getElementsByTagName("html")[0],S),_&&(J+=1,h.hide(s)),pe.default.register(this)}},{key:"render",value:function(){var n=this.props,s=n.id,_=n.className,S=n.overlayClassName,O=n.defaultStyles,D=n.children,F=_?{}:O.content,Q=S?{}:O.overlay;if(this.shouldBeClosed())return null;var ke={ref:this.setOverlayRef,className:this.buildClassName("overlay",S),style:o({},Q,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},He=o({id:s,ref:this.setContentRef,style:o({},F,this.props.style.content),className:this.buildClassName("content",_),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),Ie=this.props.contentElement(He,D);return this.props.overlayElement(ke,Ie)}}]),u}(d.Component);re.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},re.propTypes={isOpen:r.default.bool.isRequired,defaultStyles:r.default.shape({content:r.default.object,overlay:r.default.object}),style:r.default.shape({content:r.default.object,overlay:r.default.object}),className:r.default.oneOfType([r.default.string,r.default.object]),overlayClassName:r.default.oneOfType([r.default.string,r.default.object]),parentSelector:r.default.func,bodyOpenClassName:r.default.string,htmlOpenClassName:r.default.string,ariaHideApp:r.default.bool,appElement:r.default.oneOfType([r.default.instanceOf(U.default),r.default.instanceOf($.SafeHTMLCollection),r.default.instanceOf($.SafeNodeList),r.default.arrayOf(r.default.instanceOf(U.default))]),onAfterOpen:r.default.func,onAfterClose:r.default.func,onRequestClose:r.default.func,closeTimeoutMS:r.default.number,shouldFocusAfterRender:r.default.bool,shouldCloseOnOverlayClick:r.default.bool,shouldReturnFocusAfterClose:r.default.bool,preventScroll:r.default.bool,role:r.default.string,contentLabel:r.default.string,aria:r.default.object,data:r.default.object,children:r.default.node,shouldCloseOnEsc:r.default.bool,overlayRef:r.default.func,contentRef:r.default.func,id:r.default.string,overlayElement:r.default.func,contentElement:r.default.func,testId:r.default.string},e.default=re,t.exports=e.default})(le,le.exports);var Ft=le.exports;function Te(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function Re(t){function e(o){var a=this.constructor.getDerivedStateFromProps(t,o);return a??null}this.setState(e.bind(this))}function Pe(t,e){try{var o=this.props,a=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,a)}finally{this.props=o,this.state=a}}Te.__suppressDeprecationWarning=!0;Re.__suppressDeprecationWarning=!0;Pe.__suppressDeprecationWarning=!0;function xt(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var o=null,a=null,l=null;if(typeof e.componentWillMount=="function"?o="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(o="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?a="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(a="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?l="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(l="UNSAFE_componentWillUpdate"),o!==null||a!==null||l!==null){var d=t.displayName||t.name,g=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+d+" uses "+g+" but also contains the following legacy lifecycles:"+(o!==null?`
  `+o:"")+(a!==null?`
  `+a:"")+(l!==null?`
  `+l:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=Te,e.componentWillReceiveProps=Re),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=Pe;var r=e.componentDidUpdate;e.componentDidUpdate=function(v,m,c){var p=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:c;r.call(this,v,m,p)}}return t}const Lt=Object.freeze(Object.defineProperty({__proto__:null,polyfill:xt},Symbol.toStringTag,{value:"Module"})),Ut=qe(Lt);Object.defineProperty(L,"__esModule",{value:!0});L.bodyOpenClassName=L.portalClassName=void 0;var he=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}return t},Wt=function(){function t(e,o){for(var a=0;a<o.length;a++){var l=o[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(e,o,a){return o&&t(e.prototype,o),a&&t(e,a),e}}(),Ae=Ce,Z=Y(Ae),kt=$e,ee=Y(kt),Ht=Ee,i=Y(Ht),It=Ft,ye=Y(It),qt=R,$t=Kt(qt),A=N,be=Y(A),Bt=Ut;function Kt(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}function Y(t){return t&&t.__esModule?t:{default:t}}function jt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Oe(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function zt(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Yt=L.portalClassName="ReactModalPortal",Vt=L.bodyOpenClassName="ReactModal__Body--open",x=A.canUseDOM&&ee.default.createPortal!==void 0,ge=function(e){return document.createElement(e)},_e=function(){return x?ee.default.createPortal:ee.default.unstable_renderSubtreeIntoContainer};function X(t){return t()}var V=function(t){zt(e,t);function e(){var o,a,l,d;jt(this,e);for(var g=arguments.length,r=Array(g),b=0;b<g;b++)r[b]=arguments[b];return d=(a=(l=Oe(this,(o=e.__proto__||Object.getPrototypeOf(e)).call.apply(o,[this].concat(r))),l),l.removePortal=function(){!x&&ee.default.unmountComponentAtNode(l.node);var v=X(l.props.parentSelector);v&&v.contains(l.node)&&v.removeChild(l.node)},l.portalRef=function(v){l.portal=v},l.renderPortal=function(v){var m=_e(),c=m(l,Z.default.createElement(ye.default,he({defaultStyles:e.defaultStyles},v)),l.node);l.portalRef(c)},a),Oe(l,d)}return Wt(e,[{key:"componentDidMount",value:function(){if(A.canUseDOM){x||(this.node=ge("div")),this.node.className=this.props.portalClassName;var a=X(this.props.parentSelector);a.appendChild(this.node),!x&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(a){var l=X(a.parentSelector),d=X(this.props.parentSelector);return{prevParent:l,nextParent:d}}},{key:"componentDidUpdate",value:function(a,l,d){if(A.canUseDOM){var g=this.props,r=g.isOpen,b=g.portalClassName;a.portalClassName!==b&&(this.node.className=b);var v=d.prevParent,m=d.nextParent;m!==v&&(v.removeChild(this.node),m.appendChild(this.node)),!(!a.isOpen&&!r)&&!x&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!A.canUseDOM||!this.node||!this.portal)){var a=this.portal.state,l=Date.now(),d=a.isOpen&&this.props.closeTimeoutMS&&(a.closesAt||l+this.props.closeTimeoutMS);d?(a.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,d-l)):this.removePortal()}}},{key:"render",value:function(){if(!A.canUseDOM||!x)return null;!this.node&&x&&(this.node=ge("div"));var a=_e();return a(Z.default.createElement(ye.default,he({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(a){$t.setElement(a)}}]),e}(Ae.Component);V.propTypes={isOpen:i.default.bool.isRequired,style:i.default.shape({content:i.default.object,overlay:i.default.object}),portalClassName:i.default.string,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,className:i.default.oneOfType([i.default.string,i.default.shape({base:i.default.string.isRequired,afterOpen:i.default.string.isRequired,beforeClose:i.default.string.isRequired})]),overlayClassName:i.default.oneOfType([i.default.string,i.default.shape({base:i.default.string.isRequired,afterOpen:i.default.string.isRequired,beforeClose:i.default.string.isRequired})]),appElement:i.default.oneOfType([i.default.instanceOf(be.default),i.default.instanceOf(A.SafeHTMLCollection),i.default.instanceOf(A.SafeNodeList),i.default.arrayOf(i.default.instanceOf(be.default))]),onAfterOpen:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,ariaHideApp:i.default.bool,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,preventScroll:i.default.bool,parentSelector:i.default.func,aria:i.default.object,data:i.default.object,role:i.default.string,contentLabel:i.default.string,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,overlayElement:i.default.func,contentElement:i.default.func};V.defaultProps={isOpen:!1,portalClassName:Yt,bodyOpenClassName:Vt,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,o){return Z.default.createElement("div",e,o)},contentElement:function(e,o){return Z.default.createElement("div",e,o)}};V.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,Bt.polyfill)(V);L.default=V;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var o=L,a=l(o);function l(d){return d&&d.__esModule?d:{default:d}}e.default=a.default,t.exports=e.default})(ae,ae.exports);var Gt=ae.exports;const Xt=Be(Gt);export{Xt as M};
