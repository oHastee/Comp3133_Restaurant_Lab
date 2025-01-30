require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Restaurant = require('./models/Restaurant');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI_REMOTE)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.get('/restaurants', async (req, res) => {
    try {
        const { sortBy } = req.query;
        let query = Restaurant.find();

        if (sortBy) {
            const sortOrder = sortBy.toUpperCase() === 'DESC' ? -1 : 1;
            query = query.select('_id cuisine name borough restaurant_id')
                .sort({ restaurant_id: sortOrder });
        }

        const restaurants = await query.exec();
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/restaurants/cuisine/:cuisine', async (req, res) => {
    try {
        const cuisine = req.params.cuisine;
        const restaurants = await Restaurant.find({ cuisine });
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/restaurants/Delicatessen', async (req, res) => {
    try {
        const restaurants = await Restaurant.find({
            cuisine: 'Delicatessen',
            borough: { $ne: 'Brooklyn' }
        })
            .select('cuisine name borough -_id')
            .sort({ name: 1 });

        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});