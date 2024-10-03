"use strict";exports.id=960,exports.ids=[960],exports.modules={88307:(e,t,n)=>{n.d(t,{Z:()=>r});/**
 * @license lucide-react v0.416.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(62881).Z)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]])},94019:(e,t,n)=>{n.d(t,{Z:()=>r});/**
 * @license lucide-react v0.416.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(62881).Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},74964:(e,t,n)=>{n.d(t,{VY:()=>z,fC:()=>K,h_:()=>V,xz:()=>U});var r=n(17577),o=n(82561),l=n(48051),u=n(93095),a=n(825),i=n(80699),c=n(10441),s=n(88957),d=n(17103),f=n(83078),v=n(9815),p=n(45226),m=n(34214),h=n(52067),g=n(35664),E=n(17397),b=n(10326),y="Popover",[w,C]=(0,u.b)(y,[d.D7]),R=(0,d.D7)(),[P,S]=w(y),k=e=>{let{__scopePopover:t,children:n,open:o,defaultOpen:l,onOpenChange:u,modal:a=!1}=e,i=R(t),c=r.useRef(null),[f,v]=r.useState(!1),[p=!1,m]=(0,h.T)({prop:o,defaultProp:l,onChange:u});return(0,b.jsx)(d.fC,{...i,children:(0,b.jsx)(P,{scope:t,contentId:(0,s.M)(),triggerRef:c,open:p,onOpenChange:m,onOpenToggle:r.useCallback(()=>m(e=>!e),[m]),hasCustomAnchor:f,onCustomAnchorAdd:r.useCallback(()=>v(!0),[]),onCustomAnchorRemove:r.useCallback(()=>v(!1),[]),modal:a,children:n})})};k.displayName=y;var x="PopoverAnchor";r.forwardRef((e,t)=>{let{__scopePopover:n,...o}=e,l=S(x,n),u=R(n),{onCustomAnchorAdd:a,onCustomAnchorRemove:i}=l;return r.useEffect(()=>(a(),()=>i()),[a,i]),(0,b.jsx)(d.ee,{...u,...o,ref:t})}).displayName=x;var O="PopoverTrigger",D=r.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,u=S(O,n),a=R(n),i=(0,l.e)(t,u.triggerRef),c=(0,b.jsx)(p.WV.button,{type:"button","aria-haspopup":"dialog","aria-expanded":u.open,"aria-controls":u.contentId,"data-state":W(u.open),...r,ref:i,onClick:(0,o.M)(e.onClick,u.onOpenToggle)});return u.hasCustomAnchor?c:(0,b.jsx)(d.ee,{asChild:!0,...a,children:c})});D.displayName=O;var N="PopoverPortal",[A,I]=w(N,{forceMount:void 0}),M=e=>{let{__scopePopover:t,forceMount:n,children:r,container:o}=e,l=S(N,t);return(0,b.jsx)(A,{scope:t,forceMount:n,children:(0,b.jsx)(v.z,{present:n||l.open,children:(0,b.jsx)(f.h,{asChild:!0,container:o,children:r})})})};M.displayName=N;var T="PopoverContent",L=r.forwardRef((e,t)=>{let n=I(T,e.__scopePopover),{forceMount:r=n.forceMount,...o}=e,l=S(T,e.__scopePopover);return(0,b.jsx)(v.z,{present:r||l.open,children:l.modal?(0,b.jsx)(F,{...o,ref:t}):(0,b.jsx)(_,{...o,ref:t})})});L.displayName=T;var F=r.forwardRef((e,t)=>{let n=S(T,e.__scopePopover),u=r.useRef(null),a=(0,l.e)(t,u),i=r.useRef(!1);return r.useEffect(()=>{let e=u.current;if(e)return(0,g.Ry)(e)},[]),(0,b.jsx)(E.Z,{as:m.g7,allowPinchZoom:!0,children:(0,b.jsx)(j,{...e,ref:a,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,o.M)(e.onCloseAutoFocus,e=>{e.preventDefault(),i.current||n.triggerRef.current?.focus()}),onPointerDownOutside:(0,o.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,r=2===t.button||n;i.current=r},{checkForDefaultPrevented:!1}),onFocusOutside:(0,o.M)(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1})})})}),_=r.forwardRef((e,t)=>{let n=S(T,e.__scopePopover),o=r.useRef(!1),l=r.useRef(!1);return(0,b.jsx)(j,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(o.current||n.triggerRef.current?.focus(),t.preventDefault()),o.current=!1,l.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(o.current=!0,"pointerdown"!==t.detail.originalEvent.type||(l.current=!0));let r=t.target;n.triggerRef.current?.contains(r)&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&l.current&&t.preventDefault()}})}),j=r.forwardRef((e,t)=>{let{__scopePopover:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:l,disableOutsidePointerEvents:u,onEscapeKeyDown:s,onPointerDownOutside:f,onFocusOutside:v,onInteractOutside:p,...m}=e,h=S(T,n),g=R(n);return(0,i.EW)(),(0,b.jsx)(c.M,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:l,children:(0,b.jsx)(a.XB,{asChild:!0,disableOutsidePointerEvents:u,onInteractOutside:p,onEscapeKeyDown:s,onPointerDownOutside:f,onFocusOutside:v,onDismiss:()=>h.onOpenChange(!1),children:(0,b.jsx)(d.VY,{"data-state":W(h.open),role:"dialog",id:h.contentId,...g,...m,ref:t,style:{...m.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),$="PopoverClose";function W(e){return e?"open":"closed"}r.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,l=S($,n);return(0,b.jsx)(p.WV.button,{type:"button",...r,ref:t,onClick:(0,o.M)(e.onClick,()=>l.onOpenChange(!1))})}).displayName=$,r.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,o=R(n);return(0,b.jsx)(d.Eh,{...o,...r,ref:t})}).displayName="PopoverArrow";var K=k,U=D,V=M,z=L},90220:(e,t,n)=>{n.d(t,{f:()=>c});var r=n(17577),o=n(45226),l=n(10326),u="horizontal",a=["horizontal","vertical"],i=r.forwardRef((e,t)=>{let{decorative:n,orientation:r=u,...i}=e,c=a.includes(r)?r:u;return(0,l.jsx)(o.WV.div,{"data-orientation":c,...n?{role:"none"}:{"aria-orientation":"vertical"===c?c:void 0,role:"separator"},...i,ref:t})});i.displayName="Separator";var c=i},28260:(e,t,n)=>{let r;n.d(t,{mY:()=>e2});var o=/[\\\/_+.#"@\[\(\{&]/,l=/[\\\/_+.#"@\[\(\{&]/g,u=/[\s-]/,a=/[\s-]/g;function i(e){return e.toLowerCase().replace(a," ")}function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}var s=n(17577),d=n.t(s,2);function f(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(null==e||e(r),!1===n||!r.defaultPrevented)return null==t?void 0:t(r)}}function v(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function p(...e){return(0,s.useCallback)(v(...e),e)}let m=(null==globalThis?void 0:globalThis.document)?s.useLayoutEffect:()=>{},h=d["useId".toString()]||(()=>void 0),g=0;function E(e){let[t,n]=s.useState(h());return m(()=>{e||n(e=>null!=e?e:String(g++))},[e]),e||(t?`radix-${t}`:"")}function b(e){let t=(0,s.useRef)(e);return(0,s.useEffect)(()=>{t.current=e}),(0,s.useMemo)(()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)},[])}var y=n(60962);let w=(0,s.forwardRef)((e,t)=>{let{children:n,...r}=e,o=s.Children.toArray(n),l=o.find(P);if(l){let e=l.props.children,n=o.map(t=>t!==l?t:s.Children.count(e)>1?s.Children.only(null):(0,s.isValidElement)(e)?e.props.children:null);return(0,s.createElement)(C,c({},r,{ref:t}),(0,s.isValidElement)(e)?(0,s.cloneElement)(e,void 0,n):null)}return(0,s.createElement)(C,c({},r,{ref:t}),n)});w.displayName="Slot";let C=(0,s.forwardRef)((e,t)=>{let{children:n,...r}=e;return(0,s.isValidElement)(n)?(0,s.cloneElement)(n,{...function(e,t){let n={...t};for(let r in t){let o=e[r],l=t[r];/^on[A-Z]/.test(r)?o&&l?n[r]=(...e)=>{l(...e),o(...e)}:o&&(n[r]=o):"style"===r?n[r]={...o,...l}:"className"===r&&(n[r]=[o,l].filter(Boolean).join(" "))}return{...e,...n}}(r,n.props),ref:t?v(t,n.ref):n.ref}):s.Children.count(n)>1?s.Children.only(null):null});C.displayName="SlotClone";let R=({children:e})=>(0,s.createElement)(s.Fragment,null,e);function P(e){return(0,s.isValidElement)(e)&&e.type===R}let S=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=(0,s.forwardRef)((e,n)=>{let{asChild:r,...o}=e,l=r?w:t;return(0,s.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,s.createElement)(l,c({},o,{ref:n}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),k="dismissableLayer.update",x=(0,s.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),O=(0,s.forwardRef)((e,t)=>{var n;let{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:l,onPointerDownOutside:u,onFocusOutside:a,onInteractOutside:i,onDismiss:d,...v}=e,m=(0,s.useContext)(x),[h,g]=(0,s.useState)(null),E=null!==(n=null==h?void 0:h.ownerDocument)&&void 0!==n?n:null==globalThis?void 0:globalThis.document,[,y]=(0,s.useState)({}),w=p(t,e=>g(e)),C=Array.from(m.layers),[R]=[...m.layersWithOutsidePointerEventsDisabled].slice(-1),P=C.indexOf(R),O=h?C.indexOf(h):-1,A=m.layersWithOutsidePointerEventsDisabled.size>0,I=O>=P,M=function(e,t=null==globalThis?void 0:globalThis.document){let n=b(e),r=(0,s.useRef)(!1),o=(0,s.useRef)(()=>{});return(0,s.useEffect)(()=>{let e=e=>{if(e.target&&!r.current){let r={originalEvent:e};function l(){N("dismissableLayer.pointerDownOutside",n,r,{discrete:!0})}"touch"===e.pointerType?(t.removeEventListener("click",o.current),o.current=l,t.addEventListener("click",o.current,{once:!0})):l()}else t.removeEventListener("click",o.current);r.current=!1},l=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(l),t.removeEventListener("pointerdown",e),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...m.branches].some(e=>e.contains(t));!I||n||(null==u||u(e),null==i||i(e),e.defaultPrevented||null==d||d())},E),T=function(e,t=null==globalThis?void 0:globalThis.document){let n=b(e),r=(0,s.useRef)(!1);return(0,s.useEffect)(()=>{let e=e=>{e.target&&!r.current&&N("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target;[...m.branches].some(e=>e.contains(t))||(null==a||a(e),null==i||i(e),e.defaultPrevented||null==d||d())},E);return function(e,t=null==globalThis?void 0:globalThis.document){let n=b(e);(0,s.useEffect)(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e),()=>t.removeEventListener("keydown",e)},[n,t])}(e=>{O!==m.layers.size-1||(null==l||l(e),!e.defaultPrevented&&d&&(e.preventDefault(),d()))},E),(0,s.useEffect)(()=>{if(h)return o&&(0===m.layersWithOutsidePointerEventsDisabled.size&&(r=E.body.style.pointerEvents,E.body.style.pointerEvents="none"),m.layersWithOutsidePointerEventsDisabled.add(h)),m.layers.add(h),D(),()=>{o&&1===m.layersWithOutsidePointerEventsDisabled.size&&(E.body.style.pointerEvents=r)}},[h,E,o,m]),(0,s.useEffect)(()=>()=>{h&&(m.layers.delete(h),m.layersWithOutsidePointerEventsDisabled.delete(h),D())},[h,m]),(0,s.useEffect)(()=>{let e=()=>y({});return document.addEventListener(k,e),()=>document.removeEventListener(k,e)},[]),(0,s.createElement)(S.div,c({},v,{ref:w,style:{pointerEvents:A?I?"auto":"none":void 0,...e.style},onFocusCapture:f(e.onFocusCapture,T.onFocusCapture),onBlurCapture:f(e.onBlurCapture,T.onBlurCapture),onPointerDownCapture:f(e.onPointerDownCapture,M.onPointerDownCapture)}))});function D(){let e=new CustomEvent(k);document.dispatchEvent(e)}function N(e,t,n,{discrete:r}){let o=n.originalEvent.target,l=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});(t&&o.addEventListener(e,t,{once:!0}),r)?o&&(0,y.flushSync)(()=>o.dispatchEvent(l)):o.dispatchEvent(l)}let A="focusScope.autoFocusOnMount",I="focusScope.autoFocusOnUnmount",M={bubbles:!1,cancelable:!0},T=(0,s.forwardRef)((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:l,...u}=e,[a,i]=(0,s.useState)(null),d=b(o),f=b(l),v=(0,s.useRef)(null),m=p(t,e=>i(e)),h=(0,s.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,s.useEffect)(()=>{if(r){function e(e){if(h.paused||!a)return;let t=e.target;a.contains(t)?v.current=t:_(v.current,{select:!0})}function t(e){if(h.paused||!a)return;let t=e.relatedTarget;null===t||a.contains(t)||_(v.current,{select:!0})}document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&_(a)});return a&&n.observe(a,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,a,h.paused]),(0,s.useEffect)(()=>{if(a){j.add(h);let e=document.activeElement;if(!a.contains(e)){let t=new CustomEvent(A,M);a.addEventListener(A,d),a.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(_(r,{select:t}),document.activeElement!==n)return}(L(a).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&_(a))}return()=>{a.removeEventListener(A,d),setTimeout(()=>{let t=new CustomEvent(I,M);a.addEventListener(I,f),a.dispatchEvent(t),t.defaultPrevented||_(null!=e?e:document.body,{select:!0}),a.removeEventListener(I,f),j.remove(h)},0)}}},[a,d,f,h]);let g=(0,s.useCallback)(e=>{if(!n&&!r||h.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,l]=function(e){let t=L(e);return[F(t,e),F(t.reverse(),e)]}(t);r&&l?e.shiftKey||o!==l?e.shiftKey&&o===r&&(e.preventDefault(),n&&_(l,{select:!0})):(e.preventDefault(),n&&_(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,h.paused]);return(0,s.createElement)(S.div,c({tabIndex:-1},u,{ref:m,onKeyDown:g}))});function L(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function F(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function _(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}let j=function(){let e=[];return{add(t){let n=e[0];t!==n&&(null==n||n.pause()),(e=$(e,t)).unshift(t)},remove(t){var n;null===(n=(e=$(e,t))[0])||void 0===n||n.resume()}}}();function $(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}let W=(0,s.forwardRef)((e,t)=>{var n;let{container:r=null==globalThis?void 0:null===(n=globalThis.document)||void 0===n?void 0:n.body,...o}=e;return r?y.createPortal((0,s.createElement)(S.div,c({},o,{ref:t})),r):null}),K=e=>{let{present:t,children:n}=e,r=function(e){var t,n;let[r,o]=(0,s.useState)(),l=(0,s.useRef)({}),u=(0,s.useRef)(e),a=(0,s.useRef)("none"),[i,c]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,s.useReducer)((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return(0,s.useEffect)(()=>{let e=U(l.current);a.current="mounted"===i?e:"none"},[i]),m(()=>{let t=l.current,n=u.current;if(n!==e){let r=a.current,o=U(t);e?c("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?c("UNMOUNT"):n&&r!==o?c("ANIMATION_OUT"):c("UNMOUNT"),u.current=e}},[e,c]),m(()=>{if(r){let e=e=>{let t=U(l.current).includes(e.animationName);e.target===r&&t&&(0,y.flushSync)(()=>c("ANIMATION_END"))},t=e=>{e.target===r&&(a.current=U(l.current))};return r.addEventListener("animationstart",t),r.addEventListener("animationcancel",e),r.addEventListener("animationend",e),()=>{r.removeEventListener("animationstart",t),r.removeEventListener("animationcancel",e),r.removeEventListener("animationend",e)}}c("ANIMATION_END")},[r,c]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:(0,s.useCallback)(e=>{e&&(l.current=getComputedStyle(e)),o(e)},[])}}(t),o="function"==typeof n?n({present:r.isPresent}):s.Children.only(n),l=p(r.ref,o.ref);return"function"==typeof n||r.isPresent?(0,s.cloneElement)(o,{ref:l}):null};function U(e){return(null==e?void 0:e.animationName)||"none"}K.displayName="Presence";let V=0;function z(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}var B=n(65826),q=n(32064),Z=n(55745),Y=(0,n(45305)._)(),X=function(){},H=s.forwardRef(function(e,t){var n=s.useRef(null),r=s.useState({onScrollCapture:X,onWheelCapture:X,onTouchMoveCapture:X}),o=r[0],l=r[1],u=e.forwardProps,a=e.children,i=e.className,c=e.removeScrollBar,d=e.enabled,f=e.shards,v=e.sideCar,p=e.noIsolation,m=e.inert,h=e.allowPinchZoom,g=e.as,E=(0,B._T)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),b=(0,Z.q)([n,t]),y=(0,B.pi)((0,B.pi)({},E),o);return s.createElement(s.Fragment,null,d&&s.createElement(v,{sideCar:Y,removeScrollBar:c,shards:f,noIsolation:p,inert:m,setCallbacks:l,allowPinchZoom:!!h,lockRef:n}),u?s.cloneElement(s.Children.only(a),(0,B.pi)((0,B.pi)({},y),{ref:b})):s.createElement(void 0===g?"div":g,(0,B.pi)({},y,{className:i,ref:b}),a))});H.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},H.classNames={fullWidth:q.zi,zeroRight:q.pF};var G=n(73943),J=n(3566),Q=n(98848),ee=!1;if("undefined"!=typeof window)try{var et=Object.defineProperty({},"passive",{get:function(){return ee=!0,!0}});window.addEventListener("test",et,et),window.removeEventListener("test",et,et)}catch(e){ee=!1}var en=!!ee&&{passive:!1},er=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},eo=function(e,t){var n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),el(e,n)){var r=eu(e,n);if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body);return!1},el=function(e,t){return"v"===e?er(t,"overflowY"):er(t,"overflowX")},eu=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},ea=function(e,t,n,r,o){var l,u=(l=window.getComputedStyle(t).direction,"h"===e&&"rtl"===l?-1:1),a=u*r,i=n.target,c=t.contains(i),s=!1,d=a>0,f=0,v=0;do{var p=eu(e,i),m=p[0],h=p[1]-p[2]-u*m;(m||h)&&el(e,i)&&(f+=h,v+=m),i=i.parentNode}while(!c&&i!==document.body||c&&(t.contains(i)||t===i));return d&&(o&&0===f||!o&&a>f)?s=!0:!d&&(o&&0===v||!o&&-a>v)&&(s=!0),s},ei=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},ec=function(e){return[e.deltaX,e.deltaY]},es=function(e){return e&&"current"in e?e.current:e},ed=0,ef=[];let ev=(0,G.L)(Y,function(e){var t=s.useRef([]),n=s.useRef([0,0]),r=s.useRef(),o=s.useState(ed++)[0],l=s.useState(function(){return(0,Q.Ws)()})[0],u=s.useRef(e);s.useEffect(function(){u.current=e},[e]),s.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(0,B.ev)([e.lockRef.current],(e.shards||[]).map(es),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var a=s.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!u.current.allowPinchZoom;var o,l=ei(e),a=n.current,i="deltaX"in e?e.deltaX:a[0]-l[0],c="deltaY"in e?e.deltaY:a[1]-l[1],s=e.target,d=Math.abs(i)>Math.abs(c)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=eo(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=eo(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(i||c)&&(r.current=o),!o)return!0;var v=r.current||o;return ea(v,t,e,"h"===v?i:c,!0)},[]),i=s.useCallback(function(e){if(ef.length&&ef[ef.length-1]===l){var n="deltaY"in e?ec(e):ei(e),r=t.current.filter(function(t){var r;return t.name===e.type&&t.target===e.target&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(u.current.shards||[]).map(es).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?a(e,o[0]):!u.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),c=s.useCallback(function(e,n,r,o){var l={name:e,delta:n,target:r,should:o};t.current.push(l),setTimeout(function(){t.current=t.current.filter(function(e){return e!==l})},1)},[]),d=s.useCallback(function(e){n.current=ei(e),r.current=void 0},[]),f=s.useCallback(function(t){c(t.type,ec(t),t.target,a(t,e.lockRef.current))},[]),v=s.useCallback(function(t){c(t.type,ei(t),t.target,a(t,e.lockRef.current))},[]);s.useEffect(function(){return ef.push(l),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:v}),document.addEventListener("wheel",i,en),document.addEventListener("touchmove",i,en),document.addEventListener("touchstart",d,en),function(){ef=ef.filter(function(e){return e!==l}),document.removeEventListener("wheel",i,en),document.removeEventListener("touchmove",i,en),document.removeEventListener("touchstart",d,en)}},[]);var p=e.removeScrollBar,m=e.inert;return s.createElement(s.Fragment,null,m?s.createElement(l,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,p?s.createElement(J.jp,{gapMode:"margin"}):null)});var ep=s.forwardRef(function(e,t){return s.createElement(H,(0,B.pi)({},e,{ref:t,sideCar:ev}))});ep.classNames=H.classNames;var em=n(35664);let eh="Dialog",[eg,eE]=function(e,t=[]){let n=[],r=()=>{let t=n.map(e=>(0,s.createContext)(e));return function(n){let r=(null==n?void 0:n[e])||t;return(0,s.useMemo)(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])}};return r.scopeName=e,[function(t,r){let o=(0,s.createContext)(r),l=n.length;function u(t){let{scope:n,children:r,...u}=t,a=(null==n?void 0:n[e][l])||o,i=(0,s.useMemo)(()=>u,Object.values(u));return(0,s.createElement)(a.Provider,{value:i},r)}return n=[...n,r],u.displayName=t+"Provider",[u,function(n,u){let a=(null==u?void 0:u[e][l])||o,i=(0,s.useContext)(a);if(i)return i;if(void 0!==r)return r;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return(0,s.useMemo)(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}(r,...t)]}(eh),[eb,ey]=eg(eh),ew="DialogPortal",[eC,eR]=eg(ew,{forceMount:void 0}),eP="DialogOverlay",eS=(0,s.forwardRef)((e,t)=>{let n=eR(eP,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,l=ey(eP,e.__scopeDialog);return l.modal?(0,s.createElement)(K,{present:r||l.open},(0,s.createElement)(ek,c({},o,{ref:t}))):null}),ek=(0,s.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=ey(eP,n);return(0,s.createElement)(ep,{as:w,allowPinchZoom:!0,shards:[o.contentRef]},(0,s.createElement)(S.div,c({"data-state":eI(o.open)},r,{ref:t,style:{pointerEvents:"auto",...r.style}})))}),ex="DialogContent",eO=(0,s.forwardRef)((e,t)=>{let n=eR(ex,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,l=ey(ex,e.__scopeDialog);return(0,s.createElement)(K,{present:r||l.open},l.modal?(0,s.createElement)(eD,c({},o,{ref:t})):(0,s.createElement)(eN,c({},o,{ref:t})))}),eD=(0,s.forwardRef)((e,t)=>{let n=ey(ex,e.__scopeDialog),r=(0,s.useRef)(null),o=p(t,n.contentRef,r);return(0,s.useEffect)(()=>{let e=r.current;if(e)return(0,em.Ry)(e)},[]),(0,s.createElement)(eA,c({},e,{ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:f(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:f(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:f(e.onFocusOutside,e=>e.preventDefault())}))}),eN=(0,s.forwardRef)((e,t)=>{let n=ey(ex,e.__scopeDialog),r=(0,s.useRef)(!1),o=(0,s.useRef)(!1);return(0,s.createElement)(eA,c({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var l,u;null===(l=e.onCloseAutoFocus)||void 0===l||l.call(e,t),t.defaultPrevented||(r.current||null===(u=n.triggerRef.current)||void 0===u||u.focus(),t.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:t=>{var l,u;null===(l=e.onInteractOutside)||void 0===l||l.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(o.current=!0));let a=t.target;(null===(u=n.triggerRef.current)||void 0===u?void 0:u.contains(a))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()}}))}),eA=(0,s.forwardRef)((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:l,...u}=e,a=ey(ex,n),i=p(t,(0,s.useRef)(null));return(0,s.useEffect)(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:z()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:z()),V++,()=>{1===V&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),V--}},[]),(0,s.createElement)(s.Fragment,null,(0,s.createElement)(T,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:l},(0,s.createElement)(O,c({role:"dialog",id:a.contentId,"aria-describedby":a.descriptionId,"aria-labelledby":a.titleId,"data-state":eI(a.open)},u,{ref:i,onDismiss:()=>a.onOpenChange(!1)}))),!1)});function eI(e){return e?"open":"closed"}let[eM,eT]=function(e,t){let n=(0,s.createContext)(t);function r(e){let{children:t,...r}=e,o=(0,s.useMemo)(()=>r,Object.values(r));return(0,s.createElement)(n.Provider,{value:o},t)}return r.displayName=e+"Provider",[r,function(r){let o=(0,s.useContext)(n);if(o)return o;if(void 0!==t)return t;throw Error(`\`${r}\` must be used within \`${e}\``)}]}("DialogTitleWarning",{contentName:ex,titleName:"DialogTitle",docsSlug:"dialog"}),eL=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:l,modal:u=!0}=e,a=(0,s.useRef)(null),i=(0,s.useRef)(null),[c=!1,d]=function({prop:e,defaultProp:t,onChange:n=()=>{}}){let[r,o]=function({defaultProp:e,onChange:t}){let n=(0,s.useState)(e),[r]=n,o=(0,s.useRef)(r),l=b(t);return(0,s.useEffect)(()=>{o.current!==r&&(l(r),o.current=r)},[r,o,l]),n}({defaultProp:t,onChange:n}),l=void 0!==e,u=l?e:r,a=b(n);return[u,(0,s.useCallback)(t=>{if(l){let n="function"==typeof t?t(e):t;n!==e&&a(n)}else o(t)},[l,e,o,a])]}({prop:r,defaultProp:o,onChange:l});return(0,s.createElement)(eb,{scope:t,triggerRef:a,contentRef:i,contentId:E(),titleId:E(),descriptionId:E(),open:c,onOpenChange:d,onOpenToggle:(0,s.useCallback)(()=>d(e=>!e),[d]),modal:u},n)},eF=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:o}=e,l=ey(ew,t);return(0,s.createElement)(eC,{scope:t,forceMount:n},s.Children.map(r,e=>(0,s.createElement)(K,{present:n||l.open},(0,s.createElement)(W,{asChild:!0,container:o},e))))};var e_='[cmdk-group=""]',ej='[cmdk-group-items=""]',e$='[cmdk-item=""]',eW=`${e$}:not([aria-disabled="true"])`,eK="cmdk-item-select",eU="data-value",eV=(e,t,n)=>(function(e,t,n){return function e(t,n,r,i,c,s,d){if(s===n.length)return c===t.length?1:.99;var f=`${c},${s}`;if(void 0!==d[f])return d[f];for(var v,p,m,h,g=i.charAt(s),E=r.indexOf(g,c),b=0;E>=0;)(v=e(t,n,r,i,E+1,s+1,d))>b&&(E===c?v*=1:o.test(t.charAt(E-1))?(v*=.8,(m=t.slice(c,E-1).match(l))&&c>0&&(v*=Math.pow(.999,m.length))):u.test(t.charAt(E-1))?(v*=.9,(h=t.slice(c,E-1).match(a))&&c>0&&(v*=Math.pow(.999,h.length))):(v*=.17,c>0&&(v*=Math.pow(.999,E-c))),t.charAt(E)!==n.charAt(s)&&(v*=.9999)),(v<.1&&r.charAt(E-1)===i.charAt(s+1)||i.charAt(s+1)===i.charAt(s)&&r.charAt(E-1)!==i.charAt(s))&&.1*(p=e(t,n,r,i,E+1,s+2,d))>v&&(v=.1*p),v>b&&(b=v),E=r.indexOf(g,E+1);return d[f]=b,b}(e=n&&n.length>0?`${e+" "+n.join(" ")}`:e,t,i(e),i(t),0,0,{})})(e,t,n),ez=s.createContext(void 0),eB=()=>s.useContext(ez),eq=s.createContext(void 0),eZ=()=>s.useContext(eq),eY=s.createContext(void 0),eX=s.forwardRef((e,t)=>{let n=e8(()=>{var t,n;return{search:"",value:null!=(n=null!=(t=e.value)?t:e.defaultValue)?n:"",filtered:{count:0,items:new Map,groups:new Set}}}),r=e8(()=>new Set),o=e8(()=>new Map),l=e8(()=>new Map),u=e8(()=>new Set),a=e9(e),{label:i,children:c,value:d,onValueChange:f,filter:v,shouldFilter:p,loop:m,disablePointerSelection:h=!1,vimBindings:g=!0,...E}=e,b=s.useId(),y=s.useId(),w=s.useId(),C=s.useRef(null),R=e3();e6(()=>{if(void 0!==d){let e=d.trim();n.current.value=e,P.emit()}},[d]),e6(()=>{R(6,A)},[]);let P=s.useMemo(()=>({subscribe:e=>(u.current.add(e),()=>u.current.delete(e)),snapshot:()=>n.current,setState:(e,t,r)=>{var o,l,u;if(!Object.is(n.current[e],t)){if(n.current[e]=t,"search"===e)N(),O(),R(1,D);else if("value"===e&&(r||R(5,A),(null==(o=a.current)?void 0:o.value)!==void 0)){null==(u=(l=a.current).onValueChange)||u.call(l,null!=t?t:"");return}P.emit()}},emit:()=>{u.current.forEach(e=>e())}}),[]),k=s.useMemo(()=>({value:(e,t,r)=>{var o;t!==(null==(o=l.current.get(e))?void 0:o.value)&&(l.current.set(e,{value:t,keywords:r}),n.current.filtered.items.set(e,x(t,r)),R(2,()=>{O(),P.emit()}))},item:(e,t)=>(r.current.add(e),t&&(o.current.has(t)?o.current.get(t).add(e):o.current.set(t,new Set([e]))),R(3,()=>{N(),O(),n.current.value||D(),P.emit()}),()=>{l.current.delete(e),r.current.delete(e),n.current.filtered.items.delete(e);let t=I();R(4,()=>{N(),(null==t?void 0:t.getAttribute("id"))===e&&D(),P.emit()})}),group:e=>(o.current.has(e)||o.current.set(e,new Set),()=>{l.current.delete(e),o.current.delete(e)}),filter:()=>a.current.shouldFilter,label:i||e["aria-label"],disablePointerSelection:h,listId:b,inputId:w,labelId:y,listInnerRef:C}),[]);function x(e,t){var r,o;let l=null!=(o=null==(r=a.current)?void 0:r.filter)?o:eV;return e?l(e,n.current.search,t):0}function O(){if(!n.current.search||!1===a.current.shouldFilter)return;let e=n.current.filtered.items,t=[];n.current.filtered.groups.forEach(n=>{let r=o.current.get(n),l=0;r.forEach(t=>{l=Math.max(e.get(t),l)}),t.push([n,l])});let r=C.current;M().sort((t,n)=>{var r,o;let l=t.getAttribute("id"),u=n.getAttribute("id");return(null!=(r=e.get(u))?r:0)-(null!=(o=e.get(l))?o:0)}).forEach(e=>{let t=e.closest(ej);t?t.appendChild(e.parentElement===t?e:e.closest(`${ej} > *`)):r.appendChild(e.parentElement===r?e:e.closest(`${ej} > *`))}),t.sort((e,t)=>t[1]-e[1]).forEach(e=>{let t=C.current.querySelector(`${e_}[${eU}="${encodeURIComponent(e[0])}"]`);null==t||t.parentElement.appendChild(t)})}function D(){let e=M().find(e=>"true"!==e.getAttribute("aria-disabled")),t=null==e?void 0:e.getAttribute(eU);P.setState("value",t||void 0)}function N(){var e,t,u,i;if(!n.current.search||!1===a.current.shouldFilter){n.current.filtered.count=r.current.size;return}n.current.filtered.groups=new Set;let c=0;for(let o of r.current){let r=x(null!=(t=null==(e=l.current.get(o))?void 0:e.value)?t:"",null!=(i=null==(u=l.current.get(o))?void 0:u.keywords)?i:[]);n.current.filtered.items.set(o,r),r>0&&c++}for(let[e,t]of o.current)for(let r of t)if(n.current.filtered.items.get(r)>0){n.current.filtered.groups.add(e);break}n.current.filtered.count=c}function A(){var e,t,n;let r=I();r&&((null==(e=r.parentElement)?void 0:e.firstChild)===r&&(null==(n=null==(t=r.closest(e_))?void 0:t.querySelector('[cmdk-group-heading=""]'))||n.scrollIntoView({block:"nearest"})),r.scrollIntoView({block:"nearest"}))}function I(){var e;return null==(e=C.current)?void 0:e.querySelector(`${e$}[aria-selected="true"]`)}function M(){var e;return Array.from(null==(e=C.current)?void 0:e.querySelectorAll(eW))}function T(e){let t=M()[e];t&&P.setState("value",t.getAttribute(eU))}function L(e){var t;let n=I(),r=M(),o=r.findIndex(e=>e===n),l=r[o+e];null!=(t=a.current)&&t.loop&&(l=o+e<0?r[r.length-1]:o+e===r.length?r[0]:r[o+e]),l&&P.setState("value",l.getAttribute(eU))}function F(e){let t=I(),n=null==t?void 0:t.closest(e_),r;for(;n&&!r;)r=null==(n=e>0?function(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return n;n=n.nextElementSibling}}(n,e_):function(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return n;n=n.previousElementSibling}}(n,e_))?void 0:n.querySelector(eW);r?P.setState("value",r.getAttribute(eU)):L(e)}let _=()=>T(M().length-1),j=e=>{e.preventDefault(),e.metaKey?_():e.altKey?F(1):L(1)},$=e=>{e.preventDefault(),e.metaKey?T(0):e.altKey?F(-1):L(-1)};return s.createElement(S.div,{ref:t,tabIndex:-1,...E,"cmdk-root":"",onKeyDown:e=>{var t;if(null==(t=E.onKeyDown)||t.call(E,e),!e.defaultPrevented)switch(e.key){case"n":case"j":g&&e.ctrlKey&&j(e);break;case"ArrowDown":j(e);break;case"p":case"k":g&&e.ctrlKey&&$(e);break;case"ArrowUp":$(e);break;case"Home":e.preventDefault(),T(0);break;case"End":e.preventDefault(),_();break;case"Enter":if(!e.nativeEvent.isComposing&&229!==e.keyCode){e.preventDefault();let t=I();if(t){let e=new Event(eK);t.dispatchEvent(e)}}}}},s.createElement("label",{"cmdk-label":"",htmlFor:k.inputId,id:k.labelId,style:tt},i),te(e,e=>s.createElement(eq.Provider,{value:P},s.createElement(ez.Provider,{value:k},e))))}),eH=s.forwardRef((e,t)=>{var n,r;let o=s.useId(),l=s.useRef(null),u=s.useContext(eY),a=eB(),i=e9(e),c=null!=(r=null==(n=i.current)?void 0:n.forceMount)?r:null==u?void 0:u.forceMount;e6(()=>{if(!c)return a.item(o,null==u?void 0:u.id)},[c]);let d=e4(o,l,[e.value,e.children,l],e.keywords),f=eZ(),v=e5(e=>e.value&&e.value===d.current),p=e5(e=>!!c||!1===a.filter()||!e.search||e.filtered.items.get(o)>0);function m(){var e,t;h(),null==(t=(e=i.current).onSelect)||t.call(e,d.current)}function h(){f.setState("value",d.current,!0)}if(s.useEffect(()=>{let t=l.current;if(!(!t||e.disabled))return t.addEventListener(eK,m),()=>t.removeEventListener(eK,m)},[p,e.onSelect,e.disabled]),!p)return null;let{disabled:g,value:E,onSelect:b,forceMount:y,keywords:w,...C}=e;return s.createElement(S.div,{ref:e7([l,t]),...C,id:o,"cmdk-item":"",role:"option","aria-disabled":!!g,"aria-selected":!!v,"data-disabled":!!g,"data-selected":!!v,onPointerMove:g||a.disablePointerSelection?void 0:h,onClick:g?void 0:m},e.children)}),eG=s.forwardRef((e,t)=>{let{heading:n,children:r,forceMount:o,...l}=e,u=s.useId(),a=s.useRef(null),i=s.useRef(null),c=s.useId(),d=eB(),f=e5(e=>!!o||!1===d.filter()||!e.search||e.filtered.groups.has(u));e6(()=>d.group(u),[]),e4(u,a,[e.value,e.heading,i]);let v=s.useMemo(()=>({id:u,forceMount:o}),[o]);return s.createElement(S.div,{ref:e7([a,t]),...l,"cmdk-group":"",role:"presentation",hidden:!f||void 0},n&&s.createElement("div",{ref:i,"cmdk-group-heading":"","aria-hidden":!0,id:c},n),te(e,e=>s.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":n?c:void 0},s.createElement(eY.Provider,{value:v},e))))}),eJ=s.forwardRef((e,t)=>{let{alwaysRender:n,...r}=e,o=s.useRef(null),l=e5(e=>!e.search);return n||l?s.createElement(S.div,{ref:e7([o,t]),...r,"cmdk-separator":"",role:"separator"}):null}),eQ=s.forwardRef((e,t)=>{let{onValueChange:n,...r}=e,o=null!=e.value,l=eZ(),u=e5(e=>e.search),a=e5(e=>e.value),i=eB(),c=s.useMemo(()=>{var e;let t=null==(e=i.listInnerRef.current)?void 0:e.querySelector(`${e$}[${eU}="${encodeURIComponent(a)}"]`);return null==t?void 0:t.getAttribute("id")},[]);return s.useEffect(()=>{null!=e.value&&l.setState("search",e.value)},[e.value]),s.createElement(S.input,{ref:t,...r,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":i.listId,"aria-labelledby":i.labelId,"aria-activedescendant":c,id:i.inputId,type:"text",value:o?e.value:u,onChange:e=>{o||l.setState("search",e.target.value),null==n||n(e.target.value)}})}),e0=s.forwardRef((e,t)=>{let{children:n,label:r="Suggestions",...o}=e,l=s.useRef(null),u=s.useRef(null),a=eB();return s.useEffect(()=>{if(u.current&&l.current){let e=u.current,t=l.current,n,r=new ResizeObserver(()=>{n=requestAnimationFrame(()=>{let n=e.offsetHeight;t.style.setProperty("--cmdk-list-height",n.toFixed(1)+"px")})});return r.observe(e),()=>{cancelAnimationFrame(n),r.unobserve(e)}}},[]),s.createElement(S.div,{ref:e7([l,t]),...o,"cmdk-list":"",role:"listbox","aria-label":r,id:a.listId},te(e,e=>s.createElement("div",{ref:e7([u,a.listInnerRef]),"cmdk-list-sizer":""},e)))}),e1=s.forwardRef((e,t)=>{let{open:n,onOpenChange:r,overlayClassName:o,contentClassName:l,container:u,...a}=e;return s.createElement(eL,{open:n,onOpenChange:r},s.createElement(eF,{container:u},s.createElement(eS,{"cmdk-overlay":"",className:o}),s.createElement(eO,{"aria-label":e.label,"cmdk-dialog":"",className:l},s.createElement(eX,{ref:t,...a}))))}),e2=Object.assign(eX,{List:e0,Item:eH,Input:eQ,Group:eG,Separator:eJ,Dialog:e1,Empty:s.forwardRef((e,t)=>e5(e=>0===e.filtered.count)?s.createElement(S.div,{ref:t,...e,"cmdk-empty":"",role:"presentation"}):null),Loading:s.forwardRef((e,t)=>{let{progress:n,children:r,label:o="Loading...",...l}=e;return s.createElement(S.div,{ref:t,...l,"cmdk-loading":"",role:"progressbar","aria-valuenow":n,"aria-valuemin":0,"aria-valuemax":100,"aria-label":o},te(e,e=>s.createElement("div",{"aria-hidden":!0},e)))})});function e9(e){let t=s.useRef(e);return e6(()=>{t.current=e}),t}var e6="undefined"==typeof window?s.useEffect:s.useLayoutEffect;function e8(e){let t=s.useRef();return void 0===t.current&&(t.current=e()),t}function e7(e){return t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}}function e5(e){let t=eZ(),n=()=>e(t.snapshot());return s.useSyncExternalStore(t.subscribe,n,n)}function e4(e,t,n,r=[]){let o=s.useRef(),l=eB();return e6(()=>{var u;let a=(()=>{var e;for(let t of n){if("string"==typeof t)return t.trim();if("object"==typeof t&&"current"in t)return t.current?null==(e=t.current.textContent)?void 0:e.trim():o.current}})(),i=r.map(e=>e.trim());l.value(e,a,i),null==(u=t.current)||u.setAttribute(eU,a),o.current=a}),o}var e3=()=>{let[e,t]=s.useState(),n=e8(()=>new Map);return e6(()=>{n.current.forEach(e=>e()),n.current=new Map},[e]),(e,r)=>{n.current.set(e,r),t({})}};function te({asChild:e,children:t},n){let r;return e&&s.isValidElement(t)?s.cloneElement("function"==typeof(r=t.type)?r(t.props):"render"in r?r.render(t.props):t,{ref:t.ref},n(t.props.children)):n(t)}var tt={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"}}};