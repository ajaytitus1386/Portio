import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"

import Wheel from "../../svg/wheel1.svg"

function RotateSvg() {
  const { scrollYProgress } = useScroll()
  const degree = useTransform(scrollYProgress, [0, 1], [0, 720])

  return (
    <motion.div
      style={{
        rotate: degree,
      }}
    >
      <Wheel />
    </motion.div>
  )
}

export default RotateSvg
