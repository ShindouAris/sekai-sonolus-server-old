"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterLevels = void 0;
const filter_1 = require("./filter");
exports.filterLevels = (0, filter_1.createFilterItems)([
    'name',
    'rating',
    'title',
    'artists',
    'author',
    'tags',
    'description',
]);
