"use client";
import { 
  Terminal, Cpu, Cloud, ArrowUpRight, Github, Linkedin, Mail, 
  CheckCircle, Database, Layout, Code2, GraduationCap, Award, ExternalLink 
} from 'lucide-react';
import { motion } from 'framer-motion';

const heroProjects = [
  {
    title: "CognitoDesk",
    tag: "AI & Automation",
    desc: "AI-powered support and knowledge automation system.",
    impact: "Reduced human support workload by 45% in week 1",
    tech: ["FastAPI", "React", "ChromaDB", "OpenAI"],
    image: "/cognitodesk-main.png"
  },
  {
    title: "Nexus AI-Ops",
    tag: "Internal Hub",
    desc: "AI assistant for document summarization, report generation, and task creation.",
    impact: "Reduced internal task workload by 40% in week 1",
    tech: ["Python", "FastAPI", "PostgreSQL", "Vector DB"],
    image: "/nexus-aiops-hub.png"
  },
  {
    title: "HireLogic",
    tag: "HR Tech",
    desc: "Resume parsing, candidate ranking, and interview generation system.",
    impact: "Reduced hiring screening time by 65% in week 1",
    tech: ["Next.js", "OpenAI", "Vector DB"],
    image: "/hirelogic-screening.png"
  }
];

const otherProjects = [
  { name: "Automated Trading Bot", desc: "ML-driven market predictions & automated execution.", tech: "Python / WebSockets" },
  { name: "E-Commerce Platform", desc: "Cloud-hosted products & payment management.", tech: "Next.js / Stripe" },
  { name: "Real-Time Chat App", desc: "WebSocket-based messaging platform.", tech: "Node.js / Socket.io" },
  { name: "TaskFlow Pro", desc: "Workflow system with logs and task tracking.", tech: "React / PostgreSQL" }
];

export default function Home() {
  return (
    <div className="bg-[#fafafa] min-h-screen text-slate-900 selection:bg-blue-100 font-sans">
      
      {/* 1️⃣ HERO SECTION */}
      <nav className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
        <span className="font-black text-xl tracking-tighter">TOMIWA.SYS</span>
        <a href="mailto:otenesams9@gmail.com" className="bg-blue-600 text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-black transition-all">Contact Me</a>
      </nav>

      <header className="max-w-6xl mx-auto px-6 pt-20 pb-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-6">
            TOMIWA SAMUEL — <br/>
            <span className="text-blue-600">CLOUD & DEVOPS.</span>
          </h1>
          <p className="text-2xl text-slate-500 font-medium mb-10 max-w-3xl">
            Building AI-driven automation systems, cloud platforms, and full-stack solutions that deliver measurable business impact.
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all">View Projects</a>
            <div className="flex items-center gap-4 px-6">
              <Linkedin className="cursor-pointer hover:text-blue-600" />
              <Github className="cursor-pointer hover:text-blue-600" />
            </div>
          </div>
        </motion.div>
      </header>

      {/* 2️⃣ ABOUT / SUMMARY */}
      <section className="bg-white border-y border-slate-100 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-black uppercase tracking-widest text-blue-600 mb-6 font-mono">Professional Summary</h2>
          <p className="text-2xl md:text-3xl font-bold leading-snug text-slate-800">
            5+ years experience building production-grade AI and cloud systems. 
            Expert in Cloud + DevOps architectures and a leader in AI automation workflows.
          </p>
        </div>
      </section>

      {/* 3️⃣ CORE SKILLS / TECH STACK */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <h2 className="text-3xl font-black mb-16 tracking-tight">Core Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { cat: "AI / ML", tools: "Python, FastAPI, LLMs, HuggingFace, Vector DB", icon: <Cpu className="text-purple-600"/> },
            { cat: "Cloud / DevOps", tools: "AWS, Docker, Kubernetes, CI/CD, Vercel", icon: <Cloud className="text-blue-600"/> },
            { cat: "Backend", tools: "Node.js, Express, REST APIs, WebSockets", icon: <Database className="text-indigo-600"/> },
            { cat: "Frontend", tools: "React, Next.js, TypeScript, TailwindCSS", icon: <Layout className="text-emerald-600"/> }
          ].map((s, i) => (
            <div key={i} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{s.icon}</div>
              <h3 className="font-bold text-lg mb-2">{s.cat}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{s.tools}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4️⃣ FEATURED PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-black mb-12 tracking-tight">Hero Projects</h2>
        <div className="grid md:grid-cols-1 gap-16">
          {heroProjects.map((p, i) => (
            <div key={i} className="flex flex-col lg:flex-row gap-12 items-center group">
              <div className="flex-1 w-full rounded-[2rem] overflow-hidden border border-slate-200 shadow-2xl relative">
                 <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex-1">
                <span className="text-blue-600 font-black text-xs uppercase tracking-widest">{p.tag}</span>
                <h3 className="text-5xl font-black mt-2 mb-4">{p.title}</h3>
                <p className="text-lg text-slate-500 mb-6">{p.desc}</p>
                <div className="bg-emerald-50 border border-emerald-100 text-emerald-700 p-6 rounded-2xl font-bold mb-6 flex gap-3">
                    <CheckCircle /> {p.impact}
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map(t => <span key={t} className="text-[10px] font-bold px-3 py-1 bg-slate-100 rounded-full uppercase">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5️⃣ & 6️⃣ OTHER PROJECTS & GITHUB */}
      <section className="bg-slate-900 py-32 text-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="text-4xl font-black tracking-tight text-white">Other Implementations</h2>
            <button className="flex items-center gap-2 font-bold text-blue-400 hover:text-white transition-colors">
              VIEW GITHUB REPOSITORIES <ArrowUpRight />
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {otherProjects.map((p, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <h4 className="text-xl font-bold mb-2">{p.name}</h4>
                <p className="text-slate-400 text-sm mb-4">{p.desc}</p>
                <span className="text-[10px] font-mono text-blue-400">{p.tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7️⃣ EXPERIENCE / MENTORSHIP */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <h2 className="text-3xl font-black mb-12 tracking-tight">Experience & Mentorship</h2>
        <div className="border-l-2 border-slate-100 pl-8 ml-4">
          <div className="relative mb-16">
            <div className="absolute -left-[41px] top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
            <h3 className="text-xl font-bold">Lead Technical Instructor — NexaDev Academy</h3>
            <p className="text-blue-600 font-bold mb-4">2025 – Present</p>
            <ul className="text-slate-500 space-y-2 max-w-2xl">
              <li>• Leading training programs in AI, cloud, and full-stack engineering.</li>
              <li>• Mentoring students through code reviews and system design.</li>
              <li>• Supervising development teams and enforcing engineering best practices.</li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -left-[41px] top-0 w-4 h-4 bg-slate-300 rounded-full border-4 border-white"></div>
            <h3 className="text-xl font-bold">Lead Software Engineer — CT Tech</h3>
            <p className="text-slate-400 font-bold mb-4">2020 – Present</p>
            <p className="text-slate-500">Deployed e-commerce platforms on cloud infrastructure, increasing revenue by 30%.</p>
          </div>
        </div>
      </section>

      {/* 8️⃣ CERTIFICATIONS */}
      <section className="bg-white py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black mb-12 flex items-center gap-4"><Award className="text-blue-600" /> Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "IBM Certified Full Stack Developer (2025)",
              "AI/ML Engineering Essentials — NexaDev (2025)",
              "SQL — W3Schools (2020)",
              "ICT Facilitator — E-Creation Biz (2023)",
              "Introduction to Medical Software — Nile University (2024)"
            ].map((cert, i) => (
              <div key={i} className="flex items-center gap-4 p-4 border border-slate-100 rounded-xl">
                <CheckCircle className="text-blue-600" size={18} />
                <span className="font-bold text-slate-700">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9️⃣ CONTACT / FOOTER */}
      <footer className="max-w-6xl mx-auto px-6 py-32 text-center">
        <h2 className="text-6xl font-black mb-8 tracking-tighter">Let's build intelligent products together.</h2>
        <div className="flex flex-col items-center gap-4 mb-12">
            <p className="text-xl font-bold">otenesams9@gmail.com | 08038514353</p>
            <div className="flex gap-6">
                <Linkedin size={24} className="hover:text-blue-600 cursor-pointer"/>
                <Github size={24} className="hover:text-blue-600 cursor-pointer"/>
            </div>
        </div>
        <p className="text-xs font-mono text-slate-400 uppercase tracking-widest">
            © 2025 | All Right Reserved.
        </p>
      </footer>
    </div>
  );
}
