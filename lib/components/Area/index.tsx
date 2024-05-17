import { Area, type AreaProps as RechartsAreaProps } from "recharts";

type AreaProps = Omit<RechartsAreaProps, "ref">;

export { Area, type AreaProps };
