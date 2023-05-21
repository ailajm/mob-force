// Imports
const express = require('express');
const router = express.Router();
const Monster = require('../models/Monster');

// Get all monsters
router.get('/', async (req, res) => {
  const monsters = await Monster.find();
  res.json(monsters);
});

// Add a new monster
router.post('/', async (req, res) => {
  const newMonster = new Monster(req.body);
  const savedMonster = await newMonster.save();
  res.json(savedMonster);
});

module.exports = router;
