"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toRoomItem = void 0;
const tag_1 = require("../tag");
const toRoomItem = (sonolus, localize, item) => ({
    name: item.name,
    title: localize(item.title),
    subtitle: localize(item.subtitle),
    master: localize(item.master),
    tags: (0, tag_1.toTags)(localize, item.tags),
    cover: item.cover,
    bgm: item.bgm,
    preview: item.preview,
});
exports.toRoomItem = toRoomItem;
