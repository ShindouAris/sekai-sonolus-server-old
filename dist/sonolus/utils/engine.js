import { fileURLToPath } from 'node:url';
export const resolveEngineResource = (name) => fileURLToPath(import.meta.resolve(`sonolus-pjsekai-engine/${name}`));
