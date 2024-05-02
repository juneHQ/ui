import{j as e}from"./MagnifyingGlassIcon-lGZ8Xy5M.js";/* empty css               */import{A as i,Y as d,X as x,R as p,b as c,L as m}from"./index-Dp_AVCcA.js";import{C as l,d as u,a as y,b as f}from"./constants-Bt6I0QMp.js";import"./index-BCxmeb86.js";import"./index-Vr3s_2qG.js";import"./index-CsdIBAqE.js";import"./index-5f0m1pej.js";import"./throttle-usbKibP-.js";import"./mapValues-CtGqFUz0.js";import"./isPlainObject-Csr8S_Fy.js";import"./tiny-invariant-CopsF_GD.js";import"./_baseUniq-eSUq8-wg.js";const h={type:"monotone",stroke:"inherit",strokeWidth:1.5,fill:"inherit",activeDot:{r:5},dataKey:"y",className:"fill-purple-300 stroke-purple-500"},A={stroke:"inherit",className:"stroke-gray-300"},n=[{x:"Mon",y:0},{x:"Tue",y:30},{x:"Wed",y:20},{x:"Thu",y:35},{x:"Fri",y:27},{x:"Sat",y:40},{x:"Sun",y:60}],N={title:"Visualizations/Chart/AreaChart",component:i,args:{data:n},parameters:{sourceLink:"https://github.com/juneHQ/june-charts/tree/main/lib/components/AreaChart/index.tsx"}},r={args:{data:n},render:o=>e.jsx("div",{children:e.jsxs(i,{...o,children:[e.jsx(l,{...u}),e.jsx(d,{...y,dataKey:"y"}),e.jsx(x,{...f,dataKey:"x"}),e.jsx(p,{...A,x:"Wed"}),e.jsx(c,{...h,dataKey:"y"}),e.jsx(m,{content:()=>e.jsxs("div",{className:"text-center",children:[e.jsx("div",{children:"x – day"}),e.jsx("div",{children:"y – users"})]})})]})})};var a,t,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    data
  },
  render: args => <div>
      <AreaChart {...args}>
        <Grid {...defaultGridProps} />
        <YAxis {...defaultYAxisProps} dataKey="y" />
        <XAxis {...defaultXAxisProps} dataKey="x" />
        <ReferenceLine {...defaultReferenceLineProps} x="Wed" />
        <Area {...defaultAreaProps} dataKey="y" />
        <Legend content={() => <div className="text-center">
              <div>x – day</div>
              <div>y – users</div>
            </div>} />
      </AreaChart>
    </div>
}`,...(s=(t=r.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const W=["Default"];export{r as Default,W as __namedExportsOrder,N as default};
