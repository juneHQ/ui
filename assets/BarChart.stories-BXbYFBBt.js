import{j as a}from"./MagnifyingGlassIcon-lGZ8Xy5M.js";/* empty css               */import{B as u,C as y,D as x,a as C,Y as P,X as h}from"./index-Dp_AVCcA.js";import{C as D,d as f,a as j,b as S}from"./constants-Bt6I0QMp.js";import"./index-BCxmeb86.js";import"./index-Vr3s_2qG.js";import"./index-CsdIBAqE.js";import"./index-5f0m1pej.js";import"./throttle-usbKibP-.js";import"./mapValues-CtGqFUz0.js";import"./isPlainObject-Csr8S_Fy.js";import"./tiny-invariant-CopsF_GD.js";import"./_baseUniq-eSUq8-wg.js";const A=[{month:"Jan 24",Sales:4400},{month:"Feb 24",Sales:3612}],N={title:"Visualizations/Chart/BarChart",component:u,args:{categories:["Sales"],index:"month",data:A,className:"h-72"},parameters:{sourceLink:"https://github.com/juneHQ/june-charts/tree/main/lib/components/BarChart/index.tsx"}},s={args:{categories:["Sales"],index:"month",data:A,className:"h-72"},render:t=>a.jsx(a.Fragment,{children:a.jsxs(u,{...t,children:[a.jsx(D,{...f}),a.jsx(y,{content:({active:e,payload:o,label:p})=>a.jsx(x,{label:p,active:e,payload:o,valueFormatter:r=>`${r.Sales} Sales`})}),a.jsx(C,{dataKey:"Sales"}),a.jsx(P,{...j}),a.jsx(h,{...S,dataKey:"month"})]})})},n={args:{categories:["groupsPercentage"],index:"name",data:[{name:"1 Day",days:1,groupsPercentage:40,groupsCount:100},{name:"2 Days",days:2,groupsPercentage:20,groupsCount:0},{name:"3 Days",days:3,groupsPercentage:20,groupsCount:0},{name:"4 Days",days:4,groupsPercentage:20,groupsCount:0},{name:"5 Days",days:5,groupsPercentage:20,groupsCount:0},{name:"6 Days",days:6,groupsPercentage:20,groupsCount:0},{name:"7 Days",days:7,groupsPercentage:20,groupsCount:0}]},render:t=>a.jsxs(u,{...t,children:[a.jsx(D,{...f}),a.jsx(y,{content:({active:e,payload:o,label:p})=>a.jsx(x,{label:p,active:e,payload:o,valueFormatter:r=>`${r.groupsPercentage}%`,footerFormatter:r=>`Click to see all ${r.groupsCount} companies`})}),a.jsx(C,{dataKey:"groupsPercentage"}),a.jsx(P,{...j,tickFormatter:e=>`${e}%`}),a.jsx(h,{...S,dataKey:"name"})]})};var i,l,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var g,m,c;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
      <YAxis {...defaultYAxisProps} tickFormatter={p => \`\${p}%\`} />
      <XAxis {...defaultXAxisProps} dataKey="name" />
    </BarChart>
}`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const w=["Default","PowerUsersL7D"];export{s as Default,n as PowerUsersL7D,w as __namedExportsOrder,N as default};
