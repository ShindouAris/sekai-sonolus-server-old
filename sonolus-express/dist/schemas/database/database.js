"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
const background_1 = require("./items/background");
const effect_1 = require("./items/effect");
const engine_1 = require("./items/engine");
const level_1 = require("./items/level");
const particle_1 = require("./items/particle");
const playlist_1 = require("./items/playlist");
const post_1 = require("./items/post");
const replay_1 = require("./items/replay");
const skin_1 = require("./items/skin");
const serverInfo_1 = require("./serverInfo");
exports.databaseSchema = typebox_1.Type.Object({
    info: serverInfo_1.databaseServerInfoSchema,
    posts: typebox_1.Type.Array(post_1.databasePostItemSchema),
    playlists: typebox_1.Type.Array(playlist_1.databasePlaylistItemSchema),
    levels: typebox_1.Type.Array(level_1.databaseLevelItemSchema),
    skins: typebox_1.Type.Array(skin_1.databaseSkinItemSchema),
    backgrounds: typebox_1.Type.Array(background_1.databaseBackgroundItemSchema),
    effects: typebox_1.Type.Array(effect_1.databaseEffectItemSchema),
    particles: typebox_1.Type.Array(particle_1.databaseParticleItemSchema),
    engines: typebox_1.Type.Array(engine_1.databaseEngineItemSchema),
    replays: typebox_1.Type.Array(replay_1.databaseReplayItemSchema),
});
