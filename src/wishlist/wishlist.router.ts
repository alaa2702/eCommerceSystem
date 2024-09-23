// create the user router
import Express from "express";

import { authenticateToken } from "../middlewares/authenticateToken";
import { authorizeRole } from "../middlewares/authorizationRole";
import { getWishlistcontroller, addItemWishlistcontroller, deleteItemWishlistcontroller } from "./wishlist.controller";
const wishlistRouter = Express.Router();

wishlistRouter.get("/", authenticateToken,  getWishlistcontroller);
wishlistRouter.post("/", authenticateToken, addItemWishlistcontroller);
wishlistRouter.delete("/", authenticateToken, deleteItemWishlistcontroller);

export default wishlistRouter;
