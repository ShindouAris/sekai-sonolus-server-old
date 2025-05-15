"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toTags = exports.toTag = void 0;
const toTag = (localize, tag) => ({
    title: localize(tag.title),
    icon: tag.icon,
});
exports.toTag = toTag;
const toTags = (localize, tags) => tags.map((tag) => (0, exports.toTag)(localize, tag));
exports.toTags = toTags;
