import { useEffect, useRef } from "react";
import { Combobox } from "@headlessui/react";
import { cx } from "../common/utils";
import { MagnifyingGlassIcon } from "../../icons/MagnifyingGlassIcon";

interface ICommandInputProps {
  placeholder?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  className?: string;
}

export const CommandInput: React.FC<ICommandInputProps> = ({
  placeholder = "Search...",
  onChange,
  icon = (
    <MagnifyingGlassIcon
      className="pointer-events-none absolute inset-y-0 left-2 h-full w-4 text-gray-400"
      aria-hidden="true"
    />
  ),
  className,
  value,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onChange({
          target: { value: "" },
        } as React.ChangeEvent<HTMLInputElement>);
      }
    };

    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cx("relative flex items-center", className ?? "")}>
      {icon}
      <Combobox.Input
        as="input"
        ref={inputRef}
        autoComplete="off"
        value={value ?? ""}
        onChange={onChange}
        placeholder={placeholder ?? "Search..."}
        className="block w-full rounded-md border-0 py-1.5 pl-8 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-gray-300 sm:text-sm sm:leading-4"
      />
    </div>
  );
};
