"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toServerItemList = void 0;
const item_1 = require("../../items/item");
const form_1 = require("../../server/forms/form");
const toServerItemList = (sonolus, localize, toItem, list, searches) => ({
    pageCount: list.pageCount,
    cursor: list.cursor,
    items: (0, item_1.toItems)(sonolus, localize, toItem, list.items),
    searches: list.searches && (0, form_1.toServerForms)(localize, list.searches, searches),
});
exports.toServerItemList = toServerItemList;
