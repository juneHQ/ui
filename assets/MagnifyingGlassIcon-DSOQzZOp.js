import{r as u}from"./index-CsdIBAqE.js";var d={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=u,f=Symbol.for("react.element"),h=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,v=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)x.call(t,r)&&!g.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:f,type:e,key:l,ref:i,props:o,_owner:v.current}}a.Fragment=h;a.jsx=c;a.jsxs=c;d.exports=a;var s=d.exports;function y(...e){return e.flat().filter(t=>typeof t=="string").join(" ")}function j(){const e=document.getElementsByClassName("recharts-responsive-container");e.length>0&&e[0]&&(e[0].id="loaded")}const p=({className:e})=>s.jsxs("svg",{fill:"none",width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:e,children:[s.jsx("path",{d:"M9.71429 20C8.89942 20 7.91774 20 6.99971 20C5.34286 20 4 18.6569 4 17V7C4 5.34315 5.34315 4 7 4H17C18.6569 4 20 5.34315 20 7V12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M12.6075 19.5607L10.2942 11.0789C10.1805 10.6619 10.6137 10.3068 11.0002 10.5001L18.6966 14.3483C19.1224 14.5612 19.0379 15.1924 18.571 15.2858L15.2656 15.9469C15.0999 15.98 14.9622 16.0946 14.8994 16.2515L13.5541 19.6148C13.3759 20.0602 12.7337 20.0235 12.6075 19.5607Z",stroke:"currentColor",strokeWidth:"1.5"})]});p.__docgenInfo={description:"",methods:[],displayName:"EventIcon",props:{className:{required:!1,tsType:{name:"string"},description:""}}};const C=({IconComponent:e=p,noDataText:t="There's no data for this insight",noDataSubText:n="Make sure you selected the correct events and timerange"})=>s.jsx("div",{className:"flex h-[300px] w-full items-center justify-center",children:s.jsxs("div",{className:"flex flex-col items-center gap-1 text-center",children:[s.jsx("div",{className:"mb-3 rounded-full border p-3",children:s.jsx(e,{className:"size-6 text-purple-500"})}),s.jsx("p",{className:"text-sm font-medium",children:t}),s.jsx("p",{className:"text-sm text-gray-600",children:n})]})});C.__docgenInfo={description:"",methods:[],displayName:"EmptyState",props:{IconComponent:{defaultValue:{value:`({ className }) => {
  return (
    <svg
      fill="none"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.71429 20C8.89942 20 7.91774 20 6.99971 20C5.34286 20 4 18.6569 4 17V7C4 5.34315 5.34315 4 7 4H17C18.6569 4 20 5.34315 20 7V12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12.6075 19.5607L10.2942 11.0789C10.1805 10.6619 10.6137 10.3068 11.0002 10.5001L18.6966 14.3483C19.1224 14.5612 19.0379 15.1924 18.571 15.2858L15.2656 15.9469C15.0999 15.98 14.9622 16.0946 14.8994 16.2515L13.5541 19.6148C13.3759 20.0602 12.7337 20.0235 12.6075 19.5607Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}`,computed:!1},required:!1},noDataText:{defaultValue:{value:`"There's no data for this insight"`,computed:!1},required:!1},noDataSubText:{defaultValue:{value:'"Make sure you selected the correct events and timerange"',computed:!1},required:!1}}};const _=({className:e=""})=>s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:y("w-4 h-4",e),children:s.jsx("path",{fillRule:"evenodd",d:"M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z",clipRule:"evenodd"})});_.__docgenInfo={description:"",methods:[],displayName:"MagnifyingGlassIcon",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};export{C as E,_ as M,j as a,y as c,s as j};
