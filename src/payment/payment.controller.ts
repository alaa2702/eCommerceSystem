import { Request,Response } from "express";
import { getPaymentService, createPaymentService,checkPaymentService } from "./payment.service";


export const getPaymentController = async (req: Request, res: Response) => {
    const userId = req.user?.id;
    if (!userId) {
        return res.status(401).json({ message: 'User not found' });
    }
    const orderId = parseInt(req.params.orderId);
    const order = await checkPaymentService(userId, orderId);
    if (!order) {
        return res.status(401).json({ message: 'Order not found or unauthorized access' });
    }
    const payment = await getPaymentService(orderId);
    return res.status(200).json(payment);

}
export const createPaymentController = async (req: Request, res: Response) => {
       const {orderId,paymentMethod, amount, transactionId} = req.body;
       const userId = req.user?.id;
        if (!userId) {
              return res.status(401).json({ message: 'User not found' });
        }
        const order = await checkPaymentService(userId, orderId);
        if (!order) {
            return res.status(401).json({ message: 'Order not found or unauthorized access' });
        }
        const payment = await createPaymentService(orderId, paymentMethod, amount, transactionId);
        return res.status(200).json(payment);

}
        
