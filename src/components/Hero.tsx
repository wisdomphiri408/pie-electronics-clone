import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 text-white py-16 md:py-32 overflow-hidden">
        {/* Static gradient overlay instead of animated */}
        <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-blue-500/80 to-purple-600/80" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Welcome to Pie Tech
            </h1>
          </div>

          <p className="text-lg md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto">
            Discover latest electronics at great prices in Malawi&apos;s top marketplace
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/login"
              className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl flex items-center gap-3"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;