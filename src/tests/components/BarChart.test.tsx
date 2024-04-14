import { render, screen } from '../test-utils';
import { BarChart } from '../../../lib/components/BarChart';

describe('BarChart', () => {
  const mockData = [
    { month: "Jan", Sales: 1000 },
    { month: "Feb", Sales: 1200 },
  ];

  it('should render without crashing', async () => {
    render(<BarChart data={mockData} categories={['Sales']} index="month" />);
    expect(await screen.findByTestId('bar-chart-wrapper')).toBeInTheDocument();
  });

  it('should display no data text when data is empty', async () => {
    const noDataText = "No data available";
    render(<BarChart categories={['Power users']} data={[]} index="month" noDataText={noDataText} />);
    expect(await screen.findByText(noDataText)).toBeInTheDocument();
  });
});

