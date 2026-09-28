import SeoHead from "../../components/common/SeoHead";
import React from 'react';
import { ArrowRight, Code2, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomeView() {
  return (
    <>
      <SeoHead title="GURUPRASATH D | Founder & CEO of GOAT'ECH" />
    <div className="space-y-32 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Hero Section */}
      <div className="relative glass-card rounded-[2rem] border border-amber-500/20 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-black to-black z-0"></div>
        
        <div className="relative z-10 p-10 md:p-20 space-y-6 flex-1">
          <div className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs uppercase tracking-[0.2em] font-bold shadow-[0_0_15px_rgba(201,168,76,0.3)]">
            Full Stack Developer | Architect
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-black text-white leading-tight tracking-tight">
            I am <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-yellow-600 drop-shadow-[0_0_25px_rgba(201,168,76,0.5)] whitespace-nowrap">GURUPRASATH D</span>
          </h1>
          
          <p className="text-xl text-gray-400 font-light max-w-xl leading-relaxed">
            Founder and CEO of GOAT'ECH and MAGH'S. I build clean, functional, and impactful software solutions that push boundaries.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link to="/projects" className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 shadow-[0_0_20px_rgba(201,168,76,0.4)] transition-all uppercase tracking-widest text-sm group">
              View My Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="https://github.com/guru071" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-white/5 border border-white/10 hover:bg-amber-500/10 hover:border-amber-500/30 transition-all uppercase tracking-widest text-sm">
              <Terminal className="w-4 h-4" /> GitHub
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative z-10 w-full md:w-2/5 h-96 md:h-auto self-stretch bg-black border-l border-amber-500/20 hidden md:block">
           <img 
              src="/images/team/guruprasath-d1.jpeg" 
              alt="Guruprasath D" 
              className="w-full h-full object-cover object-[center_25%]"
              onError={(e) => { e.target.style.display='none'; }}
           />
           <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
        </div>
      </div>

      {/* Quick Stats / Bio */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-card p-10 rounded-3xl border border-white/5 hover:border-amber-500/30 transition-all space-y-4">
          <Code2 className="w-10 h-10 text-amber-500" />
          <h3 className="text-2xl font-bold text-white">Full Stack Engineering</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Expertise in React, Python, PostgreSQL, and modern cloud architecture. I build scalable products from the ground up.
          </p>
        </div>
        <div className="glass-card p-10 rounded-3xl border border-white/5 hover:border-amber-500/30 transition-all space-y-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center border border-amber-500/30">
            <span className="text-amber-400 font-bold">G</span>
          </div>
          <h3 className="text-2xl font-bold text-white">Founder & CEO</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Leading the vision at GOAT'ECH. Guiding Team ™SPARROW and shaping the future of our technology ecosystem.
          </p>
        </div>
        <div className="glass-card p-10 rounded-3xl border border-white/5 hover:border-amber-500/30 transition-all space-y-4">
          <Terminal className="w-10 h-10 text-amber-500" />
          <h3 className="text-2xl font-bold text-white">Open Source</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Creator of Nothing IDE and advocate for community-driven software development.
          </p>
        </div>
      </div>

    </div>
    </>
  );
}
