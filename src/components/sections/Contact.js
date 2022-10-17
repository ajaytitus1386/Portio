import React, { useEffect } from "react"

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faDribbble,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

import * as contactStyles from "../../styles/sections/contact.module.scss"

const headingVariants = {
  hidden: {
    y: "2rem",
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
  hover: {
    x: "0.5rem",
  },
}

const contentVariants = {
  hidden: {
    y: "-2rem",
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
}

const childrenVariants = {
  hidden: {
    y: "-2rem",
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
  hover: {
    opacity: 1,
    scale: 1.1,
    transition: {
      type: "tween",
      ease: "easeIn",
    },
  },
}

const iconVariants = {
  hidden: {
    x: "-2rem",
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      staggerChildren: 0.6,
    },
  },
}

const iconChildrenVariants = {
  hidden: {
    x: "-2rem",
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 0.8,
  },
}

function ListItem({ faIcon, text, url }) {
  return (
    <motion.li
      className={contactStyles.listItem}
      variants={iconChildrenVariants}
    >
      <a href={url} target="_blank" rel="noreferrer">
        <div className={contactStyles.listIcon}>
          <FontAwesomeIcon icon={faIcon} />
        </div>
        <div className={contactStyles.listText}>{text}</div>
      </a>
    </motion.li>
  )
}

export default function Contact({ scrollRef }) {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) controls.start("show")
    //if (!inView) controls.start("hidden")
  }, [controls, inView])

  return (
    <div className={contactStyles.container} ref={ref}>
      <motion.h1
        className={contactStyles.heading}
        variants={headingVariants}
        initial="hidden"
        animate="show"
        whileHover="hover"
        ref={scrollRef}
      >
        Interested in Getting in Touch?
      </motion.h1>

      <div className={contactStyles.divider}></div>

      <motion.div
        className={contactStyles.content}
        variants={contentVariants}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={childrenVariants}
          className={contactStyles.contentChild}
        >
          Have any inquires, feedback, suggestions or want to check out more
          related platforms? Feel free to reach out!
        </motion.p>
        <br></br>

        <motion.ul
          className={contactStyles.contactList}
          variants={iconVariants}
          initial="hidden"
          animate={controls}
        >
          <ListItem
            text={"ajaytitus1386@gmail.com"}
            url={"mailto:ajaytitus1386@gmail.com"}
            faIcon={faEnvelope}
          />
          <ListItem
            text={"Ajay Titus"}
            url={"https://www.linkedin.com/in/ajay-titus-563b7718b/"}
            faIcon={faLinkedin}
          />
          <ListItem
            text={"ajaytitus24"}
            url={"https://www.instagram.com/ajaytitus24"}
            faIcon={faInstagram}
          />
          <ListItem
            text={"ajaytitus1386"}
            url={"https://github.com/ajaytitus1386"}
            faIcon={faGithub}
          />
          <ListItem
            text={"a_titus"}
            url={"https://dribbble.com/a_titus"}
            faIcon={faDribbble}
          />
        </motion.ul>
      </motion.div>
    </div>
  )
}
