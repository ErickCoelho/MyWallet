import { Router } from "express";
import { signIn, signUp } from "../controllers/authController";
import userSchemaValidationMiddleware from "../middlewares/userSchemaValidationMiddleware";

const authRouter = Router();
authRouter.post("/sign-up", userSchemaValidationMiddleware, signUp);
authRouter.post("/sign-in", signIn);
export default authRouter;
