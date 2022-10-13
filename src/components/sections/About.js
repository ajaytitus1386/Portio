import React from "react"
import parse from "html-react-parser"

import * as aboutStyles from "../../styles/sections/about.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGraduationCap, faBriefcase } from "@fortawesome/free-solid-svg-icons"

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

function About({ data }) {
  const { html } = data
  return (
    <div className={aboutStyles.container}>
      <h1>Greetings! I'm Ajay</h1>
      <>{parse(html)}</>

      <Accolade
        icon={faGraduationCap}
        title="Bachelor's of Technology - Computer Science and Engineering"
        subtitle="Vellore Institute of Technology"
      />

      <Accolade
        icon={faBriefcase}
        title="Frontend Developer Intern"
        subtitle="Trademarkia, Chennai"
      />
    </div>
  )
}

export default About
