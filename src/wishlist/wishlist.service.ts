import prisma from "../utils/prisma";

export const getWishlistService = async (userId: number) => {
    const wishlist = await prisma.wishlist.findUnique({
        where: {
            userId
        },
        include: {
            products: true,
        }
    });
    return wishlist;
};

export const createOrAddWishlistService = async (userId:number, products: any) => {
    const wishlist = await prisma.wishlist.upsert({
            where: {
            userId
        },
        update: {
            products: {
                set: products
            }
        },
        create: {
            userId,
            products
        }
    });
    return wishlist;

}; 
export const deleteWishlistService = async (userId:number ) => {
    const wishlist = await prisma.wishlist.delete({
        where: {
            userId
        },
    });
    return wishlist;
    
};
