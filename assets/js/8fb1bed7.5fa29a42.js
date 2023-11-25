/*! For license information please see 8fb1bed7.5fa29a42.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[817710],{118635:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(824246),i=n(511151);const o={id:"integrating-plugin-into-software-catalog",title:"Integrate into the Software Catalog",description:"How to integrate a plugin into software catalog"},a=void 0,s={id:"plugins/integrating-plugin-into-software-catalog",title:"Integrate into the Software Catalog",description:"How to integrate a plugin into software catalog",source:"@site/../docs/plugins/integrating-plugin-into-software-catalog.md",sourceDirName:"plugins",slug:"/plugins/integrating-plugin-into-software-catalog",permalink:"/docs/plugins/integrating-plugin-into-software-catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/plugins/integrating-plugin-into-software-catalog.md",tags:[],version:"current",frontMatter:{id:"integrating-plugin-into-software-catalog",title:"Integrate into the Software Catalog",description:"How to integrate a plugin into software catalog"},sidebar:"docs",previous:{title:"Structure of a Plugin",permalink:"/docs/plugins/structure-of-a-plugin"},next:{title:"Integrating Search into a plugin",permalink:"/docs/plugins/integrating-search-into-plugins"}},u={},c=[{value:"Steps",id:"steps",level:2},{value:"Create a plugin",id:"create-a-plugin",level:3},{value:"Reading entities from within your plugin",id:"reading-entities-from-within-your-plugin",level:3},{value:"Import your plugin and embed in the entities page",id:"import-your-plugin-and-embed-in-the-entities-page",level:3}];function l(e){const t=Object.assign({blockquote:"blockquote",p:"p",h2:"h2",ol:"ol",li:"li",a:"a",h3:"h3",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"This is an advanced use case and currently is an experimental feature. Expect\nAPI to change over time"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#create-a-plugin",children:"Create a plugin"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#reading-entities-from-within-your-plugin",children:"Reading entities from within your plugin"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#import-your-plugin-and-embed-in-the-entities-page",children:"Import your plugin and embed in the entities page"})}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"create-a-plugin",children:"Create a plugin"}),"\n",(0,r.jsxs)(t.p,{children:["Follow the ",(0,r.jsx)(t.a,{href:"/docs/plugins/create-a-plugin",children:"same process"})," as for standalone plugin. You\nshould have a separate package in a folder, which represents your plugin."]}),"\n",(0,r.jsx)(t.p,{children:"Example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"$ yarn new --select plugin\n> ? Enter an ID for the plugin [required] my-plugin\n> ? Enter the owner(s) of the plugin. If specified, this will be added to CODEOWNERS for the plugin path. [optional]\n\nCreating the plugin...\n"})}),"\n",(0,r.jsx)(t.h3,{id:"reading-entities-from-within-your-plugin",children:"Reading entities from within your plugin"}),"\n",(0,r.jsxs)(t.p,{children:["You can access the currently selected entity using the backstage api\n",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog-react.useentity",children:(0,r.jsx)(t.code,{children:"useEntity"})}),". For example,"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useEntity } from '@backstage/plugin-catalog-react';\n\nexport const MyPluginEntityContent = () => {\n  const entity = useEntity();\n\n  // Do something with the entity data...\n};\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Internally ",(0,r.jsx)(t.code,{children:"useEntity"})," makes use of\n",(0,r.jsxs)(t.a,{href:"https://reactjs.org/docs/context.html",children:["react ",(0,r.jsx)(t.code,{children:"Context"}),"s"]}),". The entity context is\nprovided by the entity page into which your plugin will be embedded."]}),"\n",(0,r.jsx)(t.h3,{id:"import-your-plugin-and-embed-in-the-entities-page",children:"Import your plugin and embed in the entities page"}),"\n",(0,r.jsxs)(t.p,{children:["To begin, you will need to import your plugin in the entities page. Located at\n",(0,r.jsx)(t.code,{children:"packages/app/src/components/Catalog/EntityPage.tsx"})," from the root package of\nyour backstage app."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { MyPluginEntityContent } from '@backstage/plugin-my-plugin;\n"})}),"\n",(0,r.jsxs)(t.p,{children:["To add your component to the Entity view, you will need to modify the\n",(0,r.jsx)(t.code,{children:"packages/app/src/components/Catalog/EntityPage.tsx"}),". Depending on the needs of\nyour plugin, you may only care about certain kinds of\n",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/descriptor-format",children:"entities"}),",\neach of which has its own\n",(0,r.jsx)(t.a,{href:"https://reactjs.org/docs/rendering-elements.html",children:"element"})," for rendering. This\nfunctionality is handled by the ",(0,r.jsx)(t.code,{children:"EntitySwitch"})," component:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"export const entityPage = (\n  <EntitySwitch>\n    <EntitySwitch.Case if={isKind('component')} children={componentPage} />\n    <EntitySwitch.Case if={isKind('api')} children={apiPage} />\n    <EntitySwitch.Case if={isKind('group')} children={groupPage} />\n    <EntitySwitch.Case if={isKind('user')} children={userPage} />\n    <EntitySwitch.Case if={isKind('system')} children={systemPage} />\n    <EntitySwitch.Case if={isKind('domain')} children={domainPage} />\n\n    <EntitySwitch.Case>{defaultEntityPage}</EntitySwitch.Case>\n  </EntitySwitch>\n);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["At this point, you will need to modify the specific page where you want your\ncomponent to appear. If you are extending the Software Catalog model you will\nneed to add a new case to the ",(0,r.jsx)(t.code,{children:"EntitySwitch"}),". For adding a plugin to an existing\ncomponent type, you modify the existing page. For example, if you want to add\nyour plugin to the ",(0,r.jsx)(t.code,{children:"systemPage"}),", you can add a new tab by adding an\n",(0,r.jsx)(t.code,{children:"EntityLayout.Route"})," such as below:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'const systemPage = (\n  <EntityLayout>\n    <EntityLayout.Route path="/" title="Overview">\n      <Grid container spacing={3} alignItems="stretch">\n        <Grid item md={6}>\n          <EntityAboutCard variant="gridItem" />\n        </Grid>\n        <Grid item md={6}>\n          <EntityHasComponentsCard variant="gridItem" />\n        </Grid>\n        <Grid item md={6}>\n          <EntityHasApisCard variant="gridItem" />\n        </Grid>\n        <Grid item md={6}>\n          <EntityHasResourcesCard variant="gridItem" />\n        </Grid>\n      </Grid>\n    </EntityLayout.Route>\n    <EntityLayout.Route path="/diagram" title="Diagram">\n      <EntityCatalogGraphCard variant="gridItem" height={400} />\n    </EntityLayout.Route>\n\n    {/* Adding a new tab to the system view */}\n    <EntityLayout.Route path="/your-custom-route" title="CustomTitle">\n      <MyPluginEntityContent />\n    </EntityLayout.Route>\n  </EntityLayout>\n);\n'})})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},371426:(e,t,n)=>{var r=n(827378),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,l=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,r)&&!u.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:c,ref:l,props:o,_owner:s.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,g={};function m(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function w(){}function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=m.prototype;var b=x.prototype=new w;b.constructor=x,y(b,m.prototype),b.isPureReactComponent=!0;var v=Array.isArray,E=Object.prototype.hasOwnProperty,j={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var i,o={},a=null,s=null;if(null!=t)for(i in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)E.call(t,i)&&!_.hasOwnProperty(i)&&(o[i]=t[i]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var c=Array(u),l=0;l<u;l++)c[l]=arguments[l+2];o.children=c}if(e&&e.defaultProps)for(i in u=e.defaultProps)void 0===o[i]&&(o[i]=u[i]);return{$$typeof:n,type:e,key:a,ref:s,props:o,_owner:j.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var k=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,i,o,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var u=!1;if(null===e)u=!0;else switch(s){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0}}if(u)return a=a(u=e),e=""===o?"."+R(u,0):o,v(a)?(i="",null!=e&&(i=e.replace(k,"$&/")+"/"),P(a,t,i,"",(function(e){return e}))):null!=a&&(C(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,i+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(k,"$&/")+"/")+e)),t.push(a)),1;if(u=0,o=""===o?".":o+":",v(e))for(var c=0;c<e.length;c++){var l=o+R(s=e[c],c);u+=P(s,t,i,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),c=0;!(s=e.next()).done;)u+=P(s=s.value,t,i,l=o+R(s,c++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function I(e,t,n){if(null==e)return e;var r=[],i=0;return P(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},L={transition:null},T={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:L,ReactCurrentOwner:j};t.Children={map:I,forEach:function(e,t,n){I(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return I(e,(function(){t++})),t},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=i,t.Profiler=a,t.PureComponent=x,t.StrictMode=o,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=y({},e.props),o=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=j.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)E.call(t,c)&&!_.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==u?u[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){u=Array(c);for(var l=0;l<c;l++)u[l]=arguments[l+2];i.children=u}return{$$typeof:n,type:e.type,key:o,ref:a,props:i,_owner:s}},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=L.transition;L.transition={};try{e()}finally{L.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return $.current.useCallback(e,t)},t.useContext=function(e){return $.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return $.current.useDeferredValue(e)},t.useEffect=function(e,t){return $.current.useEffect(e,t)},t.useId=function(){return $.current.useId()},t.useImperativeHandle=function(e,t,n){return $.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return $.current.useMemo(e,t)},t.useReducer=function(e,t,n){return $.current.useReducer(e,t,n)},t.useRef=function(e){return $.current.useRef(e)},t.useState=function(e){return $.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return $.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return $.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>o});var r=n(667294);const i=r.createContext({});function o(e){const t=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||a:o(e),r.createElement(i.Provider,{value:s},t)}}}]);