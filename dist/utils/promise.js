import { entries, fromEntries } from './object.js';
export const allObject = async (object) => fromEntries(await Promise.all(entries(object).map(async ([k, v]) => [k, await v])));
