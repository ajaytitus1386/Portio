import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import * as svgStyles from "../../styles/svg.module.scss"
import Wheel from "../../svg/wheel1.svg"

function RotateSvg() {

    const {scrollYProgress} = useScroll();
    const degree = useTransform(scrollYProgress, [0,1], [0,360])

  return (
    <motion.div
      className={svgStyles.wheel}
      style={{
        rotate: degree
      }}
    >
      <Wheel />
    </motion.div>
  )
}

export default RotateSvg