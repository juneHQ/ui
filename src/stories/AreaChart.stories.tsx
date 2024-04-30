import type { Meta, StoryObj } from "@storybook/react";
import {
  defaultGridProps,
  defaultXAxisProps,
  defaultYAxisProps,
  Grid,
  XAxis,
  YAxis,
  Area,
  AreaChart,
  ReferenceLine,
  defaultAreaProps,
  defaultReferenceLineProps,
} from "../../lib/main.ts";

type Story = StoryObj<typeof AreaChart>;

const data = [
  { x: "Mon", y: 0 },
  { x: "Tue", y: 30 },
  { x: "Wed", y: 20 },
  { x: "Thu", y: 35 },
  { x: "Fri", y: 27 },
  { x: "Sat", y: 40 },
  { x: "Sun", y: 60 },
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
  },
  render: (args) => (
    <div>
      <AreaChart {...args}>
        <Grid {...defaultGridProps} />
        <YAxis {...defaultYAxisProps} dataKey="y" />
        <XAxis {...defaultXAxisProps} dataKey="x" />
        <ReferenceLine {...defaultReferenceLineProps} x="Wed" />
        <Area {...defaultAreaProps} dataKey="y" />
      </AreaChart>
    </div>
  ),
};
