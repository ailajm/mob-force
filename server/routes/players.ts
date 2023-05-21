// Imports
import express, { Request, Response } from 'express';
import Player from '../models/Player';

const router = express.Router();

// Get all players
router.get('/', async (req: Request, res: Response) => {
  const players = await Player.find();
  res.json(players);
});

// Add a new player
router.post('/', async (req: Request, res: Response) => {
  const newPlayer = new Player(req.body);
  const savedPlayer = await newPlayer.save();
  res.json(savedPlayer);
});

export default router;
