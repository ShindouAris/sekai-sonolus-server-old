"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPlaylistItem = void 0;
const tag_1 = require("../tag");
const item_1 = require("./item");
const level_1 = require("./level");
const toPlaylistItem = (sonolus, localize, item) => ({
    name: item.name,
    source: sonolus.address,
    version: item.version,
    title: localize(item.title),
    subtitle: localize(item.subtitle),
    author: localize(item.author),
    tags: (0, tag_1.toTags)(localize, item.tags),
    levels: item.levels.map((level, index) => (0, level_1.toLevelItem)(sonolus, localize, (0, item_1.getItem)(sonolus.level.items, level, `Playlist/${item.name}`, `.levels[${index}]`))),
    thumbnail: item.thumbnail,
});
exports.toPlaylistItem = toPlaylistItem;
