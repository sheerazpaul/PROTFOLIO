import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, Zap, Code, Layers } from "lucide-react";
import contact from "../Profile.json";

const achievements = [
  {
    icon: Zap,
    title: "Full-Stack Expertise",
    desc: "End-to-end development from pixel-perfect UIs to scalable APIs and databases.",
  },
  {
    icon: Code,
    title: "Modern Stack",
    desc: "React, Python, Django, REST/GraphQL — the tools that ship production-grade software.",
  },
  {
    icon: Layers,
    title: "Product Mindset",
    desc: "I don't just write code — I solve business problems and optimize for impact.",
  },
];

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
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-primary">
      {count}{suffix}
    </span>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

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
    <>
      <motion.section
        ref={ref}
        id="contact"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-4 py-24 bg-dark relative overflow-hidden"
      >
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />
        <div className="max-w-6xl mx-auto">

          {/* Stats Row */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-8 mb-24 max-w-2xl mx-auto text-center"
          >
            {[
              { end: 6, suffix: "+", label: "Projects" },
              { end: 8, suffix: "+", label: "Technologies" },
              { end: 1, suffix: "+", label: "Year Exp" },
            ].map((stat, i) => (
              <div key={i}>
                <StatCounter end={stat.end} suffix={stat.suffix} />
                <p className="text-softGray text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* What I Bring */}
          <motion.div variants={itemVariants} className="mb-24">
            <h3 className="mb-12 text-3xl font-bold text-center text-text md:text-4xl">
              What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Bring</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="p-6 bg-card-glass border border-border backdrop-blur-md rounded-2xl text-center hover:border-primary/30 transition-colors"
                  >
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-text mb-2">{item.title}</h4>
                    <p className="text-softGray text-sm leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            variants={itemVariants}
            className="p-8 bg-card-glass border border-border backdrop-blur-md shadow-xl rounded-2xl md:p-12 relative z-10"
          >
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-3xl font-bold text-text">
                  Let's Discuss Your Project
                </h3>
                <p className="mb-8 text-softGray">
                  Fill the form and I'll get back to you within 24 hours.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-softGray">Email</p>
                      <a href={`mailto:${contact.email}`} className="text-text hover:text-primary transition-colors">
                        {contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-softGray">Phone</p>
                      <a href={`tel:${contact.phone}`} className="text-text hover:text-primary transition-colors">
                        {contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-softGray">Location</p>
                      <p className="text-text">{contact.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <form action={`https://formsubmit.co/${contact.email}`} method="POST" className="space-y-6">
                <input type="hidden" name="_subject" value="New message from portfolio!" />
                <input type="hidden" name="_captcha" value="false" />

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-dark/50 border border-border text-text rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder-softGray/50"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-dark/50 border border-border text-text rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder-softGray/50"
                />

                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Project Details..."
                  className="w-full px-4 py-3 bg-dark/50 border border-border text-text rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder-softGray/50 resize-none"
                />

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-bold tracking-wide hover:opacity-90 transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)] transform hover:-translate-y-1 inline-flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  Send Message
                </button>

              </form>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Stats;