// Imports
import mongoose, { Document, Schema } from 'mongoose';

// Define interface
interface Player extends Document {
  name: string;
  gender: string;
  monsters: Array<Schema.Types.ObjectId>;
}

// Define schema
const PlayerSchema: Schema = new Schema({
  name: String,
  gender: String,
  monsters: [{ type: Schema.Types.ObjectId, ref: 'Monster' }]
});

// Export model
export default mongoose.model<Player>('Player', PlayerSchema);
