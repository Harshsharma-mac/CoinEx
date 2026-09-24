 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faArrowTrendUp,
  faArrowRightArrowLeft,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

import "./Analytics.css";

function Analytics() {
  return (
    <div className="analytics-page">
      {/* Header */}
      <div className="analytics-header">
        <div>
          <h1>Analytics</h1>
          <p>Track your portfolio and wallet activity</p>
        </div>

        <select className="time-filter">
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>Last 3 Months</option>
          <option>Last Year</option>
        </select>
      </div>
      {/* Overview Cards */}
      <div className="analytics-cards">

        {/* Portfolio */}
        <div className="analytics-card">

          <div className="analytics-card-top">
            <span>Total Portfolio</span>

            <div className="analytics-icon green">
              <FontAwesomeIcon icon={faWallet} />
            </div>
          </div>

          <h2>$12,450.80</h2>

          <p className="positive">
            <FontAwesomeIcon icon={faArrowTrendUp} />
            +11.05%
          </p>

        </div>
        {/* Profit */}
        <div className="analytics-card">

          <div className="analytics-card-top">
            <span>Total Profit</span>

            <div className="analytics-icon green">
              <FontAwesomeIcon icon={faArrowTrendUp} />
            </div>
          </div>

          <h2>+$1,240.50</h2>

          <p className="positive">
            This month
          </p>

        </div>


        {/* Transactions */}
        <div className="analytics-card">

          <div className="analytics-card-top">
            <span>Transactions</span>

            <div className="analytics-icon blue">
              <FontAwesomeIcon icon={faArrowRightArrowLeft} />
            </div>
          </div>

          <h2>128</h2>

          <p className="card-description">
            Total transactions
          </p>

        </div>


        {/* Received */}
        <div className="analytics-card">

          <div className="analytics-card-top">
            <span>Total Received</span>

            <div className="analytics-icon purple">
              <FontAwesomeIcon icon={faArrowDown} />
            </div>
          </div>

          <h2>$8,450.20</h2>

          <p className="card-description">
            From all wallets
          </p>
        </div>
      </div>
      {/* Main Analytics Grid */}
      <div className="analytics-grid">

        {/* Portfolio Performance */}
        <div className="analytics-section portfolio-chart">

          <div className="section-header">
            <div>
              <h2>Portfolio Performance</h2>
              <p>Your portfolio value over time</p>
            </div>

            <span className="growth">
              +11.05%
            </span>
          </div>

          <div className="chart-placeholder">

            <div className="chart-line">
              <span></span>
            </div>

            <div className="chart-labels">
              <span>Sep 16</span>
              <span>Sep 18</span>
              <span>Sep 20</span>
              <span>Sep 22</span>
            </div>

          </div>

        </div>


        {/* Asset Distribution */}
        <div className="analytics-section">

          <div className="section-header">
            <div>
              <h2>Asset Distribution</h2>
              <p>Your current holdings</p>
            </div>
          </div>

          <div className="asset-list">

            <div className="asset-row">
              <span>Bitcoin</span>
              <strong>45%</strong>
            </div>

            <div className="asset-progress">
              <span className="btc-progress"></span>
            </div>


            <div className="asset-row">
              <span>Ethereum</span>
              <strong>30%</strong>
            </div>

            <div className="asset-progress">
              <span className="eth-progress"></span>
            </div>


            <div className="asset-row">
              <span>USDT</span>
              <strong>15%</strong>
            </div>

            <div className="asset-progress">
              <span className="usdt-progress"></span>
            </div>


            <div className="asset-row">
              <span>Others</span>
              <strong>10%</strong>
            </div>

            <div className="asset-progress">
              <span className="other-progress"></span>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="analytics-bottom-grid">

        {/* Transaction Activity */}
        <div className="analytics-section">

          <div className="section-header">
            <div>
              <h2>Transaction Activity</h2>
              <p>Your transaction overview</p>
            </div>
          </div>

          <div className="activity-stats">

            <div>
              <span>Received</span>
              <strong>72</strong>
            </div>

            <div>
              <span>Sent</span>
              <strong>56</strong>
            </div>
            <div>
              <span>Completed</span>
              <strong>118</strong>
            </div>

            <div>
              <span>Pending</span>
              <strong>10</strong>
            </div>
          </div>
        </div>

        {/* Profit & Loss */}
        <div className="analytics-section">

          <div className="section-header">
            <div>
              <h2>Profit & Loss</h2>
              <p>Portfolio performance</p>
            </div>
          </div>

          <div className="profit-loss">

            <div className="profit-item">
              <span>Total Profit</span>
              <strong>+$1,850</strong>
            </div>

            <div className="loss-item">
              <span>Total Loss</span>
              <strong>-$610</strong>
            </div>

            <div className="net-profit">
              <span>Net Profit</span>
              <strong>+$1,240</strong>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Analytics;