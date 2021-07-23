import React, {useState} from "react"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import { motion, AnimatePresence } from 'framer-motion'
import {headerVariants} from '../global/framerVariants'
import { graphql } from "gatsby"
import { GatsbyImage,getImage } from 'gatsby-plugin-image'
// import { graphql } from "gatsby"

// import '../styles/global.scss'
// import '../styles/home.scss'

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
           
            <div className="header-image">
              <GatsbyImage image={getImage(data.file)} alt="Nito"/>
            </div>
            <div  className="header-text">
              <p>Hello There, I'm <strong>Ajay Titus</strong><br/> an aspiring enthusiast of <strong>coding</strong>, <strong>design</strong>, <strong>music</strong> and much more.</p>
              <p className="sub-text">Below you'll find some of the significant projects I've worked on.</p>
              <p></p>
            </div>

          </motion.div>

        </motion.div>
        )}
        </AnimatePresence>
        <Navbar />
        <div className="main">
          <div>
            <p>Gonna put more stuff in here</p>
          </div>
        </div>
    </Layout>
  )
}

export const query = graphql`
query Nito {
  file(relativePath: {eq: "Nito.png"}) {
    childImageSharp {
      gatsbyImageData
    }
  }
}
`