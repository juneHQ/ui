import type { Meta, StoryObj } from "@storybook/react";
import {
  Area,
  AreaChart,
  ChartTooltip,
  defaultAreaProps,
  defaultDotProps,
  defaultGridProps,
  defaultReferenceLineProps,
  DefaultTooltip,
  defaultTooltipProps,
  defaultXAxisProps,
  defaultYAxisProps,
  Dot,
  Grid,
  Legend,
  ReferenceLine,
  XAxis,
  YAxis,
  ChartLabel,
  ChartLabelText,
} from "../../lib/main.ts";

type Story = StoryObj<typeof AreaChart>;

const data = [
  { x: "Mon", y: 0 },
  { x: "Tue", y: 30 },
  { x: "Wed", y: 20 },
  { x: "Thu", y: 60 },
  { x: "Fri", y: 27 },
  { x: "Sat", y: 40 },
  { x: "Sun", y: 30 },
];

const meta: Meta<typeof AreaChart> = {
  title: "Visualizations/Chart/AreaChart",
  component: AreaChart,
  args: { data },
  parameters: {
    sourceLink:
      "https://github.com/juneHQ/june-charts/tree/main/lib/components/AreaChart/index.tsx",
  },
};

export default meta;

export const Default: Story = {
  args: {
    data,
    margin: { top: 20, left: 10, right: 10, bottom: 10 },
  },
  render: (args) => (
    <AreaChart {...args}>
      <Grid {...defaultGridProps} />
      <YAxis {...defaultYAxisProps} dataKey="y" />
      <XAxis {...defaultXAxisProps} dataKey="x" />
      <ChartTooltip
          {...defaultTooltipProps}
          content={({ active, payload, label }) => (
          <DefaultTooltip
            label={label}
            active={active}
            payload={payload}
            valueFormatter={(p) => `${p.y} count`}
          />
        )}
      />
      <ReferenceLine
        {...defaultReferenceLineProps}
        y={data.sort((a, b) => b.y - a.y)[0].y}
      >
        <ChartLabel
          content={({ viewBox }) => (
            <ChartLabelText viewBox={viewBox}>All time high</ChartLabelText>
          )}
        ></ChartLabel>
      </ReferenceLine>
      <Area
        {...defaultAreaProps}
        activeDot={
          <Dot {...defaultDotProps} onClick={() => {}} cursor={"pointer"} />
        }
        dataKey="y"
      />
      <Legend
        content={() => (
          <div className="text-center">
            <div>x – day</div>
            <div>y – users</div>
          </div>
        )}
      />
    </AreaChart>
  ),
};
