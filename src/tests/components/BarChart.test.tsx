
import userEvent from '@testing-library/user-event';
import { render, screen } from '../test-utils';
import { BarChart, ChartTooltip, DefaultTooltip } from '../../../lib/main';

describe('BarChart', () => {
  const mockData = [
    { month: "Jan", Sales: 1000 },
    { month: "Feb", Sales: 1200 },
  ];

  it('should render without crashing', async () => {
    render(<BarChart data={mockData} categories={['Sales']} index="month" />);
    expect(await screen.findByTestId('bar-chart-wrapper')).toBeInTheDocument();
  });


  it('tooltips are visible on hover', async () => {
    const { container } = render(
    <BarChart data={mockData} categories={['Sales']} index="month" >
      <ChartTooltip content={({ active, payload, label }) => <DefaultTooltip label={label} active={active} payload={payload} valueFormatter={(p)=> `${p.Sales} Sales`} />} />
    </BarChart>);
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

