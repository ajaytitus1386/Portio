import React from "react"
import * as cardStyles from "../styles/projectcard.module.scss"
import { motion } from "framer-motion"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { tileVariants } from "../global/tileVariants"
import parse from "html-react-parser"

function ProjectCard({ project }) {
  return (
    <div
      className={`${cardStyles.card} ${
        project.frontmatter.url ? cardStyles.urlActive : ""
      }`}
    >
      <motion.div
        className={cardStyles.tile}
        variants={tileVariants}
        initial="initial"
        animate="visible"
        whileHover="hover"
      >
        <div className={cardStyles.tileInfo}>
          <h2>{project.frontmatter.title}</h2>
          <h3>{project.frontmatter.stack}</h3>
        </div>
        <a className={cardStyles.tileImage} href={project.frontmatter.url}>
          <GatsbyImage
            image={getImage(project.frontmatter.thumb)}
            alt={project.frontmatter.title}
          />
        </a>
      </motion.div>
      <div className={cardStyles.markdown}>{parse(project.html)}</div>
    </div>
  )
}

export default ProjectCard
