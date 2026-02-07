import { Link } from 'react-router-dom';
//import { useCart } from '../context/CartContext';
import SearchBar from './SearchBar';
import UserProfile from './ui/profile';
import {ShoppingCart} from "lucide-react"


const Navbar = () => {
  //const { getTotalItems } = useCart();
  //const user = JSON.parse(localStorage.getItem('user'));

  const isUser = false;
 

  return (
    <nav className="bg-blue-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-2">
          {/* Logo */}
          <Link to="/" className="text-xl font-semibold text-white mt-6">
            Pie Tech
          </Link>

          {/* Center - Search Bar */}
          <dv className="flex-1 w-full max-w-2xl pt-6">
            <SearchBar />
          </dv>

          {/* Right side - Cart and Login/Logout */}
          <div className="flex items-center space-x-4">
            {isUser ? (
              <div className="flex items-end space-x-4">
                <UserProfile />
                <Link to='/' className='flex flex-col items-center'>
                  <span className='text-white animate-pulse'>3</span>
                  <ShoppingCart className="text-white hover:scale-110 active:scale-100 cursor-pointer" />
                </Link>
              </div>
            ) : (
              <Link to="/login" className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition text-sm mt-6">
                Sign in
              </Link>
            )}
          </div>
        </div>
        {/* categories */}
        <div className='flex justify-between items-centerp py-2 w-full max-w-[400px] mx-auto px-4'>
          <Link to={'/'} className='text-white font-semibold'>Phones</Link>
          <Link to={'/'} className='text-white font-semibold'>Laptops</Link>
          <Link to={'/'} className='text-white font-semibold'>Tvs</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;