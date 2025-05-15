import { mapValues } from '../utils/object.js';
export const getCardTexts = (data) => mapValues({
    normal: 'title[0]',
    trained: 'title[2]',
}, (_, key) => mapValues(data.cardTexts, (_, i18n) => i18n.tab[key]));
