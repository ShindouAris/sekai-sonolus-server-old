"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toServerItemSections = exports.toServerItemSection = void 0;
const background_1 = require("../../items/background");
const effect_1 = require("../../items/effect");
const engine_1 = require("../../items/engine");
const item_1 = require("../../items/item");
const level_1 = require("../../items/level");
const particle_1 = require("../../items/particle");
const playlist_1 = require("../../items/playlist");
const post_1 = require("../../items/post");
const replay_1 = require("../../items/replay");
const room_1 = require("../../items/room");
const skin_1 = require("../../items/skin");
const form_1 = require("../forms/form");
const value_1 = require("../forms/value");
const toItemByType = {
    post: post_1.toPostItem,
    playlist: playlist_1.toPlaylistItem,
    level: level_1.toLevelItem,
    skin: skin_1.toSkinItem,
    background: background_1.toBackgroundItem,
    effect: effect_1.toEffectItem,
    particle: particle_1.toParticleItem,
    engine: engine_1.toEngineItem,
    replay: replay_1.toReplayItem,
    room: room_1.toRoomItem,
};
const toServerItemSection = (sonolus, localize, section, searches) => ({
    title: localize(section.title),
    icon: section.icon,
    description: section.description && localize(section.description),
    help: section.help && localize(section.help),
    itemType: section.itemType,
    items: (0, item_1.toItems)(sonolus, localize, toItemByType[section.itemType], section.items),
    search: section.search?.form
        ? (0, form_1.toServerForm)(localize, section.search.value.type, section.search.form === true
            ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                searches[section.search.value.type]
            : section.search.form)
        : undefined,
    searchValues: section.search && (0, value_1.serializeRawServerFormsValue)(section.search.value, searches),
});
exports.toServerItemSection = toServerItemSection;
const toServerItemSections = (sonolus, localize, sections, searches) => sections.map((section) => (0, exports.toServerItemSection)(sonolus, localize, section, searches));
exports.toServerItemSections = toServerItemSections;
