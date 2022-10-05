import React from "react"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"

import * as errorStyles from "../styles/404.module.scss"

export default function NotFound() {
  return (
    <Layout>
      <Navbar />
      <div className={errorStyles.main}>
        <h1 className={errorStyles.heading}>404 Error</h1>
        <p>
          Sorry that page <strong>does not</strong> exist
        </p>
      </div>
    </Layout>
  )
}
