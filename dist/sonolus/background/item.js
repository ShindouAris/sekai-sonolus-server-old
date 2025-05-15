import { compressSync, } from '@sonolus/core';
import { databaseEngineItem } from 'sonolus-pjsekai-engine';
import { getCardImagePath, getCardThumbnailPath } from '../../clients/asset/card.js';
import { config } from '../../config.js';
import { asset } from '../../utils/asset.js';
import { sonolus } from '../index.js';
let initialBackgrounds;
let backgroundData;
let backgroundConfiguration;
export const updateBackgroundItems = (repository) => {
    initialBackgrounds ??= [...sonolus.background.items];
    backgroundData ??= sonolus.add(compressSync({
        aspectRatio: 2338 / 1440,
        fit: 'cover',
        color: '#000',
    }));
    backgroundConfiguration ??= sonolus.add(compressSync({
        scope: 'Sekai',
        blur: 0,
        mask: '#0008',
    }));
    const backgrounds = [];
    for (const card of Object.values(repository.cards)) {
        const characterId = `game_character_${card.characterId}`;
        const cardRarity = repository.cardRarities[card.cardRarityType];
        if (!cardRarity)
            continue;
        const title = card.prefix;
        const subtitle = repository.characters[characterId]?.title ?? { en: `${card.characterId}` };
        const author = databaseEngineItem.subtitle;
        const tags = [
            { title: cardRarity.title, icon: 'star' },
            { title: repository.attributes[card.attr]?.title ?? { en: card.attr } },
        ];
        const meta = {
            characterId,
            rarity: card.cardRarityType,
            attribute: card.attr,
            id: card.id,
            publishedAt: card.releaseAt,
        };
        if (cardRarity.hasTraining) {
            backgrounds.push({
                name: `${config.sonolus.prefix}-${card.id}-trained`,
                version: 2,
                title,
                subtitle,
                author,
                tags: [...tags, { title: repository.cardTexts.trained }],
                thumbnail: asset(card.server, getCardThumbnailPath(card.assetbundleName, true)),
                data: backgroundData,
                image: asset(card.server, getCardImagePath(card.assetbundleName, true)),
                configuration: backgroundConfiguration,
                meta: { ...meta, image: 'trained' },
            });
        }
        backgrounds.push({
            name: `${config.sonolus.prefix}-${card.id}-normal`,
            version: 2,
            title,
            subtitle,
            author,
            tags: [...tags, { title: repository.cardTexts.normal }],
            thumbnail: asset(card.server, getCardThumbnailPath(card.assetbundleName, false)),
            data: backgroundData,
            image: asset(card.server, getCardImagePath(card.assetbundleName, false)),
            configuration: backgroundConfiguration,
            meta: { ...meta, image: 'normal' },
        });
    }
    sonolus.background.items = [
        ...initialBackgrounds,
        ...backgrounds.sort((a, b) => b.meta.publishedAt - a.meta.publishedAt),
    ];
};
