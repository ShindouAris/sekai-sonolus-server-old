import { ItemType, LocalizationText, ServerServerItemsOption, Sil } from '@sonolus/core';
import { Localize } from '../../../utils/localization';
export type ServerServerItemsOptionModel = {
    name: LocalizationText;
    description?: LocalizationText;
    required: boolean;
    type: 'serverItems';
    itemType: ItemType;
    def: Sil[];
    allowOtherServers: boolean;
    limit: number;
};
export type ServerServerItemsOptionValue = Sil[];
export declare const parseRawServerServerItemsOptionValue: (value: unknown) => ServerServerItemsOptionValue | undefined;
export declare const normalizeServerServerItemsOptionValue: (value: ServerServerItemsOptionValue | undefined, option: ServerServerItemsOptionModel) => ServerServerItemsOptionValue;
export declare const serializeServerServerItemsOptionValue: (value: ServerServerItemsOptionValue) => string;
export declare const toServerServerItemsOption: (localize: Localize, query: string, option: ServerServerItemsOptionModel) => ServerServerItemsOption;
