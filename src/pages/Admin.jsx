import { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', category: '', image: '', description: '' });
  const [editingProduct, setEditingProduct] = useState(null);

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (activeTab === 'products') fetchProducts();
    else if (activeTab === 'users') fetchUsers();
    else if (activeTab === 'orders') fetchOrders();
  }, [activeTab]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('/api/products');
      setProducts(res.data);
    } catch (err) {
      toast.error('Failed to fetch products');
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await axios.get('/api/users', { headers: { Authorization: `Bearer ${token}` } });
      setUsers(res.data);
    } catch (err) {
      toast.error('Failed to fetch users');
    }
  };

  const fetchOrders = async () => {
    try {
      const res = await axios.get('/api/orders', { headers: { Authorization: `Bearer ${token}` } });
      setOrders(res.data);
    } catch (err) {
      toast.error('Failed to fetch orders');
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/products', newProduct, { headers: { Authorization: `Bearer ${token}` } });
      toast.success('Product added');
      setNewProduct({ name: '', price: '', category: '', image: '', description: '' });
      fetchProducts();
    } catch (err) {
      toast.error('Failed to add product');
    }
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setNewProduct(product);
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/products/${editingProduct._id}`, newProduct, { headers: { Authorization: `Bearer ${token}` } });
      toast.success('Product updated');
      setEditingProduct(null);
      setNewProduct({ name: '', price: '', category: '', image: '', description: '' });
      fetchProducts();
    } catch (err) {
      toast.error('Failed to update product');
    }
  };

  const handleDeleteProduct = async (id) => {
    if (window.confirm('Delete product?')) {
      try {
        await axios.delete(`/api/products/${id}`, { headers: { Authorization: `Bearer ${token}` } });
        toast.success('Product deleted');
        fetchProducts();
      } catch (err) {
        toast.error('Failed to delete product');
      }
    }
  };

  const handleUpdateUserRole = async (id, role) => {
    try {
      await axios.put(`/api/users/${id}`, { role }, { headers: { Authorization: `Bearer ${token}` } });
      toast.success('User role updated');
      fetchUsers();
    } catch (err) {
      toast.error('Failed to update role');
    }
  };

  const handleDeleteUser = async (id) => {
    if (window.confirm('Delete user?')) {
      try {
        await axios.delete(`/api/users/${id}`, { headers: { Authorization: `Bearer ${token}` } });
        toast.success('User deleted');
        fetchUsers();
      } catch (err) {
        toast.error('Failed to delete user');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="flex space-x-4 mb-8">
        <button onClick={() => setActiveTab('products')} className={`px-4 py-2 ${activeTab === 'products' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Products</button>
        <button onClick={() => setActiveTab('users')} className={`px-4 py-2 ${activeTab === 'users' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Users</button>
        <button onClick={() => setActiveTab('orders')} className={`px-4 py-2 ${activeTab === 'orders' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Orders</button>
      </div>

      {activeTab === 'products' && (
        <div>
          <h2 className="text-2xl mb-4">Manage Products</h2>
          <form onSubmit={editingProduct ? handleUpdateProduct : handleAddProduct} className="mb-8">
            <input type="text" placeholder="Name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} required className="mr-2 p-2 border" />
            <input type="number" placeholder="Price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} required className="mr-2 p-2 border" />
            <input type="text" placeholder="Category" value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} required className="mr-2 p-2 border" />
            <input type="text" placeholder="Image URL" value={newProduct.image} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} className="mr-2 p-2 border" />
            <input type="text" placeholder="Description" value={newProduct.description} onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} className="mr-2 p-2 border" />
            <button type="submit" className="px-4 py-2 bg-green-500 text-white">{editingProduct ? 'Update' : 'Add'} Product</button>
            {editingProduct && <button onClick={() => { setEditingProduct(null); setNewProduct({ name: '', price: '', category: '', image: '', description: '' }); }} className="ml-2 px-4 py-2 bg-gray-500 text-white">Cancel</button>}
          </form>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map(product => (
              <div key={product._id} className="bg-white p-4 rounded shadow">
                <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2" />
                <h3 className="font-bold">{product.name}</h3>
                <p>${product.price}</p>
                <p>{product.category}</p>
                <button onClick={() => handleEditProduct(product)} className="mr-2 px-2 py-1 bg-blue-500 text-white">Edit</button>
                <button onClick={() => handleDeleteProduct(product._id)} className="px-2 py-1 bg-red-500 text-white">Delete</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'users' && (
        <div>
          <h2 className="text-2xl mb-4">Manage Users</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.map(user => (
              <div key={user._id} className="bg-white p-4 rounded shadow">
                <h3 className="font-bold">{user.name}</h3>
                <p>{user.email}</p>
                <p>Role: {user.role}</p>
                <select value={user.role} onChange={(e) => handleUpdateUserRole(user._id, e.target.value)} className="mr-2 p-1 border">
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
                <button onClick={() => handleDeleteUser(user._id)} className="px-2 py-1 bg-red-500 text-white">Delete</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'orders' && (
        <div>
          <h2 className="text-2xl mb-4">View Orders</h2>
          <div className="space-y-4">
            {orders.map(order => (
              <div key={order._id} className="bg-white p-4 rounded shadow">
                <p>Order ID: {order._id}</p>
                <p>User: {order.user?.name}</p>
                <p>Total: ${order.total}</p>
                <p>Status: {order.status}</p>
                <div>
                  Items: {order.items.map(item => <span key={item.product._id}>{item.product.name} (x{item.quantity}) </span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;