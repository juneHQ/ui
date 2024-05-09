export const ScatterShapeCircle = (props: unknown): React.ReactElement => {
  const svgProps = props as React.SVGProps<SVGCircleElement>;
  return (
    <circle
      r="10"
      cx={svgProps.cx}
      cy={svgProps.cy}
      fill={svgProps.fill}
      height={svgProps.height}
      name={svgProps.name}
      style={svgProps.style}
      width={svgProps.width}
      x={svgProps.x}
      y={svgProps.y}
    />
  );
};
