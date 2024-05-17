import{j as t,i as x}from"./MagnifyingGlassIcon-BhzNh7FJ.js";import{r as y}from"./index-CsdIBAqE.js";/* empty css               */import{S as h,g as d,T as C,h as f,i as P,j,R as o,k as T,l as S,Y as g,m as i,X as k}from"./index-0RutGgvM.js";import{C as b,s as q,e as A,f as R,g as L}from"./constants-Ix9R9uZc.js";import"./index-BZVzl59L.js";import"./index-CkpZqG1v.js";import{s as N,a as X}from"./constants-BMZGGsUz.js";import"./index-5f0m1pej.js";import"./mapValues-CtGqFUz0.js";import"./throttle-usbKibP-.js";import"./isPlainObject-Csr8S_Fy.js";import"./tiny-invariant-CopsF_GD.js";import"./_baseUniq-eSUq8-wg.js";const Y={width:"20px",height:"20px",style:{opacity:1}},K={shape:h},J={title:"Visualizations/Chart/ScatterChart",component:d,parameters:{sourceLink:"https://github.com/juneHQ/june-charts/tree/main/lib/components/ScatterChart/index.tsx"}},p=[{name:"Product A",frequency:50,popularity:90},{name:"Product B",frequency:35,popularity:20},{name:"Product C",frequency:42,popularity:53},{name:"Product D",frequency:82,popularity:11},{name:"Product E",frequency:11,popularity:60}],n={args:{data:p},render:m=>t.jsxs(d,{children:[t.jsx(b,{...q}),t.jsx(C,{...A,content:a=>{const{payload:e}=a,s=e==null?void 0:e[0];if(!s){console.error("No payload found in ScatterChart tooltip");return}return t.jsxs(f,{children:[t.jsx(P,{className:"text-white font-bold",children:s.payload.name}),e==null?void 0:e.map(r=>t.jsxs(j,{children:[t.jsxs("span",{className:"text-xs text-gray-400",children:[r.name,":"]}),t.jsxs("span",{className:"text-xs text-bold",children:[r.value,r.unit]})]},r.dataKey))]})}}),t.jsx(o,{...N}),t.jsx(o,{...X}),t.jsx(T,{...K,data:m.data,children:p.map((a,e)=>y.createElement(S,{...Y,key:e,fill:x(e)}))}),t.jsx(g,{...R,name:"Popularity",unit:"%",dataKey:"popularity",type:"number",tick:a=>t.jsx(i,{...a,dx:-5,dy:5,unit:"%"})}),t.jsx(k,{...L,name:"Frequency",dataKey:"frequency",unit:"%",type:"number",tick:a=>t.jsx(i,{...a,dy:10,unit:"%"})})]})};var c,l,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    data
  },
  render: args => {
    return <ScatterChart>
        <Grid {...scatterGridProps} />
        <ChartTooltip {...scatterChartTooltipProps} content={props => {
        const {
          payload
        } = props;
        const firstPayload = payload?.[0];
        if (!firstPayload) {
          console.error("No payload found in ScatterChart tooltip");
          return;
        }
        return <ChartTooltipContent>
                <ChartTooltipTitle className="text-white font-bold">
                  {firstPayload.payload.name}
                </ChartTooltipTitle>
                {payload?.map(p => <ChartTooltipValue key={p.dataKey}>
                    <span className="text-xs text-gray-400">{p.name}:</span>
                    <span className="text-xs text-bold">
                      {p.value}
                      {p.unit}
                    </span>
                  </ChartTooltipValue>)}
              </ChartTooltipContent>;
      }} />
        <ReferenceLine {...scatterReferenceLineYProps} />
        <ReferenceLine {...scatterReferenceLineXProps} />
        <Scatter {...defaultScatterProps} data={args.data}>
          {data.map((_, index) => <ChartCell {...scatterChartCellProps} key={index} fill={imagineColor(index)} />)}
        </Scatter>
        <YAxis {...scatterYAxisProps} name="Popularity" unit="%" dataKey="popularity" type="number" tick={props => <ScatterChartTick {...props} dx={-5} dy={5} unit="%" />} />
        <XAxis {...scatterXAxisProps} name="Frequency" dataKey="frequency" unit="%" type="number" tick={props => <ScatterChartTick {...props} dy={10} unit="%" />} />
      </ScatterChart>;
  }
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const M=["Default"];export{n as Default,M as __namedExportsOrder,J as default};
