import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

const Navbar = () => {
  const { getTotalItems } = useCart();
  const user = JSON.parse(localStorage.getItem('user'));
  const [isOpen, setIsOpen] = useState(false);

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
          <Link to="/" className="text-xl font-bold text-white">
            Pie Tech
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-blue-200 hover:text-white transition text-sm">
              Home
            </Link>
            <Link to="/products" className="text-blue-200 hover:text-white transition text-sm">
              Products
            </Link>
            <Link to="/sell" className="text-blue-200 hover:text-white transition text-sm">
              Sell
            </Link>
            <Link to="/about" className="text-blue-200 hover:text-white transition text-sm">
              About
            </Link>
            <Link to="/contact" className="text-blue-200 hover:text-white transition text-sm">
              Contact
            </Link>
            {user && (
              <Link to="/dashboard" className="text-blue-200 hover:text-white transition text-sm">
                Dashboard
              </Link>
            )}
            {user?.role === 'admin' && (
              <Link to="/admin" className="text-blue-200 hover:text-white transition text-sm">
                Admin
              </Link>
            )}
          </div>

          {/* Hamburger Menu - Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* Right side - Cart and Login/Logout */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart" className="text-blue-200 hover:text-white transition relative text-sm">
              🛒 Cart
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-white text-sm">Hello, {user.name}</span>
                <button onClick={handleLogout} className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition text-sm">
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition text-sm">
                Login
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-blue-800 px-4 py-4 space-y-2">
            <Link to="/" className="block text-blue-200 hover:text-white transition" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/products" className="block text-blue-200 hover:text-white transition" onClick={() => setIsOpen(false)}>
              Products
            </Link>
            <Link to="/sell" className="block text-blue-200 hover:text-white transition" onClick={() => setIsOpen(false)}>
              Sell
            </Link>
            <Link to="/about" className="block text-blue-200 hover:text-white transition" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link to="/contact" className="block text-blue-200 hover:text-white transition" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            {user && (
              <Link to="/dashboard" className="block text-blue-200 hover:text-white transition" onClick={() => setIsOpen(false)}>
                Dashboard
              </Link>
            )}
            {user?.role === 'admin' && (
              <Link to="/admin" className="block text-blue-200 hover:text-white transition" onClick={() => setIsOpen(false)}>
                Admin
              </Link>
            )}
            <div className="border-t border-blue-700 pt-2">
              <Link to="/cart" className="block text-blue-200 hover:text-white transition relative" onClick={() => setIsOpen(false)}>
                🛒 Cart {getTotalItems() > 0 && `(${getTotalItems()})`}
              </Link>
              {user ? (
                <div className="space-y-2">
                  <span className="block text-white">Hello, {user.name}</span>
                  <button onClick={() => { handleLogout(); setIsOpen(false); }} className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition w-full">
                    Logout
                  </button>
                </div>
              ) : (
                <Link to="/login" className="block bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition text-center" onClick={() => setIsOpen(false)}>
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;