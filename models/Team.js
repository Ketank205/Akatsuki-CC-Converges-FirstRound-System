import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema({
  teamId: { type: Number, required: true, default: null },
  binaryNumber: { type: String, required: true },
  numberSystem: { type: String, required: true },
  animeCharacter: { 
    name: { type: String, default: null },
    imageUrl: { type: String, default: null } 
  },
  assignedNode: { type: String, default: null },
  pointsRecieved : { type: Number, default: 0 },
  attempts: { type: Number, default: 0 },
});

export default mongoose.model("Team", TeamSchema);