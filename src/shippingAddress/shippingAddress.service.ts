import prisma from "../utils/prisma";


export const getShippingAddressService = async (userId:number, orderId: number) => {
    const shipping = await prisma.shippingAddress.findUnique({
        where: {
        orderId,
        userId
        },
    });
    return shipping;
  
};

export const createShippingAddressService = async ( userId:number,orderId:number, addressLine1: string, city: string, postalCode: string, country: string,addressLine2?: string ) => {
    const shipping = await prisma.shippingAddress.create({
        data: {
            userId,
            orderId,
            addressLine1,
            city,
            postalCode,
            country,
            addressLine2
        }
    });
    return shipping;
};

export const updateShippingAddressService = async (userId:number,orderId:number, addressLine1: string, city: string, postalCode: string, country: string,addressLine2?: string ) => {
    const shipping = await prisma.shippingAddress.update({
        where: {
            orderId,
            userId
        },
        data: {
            addressLine1,
            city,
            postalCode,
            country,
            addressLine2
        }
    });
    return shipping;

};