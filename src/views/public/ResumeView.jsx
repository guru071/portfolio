import React from 'react';
import { Briefcase, GraduationCap, Code, Server, Database } from 'lucide-react';

export default function ResumeView() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-20">
      
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">Resume & <span className="text-amber-500">Experience</span></h1>
        <p className="text-gray-400 font-light text-lg">My professional journey as a developer and technology founder.</p>
      </div>

      {/* Experience */}
      <div className="space-y-8">
        <div className="flex items-center gap-4 border-b border-white/10 pb-4">
          <Briefcase className="w-8 h-8 text-amber-500" />
          <h2 className="text-3xl font-bold text-white">Experience</h2>
        </div>

        <div className="space-y-6">
          <div className="glass-card p-8 rounded-2xl border border-amber-500/20 relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 to-yellow-600"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">Founder & CEO</h3>
                <p className="text-lg text-amber-500/80 font-mono font-bold">GOAT'ECH</p>
              </div>
              <div className="text-gray-500 font-mono text-sm mt-2 sm:mt-0 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                FEB 2026 - PRESENT
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Leading the technological vision, business strategy, and product architecture for a premium software development company in India. Orchestrating Team SPARROW™ in the development of sophisticated platforms like MaghGo and TN Voting.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl border border-white/10 relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/20"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">Founder</h3>
                <p className="text-lg text-amber-500/80 font-mono font-bold">MAGH'S Technology</p>
              </div>
              <div className="text-gray-500 font-mono text-sm mt-2 sm:mt-0 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                OCT 2024 - PRESENT
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Founded the MAGH'S technology ecosystem. Developed initial infrastructure and established a core engineering culture that evolved into GOAT'ECH.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Matrix */}
      <div className="space-y-8">
        <div className="flex items-center gap-4 border-b border-white/10 pb-4">
          <Code className="w-8 h-8 text-amber-500" />
          <h2 className="text-3xl font-bold text-white">Technical Arsenal</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-2xl border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <Code className="text-amber-400 w-6 h-6" />
              <h4 className="text-xl font-bold text-white">Frontend</h4>
            </div>
            <ul className="space-y-2 text-gray-400 font-mono text-sm">
              <li>React.js</li>
              <li>JavaScript (ES6+)</li>
              <li>Tailwind CSS</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </div>
          
          <div className="glass-card p-6 rounded-2xl border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <Server className="text-amber-400 w-6 h-6" />
              <h4 className="text-xl font-bold text-white">Backend</h4>
            </div>
            <ul className="space-y-2 text-gray-400 font-mono text-sm">
              <li>Python</li>
              <li>FastAPI</li>
              <li>Node.js</li>
              <li>RESTful APIs</li>
            </ul>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <Database className="text-amber-400 w-6 h-6" />
              <h4 className="text-xl font-bold text-white">Infrastructure</h4>
            </div>
            <ul className="space-y-2 text-gray-400 font-mono text-sm">
              <li>PostgreSQL</li>
              <li>Git / GitHub</li>
              <li>Vercel / Hosting</li>
              <li>System Architecture</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}
