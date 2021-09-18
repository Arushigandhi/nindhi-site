import React from 'react'
import './Hero.scss'
import HomeImage from '../../images/home/Home.png';
export const Hero = () => {
    return (
        <div className="hero-section">
          <div className="left-side">
            <div className="pink-heading">
              <div className="section">Salut,</div>
              <div className="section">Je Suis Arushi</div>
            </div>
            <div className="written-content">
              I’m a 19 <span className="make-bold">(20)</span> year old femme,
              and I love talking <span className="make-bold">(a lot)</span>,
              writing{' '}
              <span className="make-bold">(okay you’re good in that)</span>,
              debating <span className="make-bold">(let Aish decide that)</span>
              , and tech
              <span className="make-bold">
                {' '}
                ( teach me a sliding window approach)
              </span>
            </div>
          </div>
          <div className="right-side">
            <img src={HomeImage} className="main-image" />
            <div className="background-color" />
          </div>
        </div>
    )
}
