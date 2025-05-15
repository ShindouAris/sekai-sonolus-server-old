"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterRooms = void 0;
const filter_1 = require("./filter");
exports.filterRooms = (0, filter_1.createFilterItems)([
    'name',
    'title',
    'subtitle',
    'master',
    'tags',
]);
