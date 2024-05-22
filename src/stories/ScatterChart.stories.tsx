import {
  ChartCell,
  ChartTooltip,
  ChartTooltipContent,
  ChartTooltipTitle,
  ChartTooltipValue,
  defaultScatterProps,
  Grid,
  imagineColor,
  ReferenceLine,
  Scatter,
  ScatterChart,
  scatterChartCellProps,
  ScatterChartTick,
  scatterChartTooltipProps,
  scatterGridProps,
  scatterReferenceLineXProps,
  scatterReferenceLineYProps,
  scatterXAxisProps,
  scatterYAxisProps,
  XAxis,
  YAxis,
} from "../../lib/main";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ScatterChart> = {
	title: "Visualizations/Chart/ScatterChart",
	component: ScatterChart,
	parameters: {
		sourceLink:
			"https://github.com/juneHQ/ui/tree/main/lib/components/ScatterChart/index.tsx",
	},
};

export default meta;

type Story = StoryObj<typeof ScatterChart>;

const data = [
	{
		name: "Product A",
		frequency: 50,
		popularity: 90,
	},
	{
		name: "Product B",
		frequency: 35,
		popularity: 20,
	},
	{
		name: "Product C",
		frequency: 42,
		popularity: 53,
	},
	{
		name: "Product D",
		frequency: 82,
		popularity: 11,
	},
	{
		name: "Product E",
		frequency: 11,
		popularity: 60,
	},
];

export const Default: Story = {
	args: { data },
	render: (args) => {
		return (
			<ScatterChart>
				<Grid {...scatterGridProps} />
				<ChartTooltip
					{...scatterChartTooltipProps}
					content={(props) => {
						const { payload } = props;
						const firstPayload = payload?.[0];

						if (!firstPayload) {
							console.error("No payload found in ScatterChart tooltip");
							return;
						}
						return (
							<ChartTooltipContent>
								<ChartTooltipTitle className="text-white font-bold">
									{firstPayload.payload.name}
								</ChartTooltipTitle>
								{payload?.map((p) => (
									<ChartTooltipValue key={p.dataKey}>
										<span className="text-xs text-gray-400">{p.name}:</span>
										<span className="text-xs text-bold">
											{p.value}
											{p.unit}
										</span>
									</ChartTooltipValue>
								))}
							</ChartTooltipContent>
						);
					}}
				/>
				<ReferenceLine {...scatterReferenceLineYProps} />
				<ReferenceLine {...scatterReferenceLineXProps} />
				<Scatter {...defaultScatterProps} data={args.data}>
					{data.map((_, index) => (
						<ChartCell
							{...scatterChartCellProps}
							key={index}
							fill={imagineColor(index)}
						/>
					))}
				</Scatter>
				<YAxis
					{...scatterYAxisProps}
					name="Popularity"
					unit="%"
					dataKey="popularity"
					type="number"
					tick={(props) => (
						<ScatterChartTick {...props} dx={-5} dy={5} unit="%" />
					)}
				/>
				<XAxis
					{...scatterXAxisProps}
					name="Frequency"
					dataKey="frequency"
					unit="%"
					type="number"
					tick={(props) => <ScatterChartTick {...props} dy={10} unit="%" />}
				/>
			</ScatterChart>
		);
	},
};
