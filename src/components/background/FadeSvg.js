import React, { useEffect } from "react"

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import * as svgStyles from "../../styles/svg.module.scss"

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 0)",
  },
}

function FadeSvg({ path }) {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    console.log("Change In view" + inView)
    if (inView) controls.start("visible")
    //if (!inView) controls.start("hidden")
  }, [controls, inView])

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={svgStyles.letter}
      ref={ref}
    >
      <motion.path
        d={path}
        variants={icon}
        initial="hidden"
        animate={controls}
        transition={{
          default: { duration: 4, ease: "easeInOut" },
        }}
      />
    </motion.svg>
  )
}

export default FadeSvg
