const express = require('express');
const router = express.Router();
const Wishlist = require('../models/Wishlist');
const auth = require('../middleware/auth');

// Add to wishlist
router.post('/', auth, async (req, res) => {
  try {
    let wishlist = await Wishlist.findOne({ user: req.user.id });
    if (!wishlist) {
      wishlist = new Wishlist({ user: req.user.id, products: [] });
    }
    if (!wishlist.products.includes(req.body.productId)) {
      wishlist.products.push(req.body.productId);
      await wishlist.save();
    }
    res.json(wishlist);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get wishlist
router.get('/', auth, async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ user: req.user.id }).populate('products');
    res.json(wishlist || { products: [] });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Remove from wishlist
router.delete('/:productId', auth, async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ user: req.user.id });
    if (wishlist) {
      wishlist.products = wishlist.products.filter(id => id.toString() !== req.params.productId);
      await wishlist.save();
    }
    res.json(wishlist);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;