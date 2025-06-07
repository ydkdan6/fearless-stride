import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Users, Briefcase, MessageCircle, Award, Calendar } from 'lucide-react';

const WhatWeDo: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: Users,
      title: 'One-on-One Mentorship',
      description: 'Personalized guidance from experienced professionals who understand your journey.',
      features: ['Career Planning', 'Skill Development', 'Personal Growth', 'Goal Setting']
    },
    {
      icon: BookOpen,
      title: 'Professional Development',
      description: 'Comprehensive training programs to enhance your skills and credentials.',
      features: ['Certification Prep', 'Skill Workshops', 'Leadership Training', 'Industry Updates']
    },
    {
      icon: Briefcase,
      title: 'Career Transition Support',
      description: 'Navigate career changes with confidence and strategic planning.',
      features: ['Resume Building', 'Interview Prep', 'Network Building', 'Job Placement']
    },
    {
      icon: MessageCircle,
      title: 'Peer Support Groups',
      description: 'Connect with like-minded women facing similar challenges and opportunities.',
      features: ['Group Sessions', 'Networking Events', 'Success Stories', 'Emotional Support']
    },
    {
      icon: Award,
      title: 'Credential Recognition',
      description: 'Specialized support for internationally educated nurses and healthcare professionals.',
      features: ['License Navigation', 'Exam Preparation', 'Documentation Help', 'Pathway Guidance']
    },
    {
      icon: Calendar,
      title: 'Ongoing Support',
      description: 'Long-term relationship building and continuous professional development.',
      features: ['Monthly Check-ins', 'Resource Access', 'Alumni Network', 'Continued Learning']
    }
  ];

  return (
    <section id="what-we-do" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">What We Do</h2>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto">
            Comprehensive support services designed to empower immigrant women and 
            internationally educated nurses in their professional journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-cream p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-primary/80 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    className="flex items-center text-primary/70"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) + 0.3 }}
                  >
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-primary rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light opacity-90" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-cream mb-6">
                Ready to Transform Your Career?
              </h3>
              <p className="text-xl text-cream/90 mb-8 max-w-2xl mx-auto">
                Join our community of empowered women who have successfully navigated 
                their professional journey with our support.
              </p>
              <motion.button
                className="bg-secondary hover:bg-secondary-light text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Your Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;