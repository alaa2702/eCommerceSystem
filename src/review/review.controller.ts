import  { Request,Response } from "express";
import { getReviewsService, getReviewsOfProductService, createReviewService, deleteReviewService,deleteReviewbyAdminService,getReviewService } from "./review.service";
import { number } from "zod";
export const getReviewsController = async (req: Request, res: Response) => {
    const reviews = await getReviewsService();
    res.json(reviews);
}
export const getReviewController = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const review = await getReviewService(id);
    res.json(review);
}

export const getReviewsOfProductController = async (req: Request, res: Response) => {
    const {productId} = req.body;
    const reviews = await getReviewsOfProductService(productId);
    res.json(reviews);
}
export const createReviewController = async (req: Request, res: Response) => {
    const userId = Number(req.user?.id);
    const {productId, rating, comment} = req.body;
    const review = await createReviewService(userId, productId, rating, comment);
    res.json(review);
}
export const deleteReviewController = async (req: Request, res: Response) => {
    const userId = Number(req.user?.id);
    const {productId} = req.body;
    const review = await deleteReviewService(userId, productId);
    res.json(review);
}
export const deleteReviewbyAdminController = async (req: Request, res: Response) => {
    const {id} = req.params;
    const review = await deleteReviewbyAdminService(Number(id));
    res.json(review);
}