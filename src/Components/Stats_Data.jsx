import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import contact from '../Profile.json';
const StatCounter = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, inView]);

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-bold text-[#14B8A6]">
      {count}{suffix}
    </span>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const stats = [
    { number: 80, suffix: '+', label: 'Satisfied clients' },
    { number: 200, suffix: '+', label: 'Projects completed' },
    { number: 99, suffix: '+', label: 'Reviews given' },
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
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            I have <span className="text-[#14B8A6]">Creative</span>
            <br />
            Design Experience
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <StatCounter end={stat.number} suffix={stat.suffix} />
              <p className="text-gray-600 mt-3 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Hire Me Section */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Hire Me For Your Next Project?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              The best way to get started on your next project is to hire me. I've been in the industry for over 10 years and I've helped hundreds of businesses like yours achieve their goals. I'm a creative, results-driven professional who is passionate about design. I'm confident that I can help you create a winning design for your business.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#14B8A6]/20 to-[#0D9488]/20 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-[#14B8A6] flex items-center justify-center">
                <span className="text-white text-6xl">✨</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Let's Discuss Your Project
              </h3>
              <p className="text-gray-600 mb-8">
                We'd love to hear more about your project. Please fill out the form below and we'll be in touch soon.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#14B8A6]/10 flex items-center justify-center">
                    <span className="text-[#14B8A6]">📧</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href={`mailto:${contact.email}`} className="text-gray-900 hover:text-[#14B8A6]">
                      {contact.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#14B8A6]/10 flex items-center justify-center">
                    <span className="text-[#14B8A6]">📱</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a href={`tel:${contact.phone}`} className="text-gray-900 hover:text-[#14B8A6]">
                      {contact.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#14B8A6]/10 flex items-center justify-center">
                    <span className="text-[#14B8A6]">📍</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-gray-900">{contact.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#14B8A6] text-white rounded-lg font-medium
                  hover:bg-[#0D9488] transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Stats;