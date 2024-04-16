import {
  BarChart,
  BarItem,
  ChartTooltip,
  defaultGridProps,
  DefaultTooltip,
  defaultXAxisProps,
  defaultYAxisProps,
  XAxis,
  YAxis,
} from '../../lib/main';
import { Grid } from '../../lib/components/Grid';

import type { Meta, StoryObj } from "@storybook/react";
const data = [
  {
    month: "Jan 24",
    Sales: 4400,
  },
  {
    month: "Feb 24",
    Sales: 3612,
  },
];


const meta: Meta<typeof BarChart> = {
  title: "Visualizations/Chart/BarChart",
  component: BarChart,
  args: { categories: ["Sales"], index: "month", data, className: "h-72"},
  parameters: {
    sourceLink:
      "https://github.com/juneHQ/june-charts/tree/main/lib/components/BarChart/index.tsx",
  },
};

export default meta;

type Story = StoryObj<typeof BarChart>;

export const Default: Story = {
  args: { categories: ["Sales"], index: "month", data, className: "h-72"},
  render: (args) => (
    <>
      <BarChart {...args} >
        <Grid  {...defaultGridProps}  />
        <ChartTooltip 
            content={({ active, payload, label }) => <DefaultTooltip label={label} active={active} payload={payload} valueFormatter={(p)=> `${p.Sales} Sales`} />}
        />
        <BarItem dataKey="Sales" />
        <YAxis {...defaultYAxisProps} />
        <XAxis {...defaultXAxisProps} dataKey="month" />
      </BarChart>
    </>
  ),
};

export const PowerUsersL7D: Story = {

  args: {
    categories: ["groupsPercentage"],
    index: "name",
    data: [
      {
        name: "1 Day",
        days: 1,
        groupsPercentage: 40,
        groupsCount: 100,
      },
      {
        name: "2 Days",
        days: 2,
        groupsPercentage: 20,
        groupsCount: 0,
      },
      {
        name: "3 Days",
        days: 3,
        groupsPercentage: 20,
        groupsCount: 0,
      },
      {
        name: "4 Days",
        days: 4,
        groupsPercentage: 20,
        groupsCount: 0,
      },
      {
        name: "5 Days",
        days: 5,
        groupsPercentage: 20,
        groupsCount: 0,
      },
      {
        name: "6 Days",
        days: 6,
        groupsPercentage: 20,
        groupsCount: 0,
      },
      {
        name: "7 Days",
        days: 7,
        groupsPercentage: 20,
        groupsCount: 0,
      },
    ],
  },

  render: (args) => (
    <BarChart {...args}>
      <Grid  {...defaultGridProps}  />
      <ChartTooltip 
          content={({ active, payload, label }) => <DefaultTooltip label={label} active={active} payload={payload} valueFormatter={(payload: any) => `${payload.groupsPercentage}%`} footerFormatter={(payload: any) => `Click to see all ${payload.groupsCount} companies`} />}
      />
      <BarItem dataKey="groupsPercentage" />
      <YAxis {...defaultYAxisProps} />
      <XAxis {...defaultXAxisProps} dataKey="name" />
    </BarChart>
  ),
};
