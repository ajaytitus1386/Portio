import {
  faFigma,
  faJava,
  faNodeJs,
  faPython,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect } from "react"

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import * as skillStyles from "../../styles/skills.module.scss"

const gridVariants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const tileVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

function Skills() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.75,
  })

  useEffect(() => {
    if (inView) controls.start("visible")
  }, [controls, inView])

  return (
    <motion.div className={skillStyles.container} ref={ref}>
      <motion.div
        variants={gridVariants}
        initial="hidden"
        animate={controls}
        className={skillStyles.skillGrid}
      >
        <h1 className={skillStyles.gridHeading}>Web Development</h1>
        <motion.div variants={tileVariants} className={skillStyles.gridTile}>
          <FontAwesomeIcon icon={faReact} className={skillStyles.gridIcon} />
          ReactJS
        </motion.div>
        <motion.div variants={tileVariants} className={skillStyles.gridTile}>
          NextJS
        </motion.div>
        <motion.div variants={tileVariants} className={skillStyles.gridTile}>
          <FontAwesomeIcon icon={faNodeJs} className={skillStyles.gridIcon} />
          NodeJS
        </motion.div>
        <motion.div variants={tileVariants} className={skillStyles.gridTile}>
          Typescript
        </motion.div>
        <motion.div variants={tileVariants} className={skillStyles.gridTile}>
          <FontAwesomeIcon icon={faSass} className={skillStyles.gridIcon} />
          Sass
        </motion.div>
        <motion.div variants={tileVariants} className={skillStyles.gridTile}>
          TailwindCSS
        </motion.div>
      </motion.div>
      <motion.div
        variants={gridVariants}
        initial="hidden"
        animate={controls}
        className={skillStyles.skillGrid}
      >
        <h1 className={skillStyles.gridHeading}>Databases</h1>

        <motion.div variants={tileVariants} className={skillStyles.gridTile}>
          SQL
        </motion.div>
        <motion.div variants={tileVariants} className={skillStyles.gridTile}>
          MongoDB
        </motion.div>
        <motion.div variants={tileVariants} className={skillStyles.gridTile}>
          Firebase
        </motion.div>
      </motion.div>
      <motion.div
        variants={gridVariants}
        initial="hidden"
        animate={controls}
        className={skillStyles.skillGrid}
      >
        <h1 className={skillStyles.gridHeading}>S/W Development</h1>

        <motion.div variants={tileVariants} className={skillStyles.gridTile}>
          <FontAwesomeIcon icon={faJava} className={skillStyles.gridIcon} />
          Java
        </motion.div>
        <motion.div variants={tileVariants} className={skillStyles.gridTile}>
          C++
        </motion.div>
        <motion.div variants={tileVariants} className={skillStyles.gridTile}>
          <FontAwesomeIcon icon={faPython} className={skillStyles.gridIcon} />
          Python
        </motion.div>
        <motion.div variants={tileVariants} className={skillStyles.gridTile}>
          Flutter
        </motion.div>
        <motion.div variants={tileVariants} className={skillStyles.gridTile}>
          Dart
        </motion.div>
      </motion.div>
      <motion.div
        variants={gridVariants}
        initial="hidden"
        animate={controls}
        className={skillStyles.skillGrid}
      >
        <h1 className={skillStyles.gridHeading}>Design</h1>

        <motion.div variants={tileVariants} className={skillStyles.gridTile}>
          <FontAwesomeIcon icon={faFigma} className={skillStyles.gridIcon} />
          Figma
        </motion.div>
        <motion.div variants={tileVariants} className={skillStyles.gridTile}>
          <strong className={skillStyles.gridIcon}>Ps</strong>
          Photoshop
        </motion.div>
        <motion.div variants={tileVariants} className={skillStyles.gridTile}>
          <strong className={skillStyles.gridIcon}>Ai</strong>
          Illustrator
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Skills
