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

  // window.mobileCheck = function() {
  //   let check = false;
  //   (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  //   return check;
  // };

  function isMobile() {
    let isMobile = false;
    if(typeof window == 'undefined'){ 
       return false
      }
    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i) 
        || navigator.userAgent.match(/iPad/i) 
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)) {
        isMobile = true;
    } else {
        isMobile = false;
    }
    return isMobile;
    
}
  

  setTimeout(()=>{
    setShowWelcome(false);
  },2800)

  return isMobile() ? ( //If mobile browser
  <Layout>
    <div className="header">
      <div className="header-text">
        <p>
          <strong>Sorry, but this site is not yet mobile friendly! </strong> 
        </p>
      </div>
    </div>
  </Layout>) 
  : ( //Else if not mobile browser
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
              <GatsbyImage image={getImage(data.file)} alt="Front"/>
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
  file(relativePath: {eq: "front.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 1920, height: 1080)
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