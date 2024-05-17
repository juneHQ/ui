import { cx } from "../common/utils.ts";

type ChartTooltipTitleProps = React.HTMLProps<HTMLParagraphElement>;

export const ChartTooltipTitle: React.FC<ChartTooltipTitleProps> = ({
  children,
  className,
  ...rest
}) => (
  <p className={cx(className, "text-xs text-gray-400")} {...rest}>
    {children}
  </p>
);
