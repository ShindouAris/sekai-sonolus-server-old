"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toServerOptions = exports.toServerOption = void 0;
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
const toServerOption = (localize, query, option) => ({
    text: text_1.toServerTextOption,
    textArea: textArea_1.toServerTextAreaOption,
    slider: slider_1.toServerSliderOption,
    toggle: toggle_1.toServerToggleOption,
    select: select_1.toServerSelectOption,
    multi: multi_1.toServerMultiOption,
    serverItem: serverItem_1.toServerServerItemOption,
    serverItems: serverItems_1.toServerServerItemsOption,
    collectionItem: collectionItem_1.toServerCollectionItemOption,
    file: file_1.toServerFileOption,
})[option.type](localize, query, option);
exports.toServerOption = toServerOption;
const toServerOptions = (localize, pick, options) => Object.entries(pick)
    .map(([type, value]) => 
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
value && (0, exports.toServerOption)(localize, type, value === true ? options[type] : value))
    .filter((form) => !!form);
exports.toServerOptions = toServerOptions;
