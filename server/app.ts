// Imports
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { MongoClient, Db, Collection } from 'mongodb';
import playerRoutes from './routes/players';
import monsterRoutes from './routes/monsters';

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
app.use('/api/players', playerRoutes);
app.use('/api/monsters', monsterRoutes);

// Connect to MongoDB
async function run() {
  try {
    await client.connect();
    console.log("Connected successfully");
    database = client.db(process.env.DATABASE || '');
    const collectionInstance: Collection = database.collection(collection);
    const docCount: number = await collectionInstance.countDocuments({});
    console.log(docCount);
  } catch(error) {
    console.error("Failed to connect", error);
  }
}

run();

// Close connection when server shuts down
process.on('SIGINT', async () => {
  console.log("Server shutting down...");
  if (!client.topology.isConnected()) {
    await client.close();
    console.log("Connection closed.");
  }
  process.exit(0);
});
