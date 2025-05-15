export const entries = Object.entries;
export const fromEntries = Object.fromEntries;
export const mapValues = (object, callback) => fromEntries(entries(object).map(([k, v], i) => [k, callback(k, v, i)]));
export const notUndefined = (obj) => obj !== undefined;
