/*! For license information please see 27ecabd7.59ba0207.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[973514],{795735:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>f,frontMatter:()=>u,metadata:()=>c,toc:()=>l});var n=r(824246),o=r(511151);const u={id:"plugin-shortcuts.shortcutsprops.allowexternallinks",title:"ShortcutsProps.allowExternalLinks",description:"API reference for ShortcutsProps.allowExternalLinks"},s=void 0,c={id:"reference/plugin-shortcuts.shortcutsprops.allowexternallinks",title:"ShortcutsProps.allowExternalLinks",description:"API reference for ShortcutsProps.allowExternalLinks",source:"@site/../docs/reference/plugin-shortcuts.shortcutsprops.allowexternallinks.md",sourceDirName:"reference",slug:"/reference/plugin-shortcuts.shortcutsprops.allowexternallinks",permalink:"/docs/reference/plugin-shortcuts.shortcutsprops.allowexternallinks",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-shortcuts.shortcutsprops.allowexternallinks.md",tags:[],version:"current",frontMatter:{id:"plugin-shortcuts.shortcutsprops.allowexternallinks",title:"ShortcutsProps.allowExternalLinks",description:"API reference for ShortcutsProps.allowExternalLinks"}},a={},l=[];function i(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-shortcuts",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-shortcuts"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-shortcuts.shortcutsprops",children:(0,n.jsx)(t.code,{children:"ShortcutsProps"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-shortcuts.shortcutsprops.allowexternallinks",children:(0,n.jsx)(t.code,{children:"allowExternalLinks"})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"allowExternalLinks?: boolean;\n"})})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(i,e)})):i(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,u={},l=null,i=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(i=t.ref),t)s.call(t,n)&&!a.hasOwnProperty(n)&&(u[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===u[n]&&(u[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:i,props:u,_owner:c.current}}t.Fragment=u,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),a=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),i=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,_={};function m(e,t,r){this.props=e,this.context=t,this.refs=_,this.updater=r||y}function b(){}function v(e,t,r){this.props=e,this.context=t,this.refs=_,this.updater=r||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var k=v.prototype=new b;k.constructor=v,h(k,m.prototype),k.isPureReactComponent=!0;var x=Array.isArray,g=Object.prototype.hasOwnProperty,S={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var o,u={},s=null,c=null;if(null!=t)for(o in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(s=""+t.key),t)g.call(t,o)&&!w.hasOwnProperty(o)&&(u[o]=t[o]);var a=arguments.length-2;if(1===a)u.children=n;else if(1<a){for(var l=Array(a),i=0;i<a;i++)l[i]=arguments[i+2];u.children=l}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===u[o]&&(u[o]=a[o]);return{$$typeof:r,type:e,key:s,ref:c,props:u,_owner:S.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var P=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,o,u,s){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var a=!1;if(null===e)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case r:case n:a=!0}}if(a)return s=s(a=e),e=""===u?"."+R(a,0):u,x(s)?(o="",null!=e&&(o=e.replace(P,"$&/")+"/"),C(s,t,o,"",(function(e){return e}))):null!=s&&(j(s)&&(s=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(P,"$&/")+"/")+e)),t.push(s)),1;if(a=0,u=""===u?".":u+":",x(e))for(var l=0;l<e.length;l++){var i=u+R(c=e[l],l);a+=C(c,t,o,i,s)}else if(i=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof i)for(e=i.call(e),l=0;!(c=e.next()).done;)a+=C(c=c.value,t,o,i=u+R(c,l++),s);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function $(e,t,r){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},L={transition:null},T={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:L,ReactCurrentOwner:S};t.Children={map:$,forEach:function(e,t,r){$(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!j(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=s,t.PureComponent=v,t.StrictMode=u,t.Suspense=i,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),u=e.key,s=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,c=S.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)g.call(t,l)&&!w.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==a?a[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){a=Array(l);for(var i=0;i<l;i++)a[i]=arguments[i+2];o.children=a}return{$$typeof:r,type:e.type,key:u,ref:s,props:o,_owner:c}},t.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=j,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=L.transition;L.transition={};try{e()}finally{L.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return I.current.useCallback(e,t)},t.useContext=function(e){return I.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return I.current.useDeferredValue(e)},t.useEffect=function(e,t){return I.current.useEffect(e,t)},t.useId=function(){return I.current.useId()},t.useImperativeHandle=function(e,t,r){return I.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return I.current.useMemo(e,t)},t.useReducer=function(e,t,r){return I.current.useReducer(e,t,r)},t.useRef=function(e){return I.current.useRef(e)},t.useState=function(e){return I.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return I.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return I.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>c,ah:()=>u});var n=r(667294);const o=n.createContext({});function u(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function c({components:e,children:t,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||s:u(e),n.createElement(o.Provider,{value:c},t)}}}]);