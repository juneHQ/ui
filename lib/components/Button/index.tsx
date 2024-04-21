import React from "react";
import { cx } from "../common/utils.ts";

type ButtonProps = {
  variant?: "solid" | "outline" | "ghost";
  color?: "gray" | "purple";
  children: React.ReactNode;
} & Pick<React.ComponentProps<"button">, "onClick" | "className" | "disabled">;

const baseStyle =
  "inline-flex appearance-none items-center justify-center select-none relative whitespace-nowrap" +
  "align-middle outline-none rounded-md font-medium transition-colors min-w-[2.5rem] text-sm px-8 py-1.5 h-8";

const variantStyles = {
  solid:
    "bg-whiteAlpha-900 border border-gray-200 hover:bg-gray-100 shadow-subtle",
  outline:
    "bg-transparent border border-gray-200 hover:bg-gray-100 hover:bg-opacity-10",
  ghost: "bg-transparent border-none",
};

const disabledStyle =
  "opacity-40 cursor-not-allowed shadow-none hover:bg-whiteAlpha-900";
// shadow, hover bg might be conflicting :D

const colorsStyles = {
  gray: {
    solid: "text-gray-800",
    ghost: "text-gray-500 hover:bg-gray-50 border-none bg-transparent",
    outline: "border-current",
  },
  purple: {
    solid: "bg-purple-500 text-white hover:bg-purple-600 border-none",
    ghost: "text-purple-500 hover:bg-purple-50 border-none bg-transparent",
    outline: "text-gray-800 border-current",
  },
};

function buttonStyles({
  variant = "solid",
  color = "gray",
  disabled,
}: {
  variant: "solid" | "outline" | "ghost";
  color: "gray" | "purple";
  disabled?: boolean;
}): string {
  const variantStyle = variantStyles[variant];
  const colorStyle = colorsStyles[color][variant];
  return cx(baseStyle, colorStyle, variantStyle, disabled && disabledStyle);
}

export const Button = React.forwardRef(function Button(
  {
    variant = "solid",
    color = "gray",
    className,
    children,
    disabled,
    ...props
  }: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  return (
    <button
      {...props}
      className={cx(className, buttonStyles({ variant, color, disabled }))}
      ref={ref}
    >
      <TouchTarget>{children}</TouchTarget>
    </button>
  );
});

/* Expand the hit area to at least 44×44px on touch devices */
export function TouchTarget({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <span
        className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
        aria-hidden="true"
      />
    </>
  );
}
