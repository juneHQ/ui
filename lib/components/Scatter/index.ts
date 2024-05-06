import { Scatter, ScatterProps as RechartsScatterProps } from "recharts";

type ScatterProps = Omit<RechartsScatterProps, "ref">;

export { Scatter, type ScatterProps };
