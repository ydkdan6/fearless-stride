import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create email body with form details
    const emailBody = `
Hello Fearless Strides Team,

I hope this message finds you well. I'm reaching out regarding ${formData.subject || 'general inquiry'}.

Contact Details:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}

Message:
${formData.message}

Thank you for your time and I look forward to hearing from you soon.

Best regards,
${formData.name}
    `.trim();

    // Create mailto URL
    const mailtoUrl = `mailto:hello@fearlessstrides.com?subject=${encodeURIComponent(formData.subject || 'Contact Form Submission')}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoUrl;
    
    // Optional: Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      info: 'hello@fearlessstrides.com',
      description: 'Send us a message anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '403 702 4498',
      description: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: '141 Evansdale Landing NW',
      description: 'Calgary, AB T3P0C7'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      info: 'Mon-Fri: 9AM-6PM',
      description: 'Weekend by appointment'
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: 'Facebook',
      url: 'https://web.facebook.com/fearlessstrides/?_rdc=1&_rdr#',
      color: 'hover:text-blue-600'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      url: '#',
      color: 'hover:text-blue-400'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      url: '#',
      color: 'hover:text-pink-500'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: '#',
      color: 'hover:text-blue-700'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden min-h-screen" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your journey? We're here to support you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-900 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="mentorship">Mentorship Program</option>
                    <option value="nursing">Nursing Credentials</option>
                    <option value="consultation">Free Consultation</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about your goals and how we can help you..."
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-secondary hover:bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                We're here to answer your questions and help you take the next step 
                in your professional journey. Reach out to us through any of the channels below.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((item, index) => (
                <div
                  key={item.title}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-300 font-medium mb-1">{item.info}</p>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white ${social.color} transition-all duration-300 hover:scale-110`}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Emergency Support Note */}
            <div className="bg-secondary/20 border border-blue-600/30 rounded-xl p-6 mt-8">
              <h4 className="text-white font-semibold mb-2">Need Immediate Support?</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                If you're experiencing a crisis or need immediate emotional support, 
                please use our grief support chat or contact a local crisis helpline. 
                We're here to help, but professional crisis services are available 24/7.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;