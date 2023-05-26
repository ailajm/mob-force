// Imports
import express, { Request, Response } from 'express';
import Player from '../models/Player';

const router = express.Router();

// Get all players
router.get('/', async (req: Request, res: Response) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new player
router.post('/', async (req: Request, res: Response) => {
  const newPlayer = new Player(req.body);

  try {
    const savedPlayer = await newPlayer.save();
    res.json(savedPlayer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Exports
export default router;
