import React from "react"
import * as cardStyles from "../styles/projectcard.module.scss"
import { motion } from "framer-motion"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { tileVariants } from "../global/tileVariants"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import parse from "html-react-parser"

function ProjectCard({ project }) {
  const images = [
    project.frontmatter.thumb,
    ...(project.frontmatter.images || []),
  ]

  return (
    <div key={project.frontmatter.title} className={`${cardStyles.card}`}>
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
        <div className={`${cardStyles.tileImage}`}>
          <Carousel
            showArrows={false}
            autoPlay
            interval={3000}
            infiniteLoop
            showStatus={false}
            showThumbs={false}
            stopOnHover
          >
            {images.map((image, index) => (
              <GatsbyImage
                image={getImage(image)}
                alt={project.frontmatter.title + index}
                className={cardStyles.tileImage}
              />
            ))}
          </Carousel>
        </div>
      </motion.div>
      <div className={cardStyles.markdown}>{parse(project.html)}</div>
    </div>
  )
}

export default ProjectCard
