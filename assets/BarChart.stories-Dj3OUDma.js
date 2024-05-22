import{j as a}from"./MagnifyingGlassIcon-BBt5mED7.js";/* empty css               */import{B as u,T as y,D as x,a as P,Y as C,X as h}from"./index-JjUC-xdN.js";import{C as f,d as D,a as j,b as S,c as A}from"./constants-Bk89MV9n.js";import"./index-ColZRcxE.js";import"./index-BtbQ8gze.js";import"./index-CEThVCg_.js";import"./index-xnkZ--kd.js";import"./mapValues-DsbhD-jO.js";import"./throttle-SSwQpIvp.js";import"./isPlainObject-CUX78SmW.js";import"./tiny-invariant-CopsF_GD.js";import"./_baseUniq-DyUJG2DD.js";const B=[{month:"Jan 24",Sales:4400},{month:"Feb 24",Sales:3612}],w={title:"Visualizations/Chart/BarChart",component:u,args:{categories:["Sales"],index:"month",data:B,className:"h-72"},parameters:{sourceLink:"https://github.com/juneHQ/ui/tree/main/lib/components/BarChart/index.tsx"}},s={args:{categories:["Sales"],index:"month",data:B,className:"h-72"},render:n=>a.jsx(a.Fragment,{children:a.jsxs(u,{...n,children:[a.jsx(f,{...D}),a.jsx(y,{...j,content:({active:e,payload:o,label:p})=>a.jsx(x,{label:p,active:e,payload:o,valueFormatter:r=>`${r.Sales} Sales`})}),a.jsx(P,{dataKey:"Sales"}),a.jsx(C,{...S}),a.jsx(h,{...A,dataKey:"month"})]})})},t={args:{categories:["groupsPercentage"],index:"name",data:[{name:"1 Day",days:1,groupsPercentage:40,groupsCount:100},{name:"2 Days",days:2,groupsPercentage:20,groupsCount:0},{name:"3 Days",days:3,groupsPercentage:20,groupsCount:0},{name:"4 Days",days:4,groupsPercentage:20,groupsCount:0},{name:"5 Days",days:5,groupsPercentage:20,groupsCount:0},{name:"6 Days",days:6,groupsPercentage:20,groupsCount:0},{name:"7 Days",days:7,groupsPercentage:20,groupsCount:0}]},render:n=>a.jsxs(u,{...n,children:[a.jsx(f,{...D}),a.jsx(y,{...j,content:({active:e,payload:o,label:p})=>a.jsx(x,{label:p,active:e,payload:o,valueFormatter:r=>`${r.groupsPercentage}%`,footerFormatter:r=>`Click to see all ${r.groupsCount} companies`})}),a.jsx(P,{dataKey:"groupsPercentage"}),a.jsx(C,{...S,tickFormatter:e=>`${e}%`}),a.jsx(h,{...A,dataKey:"name"})]})};var i,l,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    categories: ["Sales"],
    index: "month",
    data,
    className: "h-72"
  },
  render: args => <>
            <BarChart {...args}>
                <Grid {...defaultGridProps} />
                <ChartTooltip {...defaultTooltipProps} content={({
        active,
        payload,
        label
      }) => <DefaultTooltip label={label} active={active} payload={payload} valueFormatter={p => \`\${p.Sales} Sales\`} />} />
                <BarItem dataKey="Sales" />
                <YAxis {...defaultYAxisProps} />
                <XAxis {...defaultXAxisProps} dataKey="month" />
            </BarChart>
        </>
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var g,m,c;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
            <ChartTooltip {...defaultTooltipProps} content={({
      active,
      payload,
      label
    }) => <DefaultTooltip label={label} active={active} payload={payload} valueFormatter={(payload: any) => \`\${payload.groupsPercentage}%\`} footerFormatter={(payload: any) => \`Click to see all \${payload.groupsCount} companies\`} />} />
            <BarItem dataKey="groupsPercentage" />
            <YAxis {...defaultYAxisProps} tickFormatter={p => \`\${p}%\`} />
            <XAxis {...defaultXAxisProps} dataKey="name" />
        </BarChart>
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const E=["Default","PowerUsersL7D"];export{s as Default,t as PowerUsersL7D,E as __namedExportsOrder,w as default};
