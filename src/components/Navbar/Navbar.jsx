import React from 'react'
import { useNavigate } from 'react-router'
import './Navbar.scss'

export const Navbar = () => {
  const navigate = useNavigate()

  const navigateToURL = (URL) => {
    navigate(URL)
  }

  return (
    <div className="navbar-main-div">
      <div className="link" onClick={e=>navigateToURL('/home')}>
        Home
      </div>
      <div className="link" onClick={e=>navigateToURL('/gallery')}>
        Gallery
      </div>
      <div className="link" onClick={e=>navigateToURL('/nindhi')}>
        Nindhi
      </div>
    </div>
  )
}
