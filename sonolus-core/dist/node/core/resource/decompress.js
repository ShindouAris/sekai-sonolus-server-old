"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decompressSync = exports.decompress = void 0;
const node_util_1 = require("node:util");
const node_zlib_1 = require("node:zlib");
const unzipPromise = (0, node_util_1.promisify)(node_zlib_1.unzip);
const decompress = async (data) => JSON.parse((await unzipPromise(data)).toString());
exports.decompress = decompress;
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
const decompressSync = (data) => JSON.parse((0, node_zlib_1.unzipSync)(data).toString());
exports.decompressSync = decompressSync;
