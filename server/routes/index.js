import { Router } from "express";
import authRouter from "./authRouter.js";
import userRouter from "./userRouter.js";
import entryRouter from "./entryRouter.js";
import db from '../db.js';

const router = Router();
router.use(authRouter);
router.use(userRouter);
router.use(entryRouter);
export default router;