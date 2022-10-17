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

import { faCopyright } from "@fortawesome/free-solid-svg-icons"

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
            <FontAwesomeIcon icon={faCopyright} />
            2022 Ajay Titus
            <br />
            Made with Passion!
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
                href="https://github.com/ajaytitus1386/Portio"
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
