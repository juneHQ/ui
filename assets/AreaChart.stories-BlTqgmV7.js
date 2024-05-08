import{j as e}from"./MagnifyingGlassIcon-CwXmDSey.js";/* empty css               */import{A as l,Y as x,X as m,C as u,D as y,R as h,c as f,d as v,e as A,f as j,g as C}from"./ChartLabelText-C4y1S-4t.js";import{C as g,d as b,a as L,b as D}from"./constants-B3MfwIrU.js";import"./index-3EmNr02n.js";import"./index-DtPRrsDO.js";import"./index-CsdIBAqE.js";import"./index-5f0m1pej.js";import"./mapValues-CtGqFUz0.js";import"./throttle-usbKibP-.js";import"./isPlainObject-Csr8S_Fy.js";import"./tiny-invariant-CopsF_GD.js";import"./_baseUniq-eSUq8-wg.js";const P={type:"monotone",stroke:"inherit",strokeWidth:1.5,fill:"inherit",activeDot:{r:5},dataKey:"y",className:"fill-purple-300 stroke-purple-500"},T={stroke:"inherit",className:"stroke-gray-300"},k={r:8,className:"fill-purple-500"},s=[{x:"Mon",y:0},{x:"Tue",y:30},{x:"Wed",y:20},{x:"Thu",y:60},{x:"Fri",y:27},{x:"Sat",y:40},{x:"Sun",y:30}],$={title:"Visualizations/Chart/AreaChart",component:l,args:{data:s},parameters:{sourceLink:"https://github.com/juneHQ/june-charts/tree/main/lib/components/AreaChart/index.tsx"}},a={args:{data:s,margin:{top:20,left:10,right:10,bottom:10}},render:d=>e.jsxs(l,{...d,children:[e.jsx(g,{...b}),e.jsx(x,{...L,dataKey:"y"}),e.jsx(m,{...D,dataKey:"x"}),e.jsx(u,{content:({active:t,payload:r,label:p})=>e.jsx(y,{label:p,active:t,payload:r,valueFormatter:c=>`${c.y} count`})}),e.jsx(h,{...T,y:s.sort((t,r)=>r.y-t.y)[0].y,children:e.jsx(f,{content:({viewBox:t})=>e.jsx(v,{viewBox:t,children:"All time high"})})}),e.jsx(A,{...P,activeDot:e.jsx(j,{...k,onClick:()=>{},cursor:"pointer"}),dataKey:"y"}),e.jsx(C,{content:()=>e.jsxs("div",{className:"text-center",children:[e.jsx("div",{children:"x – day"}),e.jsx("div",{children:"y – users"})]})})]})};var o,n,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    data,
    margin: {
      top: 20,
      left: 10,
      right: 10,
      bottom: 10
    }
  },
  render: args => <AreaChart {...args}>
      <Grid {...defaultGridProps} />
      <YAxis {...defaultYAxisProps} dataKey="y" />
      <XAxis {...defaultXAxisProps} dataKey="x" />
      <ChartTooltip content={({
      active,
      payload,
      label
    }) => <DefaultTooltip label={label} active={active} payload={payload} valueFormatter={p => \`\${p.y} count\`} />} />
      <ReferenceLine {...defaultReferenceLineProps} y={data.sort((a, b) => b.y - a.y)[0].y}>
        <ChartLabel content={({
        viewBox
      }) => <ChartLabelText viewBox={viewBox}>All time high</ChartLabelText>}></ChartLabel>
      </ReferenceLine>
      <Area {...defaultAreaProps} activeDot={<Dot {...defaultDotProps} onClick={() => {}} cursor={"pointer"} />} dataKey="y" />
      <Legend content={() => <div className="text-center">
            <div>x – day</div>
            <div>y – users</div>
          </div>} />
    </AreaChart>
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const z=["Default"];export{a as Default,z as __namedExportsOrder,$ as default};
