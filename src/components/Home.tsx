import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Users, Heart, X, Mail, User, Send, CheckCircle } from 'lucide-react';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const stats = [
    { icon: Users, number: '500+', label: 'Women Mentored' },
    { icon: Star, number: '98%', label: 'Success Rate' },
    { icon: Heart, number: '50+', label: 'Expert Mentors' },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS (you need to add your keys)
      const emailjs = window.emailjs;
      
      // Template parameters for EmailJS
      const templateParams = {
        to_name: formData.name,
        to_email: formData.email,
        from_name: 'Empowering Immigrant Women',
        reply_to: 'noreply@empoweringimmigrantwomen.com',
        message: `Dear ${formData.name},\n\nThank you for your interest in our guidebook! Please find the attached PDF guide that will help you on your empowerment journey.\n\nBest regards,\nThe Empowering Immigrant Women Team`
      };

      // Send email using EmailJS
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      setIsSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setShowModal(false);
        setIsSuccess(false);
        setFormData({ name: '', email: '' });
      }, 3000);

    } catch (error) {
      console.error('Error sending email:', error);
      alert('Sorry, there was an error sending your guidebook. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setIsSuccess(false);
    setFormData({ name: '', email: '' });
  };

  return (
    <>
      <section id="home" className="min-h-screen bg-primary flex items-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 right-20 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-48 h-48 bg-yellow-300/10 rounded-full blur-2xl"
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Empowering{' '}
                <motion.span
                  className="text-pink-300 relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Immigrant Women
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-pink-300"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  />
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Connecting You to Your Future: Mentorship & Well-being, Digitally Delivered.
                To get you started, enjoy our FREE guidebook — a helpful resource for your growth journey.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.button
                  className="bg-secondary hover:bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="https://wa.me/+14037024498" className="flex items-center space-x-2">
                    <span>Get Started</span>
                    <ArrowRight size={20} />
                  </a>
                </motion.button>
                <motion.button
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowModal(true)}
                >
                  Grab a Free Guidebook
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  >
                    <stat.icon className="w-8 h-8 text-pink-300 mx-auto mb-2" />
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-white/80 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-96 md:h-[500px] bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">
                  <div className="text-white text-center">
                    {/* <Users className="w-24 h-24 mx-auto mb-4 opacity-50" />
                    <p className="text-lg opacity-75">Professional Women Empowerment</p> */}
                    <img src="/image1.jpg" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/60 to-transparent" />
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 bg-primary text-white p-4 rounded-full shadow-lg"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="w-6 h-6" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-6 -left-6 bg-primary text-purple-600 p-4 rounded-full shadow-lg"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <Star className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white rounded-xl p-8 max-w-md w-full relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                <X size={24} />
              </button>

              {!isSuccess ? (
                <div>
                  <div className="text-center mb-6">
                    <div className="bg-primary rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Mail className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Get Your Free Guidebook</h3>
                    <p className="text-gray-600">Enter your details to receive your guide instantly!</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting || !formData.name || !formData.email}
                    className="w-full bg-primary hover:bg-secondary disabled:opacity-50 text-white py-3 rounded-lg font-semibold mt-6 flex items-center justify-center space-x-2 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send My Guidebook</span>
                      </>
                    )}
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <div className="bg-green-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-4">
                    Your free guidebook has been sent to <strong>{formData.email}</strong>.
                    Please check your inbox (and spam folder) for your empowerment guide!
                  </p>
                  <p className="text-sm text-gray-500">This window will close automatically...</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* EmailJS Script */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/emailjs-com/3.2.0/email.min.js"></script>
    </>
  );
};

export default Home;