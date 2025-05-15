import { Type } from '@sinclair/typebox';
export const toArrayEnumSchema = (values) => Type.Union(values.map((value) => Type.Literal(value)));
