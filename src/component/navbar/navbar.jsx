// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faMagnifyingGlass,
  faBell,
  faMoon
} from "@fortawesome/free-solid-svg-icons";

const navbar = () => {
  return (
    <div>
       <nav>
          <div className="search-bar">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
            <input type="text" placeholder="Search anything..." />
          </div>
          <div className="nav-actions">
            <div className="icon-btn">
              <FontAwesomeIcon icon={faBell} />
              <span className="badge"></span>
            </div>
            <div className="icon-btn">
              <FontAwesomeIcon icon={faMoon} />
            </div>
            <div className="icon-btn">
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

export default navbar
