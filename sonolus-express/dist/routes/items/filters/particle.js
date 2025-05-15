"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterParticles = void 0;
const filter_1 = require("./filter");
exports.filterParticles = (0, filter_1.createFilterItems)([
    'name',
    'title',
    'subtitle',
    'author',
    'tags',
    'description',
]);
