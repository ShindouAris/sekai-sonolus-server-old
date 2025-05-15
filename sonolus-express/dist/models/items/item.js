"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItem = exports.toItems = void 0;
const toItems = (sonolus, localize, toItem, items) => items.map((item) => toItem(sonolus, localize, item));
exports.toItems = toItems;
const getItem = (items, nameOrItem, parent, path) => {
    if (typeof nameOrItem !== 'string')
        return nameOrItem;
    const item = items.find(({ name }) => name === nameOrItem);
    if (!item)
        throw new Error(`${parent}: ${nameOrItem} not found (${path})`);
    return item;
};
exports.getItem = getItem;
