import{r as p}from"./index-CsdIBAqE.js";var d={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=p,u=Symbol.for("react.element"),m=Symbol.for("react.fragment"),_=Object.prototype.hasOwnProperty,y=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function f(e,r,l){var t,o={},s=null,a=null;l!==void 0&&(s=""+l),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(a=r.ref);for(t in r)_.call(r,t)&&!v.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)o[t]===void 0&&(o[t]=r[t]);return{$$typeof:u,type:e,key:s,ref:a,props:o,_owner:y.current}}n.Fragment=m;n.jsx=f;n.jsxs=f;d.exports=n;var i=d.exports;function x(...e){return e.flat().filter(r=>typeof r=="string").join(" ")}function w(){const e=document.getElementsByClassName("recharts-responsive-container");e.length>0&&e[0]&&(e[0].id="loaded")}const g=({className:e=""})=>i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:x("w-4 h-4",e),children:i.jsx("path",{fillRule:"evenodd",d:"M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z",clipRule:"evenodd"})});g.__docgenInfo={description:"",methods:[],displayName:"MagnifyingGlassIcon",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};export{g as M,w as a,x as c,i as j};
