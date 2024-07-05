import { z } from 'zod';
const variantZodValidation = z.object({
  type: z.string(),
  value: z.string(),
});
const inventoryZodValidation = z.object({
  quantity: z.number().int().min(0),
  inStock: z.boolean(),
});

export const productZodValidationSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number().positive(),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(variantZodValidation),
  inventory: inventoryZodValidation,
});
