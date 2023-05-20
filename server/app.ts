import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { MongoClient, Db, Collection } from 'mongodb';
import fs from 'fs';

dotenv.config();

const credentials: string = process.env.CREDENTIALS || '';
const client: MongoClient = new MongoClient('mongodb+srv://cluster0.liia5nk.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority', {
  sslKey: credentials,
  sslCert: credentials,
  serverApi: '1',
});
let database: Db;
let collection: string = process.env.COLLECTION || '';

// app init
const app: express.Application = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
async function run() {
  try {
    await client.connect();
    database = client.db(process.env.DATABASE || '');
    const collectionInstance: Collection = database.collection(collection);
    const docCount: number = await collectionInstance.countDocuments({});
    console.log(docCount);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);