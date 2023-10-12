import db from "../db.js";

// eu tenho uma session que tem um token e um userId
// a partir disso tenho que achar o user e fazer o que quiser com ele
// pegar um app front end e ver o que ele usa e como pra implementar

export async function getUser(req, res) {
  const { user } = res.locals;
  delete user.password;

  res.send(user);
}

export async function updateUser(req, res) {
  const { user } = res.locals;

  await db.collection('users').updateOne({
    _id: user._id
  }, { $set: req.body });

  res.sendStatus(200);
}

export async function deleteUser(req, res) {
  const { user } = res.locals;

  await db.collection('users').deleteOne({ _id: user._id });

  res.sendStatus(200);
}