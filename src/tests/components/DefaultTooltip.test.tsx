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
    const mockTooltipSubtitleFormatter = (payload: any) =>
      `Sub: ${payload.value}`;
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

  it("should format values using full payload", () => {
    const payload = { popularity: 12, frequency: 13 };
    const fullPayload = [
      { name: "Popularity", value: 12, unit: "%", payload },
      { name: "Frequency", value: 13, unit: "%", payload },
    ];
    render(
      <DefaultTooltip
        label="Test Label"
        payload={fullPayload}
        active={true}
        valueFormatter={(_, fullPayload) => {
          return `${fullPayload.name}: ${fullPayload.value}${fullPayload.unit}`;
        }}
      />,
    );

    expect(screen.getByText("Popularity: 12%")).toBeInTheDocument();
    expect(screen.getByText("Frequency: 13%")).toBeInTheDocument();
  });

  it("should format label when label is a function", () => {
    const payload = [
      {
        value: 123,
        payload: { name: "test-entry-name" },
      },
    ];
    render(
      <DefaultTooltip
        label={(p: { name: string }) => `${p.name}`}
        payload={payload}
        active={true}
        valueFormatter={(p: { value: number }) => `${p.value}`}
      />,
    );

    expect(screen.getByText("test-entry-name")).toBeInTheDocument();
  });
});
