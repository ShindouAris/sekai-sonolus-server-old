import { entries, fromEntries } from '../../utils/object.js';
export const merge = (data, primaryKey, keys) => {
    const result = {};
    for (const [server, items] of entries(data)) {
        for (const item of items) {
            const id = item[primaryKey];
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            result[id] ??= {
                ...item,
                ...fromEntries(keys.map((key) => [key, {}])),
                server,
            };
            for (const key of keys) {
                result[id][key][server] = item[key];
            }
        }
    }
    return result;
};
