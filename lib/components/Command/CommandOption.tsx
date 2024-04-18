import { HTMLAttributes } from 'react';
import { Combobox } from '@headlessui/react';
import { cx } from '../common/utils';

interface ICommandOptionProps extends HTMLAttributes<HTMLLIElement> {
  value: string | (() => void);
  disabled?: boolean;
  activeClassName?: string;
  children: React.ReactNode;
  rightIcon?: React.ReactNode;
  testId?: string;
}

export const CommandOption: React.FC<ICommandOptionProps> = ({
  value,
  activeClassName = "bg-gray-200",
  children,
  disabled,
  rightIcon,
  testId,
  ...props
}) => {
  return (
    <Combobox.Option
      data-testid={testId}
      value={value}
      disabled={disabled}
      {...props}
    >
      {({ active: isActive }) => (
        <div
          className={cx(
            "flex w-full cursor-pointer items-center justify-between rounded-md px-2 py-1.5",
            isActive
              ? `hover:${activeClassName} ${activeClassName}`
              : "bg-transparent hover:bg-gray-100",
            disabled ? "cursor-not-allowed text-gray-400" : "text-gray-900",
          )}
        >
          <p className={"line-clamp-1 w-full text-left sm:leading-4"}>
            {children}
          </p>
          {rightIcon}
        </div>
      )}
    </Combobox.Option>
  );
};
