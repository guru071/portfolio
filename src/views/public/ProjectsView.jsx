import React from 'react';
import { projects } from '../../data/portfolio.js';
import ProjectCard from '../../components/common/ProjectCard.jsx';

export default function ProjectsView() {
  return <><section className="wrap page-intro"><p className="eyebrow">PROJECTS / 01</p><h1>Ideas made<br/><em>tangible.</em></h1><p>A selection of the projects I work on, including GOAT’ECH products and personal work.</p></section><section className="wrap section project-grid projects-page">{projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}</section></>;
}
