import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="flex items-center justify-center gap-4">
          <img src="/images/goatech-logo.jpeg" alt="GOAT'ECH" className="w-12 h-12 object-contain rounded-xl border border-white/10" />
          <div className="text-left">
            <h4 className="text-xl font-black text-white uppercase tracking-widest">GURUPRASATH D</h4>
            <p className="text-amber-500 font-mono text-[10px] tracking-widest uppercase">Founder & CEO</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <a href="https://github.com/guru071" target="_blank" rel="noreferrer" className="text-sm font-bold text-gray-400 hover:text-amber-400 uppercase tracking-widest transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/guru-prasath-bb8328382" target="_blank" rel="noreferrer" className="text-sm font-bold text-gray-400 hover:text-amber-400 uppercase tracking-widest transition-colors">LinkedIn</a>
          <a href="https://instagram.com/maghs.guruprasath" target="_blank" rel="noreferrer" className="text-sm font-bold text-gray-400 hover:text-amber-400 uppercase tracking-widest transition-colors">Instagram (Pro)</a>
          <a href="https://instagram.com/infinity.maghs" target="_blank" rel="noreferrer" className="text-sm font-bold text-gray-400 hover:text-amber-400 uppercase tracking-widest transition-colors">Instagram (Personal)</a>
          <a href="mailto:technology@goatech.tech" className="text-sm font-bold text-gray-400 hover:text-amber-400 uppercase tracking-widest transition-colors">Email</a>
        </div>

        <div className="pt-8 border-t border-white/5 text-gray-500 text-xs font-mono tracking-widest">
          &copy; {new Date().getFullYear()} GURUPRASATH D. ALL RIGHTS RESERVED. <br/> BUILT WITH GOAT'ECH DESIGN SYSTEM.
        </div>
      </div>
    </footer>
  );
}
