import React from "react"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import { graphql } from "gatsby"

import { motion } from "framer-motion"

import "../styles/global.scss"
import "../styles/home.scss"

import Header from "../components/Header"
import Contact from "../components/sections/Contact"
import SectionHeading from "../components/SectionHeading"
import About from "../components/sections/About"
import Expertise from "../components/sections/Expertise"
import Projects from "../components/sections/Projects"

export default function Home({ data }) {
  const projects = data.projects.nodes
  const about = data.about

  return (
    <Layout>
      <Header imageFile1={data.onionDay} imageFile2={data.onionSunset} />
      <Navbar />
      <motion.div className="main">
        {/* <FlexGrid /> */}

        <div className="container" id="about">
          <SectionHeading headingText={"ABOUT"} />
          <About data={about} imageFile={data.frontImage} />
        </div>

        <div className="container" id="expertise">
          <SectionHeading headingText="EXPERTISE" />
          <Expertise />
        </div>

        <div className="container" id="projects">
          <SectionHeading headingText={"PROJECTS"} />
          <Projects projects={projects} />
        </div>
        <div className="container" id="contact">
          <SectionHeading headingText={"CONTACT"} />
          <Contact />
        </div>
      </motion.div>
    </Layout>
  )
}

export const query = graphql`
  query HomePage {
    frontImage: file(relativePath: { regex: "/^front_left/" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    onionDay: file(relativePath: { regex: "/^Onion-Day/" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    onionSunset: file(relativePath: { regex: "/^Onion-Sunset/" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    about: markdownRemark(frontmatter: { slug: { eq: "about/about" } }) {
      frontmatter {
        slug
      }
      html
    }
    projects: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "home" } } }
    ) {
      nodes {
        frontmatter {
          category
          slug
          stack
          url
          priority
          images {
            childImageSharp {
              gatsbyImageData(width: 640, height: 360)
            }
          }
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
