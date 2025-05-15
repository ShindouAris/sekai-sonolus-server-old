import { LocalizationText, ServerItemCommunityComment } from '@sonolus/core';
import { Localize } from '../../../../../utils/localization';
import { PickForms, ServerFormsModel } from '../../../forms/form';
export type ServerItemCommunityCommentModel<T extends ServerFormsModel> = {
    name: string;
    author: LocalizationText;
    time: number;
    content: LocalizationText;
    actions: PickForms<T>;
};
export declare const toServerItemCommunityComment: <T extends ServerFormsModel>(localize: Localize, comment: ServerItemCommunityCommentModel<T>, actions: T) => ServerItemCommunityComment;
