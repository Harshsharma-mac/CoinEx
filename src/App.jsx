// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter,Routes , Route} from 'react-router-dom'
import Wallet from './component/sidebar/wallet/wallet'
import Navbar from './component/navbar/navbar'
import './App.css'
import Dashboard from './component/sidebar/dashborad/dashboard'
import Transaction from './component/sidebar/transactions/transaction'
import Analytics from './component/sidebar/Analytics/Analytics'
import Profile from './component/sidebar/profile/profile'
import Setting from './component/sidebar/settings/setting'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>

      <Routes>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/transactions" element={<Transaction />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/settings" element={<Setting/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
