import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Pie Tech</h3>
            <p className="text-blue-200 mb-4">
              Your trusted marketplace for quality electronics.
            </p>
            <p className="text-blue-200">
              Phone: <a href="tel:0982085238" className="hover:text-blue-400">0982085238</a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-blue-200 hover:text-white">Home</a></li>
              <li><a href="/products" className="text-blue-200 hover:text-white">Products</a></li>
              <li><a href="/sell" className="text-blue-200 hover:text-white">Sell</a></li>
              <li><a href="/about" className="text-blue-200 hover:text-white">About</a></li>
              <li><a href="/contact" className="text-blue-200 hover:text-white">Contact</a></li>
              <li><a href="/policies" className="text-blue-200 hover:text-white">Policies</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white">Phones</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Laptops</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">TVs</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Accessories</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition">
                <FaFacebook size={28} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition">
                <FaInstagram size={28} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition">
                <FaLinkedin size={28} />
              </a>
              <a href="https://wa.me/0982085238" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition">
                <FaWhatsapp size={28} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            &copy; 2026 Pie Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;