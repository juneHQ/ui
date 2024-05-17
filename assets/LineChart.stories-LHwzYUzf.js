import{j as a}from"./MagnifyingGlassIcon-BXZeBP0u.js";/* empty css               */import{L as o,C as c,D as u,b as h,Y as x,X as f}from"./ChartLabelText-D_B-Z6YW.js";import{C as j,d as y,a as C,b as L}from"./constants-DWoOqD9y.js";import"./index-A82bK_pS.js";import"./index-DY6iKzhU.js";import"./index-CsdIBAqE.js";import"./index-5f0m1pej.js";import"./mapValues-CtGqFUz0.js";import"./throttle-usbKibP-.js";import"./isPlainObject-Csr8S_Fy.js";import"./tiny-invariant-CopsF_GD.js";import"./_baseUniq-eSUq8-wg.js";const U={type:"monotone",stroke:"current",strokeWidth:1.5,activeDot:{r:5},dataKey:"y",className:"stroke-purple-500"},n=[{month:"Jan 24",Users:240},{month:"Feb 24",Users:290},{month:"Mar 24",Users:320},{month:"Apr 24",Users:325},{month:"May 24",Users:330}],T={title:"Visualizations/Chart/LineChart",component:o,args:{data:n,className:"h-72"},parameters:{sourceLink:"https://github.com/juneHQ/june-charts/tree/main/lib/components/LineChart/index.tsx"}},s={args:{data:n,className:"h-72"},render:i=>a.jsx(a.Fragment,{children:a.jsxs(o,{...i,children:[a.jsx(j,{...y}),a.jsx(c,{content:({active:p,payload:m,label:l})=>a.jsx(u,{label:l,active:p,payload:m,valueFormatter:d=>`${d.Users} Users`})}),a.jsx(h,{...U,dataKey:"Users"}),a.jsx(x,{...C}),a.jsx(f,{...L,dataKey:"month"})]})})};var t,e,r;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    data,
    className: "h-72"
  },
  render: args => <>
      <LineChart {...args}>
        <Grid {...defaultGridProps} />
        <ChartTooltip content={({
        active,
        payload,
        label
      }) => <DefaultTooltip label={label} active={active} payload={payload} valueFormatter={p => \`\${p.Users} Users\`} />} />
        <Line {...defaultLineProps} dataKey="Users" />
        <YAxis {...defaultYAxisProps} />
        <XAxis {...defaultXAxisProps} dataKey="month" />
      </LineChart>
    </>
}`,...(r=(e=s.parameters)==null?void 0:e.docs)==null?void 0:r.source}}};const E=["Default"];export{s as Default,E as __namedExportsOrder,T as default};
