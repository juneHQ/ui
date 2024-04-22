import { default as React } from '../../../node_modules/react';

type ButtonColor = "gray" | "purple" | "red" | "black" | "yellow";
type ButtonVariant = "solid" | "outline" | "ghost";
type ButtonSize = "xs" | "sm" | "md" | "lg";
export type ButtonProps = {
    children: React.ReactNode;
    variant?: ButtonVariant;
    color?: ButtonColor;
    size?: ButtonSize;
} & ((React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    onClick?: never;
    disabled?: never;
    loading?: never;
    loadingText?: never;
}) | (React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
    target?: never;
    rel?: never;
    loading?: boolean;
    loadingText?: string;
}));
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLLinkElement | HTMLButtonElement>>;
export declare function TouchTarget({ children }: {
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export {};
