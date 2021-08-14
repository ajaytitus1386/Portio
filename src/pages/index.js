import React, {useState} from "react"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import SectionHeading from "../components/SectionHeading"
import { graphql, Link } from "gatsby"
import { GatsbyImage,getImage } from 'gatsby-plugin-image'


import { motion, AnimatePresence } from 'framer-motion'
import TextLoop from 'react-text-loop'
import parse from 'html-react-parser'

import '../styles/global.scss'
import '../styles/home.scss'
import * as homeStyles from '../styles/home.module.scss'
import {headerImageVariants, headerVariants} from '../global/framerVariants'
import { tileVariants } from "../global/tileVariants"


const welcomeVariants = {
  hidden : {
    scale:0,
  },
  visible: {
    scale: 1,
    transition : {
      type:"spring",
      damping:20,
      stiffness:260,
      duration:3,
    }
  },
  exit : {
    scale:0
  }
}


export default function Home({ data }) {
  //Home( { data })
  // const {title, desc, copy} = data.site.siteMetadata
  const [showWelcome, setShowWelcome] = useState(true);
  const [showHeader, setShowHeader] = useState(true);

  const projects = data.projects.nodes

  const featuredDesigns = data.featuredDesigns.nodes

  console.log('gy',featuredDesigns.size)
  setTimeout(()=>{
    setShowWelcome(false);
  },2800)

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

          <AnimatePresence>
            {showWelcome && (
              <motion.div 
              variants={welcomeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="welcome-title"
              >
                <h1>Welcome</h1>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div 
          initial={{opacity:0}} 
          animate={{opacity:1}} 
          transition={{type:"spring",duration:2,damping:20,stiffness:260,delay:3}} 
          className="header-items"
          >
           
            <motion.div variants={headerImageVariants} initial="visible" whileHover="hover" className="header-image">
              <GatsbyImage image={getImage(data.file)} alt="Nito"/>
            </motion.div>
            <div className="header-text">
              <p>
                Hello There,
                <br/>
                I'm <strong>Ajay Titus</strong>
                <br/> 
                an aspiring enthusiast of 
                <br/>
                <TextLoop interval={2000} delay={3000} springConfig={{ stiffness: 240, damping: 15 }}>
                  <strong>web dev</strong>
                  <strong>design</strong>
                  <strong>music </strong>
                </TextLoop>
                <br/>
                 and much more.
                </p>
              <p className="sub-text">Below you'll find some of the significant projects I've worked on.</p>
              <p></p>
            </div>

          </motion.div>

        </motion.div>
        )}
        </AnimatePresence>
        <Navbar />
        <motion.div className="main">
          <div className="container">

            <SectionHeading headingText={"Featured"}/>  

            {projects.map(project => (
               <div className={homeStyles.card}>
                 <motion.div className={homeStyles.tile} variants={tileVariants} initial="initial" animate="visible" whileHover="hover">
                    <div className={homeStyles.tileInfo}>
                      <h2>{project.frontmatter.title}</h2>
                      <h3>{project.frontmatter.stack}</h3>
                    </div>
                    <div className={homeStyles.tileImage}>
                      <GatsbyImage image={getImage(project.frontmatter.thumb)} alt={project.frontmatter.title}/>
                    </div>
                  </motion.div>
                  <div className={homeStyles.markdown}>
                    {parse(project.html)}
                  </div>
               </div>
            ))}

            {featuredDesigns.map(featuredDesign => (
              <Link className={homeStyles.card} to={"/design/" + featuredDesign.frontmatter.slug} key={featuredDesign.id}>
               
                 <motion.div className={homeStyles.tile} variants={tileVariants} initial="initial" animate="visible" whileHover="hover">
                    <div className={homeStyles.tileInfo}>
                      
                    </div>
                    <div className={homeStyles.tileImage}>
                      <GatsbyImage image={getImage(featuredDesign.frontmatter.thumb)} alt={featuredDesign.frontmatter.title}/>
                    </div>
                  </motion.div>
                  <div className={homeStyles.markdown}>
                    <h1>{featuredDesign.frontmatter.title}</h1>
                    <h3>{featuredDesign.frontmatter.stack}</h3>
                    {parse(featuredDesign.html)}
                  </div>

              </Link>
            ))}
            
          </div>
        </motion.div>
    </Layout>
  )
}

export const query = graphql`
query HomePage {
  file(relativePath: {eq: "Nito.png"}) {
    childImageSharp {
      gatsbyImageData
    }
  }
  projects : allMarkdownRemark(filter: {frontmatter: {category: {eq: "home"}}}) {
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

  featuredDesigns : allMarkdownRemark(filter: {frontmatter: {featureOnHome: {eq: true}}}) {
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
}
`