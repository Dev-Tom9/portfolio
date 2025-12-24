"use client";
import { Terminal, Cpu, Cloud, ArrowUpRight, Github, Linkedin, Mail, CheckCircle, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "CognitoDesk",
    tag: "AI & Automation",
    desc: "AI-powered customer support system utilizing document embeddings and LLMs.",
    impact: "Reduced human support workload by 45% in Week 1",
    tech: ["FastAPI", "React", "ChromaDB", "OpenAI"]
  },
  {
    title: "Nexus AI-Ops",
    tag: "Internal Tooling",
    desc: "Employee automation hub for report generation and task processing.",
    impact: "Reduced internal task workload by 40% via AI workflows",
    tech: ["Python", "FastAPI", "PostgreSQL", "Docker"]
  },
  {
    title: "HireLogic",
    tag: "AI HR Tech",
    desc: "AI screening system for resume parsing and candidate ranking.",
    impact: "Cut recruitment screening time by 65%",
    tech: ["Next.js", "OpenAI", "Vector DB"]
  }
];

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* NAVIGATION */}
      <nav className="flex justify-between items-center mb-24">
        <span className="font-bold text-xl tracking-tighter">TOMIWA.SYS</span>
        <div className="flex gap-6 text-sm font-medium text-gray-500">
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#experience" className="hover:text-blue-600">Experience</a>
          <a href="mailto:otenesams9@gmail.com" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-black transition-all">Hire Me</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="mb-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.85]">
            SOFTWARE <br /> ENGINEER<span className="text-blue-600">.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-xl mb-10 leading-relaxed">
            Cloud & DevOps Specialist. Building AI-driven systems and scalable infrastructure for the next generation of software.
          </p>
          <div className="flex gap-4">
            <Linkedin className="cursor-pointer hover:text-blue-600" onClick={() => window.open('https://linkedin.com')} />
            <Github className="cursor-pointer hover:text-blue-600" onClick={() => window.open('https://github.com')} />
          </div>
        </motion.div>
      </section>

      {/* METRICS BAR */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32">
        {[
          { label: "Experience", val: "5+ Years" },
          { label: "Impact", val: "65% Efficiency" },
          { label: "Systems", val: "Full-Stack" },
          { label: "Cloud", val: "AWS/DevOps" }
        ].map((m, i) => (
          <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <p className="text-xs font-bold text-gray-400 uppercase">{m.label}</p>
            <p className="text-2xl font-bold">{m.val}</p>
          </div>
        ))}
      </div>

      {/* PROJECTS */}
      <section id="projects" className="mb-32">
        <h2 className="text-4xl font-bold mb-12 tracking-tight">Featured Systems</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="project-card group">
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-bold bg-blue-50 text-blue-600 px-3 py-1 rounded-full uppercase">{p.tag}</span>
                <ArrowUpRight className="text-gray-300 group-hover:text-blue-600 transition-colors" />
              </div>
              <h3 className="text-3xl font-bold mb-3">{p.title}</h3>
              <p className="text-gray-500 mb-6 leading-relaxed">{p.desc}</p>
              <div className="bg-green-50 text-green-700 p-4 rounded-xl flex items-center gap-3 mb-6 font-medium text-sm">
                <CheckCircle size={18} /> {p.impact}
              </div>
              <div className="flex flex-wrap gap-2">
                {p.tech.map(t => <span key={t} className="text-[10px] font-bold border border-gray-200 px-2 py-1 rounded uppercase text-gray-400">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <footer className="border-t border-gray-100 pt-20 pb-10 flex flex-col items-center">
        <h2 className="text-5xl font-bold mb-6">Let's build.</h2>
        <p className="text-gray-500 mb-10">otenesams9@gmail.com | 08038514353</p>
        <p className="text-xs text-gray-300 uppercase tracking-widest font-bold">Deployed via CI/CD • AWS/Vercel Stack</p>
      </footer>
    </div>
  );
}
