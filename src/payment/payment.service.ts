import prisma from "../utils/prisma";


export const checkPaymentService = async (userId: number, orderId: number) => {
    const order = await prisma.order.findUnique({
        where: {
            id: orderId,
            userId

        }
    });

    return order;
}

export const createPaymentService = async (orderId: number,  paymentMethod: string, amount: number, transactionId: string) => {
    const payment = await prisma.payment.create({
        data: {
        orderId,
        paymentMethod,
        amount,
        transactionId
        }
    });
    return payment;
};
export const getPaymentService = async (orderId: number) => {
    const payment = await prisma.payment.findUnique({
        where: {
            orderId
        }
    });
    return payment;

};