/*! For license information please see 6db891df.6e5bc334.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[559905],{931364:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>u,toc:()=>i});var n=r(824246),o=r(511151);const a={id:"plugin-scaffolder-backend.taskmanager.createdby",title:"TaskManager.createdBy",description:"API reference for TaskManager.createdBy"},c=void 0,u={id:"reference/plugin-scaffolder-backend.taskmanager.createdby",title:"TaskManager.createdBy",description:"API reference for TaskManager.createdBy",source:"@site/../docs/reference/plugin-scaffolder-backend.taskmanager.createdby.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend.taskmanager.createdby",permalink:"/docs/reference/plugin-scaffolder-backend.taskmanager.createdby",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-backend.taskmanager.createdby.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend.taskmanager.createdby",title:"TaskManager.createdBy",description:"API reference for TaskManager.createdBy"}},s={},i=[];function f(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend.taskmanager",children:(0,n.jsx)(t.code,{children:"TaskManager"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend.taskmanager.createdby",children:(0,n.jsx)(t.code,{children:"createdBy"})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"get createdBy(): string | undefined;\n"})})]})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(f,e)})):f(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,r){var n,a={},i=null,f=null;for(n in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(f=t.ref),t)c.call(t,n)&&!s.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:i,ref:f,props:a,_owner:u.current}}t.Fragment=a,t.jsx=i,t.jsxs=i},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),s=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,h={};function m(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}function _(){}function g(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=m.prototype;var k=g.prototype=new _;k.constructor=g,b(k,m.prototype),k.isPureReactComponent=!0;var v=Array.isArray,S=Object.prototype.hasOwnProperty,j={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var o,a={},c=null,u=null;if(null!=t)for(o in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(c=""+t.key),t)S.call(t,o)&&!x.hasOwnProperty(o)&&(a[o]=t[o]);var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){for(var i=Array(s),f=0;f<s;f++)i[f]=arguments[f+2];a.children=i}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===a[o]&&(a[o]=s[o]);return{$$typeof:r,type:e,key:c,ref:u,props:a,_owner:j.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var R=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,o,a,c){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var s=!1;if(null===e)s=!0;else switch(u){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case r:case n:s=!0}}if(s)return c=c(s=e),e=""===a?"."+C(s,0):a,v(c)?(o="",null!=e&&(o=e.replace(R,"$&/")+"/"),$(c,t,o,"",(function(e){return e}))):null!=c&&(w(c)&&(c=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||s&&s.key===c.key?"":(""+c.key).replace(R,"$&/")+"/")+e)),t.push(c)),1;if(s=0,a=""===a?".":a+":",v(e))for(var i=0;i<e.length;i++){var f=a+C(u=e[i],i);s+=$(u,t,o,f,c)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),i=0;!(u=e.next()).done;)s+=$(u=u.value,t,o,f=a+C(u,i++),c);else if("object"===u)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function O(e,t,r){if(null==e)return e;var n=[],o=0;return $(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},I={transition:null},M={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:I,ReactCurrentOwner:j};t.Children={map:O,forEach:function(e,t,r){O(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=c,t.PureComponent=g,t.StrictMode=a,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=b({},e.props),a=e.key,c=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,u=j.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(i in t)S.call(t,i)&&!x.hasOwnProperty(i)&&(o[i]=void 0===t[i]&&void 0!==s?s[i]:t[i])}var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){s=Array(i);for(var f=0;f<i;f++)s[f]=arguments[f+2];o.children=s}return{$$typeof:r,type:e.type,key:a,ref:c,props:o,_owner:u}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:i,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return T.current.useCallback(e,t)},t.useContext=function(e){return T.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return T.current.useDeferredValue(e)},t.useEffect=function(e,t){return T.current.useEffect(e,t)},t.useId=function(){return T.current.useId()},t.useImperativeHandle=function(e,t,r){return T.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return T.current.useMemo(e,t)},t.useReducer=function(e,t,r){return T.current.useReducer(e,t,r)},t.useRef=function(e){return T.current.useRef(e)},t.useState=function(e){return T.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return T.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return T.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>u,ah:()=>a});var n=r(667294);const o=n.createContext({});function a(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function u({components:e,children:t,disableParentContext:r}){let u;return u=r?"function"==typeof e?e({}):e||c:a(e),n.createElement(o.Provider,{value:u},t)}}}]);