import React from "react";
import { render, screen } from "../test-utils";
import { DefaultTooltip } from "../../../lib/main";

describe("DefaultTooltip", () => {
  const mockPayload = [{ payload: { value: 100 } }];
  const mockValueFormatter = (payload: any) => `$${payload.value}`;

  it("should not render when not active", () => {
    render(
      <DefaultTooltip
        label="Test Label"
        payload={mockPayload}
        active={false}
        valueFormatter={mockValueFormatter}
      />,
    );
    expect(screen.queryByText("Test Label")).not.toBeInTheDocument();
  });

  it("should render correctly when active", () => {
    render(
      <DefaultTooltip
        label="Test Label"
        payload={mockPayload}
        active={true}
        valueFormatter={mockValueFormatter}
      />,
    );
    expect(screen.getByText("Test Label")).toBeInTheDocument();
    expect(screen.getByText("$100")).toBeInTheDocument();
  });

  it("should render subtitle when tooltipSubtitleFormatter is provided", () => {
    const mockTooltipSubtitleFormatter = (payload: any) => `Sub: ${payload.value}`;
    render(
      <DefaultTooltip
        label="Test Label"
        payload={mockPayload}
        active={true}
        valueFormatter={mockValueFormatter}
        footerFormatter={mockTooltipSubtitleFormatter}
      />,
    );
    expect(screen.getByText("Test Label")).toBeInTheDocument();
    expect(screen.getByText("$100")).toBeInTheDocument();
    expect(screen.getByText("Sub: 100")).toBeInTheDocument();
  });
});
