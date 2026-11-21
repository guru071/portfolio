import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project, index, heading: Heading = 'h2' }) {
  const Container = project.href ? 'a' : 'article';
  return <Container className="project-card" href={project.href}>
    <div className="card-top"><span>0{index + 1} / {project.category}</span>{project.href && <ArrowUpRight size={20} />}</div>
    {project.image ? <div className="project-image"><img src={project.image} alt="" loading="lazy" /></div> : <div className="code-art" aria-hidden="true">{project.name.charAt(0)}</div>}
    <div>{project.status && <span className="status">{project.status}</span>}<Heading>{project.name}</Heading>{project.description && <p>{project.description}</p>}{project.href && <span className="project-link">{project.linkLabel} ↗</span>}</div>
  </Container>;
}
