// eslint-disable-next-line no-unused-vars
import React from 'react'
// import wallet from '../sidebar/wallet/wallet'
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
function dashboard() {
  return (
      <div className="app-container">
        <aside className="sidebar">
          <div className="head">
            <img src="/logo.png" className="logo" alt="CoinEx Logo"/>
            <h2>Coin<span>Ex</span></h2>
          </div>
        <ul className="nav-links">
          <li className="active"><a href="/"><FontAwesomeIcon icon={faHouse} />Dashboard</a></li>
          <li><a href="/wallet"><FontAwesomeIcon icon={faWallet} />Wallet</a></li>
          <li><a href="/transactions"><FontAwesomeIcon icon={faFile} />Transactions</a></li>
          <li><a href="/analytics"><FontAwesomeIcon icon={faChartLine} />Analytics</a></li>
          <li><a href="/profile"><FontAwesomeIcon icon={faUser} />Profile</a></li>
          <li><a href="/settings"><FontAwesomeIcon icon={faGear} />Settings</a></li>
          <li className="logout">
            <a href="/logout"><span><FontAwesomeIcon icon={faRightFromBracket} />Logout</span></a>
          </li>
        </ul>
      </aside>

      <div className="main-content">
      
        <main className="content-body">
          <div className="welcome-section">
            <h2>Welcome Back, Harsh! 👋</h2>
            <p>Here's what's happening with your portfolio today.</p>
          </div>

          <div className="dashboard-cards-grid">
            <div className="card balance-card">
              <div className="card-icon-wrapper">
                <svg className="card-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="wallet-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                  <rect x="2" y="5" width="20" height="14" rx="4" fill="url(#wallet-grad)" />
                  <path d="M18 10h4v4h-4z" fill="#080b19" opacity="0.3" />
                  <circle cx="20" cy="12" r="2" fill="#fff" />
                  <path d="M2 9c4.5 1 8.5 1 13 0" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="card-details">
                <h3>Total Balance</h3>
                <h2>$24,540</h2>
                <p>
                  <span className="trend positive"><i className="fa-solid fa-arrow-trend-up"></i> +12.5%</span>
                  {" "}From last month
                </p>
              </div>
            </div>

            <div className="card crypto-card">
              <div className="card-icon-wrapper">
                <svg className="card-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="btc-grad" x1="0%" y1="0%" x2="100%" y2="100%" >
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#d97706" />
                    </linearGradient>
                  </defs>
                  <circle cx="12" cy="12" r="10" fill="url(#btc-grad)" />
                  <path
                    d="M12.2 6.5v1.2c1 .1 1.7.5 2.1 1.2l-1.3.8c-.3-.5-.7-.7-1.3-.7v2.3h1.2c.9 0 1.5.3 1.8.8.3.4.4.9.4 1.4 0 .8-.3 1.4-.8 1.8s-1.2.6-2 .6V17h-1.3v-1.1c-.8-.1-1.6-.4-2.1-1l1.1-.9c.3.4.8.7 1.4.7v-2.5h-1.2v-1.2h1.2V9.3h-.9V8h.9V6.5h1.3zm0 2.8v2h.7c.6 0 .9-.3.9-.9 0-.6-.3-1.1-.9-1.1h-.7zm0 3.5v2.3h.8c.7 0 1.1-.4 1.1-1.1 0-.7-.4-1.2-1.1-1.2h-.8z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <div className="card-details">
                <h3>Bitcoin Balance</h3>
                <h2>0.458 BTC</h2>
                <p>$14,850 <span className="trend positive">+8.3%</span></p>
              </div>
            </div>

            <div className="card crypto-card">
              <div className="card-icon-wrapper">
                <svg className="card-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="eth-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#c084fc" />
                      <stop offset="100%" stopColor="#818cf8" />
                    </linearGradient>
                  </defs>
                  <path d="M12 2L4 11.5L12 16L20 11.5L12 2Z" fill="url(#eth-grad)" />
                  <path d="M12 2V16L20 11.5L12 2Z" fill="rgba(0,0,0,0.15)" />
                  <path d="M12 17.5L4 13L12 22L20 13L12 17.5Z" fill="url(#eth-grad)" />
                  <path d="M12 17.5V22L20 13L12 17.5Z" fill="rgba(0,0,0,0.15)" />
                </svg>
              </div>
              <div className="card-details">
                <h3>Ethereum Balance</h3>
                <h2>2.35 ETH</h2>
                <p>$4,350 <span className="trend positive">+6.1%</span></p>
              </div>
            </div>

            <div className="card profit-card">
              <div className="card-icon-wrapper">
                <svg className="card-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="profit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#34d399" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                  </defs>
                  <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#profit-grad)" />
                  <path d="M7 16l3-3 3 3 5-5.5" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18 9.5h-3v3" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="card-details">
                <h3>Today's Profit</h3>
                <h2>+$1,268.32</h2>
                <p><span className="trend positive">+5.4%</span> from yesterday</p>
              </div>
            </div>
          </div>

          <div className="dashboard-bottom-grid">
            <div className="card recent-transactions-card">
              <div className="card-header">
                <h2 className="card-title">Recent Transactions</h2>
                <a href="#" className="view-all">View All</a>
              </div>
              <div className="transaction-list">
                <div className="transaction-item">
                  <div className="icon-wrapper received">
                    <svg className="arrow-icon received" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <polyline points="19 12 12 19 5 12"></polyline>
                    </svg>
                  </div>
                  <div className="transaction-info">
                    <div className="transaction-type">Received</div>
                    <div className="transaction-address">from 0x8a7F...2e45</div>
                  </div>
                  <div className="transaction-amount-date">
                    <div className="transaction-amount amount-positive">+0.052 BTC</div>
                    <div className="transaction-date">May 16, 2024</div>
                  </div>
                </div>

                <div className="transaction-item">
                  <div className="icon-wrapper sent">
                    <svg className="arrow-icon sent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="19" x2="12" y2="5"></line>
                      <polyline points="5 12 12 5 19 12"></polyline>
                    </svg>
                  </div>
                  <div className="transaction-info">
                    <div className="transaction-type">Sent</div>
                    <div className="transaction-address">to 0x95d3...7a12</div>
                  </div>
                  <div className="transaction-amount-date">
                    <div className="transaction-amount amount-negative">-0.01 ETH</div>
                    <div className="transaction-date">May 15, 2024</div>
                  </div>
                </div>

                <div className="transaction-item">
                  <div className="icon-wrapper received">
                    <svg className="arrow-icon received" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <polyline points="19 12 12 19 5 12"></polyline>
                    </svg>
                  </div>
                  <div className="transaction-info">
                    <div className="transaction-type">Received</div>
                    <div className="transaction-address">from 0x4b6E...8c21</div>
                  </div>
                  <div className="transaction-amount-date">
                    <div className="transaction-amount amount-positive">+0.2 BTC</div>
                    <div className="transaction-date">May 14, 2024</div>
                  </div>
                </div>

                <div className="transaction-item">
                  <div className="icon-wrapper sent">
                    <svg className="arrow-icon sent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="19" x2="12" y2="5"></line>
                      <polyline points="5 12 12 5 19 12"></polyline>
                    </svg>
                  </div>
                  <div className="transaction-info">
                    <div className="transaction-type">Sent</div>
                    <div className="transaction-address">to 0x7fI23...9b11</div>
                  </div>
                  <div className="transaction-amount-date">
                    <div className="transaction-amount amount-negative">-0.5 ETH</div>
                    <div className="transaction-date">May 13, 2024</div>
                  </div>
                </div>

                <div className="transaction-item">
                  <div className="icon-wrapper received">
                    <svg className="arrow-icon received" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <polyline points="19 12 12 19 5 12"></polyline>
                    </svg>
                  </div>
                  <div className="transaction-info">
                    <div className="transaction-type">Received</div>
                    <div className="transaction-address">from 0x6d8A...3f77</div>
                  </div>
                  <div className="transaction-amount-date">
                    <div className="transaction-amount amount-positive">+0.03 BTC</div>
                    <div className="transaction-date">May 12, 2024</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card asset-distribution-card">
              <div className="card-header">
                <h2 className="card-title">Asset Distribution</h2>
              </div>

              <div className="distribution-content">
                <div className="chart-container">
                  <svg className="donut-chart" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#1e293b" strokeWidth="12" />
                    <circle cx="50" cy="50" r="40" fill="none" className="chart-segment segment-btc" strokeDasharray="150.8 251.3" strokeDashoffset="0" strokeWidth="12" strokeLinecap="round" />
                    <circle cx="50" cy="50" r="40" fill="none" className="chart-segment segment-eth" strokeDasharray="42.7 251.3" strokeDashoffset="-150.8" strokeWidth="12" strokeLinecap="round" />
                    <circle cx="50" cy="50" r="40" fill="none" className="chart-segment segment-others" strokeDasharray="37.7 251.3" strokeDashoffset="-193.5" strokeWidth="12" strokeLinecap="round" />
                    <circle cx="50" cy="50" r="40" fill="none" className="chart-segment segment-sol" strokeDasharray="17.6 251.3" strokeDashoffset="-231.2" strokeWidth="12" strokeLinecap="round" />
                    <circle cx="50" cy="50" r="40" fill="none" className="chart-segment segment-usdt" strokeDasharray="2.5 251.3" strokeDashoffset="-248.8" strokeWidth="12" strokeLinecap="round" />
                  </svg>
                  <div className="donut-center">
                    <div className="donut-percentage">60%</div>
                    <div className="donut-label">Bitcoin</div>
                  </div>
                </div>

                <div className="legend">
                  <div className="legend-item" data-segment="btc">
                    <div className="legend-left">
                      <div className="legend-dot btc"></div>
                      <span className="legend-name">Bitcoin (60%)</span>
                    </div>
                    <span className="legend-value">$14,829.20</span>
                  </div>

                  <div className="legend-item" data-segment="eth">
                    <div className="legend-left">
                      <div className="legend-dot eth"></div>
                      <span className="legend-name">Ethereum (17%)</span>
                    </div>
                    <span className="legend-value">$4,250.25</span>
                  </div>

                  <div className="legend-item" data-segment="sol">
                    <div className="legend-left">
                      <div className="legend-dot sol"></div>
                      <span className="legend-name">Solana (7%)</span>
                    </div>
                    <span className="legend-value">$1,779.37</span>
                  </div>

                  <div className="legend-item" data-segment="usdt">
                    <div className="legend-left">
                      <div className="legend-dot usdt"></div>
                      <span className="legend-name">USDT (1%)</span>
                    </div>
                    <span className="legend-value">$250.00</span>
                  </div>

                  <div className="legend-item" data-segment="others">
                    <div className="legend-left">
                      <div className="legend-dot others"></div>
                      <span className="legend-name">Others (15%)</span>
                    </div>
                    <span className="legend-value">$3,451.93</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
export default dashboard;

