import { Icon, LocalizationText, ServerForm } from '@sonolus/core';
import { Localize } from '../../../utils/localization';
import { ServerOptionsModel } from '../options/option';
export type ServerFormsModel = Record<string, ServerFormModel>;
export type PickForms<T extends ServerFormsModel> = {
    [K in keyof T]?: boolean | T[K];
};
export type ServerFormModel = {
    title: LocalizationText;
    icon?: Icon;
    description?: LocalizationText;
    help?: LocalizationText;
    requireConfirmation: boolean;
    options: ServerOptionsModel;
};
export declare const toServerForm: (localize: Localize, type: string, form: ServerFormModel) => ServerForm;
export declare const toServerForms: <T extends ServerFormsModel>(localize: Localize, pick: PickForms<T>, forms: T) => ServerForm[];
