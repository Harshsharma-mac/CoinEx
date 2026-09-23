// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter,Routes , Route} from 'react-router-dom'
import Wallet from './component/sidebar/wallet/wallet'
import './App.css'
import Navbar from './component/navbar/navbar'
import Dashboard from './component/sidebar/dashborad/dashboard'
import Transaction from './component/sidebar/transactions/transaction'
import Analytics from './component/sidebar/Analytics/Analytics'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/transactions" element={<Transaction />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/" element={<Dashboard   />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
