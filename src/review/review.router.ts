import Express from "express";
import { getReviewsController, createReviewController, getReviewsOfProductController, getReviewController, deleteReviewController,deleteReviewbyAdminController } from "./review.controller";
import { authenticateToken } from "../middlewares/authenticateToken";
import { authorizeRole } from "../middlewares/authorizationRole";

const reviewRouter = Express.Router();
reviewRouter.post("/create",authenticateToken, createReviewController);
reviewRouter.get("/",authenticateToken, getReviewsOfProductController);
reviewRouter.get("/:id",authenticateToken,authorizeRole("ADMIN"), getReviewController);
reviewRouter.get("/reviews",authenticateToken,authorizeRole("ADMIN"), getReviewsController);

reviewRouter.delete("/:id",authenticateToken, authorizeRole("ADMIN"), deleteReviewbyAdminController);
reviewRouter.delete("/delete",authenticateToken, deleteReviewController);


export default reviewRouter;
