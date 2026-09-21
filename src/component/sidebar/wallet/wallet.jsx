// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './wallet.css'
import {
  faEye,
  faExchangeAlt,
  faArrowUp,
  faCopy,
  faWallet,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
const wallet = () => {
  return (
    <>
    <div className="wallet-page">
        <header className="wallet-header">
            <div className="header-left">
                <h1>My Wallet</h1>
                <p>Manage your crypto assets</p>
            </div>
        </header>
        <section className="balance-section">
            <div className="balance-card">
                <div className="balance-top">
                    <span>Total Balance</span>
                    <button className="hide-balance">
                    <FontAwesomeIcon icon={faEye}/></button>
                </div>
                <h2>$12,458.50</h2>
                <p className="balance-change">
                    +$245.30 (2.01%) today
                </p>
            </div>
           {/* Wallet Address */}
<section className="wallet-address-section">

  <div className="section-header">
    <h2>Wallet Address</h2>
  </div>

  <div className="wallet-address-card">

    <div className="address-icon">
      <FontAwesomeIcon icon={faWallet} />
    </div>

    <div className="address-content">
      <p>Your wallet address</p>

      <div className="address-box">
        <span>
          0x71C7656EC7ab88b098defB751B7401B5f6d8976F
        </span>

        <button className="copy-btn" title="Copy address">
          <FontAwesomeIcon icon={faCopy} />
        </button>
      </div>
    </div>

  </div>

</section>
            <div className="quick-actions">
                <button className="action-btn">
                    <FontAwesomeIcon icon={faArrowUp} />
                    <p>Send</p>
                </button>
                <button className="action-btn">
                    <FontAwesomeIcon icon={faArrowDown} />
                    <p>Receive</p>
                </button>
                <button className="action-btn">
                    <FontAwesomeIcon icon={faExchangeAlt} />
                    <p>Swap</p>
                </button>
            </div>
        </section>
        <section className="assets-section">
            <div className="section-header">
                <h2>Your Assets</h2>
                <button>View All</button>
            </div>
            <div className="asset-card">
                <div className="asset-info">
                    <div className="coin-icon">
                        ₿
                    </div>
                    <div>
                        <h3>Bitcoin</h3>
                        <p>BTC</p>
                    </div>
                </div>
                <div className="asset-price">
                    <h3>0.245 BTC</h3>
                    <p>$8,420.50</p>
                </div>
            </div>
            <div className="asset-card">
                <div className="asset-info">
                    <div className="coin-icon">
                        Ξ
                    </div>
                    <div>
                        <h3>Ethereum</h3>
                        <p>ETH</p>
                    </div>
                </div>
                <div className="asset-price">
                    <h3>1.85 ETH</h3>
                    <p>$4,120.20</p>
                </div>
            </div>
            <div className="asset-card">
                <div className="asset-info">
                    <div className ="coin-icon">
                        $
                    </div>
                    <div>
                        <h3>Tether</h3>
                        <p>USDT</p>
                    </div>
                </div>
                <div className="asset-price">
                    <h3>1,200 USDT</h3>
                    <p>$1,200.00</p>
                </div>
            </div>
        </section>
        <section className="transactions-section">
            <div className="section-header">
                <h2>Recent Transactions</h2>
                <button>View All</button>
            </div>
            <div className="transaction">

                <div className="transaction-icon send">
                    <FontAwesomeIcon icon={faArrowUp} />
                </div>

                <div className="transaction-info">
                    <h3>Sent Bitcoin</h3>
                    <p>Today, 10:32 AM</p>
                </div>

                <div className="transaction-amount">
                    <h3>-0.025 BTC</h3>
                    <p>-$850.20</p>
                </div>
            </div>
            <div className="transaction">
                <div className="transaction-icon receive">
                    <FontAwesomeIcon icon={faArrowDown} />
                </div>

                <div className="transaction-info">
                    <h3>Received Ethereum</h3>
                    <p>Yesterday, 04:15 PM</p>
                </div>

                <div className="transaction-amount">
                    <h3>+0.50 ETH</h3>
                    <p>+$1,120.00</p>
                </div>

            </div>
        </section>

    </div>
</>
  )
}
export default wallet
