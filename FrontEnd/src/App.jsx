import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'




import Signup from '../routes/signup.jsx'
import Login from '../routes/login.jsx'
import FPass from '../routes/forgotPassword.jsx'
import Home from '../pages/Home.jsx'


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgotpassword" element={<FPass />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App