import { ReferenceLineProps } from "./index.ts";

export const defaultReferenceLineProps: ReferenceLineProps = {
  stroke: "inherit",
  className: "stroke-gray-300",
};

export const scatterReferenceLineXProps: ReferenceLineProps = {
  ...defaultReferenceLineProps,
  x: 50,
};

export const scatterReferenceLineYProps: ReferenceLineProps = {
  ...defaultReferenceLineProps,
  y: 50,
};
