import { TickText } from "../TickText";
import { Payload } from "recharts/types/component/DefaultTooltipContent";

type ScatterChartTickProps = {
  x: number;
  y: number;
  payload: Payload<number, string>;
  unit?: string;
  dx?: number;
  dy?: number;
};

export const ScatterChartTick: React.FC<ScatterChartTickProps> = ({
  x,
  y,
  dx = 0,
  dy = 0,
  unit,
  ...rest
}: ScatterChartTickProps) => {
  return (
    <TickText x={x + dx} y={y + dy} {...rest}>
      {rest.payload.value}
      {unit}
    </TickText>
  );
};
