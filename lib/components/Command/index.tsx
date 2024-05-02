import { HTMLAttributes } from "react";
import { Combobox } from "@headlessui/react";
import { cx } from "../common/utils";

interface ICommandProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  className?: string;
  children?: React.ReactNode;
}

export const Command: React.FC<ICommandProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <Combobox
      as="div"
      className={cx(
        "absolute z-popover mt-1 max-h-60 w-[200px] overflow-y-auto overflow-x-hidden rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
        className ?? "",
      )}
      {...props}
    >
      <div className="flex flex-col gap-2 px-2 py-1">{children}</div>
    </Combobox>
  );
};

export { CommandOption } from "./CommandOption";
export { CommandList } from "./CommandList";
export { CommandInput } from "./CommandInput";
export { Lifecycle } from "./Lifecycle";
