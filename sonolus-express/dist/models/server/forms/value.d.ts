import { RawServerOptionsValue, ServerOptionsValue } from '../options/value';
import { ServerFormModel, ServerFormsModel } from './form';
export type RawServerFormValue<K extends string, T extends ServerFormModel> = {
    type: K;
    rawOptions: RawServerOptionsValue<T['options']>;
};
export type ServerFormValue<K extends string, T extends ServerFormModel> = {
    type: K;
    options: ServerOptionsValue<T['options']>;
    rawOptions: RawServerOptionsValue<T['options']>;
};
export declare const parseRawServerFormValue: <K extends string, T extends ServerFormModel>(value: Record<string, unknown>, type: K, form: T) => RawServerFormValue<K, T>;
export declare const parseServerFormValue: <K extends string, T extends ServerFormModel>(value: Record<string, unknown>, type: K, form: T) => ServerFormValue<K, T>;
export declare const serializeRawServerFormValue: <K extends string, T extends ServerFormModel>(value: RawServerFormValue<K, T>, type: K, form: T) => string;
export type RawServerFormsValue<T extends ServerFormsModel> = {
    [K in keyof T]: RawServerFormValue<K & string, T[K]>;
}[keyof T];
export type ServerFormsValue<T extends ServerFormsModel> = {
    [K in keyof T]: ServerFormValue<K & string, T[K]>;
}[keyof T];
export declare const parseServerFormsValue: <T extends ServerFormsModel>(value: Record<string, unknown>, forms: T) => ServerFormsValue<T> | undefined;
export declare const serializeRawServerFormsValue: <T extends ServerFormsModel>(value: RawServerFormsValue<T>, forms: T) => string;
export type ServerSearchesValue<T extends ServerFormsModel> = ServerFormsValue<T> | ServerFormValue<'quick', typeof quickForm>;
declare const quickForm: {
    title: {};
    requireConfirmation: false;
    options: {
        keywords: {
            name: {};
            required: false;
            type: "text";
            placeholder: {};
            def: string;
            limit: number;
            shortcuts: never[];
        };
    };
};
export declare const parseServerSearchesValue: <T extends ServerFormsModel>(value: Record<string, unknown>, searches: T) => ServerSearchesValue<T>;
export {};
