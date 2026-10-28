// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faMagnifyingGlass,
  faBell,
  faMoon
} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from 'react'
import { useTheme } from '../../context/ThemeContext';
import './navbar.css'
const Navbar = () => {
    const { darkMode, toggleDarkMode } = useTheme();
    const [searchText, setSearchText] = useState ("");q
  return (
    <div>
       <nav>
          <div className="mobile-logo">
            <img src="/logo.png" className="logo" alt="CoinEx Logo"/>
            <h2>Coin<span>Ex</span></h2>
          </div>
          <div className="search-bar">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
            <input type="text" placeholder="Search anything..." />
          </div>
          <div className="nav-actions">
            <div className="icon-btn">
              <FontAwesomeIcon icon={faBell} />
              <span className="badge"></span>
            </div>
            <div
              className="icon-btn"
              onClick={toggleDarkMode}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
                <FontAwesomeIcon icon={faMoon} />
            </div>
            <div className="icon-btn" >
              <FontAwesomeIcon icon={faGear} />
            </div>
            <div className="profile-card">
              <img src="/profile.png" alt="Profile" className="profile-avatar" />
              <div className="profile-info">
                <h4>Harsh</h4>
                <p>Harsh@321gmail.com</p>
              </div>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar

