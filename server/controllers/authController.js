import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import db from "../db.js";

export async function signUp(req, res) {
  const user = req.body;

  const passwordHash = bcrypt.hashSync(user.password, 10);

  await db.collection('users').insertOne({ ...user, password: passwordHash });

  const token = uuid();
  await db.collection('sessions').insertOne({ token, userId: user._id });

  res.send({...user, token}).status(201);
}

export async function signIn(req, res) {
  const userLogin = req.body;

  const user = await db.collection('users').findOne({
    email: userLogin.email
  });

  if (user && bcrypt.compare(user.password, userLogin.password)) {
    const token = uuid();

    await db.collection('sessions').insertOne({ token, userId: user._id });

    return res.send({...user, token}).status(200);
  }
  else
    return res.sendStatus(401);
}