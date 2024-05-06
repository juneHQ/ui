import React from "react";

export type TickTextProps = React.SVGProps<SVGTextElement>;

export const TickText: React.FC<TickTextProps> = ({ children, ...props }) => {
  return (
    <text {...props} className="text-xs text-gray-800">
      {children}
    </text>
  );
};
