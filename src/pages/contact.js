import React from 'react'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

import '../styles/home.scss'
export default function Contact() {
    return (
        <Layout>
        <Navbar />       
        <div className="main">
            <h1>Contact Page</h1>
        </div>
        </Layout>
    )
}
