import Express from "express";
import { createOrderController, getOrdersController, getOrderController, updateOrderStatusController, cancelOrderController, getUserOrdersController } from "./order.controller";
import { authenticateToken } from "../middlewares/authenticateToken";
import { authorizeRole } from "../middlewares/authorizationRole";

const orderRouter = Express.Router();

orderRouter.post("/create",authenticateToken, createOrderController);
orderRouter.get("/me",authenticateToken, getUserOrdersController);
orderRouter.get("/",authenticateToken, authorizeRole("ADMIN"), getOrdersController);
orderRouter.get("/:id",authenticateToken, authorizeRole("ADMIN"), getOrderController);
orderRouter.patch("/update/:id/status",authenticateToken, authorizeRole("ADMIN"), updateOrderStatusController);
orderRouter.patch("/update/:id/cancel",authenticateToken, authorizeRole("ADMIN"), cancelOrderController);


export default orderRouter;
