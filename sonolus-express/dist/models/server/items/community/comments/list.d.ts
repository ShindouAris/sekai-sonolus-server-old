import { ServerItemCommunityCommentList } from '@sonolus/core';
import { Localize } from '../../../../../utils/localization';
import { ServerFormsModel } from '../../../forms/form';
import { ServerItemCommunityCommentModel } from './comment';
export type ServerItemCommunityCommentListModel<T extends ServerFormsModel> = {
    pageCount: number;
    cursor?: string;
    comments: ServerItemCommunityCommentModel<T>[];
};
export declare const toServerItemCommunityCommentList: <T extends ServerFormsModel>(localize: Localize, list: ServerItemCommunityCommentListModel<T>, actions: T) => ServerItemCommunityCommentList;
