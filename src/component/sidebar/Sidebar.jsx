// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faWallet,
  faFile,
  faChartLine,
  faUser,
  faGear,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <aside className="sidebar">
      <div className="head">
        <img src="/logo.png" className="logo" alt="CoinEx Logo"/>
        <h2>Coin<span>Ex</span></h2>
      </div>
      <ul className="nav-links">
        <li className={path === "/" ? "active" : ""}>
          <Link to="/"><FontAwesomeIcon icon={faHouse} />Dashboard</Link>
        </li>
        <li className={path === "/wallet" ? "active" : ""}>
          <Link to="/wallet"><FontAwesomeIcon icon={faWallet} />Wallet</Link>
        </li>
        <li className={path === "/transactions" ? "active" : ""}>
          <Link to="/transactions"><FontAwesomeIcon icon={faFile} />Transactions</Link>
        </li>
        <li className={path === "/analytics" ? "active" : ""}>
          <Link to="/analytics"><FontAwesomeIcon icon={faChartLine} />Analytics</Link>
        </li>
        <li className={path === "/profile" ? "active" : ""}>
          <Link to="/profile"><FontAwesomeIcon icon={faUser} />Profile</Link>
        </li>
        <li className={path === "/settings" ? "active" : ""}>
          <Link to="/settings"><FontAwesomeIcon icon={faGear} />Settings</Link>
        </li>
        <li className="logout">
          <a href="#"><span><FontAwesomeIcon icon={faRightFromBracket} />Logout</span></a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
