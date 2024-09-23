import Express from "express";

import { authenticateToken } from "../middlewares/authenticateToken";
import { authorizeRole } from "../middlewares/authorizationRole";
import { getShippingAddresscontroller, createShippingAddresscontroller, updateShippingAddresscontroller } from "./shippingAddress.controller";
const shippingRouter = Express.Router();
shippingRouter.get("/", authenticateToken, getShippingAddresscontroller);
shippingRouter.post("/", authenticateToken, createShippingAddresscontroller);
shippingRouter.patch("/", authenticateToken, updateShippingAddresscontroller);
export default shippingRouter;
