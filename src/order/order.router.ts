import Express from "express";

import { authenticateToken } from "../middlewares/authenticateToken";
import { authorizeRole } from "../middlewares/authorizationRole";

const orderRouter = Express.Router();

orderRouter.post("/create",authenticateToken, authorizeRole("USER"), createOrderController);
orderRouter.get("/",authenticateToken, authorizeRole("ADMIN"), getOrdersController);
orderRouter.get("/:id",authenticateToken, authorizeRole("ADMIN"), getOrderController);
orderRouter.patch("/update/:id/status",authenticateToken, authorizeRole("ADMIN"), updateOrderStatusController);


export default orderRouter;
