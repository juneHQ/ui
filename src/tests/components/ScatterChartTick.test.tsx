import { render, screen } from "../test-utils";
import { ScatterChartTick } from "../../../lib/main.ts";

describe("Component ScatterChartTick", () => {
  it("should render without crashing", async () => {
    render(
      <svg>
        <ScatterChartTick x={0} y={0} payload={{ value: 100 }} unit="%" />
      </svg>,
    );
    expect(await screen.findByText("100%")).toBeInTheDocument();
  });

  it("should calculate the correct x and y position", async () => {
    render(
      <svg>
        <ScatterChartTick
          x={10}
          dx={-5}
          y={20}
          dy={5}
          payload={{ value: 100 }}
        />
      </svg>,
    );
    const element = await screen.findByText("100");
    expect(element).toHaveAttribute("x", "5");
    expect(element).toHaveAttribute("y", "25");
  });
});
