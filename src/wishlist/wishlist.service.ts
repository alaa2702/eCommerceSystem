import { error } from "console";
import prisma from "../utils/prisma";
export const getProductByNameService = async (name: string) => {
    const product = await prisma.product.findFirst({
        where: {
            name
        },
        select: {
            id: true
        }
    });
    return product;
}
export const getWishlistService = async (userId: number) => {
    const wishlist = await prisma.wishlist.findUnique({
        where: {
            userId
        },
        
    });
    return wishlist;
};
export const createWishlistService = async (userId:number ) => {
    const wishlist = await prisma.wishlist.create({
        data: {
            userId
        }
    });
    return wishlist;
};

export const addWishlistService = async (wishlistId: number, productId: number) => {
    const wishlist = await prisma.wishlistProduct.createMany({
        data: 
        
            {
                    wishlistId,
                    productId
            
            }

    });
    return wishlist;

}; 
export const deleteWishlistService = async (wishlistId:number, productId:number ) => {
    const wishlist = await prisma.wishlistProduct.delete({
        where: {
            wishlistId_productId : {
                wishlistId,
                productId
            }
            }
    });
    return wishlist;
    
};
