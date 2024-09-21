// create the user router
import Express from "express";

import { authenticateToken } from "../middlewares/authenticateToken";
import { authorizeRole } from "../middlewares/authorizationRole";
import { getWishlistcontroller, createWishlistcontroller, deleteWishlistcontroller } from "./wishlist.controller";
const wishlistRouter = Express.Router();

wishlistRouter.get("/", authenticateToken,  getWishlistcontroller);
wishlistRouter.post("/", authenticateToken, createWishlistcontroller);
wishlistRouter.delete("/:id", authenticateToken, deleteWishlistcontroller);

export default wishlistRouter;
