import SeoHead from "../../components/common/SeoHead";
import React from 'react';
import { Briefcase, Code, Database, Layout, Terminal } from 'lucide-react';

export default function ResumeView() {
  const coreLanguages = [
    { name: 'Python', icon: 'python' },
    { name: 'C', icon: 'c' },
    { name: 'C++', icon: 'cplusplus' },
    { name: 'Java', icon: 'openjdk' },
    { name: 'JavaScript', icon: 'javascript' }
  ];

  const frontend = [
    { name: 'HTML5', icon: 'html5' },
    { name: 'CSS3', icon: 'css3' },
    { name: 'React', icon: 'react' },
    { name: 'Tailwind', icon: 'tailwindcss' }
  ];

  const backend = [
    { name: 'SQL', icon: 'sqlite' },
    { name: 'MySQL', icon: 'mysql' },
    { name: 'PostgreSQL', icon: 'postgresql' },
    { name: 'FastAPI', icon: 'fastapi' }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-20">
      
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">Skills & <span className="text-[#c9a84c]">Experience</span></h1>
        <p className="text-gray-400 font-medium text-lg">My technical arsenal and professional journey as a founder.</p>
      </div>

      {/* Skills Matrix */}
      <div className="space-y-8">
        <div className="flex items-center gap-4 border-b border-white/10 pb-4">
          <Code className="w-8 h-8 text-[#c9a84c]" />
          <h2 className="text-3xl font-bold text-white">Technical Arsenal</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="glass-card p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="text-[#c9a84c] w-8 h-8" />
              <h4 className="text-xl font-bold text-white uppercase tracking-wider">Core Languages</h4>
            </div>
            <div className="flex flex-col gap-3">
              {coreLanguages.map(skill => (
                <div key={skill.name} className="flex items-center gap-3 px-4 py-3 bg-black border border-[#c9a84c]/20 hover:border-[#c9a84c]/50 transition-colors rounded-xl">
                  <img src={`https://cdn.simpleicons.org/${skill.icon}/c9a84c`} alt={skill.name} className="w-5 h-5" />
                  <span className="text-sm font-bold text-white tracking-wider uppercase">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="glass-card p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Layout className="text-[#c9a84c] w-8 h-8" />
              <h4 className="text-xl font-bold text-white uppercase tracking-wider">Frontend</h4>
            </div>
            <div className="flex flex-col gap-3">
              {frontend.map(skill => (
                <div key={skill.name} className="flex items-center gap-3 px-4 py-3 bg-black border border-[#c9a84c]/20 hover:border-[#c9a84c]/50 transition-colors rounded-xl">
                  <img src={`https://cdn.simpleicons.org/${skill.icon}/c9a84c`} alt={skill.name} className="w-5 h-5" />
                  <span className="text-sm font-bold text-white tracking-wider uppercase">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Database className="text-[#c9a84c] w-8 h-8" />
              <h4 className="text-xl font-bold text-white uppercase tracking-wider">Database & Backend</h4>
            </div>
            <div className="flex flex-col gap-3">
              {backend.map(skill => (
                <div key={skill.name} className="flex items-center gap-3 px-4 py-3 bg-black border border-[#c9a84c]/20 hover:border-[#c9a84c]/50 transition-colors rounded-xl">
                  <img src={`https://cdn.simpleicons.org/${skill.icon}/c9a84c`} alt={skill.name} className="w-5 h-5" />
                  <span className="text-sm font-bold text-white tracking-wider uppercase">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="space-y-8">
        <div className="flex items-center gap-4 border-b border-white/10 pb-4">
          <Briefcase className="w-8 h-8 text-[#c9a84c]" />
          <h2 className="text-3xl font-bold text-white">Experience</h2>
        </div>

        <div className="space-y-6">
          <div className="glass-card p-10 relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#c9a84c]"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#c9a84c] transition-colors uppercase tracking-wider">Founder & CEO</h3>
                <p className="text-lg text-gray-400 font-bold tracking-widest uppercase mt-1">GOAT'ECH</p>
              </div>
              <div className="text-[#c9a84c] font-bold text-sm mt-2 sm:mt-0 bg-[#c9a84c]/10 px-4 py-2 rounded-lg border border-[#c9a84c]/20 tracking-widest uppercase">
                FEB 2026 - PRESENT
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Leading the technological vision, business strategy, and product architecture for a premium software development company in India. Orchestrating Team ™SPARROW in the development of sophisticated platforms like MaghGo and TN Voting.
            </p>
          </div>

          <div className="glass-card p-10 relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-500"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-gray-300 transition-colors uppercase tracking-wider">Founder</h3>
                <p className="text-lg text-gray-400 font-bold tracking-widest uppercase mt-1">MAGH'S Technology</p>
              </div>
              <div className="text-gray-400 font-bold text-sm mt-2 sm:mt-0 bg-white/5 px-4 py-2 rounded-lg border border-white/10 tracking-widest uppercase">
                OCT 2024 - PRESENT
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Founded the MAGH'S technology ecosystem. Developed initial infrastructure and established a core engineering culture that evolved into GOAT'ECH.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
    </>
}
