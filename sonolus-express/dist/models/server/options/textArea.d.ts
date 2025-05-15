import { LocalizationText, ServerTextAreaOption } from '@sonolus/core';
import { Localize } from '../../../utils/localization';
export type ServerTextAreaOptionModel = {
    name: LocalizationText;
    description?: LocalizationText;
    required: boolean;
    type: 'textArea';
    placeholder: LocalizationText;
    def: string;
    limit: number;
    shortcuts: string[];
};
export type ServerTextAreaOptionValue = string;
export declare const parseRawServerTextAreaOptionValue: (value: unknown) => ServerTextAreaOptionValue | undefined;
export declare const normalizeServerTextAreaOptionValue: (value: ServerTextAreaOptionValue | undefined, option: ServerTextAreaOptionModel) => ServerTextAreaOptionValue;
export declare const serializeServerTextAreaOptionValue: (value: ServerTextAreaOptionValue) => string;
export declare const toServerTextAreaOption: (localize: Localize, query: string, option: ServerTextAreaOptionModel) => ServerTextAreaOption;
