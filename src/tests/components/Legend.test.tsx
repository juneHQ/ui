import { describe, it, expect } from "vitest";
import { render, screen } from "../test-utils.ts";
import { Legend } from "../../../lib/main.ts";

describe("Legend Component", () => {
  it("should render with content", async () => {
    render(<Legend content={() => <div>test-legend</div>}></Legend>);
    expect(await screen.findByText("test-legend")).toBeInTheDocument();
  });
});
