import React from 'react'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

import '../styles/home.scss'
import * as contactStyles from '../styles/contact.module.scss'

export default function Contact() {
    return (
        <Layout>
        <Navbar />       
        <div className="main">
            <div className={contactStyles.container}>
                <h1>Interested in Getting in Touch?</h1>
                <div className={contactStyles.divider}></div>
                <p className={contactStyles.text}>
                    Have any inquires, feedback, suggestions or just have anything to say? Feel free to direct any relevant topics via email.
                </p>
            </div>
        </div>
        </Layout>
    )
}
