import { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('orders');
  const [orders, setOrders] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', category: '', image: '', description: '' });

  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (activeTab === 'orders') fetchOrders();
    else if (activeTab === 'wishlist') fetchWishlist();
    else if (activeTab === 'products') fetchMyProducts();
  }, [activeTab]);

  const fetchOrders = async () => {
    try {
      const res = await axios.get('/api/orders', { headers: { Authorization: `Bearer ${token}` } });
      setOrders(res.data);
    } catch (err) {
      toast.error('Failed to fetch orders');
    }
  };

  const fetchWishlist = async () => {
    try {
      const res = await axios.get('/api/wishlist', { headers: { Authorization: `Bearer ${token}` } });
      setWishlist(res.data);
    } catch (err) {
      toast.error('Failed to fetch wishlist');
    }
  };

  const fetchMyProducts = async () => {
    try {
      const res = await axios.get('/api/products/my/products', { headers: { Authorization: `Bearer ${token}` } });
      setProducts(res.data);
    } catch (err) {
      toast.error('Failed to fetch products');
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/products', newProduct, { headers: { Authorization: `Bearer ${token}` } });
      toast.success('Product added');
      setNewProduct({ name: '', price: '', category: '', image: '', description: '' });
      fetchMyProducts();
    } catch (err) {
      toast.error('Failed to add product');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="flex space-x-4 mb-8">
        <button onClick={() => setActiveTab('orders')} className={`px-4 py-2 ${activeTab === 'orders' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>My Orders</button>
        <button onClick={() => setActiveTab('wishlist')} className={`px-4 py-2 ${activeTab === 'wishlist' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Wishlist</button>
        {user?.role === 'seller' && (
          <>
            <button onClick={() => setActiveTab('products')} className={`px-4 py-2 ${activeTab === 'products' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>My Products</button>
            <button onClick={() => setActiveTab('add')} className={`px-4 py-2 ${activeTab === 'add' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Add Product</button>
          </>
        )}
      </div>

      {activeTab === 'orders' && (
        <div>
          <h2 className="text-2xl mb-4">My Orders</h2>
          {orders.length === 0 ? <p>No orders yet.</p> : orders.map(order => (
            <div key={order._id} className="border p-4 mb-4">
              <p>Order ID: {order._id}</p>
              <p>Total: MWK {order.total}</p>
              <p>Status: {order.status}</p>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'wishlist' && (
        <div>
          <h2 className="text-2xl mb-4">Wishlist</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {wishlist.map(item => (
              <div key={item._id} className="border p-4">
                <img src={item.product.image} alt={item.product.name} className="w-full h-32 object-cover" />
                <h3>{item.product.name}</h3>
                <p>MWK {item.product.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'products' && (
        <div>
          <h2 className="text-2xl mb-4">My Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {products.map(product => (
              <div key={product._id} className="border p-4">
                <img src={product.image} alt={product.name} className="w-full h-32 object-cover" />
                <h3>{product.name}</h3>
                <p>MWK {product.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'add' && (
        <div>
          <h2 className="text-2xl mb-4">Add Product</h2>
          <form onSubmit={handleAddProduct} className="max-w-md">
            <input type="text" placeholder="Name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} required className="w-full p-2 border mb-2" />
            <input type="number" placeholder="Price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} required className="w-full p-2 border mb-2" />
            <input type="text" placeholder="Category" value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} required className="w-full p-2 border mb-2" />
            <input type="text" placeholder="Image URL" value={newProduct.image} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} className="w-full p-2 border mb-2" />
            <textarea placeholder="Description" value={newProduct.description} onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} className="w-full p-2 border mb-2"></textarea>
            <button type="submit" className="w-full bg-blue-500 text-white p-2">Add Product</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;