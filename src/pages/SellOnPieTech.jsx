import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaUsers, FaChartLine, FaShieldAlt, FaCheckCircle, FaStar, FaArrowRight, FaStore, FaMoneyBillWave, FaGlobe } from 'react-icons/fa';

const SellOnPieTech = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // Refs for scroll-triggered animations
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const stepsRef = useRef(null);
  const ctaRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isFeaturesInView = useInView(featuresRef, { once: true });
  const isStepsInView = useInView(stepsRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const benefits = [
    {
      icon: <FaMoneyBillWave />,
      title: 'Competitive Commission',
      description: 'Keep more of your profits with our industry-leading commission rates starting at just 5%.',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: <FaUsers />,
      title: 'Massive Customer Base',
      description: 'Reach over 50,000+ active customers across Malawi looking for quality electronics.',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Secure Payments',
      description: 'Get paid quickly and securely with our escrow system and multiple payment options.',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: <FaChartLine />,
      title: 'Analytics Dashboard',
      description: 'Track your sales performance with detailed analytics and insights to grow your business.',
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: <FaStore />,
      title: 'Easy Store Setup',
      description: 'Create your professional online store in minutes with our intuitive seller dashboard.',
      color: 'from-indigo-400 to-purple-500'
    },
    {
      icon: <FaGlobe />,
      title: 'Nationwide Reach',
      description: 'Ship to customers anywhere in Malawi with our integrated logistics partners.',
      color: 'from-teal-400 to-green-500'
    }
  ];

  const steps = [
    {
      step: '01',
      title: 'Create Your Account',
      description: 'Sign up as a seller and verify your business information in just a few minutes.',
      icon: '📝'
    },
    {
      step: '02',
      title: 'List Your Products',
      description: 'Upload high-quality photos, detailed descriptions, and set competitive prices.',
      icon: '📦'
    },
    {
      step: '03',
      title: 'Manage Orders',
      description: 'Receive orders, process payments, and ship products to happy customers.',
      icon: '🚚'
    },
    {
      step: '04',
      title: 'Grow Your Business',
      description: 'Use analytics to optimize your listings and scale your electronics business.',
      icon: '📈'
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
    hidden: { y: 30, opacity: 0 },
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
            y: [0, -25, 0],
            rotate: [0, 8, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-36 h-36 bg-blue-200 rounded-full opacity-20 blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, 25, 0],
            rotate: [0, -8, 0]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 right-20 w-28 h-28 bg-purple-200 rounded-full opacity-20 blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 12, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-40 left-20 w-32 h-32 bg-indigo-200 rounded-full opacity-20 blur-2xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 right-10 w-24 h-24 bg-pink-200 rounded-full opacity-20 blur-2xl"
        />
      </div>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ y }}
        className="relative bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 text-white py-24 overflow-hidden"
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
              className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
              animate={{
                textShadow: [
                  "0 0 20px rgba(255,255,255,0.5)",
                  "0 0 40px rgba(59,130,246,0.5)",
                  "0 0 20px rgba(255,255,255,0.5)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Start Selling on Pie Tech
            </motion.h1>
          </motion.div>

          <motion.p
            className="text-2xl mb-12 text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Join Malawi's premier electronics marketplace and reach thousands of customers.
            Start your journey to success with our seller-friendly platform.
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
                to="/register"
                className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-xl hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl flex items-center gap-3"
              >
                <FaRocket />
                Start Selling Today
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to="/contact"
                className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center gap-3"
              >
                <FaUsers />
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [0, 3, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-12 left-12 text-5xl opacity-20"
        >
          🏪
        </motion.div>
        <motion.div
          animate={{
            y: [0, 8, 0],
            rotate: [0, -3, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-16 right-16 text-4xl opacity-20"
        >
          💰
        </motion.div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        ref={featuresRef}
        className="py-24 bg-white/50 backdrop-blur-sm"
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
            Why Sell on Pie Tech?
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -5
                }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20"
              >
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center text-2xl text-white mb-6`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        ref={stepsRef}
        className="py-24 bg-gradient-to-r from-blue-50 to-indigo-50"
        initial={{ opacity: 0 }}
        animate={isStepsInView ? { opacity: 1 } : {}}
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
            How It Works
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center relative"
              >
                {/* Step number background */}
                <motion.div
                  className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {step.step}
                </motion.div>

                {/* Icon */}
                <motion.div
                  className="text-4xl mb-4"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                >
                  {step.icon}
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>

                {/* Arrow connector for non-last items */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-10 -right-4 text-blue-400 text-2xl"
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <FaArrowRight />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Success Stories Section */}
      <section className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-5xl font-bold text-center mb-16 text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Success Stories
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "TechHub Malawi",
                sales: "MWK 2.5M+",
                products: "150+",
                rating: 4.9,
                quote: "Pie Tech helped us reach customers we never could before. Our sales tripled in just 6 months!"
              },
              {
                name: "Gadget World",
                sales: "MWK 1.8M+",
                products: "200+",
                rating: 4.8,
                quote: "The platform is incredibly user-friendly. We've expanded our business nationwide."
              },
              {
                name: "ElectroMart",
                sales: "MWK 3.2M+",
                products: "300+",
                rating: 5.0,
                quote: "Best decision we made. The analytics tools helped us optimize our listings perfectly."
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  y: -5
                }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-lg ${i < Math.floor(story.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="ml-2 text-gray-600 font-semibold">{story.rating}</span>
                </div>
                <blockquote className="text-gray-700 mb-6 italic">"{story.quote}"</blockquote>
                <div className="border-t pt-4">
                  <h4 className="font-bold text-lg text-gray-900">{story.name}</h4>
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>{story.sales} in sales</span>
                    <span>{story.products} products</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        ref={ctaRef}
        className="py-24 bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-800 text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={isCtaInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        {/* Animated background elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Start Your Success Story?
          </motion.h2>
          <motion.p
            className="text-xl mb-12 text-blue-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of successful sellers on Pie Tech and turn your electronics business into a thriving enterprise.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
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
                to="/register"
                className="bg-white text-blue-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl flex items-center gap-3"
              >
                <FaRocket />
                Get Started Now
                <FaArrowRight />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default SellOnPieTech;