"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterEffects = void 0;
const filter_1 = require("./filter");
exports.filterEffects = (0, filter_1.createFilterItems)([
    'name',
    'title',
    'subtitle',
    'author',
    'tags',
    'description',
]);
