import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { motion, useScroll, useSpring } from "framer-motion"
import Sidebar from "./Sidebar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

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

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const { title } = data.site.siteMetadata

  const { scrollYProgress, scrollY } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    return scrollY.onChange(latest => {
      if (latest >= window.innerHeight - window.innerHeight / 10)
        setIsSticky(true)
      else setIsSticky(false)
    })
  }, [scrollY])

  return (
    <div
      className={`${navStyles.wrapper} ${
        isSticky ? navStyles.stickyContainer : navStyles.absoluteContainer
      }`}
    >
      <nav className={navStyles.navMain}>
        <div className={navStyles.navItems}>
          <strong className={navStyles.navLogo}>{title}</strong>

          <ul className={navStyles.navLinks}>
            <NavLink label="Home" href={"/"} />
            <NavLink label="About" href={"#about"} />
            <NavLink label="Expertise" href={"#expertise"} />
            <NavLink label="Projects" href={"#projects"} />
            <NavLink label="Contact" href={"#contact"} />
          </ul>

          <button
            className={navStyles.sidebarToggle}
            onClick={() => toggleSidebar()}
          >
            <FontAwesomeIcon className={navStyles.toggleIcon} icon={faBars} />
          </button>
        </div>
      </nav>
      <motion.div
        className={navStyles.progressBar}
        style={{ scaleX: scaleX }}
      />

      <Sidebar isOpen={isSidebarOpen} />
    </div>
  )
}

export default Navbar
