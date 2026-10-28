// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Wallet from './component/sidebar/wallet/wallet'
import Navbar from './component/navbar/navbar'
import Dashboard from './component/sidebar/dashborad/dashboard'
import Transaction from './component/sidebar/transactions/transaction'
import Analytics from './component/sidebar/Analytics/Analytics'
import Profile from './component/sidebar/profile/profile'
import Setting from './component/sidebar/settings/setting'
import Sidebar from './component/sidebar/Sidebar'
import Login from './component/login/login.jsx'
import { ThemeProvider } from './context/ThemeContext'
import './App.css'
const Layout= () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="transactions" element={<Transaction />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Setting />} />
        </Routes>
      </div>
    </div>
  )
}
const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="/*" element={<Layout />} />
        </Routes> 
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
