"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sonolus = void 0;
const core_1 = require("@sonolus/core");
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const node_fs_1 = require("node:fs");
const node_path_1 = require("node:path");
const background_1 = require("../models/items/background");
const effect_1 = require("../models/items/effect");
const engine_1 = require("../models/items/engine");
const level_1 = require("../models/items/level");
const particle_1 = require("../models/items/particle");
const playlist_1 = require("../models/items/playlist");
const post_1 = require("../models/items/post");
const replay_1 = require("../models/items/replay");
const room_1 = require("../models/items/room");
const skin_1 = require("../models/items/skin");
const value_1 = require("../models/server/options/value");
const authenticate_1 = require("../routes/authenticate");
const error_1 = require("../routes/error");
const info_1 = require("../routes/info");
const background_2 = require("../routes/items/filters/background");
const effect_2 = require("../routes/items/filters/effect");
const engine_2 = require("../routes/items/filters/engine");
const level_2 = require("../routes/items/filters/level");
const particle_2 = require("../routes/items/filters/particle");
const playlist_2 = require("../routes/items/filters/playlist");
const post_2 = require("../routes/items/filters/post");
const replay_2 = require("../routes/items/filters/replay");
const room_2 = require("../routes/items/filters/room");
const skin_2 = require("../routes/items/filters/skin");
const database_1 = require("../schemas/database/database");
const extract_1 = require("../utils/extract");
const json_1 = require("../utils/json");
const itemGroup_1 = require("./itemGroup");
const levelResult_1 = require("./levelResult");
const multiplayer_1 = require("./multiplayer");
const itemTypes = [
    ['post', 'posts', post_1.toPostItem, post_2.filterPosts],
    ['playlist', 'playlists', playlist_1.toPlaylistItem, playlist_2.filterPlaylists],
    ['level', 'levels', level_1.toLevelItem, level_2.filterLevels],
    ['skin', 'skins', skin_1.toSkinItem, skin_2.filterSkins],
    ['background', 'backgrounds', background_1.toBackgroundItem, background_2.filterBackgrounds],
    ['effect', 'effects', effect_1.toEffectItem, effect_2.filterEffects],
    ['particle', 'particles', particle_1.toParticleItem, particle_2.filterParticles],
    ['engine', 'engines', engine_1.toEngineItem, engine_2.filterEngines],
    ['replay', 'replays', replay_1.toReplayItem, replay_2.filterReplays],
    ['room', 'rooms', room_1.toRoomItem, room_2.filterRooms],
];
class Sonolus {
    constructor(options = {}) {
        this.address = options.address;
        this.fallbackLocale = options.fallbackLocale ?? 'en';
        this.configuration = {
            options: options.configuration?.options ?? {},
        };
        this.router = express_1.default.Router();
        this.title = {};
        this.serverInfoHandler = (0, info_1.createDefaultServerInfoHandler)(this);
        this.multiplayer = new multiplayer_1.SonolusMultiplayer(this, () => this.room.creates);
        this.levelResult = new levelResult_1.SonolusLevelResult(options.levelResult);
        for (const [type, , toItem, filter] of itemTypes) {
            this[type] = new itemGroup_1.SonolusItemGroup(this, type, options[type], toItem, filter);
        }
        this._installRoutes(options.upload ?? {});
    }
    load(path) {
        const dbPath = (0, node_path_1.resolve)(path, 'db.json');
        const repositoryPath = (0, node_path_1.resolve)(path, 'repository');
        const db = (0, json_1.parse)((0, node_fs_1.readFileSync)(dbPath, 'utf8'), database_1.databaseSchema);
        if (!db)
            throw new Error(`Invalid database: path=${dbPath}`);
        this.title = db.info.title;
        if (db.info.description)
            this.description = db.info.description;
        if (db.info.banner)
            this.banner = db.info.banner;
        this.post.items.push(...db.posts);
        this.playlist.items.push(...db.playlists);
        this.level.items.push(...db.levels);
        this.skin.items.push(...db.skins);
        this.background.items.push(...db.backgrounds);
        this.effect.items.push(...db.effects);
        this.particle.items.push(...db.particles);
        this.engine.items.push(...db.engines);
        this.replay.items.push(...db.replays);
        this.router.use('/sonolus/repository', express_1.default.static(repositoryPath));
    }
    add(data, hash) {
        hash ??= (0, core_1.hash)(typeof data === 'string' ? (0, node_fs_1.readFileSync)(data) : data);
        const url = `/sonolus/repository/${hash}`;
        if (typeof data === 'string') {
            const path = (0, node_path_1.resolve)(data);
            this.router.get(url, (req, res) => {
                res.sendFile(path);
            });
        }
        else {
            this.router.get(url, (req, res) => {
                res.send(data);
            });
        }
        return { hash, url };
    }
    localize(text, locale) {
        return (0, core_1.localize)(text, locale, this.fallbackLocale);
    }
    _installRoutes(upload) {
        const uploader = (0, multer_1.default)(upload.options).array('files', upload.maxCount);
        this._post('/authenticate', (0, authenticate_1.createServerAuthenticateRouteHandler)(this));
        this._get('/info', (0, info_1.createServerInfoRouteHandler)(this));
        this._post('/rooms/create', this.multiplayer['_createRouteHandler']);
        this._post('/rooms/:itemName', this.multiplayer['_joinRouteHandler']);
        this._get('/levels/result/info', this.levelResult['_infoRouteHandler']);
        this._post('/levels/result/submit', this.levelResult['_submitRouteHandler']);
        this._upload('/levels/result/upload', this.levelResult['_preUploadRouteHandler'], uploader, this.levelResult['_uploadRouteHandler']);
        for (const [type, path] of itemTypes) {
            this._get(`/${path}/info`, this[type]['_infoRouteHandler']);
            this._get(`/${path}/list`, this[type]['_listRouteHandler']);
            this._post(`/${path}/create`, this[type]['_createRouteHandler']);
            this._upload(`/${path}/upload`, this[type]['_preUploadRouteHandler'], uploader, this[type]['_uploadRouteHandler']);
            this._get(`/${path}/:itemName`, this[type]['_detailsRouteHandler']);
            this._post(`/${path}/:itemName/submit`, this[type]['_submitActionRouteHandler']);
            this._upload(`/${path}/:itemName/upload`, this[type]['_preUploadActionRouteHandler'], uploader, this[type]['_uploadActionRouteHandler']);
            this._get(`/${path}/:itemName/community/info`, this[type]['_communityInfoRouteHandler']);
            this._post(`/${path}/:itemName/community/submit`, this[type]['_communitySubmitRouteHandler']);
            this._upload(`/${path}/:itemName/community/upload`, this[type]['_communityPreUploadRouteHandler'], uploader, this[type]['_communityUploadRouteHandler']);
            this._get(`/${path}/:itemName/community/comments/list`, this[type]['_communityCommentListRouteHandler']);
            this._post(`/${path}/:itemName/community/comments/:commentName/submit`, this[type]['_communityCommentSubmitRouteHandler']);
            this._upload(`/${path}/:itemName/community/comments/:commentName/upload`, this[type]['_communityCommentPreUploadRouteHandler'], uploader, this[type]['_communityCommentUploadRouteHandler']);
            this._get(`/${path}/:itemName/leaderboards/:leaderboardName`, this[type]['_leaderboardDetailsRouteHandler']);
            this._get(`/${path}/:itemName/leaderboards/:leaderboardName/records/list`, this[type]['_leaderboardRecordListRouteHandler']);
            this._get(`/${path}/:itemName/leaderboards/:leaderboardName/records/:recordName`, this[type]['_leaderboardRecordDetailsRouteHandler']);
        }
    }
    _get(path, handler) {
        this.router.get(`/sonolus${path}`, this._toMiddleware(handler));
    }
    _post(path, handler) {
        this.router.post(`/sonolus${path}`, express_1.default.raw({ type: 'application/json' }), this._toMiddleware(handler));
    }
    _upload(path, preHandler, uploader, handler) {
        this.router.post(`/sonolus${path}`, this._toMiddleware(preHandler), uploader, this._toMiddleware(handler));
    }
    _toMiddleware(handler) {
        return async (req, res, next) => {
            try {
                // res.set('Sonolus-Version', version.sonolus)
                const localization = (0, extract_1.extractString)(req.query.localization) ?? '';
                const localize = (text) => this.localize(text, localization);
                const options = (0, value_1.parseServerOptionsValue)(req.query, this.configuration.options);
                const rawOptions = (0, value_1.parseRawServerOptionsValue)(req.query, this.configuration.options);
                const session = (0, extract_1.extractString)(req.headers['sonolus-session']);
                const ctx = { session, localization, options, rawOptions };
                if (this.sessionHandler) {
                    const result = await this.sessionHandler(ctx);
                    if ((0, error_1.handleError)(result, res, localize))
                        return;
                }
                await handler({ req, res, next, localize, ctx });
            }
            catch (error) {
                console.error(error);
                res.status(500).end();
            }
        };
    }
}
exports.Sonolus = Sonolus;
