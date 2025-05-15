import { LocalizationText, ServerTextOption } from '@sonolus/core';
import { Localize } from '../../../utils/localization';
export type ServerTextOptionModel = {
    name: LocalizationText;
    description?: LocalizationText;
    required: boolean;
    type: 'text';
    placeholder: LocalizationText;
    def: string;
    limit: number;
    shortcuts: string[];
};
export type ServerTextOptionValue = string;
export declare const parseRawServerTextOptionValue: (value: unknown) => ServerTextOptionValue | undefined;
export declare const normalizeServerTextOptionValue: (value: ServerTextOptionValue | undefined, option: ServerTextOptionModel) => ServerTextOptionValue;
export declare const serializeServerTextOptionValue: (value: ServerTextOptionValue) => string;
export declare const toServerTextOption: (localize: Localize, query: string, option: ServerTextOptionModel) => ServerTextOption;
