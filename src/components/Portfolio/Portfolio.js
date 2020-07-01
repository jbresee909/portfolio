import React from "react";
import "./Portfolio.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProjectSlideshow from "../Project-Slideshow/Project-Slideshow";
import projects from "../../data/projects";

console.log(projects);

function Portfolio() {
  return (
    <div className="Portfolio" id="Portfolio">
      <h1>Portfolio</h1>
      {projects.map((project) => (
        <ProjectSlideshow
          name={project.name}
          link={project.link}
          text={project.text}
          images={project.images}
        />
      ))}
    </div>
  );
}

export default Portfolio;
