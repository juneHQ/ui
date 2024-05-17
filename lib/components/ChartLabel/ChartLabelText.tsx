import { ViewBox } from "recharts/types/util/types";
import React from "react";
import { cx } from "../common/utils.ts";

export type ChartLabelTextProps = {
  children: React.ReactNode;
  dy?: number;
  dx?: number;
  viewBox?: ViewBox;
  className?: string;
};

export function ChartLabelText({
  children,
  dy = -5,
  dx = 0,
  viewBox,
  className,
}: ChartLabelTextProps) {
  if (!viewBox) {
    console.warn("ChartLabelText requires a viewBox prop");
    return null;
  }

  const isCartesianViewBox = "x" in viewBox && "y" in viewBox;

  if (!isCartesianViewBox) {
    console.warn("ChartLabelText currently only accepts CartesianViewBox");
    return null;
  }

  return (
    <text
      fontSize="10px"
      x={viewBox.x}
      y={viewBox.y}
      dy={dy}
      dx={dx}
      stroke="none"
      className={cx("fill-purple-500", className)}
    >
      {children}
    </text>
  );
}
