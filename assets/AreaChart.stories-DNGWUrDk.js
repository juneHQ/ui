import{j as e}from"./MagnifyingGlassIcon-CwXmDSey.js";/* empty css               */import{A as o,Y as x,X as u,R as m,C as y,D as f,c as h,d as v,e as j}from"./index-C3drj4_2.js";import{C as A,d as C,a as D,b as P}from"./constants-CNpUCuGp.js";import"./index-3EmNr02n.js";import"./index-DtPRrsDO.js";import"./index-CsdIBAqE.js";import"./index-5f0m1pej.js";import"./mapValues-CtGqFUz0.js";import"./throttle-usbKibP-.js";import"./isPlainObject-Csr8S_Fy.js";import"./tiny-invariant-CopsF_GD.js";import"./_baseUniq-eSUq8-wg.js";const g={type:"monotone",stroke:"inherit",strokeWidth:1.5,fill:"inherit",activeDot:{r:5},dataKey:"y",className:"fill-purple-300 stroke-purple-500"},k={stroke:"inherit",className:"stroke-gray-300"},K={r:8,className:"fill-purple-500"},i=[{x:"Mon",y:0},{x:"Tue",y:30},{x:"Wed",y:20},{x:"Thu",y:35},{x:"Fri",y:27},{x:"Sat",y:40},{x:"Sun",y:60}],$={title:"Visualizations/Chart/AreaChart",component:o,args:{data:i},parameters:{sourceLink:"https://github.com/juneHQ/june-charts/tree/main/lib/components/AreaChart/index.tsx"}},t={args:{data:i},render:n=>e.jsx("div",{children:e.jsxs(o,{...n,children:[e.jsx(A,{...C}),e.jsx(x,{...D,dataKey:"y"}),e.jsx(u,{...P,dataKey:"x"}),e.jsx(m,{...k,x:"Wed"}),e.jsx(y,{content:({active:d,payload:l,label:p})=>e.jsx(f,{label:p,active:d,payload:l,valueFormatter:c=>`${c.y} count`})}),e.jsx(h,{...g,activeDot:e.jsx(v,{...K,onClick:()=>{},cursor:"pointer"}),dataKey:"y"}),e.jsx(j,{content:()=>e.jsxs("div",{className:"text-center",children:[e.jsx("div",{children:"x – day"}),e.jsx("div",{children:"y – users"})]})})]})})};var a,r,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    data
  },
  render: args => <div>
      <AreaChart {...args}>
        <Grid {...defaultGridProps} />
        <YAxis {...defaultYAxisProps} dataKey="y" />
        <XAxis {...defaultXAxisProps} dataKey="x" />
        <ReferenceLine {...defaultReferenceLineProps} x="Wed" />
        <ChartTooltip content={({
        active,
        payload,
        label
      }) => <DefaultTooltip label={label} active={active} payload={payload} valueFormatter={p => \`\${p.y} count\`} />} />
        <Area {...defaultAreaProps} activeDot={<Dot {...defaultDotProps} onClick={() => {}} cursor={"pointer"} />} dataKey="y" />
        <Legend content={() => <div className="text-center">
              <div>x – day</div>
              <div>y – users</div>
            </div>} />
      </AreaChart>
    </div>
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const z=["Default"];export{t as Default,z as __namedExportsOrder,$ as default};
