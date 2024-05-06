import {
  ChartCell,
  ChartTooltip,
  defaultScatterProps,
  DefaultTooltip,
  imagineColor,
  ReferenceLine,
  Scatter,
  ScatterChart,
  scatterChartTooltipProps,
  scatterReferenceLineXProps,
  scatterReferenceLineYProps,
  XAxis,
  YAxis,
  Grid,
  ScatterChartTick,
  scatterGridProps,
  scatterYAxisProps,
  scatterXAxisProps,
  scatterChartCellProps,
} from "../../lib/main";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ScatterChart> = {
  title: "Visualizations/Chart/ScatterChart",
  component: ScatterChart,
  parameters: {
    sourceLink:
      "https://github.com/juneHQ/june-charts/tree/main/lib/components/ScatterChart/index.tsx",
  },
};

export default meta;

type Story = StoryObj<typeof ScatterChart>;

const data = [
  {
    name: "Product A",
    frequency: 50,
    popularity: 90,
  },
  {
    name: "Product B",
    frequency: 35,
    popularity: 20,
  },
  {
    name: "Product C",
    frequency: 42,
    popularity: 53,
  },
  {
    name: "Product D",
    frequency: 82,
    popularity: 11,
  },
  {
    name: "Product E",
    frequency: 11,
    popularity: 60,
  },
];

export const Default: Story = {
  args: { data },
  render: (args) => {
    return (
      <ScatterChart>
        <Grid {...scatterGridProps} />
        <ChartTooltip
          {...scatterChartTooltipProps}
          content={({ active, payload }) => (
            <DefaultTooltip
              label={(entry) => entry.name}
              active={active}
              payload={payload}
              valueFormatter={(_, p) => {
                return `${p.name}: ${p.value}${p.unit}`;
              }}
            />
          )}
        />
        <ReferenceLine {...scatterReferenceLineYProps} />
        <ReferenceLine {...scatterReferenceLineXProps} />
        <Scatter {...defaultScatterProps} data={args.data}>
          {data.map((_, index) => (
            <ChartCell
              {...scatterChartCellProps}
              key={index}
              fill={imagineColor(index)}
            />
          ))}
        </Scatter>
        <YAxis
          {...scatterYAxisProps}
          name="Popularity"
          unit="%"
          dataKey="popularity"
          type="number"
          tick={(props) => (
            <ScatterChartTick {...props} dx={-5} dy={5} unit="%" />
          )}
        />
        <XAxis
          {...scatterXAxisProps}
          name="Frequency"
          dataKey="frequency"
          unit="%"
          type="number"
          tick={(props) => <ScatterChartTick {...props} dy={10} unit="%" />}
        />
      </ScatterChart>
    );
  },
};
