const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
  title: { type: String, required: true },
  city: { type: String, required: true, lowercase: true },
  street: { type: String, required: true, lowercase: true },
  category: { type: String, required: true, lowercase: true },
  image: { type: String, required: true },
  bedrooms: Number,
  shared: Boolean,
  description: { type: String, required: true },
  dailyRate: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Rental', rentalSchema);
