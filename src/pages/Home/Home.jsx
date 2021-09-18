import React, { useEffect } from 'react'
import { Preload } from '../../components/Preload/Preload'
import { Navbar } from '../../components/Navbar/Navbar'
import './Home.scss'
import { Hero } from '../../components/Home/Hero'
import { Chronology } from '../../components/Home/Chronology'
import {Line} from '../../components/Line';
import { Narcissism } from '../../components/Home/Narcissism'
import { Images } from '../../components/Home/Images'
export const Home = () => {
  const [display, setDisplay] = React.useState(false)

  useEffect(() => {
    setInterval(() => {
      setDisplay(true)
    }, 3500)
  }, [])

  return display ? (
    <>
      <Navbar />
      <div className="home-main-div">
          <Hero/>
          <Line/>
          <Chronology/>
          <Line/>
          <Narcissism/>
          <Line/>
          <Images/>
      </div>
    </>
  ) : (
    <Preload />
  )
}
