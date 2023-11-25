/*! For license information please see b4f03d88.a2aaebe6.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[249015],{809564:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>u,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var r=t(824246),o=t(511151);const a={id:"backend-plugin-manager.newbackendplugininstaller.install",title:"NewBackendPluginInstaller.install()",description:"API reference for NewBackendPluginInstaller.install()"},u=void 0,c={id:"reference/backend-plugin-manager.newbackendplugininstaller.install",title:"NewBackendPluginInstaller.install()",description:"API reference for NewBackendPluginInstaller.install()",source:"@site/../docs/reference/backend-plugin-manager.newbackendplugininstaller.install.md",sourceDirName:"reference",slug:"/reference/backend-plugin-manager.newbackendplugininstaller.install",permalink:"/docs/reference/backend-plugin-manager.newbackendplugininstaller.install",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-plugin-manager.newbackendplugininstaller.install.md",tags:[],version:"current",frontMatter:{id:"backend-plugin-manager.newbackendplugininstaller.install",title:"NewBackendPluginInstaller.install()",description:"API reference for NewBackendPluginInstaller.install()"}},l={},i=[];function s(e){const n=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-plugin-manager",children:(0,r.jsx)(n.code,{children:"@backstage/backend-plugin-manager"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-plugin-manager.newbackendplugininstaller",children:(0,r.jsx)(n.code,{children:"NewBackendPluginInstaller"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-plugin-manager.newbackendplugininstaller.install",children:(0,r.jsx)(n.code,{children:"install"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"install(): BackendFeature | BackendFeature[];\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.backendfeature",children:"BackendFeature"})," | ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.backendfeature",children:"BackendFeature"}),"[]"]})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(s,e)})):s(e)}},371426:(e,n,t)=>{var r=t(827378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,t){var r,a={},i=null,s=null;for(r in void 0!==t&&(i=""+t),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(s=n.ref),n)u.call(n,r)&&!l.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===a[r]&&(a[r]=n[r]);return{$$typeof:o,type:e,key:i,ref:s,props:a,_owner:c.current}}n.Fragment=a,n.jsx=i,n.jsxs=i},541535:(e,n)=>{var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),l=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,b={};function g(e,n,t){this.props=e,this.context=n,this.refs=b,this.updater=t||y}function m(){}function k(e,n,t){this.props=e,this.context=n,this.refs=b,this.updater=t||y}g.prototype.isReactComponent={},g.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=g.prototype;var _=k.prototype=new m;_.constructor=k,h(_,g.prototype),_.isPureReactComponent=!0;var v=Array.isArray,w=Object.prototype.hasOwnProperty,j={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function x(e,n,r){var o,a={},u=null,c=null;if(null!=n)for(o in void 0!==n.ref&&(c=n.ref),void 0!==n.key&&(u=""+n.key),n)w.call(n,o)&&!S.hasOwnProperty(o)&&(a[o]=n[o]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var i=Array(l),s=0;s<l;s++)i[s]=arguments[s+2];a.children=i}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===a[o]&&(a[o]=l[o]);return{$$typeof:t,type:e,key:u,ref:c,props:a,_owner:j.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var P=/\/+/g;function R(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function C(e,n,o,a,u){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var l=!1;if(null===e)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case t:case r:l=!0}}if(l)return u=u(l=e),e=""===a?"."+R(l,0):a,v(u)?(o="",null!=e&&(o=e.replace(P,"$&/")+"/"),C(u,n,o,"",(function(e){return e}))):null!=u&&(E(u)&&(u=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||l&&l.key===u.key?"":(""+u.key).replace(P,"$&/")+"/")+e)),n.push(u)),1;if(l=0,a=""===a?".":a+":",v(e))for(var i=0;i<e.length;i++){var s=a+R(c=e[i],i);l+=C(c,n,o,s,u)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),i=0;!(c=e.next()).done;)l+=C(c=c.value,n,o,s=a+R(c,i++),u);else if("object"===c)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function $(e,n,t){if(null==e)return e;var r=[],o=0;return C(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function O(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},N={transition:null},B={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:N,ReactCurrentOwner:j};n.Children={map:$,forEach:function(e,n,t){$(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return $(e,(function(){n++})),n},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=g,n.Fragment=o,n.Profiler=u,n.PureComponent=k,n.StrictMode=a,n.Suspense=s,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,n.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),a=e.key,u=e.ref,c=e._owner;if(null!=n){if(void 0!==n.ref&&(u=n.ref,c=j.current),void 0!==n.key&&(a=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(i in n)w.call(n,i)&&!S.hasOwnProperty(i)&&(o[i]=void 0===n[i]&&void 0!==l?l[i]:n[i])}var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){l=Array(i);for(var s=0;s<i;s++)l[s]=arguments[s+2];o.children=l}return{$$typeof:t,type:e.type,key:a,ref:u,props:o,_owner:c}},n.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},n.createElement=x,n.createFactory=function(e){var n=x.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:i,render:e}},n.isValidElement=E,n.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:O}},n.memo=function(e,n){return{$$typeof:f,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=N.transition;N.transition={};try{e()}finally{N.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return I.current.useCallback(e,n)},n.useContext=function(e){return I.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return I.current.useDeferredValue(e)},n.useEffect=function(e,n){return I.current.useEffect(e,n)},n.useId=function(){return I.current.useId()},n.useImperativeHandle=function(e,n,t){return I.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return I.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return I.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return I.current.useMemo(e,n)},n.useReducer=function(e,n,t){return I.current.useReducer(e,n,t)},n.useRef=function(e){return I.current.useRef(e)},n.useState=function(e){return I.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return I.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return I.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>a});var r=t(667294);const o=r.createContext({});function a(e){const n=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const u={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||u:a(e),r.createElement(o.Provider,{value:c},n)}}}]);