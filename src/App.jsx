import React from 'react'
import { BrowserRouter,Routes , Route} from 'react-router-dom'
import Wallet from './component/sidebar/wallet/wallet'
import Dashboard from './component/dashboard/dashboard'
import './App.css'
import Navbar from './component/navbar/navbar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/" element={<Dashboard   />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
