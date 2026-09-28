import React from 'react';
import { ExternalLink, Github, TerminalSquare } from 'lucide-react';

export default function ProjectsView() {
  const projects = [
    {
      title: "Nothing IDE",
      description: "An open-source Integrated Development Environment tailored for speed and minimalist developers.",
      tech: ["Python", "Open Source", "Desktop"],
      link: "https://github.com/guru071/Nothing-IDE",
      isGithub: true
    },
    {
      title: "MaghGo",
      description: "The first premium product by GOAT'ECH. A sophisticated platform redefining its category.",
      tech: ["React", "FastAPI", "PostgreSQL"],
      link: "https://maghgo.goatech.tech",
      isGithub: false
    },
    {
      title: "TN Voting",
      description: "A highly secure data modeling project designed for robust election metrics and structural integrity.",
      tech: ["Architecture", "Modeling"],
      link: "https://tnvoting.goatech.tech",
      isGithub: false
    },
    {
      title: "Smart Aqua",
      description: "A hackathon project developed during college to tackle intelligent water management via technology.",
      tech: ["IoT / Data", "Hackathon"],
      link: "https://aqua.goatech.tech",
      isGithub: false
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">Featured <span className="text-amber-500">Projects</span></h1>
        <p className="text-gray-400 font-light text-lg">Products and open-source software I've built and architected.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <div key={i} className="glass-card p-10 rounded-[2rem] border border-white/5 hover:border-amber-500/40 hover:shadow-[0_0_30px_rgba(201,168,76,0.15)] transition-all group flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <TerminalSquare className="w-10 h-10 text-amber-500/50 group-hover:text-amber-400 transition-colors" />
                <div className="flex gap-2">
                  {project.tech.map((t, index) => (
                    <span key={index} className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white group-hover:text-amber-400 transition-colors">{project.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="pt-6 border-t border-white/10">
              <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-bold uppercase tracking-widest text-sm transition-colors">
                {project.isGithub ? <><Github className="w-5 h-5"/> View Source</> : <><ExternalLink className="w-5 h-5"/> Launch Project</>}
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
