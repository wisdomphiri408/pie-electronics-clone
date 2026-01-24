import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-8">Your Cart</h1>
          <p className="text-blue-700 text-xl mb-8">Your cart is empty</p>
          <Link to="/products" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">Your Cart</h1>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            {cart.map((item) => (
              <div key={item._id || item.id} className="flex items-center justify-between border-b border-blue-200 py-4 last:border-b-0">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-contain rounded"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900">{item.name}</h3>
                    <p className="text-blue-600">MWK {item.price}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item._id || item.id, item.quantity - 1)}
                      className="bg-blue-200 text-blue-800 px-3 py-1 rounded hover:bg-blue-300"
                    >
                      -
                    </button>
                    <span className="text-blue-900 font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item._id || item.id, item.quantity + 1)}
                      className="bg-blue-200 text-blue-800 px-3 py-1 rounded hover:bg-blue-300"
                    >
                      +
                    </button>
                  </div>

                  <p className="text-blue-900 font-bold">MWK {item.price * item.quantity}</p>

                  <button
                    onClick={() => removeFromCart(item._id || item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold text-blue-900">Total: MWK {getTotalPrice()}</span>
              <div className="space-x-4">
                <button
                  onClick={clearCart}
                  className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
                >
                  Clear Cart
                </button>
                <Link to="/checkout" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link to="/products" className="text-blue-600 hover:text-blue-800">
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;