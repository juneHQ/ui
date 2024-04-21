import React from "react";
import { cx } from "../common/utils.ts";

type ButtonProps = {
  variant?: "solid" | "outline" | "ghost";
  color?: "gray" | "purple";
  children: React.ReactNode;
  loading?: boolean;
} & Pick<React.ComponentProps<"button">, "onClick" | "className" | "disabled">;

const baseStyle =
  "inline-flex appearance-none items-center justify-center select-none relative whitespace-nowrap" +
  "align-middle outline-none rounded-md font-medium transition-colors min-w-[2.5rem] text-sm px-8 py-1.5 h-8 gap-2";

const variantStyles = {
  solid: "border shadow-subtle",
  outline: "bg-transparent border border-current hover:bg-opacity-50",
  ghost: "bg-transparent border-none",
};

const disabledStyle =
  "disabled:opacity-40 disabled:shadow-none disabled:pointer-events-none";

const colorsStyles = {
  gray: {
    solid:
      "text-gray-800 bg-whiteAlpha-900 border-gray-200 hover:bg-gray-100 active:bg-gray-300",
    ghost: "text-gray-800 hover:bg-gray-100 active:bg-gray-200 bg-transparent",
    outline:
      "border-gray-200 text-gray-800 hover:bg-gray-100 active:bg-gray-200",
  },
  purple: {
    solid:
      "bg-purple-500 text-white hover:bg-purple-600 border-none active:bg-purple-700",
    ghost:
      "text-purple-500 border-none bg-transparent hover:bg-purple-50 active:bg-purple-100",
    outline: "text-purple-500 hover:bg-purple-50 active:bg-purple-100",
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
    loading = false,
    ...props
  }: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  const isDisabled = disabled || loading;
  return (
    <button
      {...props}
      disabled={isDisabled}
      aria-label={loading ? "Loading, please wait" : undefined}
      className={cx(
        className,
        buttonStyles({ variant, color, disabled: isDisabled }),
      )}
      ref={ref}
    >
      <LoadingWidthKeeper loading={loading}>
        <TouchTarget>{children}</TouchTarget>
      </LoadingWidthKeeper>
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

function LoadingWidthKeeper({
  loading,
  children,
}: {
  loading?: boolean;
  children: React.ReactNode;
}) {
  if (!loading) {
    return children;
  }

  return (
    <div className="inline-flex items-center relative">
      <LoadingSpinner className="absolute inset-0 m-auto" />
      <div className="invisible">{children}</div>
    </div>
  );
}

function LoadingSpinner({ className }: { className?: string }) {
  return (
    <svg
      className={cx(
        "animate-spin h-4 w-4 border-2 border-white border-b-transparent rounded-full",
        className,
      )}
      viewBox="0 0 24 24"
    ></svg>
  );
}
