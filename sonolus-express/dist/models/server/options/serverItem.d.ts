import { ItemType, LocalizationText, ServerServerItemOption, Sil } from '@sonolus/core';
import { Localize } from '../../../utils/localization';
export type ServerServerItemOptionModel = {
    name: LocalizationText;
    description?: LocalizationText;
    required: boolean;
    type: 'serverItem';
    itemType: ItemType;
    def: Sil | null;
    allowOtherServers: boolean;
};
export type ServerServerItemOptionValue = Sil | null;
export declare const parseRawServerServerItemOptionValue: (value: unknown) => ServerServerItemOptionValue | undefined;
export declare const normalizeServerServerItemOptionValue: (value: ServerServerItemOptionValue | undefined, option: ServerServerItemOptionModel) => ServerServerItemOptionValue;
export declare const serializeServerServerItemOptionValue: (value: ServerServerItemOptionValue) => string;
export declare const toServerServerItemOption: (localize: Localize, query: string, option: ServerServerItemOptionModel) => ServerServerItemOption;
