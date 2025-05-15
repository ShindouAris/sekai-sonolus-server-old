"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toServerItemCommunityCommentList = void 0;
const comment_1 = require("./comment");
const toServerItemCommunityCommentList = (localize, list, actions) => ({
    pageCount: list.pageCount,
    cursor: list.cursor,
    comments: list.comments.map((comment) => (0, comment_1.toServerItemCommunityComment)(localize, comment, actions)),
});
exports.toServerItemCommunityCommentList = toServerItemCommunityCommentList;
