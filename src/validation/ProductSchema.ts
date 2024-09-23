import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(3).max(255),
  description: z.string().min(3).max(255),
  price: z.number().positive(),
  stock: z.number().positive(),
  categoryId: z.number().positive()
});

export const updateProductSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(3).max(255),
  description: z.string().min(3).max(255),
  price: z.number().positive(),
  stock: z.number().positive(),
  categoryId: z.number().positive()
});

