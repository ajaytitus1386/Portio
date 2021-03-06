import React, { useState} from "react"
import Layout from "../../components/Layout"
import Navbar from "../../components/Navbar"
import SectionHeading from "../../components/SectionHeading"
import DesignTile from "../../components/DesignTile"

import { motion, AnimatePresence } from 'framer-motion'
import {headerVariants, headerImageVariants} from '../../global/framerVariants'
import { tileVariants } from "../../global/tileVariants"

import '../../styles/global.scss'
import '../../styles/home.scss'
import * as designStyles from '../../styles/designhome.module.scss'

import { graphql,Link } from "gatsby"
import { GatsbyImage,getImage } from 'gatsby-plugin-image'

export default function DesignHome({ data }) {
  const [showHeader, setShowHeader] = useState(true);

  const designs = data.designs.nodes
  const psDesigns = data.psDesigns.nodes
  const aiDesigns = data.aiDesigns.nodes

  let animationDelay = 1

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
           
            <motion.div variants={headerImageVariants} initial="hidden" animate="visible" whileHover="hover" className="header-image">
              <GatsbyImage  image={getImage(data.file)} alt="MoonCliff"/>
            </motion.div>
            <div  className="header-text">
            <p>Welcome to the  <strong className="sub-heading">Design Section</strong></p>
              <p className="sub-text">Below you'll find graphical, artisitc and design based projects .</p>
              <p></p>
            </div>

          </motion.div>

        </motion.div>
        )}

        
        </AnimatePresence>
        <Navbar />
        <div className="main">

          <SectionHeading headingText={"Featured"}/>

          <div className={designStyles.grid}>
            {designs.map(design => (
              
              <Link to={"/design/" + design.frontmatter.slug} key={design.id}>
                <motion.div className={designStyles.tile} variants={tileVariants} initial="initial" animate={{opacity:1, transition: {type:"easeInOut", delay:++animationDelay * 0.2}}} transition={{type: "tween",duration : 0.2}} whileHover="hover">
                  <div className={designStyles.tileInfo}>
                    <h2>{design.frontmatter.title}</h2>
                    <h3>{design.frontmatter.stack}</h3>
                  </div>
                  <div className={designStyles.tileImage}>
                    <GatsbyImage image={getImage(design.frontmatter.thumb)} alt={design.frontmatter.title}/>
                  </div>
                  
                </motion.div>
              </Link>
            ))}
          </div>
          
          <SectionHeading headingText={"Photoshop"}/>  
              <DesignTile nodes={psDesigns}/>

          <SectionHeading headingText={"Illustrator"}/>
              <DesignTile nodes={aiDesigns} />

        </div>
    </Layout>
  )
}

//export query for all files
export const query = graphql`
query DesignPage {
  designs : allMarkdownRemark(filter: {frontmatter: {category: {eq: "design"}, featureOnCategory: {eq: true}}}) {
    nodes {
      frontmatter {
        category
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
      html
    }
  }

  psDesigns : allMarkdownRemark(
    filter: {frontmatter: {category: {eq: "design"}, stack: {eq: "Photoshop"}}}
  ) {
    nodes {
      frontmatter {
        category
        slug
        stack
        title
        thumb {
          childImageSharp {
            gatsbyImageData(width: 640, height: 360)
          }
        }
      }
    }
  }

  aiDesigns : allMarkdownRemark(
    filter: {frontmatter: {category: {eq: "design"}, stack: {eq: "Illustrator"}}}
  ) {
    nodes {
      frontmatter {
        category
        slug
        stack
        title
        thumb {
          childImageSharp {
            gatsbyImageData(width: 640, height: 360)
          }
        }
      }
    }
  }

  file(relativePath: {eq: "MoonAndCliff.png"}) {
    childImageSharp {
      gatsbyImageData(width: 1920, height:1080)
    }
  }
}

  
`
