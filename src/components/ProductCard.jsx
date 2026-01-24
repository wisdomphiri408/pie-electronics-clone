import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [inWishlist, setInWishlist] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success('Added to cart!');
  };

  const handleViewDetails = () => {
    alert(`Details for ${product.name}: Price MWK ${product.price}, Condition: ${product.condition}, Rating: ${product.rating}`);
  };

  const handleWishlist = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('Please login to add to wishlist');
      return;
    }
    try {
      await axios.post('/api/wishlist', { productId: product._id || product.id }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setInWishlist(!inWishlist);
      toast.success(inWishlist ? 'Removed from wishlist' : 'Added to wishlist');
    } catch (error) {
      toast.error('Error updating wishlist');
    }
  };

  const handleReview = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('Please login to leave a review');
      return;
    }
    const rating = prompt('Enter rating (1-5):');
    const comment = prompt('Enter comment:');
    if (rating && comment) {
      try {
        await axios.post('/api/reviews', {
          productId: product._id || product.id,
          rating: parseInt(rating),
          comment
        }, {
          headers: { Authorization: `Bearer ${token}` }
        });
        toast.success('Review submitted!');
      } catch (error) {
        toast.error('Error submitting review');
      }
    }
  };

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-2 md:p-4 hover:shadow-blue-200/50"
      whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-32 md:h-48 w-full object-contain"
      />
      <h3 className="font-semibold text-base md:text-lg mt-3">
        {product.name}
      </h3>
      <p className="text-gray-600 text-sm md:text-base">
        MWK {product.price}
      </p>
      <div className="flex items-center mt-2">
        <span className="text-yellow-500">⭐</span>
        <span className="ml-1 text-xs md:text-sm text-gray-600">{product.rating}</span>
      </div>
      <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full mt-2 ${
        product.condition === 'New' ? 'bg-green-100 text-green-800' :
        product.condition === 'Refurbished' ? 'bg-yellow-100 text-yellow-800' :
        'bg-gray-100 text-gray-800'
      }`}>
        {product.condition}
      </span>
      <div className="flex gap-1 md:gap-2 mt-3">
        <Link to={`/product/${product._id || product.id}`} className="flex-1 bg-black text-white py-1 md:py-2 rounded-xl text-center text-xs md:text-sm">
          View Details
        </Link>
        <button
          onClick={handleAddToCart}
          className="flex-1 bg-blue-600 text-white py-1 md:py-2 rounded-xl hover:bg-blue-700 transition text-xs md:text-sm"
        >
          Add to Cart
        </button>
        <button onClick={handleWishlist} className="p-1 md:p-2 bg-red-500 text-white rounded-xl hover:bg-red-600 text-xs md:text-sm">
          ❤️
        </button>
        <button onClick={handleReview} className="p-1 md:p-2 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 text-xs md:text-sm">
          ⭐
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;