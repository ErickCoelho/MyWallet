import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
//const mongoClient = new MongoClient("mongodb://localhost:27017");

await mongoClient.connect();

const db = mongoClient.db("mywallet");
export default db;