import { config as _config } from '../config.js';
export const fetchJson = async (path, config) => {
    const response = await _fetch('GET', path, config);
    return (await response.json());
};
export const fetchText = async (path, config) => {
    const response = await _fetch('GET', path, config);
    return await response.text();
};
export const fetchHead = async (path, config) => {
    const response = await _fetch('HEAD', path, config);
    return response.ok;
};
const _fetch = (method, path, config) => {
    const url = `${config.baseUrl}${path}`;
    if (_config.verbose)
        console.log(method, url);
    return fetch(url, {
        method,
        signal: AbortSignal.timeout(config.timeout),
    });
};
