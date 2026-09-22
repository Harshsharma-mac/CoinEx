// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter,Routes , Route} from 'react-router-dom'
import Wallet from './component/sidebar/wallet/wallet'
import Dashboard from './component/dashboard/dashboard'
import './App.css'
import Navbar from './component/navbar/navbar'
import Transaction from './component/sidebar/transactions/transaction'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/transactions" element={<Transaction />} />
        <Route path="/" element={<Dashboard   />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
