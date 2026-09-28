import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Resume', href: '/resume' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-black/60 backdrop-blur-xl border-b border-white/5 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 sm:gap-4 group">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-amber-500/50 transition-all duration-500">
              <img src="/images/goatech-logo.jpeg" alt="GOAT'ECH" className="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-lg" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-xl font-bold tracking-widest text-white uppercase group-hover:text-amber-400 transition-colors whitespace-nowrap">
                GURUPRASATH D
              </span>
              <span className="text-[8px] sm:text-[10px] tracking-[0.1em] sm:tracking-[0.2em] text-gray-400 font-mono font-bold uppercase">
                Founder & CEO @ GOAT'ECH
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                  isActive(item.href)
                    ? 'text-amber-400 drop-shadow-[0_0_15px_rgba(201,168,76,0.5)]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a 
              href="https://github.com/guru071" 
              target="_blank" 
              rel="noreferrer"
              className="px-5 py-2 rounded-lg bg-white/5 hover:bg-amber-500/10 border border-white/10 hover:border-amber-500/30 text-white hover:text-amber-400 font-mono text-xs uppercase tracking-widest transition-all"
            >
              GitHub
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:text-amber-400 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 right-4 w-[50%] bg-black/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-4">
          <div className="px-2 py-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-widest ${
                  isActive(item.href)
                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
