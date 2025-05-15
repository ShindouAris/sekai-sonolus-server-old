import { match } from './utils/match.js';
import { merge } from './utils/merge.js';
export const getCards = (data) => match(merge(data.cards, 'id', ['prefix']), data.cardPrefixes, (card, locale, cardPrefix) => {
    card.prefix[locale] ??= cardPrefix;
});
