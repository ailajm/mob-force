// Imports
import mongoose, { Document, Schema } from 'mongoose';

// Define interface
interface IMonster extends Document {
  name: string;
  level: number;
  health: number;
  experience: number;
  specializationPath: string;
  befriended: boolean;
}

// Define schema
const MonsterSchema: Schema = new Schema({
  name: String,
  level: Number,
  health: Number,
  experience: Number,
  specializationPath: String,
  befriended: Boolean
});

// Export
export default mongoose.model<IMonster>('Monster', MonsterSchema);
