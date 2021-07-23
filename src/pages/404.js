import React from 'react'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

export default function NotFound() {
    return (
        <Layout>
        <Navbar />
        <div className="main">
            <h1>404 Error</h1>
            <p>Sorry that page <strong>does not</strong> exist</p>
        </div>
        </Layout>
    )
}
