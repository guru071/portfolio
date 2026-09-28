import React from 'react';
import SeoHead from '../../components/common/SeoHead';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

export default function BlogView() {
  const posts = [
        {
      title: "My Main Project and Future is MaghGo",
      excerpt: "MaghGo represents the pinnacle of the GOAT'ECH vision. It is more than just a project—it is the foundation of our future digital ecosystem.",
      date: "September 28, 2026",
      category: "Vision",
      readTime: "10 min read"
    },
    {
      title: "Why Nothing IDE is the Future of Minimalist Development",
      excerpt: "An deep dive into the core philosophy of Nothing IDE, prioritizing speed and cognitive focus over bloated feature sets.",
      date: "August 15, 2026",
      category: "Open Source",
      readTime: "5 min read"
    }
  ];

  return (
    <>
      <SeoHead 
        title="Blog & Articles | GURUPRASATH D" 
        description="Read the latest articles, tutorials, and architectural deep-dives from Guruprasath D, Founder & CEO of GOAT'ECH." 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">Tech <span className="text-[#c9a84c]">Blog</span></h1>
          <p className="text-gray-400 font-light text-lg">Architectural insights, open-source updates, and leadership thoughts.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div key={i} className="glass-card p-8 rounded-3xl border border-white/5 hover:border-[#c9a84c]/40 hover:shadow-[0_0_30px_rgba(201,168,76,0.15)] transition-all group cursor-pointer flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
                  <span className="flex items-center gap-1 text-[#c9a84c] bg-[#c9a84c]/10 px-3 py-1 rounded-full"><Tag className="w-3 h-3" /> {post.category}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white group-hover:text-[#c9a84c] transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm pt-2">
                  {post.excerpt}
                </p>
              </div>
              
              <div className="pt-8 mt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">{post.readTime}</span>
                <span className="text-[#c9a84c] group-hover:text-amber-400 transition-colors flex items-center gap-1 text-sm font-bold uppercase tracking-widest">
                  Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
          
          {/* Coming Soon Placeholder */}
          <div className="glass-card p-8 rounded-3xl border border-dashed border-white/20 flex flex-col items-center justify-center text-center space-y-4 opacity-50">
             <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
               <span className="text-white text-xl">✍️</span>
             </div>
             <h3 className="text-lg font-bold text-white uppercase tracking-wider">More Articles Soon</h3>
             <p className="text-xs text-gray-400 uppercase tracking-widest font-mono">Working on new content...</p>
          </div>
        </div>

      </div>
    </>
  );
}
