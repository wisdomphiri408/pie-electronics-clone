import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { FaStar, FaShoppingCart, FaUsers, FaAward, FaRocket, FaShieldAlt } from 'react-icons/fa';

const Home = () => {
  const [products, setProducts] = useState([]);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // Refs for scroll-triggered animations
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const featuresRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isStatsInView = useInView(statsRef, { once: true });
  const isFeaturesInView = useInView(featuresRef, { once: true });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        if (response.data.length > 0) {
          setProducts(response.data);
        } else {
          // Sample products with high-quality images
          setProducts([
            {
              id: 1,
              name: 'iPhone 15 Pro',
              price: 150000,
              image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop',
              category: 'Phones',
              rating: 4.8
            },
            {
              id: 2,
              name: 'MacBook Air M2',
              price: 250000,
              image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop',
              category: 'Laptops',
              rating: 4.9
            },
            {
              id: 3,
              name: 'Samsung TV 55"',
              price: 180000,
              image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop',
              category: 'TVs',
              rating: 4.7
            },
            {
              id: 4,
              name: 'AirPods Pro',
              price: 25000,
              image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c9b9b?w=400&h=300&fit=crop',
              category: 'Accessories',
              rating: 4.6
            },
            {
              id: 5,
              name: 'Sony PlayStation 5',
              price: 120000,
              image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=300&fit=crop',
              category: 'Gaming',
              rating: 4.9
            },
            {
              id: 6,
              name: 'Canon EOS R5',
              price: 300000,
              image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
              category: 'Cameras',
              rating: 4.8
            }
          ]);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        // Fallback to sample products
        setProducts([
          {
            id: 1,
            name: 'iPhone 15 Pro',
            price: 150000,
            image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop',
            category: 'Phones',
            rating: 4.8
          },
          {
            id: 2,
            name: 'MacBook Air M2',
            price: 250000,
            image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop',
            category: 'Laptops',
            rating: 4.9
          },
          {
            id: 3,
            name: 'Samsung TV 55"',
            price: 180000,
            image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop',
            category: 'TVs',
            rating: 4.7
          },
          {
            id: 4,
            name: 'AirPods Pro',
            price: 25000,
            image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c9b9b?w=400&h=300&fit=crop',
            category: 'Accessories',
            rating: 4.6
          }
        ]);
      }
    };

    fetchProducts();
  }, []);

  const categories = ['Phones', 'Laptops', 'TVs', 'Accessories', 'Gaming', 'Cameras'];

  const stats = [
    { icon: <FaShoppingCart />, value: '10,000+', label: 'Products Sold' },
    { icon: <FaUsers />, value: '5,000+', label: 'Happy Customers' },
    { icon: <FaAward />, value: '500+', label: 'Verified Sellers' },
    { icon: <FaStar />, value: '4.8/5', label: 'Average Rating' }
  ];

  const features = [
    {
      icon: <FaRocket />,
      title: 'Fast Delivery',
      description: 'Lightning-fast shipping across Malawi with real-time tracking.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Secure Payments',
      description: 'Bank-grade security for all your transactions and data.'
    },
    {
      icon: <FaAward />,
      title: 'Quality Guarantee',
      description: 'All products are verified and come with warranty coverage.'
    },
    {
      icon: <FaUsers />,
      title: 'Expert Support',
      description: '24/7 customer support from our tech-savvy team.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 right-20 w-24 h-24 bg-purple-200 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-40 left-20 w-28 h-28 bg-indigo-200 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 right-10 w-16 h-16 bg-pink-200 rounded-full opacity-20 blur-xl"
        />
      </div>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ y }}
        className="relative bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 text-white py-32 overflow-hidden"
      >
        {/* Animated gradient overlay */}
        <motion.div
          animate={{
            background: [
              "linear-gradient(45deg, rgba(59,130,246,0.8), rgba(147,51,234,0.8))",
              "linear-gradient(45deg, rgba(147,51,234,0.8), rgba(59,130,246,0.8))",
              "linear-gradient(45deg, rgba(59,130,246,0.8), rgba(147,51,234,0.8))"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 opacity-30"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="mb-8"
          >
            <motion.h1
              className="text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
              animate={{
                textShadow: [
                  "0 0 20px rgba(255,255,255,0.5)",
                  "0 0 40px rgba(59,130,246,0.5)",
                  "0 0 20px rgba(255,255,255,0.5)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Welcome to Pie Tech
            </motion.h1>
          </motion.div>

          <motion.p
            className="text-2xl mb-12 text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Discover the latest electronics at amazing prices in Malawi's premier marketplace
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to="/products"
                className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-xl hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl flex items-center gap-3"
              >
                <FaShoppingCart />
                Shop Now
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to="/sell"
                className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center gap-3"
              >
                <FaRocket />
                Start Selling
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 2, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-10 left-10 text-6xl opacity-20"
        >
          📱
        </motion.div>
        <motion.div
          animate={{
            y: [0, 10, 0],
            rotate: [0, -2, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-20 text-5xl opacity-20"
        >
          💻
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        ref={statsRef}
        className="py-20 bg-white/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={isStatsInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -5
                }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  className="text-4xl text-blue-600 mb-4 mx-auto w-fit"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  className="text-3xl font-bold text-gray-900 mb-2"
                  initial={{ scale: 0 }}
                  animate={isStatsInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Categories */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-5xl font-bold text-center mb-16 text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Shop by Category
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {categories.map((category, index) => {
              const categoryImages = {
                Phones: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop',
                Laptops: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200&h=200&fit=crop',
                TVs: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=200&h=200&fit=crop',
                Accessories: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop',
                Gaming: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=200&fit=crop',
                Cameras: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=200&h=200&fit=crop'
              };

              return (
                <motion.div
                  key={category}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.1,
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                >
                  <motion.img
                    src={categoryImages[category]}
                    alt={category}
                    className="w-20 h-20 object-cover rounded-full mx-auto mb-6 border-4 border-blue-100 group-hover:border-blue-300 transition-colors"
                    whileHover={{ rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  <motion.h3
                    className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    {category}
                  </motion.h3>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <motion.section
        ref={featuresRef}
        className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50"
        initial={{ opacity: 0 }}
        animate={isFeaturesInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-5xl font-bold text-center mb-16 text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why Choose Pie Tech?
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -5
                }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <motion.div
                  className="text-5xl text-blue-600 mb-6 mx-auto w-fit"
                  whileHover={{
                    rotate: 360,
                    scale: 1.1
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-5xl font-bold text-center mb-16 text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Featured Products
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;