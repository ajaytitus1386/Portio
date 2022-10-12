import React from "react"
import parse from "html-react-parser"

import * as aboutStyles from "../../styles/sections/about.module.scss"

function About({ data }) {
  const { html } = data
  return (
    <div className={aboutStyles.container}>
      <h1>Greetings! I'm Ajay</h1>
      <>{parse(html)}</>
    </div>
  )
}

export default About
