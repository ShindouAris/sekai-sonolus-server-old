import { fromEntries } from '../utils/object.js';
import { capitalize } from '../utils/string.js';
export const getAttributes = (data) => fromEntries([
    ...new Set(Object.values(data.cards)
        .flat()
        .map((card) => card.attr)),
]
    .sort((a, b) => a.localeCompare(b))
    .map((attr) => [
    attr,
    {
        title: { en: capitalize(attr) },
    },
]));
