import e from "express";
import prisma from "../utils/prisma";

export const createProductService = async (name: string, price: number, amount: number) => {
  const product = await prisma.product.create({
    data: {
      name,
      price,
      amount
    },
  });
};

export const getProductsService = async () => {
  const products = await prisma.product.findMany();
  return products;
}

export const getProductService = async (id: number) => {
  const product = await prisma.product.findUnique({ where: { id } });
  return product;
}