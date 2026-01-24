import { useState } from 'react';
import { useCart } from '../context/CartContext';
import axios from 'axios';

const Checkout = () => {
  const { cart, getTotalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    shippingAddress: '',
    paymentMethod: 'Cash on Delivery'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please login first');
      return;
    }

    const products = cart.map(item => ({
      product: item._id || item.id,
      quantity: item.quantity
    }));

    try {
      await axios.post('/api/orders', {
        products,
        totalAmount: getTotalPrice(),
        ...formData
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Order placed successfully!');
      clearCart();
      window.location.href = '/';
    } catch (error) {
      alert('Error placing order: ' + error.response?.data?.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            {cart.map(item => (
              <div key={item.id} className="flex justify-between mb-2">
                <span>{item.name} x{item.quantity}</span>
                <span>MWK {item.price * item.quantity}</span>
              </div>
            ))}
            <div className="border-t pt-2 font-bold">
              Total: MWK {getTotalPrice()}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Shipping & Payment</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Shipping Address</label>
                <textarea
                  name="shippingAddress"
                  value={formData.shippingAddress}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Payment Method</label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                >
                  <option>Cash on Delivery</option>
                  <option>Credit Card</option>
                  <option>Mobile Money</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;