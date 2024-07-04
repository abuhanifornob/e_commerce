import { z } from 'zod';

export const orderZodValidation = z.object({
  email: z.string().email(),
  productId: z.string(),
  price: z.number().positive(),
  quantity: z.number().positive(),
});
