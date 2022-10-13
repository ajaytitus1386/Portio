import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faCircleDot,
  faMessage,
  faTimeline,
  faRibbon,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons"

import * as sidebarStyles from "../styles/sidebar.module.scss"

function SidebarLink({ label, href, icon = faCircleDot }) {
  return (
    <li className={sidebarStyles.sidebarLink}>
      <a target="_self" href={href}>
        <FontAwesomeIcon className={sidebarStyles.sidebarIcon} icon={icon} />
        {label}
      </a>
    </li>
  )
}

function Sidebar({ isOpen }) {
  return (
    <div className={sidebarStyles.full}>
      <div
        className={`${sidebarStyles.container} ${
          isOpen ? sidebarStyles.open : sidebarStyles.close
        }`}
      >
        <div className={sidebarStyles.divider} />
        <ul className={sidebarStyles.sidebarLinks}>
          <SidebarLink label="Home" href={"/"} icon={faHome} />
          <SidebarLink label="About" href={"#about"} icon={faRibbon} />
          <SidebarLink label="Skills" href={"#skills"} icon={faToolbox} />
          <SidebarLink label="Projects" href={"#projects"} icon={faTimeline} />
          <SidebarLink label="Contact" href={"#contact"} icon={faMessage} />
        </ul>
        <div className={sidebarStyles.divider} />
      </div>
    </div>
  )
}

export default Sidebar
