import SeoHead from "../../components/common/SeoHead";
import React from 'react';
import { Mail, MapPin, Send, Phone, MessageCircle, Github, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';

export default function ContactView() {
  const profiles = [
    { name: 'GitHub', url: 'https://github.com/guru071', icon: Github },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/guru-prasath-bb8328382', icon: Linkedin },
    { name: 'Instagram', url: 'https://instagram.com/infinity.sparrow', icon: Instagram },
    { name: 'Instagram', url: 'https://instagram.com/maghs.guruprasath', icon: Instagram },
    { name: 'YouTube', url: 'https://youtube.com/@goat-u9m2v', icon: Youtube },
    { name: 'X', url: 'https://x.com/goatechmaghs', icon: Twitter },
  ];

  return (
    <>
      <SeoHead title="Contact | GURUPRASATH D" />
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
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
                      <profile.icon className="w-4 h-4" />
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

              <button type="submit" className="btn-primary w-full mt-4 flex items-center justify-center gap-2 py-4 rounded-xl font-bold uppercase tracking-widest text-sm">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
