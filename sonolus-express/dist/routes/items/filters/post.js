"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterPosts = void 0;
const filter_1 = require("./filter");
exports.filterPosts = (0, filter_1.createFilterItems)([
    'name',
    'title',
    'author',
    'tags',
    'description',
]);
