import db from "../db.js";

export async function createEntry(req, res) {
  const { user } = res.locals;
  const entry = req.body;

  await db.collection('entries').insertOne({...entry, userId: user._id, timestamp: new Date()});

  res.sendStatus(200);
}

export async function getEntries(req, res) {
  const { user } = res.locals;

  const entries = await db.collection('entries').find({ userId: user._id }).toArray();

  res.send(entries).status(200);
}

export async function updateEntry(req, res) {
  const { user } = res.locals;
  const newEntry = req.body.entry;

  await db.collection('entries').updateOne(
    { userId: user._id },
    { $set: {...newEntry, userId: user._id} }
  );
  
  res.sendStatus(200);
}

export async function deleteEntry(req, res) {
  const { user } = res.locals;

  await db.collection('users').deleteOne({ userId: user._id });
  
  res.sendStatus(200);
}