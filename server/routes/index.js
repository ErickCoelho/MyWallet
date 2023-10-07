import { Router } from "express";
import authRouter from "./authRouter";
import userRouter from "./userRouter";
import entryRouter from "./entryRouter";

const router = Router();
router.use(authRouter);
router.use(userRouter);
router.use(entryRouter);
export default router;