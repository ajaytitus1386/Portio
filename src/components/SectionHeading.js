import React from 'react'
import '../styles/home.scss'

export default function SectionHeading({headingText}) {
    return (
        <div>
            <div className={"sectionHeading"} >
                  {headingText}
            </div>
            <div className="divider"></div>
        </div>
    )
}
