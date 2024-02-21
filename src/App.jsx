import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './login/Login';
import Dashboard from './dashboard/Dashboard';
import Forgotpwd from './login/Forgotpwd';
import Individual from './Form/Individual';
import Institutional from './Form/Institutional';

function App() {
 

  return (
    <>
      <Router>
        <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/forgotpassword" element={<Forgotpwd/>} />
        <Route path="/" element={<Dashboard/>} />
        <Route path="/individual" element={<Individual/>} />
        <Route path="/institutional" element={<Institutional/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
