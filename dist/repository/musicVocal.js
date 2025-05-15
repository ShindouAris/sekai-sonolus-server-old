import { merge } from './utils/merge.js';
export const getMusicVocals = (data) => merge(data.musicVocals, 'id', []);
