const mongoose = require('mongoose');
const Restaurant = require('./models/Restaurant');
const rawData = require('./restaurants.json'); // Import seed data
require('dotenv').config();

const transformedData = rawData.map(restaurant => ({
    ...restaurant,
    borough: restaurant.city,
    grades: [],
    address: {
        ...restaurant.address,
        coord: []
    }
}));

async function seedDatabase() {
    try {
        // 1. Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI_REMOTE);
        console.log('Connected to MongoDB Atlas');

        // 2. Delete existing data (optional)
        await Restaurant.deleteMany();
        console.log('Deleted existing restaurants');

        // 3. Insert transformed data
        await Restaurant.insertMany(transformedData);
        console.log('Inserted seed data');

        // 4. Disconnect
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    } catch (err) {
        console.error('Error seeding database:', err);
    }
}

seedDatabase();