import Express from "express";

import { authenticateToken } from "../middlewares/authenticateToken";
import { authorizeRole } from "../middlewares/authorizationRole";
import { getShippingcontroller, createShippingcontroller, updateShippingcontroller } from "./shipping.controller";
const shippingRouter = Express.Router();
shippingRouter.get("/", authenticateToken, getShippingcontroller);
shippingRouter.post("/", authenticateToken, createShippingcontroller);
shippingRouter.patch("/", authenticateToken, updateShippingcontroller);
export default shippingRouter;
