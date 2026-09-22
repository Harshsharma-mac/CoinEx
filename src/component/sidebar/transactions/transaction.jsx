import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faMagnifyingGlass,
  faFilter
} from "@fortawesome/free-solid-svg-icons";

import "./Transactions.css";

function Transactions() {
  const transactions = [
    {
      type: "Received",
      address: "0x8a7F...2e45",
      asset: "Bitcoin",
      amount: "+0.052 BTC",
      date: "Sep 22, 2026",
      status: "Completed"
    },
    {
      type: "Sent",
      address: "0x95d3...7a12",
      asset: "Ethereum",
      amount: "-0.01 ETH",
      date: "Sep 21, 2026",
      status: "Completed"
    },
    {
      type: "Received",
      address: "0x4b6E...8c21",
      asset: "Bitcoin",
      amount: "+0.20 BTC",
      date: "Sep 20, 2026",
      status: "Completed"
    },
    {
      type: "Sent",
      address: "0x7f23...9b11",
      asset: "Ethereum",
      amount: "-0.50 ETH",
      date: "Sep 19, 2026",
      status: "Pending"
    }
  ];

  return (
    <div className="transactions-page">

      {/* Header */}
      <div className="transactions-page-header">
        <div>
          <h1>Transactions</h1>
          <p>View and manage all your wallet transactions</p>
        </div>
      </div>

      {/* Filters */}
      <div className="transaction-controls">

        <div className="search-box">
          <FontAwesomeIcon icon={faMagnifyingGlass} />

          <input
            type="text"
            placeholder="Search transaction..."
          />
        </div>

        <div className="filter-box">
          <FontAwesomeIcon icon={faFilter} />

          <select>
            <option>All Transactions</option>
            <option>Received</option>
            <option>Sent</option>
            <option>Pending</option>
            <option>Completed</option>
          </select>
        </div>

      </div>

      {/* Transaction Table */}
      <div className="transactions-table-card">

        <table>

          <thead>
            <tr>
              <th>Type</th>
              <th>Address</th>
              <th>Asset</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                {/* Type */}
                <td>
                  <div className="transaction-type">

                    <div
                      className={`transaction-table-icon ${
                        transaction.type === "Received"
                          ? "received"
                          : "sent"
                      }`}
                    >
                      <FontAwesomeIcon
                        icon={
                          transaction.type === "Received"
                            ? faArrowDown
                            : faArrowUp
                        }
                      />
                    </div>

                    <span>{transaction.type}</span>

                  </div>
                </td>

                {/* Address */}
                <td>
                  <span className="wallet-address">
                    {transaction.address}
                  </span>
                </td>

                {/* Asset */}
                <td>
                  {transaction.asset}
                </td>

                {/* Amount */}
                <td>
                  <span
                    className={
                      transaction.type === "Received"
                        ? "amount received-amount"
                        : "amount sent-amount"
                    }
                  >
                    {transaction.amount}
                  </span>
                </td>

                {/* Date */}
                <td>
                  {transaction.date}
                </td>

                {/* Status */}
                <td>

                  <span
                    className={`status ${
                      transaction.status === "Completed"
                        ? "completed"
                        : "pending"
                    }`}
                  >
                    {transaction.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Transactions;