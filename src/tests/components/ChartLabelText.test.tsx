import { render, screen } from "../test-utils.ts";
import { ChartLabelText } from "../../../lib/main.ts";

describe("Component ChartLabelText", () => {
  it("should render when correct viewBox is provided", async () => {
    render(
      <svg>
        <ChartLabelText viewBox={{ x: 0, y: 0 }}>test-label</ChartLabelText>,
      </svg>,
    );
    expect(await screen.findByText("test-label")).toBeInTheDocument();
  });

  it("should not render when no viewBox", () => {
    render(
      <svg>
        <ChartLabelText>test-label</ChartLabelText>
      </svg>,
    );
    expect(screen.queryByText("test-label")).not.toBeInTheDocument();
  });

  it("should not render when viewBox is PolarViewBox", () => {
    render(
      <svg>
        <ChartLabelText viewBox={{ cx: 0, cy: 0 }}>test-label</ChartLabelText>
      </svg>,
    );
    expect(screen.queryByText("test-label")).not.toBeInTheDocument();
  });

  it("should render with custom classNames", async () => {
    render(
      <svg>
        <ChartLabelText viewBox={{ x: 0, y: 0 }} className="fill-red-500">
          test-label
        </ChartLabelText>
      </svg>,
    );
    expect(await screen.findByText("test-label")).toHaveClass("fill-red-500");
  });

  it("should override default dy and dx", async () => {
    render(
      <svg>
        <ChartLabelText viewBox={{ x: 0, y: 0 }} dy={12} dx={34}>
          test-label
        </ChartLabelText>
      </svg>,
    );

    const element = await screen.findByText("test-label");

    expect(element).toHaveAttribute("dy", "12");
    expect(element).toHaveAttribute("dx", "34");
  });
});
