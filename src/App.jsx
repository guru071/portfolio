import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import SeoHead from './components/common/SeoHead.jsx';
import HomeView from './views/public/HomeView.jsx';
import AboutView from './views/public/AboutView.jsx';
import ResumeView from './views/public/ResumeView.jsx';
import ProjectsView from './views/public/ProjectsView.jsx';
import BlogView from './views/public/BlogView.jsx';
import ContactView from './views/public/ContactView.jsx';

export default function App() {
  return <><a className="skip-link" href="#main">Skip to content</a><SeoHead /><Navbar /><main id="main"><Routes>
    <Route path="/" element={<HomeView />} /><Route path="/about" element={<AboutView />} />
    <Route path="/resume" element={<ResumeView />} /><Route path="/projects" element={<ProjectsView />} />
    <Route path="/blog" element={<BlogView />} /><Route path="/contact" element={<ContactView />} />
    <Route path="*" element={<section className="wrap section"><p className="eyebrow">404</p><h1>Page not found.</h1><p>This page may have moved or is no longer available.</p><Link className="button" to="/">Back to home</Link></section>} />
  </Routes></main><Footer /></>;
}
