import React, { useState } from "react";
import projects from "./projectsData";
import Projects from "./Projects";

export default function Portfolio() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive((prevState) => !prevState);
    console.log(isActive);
  }
  const project = projects.map((project) => {
    return (
      <Projects
        key={project.title}
        {...project}
        isActive={isActive}
        handleClick={handleClick}
      />
    );
  });
  return (
    <div class="portfolio">
      <h2 className="about-header project-heading">Projects</h2>
      <section className="projects-section">{project}</section>
    </div>
  );
}
