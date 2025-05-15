"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUseItem = exports.toLevelItem = void 0;
const tag_1 = require("../tag");
const background_1 = require("./background");
const effect_1 = require("./effect");
const engine_1 = require("./engine");
const item_1 = require("./item");
const particle_1 = require("./particle");
const skin_1 = require("./skin");
const toLevelItem = (sonolus, localize, item) => ({
    name: item.name,
    source: sonolus.address,
    version: item.version,
    rating: item.rating,
    engine: (0, engine_1.toEngineItem)(sonolus, localize, (0, item_1.getItem)(sonolus.engine.items, item.engine, `Level/${item.name}`, '.engine')),
    useSkin: (0, exports.toUseItem)(sonolus, localize, skin_1.toSkinItem, item.useSkin, sonolus.skin.items, `Level/${item.name}`, '.useSkin.item'),
    useBackground: (0, exports.toUseItem)(sonolus, localize, background_1.toBackgroundItem, item.useBackground, sonolus.background.items, `Level/${item.name}`, '.useBackground.item'),
    useEffect: (0, exports.toUseItem)(sonolus, localize, effect_1.toEffectItem, item.useEffect, sonolus.effect.items, `Level/${item.name}`, '.useEffect.item'),
    useParticle: (0, exports.toUseItem)(sonolus, localize, particle_1.toParticleItem, item.useParticle, sonolus.particle.items, `Level/${item.name}`, '.useParticle.item'),
    title: localize(item.title),
    artists: localize(item.artists),
    author: localize(item.author),
    tags: (0, tag_1.toTags)(localize, item.tags),
    cover: item.cover,
    bgm: item.bgm,
    preview: item.preview,
    data: item.data,
});
exports.toLevelItem = toLevelItem;
const toUseItem = (sonolus, localize, toItem, useItem, items, parent, path) => useItem.useDefault
    ? {
        useDefault: true,
    }
    : {
        useDefault: false,
        item: toItem(sonolus, localize, (0, item_1.getItem)(items, useItem.item, parent, path)),
    };
exports.toUseItem = toUseItem;
