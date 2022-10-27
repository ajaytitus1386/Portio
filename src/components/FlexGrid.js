import React from "react"

import * as gridStyles from "../styles/flexgrid.module.scss"

import FadeSvg from "./background/FadeSvg"

function FlexGrid() {
  return (
    <div className={gridStyles.flexGrid}>
      <div className={gridStyles.gridRow}>
        <div className={gridStyles.flex1}></div>
        <div className={gridStyles.item}>
          {/* Letter T*/}
          <FadeSvg
            path={
              "M119.93,1c3.41,0,5,1.86,5,5v31c0,3.1-1.55,5-5,5H84v202c0,3.4-1.55,4.95-5,4.95H46.84c-3.1,0-5-1.55-5-4.95v-202H6c-3.1,0-5-1.85-5-5V6A4.56,4.56,0,0,1,6,1Z"
            }
          />
        </div>
        <div className={gridStyles.flex1}></div>
        <div className={gridStyles.item}>
          {/* Letter I */}
          <FadeSvg
            path={
              "M38.17,1a4.56,4.56,0,0,1,4.95,5V243.83a4.56,4.56,0,0,1-4.95,4.95H6c-3.41,0-5-1.86-5-4.95V6c0-3.1,1.55-5,5-5Z"
            }
          />
        </div>
        <div className={gridStyles.flex1}></div>
        <div className={gridStyles.item}>
          {/* Letter T*/}
          <FadeSvg
            path={
              "M119.93,1c3.41,0,5,1.86,5,5v31c0,3.1-1.55,5-5,5H84v202c0,3.4-1.55,4.95-5,4.95H46.84c-3.1,0-5-1.55-5-4.95v-202H6c-3.1,0-5-1.85-5-5V6A4.56,4.56,0,0,1,6,1Z"
            }
          />
        </div>
        <div className={gridStyles.flex1}></div>
        <div className={gridStyles.item}>
          {/* Letter U */}
          <FadeSvg
            path={
              "M118.7,1a6.21,6.21,0,0,1,6.19,6.19v197c0,29.12-15.48,44.6-44.6,44.6H45.6C16.49,248.78,1,233.3,1,204.18V7.19A6.22,6.22,0,0,1,7.2,1H36.93a6.21,6.21,0,0,1,6.19,6.19V195.51c0,8.36,4.34,12.39,12.39,12.39H71.62c8,0,12.39-4,12.39-12.39V7.19A6.21,6.21,0,0,1,90.2,1Z"
            }
          />
        </div>
        <div className={gridStyles.flex1}></div>
        <div className={gridStyles.item}>
          {/* Letter S */}
          <FadeSvg
            path={
              "M80.29,1c29.12,0,44.6,15.49,44.6,44.6V78.43c0,3.1-1.55,5-5,5H87.72a4.56,4.56,0,0,1-5-5V54.27c0-8.05-4-12.39-12.39-12.39H55.51c-7.74,0-12.39,4.34-12.39,12.39V97l73.72,24.16c5.26,2.17,8,5.58,8,11.46v71.55c0,29.12-15.48,44.6-44.6,44.6H45.6C16.8,248.78,1,233.3,1,204.18V171.66c0-3.41,1.86-5,5-5H38.17c3.41,0,4.95,1.55,4.95,5v23.85c0,8.36,4.65,12.39,12.39,12.39H70.38c8.05,0,12.39-4,12.39-12.39v-41.2L9.36,130.15C3.79,128.3,1,124.58,1,118.7V45.6C1,16.49,16.8,1,45.6,1Z"
            }
          />
        </div>
        <div className={gridStyles.flex1}></div>
      </div>
    </div>
  )
}

export default FlexGrid
