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
    name: { type: String, required: true },
    level: { type: Number, required: true },
    health: { type: Number, required: true },
    experience: { type: Number, required: true },
    specializationPath: { type: String, required: true },
    befriended: { type: Boolean, default: false }
});  

// Export
export default mongoose.model<IMonster>('Monster', MonsterSchema);
