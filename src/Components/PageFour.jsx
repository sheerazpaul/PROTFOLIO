import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, FileText, Download, Github, Linkedin } from "lucide-react";
import Profile from "../Profile.json";

const PageFour = () => {
  const { personal, contact, certifications, languages } = Profile;

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-full overflow-y-auto">
      <div className="px-6 md:px-12 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            id="contact"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={item} className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium mb-4">
                CONTACT
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-text">Let's Work <span className="text-primary">Together</span></h2>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-5">
              {/* Left - Contact Info + Resume + Certifications */}
              <div className="lg:col-span-2 space-y-6">
                {/* Contact Info */}
                <div className="p-6 bg-card-glass border border-border rounded-2xl backdrop-blur-md">
                  <h3 className="text-lg font-bold text-text mb-5">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Mail className="text-primary" size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-softGray">Email</p>
                        <a href={`mailto:${contact.email}`} className="text-sm text-text hover:text-primary transition-colors">
                          {contact.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Phone className="text-primary" size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-softGray">Phone</p>
                        <a href={`tel:${contact.phone}`} className="text-sm text-text hover:text-primary transition-colors">
                          {contact.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <MapPin className="text-primary" size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-softGray">Location</p>
                        <p className="text-sm text-text">{contact.location}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-6">
                    <a href="https://github.com/sheerazpaul" target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-card-glass border border-border rounded-xl text-sm text-softGray hover:text-primary hover:border-primary/40 transition-all">
                      <Github size={16} /> GitHub
                    </a>
                    <a href="https://linkedin.com/in/sheerazpaul" target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-card-glass border border-border rounded-xl text-sm text-softGray hover:text-primary hover:border-primary/40 transition-all">
                      <Linkedin size={16} /> LinkedIn
                    </a>
                  </div>
                </div>

                {/* Resume Download */}
                <div className="p-6 bg-card-glass border border-border rounded-2xl backdrop-blur-md">
                  <h3 className="text-lg font-bold text-text mb-3">Resume</h3>
                  <p className="text-xs text-softGray mb-4">Download my full resume for a complete overview of my experience and skills.</p>
                  <button
                    onClick={() => { window.location.hash = "resume"; }}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/30"
                  >
                    <FileText size={16} /> View & Download Resume
                  </button>
                </div>

                {/* Certifications */}
                {certifications && certifications.length > 0 && (
                  <div className="p-6 bg-card-glass border border-border rounded-2xl backdrop-blur-md">
                    <h3 className="text-lg font-bold text-text mb-4">Certifications</h3>
                    <div className="space-y-3">
                      {certifications.map((cert, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-1.5" />
                          <div>
                            <p className="text-sm font-medium text-text">{cert.name}</p>
                            <p className="text-xs text-softGray">{cert.issuer} — {cert.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Right - Contact Form */}
              <div className="lg:col-span-3">
                <div className="p-8 bg-card-glass border border-border rounded-2xl backdrop-blur-md h-full">
                  <h3 className="text-xl font-bold text-text mb-2">Send a Message</h3>
                  <p className="text-sm text-softGray mb-6">Fill the form and I'll get back to you within 24 hours.</p>

                  <form action={`https://formsubmit.co/${contact.email}`} method="POST" className="space-y-5">
                    <input type="hidden" name="_subject" value="New message from portfolio!" />
                    <input type="hidden" name="_captcha" value="false" />

                    <div className="grid gap-5 md:grid-cols-2">
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your Name"
                        className="w-full px-4 py-3 bg-dark/50 border border-border text-text rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder-softGray/50 text-sm"
                      />
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Your Email"
                        className="w-full px-4 py-3 bg-dark/50 border border-border text-text rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder-softGray/50 text-sm"
                      />
                    </div>

                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="w-full px-4 py-3 bg-dark/50 border border-border text-text rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder-softGray/50 text-sm"
                    />

                    <textarea
                      name="message"
                      rows="5"
                      required
                      placeholder="Project Details..."
                      className="w-full px-4 py-3 bg-dark/50 border border-border text-text rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder-softGray/50 text-sm resize-none"
                    />

                    <button
                      type="submit"
                      className="w-full px-6 py-3.5 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold tracking-wide hover:opacity-90 transition-all shadow-lg shadow-primary/30 inline-flex items-center justify-center gap-2"
                    >
                      <Send size={16} />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Footer note */}
            <motion.div variants={item} className="text-center mt-12">
              <p className="text-xs text-softGray">{contact.text}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PageFour;
