import { useState } from 'react';
import {
  Command,
  CommandInput,
  CommandList,
  CommandOption,
  Lifecycle,
  Popover,
} from '../../lib/main';

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
    const [searchValue, setSearchValue] = useState("");
    return  <Popover className="relative">
    <Popover.Button>
      ButtonComponent (TODO: replace with our button component, once it's ready)
    </Popover.Button>
    <Popover.Panel>
      <>
        <Lifecycle  onUnmount={() => setSearchValue("")}/>
        <Command>
          <CommandInput value={searchValue} onChange={(e) => {
            setSearchValue(e.target.value);
          }} />
          <CommandList>
            <CommandOption value="option1">Option 1</CommandOption>
            <CommandOption value="option2">Option 2</CommandOption>
            <CommandOption value="option3">Option 3</CommandOption>
          </CommandList>
        </Command>
      </>
    </Popover.Panel>
  </Popover>;
  }
};



