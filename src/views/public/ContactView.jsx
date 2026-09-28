import React from 'react';
import { Mail, MapPin, Send, Phone, MessageCircle } from 'lucide-react';

export default function ContactView() {
  const profiles = [
    { name: 'GitHub', url: 'https://github.com/guru071', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/guru-prasath-bb8328382', icon: 'linkedin' },
    { name: 'Instagram', url: 'https://instagram.com/infinity.maghs', icon: 'instagram' },
    { name: 'Instagram', url: 'https://instagram.com/maghs.guruprasath', icon: 'instagram' },
    { name: 'YouTube', url: 'https://youtube.com/@goat-u9m2v', icon: 'youtube' },
    { name: 'X', url: 'https://x.com/goatechmaghs', icon: 'x' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">Get in <span className="text-[#c9a84c]">Touch</span></h1>
        <p className="text-gray-400 font-medium text-lg">Let's discuss technology, architecture, or your next big project.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Info & Profiles */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="glass-card overflow-hidden">
            <div className="h-48 w-full relative">
              <img src="/images/team/guruprasath-d.jpg" alt="Guruprasath D" className="w-full h-full object-cover object-[center_25%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent"></div>
            </div>
            <div className="p-8 pt-4 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Guruprasath D</h3>
                <p className="text-[#c9a84c] text-sm font-bold uppercase tracking-widest mt-1">Founder & CEO</p>
              </div>

              <div className="space-y-4 border-t border-[#c9a84c]/10 pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-black border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Phone</p>
                    <a href="tel:+919514032653" className="text-white hover:text-[#c9a84c] transition-colors font-mono font-medium">+91 9514032653</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center">
                    <img src="https://cdn.simpleicons.org/whatsapp/25D366" alt="WhatsApp" className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">WhatsApp</p>
                    <a href="https://wa.me/919514032653" target="_blank" rel="noreferrer" className="text-white hover:text-[#25D366] transition-colors font-mono font-medium">+91 9514032653</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-black border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Email</p>
                    <a href="mailto:technology@goatech.tech" className="text-white hover:text-[#c9a84c] transition-colors font-mono font-medium">technology@goatech.tech</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-black border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Location</p>
                    <p className="text-white font-mono font-medium">Tamil Nadu, India</p>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="border-t border-[#c9a84c]/10 pt-6">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Connect With Me</p>
                <div className="grid grid-cols-2 gap-3">
                  {profiles.map((profile, i) => (
                    <a key={i} href={profile.url} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-black border border-[#c9a84c]/10 hover:border-[#c9a84c]/50 text-gray-400 hover:text-[#c9a84c] transition-all">
                      <img src={`https://cdn.simpleicons.org/${profile.icon}/c9a84c`} alt={profile.name} className="w-4 h-4" />
                      <span className="truncate text-[10px] font-bold uppercase tracking-wider">{profile.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-card p-10 h-full">
            <h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-8">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Name</label>
                  <input type="text" className="w-full bg-black border border-[#c9a84c]/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#c9a84c] transition-colors" placeholder="Your Name" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email</label>
                  <input type="email" className="w-full bg-black border border-[#c9a84c]/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#c9a84c] transition-colors" placeholder="your@email.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Subject</label>
                <input type="text" className="w-full bg-black border border-[#c9a84c]/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#c9a84c] transition-colors" placeholder="Project Inquiry" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Message</label>
                <textarea rows="6" className="w-full bg-black border border-[#c9a84c]/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#c9a84c] transition-colors" placeholder="How can I help you?"></textarea>
              </div>

              <button type="submit" className="btn-primary w-full mt-4">
                Send Message <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
