import { useState } from "react";

const Navigation = ({ onNavigate }) => (
  <div className="flex justify-between items-center w-full p-4">
    <div className="text-3xl font-bold text-gray-800">TriCycleEats</div>
    <div className="flex space-x-8">
      <button 
        className="text-gray-800 hover:text-gray-600"
        onClick={() => onNavigate('home')}
      >
        HOME
      </button>
      <button 
        className="text-gray-800 hover:text-gray-600"
        onClick={() => onNavigate('recipes')}
      >
        MAIN
      </button>
      <button 
        className="text-gray-800 hover:text-gray-600"
      >
        ABOUT US
      </button>
      <button 
        className="text-gray-800 hover:text-gray-600"
        onClick={() => onNavigate('dashboard')}
      >
        MY PROFILE
      </button>
    </div>
  </div>
);

const Footer = () => (
  <div className="w-full p-4 flex justify-between items-center border-t border-gray-200 mt-auto">
    <div className="flex space-x-8">
      <button className="text-gray-600 hover:text-gray-800">Privacy Policy</button>
      <button className="text-gray-600 hover:text-gray-800">Terms and Conditions</button>
      <button className="text-gray-600 hover:text-gray-800">Contact</button>
    </div>
    <div className="flex space-x-4">
      <button className="text-gray-600 hover:text-gray-800">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      </button>
      <button className="text-gray-600 hover:text-gray-800">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </button>
      <button className="text-gray-600 hover:text-gray-800">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
      </button>
    </div>
  </div>
);

const LoginForm = ({ onNavigate }) => (
  <div className="bg-gray-200 bg-opacity-70 p-8 rounded-lg w-full max-w-md mx-auto">
    <h2 className="text-4xl text-center font-bold mb-8">DASHBOARD</h2>
    <div className="space-y-6">
      <div>
        <label className="block mb-2">EMAIL-</label>
        <input
          type="email"
          className="w-full p-3 rounded-full"
        />
      </div>
      <div>
        <label className="block mb-2">PASSWORD-</label>
        <input
          type="password"
          className="w-full p-3 rounded-full"
        />
      </div>
      <button
        onClick={() => onNavigate('dashboard')}
        className="w-full bg-teal-500 text-white py-3 rounded-full font-semibold mt-6"
      >
        LOG IN
      </button>
      <p className="text-center mt-4">
        <span 
          className="cursor-pointer hover:underline"
          onClick={() => onNavigate('signup')}
        >
          Sign up Here, if you don't have an account.
        </span>
      </p>
    </div>
  </div>
);

const SignupForm = ({ onNavigate }) => (
  <div className="bg-gray-200 bg-opacity-70 p-8 rounded-lg w-full max-w-md mx-auto">
    <h2 className="text-4xl text-center font-bold mb-8">Hello!</h2>
    <div className="space-y-6">
      <div>
        <label className="block mb-2">NAME-</label>
        <input
          type="text"
          className="w-full p-3 rounded-full"
        />
      </div>
      <div>
        <label className="block mb-2">EMAIL-</label>
        <input
          type="email"
          className="w-full p-3 rounded-full"
        />
      </div>
      <div>
        <label className="block mb-2">PASSWORD-</label>
        <input
          type="password"
          className="w-full p-3 rounded-full"
        />
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => onNavigate('personalInfo')}
          className="bg-teal-500 text-white py-3 px-10 rounded-full font-semibold mt-4"
        >
          SIGN UP
        </button>
      </div>
      <p className="text-center mt-4">
        <span 
          className="cursor-pointer hover:underline"
          onClick={() => onNavigate('login')}
        >
          If you already have an account, click here.
        </span>
      </p>
    </div>
  </div>
);

const PersonalInfoForm = ({ onNavigate }) => (
  <div className="bg-gray-200 bg-opacity-70 p-8 rounded-lg w-full max-w-md mx-auto">
    <h2 className="text-3xl text-center font-bold mb-8">Personal Information</h2>
    <div className="space-y-4">
      <div>
        <label className="block mb-2">FULL NAME</label>
        <input
          type="text"
          className="w-full p-3 rounded-full"
        />
      </div>
      <div className="flex space-x-4">
        <div className="w-1/2">
          <label className="block mb-2">AGE</label>
          <input
            type="number"
            className="w-full p-3 rounded-full"
          />
        </div>
        <div className="w-1/2">
          <label className="block mb-2">REGION</label>
          <input
            type="text"
            className="w-full p-3 rounded-full"
          />
        </div>
      </div>
      <div>
        <label className="block mb-2">ALLERGIES</label>
        <input
          type="text"
          className="w-full p-3 rounded-full"
        />
      </div>
      <div>
        <label className="block mb-2">HEALTH CONDITIONS</label>
        <input
          type="text"
          className="w-full p-3 rounded-full"
        />
      </div>
      <div>
        <label className="block mb-2">DISLIKED INGEDIENTS</label>
        <input
          type="text"
          className="w-full p-3 rounded-full"
        />
      </div>
      <div className="pt-4">
        <button
          onClick={() => onNavigate('dashboard')}
          className="w-full bg-teal-500 text-white py-3 rounded-full font-semibold"
        >
          SAVE & CONTINUE
        </button>
      </div>
    </div>
  </div>
);

const HomePage = ({ onNavigate }) => (
  <div className="flex flex-col items-center">
    <div className="text-center my-8">
      <div className="rounded-lg overflow-hidden w-64 h-64 mx-auto mb-6">
        <img 
          src="/api/placeholder/240/240" 
          alt="Plant" 
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-3xl font-bold italic mb-2">Personalized Nutrition Just for You</h1>
      <p className="text-gray-600 mb-6">
        Healthy meals, made simple. Track your nutrition with AI-powered recommendations
      </p>
      <button 
        onClick={() => onNavigate('signup')}
        className="bg-gray-200 hover:bg-gray-300 py-3 px-6 rounded-full font-semibold mb-12"
      >
        GET STARTED WITH US!
      </button>
    </div>
    
    <div className="grid grid-cols-3 gap-8 w-full max-w-4xl">
      <div className="bg-white bg-opacity-20 p-6 rounded-lg border border-teal-100">
        <h3 className="font-bold text-lg mb-2">Recipes</h3>
        <p className="text-sm mb-4">Get personalized, delicious meal ideas tailored to your health goals and preferences.</p>
        <button 
          className="bg-gray-200 px-4 py-1 rounded-full text-sm"
          onClick={() => onNavigate('recipes')}
        >HERE!</button>
      </div>
      
      <div className="bg-white bg-opacity-20 p-6 rounded-lg border border-teal-100">
        <h3 className="font-bold text-lg mb-2">Health Insights</h3>
        <p className="text-sm mb-4">Track your nutrition goals with daily tips and personalized insights.</p>
        <button className="bg-gray-200 px-4 py-1 rounded-full text-sm">HERE!</button>
      </div>
      
      <div className="bg-white bg-opacity-20 p-6 rounded-lg border border-teal-100">
        <h3 className="font-bold text-lg mb-2">Blog Posts</h3>
        <p className="text-sm mb-4">Explore expert tips and trends for a healthier lifestyle.</p>
        <button className="bg-gray-200 px-4 py-1 rounded-full text-sm">HERE!</button>
      </div>
    </div>
    
    <div className="grid grid-cols-2 gap-8 w-full max-w-4xl mt-8">
      <div className="flex items-center bg-white bg-opacity-20 p-4 rounded-lg">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img src="/api/placeholder/48/48" alt="User" className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="text-sm">TriCycle Eats makes meal planning so easy! The app provides recipes that fit my needs perfectly, and the health tips have been a game-changer.</p>
          <p className="text-sm font-semibold mt-1">- Aliya, 25</p>
        </div>
      </div>
      
      <div className="flex items-center bg-white bg-opacity-20 p-4 rounded-lg">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img src="/api/placeholder/48/48" alt="User" className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="text-sm">Great app for beginners! The meal suggestions are spot on. I love how simple it is to track my progress.</p>
          <p className="text-sm font-semibold mt-1">- Darnell, 32</p>
        </div>
      </div>
    </div>
  </div>
);

const Dashboard = () => (
  <div className="p-8">
    <h2 className="text-3xl font-bold mb-6">Your Nutrition Dashboard</h2>
    <div className="grid grid-cols-2 gap-8">
      <div className="bg-white bg-opacity-30 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Today's Meal Plan</h3>
        <ul className="space-y-4">
          <li className="flex justify-between">
            <span>Breakfast</span>
            <span>Avocado Toast with Eggs</span>
          </li>
          <li className="flex justify-between">
            <span>Lunch</span>
            <span>Quinoa Bowl with Veggies</span>
          </li>
          <li className="flex justify-between">
            <span>Dinner</span>
            <span>Grilled Salmon with Sweet Potatoes</span>
          </li>
          <li className="flex justify-between">
            <span>Snack</span>
            <span>Mixed Nuts and Berries</span>
          </li>
        </ul>
      </div>
      
      <div className="bg-white bg-opacity-30 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Nutrition Summary</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span>Calories</span>
              <span>1,820 / 2,000</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '91%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span>Protein</span>
              <span>85g / 100g</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span>Carbs</span>
              <span>210g / 250g</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '84%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span>Fat</span>
              <span>65g / 70g</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-red-500 h-2 rounded-full" style={{ width: '93%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Recipe data
const recipes = [
  {
    id: 1,
    name: "Homemade Pizza",
    image: "/api/placeholder/400/300",
    match: "95% match with your preferences",
    time: "30 minutes",
    calories: "450 kcal",
    ingredients: [
      "2 cups all-purpose flour",
      "1 tsp instant yeast",
      "1 tsp salt",
      "1 tbsp olive oil",
      "3/4 cup warm water",
      "1/2 cup tomato sauce",
      "1 1/2 cups mozzarella cheese",
      "Fresh basil leaves",
      "2 large tomatoes, sliced",
      "Salt and pepper to taste"
    ],
    instructions: "1. Mix flour, yeast, and salt in a bowl.\n2. Add olive oil and warm water, then knead until smooth.\n3. Let dough rise for 1 hour.\n4. Preheat oven to 475°F (245°C).\n5. Roll out dough and place on baking sheet.\n6. Spread tomato sauce, add cheese and toppings.\n7. Bake for 12-15 minutes until crust is golden."
  },
  {
    id: 2,
    name: "Pasta with Mushroom Sauce",
    image: "/api/placeholder/400/300",
    match: "87% match with your preferences",
    time: "25 minutes",
    calories: "380 kcal",
    ingredients: [
      "8 oz pasta",
      "2 tbsp olive oil",
      "8 oz mushrooms, sliced",
      "2 cloves garlic, minced",
      "1/2 cup heavy cream",
      "1/4 cup parmesan cheese",
      "Fresh parsley, chopped",
      "Salt and pepper to taste"
    ],
    instructions: "1. Cook pasta according to package directions.\n2. Heat olive oil in a large pan over medium heat.\n3. Add mushrooms and cook until browned, about 5 minutes.\n4. Add garlic and cook for 30 seconds.\n5. Pour in heavy cream and simmer for 3 minutes.\n6. Stir in parmesan cheese until melted.\n7. Toss with cooked pasta and garnish with parsley."
  },
  {
    id: 3,
    name: "Indian Curry",
    image: "/api/placeholder/400/300",
    match: "82% match with your preferences",
    time: "40 minutes",
    calories: "420 kcal",
    ingredients: [
      "1 lb chicken or paneer",
      "2 tbsp vegetable oil",
      "1 onion, finely chopped",
      "2 cloves garlic, minced",
      "1 tbsp ginger, grated",
      "2 tbsp curry powder or paste",
      "1 can (14 oz) tomatoes",
      "1/2 cup coconut milk",
      "Fresh cilantro for garnish",
      "Salt to taste"
    ],
    instructions: "1. Heat oil in a large pan over medium heat.\n2. Add onions and cook until soft, about 5 minutes.\n3. Add garlic and ginger, cook for 1 minute.\n4. Add curry powder/paste and cook for 1 minute.\n5. Add tomatoes and simmer for 10 minutes.\n6. Add chicken/paneer and cook for 15 minutes.\n7. Stir in coconut milk and simmer for 5 minutes.\n8. Garnish with fresh cilantro."
  }
];

// Main recipe listing page
const RecipeListingPage = ({ onNavigate }) => (
  <div className="min-h-screen flex flex-col bg-gradient-to-r from-green-200 to-teal-500">
    <Navigation onNavigate={onNavigate} />
    <div className="flex-grow p-4">
      <div className="bg-gray-200 bg-opacity-70 p-4 rounded-lg mb-8">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="font-semibold mb-2">AVAILABLE INGREDIENTS</h3>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <input 
                  key={i} 
                  type="text" 
                  className="bg-white rounded p-2 w-full" 
                  placeholder="Enter ingredient"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <h3 className="font-semibold mb-2">SEASON</h3>
            <input 
              type="text" 
              className="bg-white rounded p-2 w-full" 
              placeholder="Enter season"
            />
          </div>
          <div>
            <h3 className="font-semibold mb-2">TIME (in minutes)</h3>
            <input 
              type="number" 
              className="bg-white rounded p-2 w-full" 
              placeholder="Enter max time"
            />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {recipes.map(recipe => (
          <div key={recipe.id} className="mb-8">
            <div className="mb-4 rounded overflow-hidden">
              <img 
                src={recipe.image} 
                alt={recipe.name} 
                className="w-full h-64 object-cover"
              />
            </div>
            <div>
              <p className="text-lg"><strong>Name:</strong> {recipe.name}</p>
              <p><strong>Match:</strong> {recipe.match}</p>
              <p><strong>Time:</strong> {recipe.time}</p>
              <p><strong>Calories:</strong> {recipe.calories}</p>
              <button 
                className="mt-4 bg-gray-200 hover:bg-gray-300 py-2 px-10 rounded-full font-semibold"
                onClick={() => onNavigate('recipe', recipe.id)}
              >
                HERE!
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

// Detailed recipe page
const RecipePage = ({ recipeId, onNavigate }) => {
  const recipe = recipes.find(r => r.id === recipeId);
  
  if (!recipe) {
    return <div>Recipe not found</div>;
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-green-200 to-teal-500">
      <Navigation onNavigate={onNavigate} />
      <div className="flex-grow p-8">
        <div className="bg-gray-200 bg-opacity-40 rounded-lg p-4 mb-8">
          <h1 className="text-2xl font-bold text-center mb-4">{recipe.name.toUpperCase()}</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img 
              src={recipe.image} 
              alt={recipe.name} 
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">MATCH:</h2>
            <p className="mb-6">{recipe.match}</p>
            
            <h2 className="text-xl font-semibold mb-4">TIME:</h2>
            <p className="mb-6">{recipe.time}</p>
            
            <h2 className="text-xl font-semibold mb-4">INGREDIENTS:</h2>
            <ul className="list-disc list-inside mb-6">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            
            <h2 className="text-xl font-semibold mb-4">INSTRUCTIONS:</h2>
            <p className="whitespace-pre-line">{recipe.instructions}</p>
            
            <button 
              onClick={() => onNavigate('recipes')}
              className="mt-8 bg-gray-200 hover:bg-gray-300 py-2 px-6 rounded-full font-semibold"
            >
              Back to Recipes
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const PageContainer = ({ children, onNavigate }) => (
  <div className="min-h-screen flex flex-col bg-gradient-to-r from-green-200 to-teal-500">
    <Navigation onNavigate={onNavigate} />
    <div className="flex-grow flex items-center justify-center p-4">
      {children}
    </div>
    <Footer />
  </div>
);

const App = () => {
  const [page, setPage] = useState('home');
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
  
  const handleNavigate = (newPage, recipeId = null) => {
    setPage(newPage);
    if (recipeId) {
      setSelectedRecipeId(recipeId);
    }
  };
  
  const renderPage = () => {
    switch (page) {
      case 'login':
        return <LoginForm onNavigate={handleNavigate} />;
      case 'signup':
        return <SignupForm onNavigate={handleNavigate} />;
      case 'personalInfo':
        return <PersonalInfoForm onNavigate={handleNavigate} />;
      case 'dashboard':
        return <Dashboard />;
      case 'recipes':
        return <RecipeListingPage onNavigate={handleNavigate} />;
      case 'recipe':
        return <RecipePage recipeId={selectedRecipeId} onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };
  
  // For recipe listing page and individual recipe page, we'll render them directly
  if (page === 'recipes') {
    return <RecipeListingPage onNavigate={handleNavigate} />;
  }
  if (page === 'recipe') {
    return <RecipePage recipeId={selectedRecipeId} onNavigate={handleNavigate} />;
  }
  
  // For other pages, we'll use the PageContainer component
  return (
    <PageContainer onNavigate={handleNavigate}>
      {renderPage()}
    </PageContainer>
  );
};

export default App;
