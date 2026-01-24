import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useState, useRef } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaPaperPlane, FaWhatsapp, FaLinkedin, FaFacebook, FaRocket, FaUsers, FaShieldAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // Refs for scroll-triggered animations
  const heroRef = useRef(null);
  const contactRef = useRef(null);
  const formRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isContactInView = useInView(contactRef, { once: true });
  const isFormInView = useInView(formRef, { once: true });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setLoading(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl text-blue-500" />,
      title: "Email",
      content: "support@pie-tech.com",
      link: "mailto:support@pie-tech.com",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: <FaPhone className="text-3xl text-emerald-600" />,
      title: "Phone",
      content: "0982085238",
      link: "tel:0982085238",
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-red-500" />,
      title: "Address",
      content: "Luwinga, Mzuzu, Malawi",
      link: "#",
      color: "from-red-400 to-pink-500"
    },
    {
      icon: <FaClock className="text-2xl text-purple-500" />,
      title: "Business Hours",
      content: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
      link: "#",
      color: "from-purple-400 to-indigo-500"
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
              Get in Touch
            </motion.h1>
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
          📞
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
          💬
        </motion.div>
      </motion.section>

      <div className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              ref={contactRef}
              variants={containerVariants}
              initial="hidden"
              animate={isContactInView ? "visible" : "hidden"}
              className="space-y-8"
            >
              <motion.div
                variants={itemVariants}
                className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20"
              >
                <motion.div
                  className="flex items-center mb-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <FaRocket className="text-3xl text-blue-500 mr-3" />
                  <h2 className="text-4xl font-bold text-gray-900">Contact Information</h2>
                </motion.div>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  We're always ready to help! Reach out to us through any of the channels below,
                  and our friendly team will get back to you as soon as possible.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.05,
                        y: -5
                      }}
                      className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
                    >
                      <motion.div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center text-white mb-4`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {info.icon}
                      </motion.div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">{info.title}</h3>
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                      >
                        {info.content}
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div
                variants={itemVariants}
                className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20"
              >
                <motion.div
                  className="flex items-center mb-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <FaUsers className="text-3xl text-purple-500 mr-3" />
                  <h3 className="text-3xl font-bold text-gray-900">Follow Us</h3>
                </motion.div>
                <p className="text-gray-600 mb-8">Stay connected and get the latest updates from Pie Tech</p>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl text-white hover:shadow-lg transition-all duration-300"
                  >
                    <FaFacebook size={24} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://wa.me/265982085238"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl text-white hover:shadow-lg transition-all duration-300"
                  >
                    <FaWhatsapp size={24} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl text-white hover:shadow-lg transition-all duration-300"
                  >
                    <FaLinkedin size={24} />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              ref={formRef}
              variants={containerVariants}
              initial="hidden"
              animate={isFormInView ? "visible" : "hidden"}
              className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20"
            >
              <motion.div
                variants={itemVariants}
                className="flex items-center mb-8"
              >
                <motion.div
                  whileHover={{ rotate: 15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaPaperPlane className="text-3xl text-blue-500 mr-3" />
                </motion.div>
                <h2 className="text-4xl font-bold text-gray-900">Send us a Message</h2>
              </motion.div>

              <motion.form
                variants={itemVariants}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                    />
                  </motion.div>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    rows="6"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </motion.div>

                <motion.button
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(59,130,246,0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"
                      />
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <FaPaperPlane className="mr-3" />
                      Send Message
                    </div>
                  )}
                </motion.button>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;