import React from 'react';

export default function Footer() {
  const profiles = [
    { name: 'GitHub', url: 'https://github.com/guru071', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/guru-prasath-bb8328382', icon: 'linkedin' },
    { name: 'Instagram', url: 'https://instagram.com/maghs.guruprasath', icon: 'instagram' },
    { name: 'Instagram', url: 'https://instagram.com/infinity.sparrow', icon: 'instagram' },
  ];

  return (
    <footer className="bg-[#111111] border-t border-[#c9a84c]/10 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="flex items-center justify-center gap-4">
          <img src="/images/goatech-logo.jpeg" alt="GOAT'ECH" className="w-12 h-12 object-contain rounded-xl border border-[#c9a84c]/20" />
          <div className="text-left">
            <h4 className="text-xl font-black text-white uppercase tracking-widest whitespace-nowrap">GURUPRASATH D</h4>
            <p className="text-[#c9a84c] font-mono text-[10px] tracking-widest uppercase">Founder & CEO</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {profiles.map(p => (
             <a key={p.url} href={p.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-[#c9a84c] uppercase tracking-widest transition-colors">
               <img src={`https://cdn.simpleicons.org/${p.icon}/888888`} alt={p.name} className="w-4 h-4" />
               {p.name}
             </a>
          ))}
          <a href="mailto:technology@goatech.tech" className="text-sm font-bold text-gray-400 hover:text-[#c9a84c] uppercase tracking-widest transition-colors">Email</a>
        </div>

        <div className="pt-8 border-t border-[#c9a84c]/10 text-gray-500 text-xs font-mono tracking-widest">
          &copy; {new Date().getFullYear()} GURUPRASATH D. ALL RIGHTS RESERVED. <br/> BUILT WITH GOAT'ECH DESIGN SYSTEM.
        </div>
      </div>
    </footer>
  );
}
