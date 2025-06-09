import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Who can benefit from your mentorship programs?',
      answer: 'Our programs are designed for immigrant women and internationally educated nurses who are looking to advance their careers, navigate professional challenges, or transition into new roles. We welcome women at all stages of their career journey.'
    },
    {
      question: 'How long does the mentorship program last?',
      answer: 'Our standard mentorship program runs for 6 months, with weekly one-on-one sessions and monthly group meetings. We also offer extended programs and ongoing support based on individual needs and goals.'
    },
    {
      question: 'What qualifications do your mentors have?',
      answer: 'All our mentors are experienced professionals with at least 10 years in their respective fields. Many are immigrant women themselves who have successfully navigated similar challenges. They undergo specialized training in mentorship and cultural competency.'
    },
    {
      question: 'Is there a cost for your services?',
      answer: 'We offer a sliding scale fee structure to ensure our services are accessible. We also have scholarship programs and pro bono services available for those who qualify. Contact us to discuss your specific situation.'
    },
    {
      question: 'Do you help with credential recognition for nurses?',
      answer: 'Yes, we have specialized programs for internationally educated nurses, including guidance through credential evaluation, licensing exams, bridging programs, and job placement assistance in the healthcare sector.'
    },
    {
      question: 'Can I participate if I\'m not fluent in English?',
      answer: 'Absolutely! We have mentors who speak multiple languages and offer language support services. We believe language should not be a barrier to professional success and provide resources to help improve communication skills.'
    },
    {
      question: 'What makes your program different from others?',
      answer: 'Our program is specifically designed by and for immigrant women, with deep understanding of cultural nuances and systemic barriers. We combine professional mentorship with emotional support and community building.'
    },
    {
      question: 'How do you match mentees with mentors?',
      answer: 'We use a comprehensive matching process that considers professional background, career goals, personality, cultural background, and specific challenges. This ensures the best possible mentor-mentee relationship.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-cream" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto">
            Find answers to common questions about our mentorship programs and services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-primary pr-4">{faq.question}</h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <Minus className="w-5 h-5 text-secondary" />
                  ) : (
                    <Plus className="w-5 h-5 text-secondary" />
                  )}
                </div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openFAQ === index ? 'auto' : 0,
                  opacity: openFAQ === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-primary/80 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-lg text-primary/80 mb-6">
            Still have questions? We're here to help!
          </p>
          <motion.button
            className="bg-secondary hover:bg-secondary-light text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
                <a href="https://wa.me/+14037024498" className='decoration-none'>Contact Us</a>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;