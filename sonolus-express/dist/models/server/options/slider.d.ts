import { LocalizationText, ServerSliderOption } from '@sonolus/core';
import { Localize } from '../../../utils/localization';
export type ServerSliderOptionModel = {
    name: LocalizationText;
    description?: LocalizationText;
    required: boolean;
    type: 'slider';
    def: number;
    min: number;
    max: number;
    step: number;
    unit?: LocalizationText;
};
export type ServerSliderOptionValue = number;
export declare const parseRawServerSliderOptionValue: (value: unknown) => ServerSliderOptionValue | undefined;
export declare const normalizeServerSliderOptionValue: (value: ServerSliderOptionValue | undefined, option: ServerSliderOptionModel) => ServerSliderOptionValue;
export declare const serializeServerSliderOptionValue: (value: ServerSliderOptionValue) => string;
export declare const toServerSliderOption: (localize: Localize, query: string, option: ServerSliderOptionModel) => ServerSliderOption;
