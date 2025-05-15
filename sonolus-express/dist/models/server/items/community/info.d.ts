import { ServerItemCommunityInfo } from '@sonolus/core';
import { Localize } from '../../../../utils/localization';
import { PickForms, ServerFormsModel } from '../../forms/form';
import { ServerItemCommunityCommentModel } from './comments/comment';
export type ServerItemCommunityInfoModel<TCommunityActions extends ServerFormsModel, TCommunityCommentActions extends ServerFormsModel> = {
    actions: PickForms<TCommunityActions>;
    topComments: ServerItemCommunityCommentModel<TCommunityCommentActions>[];
};
export declare const toServerItemCommunityInfo: <TCommunityActions extends ServerFormsModel, TCommunityCommentActions extends ServerFormsModel>(localize: Localize, info: ServerItemCommunityInfoModel<TCommunityActions, TCommunityCommentActions>, actions: TCommunityActions, commentActions: TCommunityCommentActions) => ServerItemCommunityInfo;
