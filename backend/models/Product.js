const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  image: String,
  description: String,
  condition: { type: String, default: 'New' }, // New, Refurbished, Used
  rating: { type: Number, default: 0 },
  reviews: [{ user: String, rating: Number, comment: String }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Product", productSchema);