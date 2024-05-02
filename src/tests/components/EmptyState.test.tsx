import { render, screen } from "../test-utils";
import { EmptyState } from "../../../lib/main";

describe("EmptyState", () => {
  it("should render without crashing", async () => {
    render(<EmptyState />);
    expect(await screen.findByText("There's no data for this insight")).toBeInTheDocument();
  });

  it("renders custom no data text", async () => {
    const customText = "No data available";
    render(<EmptyState noDataText={customText} />);
    expect(await screen.findByText(customText)).toBeInTheDocument();
  });

  it("renders custom subtext", async () => {
    const customSubText = "Please check your filters";
    render(<EmptyState noDataSubText={customSubText} />);
    expect(await screen.findByText(customSubText)).toBeInTheDocument();
  });
});
