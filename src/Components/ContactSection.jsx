import React from "react";
import Profile from "../Profile.json";
import FadeIn from "./FadeIn";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  const { contact, personal } = Profile;

  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/sheerazpaul",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/sheerazpaul",
      icon: Linkedin,
    },
  ];

  const buttonClasses =
    "rounded-full bg-[linear-gradient(123deg,#081425_7%,#4EB1C5_37%,#14B8A6_72%,#ffb781_100%)] text-white font-medium uppercase tracking-widest shadow-[0px_4px_4px_rgba(78,177,197,0.35),inset_4px_4px_12px_#3a9aae] outline outline-2 outline-white outline-offset-[-3px] cursor-pointer transition-transform duration-300 hover:scale-[1.02] active:scale-95";

  return (
    <section
      id="contact"
      className="relative bg-[#081425] px-5 sm:px-8 md:px-10 py-24 sm:py-28 overflow-hidden"
    >
      <FadeIn
        as="h2"
        className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]"
      >
        Contact
      </FadeIn>

      <div className="max-w-5xl mx-auto grid gap-8 lg:grid-cols-2 mt-16 sm:mt-20">
        <FadeIn className="space-y-6">
          <div className="border border-[#F8FAFC]/15 rounded-[28px] p-6 sm:p-8">
            <h3 className="text-2xl font-bold uppercase tracking-wide text-[#F8FAFC] mb-6">
              Get in Touch
            </h3>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#F8FAFC]/10 flex items-center justify-center shrink-0">
                  <Mail className="text-[#4EB1C5]" size={18} />
                </div>
                <div>
                  <p className="text-xs text-[#F8FAFC]/50 uppercase tracking-widest">Email</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm sm:text-base text-[#F8FAFC] hover:opacity-70 transition-opacity"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#F8FAFC]/10 flex items-center justify-center shrink-0">
                  <Phone className="text-[#4EB1C5]" size={18} />
                </div>
                <div>
                  <p className="text-xs text-[#F8FAFC]/50 uppercase tracking-widest">Phone</p>
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-sm sm:text-base text-[#F8FAFC] hover:opacity-70 transition-opacity"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#F8FAFC]/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-[#4EB1C5]" size={18} />
                </div>
                <div>
                  <p className="text-xs text-[#F8FAFC]/50 uppercase tracking-widest">Location</p>
                  <p className="text-sm sm:text-base text-[#F8FAFC]">{contact.location}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#F8FAFC]/20 text-sm text-[#F8FAFC] hover:bg-[#F8FAFC]/10 transition-colors duration-300"
                >
                  <s.icon size={16} className="text-[#14B8A6]" /> {s.name}
                </a>
              ))}
            </div>
          </div>

          <div className="border border-[#F8FAFC]/15 rounded-[28px] p-6 sm:p-8">
            <h3 className="text-2xl font-bold uppercase tracking-wide text-[#F8FAFC] mb-3">
              Resume
            </h3>
            <p className="text-sm text-[#F8FAFC]/60 font-light mb-5">
              View and download my full resume for a complete overview of my experience and skills.
            </p>
            <button
              onClick={() => {
                window.location.hash = "resume";
              }}
              className={`px-8 py-3 text-sm ${buttonClasses}`}
            >
              View & Download Resume
            </button>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="border border-[#F8FAFC]/15 rounded-[28px] p-6 sm:p-8 h-full">
            <h3 className="text-2xl font-bold uppercase tracking-wide text-[#F8FAFC] mb-2">
              Send a Message
            </h3>
            <p className="text-sm text-[#F8FAFC]/60 font-light mb-6">
              Fill the form and I'll get back to you within 24 hours.
            </p>

            <form
              action={`https://formsubmit.co/${contact.email}`}
              method="POST"
              className="space-y-5"
            >
              <input type="hidden" name="_subject" value="New message from portfolio!" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid gap-5 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-[#152031] border border-[#F8FAFC]/15 text-[#F8FAFC] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4EB1C5] focus:border-transparent placeholder-[#F8FAFC]/30 text-sm"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-[#152031] border border-[#F8FAFC]/15 text-[#F8FAFC] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4EB1C5] focus:border-transparent placeholder-[#F8FAFC]/30 text-sm"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full px-4 py-3 bg-[#152031] border border-[#F8FAFC]/15 text-[#F8FAFC] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4EB1C5] focus:border-transparent placeholder-[#F8FAFC]/30 text-sm"
              />

              <textarea
                name="message"
                rows="5"
                required
                placeholder="Project Details..."
                className="w-full px-4 py-3 bg-[#152031] border border-[#F8FAFC]/15 text-[#F8FAFC] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4EB1C5] focus:border-transparent placeholder-[#F8FAFC]/30 text-sm resize-none"
              />

              <button
                type="submit"
                className={`w-full flex items-center justify-center gap-2 px-8 py-4 text-sm ${buttonClasses}`}
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>
        </FadeIn>
      </div>

      <FadeIn className="text-center mt-16">
        <p className="text-[#F8FAFC]/40 text-sm">{contact.text}</p>
        <p className="text-[#F8FAFC]/40 text-sm mt-1">{personal.role}</p>
      </FadeIn>
    </section>
  );
};

export default ContactSection;
