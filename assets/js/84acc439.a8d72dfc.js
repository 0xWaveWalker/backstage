/*! For license information please see 84acc439.a8d72dfc.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[696641],{856843:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>a,toc:()=>s});var t=n(824246),o=n(511151);const c={id:"backend-common.dockercontainerrunner.runcontainer",title:"DockerContainerRunner.runContainer()",description:"API reference for DockerContainerRunner.runContainer()"},u=void 0,a={id:"reference/backend-common.dockercontainerrunner.runcontainer",title:"DockerContainerRunner.runContainer()",description:"API reference for DockerContainerRunner.runContainer()",source:"@site/../docs/reference/backend-common.dockercontainerrunner.runcontainer.md",sourceDirName:"reference",slug:"/reference/backend-common.dockercontainerrunner.runcontainer",permalink:"/docs/reference/backend-common.dockercontainerrunner.runcontainer",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-common.dockercontainerrunner.runcontainer.md",tags:[],version:"current",frontMatter:{id:"backend-common.dockercontainerrunner.runcontainer",title:"DockerContainerRunner.runContainer()",description:"API reference for DockerContainerRunner.runContainer()"}},i={},s=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-common",children:(0,t.jsx)(r.code,{children:"@backstage/backend-common"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-common.dockercontainerrunner",children:(0,t.jsx)(r.code,{children:"DockerContainerRunner"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-common.dockercontainerrunner.runcontainer",children:(0,t.jsx)(r.code,{children:"runContainer"})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"runContainer(options: RunContainerOptions): Promise<void>;\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"options"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-common.runcontaineroptions",children:"RunContainerOptions"})}),(0,t.jsx)(r.td,{})]})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(r.p,{children:"Promise<void>"})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},371426:(e,r,n)=>{var t=n(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,n){var t,c={},s=null,l=null;for(t in void 0!==n&&(s=""+n),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(l=r.ref),r)u.call(r,t)&&!i.hasOwnProperty(t)&&(c[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===c[t]&&(c[t]=r[t]);return{$$typeof:o,type:e,key:s,ref:l,props:c,_owner:a.current}}r.Fragment=c,r.jsx=s,r.jsxs=s},541535:(e,r)=>{var n=Symbol.for("react.element"),t=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),i=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function b(e,r,n){this.props=e,this.context=r,this.refs=m,this.updater=n||y}function _(){}function k(e,r,n){this.props=e,this.context=r,this.refs=m,this.updater=n||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=b.prototype;var v=k.prototype=new _;v.constructor=k,h(v,b.prototype),v.isPureReactComponent=!0;var j=Array.isArray,x=Object.prototype.hasOwnProperty,C={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function g(e,r,t){var o,c={},u=null,a=null;if(null!=r)for(o in void 0!==r.ref&&(a=r.ref),void 0!==r.key&&(u=""+r.key),r)x.call(r,o)&&!S.hasOwnProperty(o)&&(c[o]=r[o]);var i=arguments.length-2;if(1===i)c.children=t;else if(1<i){for(var s=Array(i),l=0;l<i;l++)s[l]=arguments[l+2];c.children=s}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===c[o]&&(c[o]=i[o]);return{$$typeof:n,type:e,key:u,ref:a,props:c,_owner:C.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function w(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function O(e,r,o,c,u){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var i=!1;if(null===e)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case n:case t:i=!0}}if(i)return u=u(i=e),e=""===c?"."+w(i,0):c,j(u)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),O(u,r,o,"",(function(e){return e}))):null!=u&&(R(u)&&(u=function(e,r){return{$$typeof:n,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||i&&i.key===u.key?"":(""+u.key).replace(E,"$&/")+"/")+e)),r.push(u)),1;if(i=0,c=""===c?".":c+":",j(e))for(var s=0;s<e.length;s++){var l=c+w(a=e[s],s);i+=O(a,r,o,l,u)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(a=e.next()).done;)i+=O(a=a.value,r,o,l=c+w(a,s++),u);else if("object"===a)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return i}function P(e,r,n){if(null==e)return e;var t=[],o=0;return O(e,t,"","",(function(e){return r.call(n,e,o++)})),t}function $(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var D={current:null},I={transition:null},T={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:I,ReactCurrentOwner:C};r.Children={map:P,forEach:function(e,r,n){P(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return P(e,(function(){r++})),r},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!R(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=b,r.Fragment=o,r.Profiler=u,r.PureComponent=k,r.StrictMode=c,r.Suspense=l,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,r.cloneElement=function(e,r,t){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),c=e.key,u=e.ref,a=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,a=C.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in r)x.call(r,s)&&!S.hasOwnProperty(s)&&(o[s]=void 0===r[s]&&void 0!==i?i[s]:r[s])}var s=arguments.length-2;if(1===s)o.children=t;else if(1<s){i=Array(s);for(var l=0;l<s;l++)i[l]=arguments[l+2];o.children=i}return{$$typeof:n,type:e.type,key:c,ref:u,props:o,_owner:a}},r.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},r.createElement=g,r.createFactory=function(e){var r=g.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=R,r.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:$}},r.memo=function(e,r){return{$$typeof:f,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=I.transition;I.transition={};try{e()}finally{I.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return D.current.useCallback(e,r)},r.useContext=function(e){return D.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return D.current.useDeferredValue(e)},r.useEffect=function(e,r){return D.current.useEffect(e,r)},r.useId=function(){return D.current.useId()},r.useImperativeHandle=function(e,r,n){return D.current.useImperativeHandle(e,r,n)},r.useInsertionEffect=function(e,r){return D.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return D.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return D.current.useMemo(e,r)},r.useReducer=function(e,r,n){return D.current.useReducer(e,r,n)},r.useRef=function(e){return D.current.useRef(e)},r.useState=function(e){return D.current.useState(e)},r.useSyncExternalStore=function(e,r,n){return D.current.useSyncExternalStore(e,r,n)},r.useTransition=function(){return D.current.useTransition()},r.version="18.2.0"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Zo:()=>a,ah:()=>c});var t=n(667294);const o=t.createContext({});function c(e){const r=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const u={};function a({components:e,children:r,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||u:c(e),t.createElement(o.Provider,{value:a},r)}}}]);