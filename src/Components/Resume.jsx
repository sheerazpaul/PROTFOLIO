import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin, Download, ArrowLeft, Globe, ExternalLink } from "lucide-react";
import profile from "../Profile.json";

const Resume = ({ onBack }) => {
  const printRef = useRef(null);
  const { personal, skills, "Work Experience": workExp, ProjectsLink } = profile;
  const experience = workExp?.[0];
  const projects = ProjectsLink?.slice(0, 5) || [];

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) { window.print(); return; }
    const style = Array.from(document.styleSheets)
      .map((s) => {
        try { return Array.from(s.cssRules || []).map((r) => r.cssText).join(""); }
        catch { return ""; }
      })
      .join("");
    const content = printRef.current?.innerHTML || "";
    printWindow.document.write(`
      <html><head><title>Sheeraz Paul — Resume</title>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
      <style>${style}</style>
      <style>
        body { background: #fff !important; padding: 0 !important; margin: 0 !important; }
        .no-print { display: none !important; }
        .resume-page { box-shadow: none !important; border-radius: 0 !important; margin: 0 !important; max-width: 100% !important; }
        .print-only { display: block !important; }
      </style>
      </head><body><div class="resume-page">${content}</div></body></html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => { printWindow.print(); }, 500);
  };

  const SkillBar = ({ name, level, color = "primary" }) => (
    <div className="mb-2.5">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs font-medium text-text">{name}</span>
        <span className="text-[10px] text-softGray">{level}%</span>
      </div>
      <div className="w-full h-1.5 bg-dark rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full rounded-full ${color === "secondary" ? "bg-secondary" : color === "text" ? "bg-text/40" : "bg-primary"}`}
        />
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-dark py-8 md:py-12 px-4"
    >
      <div className="max-w-[210mm] mx-auto">
        {/* Toolbar */}
        <div className="no-print flex items-center justify-between mb-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 text-sm text-softGray hover:text-text transition-colors"
          >
            <ArrowLeft size={16} /> Back to Portfolio
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/30"
          >
            <Download size={15} /> Save as PDF
          </button>
        </div>

        {/* Resume Page */}
        <div
          ref={printRef}
          className="resume-page bg-card rounded-2xl shadow-2xl overflow-hidden border border-border"
        >
          {/* Header */}
          <div className="bg-gradient-to-br from-dark via-dark to-dark border-b border-border px-8 md:px-12 py-10 md:py-12">
            <div className="flex flex-col md:flex-row justify-between md:items-start gap-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-text tracking-tight">
                  {personal.name.split(" ")[0]}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    {personal.name.split(" ").slice(1).join(" ")}
                  </span>
                </h1>
                <p className="text-base font-medium text-softGray mt-1.5">{personal.role}</p>
              </div>
              <div className="text-left md:text-right text-sm text-softGray space-y-1.5 leading-relaxed">
                <p className="flex items-center md:justify-end gap-2"><MapPin size={13} className="text-primary shrink-0" /> {profile.contact?.location || personal.location}</p>
                <p className="flex items-center md:justify-end gap-2"><Mail size={13} className="text-primary shrink-0" /> {personal.email}</p>
                <p className="flex items-center md:justify-end gap-2"><Phone size={13} className="text-primary shrink-0" /> {personal.phone}</p>
                <p className="flex items-center md:justify-end gap-2"><Globe size={13} className="text-primary shrink-0" /> {personal.role}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Sidebar */}
            <div className="w-full md:w-[34%] bg-dark/50 px-8 md:px-8 py-8 border-b md:border-b-0 md:border-r border-border">
              {/* Contact */}
              <div className="mb-8">
                <h3 className="text-[10px] font-bold tracking-[2px] uppercase text-primary mb-4">Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center"><Mail size={13} className="text-primary" /></div>
                    <span className="text-xs text-text">{personal.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center"><Phone size={13} className="text-primary" /></div>
                    <span className="text-xs text-text">{personal.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center"><MapPin size={13} className="text-primary" /></div>
                    <span className="text-xs text-text">{profile.contact?.location || personal.location}</span>
                  </div>
                </div>
                <div className="flex gap-4 mt-4">
                  <a href="https://github.com/sheerazpaul" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-softGray hover:text-primary transition-colors">
                    <Github size={13} /> GitHub
                  </a>
                  <a href="https://linkedin.com/in/sheerazpaul" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-softGray hover:text-primary transition-colors">
                    <Linkedin size={13} /> LinkedIn
                  </a>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-8">
                <h3 className="text-[10px] font-bold tracking-[2px] uppercase text-primary mb-4">Skills</h3>
                <div className="mb-4">
                  <p className="text-[10px] font-semibold tracking-wide text-softGray uppercase mb-2.5">Frontend</p>
                  {skills.frontend.map((s, i) => <SkillBar key={i} name={s.name} level={s.level} />)}
                </div>
                <div className="mb-4">
                  <p className="text-[10px] font-semibold tracking-wide text-softGray uppercase mb-2.5">Backend</p>
                  {skills.backend.map((s, i) => <SkillBar key={i} name={s.name} level={s.level} color="secondary" />)}
                </div>
                <div>
                  <p className="text-[10px] font-semibold tracking-wide text-softGray uppercase mb-2.5">Tools</p>
                  {skills.tools.map((s, i) => <SkillBar key={i} name={s.name} level={s.level} color="text" />)}
                </div>
              </div>

              {/* Languages */}
              <div>
                <h3 className="text-[10px] font-bold tracking-[2px] uppercase text-primary mb-4">Languages</h3>
                <div className="space-y-2.5">
                  <div>
                    <div className="flex justify-between text-xs"><span className="font-medium text-text">English</span><span className="text-softGray">Professional</span></div>
                    <div className="w-full h-1.5 bg-dark rounded-full overflow-hidden mt-1"><motion.div initial={{ width: 0 }} animate={{ width: "85%" }} transition={{ duration: 1 }} className="h-full rounded-full bg-primary" /></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs"><span className="font-medium text-text">Urdu</span><span className="text-softGray">Native</span></div>
                    <div className="w-full h-1.5 bg-dark rounded-full overflow-hidden mt-1"><motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1 }} className="h-full rounded-full bg-primary" /></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="w-full md:w-[66%] px-8 md:px-10 py-8">
              {/* Summary */}
              <div className="mb-8">
                <h3 className="text-[10px] font-bold tracking-[2px] uppercase text-primary mb-3">Professional Summary</h3>
                <p className="text-sm text-text/80 leading-relaxed">
                  Full Stack Developer with 1+ year of experience architecting and delivering production-grade web applications. Specialize in React-driven frontends and Django-powered backends with a strong focus on clean architecture, API design, and performance optimization. Proven track record of shipping 5+ client projects and reducing load times by 30% through advanced optimization techniques.
                </p>
              </div>

              {/* Experience */}
              <div className="mb-8">
                <h3 className="text-[10px] font-bold tracking-[2px] uppercase text-primary mb-4">Experience</h3>
                <div className="p-4 rounded-xl bg-dark/30 border border-border">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                    <div>
                      <h4 className="text-sm font-bold text-text">{experience?.role}</h4>
                      <p className="text-xs font-medium text-primary">{experience?.company}</p>
                    </div>
                    <span className="text-[11px] text-softGray shrink-0">{experience?.duration}</span>
                  </div>
                  <p className="text-xs text-text/70 leading-relaxed mb-3">{experience?.description}</p>
                  <ul className="space-y-1.5">
                    {experience?.responsibilities?.map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-text/70">
                        <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                        {r}
                      </li>
                    ))}
                    {experience?.achievements?.map((a, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-text/70">
                        <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Projects */}
              <div>
                <h3 className="text-[10px] font-bold tracking-[2px] uppercase text-primary mb-4">Featured Projects</h3>
                <div className="space-y-3">
                  {projects.map((p, i) => (
                    <div key={i} className="p-4 rounded-xl bg-dark/30 border border-border">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="text-sm font-bold text-text">{p.title}</h4>
                        {p.url && (
                          <a href={p.url} target="_blank" rel="noopener noreferrer" className="shrink-0 text-softGray hover:text-primary transition-colors">
                            <ExternalLink size={13} />
                          </a>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-1.5 mb-1.5">
                        {(p.tech || []).map((t, j) => (
                          <span key={j} className="inline-block px-2 py-0.5 text-[10px] font-medium rounded bg-primary/10 text-primary">{t}</span>
                        ))}
                      </div>
                      <p className="text-xs text-text/70 leading-relaxed">{p.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
