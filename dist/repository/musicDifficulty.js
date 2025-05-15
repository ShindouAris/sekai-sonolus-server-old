import { merge } from './utils/merge.js';
export const getMusicDifficulties = (data) => merge(data.musicDifficulties, 'id', []);
