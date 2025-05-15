import { ServerOption } from '@sonolus/core';
import { Localize } from '../../../utils/localization';
import { ServerCollectionItemOptionModel } from './collectionItem';
import { ServerFileOptionModel } from './file';
import { ServerMultiOptionModel } from './multi';
import { ServerSelectOptionModel } from './select';
import { ServerServerItemOptionModel } from './serverItem';
import { ServerServerItemsOptionModel } from './serverItems';
import { ServerSliderOptionModel } from './slider';
import { ServerTextOptionModel } from './text';
import { ServerTextAreaOptionModel } from './textArea';
import { ServerToggleOptionModel } from './toggle';
export type ServerOptionsModel = Record<string, ServerOptionModel>;
export type PickOptions<T extends ServerOptionsModel> = {
    [K in keyof T]?: boolean | T[K];
};
export type ServerOptionModel = ServerTextOptionModel | ServerTextAreaOptionModel | ServerSliderOptionModel | ServerToggleOptionModel | ServerSelectOptionModel | ServerMultiOptionModel | ServerServerItemOptionModel | ServerServerItemsOptionModel | ServerCollectionItemOptionModel | ServerFileOptionModel;
export declare const toServerOption: (localize: Localize, query: string, option: ServerOptionModel) => ServerOption;
export declare const toServerOptions: <T extends ServerOptionsModel>(localize: Localize, pick: PickOptions<T>, options: T) => ServerOption[];
