import React from 'react'
import './Chronology.scss'
import MainImage from '../../images/home/Chrono.svg'
export const Chronology = () => {
  return (
    <div className="chronology-main-div">
      <div className="heading-section">
        <h1 className="main-heading">Ma chronologie</h1>
      </div>
      <div className="image-section">
        <img src={MainImage} alt="" className="main-image" />
      </div>
      <div className="ending-section">
        <div className="main-text">
          Okay enough francais, I’m tired now{' '}
          <span className="make-bold">(pretty common, ask my cheval)</span>
        </div>
      </div>
    </div>
  )
}
