import { Command, CommandInput, CommandList, CommandOption } from '../../lib/main';

import type { Meta, StoryObj } from "@storybook/react";



const meta: Meta<typeof Command> = {
  title: "Components/Combobox",
  component: Command,
  args: {},
  parameters: {
    sourceLink:
      "https://github.com/juneHQ/june-charts/tree/main/lib/components/BarChart/index.tsx",
  },
};

export default meta;
type Story = StoryObj<typeof Command>;

export const Default: Story = {
  args: {},
  render: () => {
    return <Command>
      <CommandInput onChange={() => {}} />
      <CommandList>
        <CommandOption value="option1">Option 1</CommandOption>
        <CommandOption value="option2">Option 2</CommandOption>
        <CommandOption value="option3">Option 3</CommandOption>
      </CommandList>
    </Command>
  }
};



