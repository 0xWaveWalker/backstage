/*! For license information please see 316db681.da9fd5c9.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[690375],{330002:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=t(824246),a=t(511151);const o={id:"backend-plugin-manager.isbackenddynamicplugininstaller",title:"isBackendDynamicPluginInstaller()",description:"API reference for isBackendDynamicPluginInstaller()"},c=void 0,i={id:"reference/backend-plugin-manager.isbackenddynamicplugininstaller",title:"isBackendDynamicPluginInstaller()",description:"API reference for isBackendDynamicPluginInstaller()",source:"@site/../docs/reference/backend-plugin-manager.isbackenddynamicplugininstaller.md",sourceDirName:"reference",slug:"/reference/backend-plugin-manager.isbackenddynamicplugininstaller",permalink:"/docs/reference/backend-plugin-manager.isbackenddynamicplugininstaller",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-plugin-manager.isbackenddynamicplugininstaller.md",tags:[],version:"current",frontMatter:{id:"backend-plugin-manager.isbackenddynamicplugininstaller",title:"isBackendDynamicPluginInstaller()",description:"API reference for isBackendDynamicPluginInstaller()"}},u={},s=[{value:"Parameters",id:"parameters",level:2}];function l(e){const n=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-plugin-manager",children:(0,r.jsx)(n.code,{children:"@backstage/backend-plugin-manager"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-plugin-manager.isbackenddynamicplugininstaller",children:(0,r.jsx)(n.code,{children:"isBackendDynamicPluginInstaller"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function isBackendDynamicPluginInstaller(obj: any): obj is BackendDynamicPluginInstaller;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"obj"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{})]})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.p,{children:["obj is ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-plugin-manager.backenddynamicplugininstaller",children:"BackendDynamicPluginInstaller"})]})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},371426:(e,n,t)=>{var r=t(827378),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,n,t){var r,o={},s=null,l=null;for(r in void 0!==t&&(s=""+t),void 0!==n.key&&(s=""+n.key),void 0!==n.ref&&(l=n.ref),n)c.call(n,r)&&!u.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:a,type:e,key:s,ref:l,props:o,_owner:i.current}}n.Fragment=o,n.jsx=s,n.jsxs=s},541535:(e,n)=>{var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),u=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,h={};function b(e,n,t){this.props=e,this.context=n,this.refs=h,this.updater=t||y}function g(){}function _(e,n,t){this.props=e,this.context=n,this.refs=h,this.updater=t||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=b.prototype;var k=_.prototype=new g;k.constructor=_,m(k,b.prototype),k.isPureReactComponent=!0;var v=Array.isArray,j=Object.prototype.hasOwnProperty,x={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function P(e,n,r){var a,o={},c=null,i=null;if(null!=n)for(a in void 0!==n.ref&&(i=n.ref),void 0!==n.key&&(c=""+n.key),n)j.call(n,a)&&!S.hasOwnProperty(a)&&(o[a]=n[a]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var s=Array(u),l=0;l<u;l++)s[l]=arguments[l+2];o.children=s}if(e&&e.defaultProps)for(a in u=e.defaultProps)void 0===o[a]&&(o[a]=u[a]);return{$$typeof:t,type:e,key:c,ref:i,props:o,_owner:x.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var w=/\/+/g;function R(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function C(e,n,a,o,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case t:case r:u=!0}}if(u)return c=c(u=e),e=""===o?"."+R(u,0):o,v(c)?(a="",null!=e&&(a=e.replace(w,"$&/")+"/"),C(c,n,a,"",(function(e){return e}))):null!=c&&(E(c)&&(c=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(c,a+(!c.key||u&&u.key===c.key?"":(""+c.key).replace(w,"$&/")+"/")+e)),n.push(c)),1;if(u=0,o=""===o?".":o+":",v(e))for(var s=0;s<e.length;s++){var l=o+R(i=e[s],s);u+=C(i,n,a,l,c)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(i=e.next()).done;)u+=C(i=i.value,n,a,l=o+R(i,s++),c);else if("object"===i)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return u}function I(e,n,t){if(null==e)return e;var r=[],a=0;return C(e,r,"","",(function(e){return n.call(t,e,a++)})),r}function $(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},D={transition:null},B={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:D,ReactCurrentOwner:x};n.Children={map:I,forEach:function(e,n,t){I(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return I(e,(function(){n++})),n},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=b,n.Fragment=a,n.Profiler=c,n.PureComponent=_,n.StrictMode=o,n.Suspense=l,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,n.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=m({},e.props),o=e.key,c=e.ref,i=e._owner;if(null!=n){if(void 0!==n.ref&&(c=n.ref,i=x.current),void 0!==n.key&&(o=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in n)j.call(n,s)&&!S.hasOwnProperty(s)&&(a[s]=void 0===n[s]&&void 0!==u?u[s]:n[s])}var s=arguments.length-2;if(1===s)a.children=r;else if(1<s){u=Array(s);for(var l=0;l<s;l++)u[l]=arguments[l+2];a.children=u}return{$$typeof:t,type:e.type,key:o,ref:c,props:a,_owner:i}},n.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},n.createElement=P,n.createFactory=function(e){var n=P.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:s,render:e}},n.isValidElement=E,n.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:$}},n.memo=function(e,n){return{$$typeof:f,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=D.transition;D.transition={};try{e()}finally{D.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return O.current.useCallback(e,n)},n.useContext=function(e){return O.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return O.current.useDeferredValue(e)},n.useEffect=function(e,n){return O.current.useEffect(e,n)},n.useId=function(){return O.current.useId()},n.useImperativeHandle=function(e,n,t){return O.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return O.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return O.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return O.current.useMemo(e,n)},n.useReducer=function(e,n,t){return O.current.useReducer(e,n,t)},n.useRef=function(e){return O.current.useRef(e)},n.useState=function(e){return O.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return O.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return O.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>i,ah:()=>o});var r=t(667294);const a=r.createContext({});function o(e){const n=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function i({components:e,children:n,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||c:o(e),r.createElement(a.Provider,{value:i},n)}}}]);