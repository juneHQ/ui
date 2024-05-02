import { render, screen } from "../test-utils";
import { LineChart, Line } from "../../../lib/main";

describe("Component LineChart", () => {
  const mockData = [
    { month: "Jan", Users: 1000 },
    { month: "Feb", Users: 1200 },
  ];

  it("should render without crashing", async () => {
    render(
      <LineChart data={mockData}>
        <Line dataKey="Users" />
      </LineChart>,
    );
    expect(await screen.findByTestId("line-chart-wrapper")).toBeInTheDocument();
  });
});
