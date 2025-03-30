const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  healthConditions: { type: [String], default: [] },
  allergies: { type: [String], default: [] },
  preferredIngredients: { type: [String], default: [] },
  dislikedIngredients: { type: [String], default: [] },
});

const User = mongoose.model("User", userSchema);
module.exports = User;