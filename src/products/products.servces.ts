import e from "express";
import prisma from "../utils/prisma";

export const createProductService = async (name: string,description:string, price: number, stock: number,categoryId:number) => {
  const product = await prisma.product.create({
    data: {
      name,
      description,
      price,
      stock,
      categoryId
      
    },
  });
};

export const getProductsService = async () => {
  const products = await prisma.product.findMany(
    {
      select: {
        name: true,
        description: true,
        price: true,
        stock: true,
        category: {
          select: {
            name: true
          }
        }
      }
    }
  );
  return products;
}

export const getProductService = async (id: number) => {
  const product = await prisma.product.findUnique({ where: { id } });
  return product;
}


export const updateProductService = async (id: number, name: string,description:string, price: number, stock: number,categoryId:number) => {
  const product = await prisma.product.update({
    where: { id },
    data: {
      name,
      description,
      price,
      stock,
      categoryId
    },
  });
  return product;
}

export const deleteProductService = async (id: number) => {
  const product = await prisma.product.delete({ where: { id } });
  return product;
}
