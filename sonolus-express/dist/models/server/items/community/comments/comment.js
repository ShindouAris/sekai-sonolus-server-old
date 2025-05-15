"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toServerItemCommunityComment = void 0;
const form_1 = require("../../../forms/form");
const toServerItemCommunityComment = (localize, comment, actions) => ({
    name: comment.name,
    author: localize(comment.author),
    time: comment.time,
    content: localize(comment.content),
    actions: (0, form_1.toServerForms)(localize, comment.actions, actions),
});
exports.toServerItemCommunityComment = toServerItemCommunityComment;
