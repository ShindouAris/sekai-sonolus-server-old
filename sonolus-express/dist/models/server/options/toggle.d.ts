import { LocalizationText, ServerToggleOption } from '@sonolus/core';
import { Localize } from '../../../utils/localization';
export type ServerToggleOptionModel = {
    name: LocalizationText;
    description?: LocalizationText;
    required: boolean;
    type: 'toggle';
    def: boolean;
};
export type ServerToggleOptionValue = boolean;
export declare const parseRawServerToggleOptionValue: (value: unknown) => ServerToggleOptionValue | undefined;
export declare const normalizeServerToggleOptionValue: (value: ServerToggleOptionValue | undefined, option: ServerToggleOptionModel) => ServerToggleOptionValue;
export declare const serializeServerToggleOptionValue: (value: ServerToggleOptionValue) => string;
export declare const toServerToggleOption: (localize: Localize, query: string, option: ServerToggleOptionModel) => ServerToggleOption;
