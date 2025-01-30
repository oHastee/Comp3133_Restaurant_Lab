const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
    date: Date,
    grade: String,
    score: Number
});

const addressSchema = new mongoose.Schema({
    building: String,
    street: String,
    zipcode: String,
    coord: [Number]
});

const restaurantSchema = new mongoose.Schema({
    address: addressSchema,
    borough: String,
    cuisine: String,
    grades: [gradeSchema],
    name: String,
    restaurant_id: String
});

module.exports = mongoose.model('Restaurant', restaurantSchema);