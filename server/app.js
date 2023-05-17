// Required packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// app init
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
