
// import { Route, Router } from 'express'
// import { Router } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './Login'
import SignUP from './SignUP'

function App() {
  

  return (
<>


<Router>
      <Routes>
        <Route path="/" element={<SignUP />} />
        <Route path="/register" element={<SignUP />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
   
    </>
  )
}

export default App
