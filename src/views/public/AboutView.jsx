import SeoHead from "../../components/common/SeoHead";
import React from 'react';
import { BookOpen, MapPin, Award, Rocket, GraduationCap } from 'lucide-react';

export default function AboutView() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">About <span className="text-[#c9a84c]">Me</span></h1>
        <p className="text-gray-400 font-medium text-lg">My journey, education, and the drive to build the future.</p>
      </div>

      <div className="glass-card p-10 space-y-8">
        <div className="flex flex-col md:flex-row gap-8 items-center border-b border-white/10 pb-8">
          <img src="/images/team/guruprasath-d.jpg" alt="Guruprasath D" className="w-48 h-48 object-cover rounded-2xl border-2 border-[#c9a84c]/30 shadow-[0_0_20px_rgba(201,168,76,0.2)]" />
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-bold text-white uppercase tracking-wider">Guruprasath D</h2>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm font-bold uppercase tracking-widest text-gray-500">
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-[#c9a84c]"/> Tamil Nadu, India</span>
              <span className="flex items-center gap-1"><Rocket className="w-4 h-4 text-[#c9a84c]"/> Founder & CEO</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-2xl">
              Hello! I am Guruprasath D, a passionate technologist and the driving force behind GOAT'ECH and MAGH'S Technology. My mission is to build highly scalable, robust, and innovative digital products that push the boundaries of modern software engineering.
            </p>
          </div>
        </div>

        <div className="space-y-6 pt-4">
          <h3 className="text-xl font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <BookOpen className="text-[#c9a84c] w-6 h-6" /> The Journey
          </h3>
          <p className="text-gray-400 leading-relaxed">
            I have always been driven by an immense curiosity to understand how technology shapes our world. From my early days experimenting with code to founding my own tech ventures, my focus has remained constant: solving complex problems with clean, efficient architecture.
          </p>
          <p className="text-gray-400 leading-relaxed">
            In October 2024, I founded MAGH'S Technology, laying the foundation for what would eventually evolve into the GOAT'ECH ecosystem. Leading Team ™SPARROW and collaborating with brilliant minds, I architect products like MaghGo and TN Voting that stand the test of time.
          </p>
        </div>

        <div className="space-y-6 pt-8 border-t border-white/10">
          <h3 className="text-xl font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <GraduationCap className="text-[#c9a84c] w-6 h-6" /> Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="https://www.mailamengg.com/" target="_blank" rel="noreferrer" className="block p-6 rounded-2xl bg-black border border-[#c9a84c]/20 hover:border-[#c9a84c]/50 hover:bg-white/5 transition-all group">
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">College</h4>
              <p className="text-lg font-bold text-white group-hover:text-[#c9a84c] transition-colors">MAILAM ENGINEERING COLLEGE</p>
            </a>
            <a href="http://www.bonnenehruschool.com/" target="_blank" rel="noreferrer" className="block p-6 rounded-2xl bg-black border border-[#c9a84c]/20 hover:border-[#c9a84c]/50 hover:bg-white/5 transition-all group">
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">School</h4>
              <p className="text-lg font-bold text-white group-hover:text-[#c9a84c] transition-colors">BONNE NEHRU HR SEC SCHOOL</p>
            </a>
          </div>
        </div>

        <div className="space-y-6 pt-8 border-t border-white/10">
          <h3 className="text-xl font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Award className="text-[#c9a84c] w-6 h-6" /> Philosophy
          </h3>
          <p className="text-gray-400 leading-relaxed">
            I believe that great software is a blend of extreme performance and stunning aesthetics. Outside of building enterprise architectures and open-source tools like Nothing IDE, I constantly research emerging technologies, ensuring that GOAT'ECH remains the "Greatest Of All Time" in the tech landscape.
          </p>
        </div>
      </div>
    </div>
  );
    </>
}
