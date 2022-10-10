import React from "react"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import { graphql } from "gatsby"

import { motion } from "framer-motion"

import "../styles/global.scss"
import "../styles/home.scss"

import ProjectCard from "../components/ProjectCard"
import FlexGrid from "../components/FlexGrid"
import Header from "../components/Header"
import Contact from "../components/sections/Contact"
import SectionHeading from "../components/SectionHeading"
import Skills from "../components/sections/Skills"
import About from "../components/sections/About"

export default function Home({ data }) {
  const projects = data.projects.nodes
  const about = data.about

  return (
    <Layout>
      <Header imageFile={data.file} />
      <Navbar />
      <motion.div className="main">
        <FlexGrid />

        <div className="container" id="about">
          <SectionHeading headingText={"ABOUT"} />
          <About data={about} />
        </div>

        <div className="container" id="skills">
          <SectionHeading headingText={"SKILLS"} />
          <Skills />
        </div>

        <div className="container" id="projects">
          <SectionHeading headingText={"PROJECTS"} />
          {projects.map(project => (
            <ProjectCard project={project} />
          ))}
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
    file(relativePath: { eq: "front.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1920, height: 1080)
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
