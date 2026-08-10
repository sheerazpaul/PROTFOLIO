import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import Profile from "../Profile.json";

const Contact = () => {
  const { personal, contact, socialLinks } = Profile;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 800));
    const subject = encodeURIComponent(`Portfolio inquiry from ${data.name}`);
    const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`);
    window.open(`mailto:${contact.email}?subject=${subject}&body=${body}`, "_self");
    toast.success("Opening your mail client — talk soon!");
    reset();
  };

  const info = [
    { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone}` },
    { icon: MapPin, label: "Location", value: contact.location },
  ];

  const socialIcons = { github: Github, linkedin: Linkedin };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let's build something <span className="text-gradient">great together</span>
            </>
          }
          description="Have a project in mind or just want to say hi? My inbox is always open."
        />

        <div className="grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5" delay={0.1}>
            <div className="flex h-full flex-col gap-6">
              <SpotlightCard className="glass rounded-3xl p-7">
                <div className="flex items-center gap-3 rounded-2xl border border-accent/20 bg-accent/10 p-4">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold text-ink">Available for freelance work</p>
                    <p className="text-xs text-muted">Currently accepting new projects</p>
                  </div>
                </div>
              </SpotlightCard>

              {info.map((item) => {
                const Icon = item.icon;
                const inner = (
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-background/60 text-primary">
                      <Icon size={19} />
                    </span>
                    <div>
                      <p className="text-xs text-muted">{item.label}</p>
                      <p className="text-sm font-medium text-ink">{item.value}</p>
                    </div>
                  </div>
                );
                return (
                  <SpotlightCard key={item.label} className="glass rounded-2xl p-5 transition-colors duration-300 hover:border-primary/30">
                    {item.href ? (
                      <a href={item.href} className="block">
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </SpotlightCard>
                );
              })}

              <div className="mt-auto flex gap-3">
                {socialLinks.map((s) => {
                  const Icon = socialIcons[s.icon] || Sparkles;
                  return (
                    <Magnetic key={s.name} strength={0.25}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.name}
                        className="flex h-12 flex-1 items-center justify-center gap-2 rounded-2xl glass text-muted transition-all duration-300 hover:text-ink hover:border-primary/40"
                      >
                        <Icon size={17} /> {s.name}
                      </a>
                    </Magnetic>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.2}>
            <SpotlightCard className="glass h-full rounded-3xl p-8 md:p-10">
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    {...register("name", { required: "Please enter your name" })}
                    placeholder="John Doe"
                    className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3.5 text-sm text-ink outline-none transition-all duration-300 placeholder:text-muted/50 focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>}
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Please enter your email",
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Please enter a valid email" },
                    })}
                    placeholder="john@example.com"
                    className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3.5 text-sm text-ink outline-none transition-all duration-300 placeholder:text-muted/50 focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    {...register("message", {
                      required: "Please write a message",
                      minLength: { value: 10, message: "Message should be at least 10 characters" },
                    })}
                    placeholder="Tell me about your project…"
                    className="w-full resize-none rounded-2xl border border-border bg-background/60 px-4 py-3.5 text-sm text-ink outline-none transition-all duration-300 placeholder:text-muted/50 focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message.message}</p>}
                </div>

                <div className="sm:col-span-2">
                  <Magnetic className="sm:w-fit">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-primary to-secondary px-8 py-4 font-display text-sm font-semibold text-white shadow-xl shadow-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40 disabled:opacity-60 sm:w-auto cursor-pointer"
                    >
                      <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                      {isSubmitting ? "Sending…" : "Send Message"}
                    </button>
                  </Magnetic>
                </div>
              </form>

              <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                <p className="text-xs text-muted">Prefer direct email?</p>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-sm font-medium text-primary transition-colors hover:text-secondary"
                >
                  {personal.email}
                </a>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
