import React, { useState} from "react"
import Layout from "../../components/Layout"
import Navbar from "../../components/Navbar"
import { motion, AnimatePresence } from 'framer-motion'
import {headerVariants, headerImageVariants} from '../../global/framerVariants'

import '../../styles/global.scss'
import '../../styles/home.scss'
import * as designStyles from '../../styles/designhome.module.scss'

import { graphql,Link } from "gatsby"
import { GatsbyImage,getImage } from 'gatsby-plugin-image'

export default function DesignHome({ data }) {
  const [showHeader, setShowHeader] = useState(true);

  const designs = data.designs.nodes

  return (
    <Layout>
      <AnimatePresence>
        {showHeader && (

          <motion.div
          variants={headerVariants} 
          initial="hidden" 
          animate="visible"
          exit="exit"
          className="header"
          >


          <motion.div 
          initial={{opacity:0}} 
          animate={{opacity:1}} 
          transition={{type:"spring",duration:2,damping:20,stiffness:260,delay:0.1}} 
          className="header-items"
          >
           
            <motion.div variants={headerImageVariants} initial="hidden" animate="visible" className="header-image">
              <GatsbyImage  image={getImage(data.file)} alt="MoonCliff"/>
            </motion.div>
            <div  className="header-text">
            <p>Welcome to the  <strong>Design Section</strong></p>
              <p className="sub-text">Below you'll find some creative and artsitic works.</p>
              <p></p>
            </div>

          </motion.div>

        </motion.div>
        )}

        
        </AnimatePresence>
        <Navbar />
        <div className="main">
          
          <div className={designStyles.grid}>
            {designs.map(design => (
              <Link to={"/design/" + design.frontmatter.slug} key={design.id}>
                <div className={designStyles.tile}>
                  <GatsbyImage image={getImage(design.frontmatter.thumb)} alt={design.frontmatter.title}/>
                  <h2>{design.frontmatter.title}</h2>
                  <h3>{design.frontmatter.stack}</h3>
                </div>
              </Link>
            ))}
          </div>

        </div>
    </Layout>
  )
}

//export query for all files
export const query = graphql`
query DesignPage {
  designs : allMarkdownRemark {
    nodes {
      frontmatter {
        slug
        stack
        title
        thumb {
          childImageSharp {
            gatsbyImageData(width: 640, height: 360)
          }
        }
      }
      id
    }
  }
  file(relativePath: {eq: "MoonAndCliff.png"}) {
    childImageSharp {
      gatsbyImageData(width: 1920, height:1080)
    }
  }
}

  
`
