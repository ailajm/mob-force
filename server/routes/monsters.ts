// Imports
import express, { Request, Response } from 'express';
import Monster from '../models/Monster';

const router = express.Router();

// Get all monsters
router.get('/', async (req: Request, res: Response) => {
  try {
    const monsters = await Monster.find();
    res.json(monsters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new monster
router.post('/', async (req: Request, res: Response) => {

  const newMonster = new Monster(req.body);

  try {
    const savedMonster = await newMonster.save();
    res.json(savedMonster);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Export
export default router;
