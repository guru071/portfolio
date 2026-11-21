import React from 'react';
import { Link } from 'react-router-dom';
import { profiles, COMPANY_URL } from '../../data/portfolio.js';
export default function Footer() {
  return <footer className="site-footer"><div className="wrap footer-grid"><div><p className="eyebrow">GURUPRASATH D</p><p>Co-founder &amp; CEO of GOAT’ECH.<br/>Based in Villupuram, Tamil Nadu, India.</p></div><nav aria-label="Footer navigation"><Link to="/about">About</Link><Link to="/projects">Projects</Link><Link to="/resume">Skills &amp; resume</Link><Link to="/contact">Contact</Link></nav><div className="footer-links">{profiles.map(profile => <a key={profile.href} href={profile.href} target="_blank" rel="noopener noreferrer">{profile.label} <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>)}<a href={COMPANY_URL}>GOAT’ECH ↗</a></div></div><div className="wrap footer-bottom">© {new Date().getFullYear()} Guruprasath D</div></footer>;
}
