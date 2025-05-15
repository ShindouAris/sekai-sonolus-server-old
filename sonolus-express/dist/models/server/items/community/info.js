"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toServerItemCommunityInfo = void 0;
const form_1 = require("../../forms/form");
const comment_1 = require("./comments/comment");
const toServerItemCommunityInfo = (localize, info, actions, commentActions) => ({
    actions: (0, form_1.toServerForms)(localize, info.actions, actions),
    topComments: info.topComments.map((comment) => (0, comment_1.toServerItemCommunityComment)(localize, comment, commentActions)),
});
exports.toServerItemCommunityInfo = toServerItemCommunityInfo;
