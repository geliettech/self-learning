import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router"
import Auth from './pages/auth'
import Dashboard from './pages/dashboard'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<Auth />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
