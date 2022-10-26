import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import TextLoop from "react-text-loop"
import { headerVariants } from "../global/framerVariants"

import * as headerStyles from "../styles/header.module.scss"

import ThreeHeader from "./ThreeHeader"

const welcomeVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 260,
      duration: 4,
    },
  },
  exit: {
    opacity: 0,
  },
}

function Header() {
  const [showWelcome, setShowWelcome] = useState(true)
  const [showHeader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShowWelcome(false)
    }, 2000)
  }, [])

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
          <ThreeHeader />
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
            {!showWelcome && (
              <div className={headerStyles.headerTitle}>
                <TextLoop
                  interval={4000}
                  delay={0}
                  springConfig={{ stiffness: 240, damping: 15 }}
                  className={headerStyles.loopingTitles}
                >
                  <h1>Developer</h1>
                  <h1>Musician</h1>
                  <h1>Student</h1>
                </TextLoop>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Header
