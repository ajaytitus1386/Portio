import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import * as expertiseStyles from "../../styles/sections/expertise.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact } from "@fortawesome/free-brands-svg-icons"
import { faCode, faMobile } from "@fortawesome/free-solid-svg-icons"
import RotateSvg from "../background/RotateSvg"

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const boxVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: {
        duration: 0.5,
      },
      y: {
        duration: 0.4,
      },
    },
  },
}

const tilesParent = {}

const tileVariants = {
  hidden: {
    x: -20,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

function SkillTag({ label }) {
  return (
    <motion.div
      variants={tileVariants}
      initial="hidden"
      animate="visible"
      className={expertiseStyles.tag}
    >
      {label}
    </motion.div>
  )
}

function ExpertiseBox({ children, heading, icon, skills }) {
  return (
    <motion.div
      variants={boxVariants}
      initial="hidden"
      animate="visible"
      className={expertiseStyles.box}
    >
      <div className={expertiseStyles.boxHead}>
        <FontAwesomeIcon icon={icon} className={expertiseStyles.icon} />
        <h1>{heading}</h1>
      </div>
      {children}
      {skills && (
        <motion.div variants={tilesParent} className={expertiseStyles.boxTags}>
          {skills.map(skill => (
            <SkillTag label={skill} />
          ))}
        </motion.div>
      )}
    </motion.div>
  )
}

function Expertise() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) controls.start("visible")
  }, [controls, inView])

  return (
    <motion.div
      variants={gridVariants}
      initial="hidden"
      animate={controls}
      className={expertiseStyles.container}
      ref={ref}
    >
      <ExpertiseBox
        icon={faCode}
        heading="Software Development"
        skills={["Java", "C++", "Python", "NodeJS", "SQL"]}
      >
        <div className={expertiseStyles.boxContent}>
          Educated in Object Oriented Programming and in Data Structures and
          Algorithms and always looking to find the right solution.
        </div>
      </ExpertiseBox>
      <ExpertiseBox
        icon={faReact}
        heading="Web Frontend React"
        skills={["NextJS", "TailwindCSS", "Sass", "Typescript"]}
      >
        <div className={expertiseStyles.boxContent}>
          Driven by a passion for delivering a sublime user experience with over
          3 years of expereince.
        </div>
      </ExpertiseBox>
      <ExpertiseBox
        icon={faMobile}
        heading="Mobile App Development"
        skills={["Flutter", "BLoC", "Dart", "Firebase"]}
      >
        <div className={expertiseStyles.boxContent}>
          Diving into the world of mobile applications with a focus on
          cross-platform hybrid solutions.
        </div>
      </ExpertiseBox>
      <motion.div className={expertiseStyles.extraBox}>
        <RotateSvg />
      </motion.div>
    </motion.div>
  )
}

export default Expertise
