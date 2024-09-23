import { Request, Response } from "express";

import { createWishlistService,getProductByNameService, getWishlistService, addWishlistService, deleteWishlistService } from "./wishlist.service";
import { number } from "zod";


export const getWishlistcontroller = async (req: Request, res: Response) => {
    const userId = req.user?.id;
    const wishlist = await getWishlistService(Number(userId));
    if (!wishlist) {
        return res.status(404).json({ message: "There is no wishlist" });
    }   
    res.status(200).json(wishlist);

}; 
export const addItemWishlistcontroller = async (req: Request, res: Response) => {
    const userId = req.user?.id;
    const { product } = req.body;
    const productId = await getProductByNameService(product);
    if (!productId) {
        return res.status(404).json({ message: "Product not found" });
    }
    if (!userId) {
        return res.status(401).json({ message: "User not found" });
    }
    const wishlist = await getWishlistService(Number(userId));
    if (!wishlist) {
        const newWishlist = await createWishlistService(Number(userId));
        await addWishlistService(newWishlist.id, Number(productId));
    }
    else {
        
        await addWishlistService(wishlist.id, Number(productId));
    }
 
    res.status(201).json(wishlist);
};
export const deleteItemWishlistcontroller = async (req: Request, res: Response) => {};
