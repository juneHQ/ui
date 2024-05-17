import{j as e}from"./MagnifyingGlassIcon-BhzNh7FJ.js";/* empty css               */import{A as l,Y as x,X as u,T as m,D as y,R as f,c as h,C as v,d as A,e as j,f as C}from"./index-0RutGgvM.js";import{C as b,d as g,b as L,c as P,a as D}from"./constants-Ix9R9uZc.js";import"./index-BZVzl59L.js";import"./index-CkpZqG1v.js";import{d as T}from"./constants-BMZGGsUz.js";import"./index-CsdIBAqE.js";import"./index-5f0m1pej.js";import"./mapValues-CtGqFUz0.js";import"./throttle-usbKibP-.js";import"./isPlainObject-Csr8S_Fy.js";import"./tiny-invariant-CopsF_GD.js";import"./_baseUniq-eSUq8-wg.js";const K={type:"monotone",stroke:"inherit",strokeWidth:1.5,fill:"inherit",activeDot:{r:5},dataKey:"y",className:"fill-purple-300 stroke-purple-500"},R={r:8,className:"fill-purple-500"},o=[{x:"Mon",y:0},{x:"Tue",y:30},{x:"Wed",y:20},{x:"Thu",y:60},{x:"Fri",y:27},{x:"Sat",y:40},{x:"Sun",y:30}],H={title:"Visualizations/Chart/AreaChart",component:l,args:{data:o},parameters:{sourceLink:"https://github.com/juneHQ/june-charts/tree/main/lib/components/AreaChart/index.tsx"}},a={args:{data:o,margin:{top:20,left:10,right:10,bottom:10}},render:d=>e.jsxs(l,{...d,children:[e.jsx(b,{...g}),e.jsx(x,{...L,dataKey:"y"}),e.jsx(u,{...P,dataKey:"x"}),e.jsx(m,{...D,content:({active:t,payload:r,label:p})=>e.jsx(y,{label:p,active:t,payload:r,valueFormatter:c=>`${c.y} count`})}),e.jsx(f,{...T,y:o.sort((t,r)=>r.y-t.y)[0].y,children:e.jsx(h,{content:({viewBox:t})=>e.jsx(v,{viewBox:t,children:"All time high"})})}),e.jsx(A,{...K,activeDot:e.jsx(j,{...R,onClick:()=>{},cursor:"pointer"}),dataKey:"y"}),e.jsx(C,{content:()=>e.jsxs("div",{className:"text-center",children:[e.jsx("div",{children:"x – day"}),e.jsx("div",{children:"y – users"})]})})]})};var s,n,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
      <ChartTooltip {...defaultTooltipProps} content={({
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
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const M=["Default"];export{a as Default,M as __namedExportsOrder,H as default};
