import { ServerLevelResultInfo } from '@sonolus/core';
import { Localize } from '../../../../utils/localization';
import { PickForms, ServerFormsModel } from '../../forms/form';
export type ServerLevelResultInfoModel<TSubmits extends ServerFormsModel> = {
    submits?: PickForms<TSubmits>;
};
export declare const toServerLevelResultInfo: <TSubmits extends ServerFormsModel>(localize: Localize, info: ServerLevelResultInfoModel<TSubmits>, submits: TSubmits) => ServerLevelResultInfo;
