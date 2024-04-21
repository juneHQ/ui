import { vi } from "vitest";
import { render, screen, userEvent } from "../test-utils.ts";
import { Button } from "../../../lib/main";

describe("Button Component", () => {
  it("should render with children", () => {
    render(<Button>test-button</Button>);
    expect(screen.getByText("test-button")).toBeInTheDocument();
  });

  it("should be clickable", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick}>test-button</Button>);
    const button = screen.getByText("test-button");

    await user.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should not be clickable when disabled", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <Button onClick={onClick} disabled>
        test-button
      </Button>,
    );
    const button = screen.getByText("test-button");

    await user.click(button);
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it("should render loading label when loading", () => {
    render(<Button loading>test-button</Button>);
    expect(screen.getByLabelText(/loading/i)).toBeInTheDocument();
  });

  it("should not be clickable when loading", () => {
    const onClick = vi.fn();
    render(
      <Button onClick={onClick} loading>
        test-button
      </Button>,
    );
    const button = screen.getByLabelText(/loading/i);

    userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(0);
  });
});
