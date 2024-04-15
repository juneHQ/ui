import { BarChart, Grid } from '../lib/main';
import NoData from '../lib/components/NoData';
import { BarItem } from '../lib/components/BarChart/BarItem';

function App() {

  return (
    <>
      <div>Empty Bar Chart</div>
      <NoData />

      <div>Bar Chart with Grid</div>
      <BarChart  data={[
        {
          month: "Jan 24",
          Sales: 4400,
        },
        {
          month: "Feb 24",
          Sales: 3612,
        },
      ]} categories={['Sales']} index={'1'} >
        <Grid />
        <BarItem dataKey="Sales" />

      </BarChart>
      <div className='bg-red-600 w-10 h-10'>Grid</div>
    </>
  )
}

export default App
