// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faBell,
  faShieldHalved,
  faGlobe,
  faWallet,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import "./setting.css";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [transactionNotifications, setTransactionNotifications] =
    useState(true);
  const [walletActivity, setWalletActivity] = useState(true);
  const [priceAlerts, setPriceAlerts] = useState(false);
  const [securityAlerts, setSecurityAlerts] = useState(true);
  const [twoFA, setTwoFA] = useState(false);
  return (
    <div className="settings-page">

      {/* Page Header */}
      <div className="settings-header">
        <h1>Settings</h1>
        <p>Manage your application and wallet preferences</p>
      </div>
      {/* Appearance */}
      <div className="settings-card">
        <div className="settings-title">
          <div className="settings-icon">
            <FontAwesomeIcon icon={faMoon} />
          </div>
          <div>
            <h2>Appearance</h2>
            <p>Customize your application appearance</p>
          </div>
        </div>

        <div className="settings-row">
          <div>
            <h3>Dark Mode</h3>
            <p>Switch between light and dark theme</p>
          </div>

          <label className="toggle">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <span></span>
          </label>
        </div>
      </div>
      {/* Notifications */}
      <div className="settings-card">
        <div className="settings-title">
          <div className="settings-icon">
            <FontAwesomeIcon icon={faBell} />
          </div>
          <div>
            <h2>Notifications</h2>
            <p>Manage your notification preferences</p>
          </div>
        </div>

        <div className="settings-row">
          <div>
            <h3>Transaction Notifications</h3>
            <p>Get notified when a transaction is completed</p>
          </div>

          <label className="toggle">
            <input
              type="checkbox"
              checked={transactionNotifications}
              onChange={() =>
                setTransactionNotifications(!transactionNotifications)
              }
            />
            <span></span>
          </label>
        </div>

        <div className="settings-row">
          <div>
            <h3>Wallet Activity</h3>
            <p>Receive notifications about wallet activity</p>
          </div>

          <label className="toggle">
            <input
              type="checkbox"
              checked={walletActivity}
              onChange={() => setWalletActivity(!walletActivity)}
            />
            <span></span>
          </label>
        </div>

        <div className="settings-row">
          <div>
            <h3>Price Alerts</h3>
            <p>Get alerts when crypto prices change</p>
          </div>

          <label className="toggle">
            <input
              type="checkbox"
              checked={priceAlerts}
              onChange={() => setPriceAlerts(!priceAlerts)}
            />
            <span></span>
          </label>
        </div>

        <div className="settings-row">
          <div>
            <h3>Security Alerts</h3>
            <p>Receive important security notifications</p>
          </div>

          <label className="toggle">
            <input
              type="checkbox"
              checked={securityAlerts}
              onChange={() => setSecurityAlerts(!securityAlerts)}
            />
            <span></span>
          </label>
        </div>
      </div>

      {/* Security */}
      <div className="settings-card">
        <div className="settings-title">
          <div className="settings-icon">
            <FontAwesomeIcon icon={faShieldHalved} />
          </div>

          <div>
            <h2>Security</h2>
            <p>Manage your account security</p>
          </div>
        </div>

        <div className="settings-row">
          <div>
            <h3>Two-Factor Authentication</h3>
            <p>Add an extra layer of security</p>
          </div>

          <label className="toggle">
            <input
              type="checkbox"
              checked={twoFA}
              onChange={() => setTwoFA(!twoFA)}
            />
            <span></span>
          </label>
        </div>

        <div className="settings-row">
          <div>
            <h3>Login Notifications</h3>
            <p>Get notified when a new login is detected</p>
          </div>

          <label className="toggle">
            <input type="checkbox" defaultChecked />
            <span></span>
          </label>
        </div>
      </div>

      {/* Network */}
      <div className="settings-card">
        <div className="settings-title">
          <div className="settings-icon">
            <FontAwesomeIcon icon={faGlobe} />
          </div>

          <div>
            <h2>Network</h2>
            <p>Select your blockchain network</p>
          </div>
        </div>

        <div className="network-setting">
          <label>Blockchain Network</label>

          <select defaultValue="sepolia">
            <option value="sepolia">Ethereum Sepolia</option>
            <option value="mainnet">Ethereum Mainnet</option>
          </select>

          <small>
            Sepolia is recommended while developing and testing.
          </small>
        </div>
      </div>

      {/* Wallet */}
      <div className="settings-card">
        <div className="settings-title">
          <div className="settings-icon">
            <FontAwesomeIcon icon={faWallet} />
          </div>

          <div>
            <h2>Wallet</h2>
            <p>Manage your connected wallet</p>
          </div>
        </div>

        <div className="wallet-setting">
          <div>
            <h3>Connected Wallet</h3>
            <p>0x71C7...8976F</p>
          </div>

          <span className="wallet-status">Connected</span>
        </div>

        <button className="disconnect-btn">
          <FontAwesomeIcon icon={faRightFromBracket} />
          Disconnect Wallet
        </button>
      </div>

    </div>
  );
};

export default Settings;