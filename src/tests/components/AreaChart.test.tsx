import { render, screen } from "../test-utils";
import { Area, AreaChart } from "../../../lib/main";

describe("AreaChart", () => {
  const mockData = [
    { month: "Jan", Active: 1000 },
    { month: "Feb", Active: 1200 },
  ];

  it("should render without crashing", async () => {
    render(
      <AreaChart data={mockData}>
        <Area dataKey="Active" />
      </AreaChart>,
    );
    expect(await screen.findByTestId("area-chart-wrapper")).toBeInTheDocument();
  });
});
