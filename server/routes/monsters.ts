// Imports
import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import Monster from '../models/Monster';

const router = express.Router();

// Validation rules
const monsterValidationRules = [
  body('name').isString().withMessage('Name must be a string.'),
  body('level').isInt({ min: 1 }).withMessage('Level must be greater than 0.'),
];

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
router.post('/', monsterValidationRules, async (req: Request, res: Response) => {
  // Validate request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const newMonster = new Monster(req.body);

  try {
    const savedMonster = await newMonster.save();
    res.json(savedMonster);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Exports
export default router;