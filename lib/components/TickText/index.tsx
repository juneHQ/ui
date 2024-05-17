import React from "react";
import { cx } from "../common/utils.ts";

export type TickTextProps = React.SVGProps<SVGTextElement>;

export const TickText: React.FC<TickTextProps> = ({
  children,
  className,
  ...rest
}) => (
  <text {...rest} className={cx("text-xs text-gray-800", className)}>
    {children}
  </text>
);
