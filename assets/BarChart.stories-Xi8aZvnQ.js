import{j as d}from"./MagnifyingGlassIcon-DSOQzZOp.js";/* empty css               */import{u as ct,a as ut,b as ht,i as v,c as dt,d as ft,w as K,g as J,e as Q,f as q,C as Z,h as gt,B as N,j as R,D as tt,k as et,Y as rt,X as at}from"./index-BYl883dz.js";import{R as f}from"./index-CsdIBAqE.js";import{i as G}from"./mapValues-CtGqFUz0.js";import"./throttle-usbKibP-.js";import"./tiny-invariant-CopsF_GD.js";import"./_baseUniq-eSUq8-wg.js";import"./isPlainObject-Csr8S_Fy.js";import"./index-5f0m1pej.js";var yt=["x1","y1","x2","y2","key"],mt=["offset"];function b(t){"@babel/helpers - typeof";return b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(t)}function L(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),a.push.apply(a,r)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?L(Object(a),!0).forEach(function(r){vt(t,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):L(Object(a)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(a,r))})}return t}function vt(t,e,a){return e=xt(e),e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function xt(t){var e=pt(t,"string");return b(e)=="symbol"?e:String(e)}function pt(t,e){if(b(t)!="object"||!t)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var r=a.call(t,e||"default");if(b(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function P(){return P=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},P.apply(this,arguments)}function V(t,e){if(t==null)return{};var a=Pt(t,e),r,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}function Pt(t,e){if(t==null)return{};var a={},r=Object.keys(t),n,o;for(o=0;o<r.length;o++)n=r[o],!(e.indexOf(n)>=0)&&(a[n]=t[n]);return a}var bt=function(e){var a=e.fill;if(!a||a==="none")return null;var r=e.fillOpacity,n=e.x,o=e.y,l=e.width,u=e.height;return f.createElement("rect",{x:n,y:o,width:l,height:u,stroke:"none",fill:a,fillOpacity:r,className:"recharts-cartesian-grid-bg"})};function nt(t,e){var a;if(f.isValidElement(t))a=f.cloneElement(t,e);else if(G(t))a=t(e);else{var r=e.x1,n=e.y1,o=e.x2,l=e.y2,u=e.key,y=V(e,yt),s=gt(y,!1);s.offset;var i=V(s,mt);a=f.createElement("line",P({},i,{x1:r,y1:n,x2:o,y2:l,fill:"none",key:u}))}return a}function wt(t){var e=t.x,a=t.width,r=t.horizontal,n=r===void 0?!0:r,o=t.horizontalPoints;if(!n||!o||!o.length)return null;var l=o.map(function(u,y){var s=g(g({},t),{},{x1:e,y1:u,x2:e+a,y2:u,key:"line-".concat(y),index:y});return nt(n,s)});return f.createElement("g",{className:"recharts-cartesian-grid-horizontal"},l)}function Ot(t){var e=t.y,a=t.height,r=t.vertical,n=r===void 0?!0:r,o=t.verticalPoints;if(!n||!o||!o.length)return null;var l=o.map(function(u,y){var s=g(g({},t),{},{x1:u,y1:e,x2:u,y2:e+a,key:"line-".concat(y),index:y});return nt(n,s)});return f.createElement("g",{className:"recharts-cartesian-grid-vertical"},l)}function Ct(t){var e=t.horizontalFill,a=t.fillOpacity,r=t.x,n=t.y,o=t.width,l=t.height,u=t.horizontalPoints,y=t.horizontal,s=y===void 0?!0:y;if(!s||!e||!e.length)return null;var i=u.map(function(c){return Math.round(c+n-n)}).sort(function(c,h){return c-h});n!==i[0]&&i.unshift(0);var x=i.map(function(c,h){var w=!i[h+1],m=w?n+l-c:i[h+1]-c;if(m<=0)return null;var p=h%e.length;return f.createElement("rect",{key:"react-".concat(h),y:c,x:r,height:m,width:o,stroke:"none",fill:e[p],fillOpacity:a,className:"recharts-cartesian-grid-bg"})});return f.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},x)}function jt(t){var e=t.vertical,a=e===void 0?!0:e,r=t.verticalFill,n=t.fillOpacity,o=t.x,l=t.y,u=t.width,y=t.height,s=t.verticalPoints;if(!a||!r||!r.length)return null;var i=s.map(function(c){return Math.round(c+o-o)}).sort(function(c,h){return c-h});o!==i[0]&&i.unshift(0);var x=i.map(function(c,h){var w=!i[h+1],m=w?o+u-c:i[h+1]-c;if(m<=0)return null;var p=h%r.length;return f.createElement("rect",{key:"react-".concat(h),x:c,y:l,width:m,height:y,stroke:"none",fill:r[p],fillOpacity:n,className:"recharts-cartesian-grid-bg"})});return f.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},x)}var zt=function(e,a){var r=e.xAxis,n=e.width,o=e.height,l=e.offset;return J(Q(g(g(g({},Z.defaultProps),r),{},{ticks:q(r,!0),viewBox:{x:0,y:0,width:n,height:o}})),l.left,l.left+l.width,a)},At=function(e,a){var r=e.yAxis,n=e.width,o=e.height,l=e.offset;return J(Q(g(g(g({},Z.defaultProps),r),{},{ticks:q(r,!0),viewBox:{x:0,y:0,width:n,height:o}})),l.top,l.top+l.height,a)},O={horizontal:!0,vertical:!0,horizontalPoints:[],verticalPoints:[],stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]};function $(t){var e,a,r,n,o,l,u=ct(),y=ut(),s=ht(),i=g(g({},t),{},{stroke:(e=t.stroke)!==null&&e!==void 0?e:O.stroke,fill:(a=t.fill)!==null&&a!==void 0?a:O.fill,horizontal:(r=t.horizontal)!==null&&r!==void 0?r:O.horizontal,horizontalFill:(n=t.horizontalFill)!==null&&n!==void 0?n:O.horizontalFill,vertical:(o=t.vertical)!==null&&o!==void 0?o:O.vertical,verticalFill:(l=t.verticalFill)!==null&&l!==void 0?l:O.verticalFill,x:v(t.x)?t.x:s.left,y:v(t.y)?t.y:s.top,width:v(t.width)?t.width:s.width,height:v(t.height)?t.height:s.height}),x=i.x,c=i.y,h=i.width,w=i.height,m=i.syncWithTicks,p=i.horizontalValues,F=i.verticalValues,C=dt(),j=ft();if(!v(h)||h<=0||!v(w)||w<=0||!v(x)||x!==+x||!v(c)||c!==+c)return null;var B=i.verticalCoordinatesGenerator||zt,T=i.horizontalCoordinatesGenerator||At,z=i.horizontalPoints,A=i.verticalPoints;if((!z||!z.length)&&G(T)){var _=p&&p.length,k=T({yAxis:j?g(g({},j),{},{ticks:_?p:j.ticks}):void 0,width:u,height:y,offset:s},_?!0:m);K(Array.isArray(k),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(b(k),"]")),Array.isArray(k)&&(z=k)}if((!A||!A.length)&&G(B)){var I=F&&F.length,S=B({xAxis:C?g(g({},C),{},{ticks:I?F:C.ticks}):void 0,width:u,height:y,offset:s},I?!0:m);K(Array.isArray(S),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(b(S),"]")),Array.isArray(S)&&(A=S)}return f.createElement("g",{className:"recharts-cartesian-grid"},f.createElement(bt,{fill:i.fill,fillOpacity:i.fillOpacity,x:i.x,y:i.y,width:i.width,height:i.height}),f.createElement(wt,P({},i,{offset:s,horizontalPoints:z,xAxis:C,yAxis:j})),f.createElement(Ot,P({},i,{offset:s,verticalPoints:A,xAxis:C,yAxis:j})),f.createElement(Ct,P({},i,{horizontalPoints:z})),f.createElement(jt,P({},i,{verticalPoints:A})))}$.displayName="CartesianGrid";const it={paddingValue:0,startEndOnly:!1,intervalType:"preserveStartEnd",className:"text-xs fill-gray-600",tickGap:5,fill:"",stroke:""},ot={axisLine:!1,tickLine:!1,className:"text-xs fill-gray-600",fill:"",stroke:""},lt={vertical:!1,horizontal:!0,strokeDasharray:"3",className:"stroke-1"},st=[{month:"Jan 24",Sales:4400},{month:"Feb 24",Sales:3612}],_t={title:"Visualizations/Chart/BarChart",component:N,args:{categories:["Sales"],index:"month",data:st,className:"h-72"},parameters:{sourceLink:"https://github.com/juneHQ/june-charts/tree/main/lib/components/BarChart/index.tsx"}},D={args:{categories:["Sales"],index:"month",data:st,className:"h-72"},render:t=>d.jsx(d.Fragment,{children:d.jsxs(N,{...t,children:[d.jsx($,{...lt}),d.jsx(R,{content:({active:e,payload:a,label:r})=>d.jsx(tt,{label:r,active:e,payload:a,valueFormatter:n=>`${n.Sales} Sales`})}),d.jsx(et,{dataKey:"Sales"}),d.jsx(rt,{...ot}),d.jsx(at,{...it,dataKey:"month"})]})})},E={args:{categories:["groupsPercentage"],index:"name",data:[{name:"1 Day",days:1,groupsPercentage:40,groupsCount:100},{name:"2 Days",days:2,groupsPercentage:20,groupsCount:0},{name:"3 Days",days:3,groupsPercentage:20,groupsCount:0},{name:"4 Days",days:4,groupsPercentage:20,groupsCount:0},{name:"5 Days",days:5,groupsPercentage:20,groupsCount:0},{name:"6 Days",days:6,groupsPercentage:20,groupsCount:0},{name:"7 Days",days:7,groupsPercentage:20,groupsCount:0}]},render:t=>d.jsxs(N,{...t,children:[d.jsx($,{...lt}),d.jsx(R,{content:({active:e,payload:a,label:r})=>d.jsx(tt,{label:r,active:e,payload:a,valueFormatter:n=>`${n.groupsPercentage}%`,footerFormatter:n=>`Click to see all ${n.groupsCount} companies`})}),d.jsx(et,{dataKey:"groupsPercentage"}),d.jsx(rt,{...ot}),d.jsx(at,{...it,dataKey:"name"})]})};var H,W,X;D.parameters={...D.parameters,docs:{...(H=D.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    categories: ["Sales"],
    index: "month",
    data,
    className: "h-72"
  },
  render: args => <>
      <BarChart {...args}>
        <Grid {...defaultGridProps} />
        <ChartTooltip content={({
        active,
        payload,
        label
      }) => <DefaultTooltip label={label} active={active} payload={payload} valueFormatter={p => \`\${p.Sales} Sales\`} />} />
        <BarItem dataKey="Sales" />
        <YAxis {...defaultYAxisProps} />
        <XAxis {...defaultXAxisProps} dataKey="month" />
      </BarChart>
    </>
}`,...(X=(W=D.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,M,U;E.parameters={...E.parameters,docs:{...(Y=E.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    categories: ["groupsPercentage"],
    index: "name",
    data: [{
      name: "1 Day",
      days: 1,
      groupsPercentage: 40,
      groupsCount: 100
    }, {
      name: "2 Days",
      days: 2,
      groupsPercentage: 20,
      groupsCount: 0
    }, {
      name: "3 Days",
      days: 3,
      groupsPercentage: 20,
      groupsCount: 0
    }, {
      name: "4 Days",
      days: 4,
      groupsPercentage: 20,
      groupsCount: 0
    }, {
      name: "5 Days",
      days: 5,
      groupsPercentage: 20,
      groupsCount: 0
    }, {
      name: "6 Days",
      days: 6,
      groupsPercentage: 20,
      groupsCount: 0
    }, {
      name: "7 Days",
      days: 7,
      groupsPercentage: 20,
      groupsCount: 0
    }]
  },
  render: args => <BarChart {...args}>
      <Grid {...defaultGridProps} />
      <ChartTooltip content={({
      active,
      payload,
      label
    }) => <DefaultTooltip label={label} active={active} payload={payload} valueFormatter={(payload: any) => \`\${payload.groupsPercentage}%\`} footerFormatter={(payload: any) => \`Click to see all \${payload.groupsCount} companies\`} />} />
      <BarItem dataKey="groupsPercentage" />
      <YAxis {...defaultYAxisProps} />
      <XAxis {...defaultXAxisProps} dataKey="name" />
    </BarChart>
}`,...(U=(M=E.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};const It=["Default","PowerUsersL7D"];export{D as Default,E as PowerUsersL7D,It as __namedExportsOrder,_t as default};
