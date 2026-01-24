import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProduct();
    fetchReviews();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`/api/products/${id}`);
      setProduct(res.data);
    } catch (err) {
      toast.error('Failed to load product');
    } finally {
      setLoading(false);
    }
  };

  const fetchReviews = async () => {
    try {
      const res = await axios.get(`/api/reviews/${id}`);
      setReviews(res.data);
    } catch (err) {
      // Reviews might not exist
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
    toast.success('Added to cart!');
  };

  const handleBuyNow = () => {
    addToCart(product);
    window.location.href = '/cart';
  };

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (!product) return <div className="text-center py-20">Product not found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded-lg" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-blue-600 mb-4">MWK {product.price}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="mb-2"><strong>Category:</strong> {product.category}</p>
          <p className="mb-4"><strong>Condition:</strong> {product.condition}</p>
          <div className="flex space-x-4">
            <button onClick={handleAddToCart} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Add to Cart
            </button>
            <button onClick={handleBuyNow} className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          reviews.map(review => (
            <div key={review._id} className="border-b py-4">
              <div className="flex items-center mb-2">
                <span className="font-semibold">{review.user?.name || 'Anonymous'}</span>
                <span className="ml-2 text-yellow-500">{'★'.repeat(review.rating)}</span>
              </div>
              <p>{review.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductDetails;