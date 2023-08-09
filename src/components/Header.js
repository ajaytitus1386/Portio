import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

import * as headerStyles from "../styles/header.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLeftRight } from "@fortawesome/free-solid-svg-icons"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ScrollDown from "./ScrollDown"

const welcomeVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 260,
      duration: 4,
    },
  },
  exit: {
    scale: 0,
  },
}

const AnimatedBlob = ({ id, stopColor1, stopColor2 }) => {
  const gradientId = `gradient-${id}`
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width="100%"
      id={id}
      className={headerStyles.blob}
      filter="blur(1px)"
      style={{ opacity: 1 }}
      transform="rotate(-2)"
    >
      {" "}
      <defs>
        {" "}
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          {" "}
          <stop offset="0%" style={{ stopColor: stopColor1 }}></stop>{" "}
          <stop offset="100%" style={{ stopColor: stopColor2 }}></stop>{" "}
        </linearGradient>{" "}
      </defs>{" "}
      <path id="blob" fill={`url(#${gradientId})`} style={{ opacity: 1 }}>
        <animate
          attributeName="d"
          dur="12.1s"
          repeatCount="indefinite"
          values="M390.7302,319.10952Q360.37524,388.21905,284.62068,409.39959Q208.86612,430.58014,161.11156,373.20082Q113.35701,315.8215,88.46857,238.04463Q63.58014,160.26776,136.76776,117.04463Q209.95537,73.8215,303.79007,69.52027Q397.62476,65.21905,409.35497,157.60952Q421.08517,250,390.7302,319.10952Z;M420.7122,331.4339Q380.09423,412.86779,301.16508,392.29219Q222.23594,371.7166,157.11322,349.24982Q91.99051,326.78305,53.64135,232.38203Q15.29219,137.98101,118.09898,129.47187Q220.90577,120.96273,294.67458,111.25967Q368.44339,101.55661,414.88678,175.77831Q461.33017,250,420.7122,331.4339Z;M388.67097,319.27849Q360.55699,388.55699,291.23441,379.72688Q221.91183,370.89678,145.00645,354.28387Q68.10108,337.67097,71.32903,251.33548Q74.55699,165,142.39247,119.95591Q210.22796,74.91183,286.12043,91.61398Q362.0129,108.31613,389.39892,179.15806Q416.78495,250,388.67097,319.27849Z;M392.2525,331.53996Q379.05994,413.07992,285.7525,456.15485Q192.44505,499.22978,100.80019,432.44731Q9.15533,365.66484,30.81018,260.57493Q52.46503,155.48501,121.45005,74.10764Q190.43506,-7.26974,268.13261,60.97003Q345.83016,129.2098,375.63761,189.6049Q405.44505,250,392.2525,331.53996Z;M400,314Q352,378,277,420Q202,462,143,396Q84,330,66.5,241.5Q49,153,125.5,97.5Q202,42,298.5,55Q395,68,421.5,159Q448,250,400,314Z;M390.7302,319.10952Q360.37524,388.21905,284.62068,409.39959Q208.86612,430.58014,161.11156,373.20082Q113.35701,315.8215,88.46857,238.04463Q63.58014,160.26776,136.76776,117.04463Q209.95537,73.8215,303.79007,69.52027Q397.62476,65.21905,409.35497,157.60952Q421.08517,250,390.7302,319.10952Z"
        ></animate>
      </path>
    </svg>
  )
}

function Header({ imageFile1, imageFile2 }) {
  const [showWelcome, setShowWelcome] = useState(true)
  const [showHeader] = useState(true)

  const [sliderWidth, setSliderWidth] = useState(70)

  useEffect(() => {
    setTimeout(() => {
      setShowWelcome(false)
    }, 2000)
  }, [])

  const handleSliderMove = e => {
    const percent = (e.clientX / window.innerWidth) * 100
    setSliderWidth(percent)
  }

  return (
    <AnimatePresence>
      {showHeader && (
        <div className={headerStyles.header}>
          <AnimatePresence>
            {showWelcome && (
              <motion.div
                variants={welcomeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={headerStyles.welcomeTitle}
              >
                <h1>Welcome</h1>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              duration: 2,
              damping: 20,
              stiffness: 260,
              delay: 3,
            }}
            className={headerStyles.headerItems}
            onMouseMove={e => handleSliderMove(e)}
            onTouchMove={e => handleSliderMove(e.touches[0])}
          >
            <motion.div
              style={{ width: `${sliderWidth}%` }}
              className={headerStyles.onion}
            >
              <ScrollDown />
              <h1>
                Hello There, I'm Ajay Titus
                <br />
                <span>Frontend Developer</span>
              </h1>

              <div className={headerStyles.onionImage}>
                <AnimatedBlob
                  id={"dayBlob"}
                  stopColor1={"#90c3c8"}
                  stopColor2={"#1f5673"}
                />
                <GatsbyImage
                  className={headerStyles.image}
                  alt="onionDay"
                  image={getImage(imageFile1)}
                />
              </div>
            </motion.div>

            <div className={headerStyles.onion}>
              <ScrollDown />
              <h1>
                Hello There, I'm Ajay Titus
                <br />
                <span>Software Engineer</span>
              </h1>
              <div className={headerStyles.onionImage}>
                <AnimatedBlob
                  id={"sunsetBlob"}
                  stopColor1={"rgb(249, 176, 108)"}
                  stopColor2={"rgb(246, 126, 126)"}
                />
                <GatsbyImage
                  className={headerStyles.image}
                  alt="onionSunset"
                  image={getImage(imageFile2)}
                />
              </div>
            </div>
            <motion.div
              style={{ left: `calc(${sliderWidth}% - 0.75rem)` }}
              className={headerStyles.sliderHandle}
            >
              <FontAwesomeIcon
                icon={faLeftRight}
                className={headerStyles.icon}
              />
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default Header
