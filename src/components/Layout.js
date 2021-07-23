import React from 'react'
// import Navbar from './Navbar'
import { motion,AnimatePresence } from 'framer-motion'

import * as layoutStyles from '../styles/layout.module.scss'
export default function Layout({children}) {
    return (
        <AnimatePresence>
        <div className={layoutStyles.layout}>
            <title>Ajay Titus</title>

            <div className={layoutStyles.content}>
                {children}
                
            </div>
            
            <div className={layoutStyles.footer}>
                <p>Heres the footer</p>
            </div>
        </div>
        </AnimatePresence>
    )
}
