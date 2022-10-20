import React, { useState, useEffect } from "react"
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

function Header({ imageFiles }) {
  const [showWelcome, setShowWelcome] = useState(true)
  const [showHeader] = useState(true)
  const [imageInFocus, setImageInFocus] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setShowWelcome(false)
      setImageInFocus(1)
    }, 2000)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setImageInFocus((imageInFocus + 1) % (imageFiles.length || 1))
    }, 4000)
  }, [imageInFocus, imageFiles.length])

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
              <GatsbyImage
                className={`${headerStyles.clip}  ${
                  imageInFocus === 0 ? headerStyles.focus : ""
                }`}
                image={getImage(imageFiles[0])}
                alt="Front-1"
              />
              <GatsbyImage
                className={`${headerStyles.clip}  ${
                  imageInFocus === 1 ? headerStyles.focus : ""
                }`}
                image={getImage(imageFiles[1])}
                alt="Front-2"
              />
              <GatsbyImage
                className={`${headerStyles.clip}  ${
                  imageInFocus === 2 ? headerStyles.focus : ""
                }`}
                image={getImage(imageFiles[2])}
                alt="Front-3"
              />
            </motion.div>

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
