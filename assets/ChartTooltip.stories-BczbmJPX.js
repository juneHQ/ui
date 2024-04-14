import{C as i}from"./index-CHU6MEdL.js";import"./index-CsdIBAqE.js";const m={title:"Visualizations/Primitives/ChartTooltip",component:i,args:{label:"Power users",active:!0,payload:[{value:10}],valueFormatter:e=>`${e}%`},parameters:{sourceLink:"https://github.com/juneHQ/june-charts/tree/main/lib/components/BarChart/index.tsx"}},a={args:{}},t={args:{payload:[{value:10,payload:{groupsCount:100}}],tooltipSubtitleFormatter:e=>`Click to see all ${e.payload.groupsCount} companies`}};var o,r,s;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {}
}`,...(s=(r=a.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var l,n,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    payload: [{
      value: 10,
      payload: {
        groupsCount: 100
      }
    }],
    tooltipSubtitleFormatter: (payload: any) => \`Click to see all \${payload.payload.groupsCount} companies\`
  }
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const d=["Default","WithSubtitle"];export{a as Default,t as WithSubtitle,d as __namedExportsOrder,m as default};
