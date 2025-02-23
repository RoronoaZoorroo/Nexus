import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


// import Post from '../components/Post'
// import Partioner from '../components/Partioner'
// import MsgBox from '../components/MsgBox'
// import SingleMszBox from '../components/SingleMszBox'



import Signup from '../routes/signup.jsx'
import Login from '../routes/login.jsx'
import FPass from '../routes/forgotPassword.jsx'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgotpassword" element={<FPass />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  )
}

export default App