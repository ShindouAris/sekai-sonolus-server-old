"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hash = void 0;
const node_crypto_1 = require("node:crypto");
const hash = (buffer) => (0, node_crypto_1.createHash)('sha1').update(buffer).digest('hex');
exports.hash = hash;
