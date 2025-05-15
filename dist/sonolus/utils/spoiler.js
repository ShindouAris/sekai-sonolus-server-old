import { sonolus } from '../index.js';
export const hideSpoilers = (passThrough, items) => {
    if (passThrough)
        return items;
    return items.filter((item) => item.meta.publishedAt <= Date.now());
};
export const hideSpoilersFromPlaylist = (passThrough, playlist) => {
    if (passThrough)
        return playlist;
    return {
        ...playlist,
        levels: hideSpoilers(false, playlist.levels.map((levelNameOrItem) => {
            if (typeof levelNameOrItem === 'object')
                return levelNameOrItem;
            const level = sonolus.level.items.find((level) => level.name === levelNameOrItem);
            if (!level)
                throw new Error(`Level not found: ${levelNameOrItem}`);
            return level;
        })),
    };
};
export const hideSpoilersFromPlaylists = (passThrough, playlists) => {
    if (passThrough)
        return playlists;
    return playlists.map((playlist) => hideSpoilersFromPlaylist(false, playlist));
};
