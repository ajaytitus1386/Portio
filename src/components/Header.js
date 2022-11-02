import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

import * as headerStyles from "../styles/header.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLeftRight } from "@fortawesome/free-solid-svg-icons"

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

function Header() {
  const [showWelcome, setShowWelcome] = useState(true)
  const [showHeader] = useState(true)

  const [sliderWidth, setSliderWidth] = useState(70)

  useEffect(() => {
    setTimeout(() => {
      setShowWelcome(false)
    }, 2000)
  }, [])

  const handleSliderMove = e => {
    const percent = (e.clientX / window.innerWidth) * 100
    setSliderWidth(percent)
    console.log(percent)
  }

  return (
    <AnimatePresence>
      {showHeader && (
        <div className={headerStyles.header}>
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
            onMouseMove={e => handleSliderMove(e)}
            onTouchMove={e => handleSliderMove(e.touches[0])}
          >
            <motion.div
              style={{ width: `${sliderWidth}%` }}
              className={headerStyles.onion}
            >
              <h1>
                Hello There, I'm Ajay Titus
                <br />
                <span>Frontend Developer</span>
              </h1>
            </motion.div>

            <div className={headerStyles.onion}>
              <h1>
                Hello There, I'm Ajay Titus
                <br />
                <span>Software Engineer</span>
              </h1>
            </div>
            <motion.div
              style={{ left: `calc(${sliderWidth}% - 0.75rem)` }}
              className={headerStyles.sliderHandle}
            >
              <FontAwesomeIcon
                icon={faLeftRight}
                className={headerStyles.icon}
              />
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default Header
