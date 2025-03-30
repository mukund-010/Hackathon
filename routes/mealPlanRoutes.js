const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const User = require("../models/User");
require("dotenv").config();

const router = express.Router();

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Generate Meal Plan Route
router.get("/generate/:email", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const prompt = `Provide a list of meal options suitable for a ${user.age}-year-old from ${user.region}. 
    Consider their health conditions: ${user.healthConditions.join(", ")}. 
    Avoid these allergies: ${user.allergies.join(", ")} and disliked ingredients: ${user.dislikedIngredients.join(", ")}. 
    Use these preferred ingredients: ${user.preferredIngredients.join(", ")}. 
    The meal options should include a variety of traditional foods from ${user.region}. 
    Return only a plain text list without formatting symbols like ## or **.`;

    // Call Gemini AI for response
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
    const result = await model.generateContent(prompt);
    const responseText = await result.response.text();  // ✅ Extract text properly

    res.json({ mealPlan: responseText });
  } catch (error) {
    console.error("❌ Gemini API Error:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

