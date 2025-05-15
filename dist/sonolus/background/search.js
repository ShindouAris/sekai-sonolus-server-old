import { Text } from '@sonolus/core';
import { toMultiValues } from '../utils/form.js';
export const backgroundSearches = {
    card: {
        title: {},
        requireConfirmation: false,
        options: {
            keywords: {
                name: { en: Text.Keywords },
                required: false,
                type: 'text',
                placeholder: { en: Text.KeywordsPlaceholder },
                def: '',
                limit: 0,
                shortcuts: [],
            },
            random: {
                name: { en: Text.Random },
                required: false,
                type: 'toggle',
                def: false,
            },
            characters: {
                name: {},
                required: false,
                type: 'multi',
                values: {},
            },
            rarities: {
                name: {},
                required: false,
                type: 'multi',
                values: {},
            },
            attributes: {
                name: {},
                required: false,
                type: 'multi',
                values: {},
            },
            images: {
                name: {},
                required: false,
                type: 'multi',
                values: {
                    normal: { title: {}, def: true },
                    trained: { title: {}, def: true },
                },
            },
        },
    },
    others: {
        title: { en: Text.Others },
        requireConfirmation: false,
        options: {
            keywords: {
                name: { en: Text.Keywords },
                required: false,
                type: 'text',
                placeholder: { en: Text.KeywordsPlaceholder },
                def: '',
                limit: 0,
                shortcuts: [],
            },
        },
    },
};
export const updateBackgroundSearches = (repository) => {
    backgroundSearches.card.title = repository.commonTexts.card;
    backgroundSearches.card.options.characters.name = repository.commonTexts.character;
    backgroundSearches.card.options.characters.values = toMultiValues(repository.characters);
    backgroundSearches.card.options.rarities.name = repository.commonTexts.rarity;
    backgroundSearches.card.options.rarities.values = toMultiValues(repository.cardRarities);
    backgroundSearches.card.options.attributes.name = repository.commonTexts.attribute;
    backgroundSearches.card.options.attributes.values = toMultiValues(repository.attributes);
    backgroundSearches.card.options.images.name = repository.commonTexts.card;
    backgroundSearches.card.options.images.values.normal.title = repository.cardTexts.normal;
    backgroundSearches.card.options.images.values.trained.title = repository.cardTexts.trained;
};
