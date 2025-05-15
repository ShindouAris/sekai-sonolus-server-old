"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseServerOptionsValue = exports.parseRawServerOptionsValue = exports.serializeRawServerOptionValue = exports.parseServerOptionValue = exports.parseRawServerOptionValue = void 0;
const collectionItem_1 = require("./collectionItem");
const file_1 = require("./file");
const multi_1 = require("./multi");
const select_1 = require("./select");
const serverItem_1 = require("./serverItem");
const serverItems_1 = require("./serverItems");
const slider_1 = require("./slider");
const text_1 = require("./text");
const textArea_1 = require("./textArea");
const toggle_1 = require("./toggle");
const parseRawServerOptionValueByType = {
    text: text_1.parseRawServerTextOptionValue,
    textArea: textArea_1.parseRawServerTextAreaOptionValue,
    slider: slider_1.parseRawServerSliderOptionValue,
    toggle: toggle_1.parseRawServerToggleOptionValue,
    select: select_1.parseRawServerSelectOptionValue,
    multi: multi_1.parseRawServerMultiOptionValue,
    serverItem: serverItem_1.parseRawServerServerItemOptionValue,
    serverItems: serverItems_1.parseRawServerServerItemsOptionValue,
    collectionItem: collectionItem_1.parseRawServerCollectionItemOptionValue,
    file: file_1.parseRawServerFileOptionValue,
};
const parseRawServerOptionValue = (value, option) => parseRawServerOptionValueByType[option.type](value, option);
exports.parseRawServerOptionValue = parseRawServerOptionValue;
const normalizeServerOptionValueByType = {
    text: text_1.normalizeServerTextOptionValue,
    textArea: textArea_1.normalizeServerTextAreaOptionValue,
    slider: slider_1.normalizeServerSliderOptionValue,
    toggle: toggle_1.normalizeServerToggleOptionValue,
    select: select_1.normalizeServerSelectOptionValue,
    multi: multi_1.normalizeServerMultiOptionValue,
    serverItem: serverItem_1.normalizeServerServerItemOptionValue,
    serverItems: serverItems_1.normalizeServerServerItemsOptionValue,
    collectionItem: collectionItem_1.normalizeServerCollectionItemOptionValue,
    file: file_1.normalizeServerFileOptionValue,
};
const parseServerOptionValue = (value, option) => normalizeServerOptionValueByType[option.type]((0, exports.parseRawServerOptionValue)(value, option), option);
exports.parseServerOptionValue = parseServerOptionValue;
const serializeRawServerOptionValue = (value, option) => ({
    text: text_1.serializeServerTextOptionValue,
    textArea: textArea_1.serializeServerTextAreaOptionValue,
    slider: slider_1.serializeServerSliderOptionValue,
    toggle: toggle_1.serializeServerToggleOptionValue,
    select: select_1.serializeServerSelectOptionValue,
    multi: multi_1.serializeServerMultiOptionValue,
    serverItem: serverItem_1.serializeServerServerItemOptionValue,
    serverItems: serverItems_1.serializeServerServerItemsOptionValue,
    collectionItem: collectionItem_1.serializeServerCollectionItemOptionValue,
    file: file_1.serializeServerFileOptionValue,
})[option.type](value);
exports.serializeRawServerOptionValue = serializeRawServerOptionValue;
const parseRawServerOptionsValue = (value, options) => Object.fromEntries(Object.entries(options).map(([key, option]) => [
    key,
    (0, exports.parseRawServerOptionValue)(value[key], option),
]));
exports.parseRawServerOptionsValue = parseRawServerOptionsValue;
const parseServerOptionsValue = (value, options) => Object.fromEntries(Object.entries(options).map(([key, option]) => [
    key,
    (0, exports.parseServerOptionValue)(value[key], option),
]));
exports.parseServerOptionsValue = parseServerOptionsValue;
