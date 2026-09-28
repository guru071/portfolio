import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomeView from './views/public/HomeView';
import AboutView from './views/public/AboutView';
import ResumeView from './views/public/ResumeView';
import ProjectsView from './views/public/ProjectsView';
import ContactView from './views/public/ContactView';

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-amber-500/30">
      <Navbar />
      <main className="flex-grow relative z-10 w-full overflow-x-hidden pt-24 pb-20">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/resume" element={<ResumeView />} />
          <Route path="/projects" element={<ProjectsView />} />
          <Route path="/contact" element={<ContactView />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
