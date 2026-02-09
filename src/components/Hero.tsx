import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Trigger animation immediately on component mount
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 text-white py-16 md:py-32 overflow-hidden"
      >
        {/* Animated gradient overlay */}
        <motion.div
          animate={{
            background: [
              'linear-gradient(45deg, rgba(59,130,246,0.8), rgba(147,51,234,0.8))',
              'linear-gradient(45deg, rgba(147,51,234,0.8), rgba(59,130,246,0.8))',
              'linear-gradient(45deg, rgba(59,130,246,0.8), rgba(147,51,234,0.8))',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 opacity-30"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            className="mb-8"
          >
            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
              animate={{
                textShadow: [
                  '0 0 20px rgba(255,255,255,0.5)',
                  '0 0 40px rgba(59,130,246,0.5)',
                  '0 0 20px rgba(255,255,255,0.5)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Welcome to Pie Tech
            </motion.h1>
          </motion.div>

          <motion.p
            className="text-lg md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Discover latest electronics at great prices in Malawi&apos;s top marketplace
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link
                to="/login"
                className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl flex items-center gap-3 hover:scale-110"
              >
                Sign In
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Hero;