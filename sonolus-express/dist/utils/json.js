"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
const value_1 = require("@sinclair/typebox/value");
const parse = (json, schema) => {
    try {
        const value = JSON.parse(typeof json === 'string' ? json : json.toString('utf8'));
        if (!value_1.Value.Check(schema, value))
            return;
        return value_1.Value.Clean(schema, value);
    }
    catch {
        return;
    }
};
exports.parse = parse;
