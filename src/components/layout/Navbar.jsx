import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
const navigation = [['Home','/'], ['About','/about'], ['Skills','/resume'], ['Projects','/projects'], ['Resources','/blog'], ['Contact','/contact']];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  return <header className="site-header"><div className="wrap nav-inner"><Link className="brand" to="/" aria-label="Guruprasath D, home"><img src="/images/goatech-logo.jpeg" width="1440" height="1440" alt=""/><span><strong>GURUPRASATH D</strong><small>CO-FOUNDER &amp; CEO · GOAT’ECH</small></span></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(([label,path]) => <Link key={path} to={path} aria-current={pathname === path ? 'page' : undefined}>{label}</Link>)}</nav>
    <button className="menu-button" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>
    {open && <nav id="mobile-nav" className="mobile-nav wrap" aria-label="Mobile navigation">{navigation.map(([label,path]) => <Link key={path} to={path} aria-current={pathname === path ? 'page' : undefined}>{label}</Link>)}</nav>}
  </header>;
}
