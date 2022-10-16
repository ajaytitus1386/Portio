import React from "react"
// import Navbar from './Navbar'
import { motion, AnimatePresence } from "framer-motion"

import { loadFull } from "tsparticles"
import Particles from "react-tsparticles"

import { useCallback } from "react"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab, faInstagram } from "@fortawesome/free-brands-svg-icons"
import {
  faGithub,
  faDribbble,
  faLinkedin,
  faReact,
} from "@fortawesome/free-brands-svg-icons"

import * as layoutStyles from "../styles/layout.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import particleConfig from "../data/particles/bubblestars.json"

library.add(fab, faGithub, faDribbble, faLinkedin, faInstagram, faReact)

export default function Layout({ children }) {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async container => {}, [])

  return (
    <AnimatePresence>
      <div>
        <title>Ajay Titus</title>
        {/* Makes anchor tags open a new tab when clicked */}
        <base target="_blank"></base>

        <div className={layoutStyles.content}>
          <Particles
            className={layoutStyles.particles}
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particleConfig}
          />
          {children}
        </div>

        <div className={layoutStyles.footer}>
          <p>
            <svg
              className={layoutStyles.copyright}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 15.781c-2.084 0-3.781-1.696-3.781-3.781s1.696-3.781 3.781-3.781c1.172 0 2.306.523 3.136 1.669l1.857-1.218c-1.281-1.826-3.133-2.67-4.993-2.67-3.308 0-6 2.692-6 6s2.691 6 6 6c1.881 0 3.724-.859 4.994-2.67l-1.857-1.218c-.828 1.14-1.959 1.669-3.137 1.669z" />
            </svg>
            Copyright 2022 Ajay Titus
          </p>
          <div className={layoutStyles.iconSet}>
            <motion.div
              className={layoutStyles.icon}
              whileHover={{
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: "30%",
              }}
            >
              <a
                href="https://github.com/ajaytitus1386"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} color={"white"} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  )
}
