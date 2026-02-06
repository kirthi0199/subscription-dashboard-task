import Plan from "../models/Plan.js";

export const seedPlans = async () => {
  const count = await Plan.countDocuments();
  if (count === 0) {
    await Plan.insertMany([
      {
        name: "Basic",
        price: 99,
        features: ["Email Support", "1 User"],
        duration: 30
      },
      {
        name: "Pro",
        price: 299,
        features: ["Priority Support", "5 Users"],
        duration: 90
      },
      {
        name: "Enterprise",
        price: 999,
        features: ["Dedicated Support", "Unlimited Users"],
        duration: 365
      }
    ]);
  }
};
