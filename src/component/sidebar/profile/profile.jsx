import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faWallet,
  faShieldHalved,
  faCheck,
  faCopy,
  faPen,
  faGlobe,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

import "./profile.css";

function Profile() {

  const walletAddress = "0x71C7656EC7ab88b098defB751B7401B5f6d8976F";

  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
  };

  return (
    <div className="profile-page">

      {/* Header */}
      <div className="profile-header">
        <div>
          <h1>Profile</h1>
          <p>Manage your account and wallet information</p>
        </div>
      </div>


      {/* Profile Card */}
      <div className="profile-main-card">

        <div className="profile-avatar">
          <FontAwesomeIcon icon={faUser} />
        </div>

        <div className="profile-user-info">
          <h2>Harsh Sharma</h2>
          <p>@harsh</p>

          <span className="profile-status">
            <span className="status-dot"></span>
            Account Active
          </span>
        </div>

        <button className="edit-profile-btn">
          <FontAwesomeIcon icon={faPen} />
          Edit Profile
        </button>

      </div>


      {/* Personal Information */}
      <div className="profile-section">

        <div className="section-title">
          <h2>Personal Information</h2>
          <p>Your basic account information</p>
        </div>


        <div className="profile-fields">

          <div className="profile-field">

            <div className="field-icon">
              <FontAwesomeIcon icon={faUser} />
            </div>

            <div>
              <span>Full Name</span>
              <strong>Harsh Sharma</strong>
            </div>

          </div>
          <div className="profile-field">

            <div className="field-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>

            <div>
              <span>Email Address</span>
              <strong>harsh@example.com</strong>
            </div>

          </div>

        </div>

      </div>


      {/* Wallet Information */}
      <div className="profile-section">

        <div className="section-title">
          <h2>Wallet Information</h2>
          <p>Your connected blockchain wallet</p>
        </div>


        <div className="wallet-profile-card">

          <div className="wallet-profile-icon">
            <FontAwesomeIcon icon={faWallet} />
          </div>

          <div className="wallet-profile-info">

            <span>Wallet Address</span>

            <strong>
              {walletAddress}
            </strong>

            <small>
              Ethereum Network
            </small>

          </div>

          <button
            className="copy-btn"
            onClick={copyAddress}
            title="Copy wallet address"
          >
            <FontAwesomeIcon icon={faCopy} />
          </button>

        </div>

      </div>


      {/* Security */}
      <div className="profile-section">

        <div className="section-title">
          <h2>Security</h2>
          <p>Manage your account security</p>
        </div>


        <div className="security-list">

          <div className="security-item">

            <div className="security-left">

              <div className="security-icon">
                <FontAwesomeIcon icon={faShieldHalved} />
              </div>

              <div>
                <strong>Wallet Connected</strong>
                <span>Your wallet is securely connected</span>
              </div>

            </div>

            <div className="verified">
              <FontAwesomeIcon icon={faCheck} />
              Connected
            </div>

          </div>


          <div className="security-item">

            <div className="security-left">

              <div className="security-icon">
                <FontAwesomeIcon icon={faShieldHalved} />
              </div>

              <div>
                <strong>Two-Factor Authentication</strong>
                <span>Add an extra layer of security</span>
              </div>

            </div>

            <button className="enable-btn">
              Enable
            </button>

          </div>

        </div>

      </div>


      {/* Preferences */}
      <div className="profile-section">

        <div className="section-title">
          <h2>Preferences</h2>
          <p>Customize your application experience</p>
        </div>


        <div className="preferences-list">

          <div className="preference-item">

            <div className="preference-left">

              <div className="preference-icon">
                <FontAwesomeIcon icon={faGlobe} />
              </div>

              <div>
                <strong>Language</strong>
                <span>Select your preferred language</span>
              </div>

            </div>

            <select>
              <option>English</option>
              <option>Hindi</option>
            </select>

          </div>


          <div className="preference-item">

            <div className="preference-left">

              <div className="preference-icon">
                <FontAwesomeIcon icon={faDollarSign} />
              </div>

              <div>
                <strong>Currency</strong>
                <span>Choose your display currency</span>
              </div>

            </div>

            <select>
              <option>USD ($)</option>
              <option>INR (₹)</option>
              <option>EUR (€)</option>
            </select>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;