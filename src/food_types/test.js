const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection URL
const mongoUrl = 'mongodb+srv://aadiarora151:YmWfhY08F35yg43x@cluster0.a0clysq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const dbName = 'foodRecommendationDB';
const userCollectionName = 'userPreferences';
const ingredientCollectionName = 'ingredients'; // New collection for Indian foods

// JSON Data Files (No longer needed to be read by the server, since you have the MongoDB)
// const recipesFile = './recepies.json';
// const indianFoodFile = './indian_food.JSON';

let db, userCollection, ingredientCollection;

async function connectToMongo() {
    const client = new MongoClient(mongoUrl);

    try {
        await client.connect();
        console.log("Connected successfully to MongoDB");
        db = client.db(dbName);
        userCollection = db.collection(userCollectionName);
        ingredientCollection = db.collection(ingredientCollectionName); // Access ingredient collection
        return;
    } catch (err) {
        console.error("Failed to connect to MongoDB:", err);
        throw err;
    }
}

// Function to initialize the database with ingredient data
async function initializeDatabase() {
    try {
        const indianFoodData = JSON.parse(fs.readFileSync('./indian_food.JSON', 'utf8')).indianFoods;

        // Check if the ingredients collection already has data
        const count = await ingredientCollection.countDocuments();

        if (count === 0) {
            // Insert the Indian food data into the ingredients collection
            const result = await ingredientCollection.insertMany(indianFoodData);
            console.log(`${result.insertedCount} ingredients imported into MongoDB`);
        } else {
            console.log("Ingredients collection already initialized");
        }
    } catch (error) {
        console.error('Error initializing database:', error);
    }
}

// API Endpoint to Receive User Preferences
app.post('/preferences', async (req, res) => {
    const userPreferences = req.body;

    try {
        const result = await userCollection.insertOne(userPreferences);
        console.log('Inserted preference with ID: ', result.insertedId);
        res.status(201).send(`Preference saved with ID: ${result.insertedId}`);
    } catch (err) {
        console.error("Failed to insert document:", err);
        res.status(500).send('Error saving preferences');
    }
});

// API Endpoint to Get Recipe Recommendations
app.get('/recommendations/:userId', async (req, res) => {
    const userId = req.params.userId;

    try {
        const user = await userCollection.findOne({ _id: new ObjectId(userId) });

        if (!user) {
            return res.status(404).send('User not found');
        }

        // Load the recipes from the file
        const recipesData = JSON.parse(fs.readFileSync('./recepies.json', 'utf8')).recipes;

        if (!recipesData) {
            return res.status(500).send('Failed to load recipe data');
        }

        // Basic recommendation logic: find recipes containing preferred ingredients
        const recommendations = [];

        recipesData.forEach(recipe => {
            if (user.ingredients && user.ingredients.every(ingredient => recipe.ingredients.includes(ingredient))) {
                recommendations.push(recipe);
            }
        });

        res.json({ recommendations });

    } catch (error) {
        console.error('Error getting recommendations:', error);
        res.status(500).send('Error getting recommendations');
    }
});

// Start the server and initialize the database
async function startServer() {
    try {
        await connectToMongo();
        await initializeDatabase();

        app.listen(port, () => {
            console.log(`Server listening at http://localhost:${port}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
    }
}

startServer();
