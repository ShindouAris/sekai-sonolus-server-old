import { ServerCollectionItemOptionValue } from './collectionItem';
import { ServerFileOptionValue } from './file';
import { ServerMultiOptionValue } from './multi';
import { ServerOptionModel, ServerOptionsModel } from './option';
import { ServerSelectOptionValue } from './select';
import { ServerServerItemOptionValue } from './serverItem';
import { ServerServerItemsOptionValue } from './serverItems';
import { ServerSliderOptionValue } from './slider';
import { ServerTextOptionValue } from './text';
import { ServerTextAreaOptionValue } from './textArea';
import { ServerToggleOptionValue } from './toggle';
export type RawServerOptionValue<T extends ServerOptionModel> = ServerOptionValue<T> | undefined;
export type ServerOptionValue<T extends ServerOptionModel> = {
    text: ServerTextOptionValue;
    textArea: ServerTextAreaOptionValue;
    slider: ServerSliderOptionValue;
    toggle: ServerToggleOptionValue;
    select: ServerSelectOptionValue<T>;
    multi: ServerMultiOptionValue<T>;
    serverItem: ServerServerItemOptionValue;
    serverItems: ServerServerItemsOptionValue;
    collectionItem: ServerCollectionItemOptionValue<T>;
    file: ServerFileOptionValue;
}[T['type']];
export declare const parseRawServerOptionValue: <T extends ServerOptionModel>(value: unknown, option: T) => RawServerOptionValue<T>;
export declare const parseServerOptionValue: <T extends ServerOptionModel>(value: unknown, option: T) => ServerOptionValue<T>;
export declare const serializeRawServerOptionValue: <T extends ServerOptionModel>(value: Exclude<RawServerOptionValue<T>, undefined>, option: T) => string;
export type RawServerOptionsValue<T extends ServerOptionsModel> = {
    [K in keyof T]?: RawServerOptionValue<T[K]>;
};
export type ServerOptionsValue<T extends ServerOptionsModel> = {
    [K in keyof T]: ServerOptionValue<T[K]>;
};
export declare const parseRawServerOptionsValue: <T extends ServerOptionsModel>(value: Record<string, unknown>, options: T) => RawServerOptionsValue<T>;
export declare const parseServerOptionsValue: <T extends ServerOptionsModel>(value: Record<string, unknown>, options: T) => ServerOptionsValue<T>;
