import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../lib/components/Button";
import { MagnifyingGlassIcon } from "../../lib/icons/MagnifyingGlassIcon.tsx";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Default button",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

export const YellowOutline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
    color: "yellow",
  },
};

export const PurpleGhost: Story = {
  args: {
    children: "Purple ghost",
    color: "purple",
    variant: "ghost",
  },
};

export const Loading: Story = {
  args: {
    children: "Long button text",
    loading: true,
  },
};

export const LoadingWithText: Story = {
  args: {
    children: "Loading",
    loading: true,
    loadingText: "Submitting...",
  },
};

export const Large: Story = {
  args: {
    children: "Large",
    size: "lg",
  },
};

export const IconAndText: Story = {
  args: {
    children: (
      <>
        <MagnifyingGlassIcon />
        Search
      </>
    ),
  },
};

export const IconOnly: Story = {
  args: {
    children: <MagnifyingGlassIcon />,
    color: "purple",
    size: "sm",
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    children: "Open June",
    variant: "ghost",
    color: "purple",
    href: "https://june.so",
    target: "_blank",
    rel: "noreferrer",
  },
};
