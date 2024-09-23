import { Request,Response } from "express";

import { createOrderService, getOrderService, getOrdersService, updateOrderStatusService, getUserOrdersService, cancelOrderService } from "./order.services";
export const getOrderController = async (req: Request, res: Response) => {
    const orderId = Number(req.params.id);
    const order = await getOrderService(orderId);
    if (!order) {
        return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json(order);
 
};
export const getOrdersController = async (req: Request, res: Response) => {
    const orders = await getOrdersService();
    if (!orders) {
        return res.status(404).json({ message: 'There are no orders' });
    }
    res.status(200).json(orders);
};
export const updateOrderStatusController = async (req: Request, res: Response) => {};
export const getUserOrdersController = async (req: Request, res: Response) => {
    const userId = req.user?.id;
    if (!userId) {
        return res.status(401).json({ message: 'User is Unauthorizated' });
    }
    const order = await getOrderService(userId);
    if (!order) {
        return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json(order);
};
export const cancelOrderController = async (req: Request, res: Response) => {
    const orderId = Number(req.params.id);
    const order = await cancelOrderService(orderId);
    if (!order) {
        return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json(order);
};
export const createOrderController = async (req: Request, res: Response) => {
    const userId = req.user?.id;
    if (!userId) {
        return res.status(401).json({ message: 'User is Unauthorizated' });
    }
    const { orderItems, shipping, payment, totalPrice } = req.body;
    const order = await createOrderService(userId, orderItems, shipping, payment, totalPrice);
    if (!order) {
        return res.status(400).json({ message: 'Order not created' });
    }
    res.status(201).json(order);
};

