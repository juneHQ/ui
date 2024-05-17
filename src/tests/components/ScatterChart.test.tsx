import { ScatterChart } from "../../../lib/main";
import { render, screen } from "../test-utils";

describe("Component ScatterChart", () => {
  it("should render without crashing", async () => {
    render(<ScatterChart />);
    expect(
      await screen.findByTestId("scatter-chart-wrapper"),
    ).toBeInTheDocument();
  });

  it("should pass className to the wrapper", async () => {
    render(<ScatterChart className="test-class" />);
    const element = await screen.findByTestId("scatter-chart-wrapper");
    expect(element).toHaveClass("test-class");
  });
});
