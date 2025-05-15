import { toArrayEnumSchema } from '../../utils/schema.js';
export const servers = ['ja', 'en', 'ko', 'zht'];
export const serverSchema = toArrayEnumSchema(servers);
