import { cx } from "../common/utils.ts";

type LoadingSpinnerProps = {
  className?: string;
};

export function LoadingSpinner({ className }: LoadingSpinnerProps) {
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
