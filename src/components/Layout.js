import React from 'react'
// import Navbar from './Navbar'
import { motion,AnimatePresence } from 'framer-motion'

import * as layoutStyles from '../styles/layout.module.scss'
export default function Layout({children}) {
    return (
        <AnimatePresence>
        <div className={layoutStyles.layout}>
            <title>Ajay Titus</title>
            {/* Makes anchor tags open a new tab when clicked */}
            <base target="_blank"></base>

            <div className={layoutStyles.content}>
                {children}
                
            </div>
            
            <div className={layoutStyles.footer}>
                <p>Copyright 2021 &nbsp;
                    <svg className={layoutStyles.copyright} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 15.781c-2.084 0-3.781-1.696-3.781-3.781s1.696-3.781 3.781-3.781c1.172 0 2.306.523 3.136 1.669l1.857-1.218c-1.281-1.826-3.133-2.67-4.993-2.67-3.308 0-6 2.692-6 6s2.691 6 6 6c1.881 0 3.724-.859 4.994-2.67l-1.857-1.218c-.828 1.14-1.959 1.669-3.137 1.669z"/></svg>
                    &nbsp;&nbsp;
                    Ajay Titus
                </p>
                <div className={layoutStyles.iconSet}>
                    <motion.div className={layoutStyles.icon} whileHover={{backgroundColor:'rgba(0,0,0,0.5)' , borderRadius:'30%'}}>
                    <a href="https://github.com/ajaytitus1386" target="_blank" rel="noreferrer">
                        <svg fill="inherit" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </a>
                    </motion.div>
                
                </div>
            </div>
        </div>
        </AnimatePresence>
    )
}
