import{j as s}from"./MagnifyingGlassIcon-BBt5mED7.js";/* empty css               */import{L as o,T as c,D as u,b as h,Y as x,X as f}from"./index-DJXQKrN_.js";import{C as j,d as y,a as L,b as U,c as P}from"./constants-OTc8jG0n.js";import"./index-ColZRcxE.js";import"./index-BtbQ8gze.js";import"./index-CEThVCg_.js";import"./index-xnkZ--kd.js";import"./mapValues-DsbhD-jO.js";import"./throttle-SSwQpIvp.js";import"./isPlainObject-CUX78SmW.js";import"./tiny-invariant-CopsF_GD.js";import"./_baseUniq-DyUJG2DD.js";const A={type:"monotone",stroke:"current",strokeWidth:1.5,activeDot:{r:5},dataKey:"y",className:"stroke-purple-500"},n=[{month:"Jan 24",Users:240},{month:"Feb 24",Users:290},{month:"Mar 24",Users:320},{month:"Apr 24",Users:325},{month:"May 24",Users:330}],E={title:"Visualizations/Chart/LineChart",component:o,args:{data:n,className:"h-72"},parameters:{sourceLink:"https://github.com/juneHQ/june-charts/tree/main/lib/components/LineChart/index.tsx"}},a={args:{data:n,className:"h-72"},render:i=>s.jsx(s.Fragment,{children:s.jsxs(o,{...i,children:[s.jsx(j,{...y}),s.jsx(c,{...L,content:({active:p,payload:l,label:m})=>s.jsx(u,{label:m,active:p,payload:l,valueFormatter:d=>`${d.Users} Users`})}),s.jsx(h,{...A,dataKey:"Users"}),s.jsx(x,{...U}),s.jsx(f,{...P,dataKey:"month"})]})})};var t,e,r;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    data,
    className: "h-72"
  },
  render: args => <>
      <LineChart {...args}>
        <Grid {...defaultGridProps} />
        <ChartTooltip {...defaultTooltipProps} content={({
        active,
        payload,
        label
      }) => <DefaultTooltip label={label} active={active} payload={payload} valueFormatter={p => \`\${p.Users} Users\`} />} />
        <Line {...defaultLineProps} dataKey="Users" />
        <YAxis {...defaultYAxisProps} />
        <XAxis {...defaultXAxisProps} dataKey="month" />
      </LineChart>
    </>
}`,...(r=(e=a.parameters)==null?void 0:e.docs)==null?void 0:r.source}}};const M=["Default"];export{a as Default,M as __namedExportsOrder,E as default};
