import { entries } from '../../utils/object.js';
export const match = (objects, i18ns, onMatch) => {
    for (const [locale, values] of entries(i18ns)) {
        for (const [id, i18n] of entries(values)) {
            const object = objects[id];
            if (!object)
                continue;
            onMatch(object, locale, i18n);
        }
    }
    return objects;
};
