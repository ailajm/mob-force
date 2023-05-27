// Imports
import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import Player from '../models/Player';

const router = express.Router();

// Validation
const playerValidationRules = [
  body('name').isString().withMessage('Name must be a string.'),
  body('level').isInt({ min: 1 }).withMessage('Level must be greater than 0.'),
];

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
router.post('/', playerValidationRules, async (req: Request, res: Response) => {
  // Validate request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

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
