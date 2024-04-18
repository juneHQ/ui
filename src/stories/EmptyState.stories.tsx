import { MagnifyingGlassIcon } from '../../lib/icons/MagnifyingGlassIcon';
import { EmptyState } from '../../lib/components/EmptyState';

import type { Meta, StoryObj } from "@storybook/react";
const meta: Meta<typeof EmptyState> = {
  title: "Components/EmptyState",
  component: EmptyState,
  args: {},
};

export default meta;

type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {},
};


export const WithProps: Story = {
  args: {
    IconComponent: MagnifyingGlassIcon,
    noDataText: "There's data for this insight",
    noDataSubText: "Make sure you selected the correct events and timerange",
  },
};

