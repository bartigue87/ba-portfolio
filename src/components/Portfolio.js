import React from "react";
import projects from "./projectsData";
import Projects from "./Projects";

export default function Portfolio() {
  const project = projects.map((project) => {
    return <Projects key={project.title} {...project} />;
  });
  return (
    <>
      <h2>Projects</h2>
      <section className="projects-section">{project}</section>
    </>
  );
}
