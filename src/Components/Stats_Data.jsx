import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import contact from "../Profile.json";

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
      id="contact"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="px-4 py-24 bg-dark relative overflow-hidden"
    >
      <div className="absolute top-[30%] right-[10%] w-[40%] h-[40%] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />
      <div className="max-w-6xl mx-auto">

        {/* Why Hire Me */}
        <motion.div
          variants={itemVariants}
          className="grid items-center gap-12 mb-24"
        >
          <div>
            <h3 className="mb-6 text-3xl font-bold text-center text-white md:text-4xl">
              Why Hire Me For Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Next Project?</span>
            </h3>

            <p className="text-xl leading-relaxed text-softGray text-center">
              I build scalable, high-performance applications that bridge the gap between seamless user experiences and robust backend architectures. With a strong foundation in modern frameworks like React and powerful backend technologies like Python and Django, I don't just write code—I solve complex business problems. Whether it's architecting a secure API from scratch, optimizing database queries, or crafting pixel-perfect interactive UIs, I bring a product-first mindset to every engineering challenge. I'm driven by continuous learning and am ready to make an immediate impact on your team.
            </p>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          variants={itemVariants}
          className="p-8 bg-card-glass border border-white/10 backdrop-blur-md shadow-xl rounded-2xl md:p-12 relative z-10"
        >
          <div className="grid gap-12 md:grid-cols-2">

            {/* Left Info */}
            <div>
              <h3 className="mb-4 text-3xl font-bold text-white">
                Let's Discuss Your Project
              </h3>

              <p className="mb-8 text-softGray">
                Fill the form and I’ll contact you soon.
              </p>

              <div className="space-y-4">

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    📧
                  </div>
                  <div>
                    <p className="text-sm text-softGray">Email</p>
                    <a href={`mailto:${contact.email}`} className="text-white hover:text-primary transition-colors">
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    📱
                  </div>
                  <div>
                    <p className="text-sm text-softGray">Phone</p>
                    <a href={`tel:${contact.phone}`} className="text-white hover:text-primary transition-colors">
                      {contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    📍
                  </div>
                  <div>
                    <p className="text-sm text-softGray">Location</p>
                    <p className="text-white">{contact.location}</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Form */}
            <form action={`https://formsubmit.co/${contact.email}`} method="POST" className="space-y-6">
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New message from portfolio!" />
              <input type="hidden" name="_captcha" value="false" />
              
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-dark/50 border border-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder-softGray/50"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-dark/50 border border-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder-softGray/50"
              />

              <textarea
                name="message"
                rows="4"
                required
                placeholder="Project Details..."
                className="w-full px-4 py-3 bg-dark/50 border border-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder-softGray/50 resize-none"
              />

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-bold tracking-wide hover:opacity-90 transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)] transform hover:-translate-y-1"
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