import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import TextLoop from "react-text-loop"
import { headerImageVariants, headerVariants } from "../global/framerVariants"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as headerStyles from "../styles/header.module.scss"

const welcomeVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 260,
      duration: 4,
    },
  },
  exit: {
    scale: 0,
  },
}

function Header({ imageFile }) {
  const [showWelcome, setShowWelcome] = useState(true)
  const [showHeader, setShowHeader] = useState(true)

  setTimeout(() => {
    setShowWelcome(false)
  }, 2800)
  return (
    <AnimatePresence>
      {showHeader && (
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={headerStyles.header}
        >
          <AnimatePresence>
            {showWelcome && (
              <motion.div
                variants={welcomeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={headerStyles.welcomeTitle}
              >
                <h1>Welcome</h1>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              duration: 2,
              damping: 20,
              stiffness: 260,
              delay: 3,
            }}
            className={headerStyles.headerItems}
          >
            <motion.div
              variants={headerImageVariants}
              initial="visible"
              className={headerStyles.headerImage}
            >
              <GatsbyImage image={getImage(imageFile)} alt="Front" />
            </motion.div>
            {/* <div className={headerStyles.headerTitle}>
              <h1>Ajay Titus</h1>
            </div> */}
            <div className={headerStyles.headerText}>
              <p>
                Hello There,
                <br />
                I'm <strong>Ajay Titus</strong>
                <br />
                an aspiring enthusiast of
                <br />
                <TextLoop
                  interval={2000}
                  delay={3000}
                  springConfig={{ stiffness: 240, damping: 15 }}
                >
                  <strong>FRONTEND</strong>
                  <strong>DESIGN</strong>
                  <strong>MUSIC</strong>
                  <strong>SOFTWARE DEV</strong>
                </TextLoop>
                <br />
                and much more.
              </p>
              <p className={headerStyles.subText}>
                Below you'll find some of the significant projects I've worked
                on.
              </p>
              <p></p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Header
