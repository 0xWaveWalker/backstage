/*! For license information please see b6601751.11661ef6.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[333293],{401532:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(824246),o=r(511151);const s={id:"plugin-gitops-profiles.listclusterrequest",title:"ListClusterRequest",description:"API reference for ListClusterRequest"},u=void 0,i={id:"reference/plugin-gitops-profiles.listclusterrequest",title:"ListClusterRequest",description:"API reference for ListClusterRequest",source:"@site/../docs/reference/plugin-gitops-profiles.listclusterrequest.md",sourceDirName:"reference",slug:"/reference/plugin-gitops-profiles.listclusterrequest",permalink:"/docs/reference/plugin-gitops-profiles.listclusterrequest",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-gitops-profiles.listclusterrequest.md",tags:[],version:"current",frontMatter:{id:"plugin-gitops-profiles.listclusterrequest",title:"ListClusterRequest",description:"API reference for ListClusterRequest"}},c={},l=[{value:"Properties",id:"properties",level:2}];function a(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-gitops-profiles",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-gitops-profiles"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-gitops-profiles.listclusterrequest",children:(0,n.jsx)(t.code,{children:"ListClusterRequest"})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export interface ListClusterRequest \n"})}),"\n",(0,n.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Property"}),(0,n.jsx)(t.th,{children:"Modifiers"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-gitops-profiles.listclusterrequest.githubtoken",children:"gitHubToken"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-gitops-profiles.listclusterrequest.githubuser",children:"gitHubUser"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{})]})]})]})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(a,e)})):a(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,s={},l=null,a=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(a=t.ref),t)u.call(t,n)&&!c.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:a,props:s,_owner:i.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),a=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,_={};function b(e,t,r){this.props=e,this.context=t,this.refs=_,this.updater=r||y}function g(){}function m(e,t,r){this.props=e,this.context=t,this.refs=_,this.updater=r||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=b.prototype;var j=m.prototype=new g;j.constructor=m,h(j,b.prototype),j.isPureReactComponent=!0;var v=Array.isArray,x=Object.prototype.hasOwnProperty,S={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,n){var o,s={},u=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(u=""+t.key),t)x.call(t,o)&&!k.hasOwnProperty(o)&&(s[o]=t[o]);var c=arguments.length-2;if(1===c)s.children=n;else if(1<c){for(var l=Array(c),a=0;a<c;a++)l[a]=arguments[a+2];s.children=l}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===s[o]&&(s[o]=c[o]);return{$$typeof:r,type:e,key:u,ref:i,props:s,_owner:S.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var E=/\/+/g;function w(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,o,s,u){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case n:c=!0}}if(c)return u=u(c=e),e=""===s?"."+w(c,0):s,v(u)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),$(u,t,o,"",(function(e){return e}))):null!=u&&(C(u)&&(u=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||c&&c.key===u.key?"":(""+u.key).replace(E,"$&/")+"/")+e)),t.push(u)),1;if(c=0,s=""===s?".":s+":",v(e))for(var l=0;l<e.length;l++){var a=s+w(i=e[l],l);c+=$(i,t,o,a,u)}else if(a=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof a)for(e=a.call(e),l=0;!(i=e.next()).done;)c+=$(i=i.value,t,o,a=s+w(i,l++),u);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function O(e,t,r){if(null==e)return e;var n=[],o=0;return $(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var q={current:null},I={transition:null},L={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:I,ReactCurrentOwner:S};t.Children={map:O,forEach:function(e,t,r){O(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=o,t.Profiler=u,t.PureComponent=m,t.StrictMode=s,t.Suspense=a,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),s=e.key,u=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,i=S.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)x.call(t,l)&&!k.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){c=Array(l);for(var a=0;a<l;a++)c[a]=arguments[a+2];o.children=c}return{$$typeof:r,type:e.type,key:s,ref:u,props:o,_owner:i}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=R,t.createFactory=function(e){var t=R.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return q.current.useCallback(e,t)},t.useContext=function(e){return q.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return q.current.useDeferredValue(e)},t.useEffect=function(e,t){return q.current.useEffect(e,t)},t.useId=function(){return q.current.useId()},t.useImperativeHandle=function(e,t,r){return q.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return q.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return q.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return q.current.useMemo(e,t)},t.useReducer=function(e,t,r){return q.current.useReducer(e,t,r)},t.useRef=function(e){return q.current.useRef(e)},t.useState=function(e){return q.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return q.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return q.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>i,ah:()=>s});var n=r(667294);const o=n.createContext({});function s(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const u={};function i({components:e,children:t,disableParentContext:r}){let i;return i=r?"function"==typeof e?e({}):e||u:s(e),n.createElement(o.Provider,{value:i},t)}}}]);