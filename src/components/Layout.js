import React from "react"

import { motion, AnimatePresence } from "framer-motion"

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

import { faCopyright } from "@fortawesome/free-solid-svg-icons"

library.add(fab, faGithub, faDribbble, faLinkedin, faInstagram, faReact)

export default function Layout({ children }) {
  return (
    <AnimatePresence>
      <div>
        <title>Ajay Titus</title>
        {/* Makes anchor tags open a new tab when clicked */}
        <base target="_blank"></base>

        <div className={layoutStyles.content}>{children}</div>

        <div className={layoutStyles.footer}>
          <p>
            <FontAwesomeIcon icon={faCopyright} />
            2025 Ajay Titus
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
