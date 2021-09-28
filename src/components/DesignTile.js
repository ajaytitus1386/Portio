import React from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'

import { GatsbyImage,getImage } from 'gatsby-plugin-image'
import { tileVariants } from "../global/tileVariants"
import * as designStyles from '../styles/designhome.module.scss'

export default function DesignTile( {nodes} ) {
    let animationDelay = 1

    return (
        <div className={designStyles.grid}>
            {nodes.map(node => (
              
              <Link to={"/design/" + node.frontmatter.slug} key={node.id}>
                <motion.div className={designStyles.tile} variants={tileVariants} initial="initial" animate={{opacity:1, transition: {type:"easeInOut", delay:++animationDelay * 0.2}}} transition={{type: "tween",duration : 0.2}} whileHover="hover">
                  <div className={designStyles.tileInfo}>
                    <h2>{node.frontmatter.title}</h2>
                    <h3>{node.frontmatter.stack}</h3>
                  </div>
                  <div className={designStyles.tileImage}>
                    <GatsbyImage image={getImage(node.frontmatter.thumb)} alt={node.frontmatter.title}/>
                  </div>
                  
                </motion.div>
              </Link>
            ))}
        </div>
    )
}
