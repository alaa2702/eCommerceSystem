// create the user router
import Express from "express";
import { createUserController, loginUserController, updateUserController, deleteUserController, getUserController } from "./user.controller";
import { createAdminController, getUserByAdminController,updateUserByAdminController,deleteUserByAdminController,getUsersByAdminController } from "./user.controller";
import { authenticateToken } from "../middlewares/authenticateToken";
import { authorizeRole } from "../middlewares/authorizationRole";

const userRouter = Express.Router();
userRouter.post("/auth/register", createUserController);
userRouter.post("/auth/login", loginUserController);
userRouter.patch("/update", authenticateToken, updateUserController);
userRouter.delete("/delete", authenticateToken, deleteUserController);
userRouter.get("/me", authenticateToken, getUserController);
//userRouter.post("/admin/create", authenticateToken, authorizeRole("ADMIN"), createAdminController);
userRouter.get("/:id", authenticateToken, authorizeRole("ADMIN"), getUserByAdminController);
userRouter.patch("/:id", authenticateToken, authorizeRole("ADMIN"), updateUserByAdminController);
userRouter.delete("/:id", authenticateToken, authorizeRole("ADMIN"), deleteUserByAdminController);
userRouter.get("/users", authenticateToken, authorizeRole("ADMIN"), getUsersByAdminController);

export default userRouter;
