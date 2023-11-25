/*! For license information please see bdf36d34.bbfeb907.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[454620],{930111:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(824246),o=n(511151);const a={id:"service-to-service-auth",title:"Service to Service Auth",description:"This section describes how to use service to service authentication, both internally within Backstage plugins and towards external services."},s=void 0,i={id:"auth/service-to-service-auth",title:"Service to Service Auth",description:"This section describes how to use service to service authentication, both internally within Backstage plugins and towards external services.",source:"@site/../docs/auth/service-to-service-auth.md",sourceDirName:"auth",slug:"/auth/service-to-service-auth",permalink:"/docs/auth/service-to-service-auth",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/auth/service-to-service-auth.md",tags:[],version:"current",frontMatter:{id:"service-to-service-auth",title:"Service to Service Auth",description:"This section describes how to use service to service authentication, both internally within Backstage plugins and towards external services."},sidebar:"docs",previous:{title:"Contributing New Providers",permalink:"/docs/auth/add-auth-provider"},next:{title:"Auto Logout",permalink:"/docs/auth/autologout"}},c={},u=[{value:"Setup",id:"setup",level:2},{value:"Usage in Backend Plugins",id:"usage-in-backend-plugins",level:2},{value:"Usage in External Callers",id:"usage-in-external-callers",level:2},{value:"Granular Access Control",id:"granular-access-control",level:2}];function l(e){const t=Object.assign({p:"p",em:"em",h2:"h2",code:"code",pre:"pre",strong:"strong",ul:"ul",li:"li",blockquote:"blockquote",a:"a"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["This article describes the steps needed to introduce ",(0,r.jsx)(t.em,{children:"service-to-service auth"})," (formerly ",(0,r.jsx)(t.em,{children:"backend-to-backend"})," auth).\nThis allows plugin backends to determine whether a given request originates from\na legitimate Backstage plugin (or other external caller), by requiring a special\ntype of service-to-service token which is signed with a shared secret."]}),"\n",(0,r.jsx)(t.p,{children:"When enabling this protection on your Backstage backend plugins, for example the\ncatalog, other callers in the ecosystem such as the search indexer and\nscaffolder would need to present a valid token to the catalog to be able to\nrequest its contents."}),"\n",(0,r.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsxs)(t.p,{children:["In a newly created Backstage app, the backend is setup up to not require any\nauth at all. This means that generated service-to-service tokens are empty, and\nthat incoming requests are not validated. If you want to enable\nservice-to-service auth, the first step is to switch out the following line in\nyour backend setup at ",(0,r.jsx)(t.code,{children:"packages/backend/src/index.ts"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"/* highlight-remove-next-line */\nconst tokenManager = ServerTokenManager.noop();\n/* highlight-add-next-line */\nconst tokenManager = ServerTokenManager.fromConfig(config, { logger: root });\n"})}),"\n",(0,r.jsxs)(t.p,{children:["By switching from the no-op ",(0,r.jsx)(t.code,{children:"ServiceTokenManager"})," to one created from config,\nyou enable service-to-service auth for any plugin that implements it. The local\ndevelopment setup will generally not be impacted by this, as temporary keys are\ngenerated under the hood. But for the production setup, this means you must now\nprovide a shared secret that enables your backend plugins to communicate with\neach other."]}),"\n",(0,r.jsx)(t.p,{children:"Backstage service-to-service tokens are currently always signed with a single\nsecret key. It needs to be shared across all backend plugins and services that\nones wishes to communicate across. The key can be any base64 encoded secret.\nThe following command can be used to generate such a key in a terminal:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'node -p \'require("crypto").randomBytes(24).toString("base64")\'\n'})}),"\n",(0,r.jsx)(t.p,{children:"Then place it in the backend configuration, either as a direct value or\ninjected as an env variable."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"# commonly in your app-config.production.yaml\nbackend:\n  auth:\n    keys:\n      - secret: <the string returned by the above crypto command>\n    # - secret: ${BACKEND_SECRET} - if you want to use an env variable instead\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"NOTE"}),": For ease of development, we auto-generate a key for you if you haven't\nconfigured a secret in dev mode. You ",(0,r.jsx)(t.em,{children:"must set your own secret"})," in order for\nservice-to-service auth to work in production; the ",(0,r.jsx)(t.code,{children:"ServiceTokenManager"})," will\nthrow an exception in production if it has no keys to work with, which will lead\nto the backend failing to start up."]}),"\n",(0,r.jsx)(t.h2,{id:"usage-in-backend-plugins",children:"Usage in Backend Plugins"}),"\n",(0,r.jsxs)(t.p,{children:["There are a few steps if you want to make use of the service-to-service auth in\nyour own backend plugin. First you need to add the ",(0,r.jsx)(t.code,{children:"TokenManager"})," dependency to\nthe ",(0,r.jsx)(t.code,{children:"createRouter"})," options. Typically as ",(0,r.jsx)(t.code,{children:"tokenManager: TokenManager"}),". Along\nwith this you'll need to ask users to start providing this new dependency in\ntheir backend setup code."]}),"\n",(0,r.jsxs)(t.p,{children:["Once the ",(0,r.jsx)(t.code,{children:"TokenManager"})," is available, you use the ",(0,r.jsx)(t.code,{children:".getToken()"})," method to generate\na new token for any outgoing requests towards other Backstage backend plugins.\nThis method should be called for every request that you make; do not store the\ntoken for later use. The ",(0,r.jsx)(t.code,{children:"TokenManager"})," implementations should already cache\ntokens as needed. The returned token should then be added as a ",(0,r.jsx)(t.code,{children:"Bearer"})," token\nfor the upstream request, for example:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const { token } = await this.tokenManager.getToken();\n\nconst response = await fetch(pluginBackendApiUrl, {\n  method: 'GET',\n  headers: {\n    ...headers,\n    Authorization: `Bearer ${token}`,\n  },\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["To authenticate an incoming request you use the ",(0,r.jsx)(t.code,{children:".authenticate(token)"})," method.\nAt the time of writing this method doesn't return anything, it will simply\nthrow if the token is invalid."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"await tokenManager.authenticate(token); // throws if token is invalid\n"})}),"\n",(0,r.jsx)(t.h2,{id:"usage-in-external-callers",children:"Usage in External Callers"}),"\n",(0,r.jsx)(t.p,{children:"If you have enabled server-to-server auth, you may be interested in generating\ntokens in code that is external to Backstage itself. External callers may even\nbe written in other languages than Node.js. This section explains how to generate\na valid token yourself."}),"\n",(0,r.jsxs)(t.p,{children:["The token must be a JWT with a ",(0,r.jsx)(t.code,{children:"HS256"})," signature, using the raw base64 decoded\nvalue of the configured key as the secret. It must also have the following payload:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"sub"}),': "backstage-server" (only this value supported currently)']}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"exp"}),": one hour from the time it was generated, in epoch seconds"]}),"\n"]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["NOTE: The JWT must encode the ",(0,r.jsx)(t.code,{children:"alg"})," header as a protected header, such as with\n",(0,r.jsx)(t.a,{href:"https://github.com/panva/jose/blob/main/docs/classes/jwt_sign.SignJWT.md#setprotectedheader",children:"setProtectedHeader"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"granular-access-control",children:"Granular Access Control"}),"\n",(0,r.jsx)(t.p,{children:"We plan to build out the service-to-service auth to be much more powerful in the\nfuture, but before that is done there are a few tricks you can use with the\ncurrent system to harden your deployments. This section assumes that you have\nalready split your backend plugins into more than one backend deployment, in\norder to scale or isolate them."}),"\n",(0,r.jsx)(t.p,{children:"The backend auth configuration has support for providing multiple keys, for\nexample:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"backend:\n  auth:\n    keys:\n      - secret: my-secret-key-1\n      - secret: my-secret-key-2\n      - secret: my-secret-key-3\n"})}),"\n",(0,r.jsx)(t.p,{children:"The first key will be used for signing requests, while all of the keys will be\nused for validation. This means that you can set up an asymmetric configuration\nwhere some backend deployments do not have access to each other."}),"\n",(0,r.jsx)(t.p,{children:"For example, consider the case where we have split up the catalog, scaffolder,\nand search plugin into three separate backend deployments. We can use the\nfollowing configurations to allow both the scaffolder and search plugin to speak\nto the\ncatalog, but not the other way around, and to not allow any communication between\nthe scaffolder and search plugins."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"# catalog config\nbackend:\n  auth:\n    keys:\n      - secret: my-secret-key-catalog\n      - secret: my-secret-key-scaffolder\n      - secret: my-secret-key-search\n\n# scaffolder config\nbackend:\n  auth:\n    keys:\n      - secret: my-secret-key-scaffolder\n\n# search config\nbackend:\n  auth:\n    keys:\n      - secret: my-secret-key-search\n"})})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,a={},u=null,l=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,r)&&!c.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:l,props:a,_owner:i.current}}t.Fragment=a,t.jsx=u,t.jsxs=u},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),f=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,g={};function m(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}function v(){}function k(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=m.prototype;var b=k.prototype=new v;b.constructor=k,y(b,m.prototype),b.isPureReactComponent=!0;var x=Array.isArray,w=Object.prototype.hasOwnProperty,j={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var o,a={},s=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)w.call(t,o)&&!_.hasOwnProperty(o)&&(a[o]=t[o]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];a.children=u}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:n,type:e,key:s,ref:i,props:a,_owner:j.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,o,a,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return s=s(c=e),e=""===a?"."+C(c,0):a,x(s)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),R(s,t,o,"",(function(e){return e}))):null!=s&&(T(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(E,"$&/")+"/")+e)),t.push(s)),1;if(c=0,a=""===a?".":a+":",x(e))for(var u=0;u<e.length;u++){var l=a+C(i=e[u],u);c+=R(i,t,o,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(i=e.next()).done;)c+=R(i=i.value,t,o,l=a+C(i,u++),s);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function O(e,t,n){if(null==e)return e;var r=[],o=0;return R(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},B={transition:null},M={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:B,ReactCurrentOwner:j};t.Children={map:O,forEach:function(e,t,n){O(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!T(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=s,t.PureComponent=k,t.StrictMode=a,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),a=e.key,s=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,i=j.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)w.call(t,u)&&!_.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==c?c[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){c=Array(u);for(var l=0;l<u;l++)c[l]=arguments[l+2];o.children=c}return{$$typeof:n,type:e.type,key:a,ref:s,props:o,_owner:i}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=T,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=B.transition;B.transition={};try{e()}finally{B.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return P.current.useCallback(e,t)},t.useContext=function(e){return P.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return P.current.useDeferredValue(e)},t.useEffect=function(e,t){return P.current.useEffect(e,t)},t.useId=function(){return P.current.useId()},t.useImperativeHandle=function(e,t,n){return P.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return P.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return P.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return P.current.useMemo(e,t)},t.useReducer=function(e,t,n){return P.current.useReducer(e,t,n)},t.useRef=function(e){return P.current.useRef(e)},t.useState=function(e){return P.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return P.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return P.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>i,ah:()=>a});var r=n(667294);const o=r.createContext({});function a(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||s:a(e),r.createElement(o.Provider,{value:i},t)}}}]);