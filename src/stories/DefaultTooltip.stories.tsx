import { DefaultTooltip } from "../../lib/main";

import type { Meta, StoryObj } from "@storybook/react";



const meta: Meta<typeof DefaultTooltip> = {
  title: "Visualizations/Primitives/ChartTooltip",
  component: DefaultTooltip,
  args: { label: "Power users", active: true, payload: [{ payload: { value: 10, groupsCount: 100 } }], valueFormatter: (payload: any) => `${payload.value}%` },
  parameters: {
    sourceLink:
      "https://github.com/juneHQ/june-charts/tree/main/lib/components/BarChart/index.tsx",
  },
};

export default meta;
type Story = StoryObj<typeof DefaultTooltip>;

export const Default: Story = {
  args: {},
};



export const WithSubtitle: Story = {
  args: {
    payload: [{ payload: { value: 10, groupsCount: 100 } }],
    footerFormatter: (payload: any) => `Click to see all ${payload.groupsCount} companies`,
  },
};

