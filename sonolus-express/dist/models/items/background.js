"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBackgroundItem = void 0;
const tag_1 = require("../tag");
const toBackgroundItem = (sonolus, localize, item) => ({
    name: item.name,
    source: sonolus.address,
    version: item.version,
    title: localize(item.title),
    subtitle: localize(item.subtitle),
    author: localize(item.author),
    tags: (0, tag_1.toTags)(localize, item.tags),
    thumbnail: item.thumbnail,
    data: item.data,
    image: item.image,
    configuration: item.configuration,
});
exports.toBackgroundItem = toBackgroundItem;
