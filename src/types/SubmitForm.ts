import { z } from 'zod';
import { schemaLogin, schemaOrder } from '../Hooks/schema';

export type SubmitFormLogin = z.infer<typeof schemaLogin>;
export type SubmitFormOrder = z.infer<typeof schemaOrder>;
