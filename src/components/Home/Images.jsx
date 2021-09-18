import React from 'react'
import './Images.scss'
import FirstImage from '../../images/home/FirstImage.png'
import SecondImage from '../../images/home/SecondImage.png'
import ThirdImage from '../../images/home/ThirdImage.png'
import FourthImage from '../../images/home/FourthImage.png'
import FifthImage from '../../images/home/FifthImage.png'
import FrenchImage from '../../images/home/LearningFrench.png'
import PrettyImage from '../../images/home/PrettyImage.png';
import LikeImage from '../../images/home/LikeImage.png';
import { Line } from '../Line'

export const Images = () => {
  return (
    <div className="images-main-div">
      <div className="first-section">
        <div className="main-text-section">
          <span className="main-text-margin">Queen Of</span>
          <span>Shri Ram</span>
          <div className="main-text-no-bold">(I Wish)</div>
        </div>
        <div className="image-section">
          <img src={FirstImage} alt="" className="main-image" />
          <div className="main-bg" />
        </div>
      </div>
      <div className="second-section">
        <div className="main-text-section">
          <span>My favourite</span>
          <span>Dessert</span>
        </div>
        <div className="image-section">
          <img src={SecondImage} alt="" className="main-image" />
          <div className="main-bg" />
        </div>
      </div>

      <div className="third-section">
        <div className="main-text-section">
          <span>Oh, And I </span>
          <span>Sing Too</span>
        </div>
        <div className="image-section">
          <img src={ThirdImage} alt="" className="main-image" />
          <div className="main-bg" />
        </div>
      </div>
      <div className="fourth-section">
        <div className="main-text-section">
          <span>Me When</span>
          <span>Moi Cheval </span>
          <span>Doesn’t </span>
          <span>Remember Something</span>
        </div>
        <div className="image-section">
          <img src={FourthImage} alt="" className="main-image" />
          <div className="main-bg" />
        </div>
      </div>

      <div className="fifth-section">
        <div className="main-text-section">
          <div className="span">Random</div>
          <div className="span">Captionless</div>
          <div className="span">Photo</div>
        </div>
        <div className="image-section">
          <img src={FifthImage} alt="" className="main-image" />
          <div className="main-bg" />
        </div>
      </div>

      <div className="center-section">
        <img src={FrenchImage} alt="" className="main-image" />
        <span className="heading">Learning French</span>
        <span className="text">(That's My Cheval Btw)</span>
      </div>


      <div className="center-section">
        <img src={PrettyImage} alt="" className="main-image" />
        <span className="heading">Too Pretty For You</span>
      </div>

      <div className="center-section">
        <img src={LikeImage} alt="" className="main-image" />
        <span className="heading">Because I Like This Photo</span>
      </div>
      <Line/>
      <div className="last-heading">
          Bas Hogaya, Now Navigate
      </div>
    </div>
  )
}
