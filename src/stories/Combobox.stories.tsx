import { useState } from "react";
import {
  Button,
  Command,
  CommandInput,
  CommandList,
  CommandOption,
  Lifecycle,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "../../lib/main";

import type { Meta, StoryObj } from "@storybook/react";
const meta: Meta<typeof Command> = {
	title: "Components/Combobox",
	component: Command,
	args: {},
	parameters: {
		sourceLink:
			"https://github.com/juneHQ/ui/tree/main/lib/components/Command/index.tsx",
	},
};

export default meta;
type Story = StoryObj<typeof Command>;

export const Default: Story = {
	args: {},
	render: () => {
		const [searchValue, setSearchValue] = useState("");
		return <Popover className="relative">
			<PopoverButton>
				<Button>Select an option</Button>
			</PopoverButton>
			<PopoverPanel>
				<>
					<Lifecycle onUnmount={() => setSearchValue("")} />
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
			</PopoverPanel>
		</Popover>;
	}
};
type OptionType = { value: string; label: string };

type VeryLongOptionStory = StoryObj<{
	args: {
		customOptions: OptionType[];
	};
	argTypes: {
		customOptions: {
			control: string;
			description: string;
		};
	};
	render: (args: { customOptions: OptionType[] }) => JSX.Element;
}>;

export const VeryLongOption: VeryLongOptionStory = {
	args: {
		customOptions: [
			{ value: "option1", label: "Option 1 with very very long name" },
			{ value: "option2", label: "Option 2" },
			{ value: "option3", label: "Option 3" },
		],
	},
	argTypes: {
		customOptions: {
			control: "object",
			description: "Array of options for the combobox",
		},
	},
	render: (args) => {
		const [searchValue, setSearchValue] = useState("");
		return <Command>
			<CommandInput value={searchValue} onChange={(e) => {
				setSearchValue(e.target.value);
			}} />
			<CommandList>
				{args.customOptions.map((option) => (
					<CommandOption key={option.value} value={option.value}>
						{option.label}
					</CommandOption>
				))}
			</CommandList>
		</Command>
	}
};