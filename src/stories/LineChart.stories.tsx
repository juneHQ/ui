import {
  LineChart,
  Line,
  defaultLineProps,
  ChartTooltip,
  defaultGridProps,
  DefaultTooltip,
  defaultXAxisProps,
  defaultYAxisProps,
  XAxis,
  YAxis,
  defaultTooltipProps,
} from "../../lib/main";
import { Grid } from "../../lib/components/Grid";

import type { Meta, StoryObj } from "@storybook/react";
const data = [
  {
    month: "Jan 24",
    Users: 240,
  },
  {
    month: "Feb 24",
    Users: 290,
  },
  {
    month: "Mar 24",
    Users: 320,
  },
  {
    month: "Apr 24",
    Users: 325,
  },
  {
    month: "May 24",
    Users: 330,
  },
];

const meta: Meta<typeof LineChart> = {
  title: "Visualizations/Chart/LineChart",
  component: LineChart,
  args: { data, className: "h-72" },
  parameters: {
    sourceLink:
      "https://github.com/juneHQ/june-charts/tree/main/lib/components/LineChart/index.tsx",
  },
};

export default meta;

type Story = StoryObj<typeof LineChart>;

export const Default: Story = {
  args: { data, className: "h-72" },
  render: (args) => (
    <>
      <LineChart {...args}>
        <Grid {...defaultGridProps} />
        <ChartTooltip
          {...defaultTooltipProps}
          content={({ active, payload, label }) => (
            <DefaultTooltip
              label={label}
              active={active}
              payload={payload}
              valueFormatter={(p) => `${p.Users} Users`}
            />
          )}
        />
        <Line {...defaultLineProps} dataKey="Users" />
        <YAxis {...defaultYAxisProps} />
        <XAxis {...defaultXAxisProps} dataKey="month" />
      </LineChart>
    </>
  ),
};
