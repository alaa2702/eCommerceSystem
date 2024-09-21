
import { Request, Response } from "express";
import { getShippingService, createShippingService, updateShippingService } from "./shipping.service";

export const getShippingcontroller = async (req: Request, res: Response) => {
  const shipping = await getShippingService();
  res.json(shipping);
};

export const createShippingcontroller = async (req: Request, res: Response) => {
  const { name, price } = req.body;
  const shipping = await createShippingService();
  res.json(shipping);
};

export const updateShippingcontroller = async (req: Request, res: Response) => {
  const { id, name, price } = req.body;
  const shipping = await updateShippingService();
  res.json(shipping);
};
