/// <reference types="react" />
interface ICommandInputProps {
    placeholder?: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    icon?: React.ReactNode;
    className?: string;
}
export declare const CommandInput: React.FC<ICommandInputProps>;
export {};
