import Express from "express";
import { createProductController, getProductsController,updateProductController,deleteProductController } from "./products.controller";
import { authenticateToken } from "../middlewares/authenticateToken";
import { authorizeRole } from "../middlewares/authorizationRole";

const productRouter = Express.Router();
productRouter.post("/create",authenticateToken, authorizeRole("ADMIN"), createProductController);
productRouter.patch("/update/:id",authenticateToken, authorizeRole("ADMIN"), updateProductController);
productRouter.delete("/delete/:id",authenticateToken, authorizeRole("ADMIN"), deleteProductController);
productRouter.get("/products",authenticateToken, getProductsController);

export default productRouter;