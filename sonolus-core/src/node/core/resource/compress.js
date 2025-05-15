"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compressSync = exports.compress = void 0;
const node_util_1 = require("node:util");
const node_zlib_1 = require("node:zlib");
const zlibOptions = {
    level: 9,
};
const gzipPromise = (0, node_util_1.promisify)(node_zlib_1.gzip);
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
const compress = (data) => gzipPromise(JSON.stringify(data), zlibOptions);
exports.compress = compress;
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
const compressSync = (data) => (0, node_zlib_1.gzipSync)(JSON.stringify(data), zlibOptions);
exports.compressSync = compressSync;
