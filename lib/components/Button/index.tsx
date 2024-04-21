import React from "react";
import { cx } from "../common/utils.ts";

type ButtonColor = "gray" | "purple" | "red" | "black" | "yellow";

type ButtonProps = {
  variant?: "solid" | "outline" | "ghost";
  color?: ButtonColor;
  children: React.ReactNode;
  loading?: boolean;
  loadingText?: string;
} & Pick<React.ComponentProps<"button">, "onClick" | "className" | "disabled">;

const baseStyle =
  "inline-flex appearance-none items-center justify-center select-none relative whitespace-nowrap" +
  "align-middle outline-none rounded-md font-medium transition-colors min-w-[2.5rem] text-sm px-3 py-1.5 h-8 gap-2";

const variantStyles = {
  solid: "border shadow-subtle",
  outline: "bg-transparent border hover:bg-opacity-50",
  ghost: "bg-transparent border-none",
};

const disabledStyle =
  "disabled:opacity-40 disabled:shadow-none disabled:pointer-events-none";

const colorsStyles = {
  gray: {
    solid:
      "text-gray-800 bg-whiteAlpha-900 border-gray-200 hover:bg-gray-100 active:bg-gray-300",
    ghost: "text-gray-800 hover:bg-gray-100 active:bg-gray-200",
    outline:
      "border-gray-200 text-gray-800 hover:bg-gray-100 active:bg-gray-200",
  },
  purple: {
    solid:
      "bg-purple-500 text-white border-current hover:bg-purple-600 active:bg-purple-700",
    ghost:
      "text-purple-500 border-none hover:bg-purple-50 active:bg-purple-100",
    outline: "text-purple-500 hover:bg-purple-50 active:bg-purple-100",
  },
  red: {
    solid:
      "text-white bg-red-500 border-current hover:bg-red-600 active:bg-red-700",
    ghost: "text-red-500 hover:bg-red-50 active:bg-red-100",
    outline: "text-red-500 border-current hover:bg-red-50 active:bg-red-100",
  },
  black: {
    solid:
      "text-whiteAlpha-900 bg-gray-800 border-current hover:bg-gray-900 active:bg-gray-900",
    ghost: "text-gray-800 hover:bg-gray-50 active:bg-gray-100",
    outline: "text-gray-800 border-current hover:bg-gray-50 active:bg-gray-100",
  },
  yellow: {
    solid:
      "text-gray-800 bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600",
    ghost: "text-yellow-500 hover:bg-yellow-50 active:bg-yellow-100",
    outline:
      "text-yellow-500 border-current hover:bg-yellow-50 hover:bg-opacity-50 active:bg-yellow-100",
  },
};

function buttonStyles({
  variant = "solid",
  color = "gray",
  disabled,
}: {
  variant: "solid" | "outline" | "ghost";
  color: ButtonColor;
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
    loadingText,
    ...props
  }: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  const isDisabled = disabled || loading;

  return (
    <button
      {...props}
      disabled={isDisabled}
      aria-label={loading && !loadingText ? "Loading, please wait" : undefined}
      className={cx(
        className,
        buttonStyles({ variant, color, disabled: isDisabled }),
      )}
      ref={ref}
    >
      <LoaderWrapper loading={loading} loadingText={loadingText}>
        <TouchTarget>{children}</TouchTarget>
      </LoaderWrapper>
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

function LoaderWrapper({
  loading,
  loadingText,
  children,
}: {
  loading?: boolean;
  loadingText?: string;
  children: React.ReactNode;
}) {
  if (!loading) {
    return children;
  }

  return (
    <>
      {loadingText ? (
        <>
          <LoadingSpinner />
          {loadingText}
        </>
      ) : (
        <LoadingWithInitialWidth>{children}</LoadingWithInitialWidth>
      )}
    </>
  );
}

function LoadingWithInitialWidth({ children }: { children: React.ReactNode }) {
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
        "animate-spin h-3.5 w-3.5 border-2 border-b-transparent rounded-full border-current",
        className,
      )}
      viewBox="0 0 24 24"
    ></svg>
  );
}
