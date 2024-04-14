import{r as _}from"./index-CsdIBAqE.js";var l={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=_,f=Symbol.for("react.element"),m=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,u=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function a(s,e,n){var r,t={},i=null,x=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(x=e.ref);for(r in e)d.call(e,r)&&!y.hasOwnProperty(r)&&(t[r]=e[r]);if(s&&s.defaultProps)for(r in e=s.defaultProps,e)t[r]===void 0&&(t[r]=e[r]);return{$$typeof:f,type:s,key:i,ref:x,props:t,_owner:u.current}}p.Fragment=m;p.jsx=a;p.jsxs=a;l.exports=p;var o=l.exports;const h=({label:s,payload:e,active:n,valueFormatter:r,tooltipSubtitleFormatter:t})=>n&&e&&e.length?o.jsxs("div",{className:"bg-gray-900 px-3 py-2 rounded-md",children:[o.jsx("p",{className:"text-xs text-gray-400",children:s}),o.jsx("p",{className:"text-sm text-white",children:r(e[0].value)}),t&&o.jsx("p",{className:"text-xs text-gray-400 pt-2",children:t(e[0])})]}):null;h.__docgenInfo={description:"",methods:[],displayName:"ChartTooltip"};export{h as C,o as j};
