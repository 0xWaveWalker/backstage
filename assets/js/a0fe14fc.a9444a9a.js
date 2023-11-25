/*! For license information please see a0fe14fc.a9444a9a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[59129],{435834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(824246),i=n(511151);const o={id:"getting-started",title:"Getting Started",description:"How to get started with the permission framework as an integrator"},s=void 0,a={id:"permissions/getting-started",title:"Getting Started",description:"How to get started with the permission framework as an integrator",source:"@site/../docs/permissions/getting-started.md",sourceDirName:"permissions",slug:"/permissions/getting-started",permalink:"/docs/permissions/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/permissions/getting-started.md",tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started",description:"How to get started with the permission framework as an integrator"},sidebar:"docs",previous:{title:"Concepts",permalink:"/docs/permissions/concepts"},next:{title:"Writing a permission policy",permalink:"/docs/permissions/writing-a-policy"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Upgrade to the latest version of Backstage",id:"upgrade-to-the-latest-version-of-backstage",level:3},{value:"Enable service-to-service authentication",id:"enable-service-to-service-authentication",level:3},{value:"Supply an identity resolver to populate group membership on sign in",id:"supply-an-identity-resolver-to-populate-group-membership-on-sign-in",level:3},{value:"Optionally add cookie-based authentication",id:"optionally-add-cookie-based-authentication",level:2},{value:"Integrating the permission framework with your Backstage instance",id:"integrating-the-permission-framework-with-your-backstage-instance",level:2},{value:"1. Set up the permission backend",id:"1-set-up-the-permission-backend",level:3},{value:"2. Enable and test the permissions system",id:"2-enable-and-test-the-permissions-system",level:3}];function u(e){const t=Object.assign({p:"p",iframe:"iframe",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",a:"a",strong:"strong",ol:"ol",li:"li",pre:"pre",img:"img"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"If you prefer to watch a video instead, you can start with this video introduction:"}),"\n",(0,r.jsx)(t.iframe,{width:"560",height:"315",src:"https://www.youtube.com/embed/EQr9tFClgG0",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Note: This video was recorded in the January 2022 Contributors Session using ",(0,r.jsx)(t.code,{children:"@backstage/create-app@0.4.14"}),". Some aspects of the demo may have changed in later releases."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Backstage integrators control permissions by writing a policy. In general terms, a policy is simply an async function which receives a request to authorize a specific action for a user and (optional) resource, and returns a decision on whether to authorize that permission. Integrators can implement their own policies from scratch, or adopt reusable policies written by others."}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(t.p,{children:"The permissions framework depends on a few other Backstage systems, which must be set up before we can dive into writing a policy."}),"\n",(0,r.jsx)(t.h3,{id:"upgrade-to-the-latest-version-of-backstage",children:"Upgrade to the latest version of Backstage"}),"\n",(0,r.jsxs)(t.p,{children:["The permissions framework itself is new to Backstage and still evolving quickly. To ensure your version of Backstage has all the latest permission-related functionality, it\u2019s important to upgrade to the latest version. The ",(0,r.jsx)(t.a,{href:"https://backstage.github.io/upgrade-helper/",children:"Backstage upgrade helper"})," is a great tool to help ensure that you\u2019ve made all the necessary changes during the upgrade!"]}),"\n",(0,r.jsx)(t.h3,{id:"enable-service-to-service-authentication",children:"Enable service-to-service authentication"}),"\n",(0,r.jsx)(t.p,{children:"Service-to-service authentication allows Backstage backend code to verify that a given request originates from elsewhere in the Backstage backend. This is useful for tasks like collation of catalog entities in the search index. This type of request shouldn\u2019t be permissioned, so it\u2019s important to configure this feature before trying to use the permissions framework."}),"\n",(0,r.jsxs)(t.p,{children:["To set up service-to-service authentication, follow the ",(0,r.jsx)(t.a,{href:"/docs/auth/service-to-service-auth",children:"service-to-service authentication docs"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"supply-an-identity-resolver-to-populate-group-membership-on-sign-in",children:"Supply an identity resolver to populate group membership on sign in"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note"}),": If you are working off of an existing Backstage instance, you likely already have some form of an identity resolver set up."]}),"\n",(0,r.jsx)(t.p,{children:"Like many other parts of Backstage, the permissions framework relies on information about group membership. This simplifies authoring policies through the use of groups, rather than requiring each user to be listed in the configuration. Group membership is also often useful for conditional permissions, for example allowing permissions to act on an entity to be granted when a user is a member of a group that owns that entity."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/auth/identity-resolver",children:"The IdentityResolver docs"})," describe the process for resolving group membership on sign in."]}),"\n",(0,r.jsx)(t.h2,{id:"optionally-add-cookie-based-authentication",children:"Optionally add cookie-based authentication"}),"\n",(0,r.jsxs)(t.p,{children:["Asset requests initiated by the browser will not include a token in the ",(0,r.jsx)(t.code,{children:"Authorization"})," header. If these requests check authorization through the permission framework, as done in plugins like TechDocs, then you'll need to set up cookie-based authentication. Refer to the ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/contrib/docs/tutorials/authenticate-api-requests.md",children:'"Authenticate API requests"'})," tutorial for a demonstration on how to implement this behavior."]}),"\n",(0,r.jsx)(t.h2,{id:"integrating-the-permission-framework-with-your-backstage-instance",children:"Integrating the permission framework with your Backstage instance"}),"\n",(0,r.jsx)(t.h3,{id:"1-set-up-the-permission-backend",children:"1. Set up the permission backend"}),"\n",(0,r.jsxs)(t.p,{children:["The permissions framework uses a new ",(0,r.jsx)(t.code,{children:"permission-backend"})," plugin to accept authorization requests from other plugins across your Backstage instance. The Backstage backend does not include this permission backend by default, so you will need to add it:"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Add ",(0,r.jsx)(t.code,{children:"@backstage/plugin-permission-backend"})," as a dependency of your Backstage backend:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# From your Backstage root directory\nyarn add --cwd packages/backend @backstage/plugin-permission-backend\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Add the following to a new file, ",(0,r.jsx)(t.code,{children:"packages/backend/src/plugins/permission.ts"}),". This adds the permission-backend router, and configures it with a policy which allows everything."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:'title="packages/backend/src/plugins/permission.ts"',children:"import { createRouter } from '@backstage/plugin-permission-backend';\nimport {\n  AuthorizeResult,\n  PolicyDecision,\n} from '@backstage/plugin-permission-common';\nimport { PermissionPolicy } from '@backstage/plugin-permission-node';\nimport { Router } from 'express';\nimport { PluginEnvironment } from '../types';\n\nclass TestPermissionPolicy implements PermissionPolicy {\n  async handle(): Promise<PolicyDecision> {\n    return { result: AuthorizeResult.ALLOW };\n  }\n}\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  return await createRouter({\n    config: env.config,\n    logger: env.logger,\n    discovery: env.discovery,\n    policy: new TestPermissionPolicy(),\n    identity: env.identity,\n  });\n}\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Wire up the permission policy in ",(0,r.jsx)(t.code,{children:"packages/backend/src/index.ts"}),". ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/packages/backend/src/index.ts",children:"The index in the example backend"})," shows how to do this. You\u2019ll need to import the module from the previous step, create a plugin environment, and add the router to the express app:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"import proxy from './plugins/proxy';\nimport techdocs from './plugins/techdocs';\nimport search from './plugins/search';\n/* highlight-add-next-line */\nimport permission from './plugins/permission';\n\nasync function main() {\n  const techdocsEnv = useHotMemoize(module, () => createEnv('techdocs'));\n  const searchEnv = useHotMemoize(module, () => createEnv('search'));\n  const appEnv = useHotMemoize(module, () => createEnv('app'));\n  /* highlight-add-next-line */\n  const permissionEnv = useHotMemoize(module, () => createEnv('permission'));\n  // ..\n\n  apiRouter.use('/techdocs', await techdocs(techdocsEnv));\n  apiRouter.use('/proxy', await proxy(proxyEnv));\n  apiRouter.use('/search', await search(searchEnv));\n  /* highlight-add-next-line */\n  apiRouter.use('/permission', await permission(permissionEnv));\n  // ..\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"2-enable-and-test-the-permissions-system",children:"2. Enable and test the permissions system"}),"\n",(0,r.jsx)(t.p,{children:"Now that the permission backend is running, it\u2019s time to enable the permissions framework and make sure it\u2019s working properly."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Set the property ",(0,r.jsx)(t.code,{children:"permission.enabled"})," to ",(0,r.jsx)(t.code,{children:"true"})," in ",(0,r.jsx)(t.code,{children:"app-config.yaml"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:'title="app-config.yaml"',children:"permission:\n  enabled: true\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Update the PermissionPolicy in ",(0,r.jsx)(t.code,{children:"packages/backend/src/plugins/permission.ts"})," to disable a permission that\u2019s easy for us to test. This policy rejects any attempt to delete a catalog entity:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/permission.ts"',children:"import { createRouter } from '@backstage/plugin-permission-backend';\nimport {\n  AuthorizeResult,\n  PolicyDecision,\n} from '@backstage/plugin-permission-common';\n/* highlight-remove-next-line */\nimport { PermissionPolicy } from '@backstage/plugin-permission-node';\n/* highlight-add-start */\nimport {\n  PermissionPolicy,\n  PolicyQuery,\n} from '@backstage/plugin-permission-node';\n/* highlight-add-end */\nimport { Router } from 'express';\nimport { PluginEnvironment } from '../types';\n\nclass TestPermissionPolicy implements PermissionPolicy {\n  /* highlight-remove-next-line */\n  async handle(): Promise<PolicyDecision> {\n  /* highlight-add-start */\n  async handle(request: PolicyQuery): Promise<PolicyDecision> {\n    if (request.permission.name === 'catalog.entity.delete') {\n      return {\n        result: AuthorizeResult.DENY,\n      };\n    }\n  /* highlight-add-end */\n\n    return { result: AuthorizeResult.ALLOW };\n  }\n}\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Now that you\u2019ve made this change, you should find that the unregister entity menu option on the catalog entity page is disabled."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Entity detail page showing disabled unregister entity context menu entry",src:n(95875).Z+"",width:"1600",height:"852"})}),"\n",(0,r.jsxs)(t.p,{children:["Now that the framework is fully configured, you can craft a permission policy that works best for your organization by utilizing a provided authorization method or by ",(0,r.jsx)(t.a,{href:"/docs/permissions/writing-a-policy",children:"writing your own policy"}),"!"]})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(u,e)})):u(e)}},95875:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/disabled-unregister-entity-2a5f6e9e5a4b44ebd7764017a154f076.png"},371426:(e,t,n)=>{var r=n(827378),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,o={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,r)&&!c.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:l,ref:u,props:o,_owner:a.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),h=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var k=v.prototype=new b;k.constructor=v,m(k,y.prototype),k.isPureReactComponent=!0;var x=Array.isArray,w=Object.prototype.hasOwnProperty,j={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,r){var i,o={},s=null,a=null;if(null!=t)for(i in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)w.call(t,i)&&!_.hasOwnProperty(i)&&(o[i]=t[i]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps)void 0===o[i]&&(o[i]=c[i]);return{$$typeof:n,type:e,key:s,ref:a,props:o,_owner:j.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var S=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,i,o,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return s=s(c=e),e=""===o?"."+R(c,0):o,x(s)?(i="",null!=e&&(i=e.replace(S,"$&/")+"/"),T(s,t,i,"",(function(e){return e}))):null!=s&&(E(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,i+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(S,"$&/")+"/")+e)),t.push(s)),1;if(c=0,o=""===o?".":o+":",x(e))for(var l=0;l<e.length;l++){var u=o+R(a=e[l],l);c+=T(a,t,i,u,s)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(a=e.next()).done;)c+=T(a=a.value,t,i,u=o+R(a,l++),s);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function C(e,t,n){if(null==e)return e;var r=[],i=0;return T(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},q={transition:null},I={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:q,ReactCurrentOwner:j};t.Children={map:C,forEach:function(e,t,n){C(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=i,t.Profiler=s,t.PureComponent=v,t.StrictMode=o,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=m({},e.props),o=e.key,s=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,a=j.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)w.call(t,l)&&!_.hasOwnProperty(l)&&(i[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)i.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:n,type:e.type,key:o,ref:s,props:i,_owner:a}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=P,t.createFactory=function(e){var t=P.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=q.transition;q.transition={};try{e()}finally{q.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return $.current.useCallback(e,t)},t.useContext=function(e){return $.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return $.current.useDeferredValue(e)},t.useEffect=function(e,t){return $.current.useEffect(e,t)},t.useId=function(){return $.current.useId()},t.useImperativeHandle=function(e,t,n){return $.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return $.current.useMemo(e,t)},t.useReducer=function(e,t,n){return $.current.useReducer(e,t,n)},t.useRef=function(e){return $.current.useRef(e)},t.useState=function(e){return $.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return $.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return $.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>o});var r=n(667294);const i=r.createContext({});function o(e){const t=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||s:o(e),r.createElement(i.Provider,{value:a},t)}}}]);