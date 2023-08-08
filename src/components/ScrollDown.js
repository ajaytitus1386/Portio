import React from "react"
import * as scrollDownStyles from "../styles/scrolldown.module.scss"

const ScrollDown = () => {
  return (
    <div className={scrollDownStyles.mouse_scroll}>
      <span
        className={`${scrollDownStyles.m_scroll_arrows} ${scrollDownStyles.unu}`}
      ></span>
      <span
        className={`${scrollDownStyles.m_scroll_arrows} ${scrollDownStyles.doi}`}
      ></span>
      <span
        className={`${scrollDownStyles.m_scroll_arrows} ${scrollDownStyles.trei}`}
      ></span>
    </div>
  )
}

export default ScrollDown
