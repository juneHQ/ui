import { XAxis as RechartsXAxis } from 'recharts';

export const XAxis = () => {
  return (
    <RechartsXAxis
    padding={{ left: paddingValue, right: paddingValue }}
    dataKey={index}
    interval={startEndOnly ? "preserveStartEnd" : intervalType}
    tick={{ transform: "translate(0, 6)" }}
    ticks={startEndOnly ? [data[0][index], data[data.length - 1][index]] : undefined}
    fill=""
    stroke=""
    className="mt-4 text-xs fill-gray-600"
    tickLine={false}
    axisLine={false}
    angle={rotateLabelX?.angle}
    dy={rotateLabelX?.verticalShift}
    height={rotateLabelX?.xAxisHeight}
    minTickGap={tickGap}
    />
  );
};

