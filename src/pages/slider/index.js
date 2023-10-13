import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import Layout from '../../components/Layout'

import sliderStyles from '../../styles/slider/slider.module.scss'

const SliderPage = () => {

  const [dragPercentage, setDragPercentage] = useState(100)
  const [touchDownAt, setTouchDownAt] = useState(0)

  const trackRef = useRef(null)

  const handleTrackDrag = e => {
    const dragDelta = touchDownAt - e.clientX
    const maxDelta = trackRef.current.innerWidth / 2

    const percentage = (dragDelta / maxDelta) * 100
  }

  return (
    <Layout>
        <div className={sliderStyles.track} onMouseDown={handleTrackDrag} ref={trackRef}>
            <div className={sliderStyles.trackItem}>
                <img src='https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f'/>
            </div>
            <div className={sliderStyles.trackItem}>
                <img src='https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f'/>
            </div>
            <div className={sliderStyles.trackItem}>
                <img src='https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f'/>
            </div>
            <div className={sliderStyles.trackItem}>
                <img src='https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f'/>
            </div>
            <div className={sliderStyles.trackItem}>
                <img src='https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f'/>
            </div>
        </div>
    </Layout>
  )
}

export default SliderPage