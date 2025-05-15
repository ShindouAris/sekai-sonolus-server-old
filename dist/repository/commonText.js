import { mapValues } from '../utils/object.js';
export const getCommonTexts = (data) => mapValues(data.commonTexts.en, (key) => mapValues(data.commonTexts, (_, common) => common[key]));
