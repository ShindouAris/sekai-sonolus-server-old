import { config } from '../config.js';
export const asset = (server, path) => ({
    url: `${config.clients[server].asset.baseUrl}${path}`,
});
