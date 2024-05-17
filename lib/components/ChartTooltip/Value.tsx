import { cx } from "../common/utils.ts";

type ChartTooltipValueProps = React.HTMLProps<HTMLParagraphElement>;

export const ChartTooltipValue: React.FC<ChartTooltipValueProps> = ({
  children,
  className,
  ...rest
}) => (
  <p className={cx(className, "text-sm text-white gap-1 flex")} {...rest}>
    {children}
  </p>
);
