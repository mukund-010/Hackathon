// test.js - Recipe Recommendation System

// Import the recipe and food data
const recipeData = {
  "recipes": [
    {
      "name": "Dal Tadka",
      "ingredients": ["Toor dal", "Onion", "Tomato", "Garlic", "Ginger", "Green chilies", "Cumin seeds", "Mustard seeds", "Turmeric", "Red chili powder", "Garam masala", "Salt", "Ghee", "Coriander leaves"],
      "instructions": "1. Wash and soak dal for 30 minutes. 2. Pressure cook dal with turmeric and salt for 3 whistles. 3. In a pan, heat ghee and add mustard seeds, cumin seeds, garlic, ginger, and green chilies. 4. Add chopped onions and tomatoes; cook until soft. 5. Add cooked dal and mix well. 6. Simmer for 5 minutes and garnish with coriander leaves.",
      "time_required": "30 minutes"
    },
    {
      "name": "Chicken Biryani",
      "ingredients": ["Chicken", "Basmati rice", "Onions", "Tomatoes", "Yogurt", "Ginger-garlic paste", "Green chilies", "Coriander leaves", "Mint leaves", "Ghee", "Biryani masala", "Salt", "Turmeric", "Red chili powder"],
      "instructions": "1. Marinate chicken with yogurt, ginger-garlic paste, salt, turmeric, and biryani masala for 1 hour. 2. Cook rice until 70% done. 3. In a pan, heat ghee and fry onions until golden brown. 4. Add marinated chicken and cook until tender. 5. Layer chicken and rice, sprinkle coriander and mint leaves. 6. Cover and cook on low heat for 20 minutes.",
      "time_required": "1.5 hours"
    },
    {
      "name": "Paneer Butter Masala",
      "ingredients": ["Paneer", "Tomatoes", "Cashews", "Cream", "Butter", "Onion", "Garlic", "Ginger", "Green chilies", "Cumin seeds", "Coriander powder", "Garam masala", "Salt", "Turmeric", "Red chili powder"],
      "instructions": "1. Blend tomatoes and cashews into a smooth puree. 2. In a pan, heat butter, add cumin seeds, garlic, ginger, and onions. 3. Add tomato-cashew puree and cook until thick. 4. Add spices, salt, and paneer cubes. 5. Simmer and add cream before serving.",
      "time_required": "40 minutes"
    },
    {
      "name": "Egg Curry",
      "ingredients": ["Eggs", "Onions", "Tomatoes", "Ginger-garlic paste", "Green chilies", "Curry leaves", "Mustard seeds", "Coconut milk", "Coriander powder", "Red chili powder", "Salt", "Turmeric"],
      "instructions": "1. Boil eggs and set aside. 2. Heat oil in a pan, add mustard seeds, curry leaves, and onions. 3. Add ginger-garlic paste and tomatoes, cook until soft. 4. Add spices, salt, and coconut milk. 5. Add boiled eggs and simmer for 10 minutes.",
      "time_required": "35 minutes"
    },
    {
      "name": "Fish Curry",
      "ingredients": ["Fish", "Onions", "Tomatoes", "Ginger-garlic paste", "Coconut milk", "Green chilies", "Curry leaves", "Mustard seeds", "Coriander powder", "Red chili powder", "Turmeric", "Salt", "Oil"],
      "instructions": "1. Clean and marinate fish with turmeric and salt. 2. Heat oil in a pan, add mustard seeds and curry leaves. 3. Add onions and cook until golden. 4. Add ginger-garlic paste and tomatoes; cook until soft. 5. Add spices and coconut milk. 6. Add fish and cook on low heat until tender.",
      "time_required": "40 minutes"
    },
    {
      "name": "Pasta Alfredo",
      "ingredients": ["Pasta", "Butter", "Cream", "Garlic", "Parmesan cheese", "Salt", "Pepper", "Oregano"],
      "instructions": "1. Boil pasta until al dente. 2. In a pan, melt butter and sauté garlic. 3. Add cream and let it simmer. 4. Mix in cooked pasta, Parmesan cheese, salt, and pepper. 5. Garnish with oregano and serve.",
      "time_required": "25 minutes"
    },
    {
      "name": "Homemade Pizza",
      "ingredients": ["Pizza base", "Tomato sauce", "Cheese", "Bell peppers", "Onions", "Olives", "Oregano", "Chili flakes", "Salt"],
      "instructions": "1. Preheat oven to 200°C. 2. Spread tomato sauce on pizza base. 3. Add cheese and toppings of choice. 4. Bake for 15-20 minutes until cheese is melted and crust is crispy. 5. Garnish with oregano and chili flakes before serving.",
      "time_required": "30 minutes"
    },
    {
      "name": "Aloo Gobi",
      "ingredients": ["Potatoes", "Cauliflower", "Onions", "Tomatoes", "Ginger-garlic paste", "Cumin seeds", "Turmeric", "Coriander powder", "Red chili powder", "Salt", "Oil", "Coriander leaves"],
      "instructions": "1. Heat oil in a pan and add cumin seeds. 2. Add onions and sauté until golden brown. 3. Add ginger-garlic paste and tomatoes; cook until soft. 4. Add potatoes, cauliflower, and spices. 5. Cover and cook on low heat until vegetables are tender. 6. Garnish with coriander leaves.",
      "time_required": "35 minutes"
    },
    {
      "name": "Bhindi Masala",
      "ingredients": ["Okra (bhindi)", "Onions", "Tomatoes", "Garlic", "Green chilies", "Cumin seeds", "Turmeric", "Coriander powder", "Garam masala", "Salt", "Oil"],
      "instructions": "1. Wash and dry okra thoroughly. 2. Heat oil in a pan, add cumin seeds and chopped garlic. 3. Add onions and sauté until golden brown. 4. Add tomatoes, green chilies, and spices. 5. Add chopped okra and cook on low heat until tender.",
      "time_required": "30 minutes"
    },
    {
      "name": "Palak Paneer",
      "ingredients": ["Spinach", "Paneer", "Onions", "Tomatoes", "Garlic", "Ginger", "Green chilies", "Cumin seeds", "Turmeric", "Garam masala", "Salt", "Cream"],
      "instructions": "1. Blanch spinach and blend into a puree. 2. Heat oil in a pan, add cumin seeds, garlic, ginger, and onions. 3. Add tomatoes and cook until soft. 4. Add spinach puree and spices. 5. Add paneer cubes and simmer for 10 minutes. 6. Stir in cream before serving.",
      "time_required": "40 minutes"
    },
    {
      "name": "Chana Masala",
      "ingredients": ["Chickpeas", "Onions", "Tomatoes", "Garlic", "Ginger", "Cumin seeds", "Coriander powder", "Garam masala", "Salt", "Turmeric", "Red chili powder", "Oil", "Coriander leaves"],
      "instructions": "1. Soak chickpeas overnight and cook until soft. 2. Heat oil in a pan, add cumin seeds, garlic, and onions. 3. Add tomatoes and cook until soft. 4. Add cooked chickpeas and spices. 5. Simmer for 10 minutes and garnish with coriander leaves.",
      "time_required": "45 minutes"
    },
    {
      "name": "Methi Thepla",
      "ingredients": ["Fenugreek leaves", "Whole wheat flour", "Yogurt", "Turmeric", "Coriander powder", "Cumin seeds", "Salt", "Oil"],
      "instructions": "1. Mix fenugreek leaves, flour, yogurt, spices, and salt to make a dough. 2. Roll out into thin flatbreads. 3. Cook on a hot tawa with oil until golden brown on both sides.",
      "time_required": "30 minutes"
    }
  ]
};

const indianFoodData = {
  "indianFoods": [
    {
      "_id": "ObjectId('1')",
      "name": "Dal",
      "category": "Legumes",
      "subCategory": "Pulses",
      "nutrients": {
        "calories": 250,
        "protein": 12,
        "carbs": 30,
        "fats": 8,
        "fiber": 7,
        "glycemicIndex": 35
      },
      "dietaryBenefits": ["Rich in protein", "Aids digestion"],
      "availability": {
        "regions": ["All India"],
        "season": "Available year-round"
      }
    },
    {
      "_id": "ObjectId('2')",
      "name": "Rice",
      "category": "Grains",
      "subCategory": "Cereals",
      "nutrients": {
        "calories": 130,
        "protein": 3,
        "carbs": 28,
        "fats": 0.3,
        "fiber": 0.6,
        "glycemicIndex": 73
      },
      "dietaryBenefits": ["Easily digestible", "Quick energy source"],
      "availability": {
        "regions": ["All India"],
        "season": "Available year-round"
      }
    },
    {
      "_id": "ObjectId('3')",
      "name": "Chapati",
      "category": "Grains",
      "subCategory": "Flatbread",
      "nutrients": {
        "calories": 120,
        "protein": 4,
        "carbs": 25,
        "fats": 1,
        "fiber": 3,
        "glycemicIndex": 52
      },
      "dietaryBenefits": ["Rich in fiber", "Good source of energy"],
      "availability": {
        "regions": ["All India"],
        "season": "Available year-round"
      }
    },
    {
      "_id": "ObjectId('4')",
      "name": "Ladyfinger",
      "category": "Vegetables",
      "subCategory": "Green Vegetables",
      "nutrients": {
        "calories": 33,
        "protein": 2,
        "carbs": 7,
        "fats": 0.2,
        "fiber": 3,
        "glycemicIndex": 20
      },
      "dietaryBenefits": ["Good for digestion", "Rich in fiber"],
      "availability": {
        "regions": ["All India"],
        "season": "Summer"
      }
    },
    {
      "_id": "ObjectId('5')",
      "name": "Potato",
      "category": "Vegetables",
      "subCategory": "Root Vegetables",
      "nutrients": {
        "calories": 77,
        "protein": 2,
        "carbs": 17,
        "fats": 0.1,
        "fiber": 2,
        "glycemicIndex": 85
      },
      "dietaryBenefits": ["Good energy source", "Rich in potassium"],
      "availability": {
        "regions": ["All India"],
        "season": "Available year-round"
      }
    },
    {
      "_id": "ObjectId('6')",
      "name": "Tomato",
      "category": "Vegetables",
      "subCategory": "Fruit Vegetables",
      "nutrients": {
        "calories": 18,
        "protein": 0.9,
        "carbs": 3.9,
        "fats": 0.2,
        "fiber": 1.2,
        "glycemicIndex": 15
      },
      "dietaryBenefits": ["Rich in Vitamin C", "Good for heart health"],
      "availability": {
        "regions": ["All India"],
        "season": "Available year-round"
      }
    },
    {
      "_id": "ObjectId('7')",
      "name": "Pasta",
      "category": "Grains",
      "subCategory": "Processed Foods",
      "nutrients": {
        "calories": 158,
        "protein": 5.8,
        "carbs": 31,
        "fats": 1.2,
        "fiber": 1.8,
        "glycemicIndex": 55
      },
      "dietaryBenefits": ["Energy-rich", "Good source of carbohydrates"],
      "availability": {
        "regions": ["Urban India"],
        "season": "Available year-round"
      }
    },
    {
      "_id": "ObjectId('8')",
      "name": "Makki",
      "category": "Grains",
      "subCategory": "Millets",
      "nutrients": {
        "calories": 160,
        "protein": 5,
        "carbs": 35,
        "fats": 1.5,
        "fiber": 2,
        "glycemicIndex": 55
      },
      "dietaryBenefits": ["Rich in fiber", "Good for digestion"],
      "availability": {
        "regions": ["Punjab, Rajasthan, UP"],
        "season": "Winter"
      }
    },
    {
      "_id": "ObjectId('9')",
      "name": "Jowar",
      "category": "Grains",
      "subCategory": "Millets",
      "nutrients": {
        "calories": 160,
        "protein": 5.4,
        "carbs": 35,
        "fats": 1.9,
        "fiber": 2.5,
        "glycemicIndex": 50
      },
      "dietaryBenefits": ["Gluten-free alternative", "Good for diabetes"],
      "availability": {
        "regions": ["Maharashtra, Karnataka, Gujarat"],
        "season": "Winter"
      }
    }
  ]
};

// Helper function to get seasonally available ingredients based on region
function getAvailableIngredients(region, season) {
  const availableIngredients = [];
  
  indianFoodData.indianFoods.forEach(food => {
    const isRegionMatch = food.availability.regions.includes(region) || 
                          food.availability.regions.includes("All India");
    const isSeasonMatch = food.availability.season.includes(season) || 
                          food.availability.season.includes("Available year-round");
    
    if (isRegionMatch && isSeasonMatch) {
      availableIngredients.push(food.name.toLowerCase());
    }
  });
  
  return availableIngredients;
}

// Function to check if a recipe contains allergens
function containsAllergens(recipe, allergies) {
  if (!allergies || allergies.length === 0) return false;
  
  const allergyList = allergies.map(allergy => allergy.toLowerCase());
  
  return recipe.ingredients.some(ingredient => 
    allergyList.some(allergen => 
      ingredient.toLowerCase().includes(allergen)
    )
  );
}

// Function to score recipes based on user preferences
function scoreRecipe(recipe, userPreferences) {
  let score = 0;
  const {
    availableIngredients = [],
    dietaryPreferences = [],
    timeConstraint,
    lowCalorie,
    highProtein
  } = userPreferences;
  
  // Check available ingredients
  const availableCount = recipe.ingredients.filter(ingredient => 
    availableIngredients.some(avail => 
      ingredient.toLowerCase().includes(avail.toLowerCase())
    )
  ).length;
  
  // Calculate percentage of available ingredients
  const ingredientPercentage = availableCount / recipe.ingredients.length;
  score += ingredientPercentage * 5; // Max 5 points for ingredients
  
  // Check if recipe meets time constraint
  if (timeConstraint) {
    const recipeTime = parseInt(recipe.time_required);
    if (recipeTime <= timeConstraint) {
      score += 2;
    }
  }
  
  // Check dietary preferences
  if (dietaryPreferences.includes("vegetarian") && 
      !["Chicken", "Fish", "Eggs"].some(item => 
        recipe.ingredients.some(ingredient => 
          ingredient.toLowerCase().includes(item.toLowerCase())
        )
      )) {
    score += 3;
  }
  
  if (dietaryPreferences.includes("vegan") && 
      !["Chicken", "Fish", "Eggs", "Paneer", "Ghee", "Cream", "Butter", "Cheese", "Yogurt", "Milk"].some(item => 
        recipe.ingredients.some(ingredient => 
          ingredient.toLowerCase().includes(item.toLowerCase())
        )
      )) {
    score += 3;
  }
  
  // Check nutritional preferences
  if (lowCalorie) {
    // Estimate calories based on ingredients
    const hasCream = recipe.ingredients.some(ingredient => 
      ingredient.toLowerCase().includes("cream") || 
      ingredient.toLowerCase().includes("butter") || 
      ingredient.toLowerCase().includes("ghee")
    );
    
    if (!hasCream) {
      score += 2;
    }
  }
  
  if (highProtein) {
    // Check for protein-rich ingredients
    const proteinIngredients = ["chicken", "fish", "eggs", "paneer", "dal", "chickpeas"];
    const hasProtein = proteinIngredients.some(protein => 
      recipe.ingredients.some(ingredient => 
        ingredient.toLowerCase().includes(protein)
      )
    );
    
    if (hasProtein) {
      score += 2;
    }
  }
  
  return score;
}

// Main function to recommend recipes
function recommendRecipes(userData) {
  const {
    name,
    region,
    season = "Available year-round",
    allergies = [],
    availableIngredients = [],
    dietaryPreferences = [],
    timeConstraint,
    lowCalorie = false,
    highProtein = false,
    specificRecommendations = []
  } = userData;
  
  console.log(`Finding recipes for ${name} from ${region}...`);
  
  // Get seasonally available ingredients
  const seasonalIngredients = getAvailableIngredients(region, season);
  
  // Combine user's available ingredients with seasonal ingredients
  const combinedIngredients = [...new Set([...availableIngredients, ...seasonalIngredients])];
  
  // Filter recipes that don't contain allergens
  let eligibleRecipes = recipeData.recipes.filter(recipe => 
    !containsAllergens(recipe, allergies)
  );
  
  // Score each recipe based on user preferences
  const scoredRecipes = eligibleRecipes.map(recipe => ({
    ...recipe,
    score: scoreRecipe(recipe, {
      availableIngredients: combinedIngredients,
      dietaryPreferences,
      timeConstraint,
      lowCalorie,
      highProtein
    })
  }));
  
  // Check for specific recommendations
  if (specificRecommendations.length > 0) {
    specificRecommendations.forEach(rec => {
      const matchingRecipe = scoredRecipes.find(recipe => 
        recipe.name.toLowerCase().includes(rec.toLowerCase())
      );
      
      if (matchingRecipe) {
        matchingRecipe.score += 3; // Boost score for specifically requested recipes
      }
    });
  }
  
  // Sort recipes by score
  scoredRecipes.sort((a, b) => b.score - a.score);
  
  // Return top 3 recipes or all if less than 3
  const topRecommendations = scoredRecipes.slice(0, 3);
  
  return {
    userName: name,
    region: region,
    recommendations: topRecommendations.map(recipe => ({
      name: recipe.name,
      matchScore: (recipe.score / 15 * 100).toFixed(0) + "%", // Convert to percentage
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      time_required: recipe.time_required
    }))
  };
}

// Sample usage with form or command line interface
function processUserInput() {
  // In a real app, this would come from a form or command line
  // This is just an example
  const userData = {
    name: "Amit",
    region: "Punjab",
    season: "Winter",
    allergies: ["Cashews", "Seafood"],
    availableIngredients: ["Tomatoes", "Onions", "Potatoes", "Rice"],
    dietaryPreferences: ["vegetarian"],
    timeConstraint: 40, // minutes
    lowCalorie: true,
    highProtein: true,
    specificRecommendations: ["Dal"]
  };
  
  const recommendations = recommendRecipes(userData);
  
  // Display recommendations
  console.log("\n==== Recipe Recommendations ====");
  console.log(`For: ${recommendations.userName} from ${recommendations.region}`);
  console.log("------------------------------");
  
  recommendations.recommendations.forEach((rec, index) => {
    console.log(`${index + 1}. ${rec.name} (Match: ${rec.matchScore})`);
    console.log(`   Time: ${rec.time_required}`);
    console.log(`   Ingredients: ${rec.ingredients.join(", ")}`);
    console.log(`   Instructions: ${rec.instructions}`);
    console.log("------------------------------");
  });
}

// Create a simple command line interface
function createCLI() {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const userData = {};
  
  console.log("=== Recipe Recommendation System ===");
  
  readline.question('Enter your name: ', name => {
    userData.name = name;
    
    readline.question('Enter your region (e.g., Punjab, Maharashtra, Karnataka): ', region => {
      userData.region = region;
      
      readline.question('Current season (Summer, Winter, Monsoon, or "Available year-round"): ', season => {
        userData.season = season;
        
        readline.question('Any allergies? (comma-separated list): ', allergies => {
          userData.allergies = allergies ? allergies.split(',').map(a => a.trim()) : [];
          
          readline.question('Available ingredients? (comma-separated list): ', ingredients => {
            userData.availableIngredients = ingredients ? ingredients.split(',').map(i => i.trim()) : [];
            
            readline.question('Dietary preferences? (vegetarian, vegan, none): ', preferences => {
              userData.dietaryPreferences = preferences ? preferences.split(',').map(p => p.trim()) : [];
              
              readline.question('Time constraint (in minutes, e.g., 30): ', time => {
                userData.timeConstraint = time ? parseInt(time) : null;
                
                readline.question('Prefer low calorie? (yes/no): ', lowCal => {
                  userData.lowCalorie = lowCal.toLowerCase() === 'yes';
                  
                  readline.question('Prefer high protein? (yes/no): ', highProtein => {
                    userData.highProtein = highProtein.toLowerCase() === 'yes';
                    
                    readline.question('Any specific recipe recommendations? (comma-separated): ', specific => {
                      userData.specificRecommendations = specific ? specific.split(',').map(s => s.trim()) : [];
                      
                      const recommendations = recommendRecipes(userData);
                      
                      // Display recommendations
                      console.log("\n==== Recipe Recommendations ====");
                      console.log(`For: ${recommendations.userName} from ${recommendations.region}`);
                      console.log("------------------------------");
                      
                      if (recommendations.recommendations.length === 0) {
                        console.log("Sorry, no matching recipes found based on your preferences.");
                      } else {
                        recommendations.recommendations.forEach((rec, index) => {
                          console.log(`${index + 1}. ${rec.name} (Match: ${rec.matchScore})`);
                          console.log(`   Time: ${rec.time_required}`);
                          console.log(`   Ingredients: ${rec.ingredients.join(", ")}`);
                          console.log(`   Instructions: ${rec.instructions}`);
                          console.log("------------------------------");
                        });
                      }
                      
                      readline.close();
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}

// Uncomment the function you want to use:
// processUserInput(); // For testing with hardcoded values
createCLI();  // For interactive command line interface

// In a web environment, you would export the recommendRecipes function
// and use it with form data
// module.exports = { recommendRecipes };