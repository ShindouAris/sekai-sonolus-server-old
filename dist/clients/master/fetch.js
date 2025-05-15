import { config } from '../../config.js';
import { fromEntries } from '../../utils/object.js';
import { fetchJson } from '../fetch.js';
import { servers } from './server.js';
export const fetchMaster = (path) => (config) => fetchJson(path, config);
export const fetchMasters = async (fetch) => fromEntries(await Promise.all(servers.map(async (server) => [server, await fetch(config.clients[server].master)])));
