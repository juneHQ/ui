import { render, screen } from '../test-utils';
import { ChartTooltip } from '../../../lib/components/ChartTooltip';

describe('ChartTooltip', () => {
  const mockPayload = [{ value: 100 }];
  const mockValueFormatter = (value: number) => `$${value}`;

  it('should not render when not active', () => {
    render(
      <ChartTooltip
        label="Test Label"
        payload={mockPayload}
        active={false}
        valueFormatter={mockValueFormatter}
      />,
    );
    expect(screen.queryByText('Test Label')).not.toBeInTheDocument();
  });

  it('should render correctly when active', () => {
    render(
      <ChartTooltip
        label="Test Label"
        payload={mockPayload}
        active={true}
        valueFormatter={mockValueFormatter}
      />,
    );
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByText('$100')).toBeInTheDocument();
  });

  it('should render subtitle when tooltipSubtitleFormatter is provided', () => {
    const mockTooltipSubtitleFormatter = (payload: any) => `Sub: ${payload.value}`;
    render(
      <ChartTooltip
        label="Test Label"
        payload={mockPayload}
        active={true}
        valueFormatter={mockValueFormatter}
        tooltipSubtitleFormatter={mockTooltipSubtitleFormatter}
      />,
    );
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByText('$100')).toBeInTheDocument();
    expect(screen.getByText('Sub: 100')).toBeInTheDocument();
  });
});
