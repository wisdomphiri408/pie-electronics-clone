import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { getTotalItems } = useCart();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  return (
    <nav className="bg-blue-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white">
            Pie Tech
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-blue-200 hover:text-white transition">
              Home
            </Link>
            <Link to="/products" className="text-blue-200 hover:text-white transition">
              Products
            </Link>
            <Link to="/sell" className="text-blue-200 hover:text-white transition">
              Sell
            </Link>
            <Link to="/about" className="text-blue-200 hover:text-white transition">
              About
            </Link>
            <Link to="/contact" className="text-blue-200 hover:text-white transition">
              Contact
            </Link>
            {user && (
              <Link to="/dashboard" className="text-blue-200 hover:text-white transition">
                Dashboard
              </Link>
            )}
            {user?.role === 'admin' && (
              <Link to="/admin" className="text-blue-200 hover:text-white transition">
                Admin
              </Link>
            )}
          </div>

          {/* Right side - Cart and Login/Logout */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="text-blue-200 hover:text-white transition relative">
              🛒 Cart
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-white">Hello, {user.name}</span>
                <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;