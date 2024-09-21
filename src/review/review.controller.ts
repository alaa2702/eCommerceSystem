import  { Request,Response } from "express";
import { getReviewService, getReviewsOfProductService, createReviewService, deleteReviewService,deleteReviewbyAdminService } from "./review.service";
export const getReviewController = async (req: Request, res: Response) => {}
export const getReviewsOfProductController = async (req: Request, res: Response) => {}
export const createReviewController = async (req: Request, res: Response) => {}
export const deleteReviewController = async (req: Request, res: Response) => {}
export const deleteReviewbyAdminController = async (req: Request, res: Response) => {}