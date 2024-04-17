import {
  BarChart,
  BarItem,
  ChartTooltip,
  defaultGridProps,
  defaultXAxisProps,
  defaultYAxisProps,
  EmptyState,
  Grid,
  XAxis,
  YAxis,
} from '../lib/main';
import { DefaultTooltip } from '../lib/components/ChartTooltip';

function App() {

  return (
    <>
      <div>Empty Bar Chart</div>
      <EmptyState />

      <div>Bar Chart with Grid</div>
      <div className="h-72 w-72">
        <BarChart
          data={[
            {
              month: "Jan 24",
              Sales: 4400,
            },
            {
              month: "Feb 24",
              Sales: 3612,
            },
          ]}
          categories={['Sales']}
          index={'month'}
        >
          <ChartTooltip 
            content={({ active, payload, label }) => <DefaultTooltip label={label} active={active} payload={payload} valueFormatter={(p)=> `${p.Sales} Sales`} />}
            />
          {/* This is ugly but it's a workaround for now waiting  https://github.com/recharts/recharts/issues/3615#issuecomment-1651094565 to be fixed */}
          <Grid {...defaultGridProps} />
          <BarItem dataKey="Sales" />
          <XAxis {...defaultXAxisProps} dataKey="month" />
          <YAxis {...defaultYAxisProps} />
        </BarChart>
      </div>
    </>
  )
}

export default App
