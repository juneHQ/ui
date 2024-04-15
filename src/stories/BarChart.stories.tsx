import { Grid } from '../../lib/components/Grid';
import { BarChart } from '../../lib/components/BarChart';

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


export const EmptyData: Story = {
  args: {
    data: [],
  },
};

export const Default: Story = {
  args: {},
};

export const WithGrid: Story = {
  render: (args) => (
    <>
      <BarChart {...args} >
        <Grid />
      </BarChart>
    </>
  ),
  args: {
    data,
    categories: ["Sales"],
    index: "month",
  },
};

export const PowerUsersL7D: Story = {
  render: (args) => (
    <>
      <BarChart {...args} >
        <Grid />
      </BarChart>
    </>
  ),
  args: {
    categories: ["groupsPercentage"],
    index: "name",
    valueFormatter: (value: number) => `${value}%`,
    tooltipSubtitleFormatter: (payload: any) => `Click to see all ${payload.payload.groupsCount} companies`,
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
};
