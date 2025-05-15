import { Type } from '@sinclair/typebox';
export const clientConfigSchema = Type.Object({
    baseUrl: Type.String(),
    timeout: Type.Number(),
});
