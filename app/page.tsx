import React from 'react';
import { Terminal, Cpu, Cloud, Globe, ArrowRight, CheckCircle } from 'lucide-react';

export default function Portfolio() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen font-sans">
      {/* HERO SECTION */}
      <section className="h-screen flex flex-col justify-center px-10 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 text-blue-400 mb-4">
          <Terminal size={20} />
          <span className="font-mono">Ready to deploy...</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-4">TOMIWA SAMUEL</h1>
        <h2 className="text-2xl md:text-3xl text-gray-400 mb-8">
          Software Engineer | <span className="text-white">Cloud & DevOps Specialist</span> | AI Automations
        </h2>
        <div className="flex gap-4">
          <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 flex items-center gap-2">
            View Projects <ArrowRight size={18} />
          </button>
          <button className="border border-gray-700 px-8 py-3 rounded-full font-bold hover:bg-gray-900">
            Contact Me
          </button>
        </div>
      </section>

      {/* CORE SKILLS SECTION */}
      <section className="py-20 bg-[#111] px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <div className="p-6 border border-gray-800 rounded-2xl">
            <Cpu className="text-purple-500 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">AI & Automation</h3>
            <p className="text-gray-400">Python, FastAPI, LLMs, Vector DBs (Chroma/Pinecone).</p>
          </div>
          <div className="p-6 border border-gray-800 rounded-2xl">
            <Cloud className="text-blue-500 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Cloud & DevOps</h3>
            <p className="text-gray-400">AWS, Docker, Kubernetes, CI/CD, Linux.</p>
          </div>
          <div className="p-6 border border-gray-800 rounded-2xl">
            <Globe className="text-green-500 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Full-Stack Systems</h3>
            <p className="text-gray-400">Next.js, Node.js, TypeScript, PostgreSQL.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
