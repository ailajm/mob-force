// Imports
import express, { Request, Response } from 'express';
import Monster from '../models/Monster';

const router = express.Router();

// Get all monsters
router.get('/', async (req: Request, res: Response) => {
  const monsters = await Monster.find();
  res.json(monsters);
});

// Add a new monster
router.post('/', async (req: Request, res: Response) => {
  const newMonster = new Monster(req.body);
  const savedMonster = await newMonster.save();
  res.json(savedMonster);
});

export default router;
