import { Router } from "express";
import { tokenValidationMiddleware } from "../middlewares/tokenValidationMiddleware.js";
import { deleteUser, getUser, updateUser } from "../controllers/userController.js";

const userRouter = Router();
userRouter.use(tokenValidationMiddleware);
userRouter.get("/user", getUser);
userRouter.put("/user", updateUser);
userRouter.delete("/user", deleteUser);
export default userRouter;
