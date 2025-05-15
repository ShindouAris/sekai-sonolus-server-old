"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toReplayItem = void 0;
const tag_1 = require("../tag");
const item_1 = require("./item");
const level_1 = require("./level");
const toReplayItem = (sonolus, localize, item) => ({
    name: item.name,
    source: sonolus.address,
    version: item.version,
    title: localize(item.title),
    subtitle: localize(item.subtitle),
    author: localize(item.author),
    tags: (0, tag_1.toTags)(localize, item.tags),
    level: (0, level_1.toLevelItem)(sonolus, localize, (0, item_1.getItem)(sonolus.level.items, item.level, `Replay/${item.name}`, '.level')),
    data: item.data,
    configuration: item.configuration,
});
exports.toReplayItem = toReplayItem;
