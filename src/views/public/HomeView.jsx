import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { projects } from '../../data/portfolio.js';
import ProjectCard from '../../components/common/ProjectCard.jsx';

export default function HomeView() {
  return <>
    <section className="wrap hero"><div className="hero-copy"><p className="eyebrow"><span className="dot" /> DEVELOPER · CO-FOUNDER · CEO</p><h1>Ideas into<br/><em>real things.</em></h1><p className="hero-intro">I’m <strong>Guruprasath D</strong>, co-founder and CEO of GOAT’ECH. I work on software, digital products and ideas built to be useful.</p><div className="actions"><Link className="button" to="/projects">Explore projects <ArrowUpRight size={18}/></Link><Link className="text-link" to="/about">More about me <span>↗</span></Link></div><p className="hero-location">VILLUPURAM, TAMIL NADU, INDIA <ArrowDownRight size={17}/></p></div><div className="hero-portrait"><img src="/images/team/guruprasath-d.jpg" alt="Guruprasath D, co-founder and CEO of GOAT’ECH" width="720" height="1280"/><div className="portrait-caption"><span>GURUPRASATH D</span><span>01 / PROFILE</span></div></div></section>
    <section className="wrap section"><div className="section-heading"><div><p className="eyebrow">SELECTED WORK / 01</p><h2>Projects with<br/><em>a purpose.</em></h2></div><Link className="text-link" to="/projects">All projects ↗</Link></div><div className="project-grid featured-projects">{projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} heading="h3" />)}</div></section>
    <section className="wrap section split-banner"><div><p className="eyebrow">THE WORK BEHIND THE WORK / 02</p><h2>Curious by nature.<br/><em>Builder by practice.</em></h2></div><div><p>From programming and web development to backend systems, I enjoy learning how ideas become working software.</p><Link className="text-link" to="/resume">Explore my skills ↗</Link></div></section>
    <section className="wrap section"><div className="cta"><p className="eyebrow">LET’S CONNECT</p><h2>Have an idea<br/><em>worth building?</em></h2><Link className="button" to="/contact">Get in touch <ArrowUpRight size={18}/></Link></div></section>
  </>;
}
