import { motion } from 'framer-motion';
import { FaCheckCircle, FaUsers, FaShieldAlt, FaRocket } from 'react-icons/fa';

const AboutUs = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            About Pie Tech
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Revolutionizing Malawi's electronics marketplace with innovation, trust, and cutting-edge technology.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl"
          >
            <div className="flex items-center mb-6">
              <FaRocket className="text-4xl text-blue-400 mr-4" />
              <h2 className="text-3xl font-bold text-white">Our Vision</h2>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed">
              To become Malawi's premier online marketplace for electronics, connecting buyers and sellers
              in a trusted, innovative platform that drives economic growth and technological advancement.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl"
          >
            <div className="flex items-center mb-6">
              <FaUsers className="text-4xl text-purple-400 mr-4" />
              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed">
              We provide a seamless, secure platform where Malawians can buy and sell quality electronics,
              from smartphones to laptops, with transparent pricing, reliable delivery, and excellent customer service.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl mb-16"
        >
          <div className="flex items-center mb-8">
            <FaCheckCircle className="text-4xl text-green-400 mr-4" />
            <h2 className="text-3xl font-bold text-white">Why Choose Pie Tech?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Wide selection of verified electronics",
              "Secure payment processing",
              "Fast and reliable delivery",
              "24/7 customer support",
              "Best price guarantee",
              "Trusted seller community"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center text-slate-300"
              >
                <FaCheckCircle className="text-green-400 mr-3 flex-shrink-0" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="backdrop-blur-xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-3xl p-8 border border-white/20 shadow-2xl"
        >
          <div className="flex items-center mb-6">
            <FaShieldAlt className="text-4xl text-indigo-400 mr-4" />
            <h2 className="text-3xl font-bold text-white">Our Story</h2>
          </div>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            Founded in 2026, Pie Tech started as a small initiative to address the growing demand for
            quality electronics in Malawi. Recognizing the challenges of finding trustworthy sellers and
            genuine products, we built a platform that prioritizes transparency, security, and community.
            Today, we're proud to serve thousands of customers and hundreds of sellers across the country.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/20 rounded-full px-6 py-3 text-white font-semibold">
              10,000+ Happy Customers
            </div>
            <div className="bg-white/20 rounded-full px-6 py-3 text-white font-semibold">
              500+ Trusted Sellers
            </div>
            <div className="bg-white/20 rounded-full px-6 py-3 text-white font-semibold">
              50,000+ Products Listed
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;