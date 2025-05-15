import { LocalizationText, ServerSelectOption } from '@sonolus/core';
import { Localize } from '../../../utils/localization';
export type ServerSelectOptionModel = {
    name: LocalizationText;
    description?: LocalizationText;
    required: boolean;
    type: 'select';
    def: string;
    values: Record<string, LocalizationText>;
};
export type ServerSelectOptionValue<T = ServerSelectOptionModel> = T extends ServerSelectOptionModel ? T['def'] | keyof T['values'] : never;
export declare const parseRawServerSelectOptionValue: (value: unknown, option: ServerSelectOptionModel) => ServerSelectOptionValue | undefined;
export declare const normalizeServerSelectOptionValue: (value: ServerSelectOptionValue | undefined, option: ServerSelectOptionModel) => ServerSelectOptionValue;
export declare const serializeServerSelectOptionValue: (value: ServerSelectOptionValue) => string;
export declare const toServerSelectOption: (localize: Localize, query: string, option: ServerSelectOptionModel) => ServerSelectOption;
