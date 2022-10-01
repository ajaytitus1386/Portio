import React from "react"

import * as gridStyles from "../styles/flexgrid.module.scss"

import FadeSvg from "./background/FadeSvg"
import RotateSvg from "./background/RotateSvg"

function FlexGrid() {
  return (
    <div className={gridStyles.flexGrid}>
      <div className={gridStyles.gridRow}>
        <div className={gridStyles.flex1}></div>
        <div className={gridStyles.item}>
          {/* Letter A */}
          <FadeSvg
            path={
              "M96.52,275.52c-2.22,0-3.46-1.71-4-4.8l-6.93-50.1H41.57l-6.69,50.1c-.49,3.09-1.73,4.8-4,4.8H4.43c-2.72,0-4-2.06-3.22-5.83L42.31,5.81C42.8,2.37,44.29,1,46.52,1H80.93c2.22,0,3.71,1.37,4.21,4.81l41.09,263.88c.5,3.77-.49,5.83-3.47,5.83ZM63.6,61.05,47.75,180.81H79.44Z"
            }
          />
        </div>
        <div className={gridStyles.flex6}></div>
      </div>
      
      <div className={gridStyles.gridRow}>
        <div className={gridStyles.flex3}></div>
        <div className={gridStyles.item}>
          <RotateSvg />
        </div>
        <div className={gridStyles.flex1}></div>
      </div>
      <div className={gridStyles.gridRow}>
        <div className={gridStyles.flex4}></div>
        <div className={gridStyles.item}>
          <FadeSvg
            path={
              "M119.93,1c3.41,0,5,1.86,5,5v31c0,3.1-1.55,5-5,5H84v202c0,3.4-1.55,4.95-5,4.95H46.84c-3.1,0-5-1.55-5-4.95v-202H6c-3.1,0-5-1.85-5-5V6A4.56,4.56,0,0,1,6,1Z"
            }
          />
        </div>
      </div>
    </div>
  )
}

export default FlexGrid
