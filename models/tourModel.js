const mongoose = require('mongoose');

// Mongoose Schema
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name.'],
    unique: true
  },
  rating: {
    type: Number,
    default: 4.5
  },
  ratingsAverage: {
    type: Number,
    default: 4.5
  },
  ratingsQuantity: {
    type: Number,
    default: 0
  },
  summary: {
    type: String,
    trim: true,
    required: [true, 'A tour must have a summary']
  },
  description: {
    type: String,
    trim: true
  },
  duration: {
    type: Number,
    required: [true, 'The tour must have a duration']
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'The tour must have a maxGroupSize']
  },
  difficulty: {
    type: String,
    required: [true, 'The tour must have a difficulty']
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a name.']
  },
  priceDiscount: Number,
  imageCover: {
    type: String,
    required: [true, 'A tour must have a image cover']
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now()
  },
  starDates: [Date]
});

// Mongoose Model - ATENÇÃO: é 'mongoose.model' não 'new mongoose.Model
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;