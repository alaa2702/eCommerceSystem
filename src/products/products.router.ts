import Express from "express";
import { createProductController, getProductsController } from "./products.controller";
import { authenticateToken } from "../middlewares/authenticateToken";
import { authorizeRole } from "../middlewares/authorizationRole";

export const productRouter = Express.Router();
productRouter.post("/products/create",authenticateToken, authorizeRole("ADMIN"), createProductController);

productRouter.get("/products",authenticateToken, getProductsController);