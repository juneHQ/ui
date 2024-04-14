import { ValueFormatter } from '../../configurationTypes';

export declare const getYAxisDomain: (autoMinValue: boolean, minValue: number | undefined, maxValue: number | undefined) => (string | number)[];
export declare const constructCategoryColors: (categories: string[], colors: string[]) => Map<string, string>;
export declare function deepEqual(obj1: any, obj2: any): boolean;
export declare function cx(...args: Array<undefined | null | string | boolean>): string;
export declare const defaultValueFormatter: ValueFormatter;
export declare function addLoadedIdToElement(): void;
