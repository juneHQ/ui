import { TickText } from "../TickText";
import { Payload } from "recharts/types/component/DefaultTooltipContent";

type ScatterChartTickProps = {
  x: number;
  y: number;
  payload: Payload<number, string>;
  unit?: string;
  dx?: number;
  dy?: number;
} & React.SVGProps<SVGTextElement>;

export const ScatterChartTick: React.FC<ScatterChartTickProps> = ({
  x,
  y,
  dx = 0,
  dy = 0,
  unit,
  ...rest
}: ScatterChartTickProps) => (
  <TickText
    x={x + dx}
    y={y + dy}
    fill={rest.fill}
    height={rest.height}
    name={rest.name}
    orientation={rest.orientation}
    stroke={rest.stroke}
    textAnchor={rest.textAnchor}
    width={rest.width}
  >
    {rest.payload.value}
    {unit}
  </TickText>
);
