import { Request, Response } from "express";

import { getWishlistService, createWishlistService, deleteWishlistService } from "./wishlist.service";


export const getWishlistcontroller = async (req: Request, res: Response) => {
    const wishlist = await getWishlistService();
    if (!wishlist) {
        return res.status(404).json({ message: "There is no wishlist" });
    }   
    res.status(200).json(wishlist);

}; 
export const createWishlistcontroller = async (req: Request, res: Response) => {
    const{product} = req.body;
    const wishlist = await createWishlistService(req.body);
    res.status(201).json(wishlist);
};
export const deleteWishlistcontroller = async (req: Request, res: Response) => {};
