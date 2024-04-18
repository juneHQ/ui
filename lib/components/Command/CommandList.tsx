import { HTMLAttributes } from 'react';
import { Combobox } from '@headlessui/react';
import { cx } from '../common/utils';

interface ICommandListProps extends Omit<HTMLAttributes<HTMLUListElement>, 'onCopy'> {
  className?: string;
  children?: React.ReactNode;
  "data-testid"?: string;
}

export const CommandList: React.FC<ICommandListProps> = ({
  children,
  className,
  "data-testid": dataTestId,
  ...props
}) => {
  return (
    <Combobox.Options
      static
      as="ul"
      className={cx(className ?? "flex flex-col gap-1")}
      data-testid={dataTestId}
      {...props}
    >
      {children}
    </Combobox.Options>
  );
};
