import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { motion, useScroll, useSpring } from "framer-motion"

// import '../styles/nav.scss'
import * as navStyles from "../styles/nav.module.scss"
const linkVariants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
    y: -5,
  },
}

function NavLink({ label, href }) {
  return (
    <motion.li variants={linkVariants} initial="initial" whileHover="hover">
      <a target="_self" href={href} className={navStyles.navLink}>
        {label}
      </a>
    </motion.li>
  )
}

function Navbar() {
  const data = useStaticQuery(graphql`
    query MetadataQuery {
      site {
        siteMetadata {
          copyright
          description
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <>
      <nav className={navStyles.navMain}>
        <div className={navStyles.navItems}>
          <motion.strong
            whileHover={{ scale: 1.2 }}
            className={navStyles.navLogo}
          >
            {title}
          </motion.strong>

          <ul className={navStyles.navLinks}>
            <NavLink label="About" href={"#about"} />
            <NavLink label="Skills" href={"#skills"} />
            <NavLink label="Projects" href={"#projects"} />
            <NavLink label="Contact" href={"#contact"} />
          </ul>
        </div>
        <motion.div
          className={navStyles.progressBar}
          style={{ scaleX: scaleX }}
        />
      </nav>
    </>
  )
}

export default Navbar
