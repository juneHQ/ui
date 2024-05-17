import { YAxis, YAxisProps as RechartsYAxisProps } from 'recharts';

type YAxisProps = Omit<RechartsYAxisProps, "ref">;
export { YAxis, type YAxisProps };
