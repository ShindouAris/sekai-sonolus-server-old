import { LocalizationText, ServerMultiOption } from '@sonolus/core';
import { Localize } from '../../../utils/localization';
export type ServerMultiOptionModel = {
    name: LocalizationText;
    description?: LocalizationText;
    required: boolean;
    type: 'multi';
    values: Record<string, ServerMultiOptionValueModel>;
};
export type ServerMultiOptionValueModel = {
    title: LocalizationText;
    def: boolean;
};
export type ServerMultiOptionValue<T = ServerMultiOptionModel> = T extends ServerMultiOptionModel ? Record<keyof T['values'], boolean> : never;
export declare const parseRawServerMultiOptionValue: (value: unknown, option: ServerMultiOptionModel) => ServerMultiOptionValue | undefined;
export declare const normalizeServerMultiOptionValue: (value: ServerMultiOptionValue | undefined, option: ServerMultiOptionModel) => ServerMultiOptionValue;
export declare const serializeServerMultiOptionValue: (value: ServerMultiOptionValue) => string;
export declare const toServerMultiOption: (localize: Localize, query: string, option: ServerMultiOptionModel) => ServerMultiOption;
