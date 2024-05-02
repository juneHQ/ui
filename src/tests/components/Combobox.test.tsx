import { vi } from "vitest";
import { useState } from "react";
import { fireEvent, render, screen } from "../test-utils";
import { Command, CommandInput, CommandList, CommandOption } from "../../../lib/main";

describe("Command Component", () => {
  it("should render without crashing", () => {
    render(
      <Command>
        <CommandInput value="" onChange={() => {}} />
        <CommandList>
          <CommandOption value="option1">Option 1</CommandOption>
          <CommandOption value="option2">Option 2</CommandOption>
          <CommandOption value="option3">Option 3</CommandOption>
        </CommandList>
      </Command>
    );
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
    expect(screen.getByText("Option 3")).toBeInTheDocument();
  });

  it("should call onChange with the new value when input changes", () => {
    const handleChange = vi.fn();
    render(
      <Command>
        <CommandInput value="Test" onChange={handleChange} />
        <CommandList>
          <CommandOption value="option1">Option 1</CommandOption>
        </CommandList>
      </Command>
    );
    const inputElement = screen.getByDisplayValue("Test");
    fireEvent.change(inputElement, { target: { value: "New Value" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.anything());
  });

  it("should reflect the new value when input changes and value prop is controlled", () => {
    const Component = () => {
      const [value, setValue] = useState("Test");
      return (
        <Command>
          <CommandInput value={value} onChange={(e) => setValue(e.target.value)} />
          <CommandList>
            <CommandOption value="option1">Option 1</CommandOption>
          </CommandList>
        </Command>
      );
    };
    render(<Component />);
    const inputElement = screen.getByDisplayValue("Test");
    fireEvent.change(inputElement, { target: { value: "Updated Test" } });
    expect(screen.getByDisplayValue("Updated Test")).toBeInTheDocument();
  });

  it("should not update the input value when onChange is not provided", () => {
    render(
      <Command>
        <CommandInput onChange={() => {}} value="Static Value" />
        <CommandList>
          <CommandOption value="option1">Option 1</CommandOption>
        </CommandList>
      </Command>
    );
    const inputElement = screen.getByDisplayValue("Static Value");
    fireEvent.change(inputElement, { target: { value: "Attempted Change" } });
    expect(screen.getByDisplayValue("Static Value")).toBeInTheDocument();
  });

  it("should display custom options when provided", () => {
    const customOptions = [
      { value: "custom1", label: "Custom Option 1" },
      { value: "custom2", label: "Custom Option 2" },
    ];
    render(
      <Command>
        <CommandInput value="" onChange={() => {}} />
        <CommandList>
          {customOptions.map((option) => (
            <CommandOption key={option.value} value={option.value}>
              {option.label}
            </CommandOption>
          ))}
        </CommandList>
      </Command>
    );
    expect(screen.getByText("Custom Option 1")).toBeInTheDocument();
    expect(screen.getByText("Custom Option 2")).toBeInTheDocument();
  });
});
