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

  it("should render accessible loading label when loading without loadingText", () => {
    render(<Button loading>test-button</Button>);
    expect(screen.getByLabelText(/loading/i)).toBeInTheDocument();
  });

  it("should render loading text when loading with loadingText", () => {
    render(
      <Button loading loadingText="Submitting">
        test-button
      </Button>,
    );
    expect(screen.getByText("Submitting")).toBeInTheDocument();
  });

  it("should not be clickable when loading", async () => {
    const onClick = vi.fn();
    render(
      <Button onClick={onClick} loading>
        test-button
      </Button>,
    );
    const button = screen.getByLabelText(/loading/i);

    await userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it("should append html button props to component", () => {
    render(<Button lang="test-lang">test-button</Button>);
    expect(screen.getByText("test-button")).toHaveAttribute(
      "lang",
      "test-lang",
    );
  });

  it("should prepend className to the button", () => {
    render(<Button className="test-class">test-button</Button>);
    expect(screen.getByText("test-button")).toHaveClass("test-class");
  });

  it("should keep button width when loading and no loadingText", () => {
    render(<Button loading>test-button</Button>);
    const label = screen.getByText("test-button");

    // label is still rendered in the DOM with opacity set to 0 to keep initial button width
    expect(label).toHaveClass("invisible");
  });

  it("should render as link when link props", () => {
    render(
      <Button href="https://june.so" target="_blank" rel="noreferrer">
        test-button
      </Button>,
    );

    const link = screen.getByText("test-button");
    expect(link).toHaveAttribute("href", "https://june.so");
  });
});
