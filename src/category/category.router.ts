import Express from "express";

import { createCategoryController, getCategoryController, updateCategoryController, deleteCategoryController,getCategoriesController } from "./category.controller";
import { authenticateToken } from "../middlewares/authenticateToken";
import { authorizeRole } from "../middlewares/authorizationRole";

const categoryRouter = Express.Router();

categoryRouter.post("/create",authenticateToken, authorizeRole("ADMIN"), createCategoryController);
categoryRouter.get("/category",authenticateToken, getCategoryController);
categoryRouter.get("/categories",authenticateToken, getCategoriesController);
categoryRouter.patch("/update/:id",authenticateToken, authorizeRole("ADMIN"), updateCategoryController);
categoryRouter.delete("/delete/:id",authenticateToken, authorizeRole("ADMIN"), deleteCategoryController);

export default categoryRouter;
