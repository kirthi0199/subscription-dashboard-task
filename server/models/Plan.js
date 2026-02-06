import mongoose from "mongoose";

const PlanSchema = new mongoose.Schema({
  name: String,
  price: Number,
  features: [String],
  duration: Number
});

export default mongoose.model("Plan", PlanSchema);
