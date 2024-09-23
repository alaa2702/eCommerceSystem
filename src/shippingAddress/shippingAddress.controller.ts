
import { Request, Response } from "express";
import { getShippingAddressService, createShippingAddressService, updateShippingAddressService } from "./shippingAddress.service";

export const getShippingAddresscontroller = async (req: Request, res: Response) => {
  const userId = req.user?.id;
  if (!userId) {   return res.status(401).json({ message: "Unauthorized" }); }

  const {orderId} = req.body
  const shipping = await getShippingAddressService(userId, orderId);
  res.json(shipping);
};

export const createShippingAddresscontroller = async (req: Request, res: Response) => {
  const userId = req.user?.id;
  if (!userId) {   return res.status(401).json({ message: "Unauthorized" }); }

  const { orderId, addressLine1, city, postalCode, country, addressLine2} = req.body;
  const shipping = await createShippingAddressService(userId, orderId, addressLine1, city, postalCode, country, addressLine2);
  res.json(shipping);
};

export const updateShippingAddresscontroller = async (req: Request, res: Response) => {
  const userId = req.user?.id;
  if (!userId) {   return res.status(401).json({ message: "Unauthorized" }); }
  const { orderId, addressLine1, city, postalCode, country, addressLine2} = req.body;
  const shipping = await updateShippingAddressService(userId, orderId, addressLine1, city, postalCode, country, addressLine2);
  res.json(shipping);
};
