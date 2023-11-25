/*! For license information please see b5784da7.886fe77f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[635360],{56005:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=t(824246),o=t(511151);const i={id:"frontend-plugin-api.createsigninpageextension",title:"createSignInPageExtension()",description:"API reference for createSignInPageExtension()"},a=void 0,s={id:"reference/frontend-plugin-api.createsigninpageextension",title:"createSignInPageExtension()",description:"API reference for createSignInPageExtension()",source:"@site/../docs/reference/frontend-plugin-api.createsigninpageextension.md",sourceDirName:"reference",slug:"/reference/frontend-plugin-api.createsigninpageextension",permalink:"/docs/reference/frontend-plugin-api.createsigninpageextension",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/frontend-plugin-api.createsigninpageextension.md",tags:[],version:"current",frontMatter:{id:"frontend-plugin-api.createsigninpageextension",title:"createSignInPageExtension()",description:"API reference for createSignInPageExtension()"}},c={},u=[{value:"Parameters",id:"parameters",level:2}];function f(e){const n=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api",children:(0,r.jsx)(n.code,{children:"@backstage/frontend-plugin-api"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.createsigninpageextension",children:(0,r.jsx)(n.code,{children:"createSignInPageExtension"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function createSignInPageExtension<TConfig extends {}, TInputs extends AnyExtensionInputMap>(options: {\n    id: string;\n    attachTo?: {\n        id: string;\n        input: string;\n    };\n    configSchema?: PortableSchema<TConfig>;\n    disabled?: boolean;\n    inputs?: TInputs;\n    loader: (options: {\n        config: TConfig;\n        inputs: Expand<ExtensionInputValues<TInputs>>;\n    }) => Promise<ComponentType<SignInPageProps>>;\n}): Extension<TConfig>;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsxs)(n.td,{children:["{ id: string; attachTo?: { id: string; input: string; }; configSchema?: ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.portableschema",children:"PortableSchema"}),"<TConfig>; disabled?: boolean; inputs?: TInputs; loader: (options: { config: TConfig; inputs: Expand<",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensioninputvalues",children:"ExtensionInputValues"}),"<TInputs>>; }) => Promise<ComponentType<",(0,r.jsx)(n.a,{href:"/docs/reference/core-app-api.signinpageprops",children:"SignInPageProps"}),">>; }"]}),(0,r.jsx)(n.td,{})]})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extension",children:"Extension"}),"<TConfig>"]})]})}const l=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(f,e)})):f(e)}},371426:(e,n,t)=>{var r=t(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,n,t){var r,i={},u=null,f=null;for(r in void 0!==t&&(u=""+t),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(f=n.ref),n)a.call(n,r)&&!c.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:u,ref:f,props:i,_owner:s.current}}n.Fragment=i,n.jsx=u,n.jsxs=u},541535:(e,n)=>{var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,g={};function m(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||h}function x(){}function b(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=m.prototype;var _=b.prototype=new x;_.constructor=b,y(_,m.prototype),_.isPureReactComponent=!0;var v=Array.isArray,j=Object.prototype.hasOwnProperty,S={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function P(e,n,r){var o,i={},a=null,s=null;if(null!=n)for(o in void 0!==n.ref&&(s=n.ref),void 0!==n.key&&(a=""+n.key),n)j.call(n,o)&&!E.hasOwnProperty(o)&&(i[o]=n[o]);var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){for(var u=Array(c),f=0;f<c;f++)u[f]=arguments[f+2];i.children=u}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===i[o]&&(i[o]=c[o]);return{$$typeof:t,type:e,key:a,ref:s,props:i,_owner:S.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var C=/\/+/g;function I(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function w(e,n,o,i,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case t:case r:c=!0}}if(c)return a=a(c=e),e=""===i?"."+I(c,0):i,v(a)?(o="",null!=e&&(o=e.replace(C,"$&/")+"/"),w(a,n,o,"",(function(e){return e}))):null!=a&&(k(a)&&(a=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+e)),n.push(a)),1;if(c=0,i=""===i?".":i+":",v(e))for(var u=0;u<e.length;u++){var f=i+I(s=e[u],u);c+=w(s,n,o,f,a)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),u=0;!(s=e.next()).done;)c+=w(s=s.value,n,o,f=i+I(s,u++),a);else if("object"===s)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return c}function R(e,n,t){if(null==e)return e;var r=[],o=0;return w(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function T(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},O={transition:null},A={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:O,ReactCurrentOwner:S};n.Children={map:R,forEach:function(e,n,t){R(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return R(e,(function(){n++})),n},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=m,n.Fragment=o,n.Profiler=a,n.PureComponent=b,n.StrictMode=i,n.Suspense=f,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,n.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),i=e.key,a=e.ref,s=e._owner;if(null!=n){if(void 0!==n.ref&&(a=n.ref,s=S.current),void 0!==n.key&&(i=""+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in n)j.call(n,u)&&!E.hasOwnProperty(u)&&(o[u]=void 0===n[u]&&void 0!==c?c[u]:n[u])}var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){c=Array(u);for(var f=0;f<u;f++)c[f]=arguments[f+2];o.children=c}return{$$typeof:t,type:e.type,key:i,ref:a,props:o,_owner:s}},n.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},n.createElement=P,n.createFactory=function(e){var n=P.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:u,render:e}},n.isValidElement=k,n.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:T}},n.memo=function(e,n){return{$$typeof:l,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=O.transition;O.transition={};try{e()}finally{O.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return $.current.useCallback(e,n)},n.useContext=function(e){return $.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return $.current.useDeferredValue(e)},n.useEffect=function(e,n){return $.current.useEffect(e,n)},n.useId=function(){return $.current.useId()},n.useImperativeHandle=function(e,n,t){return $.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return $.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return $.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return $.current.useMemo(e,n)},n.useReducer=function(e,n,t){return $.current.useReducer(e,n,t)},n.useRef=function(e){return $.current.useRef(e)},n.useState=function(e){return $.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return $.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return $.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>s,ah:()=>i});var r=t(667294);const o=r.createContext({});function i(e){const n=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function s({components:e,children:n,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||a:i(e),r.createElement(o.Provider,{value:s},n)}}}]);