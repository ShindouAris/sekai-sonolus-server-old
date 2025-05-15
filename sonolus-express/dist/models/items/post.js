"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPostItem = void 0;
const tag_1 = require("../tag");
const toPostItem = (sonolus, localize, item) => ({
    name: item.name,
    source: sonolus.address,
    version: item.version,
    title: localize(item.title),
    time: item.time,
    author: localize(item.author),
    tags: (0, tag_1.toTags)(localize, item.tags),
    thumbnail: item.thumbnail,
});
exports.toPostItem = toPostItem;
