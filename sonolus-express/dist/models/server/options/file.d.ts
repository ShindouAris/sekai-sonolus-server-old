import { LocalizationText, ServerFileOption } from '@sonolus/core';
import { Localize } from '../../../utils/localization';
export type ServerFileOptionModel = {
    name: LocalizationText;
    description?: LocalizationText;
    required: boolean;
    type: 'file';
    def: string;
};
export type ServerFileOptionValue = string;
export declare const parseRawServerFileOptionValue: (value: unknown) => ServerFileOptionValue | undefined;
export declare const normalizeServerFileOptionValue: (value: ServerFileOptionValue | undefined, option: ServerFileOptionModel) => ServerFileOptionValue;
export declare const serializeServerFileOptionValue: (value: ServerFileOptionValue) => string;
export declare const toServerFileOption: (localize: Localize, query: string, option: ServerFileOptionModel) => ServerFileOption;
