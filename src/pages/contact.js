import React from 'react'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

import { motion } from 'framer-motion'

import '../styles/home.scss'
import * as contactStyles from '../styles/contact.module.scss'
import github from '../images/icons/iconmonstr-github-1-240.png'
import dribbble from '../images/icons/iconmonstr-dribbble-1.svg'

const headingVariants = {
    hidden : {
        y: '2rem',
        opacity: 0,
    },
    show : {
        y: 0,
        opacity: 1,
        transition : {
            type : 'spring',
            stiffness: 200,
            damping: 20,
        }
    },
    hover : {
        x : "0.5rem",
    }
}

const contentVariants = {
    hidden : {
        y: '-2rem',
        opacity: 0,
    },
    show : {
        y: 0,
        opacity: 1,
        transition : {
            staggerChildren : 0.5
        }
    }
}

const childrenVariants = {
    hidden : {
        y: '-2rem',
        opacity: 0,
    },
    show : {
        y: 0,
        opacity: 1,
    },
    hover : {
        opacity : 1,
        scale : 1.1,
        transition : {
            type : "tween",
            ease : "easeIn"
        }
    }
}

const iconVariants = {
    hidden : {
        x: '-2rem',
        opacity : 0,
    },
    show : {
        x: 0,
        opacity : 1,
        transition : {
            delay: 0.1,
            staggerChildren : 0.6,
        },
    },

}

const iconChildrenVariants = {
    hidden : {
        x: '-2rem',
        opacity : 0,
    },
    show : {
        x: 0,
        opacity : 0.8,
    },

}

export default function Contact() {
    return (
        <Layout>
        <Navbar />       
        <div className="main">
            <div className={contactStyles.container}>
                <motion.h1 className={contactStyles.heading} variants={headingVariants} initial="hidden" animate="show" whileHover="hover">
                    Interested in Getting in Touch?
                </motion.h1>

                <div className={contactStyles.divider}></div>

                <motion.div className={contactStyles.content} variants={contentVariants} initial="hidden" animate="show">
                    <motion.p variants={childrenVariants} className={contactStyles.contentChild}>
                        Have any inquires, feedback, suggestions or just have anything to say? Feel free to direct any relevant topics via the given channels.
                    </motion.p>
                    <br></br>

                    {/* <motion.h2 variants={childrenVariants} className={contactStyles.contentChild}>
                        Public Email : <motion.a className={contactStyles.link} href="mailto:ajaytitus@gmail.com">ajaytitus@gmail.com</motion.a>
                    </motion.h2>
                    <br></br>
                    <motion.h2 variants={childrenVariants} className={contactStyles.contentChild} >
                        Dribbble Account : <a className={contactStyles.link}  href="https://dribbble.com/a_titus">Ajay Titus</a>
                    </motion.h2>
                    <br></br>
                    <motion.h2 variants={childrenVariants} className={contactStyles.contentChild} >
                        GitHub Account : <a className={contactStyles.link}  href="https://github.com/ajaytitus1386">ajaytitus1386</a>
                    </motion.h2> */}

                    <motion.div className={contactStyles.linkIconSet} variants={iconVariants} initial="hidden" animate="show" >

                        <motion.div className={contactStyles.linkIcon} variants={iconChildrenVariants} whileHover={{opacity : 1, scale: 1.1}}>
                            <a href="mailto:ajaytitus@gmail.com" target="_blank" rel="noreferrer" >
                            <svg fill="inherit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={contactStyles.iconSvg}>
                                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                            </svg>
                            </a>   
                            
                        </motion.div > 

                        <motion.div className={contactStyles.linkIcon} variants={iconChildrenVariants} whileHover={{opacity : 1, scale: 1.1}}>

                            <a href="https://github.com/ajaytitus1386" target="_blank" rel="noreferrer" >
                                <svg fill="inherit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={contactStyles.iconSvg}>
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>   
                            
                        </motion.div > 

                        <motion.div className={contactStyles.linkIcon} variants={iconChildrenVariants} whileHover={{opacity : 1, scale: 1.1}}>
                            <a href="https://dribbble.com/a_titus" target="_blank" rel="noreferrer" >
                                <svg fill="inherit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={contactStyles.iconSvg}>
                                    <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z"/>
                                </svg>
                            </a>

                        </motion.div>
                    </motion.div>
                </motion.div>
                
            </div>
        </div>
        </Layout>
    )
}
