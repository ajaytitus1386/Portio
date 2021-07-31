import React from 'react'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

import * as designDetailsStyles from '../styles/designdetails.module.scss'

import { GatsbyImage,getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import { motion } from 'framer-motion'
import { tileVariants } from '../global/tileVariants'

export default function DesignDetails( { data } ) {
    const { html } = data.markdownRemark
    const { title , stack , thumb } = data.markdownRemark.frontmatter

    return (
        <Layout>
            <Navbar />
            <div className="main">
                <div className={designDetailsStyles.topSection}>
                    <h1 className={designDetailsStyles.title}>{title}</h1>
                    <h2 className={designDetailsStyles.stack}>{stack}</h2>
                </div>
                
                <motion.div className={designDetailsStyles.imageContent} variants={tileVariants} whileHover="hoverCenter">
                    <GatsbyImage image={getImage(thumb)} />
                </motion.div>

                <div className={designDetailsStyles.detailsBody} dangerouslySetInnerHTML={{__html : html}}/>

            </div>
        </Layout>
    )
}

export const query = graphql`
query DesignDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        slug
        thumb {
            childImageSharp {
              gatsbyImageData(width: 1920, height: 1080)
            }
          }
      }
    }
  }
  
`