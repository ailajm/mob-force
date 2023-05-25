// Imports
import mongoose, { Document, Schema } from 'mongoose';

// Define interface
interface IPlayer extends Document {
  name: string;
  gender: string;
  monsters: Array<Schema.Types.ObjectId>;
}

// Define schema
const PlayerSchema: Schema = new Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  monsters: [{ type: Schema.Types.ObjectId, ref: 'Monster' }]
});

// Export model
export default mongoose.model<IPlayer>('Player', PlayerSchema);
