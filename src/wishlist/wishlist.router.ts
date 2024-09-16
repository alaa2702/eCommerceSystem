// create the user router
import Express from "express";

import { authenticateToken } from "../middlewares/authenticateToken";
import { authorizeRole } from "../middlewares/authorizationRole";

const wishlistRouter = Express.Router();


export default wishlistRouter;
