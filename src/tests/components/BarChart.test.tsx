
import userEvent from '@testing-library/user-event';
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

  it('tooltips are visible on hover', async () => {
    const { container } = render(<BarChart data={mockData} categories={['Sales']} index="month" />);
    const user = userEvent.setup();
    const element = container.querySelector('recharts-tooltip-wrapper');

    user.hover(element as Element).then(() => {
      const tooltipElements = container.querySelectorAll('recharts-tooltip-wrapper');

      tooltipElements.forEach((tooltipElement) => {
        expect(tooltipElement).toBeVisible();
      });
    });
  });
});

