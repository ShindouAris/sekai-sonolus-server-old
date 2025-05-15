import { Text } from '../core/text';
export type LocalizationText = Record<string, Text | (string & {})>;
export declare const localize: (text: LocalizationText, locale: string, fallbackLocale: string) => string;
