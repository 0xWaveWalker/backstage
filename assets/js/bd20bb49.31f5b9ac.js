/*! For license information please see bd20bb49.31f5b9ac.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[814730],{335657:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=t(824246),o=t(511151);const i={id:"plugin-ilert.ilertapi.resolvealert",title:"ILertApi.resolveAlert()",description:"API reference for ILertApi.resolveAlert()"},u=void 0,s={id:"reference/plugin-ilert.ilertapi.resolvealert",title:"ILertApi.resolveAlert()",description:"API reference for ILertApi.resolveAlert()",source:"@site/../docs/reference/plugin-ilert.ilertapi.resolvealert.md",sourceDirName:"reference",slug:"/reference/plugin-ilert.ilertapi.resolvealert",permalink:"/docs/reference/plugin-ilert.ilertapi.resolvealert",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-ilert.ilertapi.resolvealert.md",tags:[],version:"current",frontMatter:{id:"plugin-ilert.ilertapi.resolvealert",title:"ILertApi.resolveAlert()",description:"API reference for ILertApi.resolveAlert()"}},l={},c=[{value:"Parameters",id:"parameters",level:2}];function a(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-ilert",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-ilert"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-ilert.ilertapi",children:(0,n.jsx)(r.code,{children:"ILertApi"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-ilert.ilertapi.resolvealert",children:(0,n.jsx)(r.code,{children:"resolveAlert"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"resolveAlert(alert: Alert, userName: string): Promise<Alert>;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"alert"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-ilert.alert",children:"Alert"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"userName"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(r.p,{children:["Promise<",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-ilert.alert",children:"Alert"}),">"]})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(a,e)})):a(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,i={},c=null,a=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(a=r.ref),r)u.call(r,n)&&!l.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:o,type:e,key:c,ref:a,props:i,_owner:s.current}}r.Fragment=i,r.jsx=c,r.jsxs=c},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),a=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function v(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||h}function _(){}function b(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=v.prototype;var j=b.prototype=new _;j.constructor=b,y(j,v.prototype),j.isPureReactComponent=!0;var x=Array.isArray,g=Object.prototype.hasOwnProperty,S={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function E(e,r,n){var o,i={},u=null,s=null;if(null!=r)for(o in void 0!==r.ref&&(s=r.ref),void 0!==r.key&&(u=""+r.key),r)g.call(r,o)&&!k.hasOwnProperty(o)&&(i[o]=r[o]);var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){for(var c=Array(l),a=0;a<l;a++)c[a]=arguments[a+2];i.children=c}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===i[o]&&(i[o]=l[o]);return{$$typeof:t,type:e,key:u,ref:s,props:i,_owner:S.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var A=/\/+/g;function R(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function C(e,r,o,i,u){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case t:case n:l=!0}}if(l)return u=u(l=e),e=""===i?"."+R(l,0):i,x(u)?(o="",null!=e&&(o=e.replace(A,"$&/")+"/"),C(u,r,o,"",(function(e){return e}))):null!=u&&(w(u)&&(u=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||l&&l.key===u.key?"":(""+u.key).replace(A,"$&/")+"/")+e)),r.push(u)),1;if(l=0,i=""===i?".":i+":",x(e))for(var c=0;c<e.length;c++){var a=i+R(s=e[c],c);l+=C(s,r,o,a,u)}else if(a=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof a)for(e=a.call(e),c=0;!(s=e.next()).done;)l+=C(s=s.value,r,o,a=i+R(s,c++),u);else if("object"===s)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return l}function P(e,r,t){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function $(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},I={transition:null},L={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:I,ReactCurrentOwner:S};r.Children={map:P,forEach:function(e,r,t){P(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return P(e,(function(){r++})),r},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=v,r.Fragment=o,r.Profiler=u,r.PureComponent=b,r.StrictMode=i,r.Suspense=a,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),i=e.key,u=e.ref,s=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,s=S.current),void 0!==r.key&&(i=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in r)g.call(r,c)&&!k.hasOwnProperty(c)&&(o[c]=void 0===r[c]&&void 0!==l?l[c]:r[c])}var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){l=Array(c);for(var a=0;a<c;a++)l[a]=arguments[a+2];o.children=l}return{$$typeof:t,type:e.type,key:i,ref:u,props:o,_owner:s}},r.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},r.createElement=E,r.createFactory=function(e){var r=E.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:c,render:e}},r.isValidElement=w,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:$}},r.memo=function(e,r){return{$$typeof:f,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=I.transition;I.transition={};try{e()}finally{I.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return O.current.useCallback(e,r)},r.useContext=function(e){return O.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return O.current.useDeferredValue(e)},r.useEffect=function(e,r){return O.current.useEffect(e,r)},r.useId=function(){return O.current.useId()},r.useImperativeHandle=function(e,r,t){return O.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return O.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return O.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return O.current.useMemo(e,r)},r.useReducer=function(e,r,t){return O.current.useReducer(e,r,t)},r.useRef=function(e){return O.current.useRef(e)},r.useState=function(e){return O.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return O.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return O.current.useTransition()},r.version="18.2.0"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>s,ah:()=>i});var n=t(667294);const o=n.createContext({});function i(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const u={};function s({components:e,children:r,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||u:i(e),n.createElement(o.Provider,{value:s},r)}}}]);