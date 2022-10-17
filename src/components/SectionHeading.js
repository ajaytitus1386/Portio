import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import * as sectionHeadingStyles from "../styles/sectionheading.module.scss"

const parentVariants = {
  initial: {
    opacity: 0,
    x: -20,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      staggerChildren: 0.6,
    },
  },
}

const divderVariants = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 0.8,
    transition: {
      opacity: {
        duration: 0.4,
      },
    },
  },
}

const textVariants = {
  initial: {
    y: -40,
    rotate: "inherit",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 0.8,
    transition: {
      delay: 0.2,
      duration: 0.4,
    },
  },
}

export default function SectionHeading({ headingText }) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  useEffect(() => {
    if (inView) controls.start("visible")
    //if (!inView) controls.start("hidden")
  }, [controls, inView])

  return (
    <motion.div
      variants={parentVariants}
      initial="initial"
      animate={controls}
      className={sectionHeadingStyles.container}
      ref={ref}
    >
      <motion.div
        variants={divderVariants}
        initial="initial"
        animate={controls}
        className={sectionHeadingStyles.divider}
      ></motion.div>
      <motion.div
        variants={textVariants}
        initial="initial"
        animate={controls}
        className={sectionHeadingStyles.sectionHeading}
      >
        {headingText}
      </motion.div>
    </motion.div>
  )
}
