const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: String, required: true },
  region: { type: String, required: true },
  healthConditions: { type: [String], default: [] },
  timeConstraint: { type: String},
  allergies: { type: [String], default: [] },
  dietPreference: { type: String},
  preferredIngredients: { type: [String], default: [] },
  dislikedIngredients: { type: [String], default: [] },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
