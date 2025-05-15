import { mapValues } from '../utils/object.js';
import { capitalize } from '../utils/string.js';
import { merge } from './utils/merge.js';
export const getCardRarities = (data) => mapValues(merge(data.cardRarities, 'cardRarityType', []), (rarity, cardRarity) => ({
    ...cardRarity,
    title: { en: rarity.startsWith('rarity_') ? capitalize(rarity.substring(7)) : rarity },
    hasTraining: !!cardRarity.trainingMaxLevel,
}));
