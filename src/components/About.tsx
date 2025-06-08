import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Globe, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const values = [
    {
      icon: Heart,
      title: 'Compassionate Support',
      description: 'We provide empathetic guidance through every step of your professional journey.'
    },
    {
      icon: Globe,
      title: 'Cultural Understanding',
      description: 'Our diverse team understands the unique challenges faced by immigrant professionals.'
    },
    {
      icon: Award,
      title: 'Excellence Focused',
      description: 'We are committed to helping you achieve the highest standards in your career.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Building strong networks and lasting connections within our community.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-cream" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Our Mission</h2>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto">
            At Fearless Strides, our mission is to empower immigrant women and internationally educated
             nurses (IENs) to confidently build thriving lives and careers. 
             We provide expert mentorship that bridges cultural gaps and accelerates professional integration, 
             complemented by compassionate grief support and accessible digital health solutions 
             for holistic well-being. We are dedicated to being a trusted partner where every client 
             feels truly seen, heard,
             and supported, finding renewed hope and strength to achieve their fullest potential.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Diverse group of professional women"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm">Years of Impact</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-primary mb-6">
              Bridging Dreams with Reality
            </h3>
            <p className="text-lg text-primary/80 leading-relaxed">
              Founded by immigrant women who understand the journey firsthand, we provide 
              comprehensive mentorship, career guidance, and emotional support to help you 
              navigate the complexities of building a professional life in a new country.
            </p>
            <p className="text-lg text-primary/80 leading-relaxed">
              Our specialized programs for internationally educated nurses address credential 
              recognition, cultural integration, and career advancement, ensuring you can 
              practice your profession with confidence and success.
            </p>
            <div className="flex items-center space-x-4 pt-6">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-primary">Our Commitment</div>
                <div className="text-primary/70">Your success is our success</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors duration-300">
                <value.icon className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">{value.title}</h4>
              <p className="text-primary/70 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;