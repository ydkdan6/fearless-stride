import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, X, Heart, Users, Award, Calendar } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Events', 'Graduates', 'Mentoring', 'Community', 'Awards'];

  const galleryItems = [
    {
      id: 1,
      title: 'Annual Mentorship Gala 2023',
      category: 'Events',
      image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Celebrating our mentees achievements at our annual gala event.',
      date: '2023-12-15'
    },
    {
      id: 2,
      title: 'New Graduate Celebration',
      category: 'Graduates',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Proud graduates from our nursing credential program.',
      date: '2023-11-20'
    },
    {
      id: 3,
      title: 'One-on-One Mentoring Session',
      category: 'Mentoring',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Personalized guidance and career planning sessions.',
      date: '2023-10-05'
    },
    {
      id: 4,
      title: 'Community Workshop',
      category: 'Community',
      image: 'https://images.pexels.com/photos/3184420/pexels-photo-3184420.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Professional development workshop for immigrant women.',
      date: '2023-09-12'
    },
    {
      id: 5,
      title: 'Excellence in Mentorship Award',
      category: 'Awards',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Recognition for outstanding contribution to immigrant women empowerment.',
      date: '2023-08-30'
    },
    {
      id: 6,
      title: 'Career Fair Participation',
      category: 'Events',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Connecting our mentees with potential employers.',
      date: '2023-07-18'
    },
    {
      id: 7,
      title: 'Success Story: Maria Rodriguez',
      category: 'Graduates',
      image: 'https://images.pexels.com/photos/4167539/pexels-photo-4167539.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'From international nurse to head of department in 2 years.',
      date: '2023-06-25'
    },
    {
      id: 8,
      title: 'Group Mentoring Session',
      category: 'Mentoring',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Peer support and collaborative learning environment.',
      date: '2023-05-10'
    },
    {
      id: 9,
      title: 'Cultural Celebration Event',
      category: 'Community',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Celebrating the diverse cultures within our community.',
      date: '2023-04-22'
    }
  ];

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Header */}
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex items-center justify-between"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <Link
                to="/"
                className="inline-flex items-center space-x-2 text-cream hover:text-secondary transition-colors duration-300 mb-4"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </Link>
              <h1 className="text-4xl md:text-6xl font-bold text-cream mb-4">Our Gallery</h1>
              <p className="text-xl text-cream/90 max-w-2xl">
                Celebrating the journey, achievements, and community of empowered women.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="w-32 h-32 bg-secondary rounded-full flex items-center justify-center">
                <Heart className="w-16 h-16 text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-secondary text-white'
                    : 'bg-gray-100 text-primary hover:bg-secondary/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {item.category}
                    </span>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-cream/90 text-sm mb-2">{item.description}</p>
                    <div className="flex items-center space-x-1 text-cream/80 text-xs">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {[
              { icon: Users, number: '500+', label: 'Women Empowered' },
              { icon: Award, number: '150+', label: 'Success Stories' },
              { icon: Heart, number: '50+', label: 'Expert Mentors' },
              { icon: Calendar, number: '100+', label: 'Events Hosted' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <stat.icon className="w-12 h-12 text-secondary mx-auto mb-4" />
                <div className="text-4xl font-bold text-cream mb-2">{stat.number}</div>
                <div className="text-cream/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative max-w-4xl max-h-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-secondary transition-colors duration-300"
            >
              <X className="w-8 h-8" />
            </button>
            
            {filteredItems.find(item => item.id === selectedImage) && (
              <div className="bg-white rounded-2xl overflow-hidden">
                <img
                  src={filteredItems.find(item => item.id === selectedImage)?.image}
                  alt={filteredItems.find(item => item.id === selectedImage)?.title}
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {filteredItems.find(item => item.id === selectedImage)?.title}
                  </h3>
                  <p className="text-primary/80 mb-4">
                    {filteredItems.find(item => item.id === selectedImage)?.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm">
                      {filteredItems.find(item => item.id === selectedImage)?.category}
                    </span>
                    <span className="text-primary/60 text-sm">
                      {filteredItems.find(item => item.id === selectedImage)?.date && 
                       new Date(filteredItems.find(item => item.id === selectedImage)!.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;