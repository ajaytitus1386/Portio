import React from "react"
import ProjectCard from "../ProjectCard"

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
          <ProjectCard project={project} />
        ))}
    </>
  )
}

export default Projects
