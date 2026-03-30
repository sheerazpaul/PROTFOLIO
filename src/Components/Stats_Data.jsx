import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import contact from "../Profile.json";
import emailjs from "@emailjs/browser";

/* =========================
   Stat Counter Component
========================= */
const StatCounter = ({ end, duration = 2, suffix = "" }) => {
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
      {count}
      {suffix}
    </span>
  );
};

/* =========================
   Main Stats Component
========================= */
const Stats = () => {
  const ref = useRef(null);
  const formRef = useRef(null);

  const inView = useInView(ref, { once: true, amount: 0.2 });

  const [loading, setLoading] = useState(false);

  /* =========================
     Email Send Function
  ========================= */
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",   // 🔴 replace
        "YOUR_TEMPLATE_ID",  // 🔴 replace
        formRef.current,
        "YOUR_PUBLIC_KEY"    // 🔴 replace
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          formRef.current.reset();
          setLoading(false);
        },
        () => {
          alert("❌ Failed to send message. Try again.");
          setLoading(false);
        }
      );
  };

  /* =========================
     Animations
  ========================= */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="px-4 py-24 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Why Hire Me */}
        <motion.div
          variants={itemVariants}
          className="grid items-center gap-12 mb-24"
        >
          <div>
            <h3 className="mb-6 text-3xl font-bold text-center text-gray-900 md:text-4xl">
              Why Hire Me For Your Next Project?
            </h3>

            <p className="text-xl leading-relaxed text-gray-600">
              The best way to get started on your next project is to hire me. I
              have 1 year of experience as a frontend developer and have worked
              on several projects that helped businesses improve their online
              presence. I’m a creative and detail-oriented developer who is
              passionate about building clean, responsive, and user-friendly
              interfaces. I focus on delivering results and ensuring a great
              user experience. I’m confident that I can help you create an
              effective and visually appealing frontend for your business.
            </p>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          variants={itemVariants}
          className="p-8 bg-white shadow-xl rounded-2xl md:p-12"
        >
          <div className="grid gap-12 md:grid-cols-2">

            {/* Left Info */}
            <div>
              <h3 className="mb-4 text-3xl font-bold text-gray-900">
                Let's Discuss Your Project
              </h3>

              <p className="mb-8 text-gray-600">
                Fill the form and I’ll contact you soon.
              </p>

              <div className="space-y-4">

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#14B8A6]/10 flex items-center justify-center">
                    📧
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href={`mailto:${contact.email}`} className="text-gray-900">
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#14B8A6]/10 flex items-center justify-center">
                    📱
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a href={`tel:${contact.phone}`} className="text-gray-900">
                      {contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#14B8A6]/10 flex items-center justify-center">
                    📍
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-gray-900">{contact.location}</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Form */}
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <input
                type="text"
                name="user_name"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 border rounded-lg"
              />

              <input
                type="email"
                name="user_email"
                required
                placeholder="Your Email"
                className="w-full px-4 py-3 border rounded-lg"
              />

              <textarea
                name="message"
                rows="4"
                required
                placeholder="Project Details..."
                className="w-full px-4 py-3 border rounded-lg"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-[#14B8A6] text-white rounded-lg hover:bg-[#0D9488]"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>

          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Stats;