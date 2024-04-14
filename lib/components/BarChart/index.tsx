import { AxisDomain } from 'recharts/types/util/types';
import {
  Bar,
  BarChart as ReChartsBarChart,
  CartesianGrid,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import React, { useState } from 'react';
import NoData from '../NoData';
import {
  addLoadedIdToElement,
  constructCategoryColors,
  cx,
  deepEqual,
  defaultValueFormatter,
  getYAxisDomain,
} from '../common/utils';
import { BaseChartProps } from '../common/BaseChartProps';
import { ChartTooltip } from '../ChartTooltip';
import { themeColorRange } from '../../theme';

export interface BarChartProps extends BaseChartProps {
  stack?: boolean;
  relative?: boolean;
  barCategoryGap?: string | number;
}


export const BarChart = React.forwardRef<HTMLDivElement, BarChartProps>((props, ref) => {
  const {
    data = [],
    categories = [],
    index,
    colors = themeColorRange,
    valueFormatter = defaultValueFormatter,
    stack = false,
    relative = false,
    startEndOnly = false,
    animationDuration = 900,
    showAnimation = true,
    showXAxis = true,
    showYAxis = true,
    yAxisWidth = 56,
    intervalType = "equidistantPreserveStart",
    showTooltip = true,
    showGridLines = true,
    autoMinValue = false,
    minValue,
    maxValue,
    allowDecimals = true,
    noDataText,
    noDataSubText,
    onValueChange,
    customTooltip,
    rotateLabelX,
    barCategoryGap,
    tickGap = 5,
    className,
    ...other
  } = props;
  const CustomTooltip = customTooltip;
  const paddingValue = !showXAxis && !showYAxis ? 0 : 20;
  const categoryColors = constructCategoryColors(categories, colors);
  const [activeBar, setActiveBar] = React.useState<any | undefined>(undefined);
  const [activeLegend, setActiveLegend] = useState<string | undefined>(undefined);
  const hasOnValueChange = !!onValueChange;

  function onBarClick(data: any, _: number, event: React.MouseEvent) {
    event.stopPropagation();
    if (!onValueChange) return;
    if (deepEqual(activeBar, { ...data.payload, value: data.value })) {
      setActiveLegend(undefined);
      setActiveBar(undefined);
      onValueChange?.(null);
    } else {
      setActiveLegend(data.tooltipPayload?.[0]?.dataKey);
      setActiveBar({
        ...data.payload,
        value: data.value,
      });
      onValueChange?.({
        eventType: "bar",
        categoryClicked: data.tooltipPayload?.[0]?.dataKey,
        ...data.payload,
      });
    }
  }

  const yAxisDomain = getYAxisDomain(autoMinValue, minValue, maxValue);

  return (
    <div ref={ref} className={cx("w-full h-80", className)} {...other}>
      <ResponsiveContainer className="h-full w-full">
        {data?.length ? (
          <ReChartsBarChart
            barCategoryGap={barCategoryGap}
            data={data}
            stackOffset={stack ? "sign" : relative ? "expand" : "none"}
            layout={"horizontal"}
            onClick={
              hasOnValueChange && (activeLegend || activeBar)
                ? () => {
                    setActiveBar(undefined);
                    setActiveLegend(undefined);
                    onValueChange?.(null);
                  }
                : undefined
            }
          >
            {showGridLines ? (
              <CartesianGrid
                className="stroke-1"
                strokeDasharray="3"
                vertical={false}
                horizontal={true}
              />
            ) : null}
            <XAxis
              padding={{ left: paddingValue, right: paddingValue }}
              hide={!showXAxis}
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
          
          
            <YAxis
              width={yAxisWidth}
              hide={!showYAxis}
              axisLine={false}
              tickLine={false}
              type="number"
              domain={yAxisDomain as AxisDomain}
              tick={{ transform: "translate(-3, 0)" }}
              fill=""
              stroke=""
              className="text-xs fill-gray-600"
              tickFormatter={
                relative ? (value: number) => `${(value * 100).toString()} %` : valueFormatter
              }
              allowDecimals={allowDecimals}
            />
            <Tooltip
              wrapperStyle={{ outline: "none" }}
              isAnimationActive={false}
              cursor={{ fill: "#d1d5db", opacity: "0.15" }}
              content={
                showTooltip ? (
                  ({ active, payload, label }) =>
                    CustomTooltip ? (
                      <CustomTooltip
                        payload={payload?.map((payloadItem: any) => ({
                          ...payloadItem,
                          color: categoryColors.get(payloadItem.dataKey),
                        }))}
                        active={active}
                        label={label}
                      />
                    ) : (
                      <ChartTooltip
                        active={active}
                        payload={payload}
                        label={label}
                        valueFormatter={valueFormatter}
                      />
                    )
                ) : (
                  <></>
                )
              }
              position={{ y: 0 }}
            />
            {categories.map((category) => (
              <Bar
                className="fill-purple-500 rounded-lg cursor-pointer"
                key={category}
                name={category}
                type="linear"
                stackId={stack || relative ? "a" : undefined}
                dataKey={category}
                fill=""
                isAnimationActive={showAnimation}
                animationDuration={animationDuration}
                shape={(props: any) => <Rectangle radius={[5, 5, 0, 0]} {...props} />}
                onClick={onBarClick}
                onAnimationEnd={() => addLoadedIdToElement()}
              />
            ))}
          </ReChartsBarChart>
        ) : (
          <NoData noDataText={noDataText} noDataSubText={noDataSubText} />
        )}
      </ResponsiveContainer>
    </div>
  );
});

