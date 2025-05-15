"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toEngineItem = void 0;
const tag_1 = require("../tag");
const background_1 = require("./background");
const effect_1 = require("./effect");
const item_1 = require("./item");
const particle_1 = require("./particle");
const skin_1 = require("./skin");
const toEngineItem = (sonolus, localize, item) => ({
    name: item.name,
    source: sonolus.address,
    version: item.version,
    title: localize(item.title),
    subtitle: localize(item.subtitle),
    author: localize(item.author),
    tags: (0, tag_1.toTags)(localize, item.tags),
    skin: (0, skin_1.toSkinItem)(sonolus, localize, (0, item_1.getItem)(sonolus.skin.items, item.skin, `Engine/${item.name}`, '.skin')),
    background: (0, background_1.toBackgroundItem)(sonolus, localize, (0, item_1.getItem)(sonolus.background.items, item.background, `Engine/${item.name}`, '.background')),
    effect: (0, effect_1.toEffectItem)(sonolus, localize, (0, item_1.getItem)(sonolus.effect.items, item.effect, `Engine/${item.name}`, '.effect')),
    particle: (0, particle_1.toParticleItem)(sonolus, localize, (0, item_1.getItem)(sonolus.particle.items, item.particle, `Engine/${item.name}`, '.particle')),
    thumbnail: item.thumbnail,
    playData: item.playData,
    watchData: item.watchData,
    previewData: item.previewData,
    tutorialData: item.tutorialData,
    rom: item.rom,
    configuration: item.configuration,
});
exports.toEngineItem = toEngineItem;
