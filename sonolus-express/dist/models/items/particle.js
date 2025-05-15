"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toParticleItem = void 0;
const tag_1 = require("../tag");
const toParticleItem = (sonolus, localize, item) => ({
    name: item.name,
    source: sonolus.address,
    version: item.version,
    title: localize(item.title),
    subtitle: localize(item.subtitle),
    author: localize(item.author),
    tags: (0, tag_1.toTags)(localize, item.tags),
    thumbnail: item.thumbnail,
    data: item.data,
    texture: item.texture,
});
exports.toParticleItem = toParticleItem;
