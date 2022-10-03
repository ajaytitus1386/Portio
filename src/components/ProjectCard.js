import React from 'react'
import * as cardStyles from '../styles/projectcard.module.scss';
import {motion} from 'framer-motion';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { tileVariants } from "../global/tileVariants";
import parse from "html-react-parser"
import { Link } from 'gatsby';

function ProjectCard({project}) {
    console.log(project.frontmatter.url)
  return (
    <Link className={`${cardStyles.card} ${project.frontmatter.url ? cardStyles.urlActive : ""}`} to={project.frontmatter.url}>
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
                <div className={cardStyles.tileImage}>
                  <GatsbyImage
                    image={getImage(project.frontmatter.thumb)}
                    alt={project.frontmatter.title}
                  />
                </div>
              </motion.div>
              <div className={cardStyles.markdown}>{parse(project.html)}</div>
            </Link>
  )
}

export default ProjectCard