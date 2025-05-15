"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toServerCollectionItemOption = exports.serializeServerCollectionItemOptionValue = exports.normalizeServerCollectionItemOptionValue = exports.parseRawServerCollectionItemOptionValue = void 0;
const background_1 = require("../../../schemas/server/items/background");
const effect_1 = require("../../../schemas/server/items/effect");
const engine_1 = require("../../../schemas/server/items/engine");
const level_1 = require("../../../schemas/server/items/level");
const particle_1 = require("../../../schemas/server/items/particle");
const playlist_1 = require("../../../schemas/server/items/playlist");
const post_1 = require("../../../schemas/server/items/post");
const replay_1 = require("../../../schemas/server/items/replay");
const room_1 = require("../../../schemas/server/items/room");
const skin_1 = require("../../../schemas/server/items/skin");
const json_1 = require("../../../utils/json");
const schemas = {
    post: post_1.postItemSchema,
    playlist: playlist_1.playlistItemSchema,
    level: level_1.levelItemSchema,
    skin: skin_1.skinItemSchema,
    background: background_1.backgroundItemSchema,
    effect: effect_1.effectItemSchema,
    particle: particle_1.particleItemSchema,
    engine: engine_1.engineItemSchema,
    replay: replay_1.replayItemSchema,
    room: room_1.roomItemSchema,
};
const parseRawServerCollectionItemOptionValue = (value, option) => {
    if (typeof value !== 'string')
        return;
    return (0, json_1.parse)(value, schemas[option.itemType]);
};
exports.parseRawServerCollectionItemOptionValue = parseRawServerCollectionItemOptionValue;
const normalizeServerCollectionItemOptionValue = (value) => value;
exports.normalizeServerCollectionItemOptionValue = normalizeServerCollectionItemOptionValue;
const serializeServerCollectionItemOptionValue = (value) => JSON.stringify(value);
exports.serializeServerCollectionItemOptionValue = serializeServerCollectionItemOptionValue;
const toServerCollectionItemOption = (localize, query, option) => ({
    query,
    name: localize(option.name),
    description: option.description && localize(option.description),
    required: option.required,
    type: option.type,
    itemType: option.itemType,
});
exports.toServerCollectionItemOption = toServerCollectionItemOption;
