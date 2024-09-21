import Express from "express";

import { authenticateToken } from "../middlewares/authenticateToken";
import { authorizeRole } from "../middlewares/authorizationRole";
import { getPaymentController, createPaymentController } from "./payment.controller";
const paymentRouter = Express.Router();

paymentRouter.get("/", authenticateToken, getPaymentController);
paymentRouter.post("/", authenticateToken, createPaymentController);

export default paymentRouter;
