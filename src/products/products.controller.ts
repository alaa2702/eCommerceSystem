import e, { Request, Response } from "express";
import { createProductService, getProductsService,getProductService, updateProductService, deleteProductService } from "./products.servces";
import { createProductSchema,updateProductSchema } from "../validation/ProductSchema";

export const createProductController = async (req: Request, res: Response) => {
  const { name,description, price, stock,categoryId } = req.body;
  const validPayload = createProductSchema.parse({ name,description, price, stock,categoryId });
  const product = await createProductService(name,description, price, stock,categoryId);
  res.status(201).json({ product, message: "product created succesfully" });
};

export const getProductsController = async (req: Request, res: Response) => {
  const products = await getProductsService();
  res.status(200).json(products);
}

export const getProductController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await getProductService(parseInt(id));
  res.status(200).json(product);
}
export const updateProductController= async (req: Request, res: Response) =>{
  const { id, name,description, price, stock,categoryId } = req.body;
  const validPayload = updateProductSchema.parse({id, name,description, price, stock,categoryId });
  const product = await updateProductService(id, name,description, price, stock,categoryId);
  res.status(201).json({ product, message: "product updated succesfully" });

}
export const deleteProductController = async (req: Request, res: Response) =>{
    const { id } = req.params;
    const product = await deleteProductService(parseInt(id));
    res.status(200).json({ product, message: "product deleted succesfully" });

}