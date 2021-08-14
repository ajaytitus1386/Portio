import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { motion } from 'framer-motion'

// import '../styles/nav.scss'
import * as navStyles from '../styles/nav.module.scss'
const linkVariants = {
    initial : {
        scale:1,
    },
    hover : {
        scale: 1.2,
        y: -5,
    }
}

export default function Navbar() {
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

    return (
        <nav className={navStyles.navMain}>
            <div className={navStyles.navItems}>

                <motion.strong whileHover={{scale:1.2}} className={navStyles.navLogo}>
                    {title}
                </motion.strong>

                <ul className={navStyles.navLinks}>

                    <motion.li variants={linkVariants} initial="initial" whileHover="hover">
                        <Link className={navStyles.navLink} to="/">Home</Link>
                    </motion.li>
                    <motion.li variants={linkVariants} initial="initial" whileHover="hover">
                        <Link className={navStyles.navLink} to="/contact">Contact</Link>
                    </motion.li>
                    <motion.li variants={linkVariants} initial="initial" whileHover="hover">
                        <Link className={navStyles.navLink} to="/design">Design</Link>
                    </motion.li>
                    <motion.li variants={linkVariants} initial="initial" whileHover="hover">
                        <Link className={navStyles.navLink} to="/tech">Tech</Link>
                    </motion.li>

                </ul>
            </div>
        </nav>
    )
}
