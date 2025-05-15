import { mapValues } from '../../utils/object.js';
export const toMultiValues = (object) => mapValues(object, (_, { title }) => ({
    title,
    def: true,
}));
