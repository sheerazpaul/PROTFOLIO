import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ArrowLeft,
  ExternalLink,
  Loader2,
} from "lucide-react";
import profile from "../Profile.json";

const Resume = ({ onBack }) => {
  const printRef = useRef(null);
  const [downloading, setDownloading] = useState(false);
  const {
    personal,
    skills,
    ProjectsLink,
    "Work Experience": workExp,
    languages,
    education,
  } = profile;
  const projects = ProjectsLink || [];
  const experiences = workExp || [];
  const updatedLanguages = languages || [];
  const eduList = education || [];

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
      const ml = 22,
        mr = 22,
        mt = 25;
      const cw = pw - ml - mr;
      let y = mt;

      // Helper: section header
      const section = (title) => {
        y += 4;
        pdf.setDrawColor(0);
        pdf.setLineWidth(0.4);
        pdf.line(ml, y + 1, pw - mr, y + 1);
        pdf.setFontSize(11);
        pdf.setTextColor(0);
        pdf.setFont("helvetica", "bold");
        pdf.text(title.toUpperCase(), ml, y + 7);
        y += 12;
      };

      // Helper: write wrapped text
      const writeText = (txt, size = 9, color = "#000", font = "normal", indent = 0) => {
        pdf.setFontSize(size);
        pdf.setTextColor(color);
        pdf.setFont("helvetica", font);
        const lines = pdf.splitTextToSize(txt, cw - indent);
        lines.forEach((line) => {
          if (y + 6 > ph - 18) {
            pdf.addPage();
            y = mt;
          }
          pdf.text(line, ml + indent, y);
          y += 5.5;
        });
        if (lines.length > 1) y += 1;
      };

      // Helper: bullet point
      const bullet = (txt, size = 8.5, color = "#222") => {
        const indent = 5;
        const lines = pdf.splitTextToSize(txt, cw - indent - 4);
        lines.forEach((line, i) => {
          if (y + 6 > ph - 18) {
            pdf.addPage();
            y = mt;
          }
          pdf.setFontSize(size);
          pdf.setTextColor(color);
          pdf.setFont("helvetica", "normal");
          if (i === 0) pdf.text("•", ml, y);
          pdf.text(line, ml + indent + 4, y);
          y += 5;
        });
      };

      const loc = profile.contact?.location || personal.location || "";

      // ========== HEADER ==========
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(30);
      pdf.setTextColor(0);
      pdf.text(personal.name, ml, y);
      y += 10;
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(14);
      pdf.setTextColor(0);
      pdf.text(personal.role, ml, y);
      y += 7;
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(9);
      pdf.setTextColor("#444");
      pdf.text(`${personal.email}  |  ${personal.phone}  |  ${loc}`, ml, y);
      y += 5.5;
      pdf.text("github.com/sheerazpaul  |  linkedin.com/in/sheerazpaul", ml, y);
      y += 12;

      // ========== SUMMARY ==========
      section("Professional Summary");
      writeText(
        "Full Stack Developer with 1+ year of experience architecting and delivering production-grade web applications, " +
        "backed by one year of front-end expertise. Proven ability to build React-driven interfaces, Django-powered backends, " +
        "and RESTful APIs with a focus on clean architecture, performance optimization, and user-centric design. " +
        "Passionate about shipping scalable digital solutions that solve real-world problems.",
        9.5,
        "#222"
      );

      // ========== SKILLS ==========
      section("Technical Skills");
      allSkills.forEach((cat) => {
        if (y + 10 > ph - 18) {
          pdf.addPage();
          y = mt;
        }
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(9);
        pdf.setTextColor(0);
        pdf.text(cat.title.toUpperCase(), ml, y);
        y += 5.5;
        // Remove percentage from skill names
        const names = cat.items.map((s) => s.name).join("  •  ");
        writeText(names, 8.5, "#333", "normal", 3);
        y += 2;
      });

      // ========== EXPERIENCE ==========
      section("Experience");
      experiences.forEach((exp) => {
        if (y + 18 > ph - 18) {
          pdf.addPage();
          y = mt;
        }
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(11);
        pdf.setTextColor(0);
        pdf.text(exp.role, ml, y);
        y += 6;
        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(9.5);
        pdf.setTextColor(0);
        pdf.text(`${exp.company}  |  ${exp.duration}`, ml, y);
        y += 6.5;
        if (exp.description) writeText(exp.description, 9, "#333");
        (exp.responsibilities || []).forEach((r) => bullet(r, 9, "#333"));
        (exp.achievements || []).forEach((a) => bullet(a, 9, "#333"));
        y += 3;
      });

      // ========== EDUCATION ==========
      if (eduList && eduList.length > 0) {
        if (y + 12 > ph - 18) {
          pdf.addPage();
          y = mt;
        }
        section("Education");
        eduList.forEach((edu) => {
          pdf.setFont("helvetica", "bold");
          pdf.setFontSize(10);
          pdf.setTextColor(0);
          pdf.text(edu.degree, ml, y);
          y += 5.5;
          pdf.setFont("helvetica", "normal");
          pdf.setFontSize(9);
          pdf.setTextColor("#444");
          pdf.text(`${edu.institute}  |  ${edu.duration}`, ml, y);
          y += 8;
        });
      }

      // ========== LANGUAGES ==========
      if (updatedLanguages && updatedLanguages.length) {
        if (y + 12 > ph - 18) {
          pdf.addPage();
          y = mt;
        }
        section("Languages");
        const langStr = updatedLanguages.map((l) => `${l.name} (${l.proficiency})`).join("  •  ");
        writeText(langStr, 9, "#333");
        y += 3;
      }

      // ========== PROJECTS ==========
      if (y + 18 > ph - 18) {
        pdf.addPage();
        y = mt;
      }
      section("Projects");
      writeText(
        "A selection of web applications built with modern technologies.",
        8.5,
        "#444",
        "normal",
        0
      );
      y += 3;
      projects.forEach((p, i) => {
        if (y + 15 > ph - 18) {
          pdf.addPage();
          y = mt;
        }
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(10);
        pdf.setTextColor(0);
        pdf.text(`${i + 1}. ${p.title}`, ml, y);
        y += 6;
        if (p.tech && p.tech.length) {
          pdf.setFont("helvetica", "normal");
          pdf.setFontSize(8);
          pdf.setTextColor("#444");
          pdf.text(p.tech.join("  •  "), ml + 5, y);
          y += 5.5;
        }
        if (p.description && p.description !== ".") {
          writeText(p.description, 8.5, "#555", "normal", 5);
        }
        y += 2;
      });

      // ========== FOOTER ==========
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(7.5);
      pdf.setTextColor("#999");
      pdf.text("Generated from sheerazpaul.dev", pw / 2, ph - 12, { align: "center" });

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
      className="min-h-screen px-4 py-8 bg-gray-100 md:py-12"
    >
      <div className="max-w-5xl mx-auto">
        {/* Controls */}
        <div className="flex items-center justify-between mb-6 no-print">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 transition-colors hover:text-black"
          >
            <ArrowLeft size={16} /> Back to Portfolio
          </button>
          <button
            onClick={handleDownloadPdf}
            disabled={downloading}
            className="flex items-center gap-2 px-5 py-2.5 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-all shadow-sm disabled:opacity-60"
          >
            {downloading ? (
              <Loader2 size={15} className="animate-spin" />
            ) : (
              <Download size={15} />
            )}
            {downloading ? "Generating..." : "Download PDF"}
          </button>
        </div>

        {/* Resume Paper */}
        <div
          ref={printRef}
          className="overflow-hidden bg-white border border-gray-200 shadow-xl rounded-2xl"
        >
          {/* Header */}
          <div className="px-8 py-10 border-b border-gray-200 md:px-12 md:py-12">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-black md:text-4xl">
                  {personal.name.split(" ")[0]}{" "}
                  <span className="font-light">{personal.name.split(" ").slice(1).join(" ")}</span>
                </h1>
                <p className="mt-1 text-base font-medium text-gray-700">{personal.role}</p>
              </div>
              <div className="text-left md:text-right text-sm text-gray-600 space-y-1.5">
                <p className="flex items-center gap-2 md:justify-end">
                  <Mail size={14} className="shrink-0" /> {personal.email}
                </p>
                <p className="flex items-center gap-2 md:justify-end">
                  <Phone size={14} className="shrink-0" /> {personal.phone}
                </p>
                <p className="flex items-center gap-2 md:justify-end">
                  <MapPin size={14} className="shrink-0" />{" "}
                  {profile.contact?.location || personal.location}
                </p>
                <div className="flex gap-4 mt-2 md:justify-end">
                  <a
                    href="https://github.com/sheerazpaul"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-black transition-colors"
                  >
                    <Github size={14} /> GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/sheerazpaul"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-black transition-colors"
                  >
                    <Linkedin size={14} /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Sidebar */}
            <div className="w-full md:w-[34%] bg-gray-50 px-8 md:px-8 py-8 border-b md:border-b-0 md:border-r border-gray-200">
              {/* Skills */}
              <div className="mb-8">
                <h3 className="text-[10px] font-bold tracking-[2px] uppercase text-gray-700 mb-4">
                  Skills
                </h3>
                {allSkills.map((cat) => (
                  <div key={cat.title} className="mb-4">
                    <p className="text-[10px] font-semibold tracking-wide text-gray-500 uppercase mb-2">
                      {cat.title}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.items.map((s, i) => (
                        <span
                          key={i}
                          className="inline-block px-2.5 py-1 text-[10px] font-medium rounded-lg bg-gray-200 text-gray-800"
                        >
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Languages */}
              {updatedLanguages && updatedLanguages.length > 0 && (
                <div>
                  <h3 className="text-[10px] font-bold tracking-[2px] uppercase text-gray-700 mb-4">
                    Languages
                  </h3>
                  <div className="space-y-2">
                    {updatedLanguages.map((lang, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-sm text-black">{lang.name}</span>
                        <span className="text-[11px] text-gray-500">{lang.proficiency}</span>
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
                <h3 className="text-[10px] font-bold tracking-[2px] uppercase text-gray-700 mb-3">
                  Professional Summary
                </h3>
                <p className="text-sm leading-relaxed text-gray-700">
                  Full Stack Developer with 1+ year of experience architecting and delivering
                  production-grade web applications, backed by one year of front-end expertise.
                  Proven ability to build React-driven interfaces, Django-powered backends, and
                  RESTful APIs with a focus on clean architecture, performance optimization, and
                  user-centric design. Passionate about shipping scalable digital solutions that
                  solve real-world problems.
                </p>
              </div>

              {/* Experience */}
              <div className="mb-8">
                <h3 className="text-[10px] font-bold tracking-[2px] uppercase text-gray-700 mb-4">
                  Experience
                </h3>
                <div className="space-y-5">
                  {experiences.map((exp, i) => (
                    <div key={i} className="p-4 border border-gray-200 rounded-xl bg-gray-50/50">
                      <div className="flex flex-col gap-1 mb-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h4 className="text-sm font-bold text-black">{exp.role}</h4>
                          <p className="text-xs font-medium text-gray-600">{exp.company}</p>
                        </div>
                        <span className="text-[11px] text-gray-500 shrink-0">{exp.duration}</span>
                      </div>
                      <p className="mb-3 text-xs leading-relaxed text-gray-600">{exp.description}</p>
                      <ul className="space-y-1.5">
                        {(exp.responsibilities || []).map((r, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-gray-600">
                            <span className="w-1 h-1 rounded-full bg-gray-400 mt-1.5 shrink-0" /> {r}
                          </li>
                        ))}
                        {(exp.achievements || []).map((a, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-gray-600">
                            <span className="w-1 h-1 rounded-full bg-gray-400 mt-1.5 shrink-0" /> {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              {eduList && eduList.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-[10px] font-bold tracking-[2px] uppercase text-gray-700 mb-4">
                    Education
                  </h3>
                  <div className="space-y-4">
                    {eduList.map((edu, i) => (
                      <div key={i} className="p-4 border border-gray-200 rounded-xl bg-gray-50/50">
                        <div className="flex flex-col gap-1 mb-1 sm:flex-row sm:items-start sm:justify-between">
                          <h4 className="text-sm font-bold text-black">{edu.degree}</h4>
                          <span className="text-[11px] text-gray-500 shrink-0">{edu.duration}</span>
                        </div>
                        <p className="text-xs font-medium text-gray-600">{edu.institute}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Projects */}
              <div>
                <h3 className="text-[10px] font-bold tracking-[2px] uppercase text-gray-700 mb-3">
                  Projects
                </h3>
                <p className="mb-4 text-xs leading-relaxed text-gray-500">
                  A selection of web applications built with modern technologies.
                </p>
                <div className="space-y-3">
                  {projects.map((p, i) => (
                    <div key={i} className="p-4 border border-gray-200 rounded-xl bg-gray-50/50">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="text-sm font-bold text-black">{p.title}</h4>
                        {p.url && (
                          <a
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 transition-colors shrink-0 hover:text-black"
                          >
                            <ExternalLink size={13} />
                          </a>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-1.5 mb-1.5">
                        {(p.tech || []).map((t, j) => (
                          <span
                            key={j}
                            className="inline-block px-2 py-0.5 text-[10px] font-medium rounded bg-gray-200 text-gray-800"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      {p.description && p.description !== "." && (
                        <p className="text-xs leading-relaxed text-gray-600">{p.description}</p>
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