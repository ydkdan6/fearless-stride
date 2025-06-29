import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Users, Heart, X, Mail, User, Send, CheckCircle, Download } from 'lucide-react';
import emailjs from 'emailjs-com';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const GUIDEBOOK_DOWNLOAD_LINK = 'https://drive.google.com/uc?export=download&id=15IMZpHstl8MEU8AmPU86QRtI29Md-r_K';

  const stats = [
    { icon: Users, number: '500+', label: 'Women Mentored' },
    { icon: Star, number: '98%', label: 'Success Rate' },
    { icon: Heart, number: '50+', label: 'Expert Mentors' },
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email) {
      alert('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      from_name: 'FearlessStrides.com',
      reply_to: 'info@fearlessstrides.com',
      download_link: GUIDEBOOK_DOWNLOAD_LINK,
      message: `Dear ${formData.name},

Thank you for requesting our free guidebook! 

Your journey to success starts now. Click the link below to download your comprehensive guide:

🔗 Download Your Guidebook: ${GUIDEBOOK_DOWNLOAD_LINK}

This guide contains:
• Practical empowerment strategies
• Step-by-step guidance for immigrant women
• Real success stories and inspiration
• Actionable tips for career growth

If you have any questions or need support, feel free to reply to this email.

Best regards,
The Empowering Immigrant Women Team`
    };

    try {
      const result = await emailjs.send(
        'service_1wp4gak',
        'template_ogbgjwi',
        templateParams,
        '1kMp_QfoNx2EjklCZ'
      );

      console.log('✅ Email sent:', result);
      setIsSuccess(true);

      setTimeout(() => {
        setShowModal(false);
        setIsSuccess(false);
        setFormData({ name: '', email: '' });
      }, 4000);
    } catch (error) {
      console.error('❌ Error sending email:', error);
      alert('Sorry, there was an error sending your guidebook. Please try again later.');
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
      {/* Main Hero Section */}
      <section id="home" className="min-h-screen bg-primary flex items-center relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div className="absolute top-20 right-20 w-64 h-64 bg-primary rounded-full blur-3xl" animate={{ y: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute bottom-20 left-20 w-48 h-48 bg-primary rounded-full blur-2xl" animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
        </div>

        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div className="text-center lg:text-left" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Empowering{' '}
                <motion.span className="text-secondary relative">
                  Immigrant Women
                  <motion.div className="absolute -bottom-2 left-0 right-0 h-1 bg-pink-300" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 1.2 }} />
                </motion.span>
              </motion.h1>
              <motion.p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
                Connecting You to Your Future: Mentorship & Well-being, Digitally Delivered.
                To get you started, enter your details to receive your licensing roadmap for IENs in alberta instantly!
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <motion.button className="bg-secondary hover:bg-secondary text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center space-x-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a href="https://wa.me/+14037024498" className="flex items-center space-x-2">
                    <span>Get Started</span>
                    <ArrowRight size={20} />
                  </a>
                </motion.button>
                <motion.button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-full font-semibold text-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setShowModal(true)}>
                  Grab a Free Guidebook
                </motion.button>
              </motion.div>

              <motion.div className="grid grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <motion.div key={stat.label} className="text-center">
                    <stat.icon className="w-8 h-8 text-secondary mx-auto mb-2" />
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-white/80 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div className="relative">
              <motion.div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-96 md:h-[500px] bg-gradient-to-br from-secondary-400 flex items-center justify-center">
                  <img src="/image1.jpg" alt="Empowering immigrant women" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t to-transparent" />
              </motion.div>
              <motion.div className="absolute -top-6 -right-6 bg-secondary text-white p-4 rounded-full shadow-lg" animate={{ y: [-5, 5, -5] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                <Heart className="w-6 h-6" />
              </motion.div>
              <motion.div className="absolute -bottom-6 -left-6 bg-white text-primary p-4 rounded-full shadow-lg" animate={{ y: [5, -5, 5] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}>
                <Star className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeModal}>
            <motion.div className="bg-white rounded-xl p-8 max-w-md w-full relative" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} onClick={(e) => e.stopPropagation()}>
              <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={closeModal}>
                <X size={24} />
              </button>

              {!isSuccess ? (
                <>
                  <div className="text-center mb-6">
                    <div className="bg-pink-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Download className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Get Your Free Guidebook</h3>
                    <p className="text-gray-600">Enter your details to receive your licensing roadmap for IENs in alberta instantly !</p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Enter your full name" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Enter your email address" />
                      </div>
                    </div>
                  </div>
                  <button onClick={handleSubmit} disabled={isSubmitting || !formData.name || !formData.email} className="w-full bg-secondary hover:bg-primary disabled:opacity-50 text-white py-3 rounded-lg font-semibold mt-6 flex items-center justify-center space-x-2">
                    {isSubmitting ? <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div> : (<><Send size={20} /><span>Send My Guidebook</span></>)}
                  </button>
                </>
              ) : (
                <div className="text-center">
                  <div className="bg-green-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Check Your Email! 📧</h3>
                  <p className="text-gray-600 mb-4">Your free guidebook download link has been sent to <strong>{formData.email}</strong>.</p>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                    <p className="text-sm text-blue-700">
                      <strong>Can't find it?</strong> Check your spam/junk folder and add us to your contacts!
                    </p>
                  </div>
                  <p className="text-sm text-gray-500">This window will close automatically...</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;
