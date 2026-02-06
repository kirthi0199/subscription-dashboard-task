import mongoose from "mongoose";

const SubscriptionSchema = new mongoose.Schema({
  user_id: mongoose.Schema.Types.ObjectId,
  plan_id: mongoose.Schema.Types.ObjectId,
  start_date: Date,
  end_date: Date,
  status: String
});

export default mongoose.model("Subscription", SubscriptionSchema);
