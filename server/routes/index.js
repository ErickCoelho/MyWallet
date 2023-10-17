import { Router } from "express";
import authRouter from "./authRouter.js";
import userRouter from "./userRouter.js";
import entryRouter from "./entryRouter.js";
import db from '../db.js';

const router = Router();
router.get('/users', async (req, res) => {
  try {
    const users = await db.collection('users').find({}).toArray();
    res.send(users);
  } catch (error) {
    // Trate erros adequadamente, por exemplo:
    console.error('Erro ao buscar usuários:', error);
    res.status(500).send('Erro ao buscar usuários');
  }
}); //apenas para teste
router.get('/allentries', async (req, res) => {

  const entries = await db.collection('entries').find({}).toArray();

  res.send(entries).status(200);
}); //apenas para teste
router.use(authRouter);
router.use(userRouter);
router.use(entryRouter);
export default router;