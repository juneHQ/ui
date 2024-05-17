import { XAxis, XAxisProps as RechartsXAxisProps } from "recharts";

type XAxisProps = Omit<RechartsXAxisProps, "ref">;

export { XAxis, type XAxisProps };
