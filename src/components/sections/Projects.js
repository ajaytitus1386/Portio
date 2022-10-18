import React from "react"
import ProjectCard from "../ProjectCard"
import "react-responsive-carousel/lib/styles/carousel.min.css"
function Projects({ projects }) {
  return (
    <>
      {projects
        .sort(
          (projA, projB) =>
            (projA.frontmatter.priority || 9999) -
            (projB.frontmatter.priority || 9999)
        )
        .map(project => (
          <ProjectCard key={project.frontmatter.slug} project={project} />
        ))}
    </>
  )
}

export default Projects
