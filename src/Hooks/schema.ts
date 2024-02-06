import { z, ZodDate, ZodNumber, ZodObject, ZodOptional, ZodString } from 'zod';

type SchemaLogin = {
  email?: ZodString;
  password?: ZodString;
};

type Owner = {
  name?: ZodOptional<ZodString>;
  id?: ZodOptional<ZodString>;
};

type SchemaOrder = {
  id?: ZodString;
  device?: ZodString;
  owner?: ZodOptional<ZodObject<Owner>>;
  faulty?: ZodString;
  parts?: ZodString;
  price?: ZodNumber;
  statusOrder?: ZodString;
  creationDate?: ZodDate;
  estimatedDate?: ZodDate;
  completionDate?: ZodDate;
  guarantee?: ZodString;
};

const schemaLogin: ZodObject<SchemaLogin> = z.object({
  email: z.string().email(),
  password: z.string().min(8, 'A senha deve conter mínimo de 8 caracteres'),
});

const schemaOrder: ZodObject<SchemaOrder> = z.object({
  id: z.string(),
  device: z.string(),
  owner: z.object({
    name: z.string().optional(),
    id: z.string().optional(),
  }).optional(),
  faulty: z.string(),
  parts: z.string(),
  price: z.number(),
  statusOrder: z.string(),
  creationDate: z.date(),
  estimatedDate: z.date(),
  completionDate: z.date(),
  guarantee: z.string(),
});

export { schemaLogin, schemaOrder };
