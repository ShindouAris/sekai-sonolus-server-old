import { installPlaylistDetails } from './details.js';
import { installPlaylistInfo } from './info.js';
import { updatePlaylistItems } from './item.js';
import { installPlaylistList } from './list.js';
import { updatePlaylistSearches } from './search.js';
export const installPlaylist = () => {
    installPlaylistInfo();
    installPlaylistList();
    installPlaylistDetails();
};
export const updatePlaylist = (repository) => {
    updatePlaylistItems(repository);
    updatePlaylistSearches(repository);
};
