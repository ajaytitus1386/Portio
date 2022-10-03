import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import * as sectionHeadingStyles from "../styles/sectionheading.module.scss"

const parentVariants = {
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      staggerChildren: 0.6,
    },
  },
}

const divderVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 0.8,
    transition: {
      opacity: {
        delay: 0.6,
        duration: 0.4,
      },
    },
  },
}

const textVariants = {
  hidden: {
    y: -40,
    rotate: "inherit",
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 0.8,
    transition: {
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
    if (inView) controls.start("show")
    //if (!inView) controls.start("hidden")
  }, [controls, inView])

  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      animate={controls}
      className={sectionHeadingStyles.container}
      ref={ref}
    >
      <motion.div
        variants={divderVariants}
        initial="hidden"
        animate="show"
        className={sectionHeadingStyles.divider}
      ></motion.div>
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate="show"
        className={sectionHeadingStyles.sectionHeading}
      >
        {headingText}
      </motion.div>
    </motion.div>
  )
}
