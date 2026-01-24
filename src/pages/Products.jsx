import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import ProductCard from '../components/ProductCard';
import Skeleton from '../components/Skeleton';
import { FaSearch, FaFilter, FaStar, FaShoppingCart } from 'react-icons/fa';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCondition, setSelectedCondition] = useState('All');
  const [loading, setLoading] = useState(true);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // Refs for scroll-triggered animations
  const headerRef = useRef(null);
  const filtersRef = useRef(null);

  const isHeaderInView = useInView(headerRef, { once: true });
  const isFiltersInView = useInView(filtersRef, { once: true });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
        setFilteredProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Sample data for demo
        const sampleProducts = [
          {
            _id: 1,
            name: 'iPhone 15 Pro',
            price: 150000,
            image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop',
            category: 'Phones',
            condition: 'New',
            rating: 4.5
          },
          {
            _id: 2,
            name: 'MacBook Air M2',
            price: 250000,
            image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop',
            category: 'Laptops',
            condition: 'New',
            rating: 4.8
          },
          {
            _id: 3,
            name: 'Samsung TV 55"',
            price: 180000,
            image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop',
            category: 'TVs',
            condition: 'Refurbished',
            rating: 4.2
          },
          {
            _id: 4,
            name: 'AirPods Pro',
            price: 25000,
            image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c9b9b?w=400&h=300&fit=crop',
            category: 'Accessories',
            condition: 'New',
            rating: 4.7
          },
          {
            _id: 5,
            name: 'Samsung Galaxy S24',
            price: 120000,
            image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop',
            category: 'Phones',
            condition: 'New',
            rating: 4.3
          },
          {
            _id: 6,
            name: 'Dell XPS 13',
            price: 200000,
            image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
            category: 'Laptops',
            condition: 'Used',
            rating: 4.0
          },
          {
            _id: 7,
            name: 'Sony PlayStation 5',
            price: 80000,
            image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=300&fit=crop',
            category: 'Gaming',
            condition: 'New',
            rating: 4.9
          },
          {
            _id: 8,
            name: 'Canon EOS R5',
            price: 300000,
            image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
            category: 'Cameras',
            condition: 'Refurbished',
            rating: 4.6
          },
          {
            _id: 9,
            name: 'Apple Watch Series 9',
            price: 50000,
            image: 'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&h=300&fit=crop',
            category: 'Accessories',
            condition: 'New',
            rating: 4.4
          },
          {
            _id: 10,
            name: 'LG OLED TV 65"',
            price: 250000,
            image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&h=300&fit=crop',
            category: 'TVs',
            condition: 'New',
            rating: 4.8
          },
          {
            _id: 11,
            name: 'Google Pixel 8',
            price: 90000,
            image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
            category: 'Phones',
            condition: 'Used',
            rating: 4.1
          },
          {
            _id: 12,
            name: 'ASUS ROG Laptop',
            price: 180000,
            image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop',
            category: 'Gaming',
            condition: 'New',
            rating: 4.5
          }
        ];
        setProducts(sampleProducts);
        setFilteredProducts(sampleProducts);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = products;
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    if (selectedCondition !== 'All') {
      filtered = filtered.filter(product => product.condition === selectedCondition);
    }
    if (searchTerm) {
      filtered = filtered.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    setFilteredProducts(filtered);
  }, [selectedCategory, selectedCondition, products, searchTerm]);

  const categories = ['All', 'Phones', 'Laptops', 'TVs', 'Accessories', 'Gaming', 'Cameras'];
  const conditions = ['All', 'New', 'Refurbished', 'Used'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -10, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 right-20 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-40 left-20 w-36 h-36 bg-indigo-200 rounded-full opacity-20 blur-2xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 right-10 w-20 h-20 bg-pink-200 rounded-full opacity-20 blur-2xl"
        />
      </div>

      <div className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <motion.div
            ref={headerRef}
            className="text-center mb-16"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isHeaderInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <motion.h1
              className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
              animate={{
                textShadow: [
                  "0 0 20px rgba(59,130,246,0.3)",
                  "0 0 40px rgba(147,51,234,0.3)",
                  "0 0 20px rgba(59,130,246,0.3)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Discover Amazing Products
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Explore our curated collection of premium electronics from trusted sellers across Malawi
            </motion.p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            className="mb-12 flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative w-full max-w-lg">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur opacity-25"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="relative bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-1">
                <div className="flex items-center">
                  <FaSearch className="text-blue-500 ml-4 mr-2" />
                  <motion.input
                    type="text"
                    placeholder="Search for amazing products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-4 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 rounded-2xl"
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 0 20px rgba(59,130,246,0.3)"
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Filters Section */}
          <motion.div
            ref={filtersRef}
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={isFiltersInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            {/* Category Filter */}
            <motion.div
              className="mb-12"
              variants={containerVariants}
              initial="hidden"
              animate={isFiltersInView ? "visible" : "hidden"}
            >
              <motion.div
                className="flex items-center justify-center mb-8"
                variants={itemVariants}
              >
                <FaFilter className="text-blue-500 mr-3 text-2xl" />
                <h2 className="text-3xl font-bold text-gray-800">Browse by Category</h2>
              </motion.div>
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category, index) => (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-2xl transform scale-105'
                        : 'bg-white/70 backdrop-blur-xl text-gray-700 hover:bg-white/90 hover:shadow-xl border border-white/20'
                    }`}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {selectedCategory === category && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    <span className="relative z-10">{category}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Condition Filter */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isFiltersInView ? "visible" : "hidden"}
            >
              <motion.div
                className="flex items-center justify-center mb-8"
                variants={itemVariants}
              >
                <FaStar className="text-green-500 mr-3 text-2xl" />
                <h2 className="text-3xl font-bold text-gray-800">Filter by Condition</h2>
              </motion.div>
              <div className="flex flex-wrap justify-center gap-4">
                {conditions.map((condition, index) => (
                  <motion.button
                    key={condition}
                    onClick={() => setSelectedCondition(condition)}
                    className={`relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                      selectedCondition === condition
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-2xl transform scale-105'
                        : 'bg-white/70 backdrop-blur-xl text-gray-700 hover:bg-white/90 hover:shadow-xl border border-white/20'
                    }`}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {selectedCondition === condition && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    <span className="relative z-10">{condition}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {loading
              ? Array.from({ length: 8 }).map((_, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                  >
                    <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-6 border border-white/20">
                      <Skeleton className="h-48 w-full rounded-2xl mb-4" />
                      <Skeleton className="h-6 w-3/4 mb-3" />
                      <Skeleton className="h-4 w-1/2 mb-3" />
                      <Skeleton className="h-4 w-1/4 mb-4" />
                      <div className="flex gap-3">
                        <Skeleton className="h-12 w-1/2 rounded-xl" />
                        <Skeleton className="h-12 w-1/2 rounded-xl" />
                        <Skeleton className="h-12 w-12 rounded-xl" />
                        <Skeleton className="h-12 w-12 rounded-xl" />
                      </div>
                    </div>
                  </motion.div>
                ))
              : filteredProducts.map((product, index) => (
                  <motion.div
                    key={product._id || product.id}
                    variants={itemVariants}
                    whileHover={{
                      y: -8,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))
            }
          </motion.div>

          {filteredProducts.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="text-8xl mb-6"
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🔍
              </motion.div>
              <h3 className="text-3xl font-bold text-gray-700 mb-4">No products found</h3>
              <p className="text-gray-500 text-lg">Try adjusting your filters or search terms</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;