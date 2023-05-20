// Required packages
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const fs = require('fs');

// Variables
const credentials = process.env.CREDENTIALS;
const client = new MongoClient('mongodb+srv://cluster0.liia5nk.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority', {
  sslKey: credentials,
  sslCert: credentials,
  serverApi: ServerApiVersion.v1
});
const database = client.db(process.env.DATABASE);
const collection = process.env.COLLECTION;

// app init
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
async function run() {
  try {
    await client.connect();
    const collectionInstance = database.collection(collection);
    const docCount = await collectionInstance.countDocuments({});
    console.log(docCount);
    // perform actions using client
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);