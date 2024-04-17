import { Bar as RechartsBar, BarProps, Rectangle } from 'recharts';
import { addLoadedIdToElement } from '../common/utils';

const renderShape = (
  props: any,
) => {
  return (
    <>
      <rect
        x={props.background.x}
        y={props.background.y}
        width={props.background.width}
        height={props.background.height}
        opacity={0}
      />
      <Rectangle radius={[5, 5, 0, 0]} {...props} />
    </>
  );
};

export class BarItem extends RechartsBar {
  static defaultProps = {
    ...RechartsBar.defaultProps,
    type: "linear",
    className: "fill-purple-500 rounded-lg h-full",
    shape: (props: any) => renderShape(props),
    fill:"",
    isAnimationActive: true,
    onAnimationEnd: () => addLoadedIdToElement(),
  };
}

export type BarItemProps = BarProps;

