import React, { useEffect } from "react"
import parse from "html-react-parser"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as aboutStyles from "../../styles/sections/about.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGraduationCap, faBriefcase } from "@fortawesome/free-solid-svg-icons"

const helloVariants = {
  hidden: {
    x: -20,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  visible: {
    x: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
  },
}

function Accolade({ icon, title, subtitle }) {
  return (
    <div className={aboutStyles.accolade}>
      <FontAwesomeIcon icon={icon} className={aboutStyles.icon} />
      <div className={aboutStyles.text}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    </div>
  )
}

function About({ data, imageFile }) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) controls.start("visible")
  }, [controls, inView])

  const { html } = data
  return (
    <div className={aboutStyles.duet}>
      <div className={aboutStyles.container} ref={ref}>
        <motion.h1
          variants={helloVariants}
          initial="hidden"
          animate={controls}
          className={aboutStyles.hello}
        >
          Greetings! I'm <strong>Ajay</strong>
        </motion.h1>
        <>{parse(html)}</>

        <Accolade
          icon={faGraduationCap}
          title="Bachelor's of Technology - Computer Science and Engineering (2019-2023)"
          subtitle="Vellore Institute of Technology"
        />

        <Accolade
          icon={faBriefcase}
          title="Frontend Developer Intern (05/22-07/22)"
          subtitle="Trademarkia, Chennai"
        />
      </div>

      <div className={aboutStyles.photoFrame}>
        <GatsbyImage alt="me" image={getImage(imageFile)} />
      </div>
    </div>
  )
}

export default About
