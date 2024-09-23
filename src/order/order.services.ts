//
import { OrderStatus } from ".prisma/client";
import prisma from "../utils/prisma";

export const getOrdersService = async () => {
    return await prisma.order.findMany();
};

export const getOrderService = async (id: number) => {
    return await prisma.order.findUnique({
        where: { id }
    });
};

export const createOrderService = async (userId:number, orderItems: {id: number, quantity: number}[] , shipping:any, payment:any, totalPrice: number) => {
    return await prisma.order.create({
        data: {
            userId,
            shipping: {
                create: shipping // Assuming shipping is a nested relation
            },
            payment: {
                create: payment // Assuming payment is a nested relation
            },
            totalPrice,
            orderItems: {
                createMany: {
                    data: orderItems.map(item => ({
                        productId: item.id,
                        quantity: item.quantity
                    }))
                }
            }
        }
    });
};

export const updateOrderStatusService = async (id: number, status: OrderStatus) => {
    return await prisma.order.update({
        where: { id },
        data: { status }
    });
};


export const getUserOrdersService = async (userId: number) => {
    return await prisma.order.findMany({
        where: { userId }
    });
};

export const cancelOrderService = async (id: number) => {
    return await prisma.order.delete({
        where: { id }
    });
};



