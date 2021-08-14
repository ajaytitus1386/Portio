import React, { useState} from "react"
import Layout from "../../components/Layout"
import Navbar from "../../components/Navbar"
import SectionHeading from "../../components/SectionHeading"
import DesignTile from "../../components/DesignTile"

import { motion, AnimatePresence } from 'framer-motion'
import {headerVariants, headerImageVariants} from '../../global/framerVariants'
import { tileVariants } from "../../global/tileVariants"

import { graphql,Link } from "gatsby"
import { GatsbyImage,getImage } from 'gatsby-plugin-image'

export default function TechHome() {

    const [showHeader, setShowHeader] = useState(true);

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
                
                {/* <motion.div variants={headerImageVariants} initial="hidden" animate="visible" whileHover="hover" className="header-image">
                    <GatsbyImage  image={getImage(data.file)} alt="MoonCliff"/>
                </motion.div> */}
                <div  className="header-text">
                <p>Welcome to the  <strong className="sub-heading">Tech Section</strong></p>
                    <p className="sub-text">Heres where anything pertaining to tech, coding and contemporary projects in the modern world.</p>
                    <p></p>
                </div>

                </motion.div>

                </motion.div>
                )}
            </AnimatePresence>
            <Navbar />
            <div className="main">
                <SectionHeading headingText={"More Stuff Coming!"}/>
            </div>
        </Layout>
    )
}
