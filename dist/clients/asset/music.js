import { fetchText } from '../fetch.js';
export const getMusicCoverPath = (musicAssetBundleName) => `/music/jacket/${musicAssetBundleName}/${musicAssetBundleName}.png`;
export const getMusicBgmPath = (musicVocalAssetBundleName) => `/music/long/${musicVocalAssetBundleName}/${musicVocalAssetBundleName}.mp3`;
export const getMusicPreviewPath = (musicVocalAssetBundleName) => `/music/short/${musicVocalAssetBundleName}/${musicVocalAssetBundleName}_short.mp3`;
export const getMusicChartPath = (id, difficulty) => `/music/music_score/${id.toString().padStart(4, '0')}_01/${difficulty}.txt`;
export const fetchMusicChart = (id, difficulty, config) => fetchText(getMusicChartPath(id, difficulty), config);
