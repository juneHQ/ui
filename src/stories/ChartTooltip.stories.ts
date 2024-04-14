import { ChartTooltip } from '../../lib/components/ChartTooltip';

import type { Meta, StoryObj } from "@storybook/react";



const meta: Meta<typeof ChartTooltip> = {
  title: "Visualizations/Primitives/ChartTooltip",
  component: ChartTooltip,
  args: { label: "Power users", active: true, payload: [{ value: 10 }], valueFormatter: (value: number) => `${value}%` },
  parameters: {
    sourceLink:
      "https://github.com/juneHQ/june-charts/tree/main/lib/components/BarChart/index.tsx",
  },
};

export default meta;
type Story = StoryObj<typeof ChartTooltip>;

export const Default: Story = {
  args: {},
};



export const WithSubtitle: Story = {
  args: {
    payload: [{ value: 10, payload: { groupsCount: 100 } }],
    tooltipSubtitleFormatter: (payload: any) => `Click to see all ${payload.payload.groupsCount} companies`,
  },
};

