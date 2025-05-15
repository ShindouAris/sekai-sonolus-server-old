import { config } from '../../config.js';
import { entries, fromEntries } from '../../utils/object.js';
import { fetchJson } from '../fetch.js';
import { locales } from './locale.js';
export const fetchI18n = (path) => (language, config) => fetchJson(`/${language}${path}`, config);
export const fetchI18ns = async (fetch) => fromEntries(await Promise.all(entries(locales).map(async ([locale, language]) => [locale, await fetch(language, config.clients.i18n)])));
