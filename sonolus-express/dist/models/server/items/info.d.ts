import { ServerItemInfo, Srl } from '@sonolus/core';
import { SonolusBase } from '../../../sonolus/base';
import { Localize } from '../../../utils/localization';
import { PickForms, ServerFormsModel } from '../../server/forms/form';
import { ServerItemSectionModel } from '../../server/items/section';
export type ServerItemInfoModel<TCreates extends ServerFormsModel, TSearches extends ServerFormsModel> = {
    creates?: PickForms<TCreates>;
    searches?: PickForms<TSearches>;
    sections: ServerItemSectionModel<TSearches>[];
    banner?: Srl;
};
export declare const toServerItemInfo: <TCreates extends ServerFormsModel, TSearches extends ServerFormsModel>(sonolus: SonolusBase, localize: Localize, info: ServerItemInfoModel<TCreates, TSearches>, creates: TCreates, searches: TSearches) => ServerItemInfo;
