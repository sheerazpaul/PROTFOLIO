import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin, Download, ArrowLeft, ExternalLink, Loader2 } from "lucide-react";
import profile from "../Profile.json";

const Resume = ({ onBack }) => {
  const printRef = useRef(null);
  const [downloading, setDownloading] = useState(false);
  const { personal, skills, ProjectsLink, "Work Experience": workExp, certifications, languages } = profile;
  const projects = ProjectsLink || [];
  const experiences = workExp || [];

  const allSkills = [
    { title: "Frontend", items: skills.frontend },
    { title: "Backend", items: skills.backend },
    { title: "Tools & Platforms", items: skills.tools },
  ];

  const handleDownloadPdf = async () => {
    setDownloading(true);
    try {
      const { jsPDF } = await import("jspdf");
      const pdf = new jsPDF("p", "mm", "a4");
      const pw = pdf.internal.pageSize.getWidth();
      const ph = pdf.internal.pageSize.getHeight();
      const ml = 18, mr = 18, mt = 20;
      const cw = pw - ml - mr;
      let y = mt;

      const section = (title) => {
        y += 4;
        pdf.setFillColor(20, 184, 166);
        pdf.rect(ml, y, cw, 0.5, "F");
        pdf.setFontSize(9);
        pdf.setTextColor(20, 184, 166);
        pdf.setFont("helvetica", "bold");
        pdf.text(title.toUpperCase(), ml, y + 4);
        y += 8;
      };

      const writeText = (txt, size = 9, color = "#333", font = "normal", indent = 0) => {
        pdf.setFontSize(size);
        pdf.setTextColor(color);
        pdf.setFont("helvetica", font);
        const lines = pdf.splitTextToSize(txt, cw - indent);
        lines.forEach((line) => {
          if (y + 5 > ph - 15) { pdf.addPage(); y = mt; }
          pdf.text(line, ml + indent, y);
          y += 4.5;
        });
        if (lines.length > 1) y += 1;
      };

      const bullet = (txt, size = 8.5, color = "#555") => {
        const indent = 4;
        const lines = pdf.splitTextToSize(txt, cw - indent - 3);
        lines.forEach((line, i) => {
          if (y + 5 > ph - 15) { pdf.addPage(); y = mt; }
          pdf.setFontSize(size);
          pdf.setTextColor(color);
          pdf.setFont("helvetica", "normal");
          if (i === 0) pdf.text("•", ml, y);
          pdf.text(line, ml + indent + 3, y);
          y += 4.2;
        });
      };

      const loc = profile.contact?.location || personal.location || "";

      // Header
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(26);
      pdf.setTextColor(15, 23, 42);
      pdf.text(personal.name, ml, y);
      y += 7;
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(12);
      pdf.setTextColor(20, 184, 166);
      pdf.text(personal.role, ml, y);
      y += 5.5;
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(8);
      pdf.setTextColor(100, 116, 139);
      pdf.text(`${personal.email}  |  ${personal.phone}  |  ${loc}`, ml, y);
      y += 5;
      pdf.text("github.com/sheerazpaul  |  linkedin.com/in/sheerazpaul", ml, y);
      y += 7;

      // Summary
      section("Professional Summary");
      writeText(
        "Full Stack Developer with 1+ year of experience architecting and delivering production-grade web applications, " +
        "backed by 6 years of front-end expertise. Proven ability to build React-driven interfaces, Django-powered backends, " +
        "and RESTful APIs with a focus on clean architecture, performance optimization, and user-centric design.",
        9, "#444"
      );

      // Skills
      section("Technical Skills");
      allSkills.forEach((cat) => {
        if (y + 8 > ph - 15) { pdf.addPage(); y = mt; }
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(8);
        pdf.setTextColor(20, 184, 166);
        pdf.text(cat.title.toUpperCase(), ml, y);
        y += 4;
        const names = cat.items.map((s) => `${s.name} (${s.level}%)`).join("  •  ");
        writeText(names, 7.5, "#555", "normal", 2);
        y += 1;
      });

      // Experience
      section("Experience");
      experiences.forEach((exp) => {
        if (y + 15 > ph - 15) { pdf.addPage(); y = mt; }
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(10);
        pdf.setTextColor(15, 23, 42);
        pdf.text(exp.role, ml, y);
        y += 4.5;
        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(8.5);
        pdf.setTextColor(20, 184, 166);
        pdf.text(`${exp.company}  |  ${exp.duration}`, ml, y);
        y += 5;
        if (exp.description) writeText(exp.description, 8, "#555");
        (exp.responsibilities || []).forEach((r) => bullet(r, 8, "#555"));
        (exp.achievements || []).forEach((a) => bullet(a, 8, "#555"));
        y += 2;
      });

      // Certifications
      if (certifications && certifications.length) {
        section("Certifications");
        certifications.forEach((cert) => {
          if (y + 10 > ph - 15) { pdf.addPage(); y = mt; }
          pdf.setFont("helvetica", "bold");
          pdf.setFontSize(8.5);
          pdf.setTextColor(15, 23, 42);
          pdf.text(cert.name, ml, y);
          y += 4;
          pdf.setFont("helvetica", "normal");
          pdf.setFontSize(7.5);
          pdf.setTextColor(100, 116, 139);
          pdf.text(`${cert.issuer}  |  ${cert.date}`, ml, y);
          y += 5;
        });
      }

      // Languages
      if (languages && languages.length) {
        if (y + 10 > ph - 15) { pdf.addPage(); y = mt; }
        section("Languages");
        const langStr = languages.map((l) => `${l.name} (${l.proficiency})`).join("  •  ");
        writeText(langStr, 8, "#555");
        y += 2;
      }

      // Projects
      if (y + 15 > ph - 15) { pdf.addPage(); y = mt; }
      section("Projects");
      writeText(
        "A selection of web applications built with modern technologies.",
        7.5, "#555", "normal", 0
      );
      y += 2;
      projects.forEach((p, i) => {
        if (y + 12 > ph - 15) { pdf.addPage(); y = mt; }
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(9);
        pdf.setTextColor(15, 23, 42);
        pdf.text(`${i + 1}. ${p.title}`, ml, y);
        y += 4.5;
        if (p.tech && p.tech.length) {
          pdf.setFont("helvetica", "normal");
          pdf.setFontSize(7);
          pdf.setTextColor(20, 184, 166);
          pdf.text(p.tech.join("  •  "), ml + 3, y);
          y += 4;
        }
        if (p.description && p.description !== ".") {
          writeText(p.description, 7.5, "#666", "normal", 3);
        }
        y += 1.5;
      });

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(7);
      pdf.setTextColor(148, 163, 184);
      pdf.text("Generated from sheerazpaul.dev", pw / 2, ph - 8, { align: "center" });

      pdf.save("Sheeraz_Paul_Resume.pdf");
    } catch (err) {
      console.error("PDF download failed:", err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-dark py-8 md:py-12 px-4"
    >
      <div className="max-w-5xl mx-auto">
        <div className="no-print flex items-center justify-between mb-6">
          <button onClick={onBack} className="flex items-center gap-2 px-4 py-2 text-sm text-softGray hover:text-text transition-colors">
            <ArrowLeft size={16} /> Back to Portfolio
          </button>
          <button
            onClick={handleDownloadPdf}
            disabled={downloading}
            className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/30 disabled:opacity-60"
          >
            {downloading ? <Loader2 size={15} className="animate-spin" /> : <Download size={15} />}
            {downloading ? "Generating..." : "Download PDF"}
          </button>
        </div>

        <div ref={printRef} className="bg-card rounded-2xl shadow-2xl overflow-hidden border border-border">
          {/* Header */}
          <div className="bg-gradient-to-br from-dark via-dark to-dark border-b border-border px-8 md:px-12 py-10 md:py-12">
            <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-text tracking-tight">
                  {personal.name.split(" ")[0]}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    {personal.name.split(" ").slice(1).join(" ")}
                  </span>
                </h1>
                <p className="text-base font-medium text-primary mt-1">{personal.role}</p>
              </div>
              <div className="text-left md:text-right text-sm text-softGray space-y-1.5">
                <p className="flex items-center md:justify-end gap-2"><Mail size={14} className="text-primary shrink-0" /> {personal.email}</p>
                <p className="flex items-center md:justify-end gap-2"><Phone size={14} className="text-primary shrink-0" /> {personal.phone}</p>
                <p className="flex items-center md:justify-end gap-2"><MapPin size={14} className="text-primary shrink-0" /> {profile.contact?.location || personal.location}</p>
                <div className="flex gap-4 md:justify-end mt-2">
                  <a href="https://github.com/sheerazpaul" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-softGray hover:text-primary transition-colors">
                    <Github size={14} /> GitHub
                  </a>
                  <a href="https://linkedin.com/in/sheerazpaul" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-softGray hover:text-primary transition-colors">
                    <Linkedin size={14} /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Sidebar */}
            <div className="w-full md:w-[34%] bg-dark/50 px-8 md:px-8 py-8 border-b md:border-b-0 md:border-r border-border">
              <div className="mb-8">
                <h3 className="text-[10px] font-bold tracking-[2px] uppercase text-primary mb-4">Skills</h3>
                {allSkills.map((cat) => (
                  <div key={cat.title} className="mb-4">
                    <p className="text-[10px] font-semibold tracking-wide text-softGray uppercase mb-2">{cat.title}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.items.map((s, i) => (
                        <span key={i} className="inline-block px-2.5 py-1 text-[10px] font-medium rounded-lg bg-primary/10 text-primary border border-primary/20">
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Languages */}
              {languages && languages.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-[10px] font-bold tracking-[2px] uppercase text-primary mb-4">Languages</h3>
                  <div className="space-y-2">
                    {languages.map((lang, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-sm text-text">{lang.name}</span>
                        <span className="text-[11px] text-softGray">{lang.proficiency}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Certifications */}
              {certifications && certifications.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-[10px] font-bold tracking-[2px] uppercase text-primary mb-4">Certifications</h3>
                  <div className="space-y-3">
                    {certifications.map((cert, i) => (
                      <div key={i}>
                        <p className="text-xs font-medium text-text">{cert.name}</p>
                        <p className="text-[11px] text-softGray">{cert.issuer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Main Content */}
            <div className="w-full md:w-[66%] px-8 md:px-10 py-8">
              {/* Summary */}
              <div className="mb-8">
                <h3 className="text-[10px] font-bold tracking-[2px] uppercase text-primary mb-3">Professional Summary</h3>
                <p className="text-sm text-text/80 leading-relaxed">
                  Full Stack Developer with 1+ year of experience architecting and delivering production-grade web applications, backed by 6 years of front-end expertise. Proven ability to build React-driven interfaces, Django-powered backends, and RESTful APIs with a focus on clean architecture, performance optimization, and user-centric design. Passionate about shipping scalable digital solutions that solve real-world problems.
                </p>
              </div>

              {/* Experience */}
              <div className="mb-8">
                <h3 className="text-[10px] font-bold tracking-[2px] uppercase text-primary mb-4">Experience</h3>
                <div className="space-y-5">
                  {experiences.map((exp, i) => (
                    <div key={i} className="p-4 rounded-xl bg-dark/30 border border-border">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                        <div>
                          <h4 className="text-sm font-bold text-text">{exp.role}</h4>
                          <p className="text-xs font-medium text-primary">{exp.company}</p>
                        </div>
                        <span className="text-[11px] text-softGray shrink-0">{exp.duration}</span>
                      </div>
                      <p className="text-xs text-text/70 leading-relaxed mb-3">{exp.description}</p>
                      <ul className="space-y-1.5">
                        {(exp.responsibilities || []).map((r, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-text/70">
                            <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" /> {r}
                          </li>
                        ))}
                        {(exp.achievements || []).map((a, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-text/70">
                            <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" /> {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div>
                <h3 className="text-[10px] font-bold tracking-[2px] uppercase text-primary mb-3">Projects</h3>
                <p className="text-xs text-text/70 leading-relaxed mb-4">
                  A selection of web applications built with modern technologies.
                </p>
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
                      {p.description && p.description !== "." && (
                        <p className="text-xs text-text/70 leading-relaxed">{p.description}</p>
                      )}
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
