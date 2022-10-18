import React, { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { tileVariants } from "../global/tileVariants"

import { Carousel } from "react-responsive-carousel"
import parse from "html-react-parser"
import { useInView } from "react-intersection-observer"

import * as cardStyles from "../styles/projectcard.module.scss"

function ProjectCard({ project }) {
  const [startAutoPlay, setStartAutoPlay] = useState(false)
  const controls = useAnimation()

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      setStartAutoPlay(true)
      controls.start("visible")
    }
  }, [controls, inView])
  const images = [
    project.frontmatter.thumb,
    ...(project.frontmatter.images || []),
  ]

  return (
    <motion.div
      key={project.frontmatter.title}
      className={`${cardStyles.card}`}
      variants={tileVariants}
      initial="initial"
      animate={controls}
      ref={ref}
    >
      <div className={cardStyles.tile}>
        <div className={cardStyles.tileInfo}>
          <h2>{project.frontmatter.title}</h2>
          <h3>{project.frontmatter.stack}</h3>
        </div>
        <div className={`${cardStyles.tileImage}`}>
          <Carousel
            showArrows={false}
            autoPlay={startAutoPlay}
            interval={3000}
            infiniteLoop
            showStatus={false}
            showThumbs={false}
            stopOnHover
          >
            {images.map((image, index) => (
              <GatsbyImage
                key={project.frontmatter.title + index}
                image={getImage(image)}
                alt={project.frontmatter.title + index}
                className={cardStyles.tileImage}
              />
            ))}
          </Carousel>
        </div>
      </div>
      <div className={cardStyles.markdown}>{parse(project.html)}</div>
    </motion.div>
  )
}

export default ProjectCard
