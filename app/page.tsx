"use client";
import { 
  Cpu, Github, Linkedin, Mail, Database, MoveRight, 
  Activity, Server, Code, Zap, Award, GraduationCap, 
  Terminal, Globe, ShieldCheck, CheckCircle2, Layout, Layers, Braces, Smartphone, TrendingUp
} from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// --- Precise Counter Engine ---
const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, 30);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);
  return <span ref={ref}>{count}{suffix}</span>;
};

const stackItems = [
  { title: "AI/Automation", items: "Python, FastAPI, RAG", icon: <Cpu />, color: "text-amber-500", bg: "bg-amber-500/10" },
  { title: "Cloud/DevOps", items: "AWS, Docker, CI/CD", icon: <Server />, color: "text-purple-500", bg: "bg-purple-500/10" },
  { title: "Backend Systems", items: "Node.js, PostgreSQL", icon: <Database />, color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { title: "Core Engineering", items: "Next.js, TypeScript", icon: <Code />, color: "text-blue-500", bg: "bg-blue-500/10" }
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.95]);

  return (
    <div className="bg-[#050505] min-h-screen text-slate-300 font-sans selection:bg-blue-600 overflow-x-hidden">
      
      {/* 🧭 NAVIGATION */}
      <nav className="fixed top-0 w-full z-[100] px-6 md:px-12 h-24 flex justify-between items-center pointer-events-none">
        <div className="pointer-events-auto font-black text-2xl tracking-tighter text-white uppercase italic">
          TOMIWA<span className="text-blue-600">.SYS</span>
        </div>
        <div className="pointer-events-auto">
           <a href="mailto:otenesams9@gmail.com" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">
             Get in Touch
           </a>
        </div>
      </nav>

      {/* 🏗️ HERO - Tightened to 120vh */}
      <section ref={heroRef} className="relative h-[120vh] px-6">
        <motion.div 
          style={{ opacity, scale }}
          className="sticky top-0 h-screen w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 max-w-7xl mx-auto"
        >
          <div className="relative w-64 h-64 md:w-[480px] md:h-[480px] group flex-shrink-0">
            <div className="absolute inset-0 bg-blue-600 rounded-[3rem] rotate-6 group-hover:rotate-0 transition-transform duration-700 ease-out" />
            <div className="absolute inset-0 bg-slate-900 rounded-[3rem] overflow-hidden border border-white/10 z-10 shadow-2xl">
              <img 
                src="/profile.jpg" 
                alt="Tomiwa Samuel"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 z-20 bg-white text-black px-6 py-4 rounded-2xl shadow-2xl font-mono text-[10px] font-black uppercase tracking-widest">
              Lvl. 5 // Senior
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left z-10">
            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
              <h1 className="text-5xl md:text-[100px] font-black tracking-tighter text-white leading-[0.8] mb-8 uppercase">
                TOMIWA <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-400">SAMUEL.</span>
              </h1>
              <h2 className="text-lg md:text-2xl font-bold text-slate-100 tracking-tight mb-8">
                Software Engineer <span className="text-blue-600">|</span> Cloud / DevOps Specialist <span className="text-blue-600">|</span> AI Automations
              </h2>
              <p className="text-slate-500 max-w-xl text-lg leading-relaxed mb-10 italic">
                "5+ years of architecting production-grade systems for startups and global enterprises, delivering scalable AI-driven solutions."
              </p>
              <div className="flex justify-center lg:justify-start">
                <a href="#systems" className="bg-white/5 border border-white/10 hover:border-blue-600 text-white px-10 py-4 rounded-full font-black uppercase text-xs tracking-widest transition-all inline-flex items-center gap-3">
                  View Deployments <MoveRight size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 💻 CORE SKILLS SECTION - Gap Closed */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex flex-col items-center md:items-start mb-12">
            <span className="text-blue-600 font-mono text-[10px] font-black tracking-[0.5em] uppercase italic mb-2">Capabilities</span>
            <h2 className="text-4xl font-black text-white tracking-tighter uppercase">Core Skills</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stackItems.map((item, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10, backgroundColor: "rgba(37, 99, 235, 0.1)", borderColor: "rgba(37, 99, 235, 0.3)" }}
              className="p-10 border border-white/5 bg-white/[0.02] rounded-[2.5rem] transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="font-black text-white uppercase tracking-tight mb-3 group-hover:text-blue-400 transition-colors">{item.title}</h3>
              <p className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-tighter leading-relaxed">
                {item.items}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 📊 PRODUCTION METRICS */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-y border-white/5 my-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
                { label: "Engineering Exp", val: 5, suffix: "+" },
                { label: "Revenue Growth", val: 30, suffix: "%" },
                { label: "API Optimization", val: 35, suffix: "%" },
                { label: "System Uptime", val: 99, suffix: "%" }
            ].map((stat, i) => (
                <div key={i}>
                    <div className="text-4xl md:text-6xl font-black text-white mb-2 font-mono tabular-nums">
                        <Counter value={stat.val} suffix={stat.suffix} />
                    </div>
                    <p className="text-[8px] md:text-[10px] font-black text-slate-600 uppercase tracking-[0.3em] italic">{stat.label}</p>
                </div>
            ))}
        </div>
      </section>

      {/* 🚀 SYSTEMS SECTION - Header Added */}
      <section id="systems" className="max-w-7xl mx-auto px-6 py-20 md:py-40">
        
        <div className="flex flex-col items-center md:items-start mb-24">
            <span className="text-blue-600 font-mono text-[10px] font-black tracking-[0.5em] uppercase italic mb-2">Portfolio</span>
            <h2 className="text-4xl font-black text-white tracking-tighter uppercase">Selected Projects</h2>
        </div>

        <div className="space-y-32 md:space-y-60">
        {[
          {
            title: "Nexus AI-Ops",
            tag: "INTERNAL AUTOMATION",
            desc: "A centralized AI operations hub for document intelligence and asynchronous task orchestration via autonomous agents.",
            impact: "30% Revenue Growth",
            tech: ["Python", "FastAPI", "OpenAI", "Docker"],
            src: "/nexus-demo.mp4", type: "video"
          },
          {
            title: "CognitoDesk",
            tag: "KNOWLEDGE SYSTEMS",
            desc: "Enterprise-grade knowledge automation platform using semantic search to automate complex support logic.",
            impact: "35% API Efficiency Boost",
            tech: ["ChromaDB", "Python", "React", "FastAPI"],
            src: "/cognitodesk.png", type: "image"
          },
          {
            title: "HireLogic",
            tag: "BETA RELEASE",
            desc: "AI-powered hiring platform that parses CVs and ranks candidates using explainable AI models.",
            impact: "99% System Reliability",
            tech: ["Next.js", "OpenAI", "Vector DB", "FastAPI"],
            src: "/hirelogic.png", type: "image"
          }
        ].map((p, i) => (
          <div key={i} className={`flex flex-col-reverse ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 md:gap-24 items-center`}>
            
            <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left">
              <span className="text-blue-600 font-mono text-[10px] font-black tracking-[0.5em] uppercase italic">System_0{i+1}</span>
              <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">{p.title}</h3>
              <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed italic">"{p.desc}"</p>
              
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 font-black text-[10px] uppercase tracking-widest">
                <TrendingUp size={14} /> {p.impact}
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-4">
                {p.tech.map(t => <span key={t} className="px-5 py-2 bg-white/5 rounded-xl text-[10px] font-black text-slate-400 uppercase tracking-widest">{t}</span>)}
              </div>
            </div>

            <motion.div 
               whileHover={{ scale: 1.02 }}
               className="flex-1 w-full aspect-video rounded-[2rem] md:rounded-[3.5rem] overflow-hidden relative group cursor-pointer border border-white/5 shadow-2xl"
            >
              {p.type === "video" ? (
                <video src={p.src} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
              ) : (
                <img src={p.src} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
              )}
              <div className="absolute top-6 right-6 md:top-10 md:right-10 bg-blue-600 text-white px-4 py-1.5 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest z-10">{p.tag}</div>
            </motion.div>
          </div>
        ))}
        </div>
      </section>

      {/* 🛠️ FULL STACK EXPERTISE */}
      <section className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
        <div className="text-center mb-16 md:mb-24">
            <h2 className="text-[10px] font-black tracking-[0.5em] text-blue-600 uppercase mb-4 italic">The Architecture</h2>
            <h3 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase">End-to-End Expertise</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
                { icon: <Layout />, label: "Frontend", tools: "Next.js, React, Tailwind, Framer Motion" },
                { icon: <Braces />, label: "Backend", tools: "Node.js, FastAPI, Go, GraphQL" },
                { icon: <Layers />, label: "Databases", tools: "PostgreSQL, MongoDB, Redis, ChromaDB" },
                { icon: <Smartphone />, label: "Mobile/Native", tools: "React Native, Progressive Web Apps" }
            ].map((skill, idx) => (
                <motion.div key={idx} whileHover={{ y: -5 }} className="bg-white/[0.01] p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-white/5 text-center group">
                    <div className="text-blue-600 flex justify-center mb-6 group-hover:scale-110 transition-transform">
                        {skill.icon}
                    </div>
                    <h4 className="text-white font-black uppercase tracking-widest text-sm mb-4">{skill.label}</h4>
                    <p className="text-slate-500 text-xs font-bold leading-relaxed">{skill.tools}</p>
                </motion.div>
            ))}
        </div>
      </section>

      {/* 💼 EXPERIENCE LOG */}
      <section className="max-w-5xl mx-auto px-6 py-40 border-t border-white/5">
        <h2 className="text-[10px] font-black tracking-[0.5em] text-slate-700 uppercase mb-24 text-center">Operational Trajectory</h2>
        <div className="space-y-6">
          {[
            { r: "Lead Software Developer", c: "CT Tech", d: "2020 — PRESENT", desc: "Architected e-commerce platform boosting revenue by 30%." },
            { r: "Node.js Developer (Contract)", c: "Remote", d: "2025", desc: "Increased API speed by 35% through performance tuning." },
            { r: "Web Developer & UX Lead", c: "Dicho Technology", d: "2025", desc: "Developing production web systems and managing deployments." }
          ].map((exp, i) => (
            <motion.div 
              key={i} 
              whileHover={{ x: 15, backgroundColor: "rgba(255, 255, 255, 0.02)" }}
              className="p-8 md:p-10 border border-white/5 bg-white/[0.01] rounded-[2rem] md:rounded-[3rem] flex flex-col md:flex-row justify-between items-start md:items-center group transition-all"
            >
              <div>
                <h4 className="text-xl md:text-2xl font-black text-white uppercase group-hover:text-blue-600 transition-colors tracking-tight">{exp.r}</h4>
                <p className="text-blue-500/60 font-black uppercase text-[10px] tracking-[0.2em] mb-4">{exp.c}</p>
                <p className="text-slate-500 text-sm max-w-md italic">"{exp.desc}"</p>
              </div>
              <span className="mt-4 md:mt-0 font-mono text-xs text-slate-700 font-black italic">[{exp.d}]</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🎓 EDUCATION & CERTS */}
      <section className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-white/5">
          <div className="bg-white/[0.01] p-8 md:p-12 rounded-[3rem] md:rounded-[4rem] border border-white/5 group hover:border-blue-600/30 transition-all">
              <GraduationCap className="text-blue-600 mb-8" size={32} />
              <h3 className="text-2xl font-black text-white uppercase mb-10 tracking-tighter">Academic Foundation</h3>
              <div className="space-y-10">
                  <div className="flex gap-6">
                      <div className="text-blue-600 font-black text-xl italic font-mono">01</div>
                      <div>
                        <p className="text-white font-black uppercase text-lg leading-tight">B.Eng – Biomedical Engineering</p>
                        <p className="text-slate-600 text-[10px] font-bold tracking-[0.2em] uppercase">University of Benin</p>
                      </div>
                  </div>
                  <div className="flex gap-6">
                      <div className="text-blue-600 font-black text-xl italic font-mono">02</div>
                      <div>
                        <p className="text-white font-black uppercase text-lg leading-tight">Diploma – Computer Software Engineering</p>
                        <p className="text-slate-600 text-[10px] font-bold tracking-[0.2em] uppercase">City Institute of Management</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="bg-white/[0.01] p-8 md:p-12 rounded-[3rem] md:rounded-[4rem] border border-white/5 group hover:border-blue-600/30 transition-all">
              <Award className="text-blue-600 mb-8" size={32} />
              <h3 className="text-2xl font-black text-white uppercase mb-10 tracking-tighter">Certifications</h3>
              <div className="grid grid-cols-1 gap-4">
                  {["IBM Certified Full Stack Developer", "AI/ML Engineering Essentials", "SQL Specialist — W3Schools"].map(cert => (
                      <div key={cert} className="px-6 py-5 bg-white/5 rounded-2xl text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-4 hover:bg-blue-600 hover:text-white transition-all cursor-default group/item">
                          <CheckCircle2 size={16} className="text-blue-600 group-hover/item:text-white" /> {cert}
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 📞 FOOTER */}
      <footer className="bg-white text-black py-24 md:py-40 px-6 rounded-t-[4rem] md:rounded-t-[6rem] text-center relative overflow-hidden">
          <h2 className="text-[6rem] md:text-[12rem] font-black tracking-tighter mb-10 opacity-5 select-none leading-none">TOMIWA</h2>
          <p className="text-xl md:text-2xl font-bold mb-12 uppercase tracking-tight italic">"Systems Architected for Production."</p>
          <motion.a 
            whileHover={{ scale: 1.1 }}
            href="mailto:otenesams9@gmail.com" 
            className="bg-black text-white px-10 py-5 md:px-16 md:py-7 rounded-full font-black text-lg md:text-xl hover:bg-blue-600 transition-all inline-flex items-center gap-4 shadow-2xl"
          >
              <Mail size={24} /> GET IN TOUCH
          </motion.a>
          <div className="mt-24 md:mt-40 font-mono text-[8px] md:text-[10px] tracking-[0.5em] text-slate-400 uppercase">
              Abuja, Nigeria // Portfolio v9.0 // &copy; 2025
          </div>
      </footer>
    </div>
  );
}