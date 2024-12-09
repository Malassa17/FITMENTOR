import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar'
import axios from 'axios'
import './App.css'

import Cours from './pages/cours'
import Favoris from './pages/favoris'
import Signup from './pages/signup'
import Login from './pages/login'

function App() {

  return (
    <>
      <Router>
          <Navbar />
        <Routes>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/MesCours" element={<Cours />} />
          <Route path="/Favoris" element={<Favoris />} />
        </Routes>
      </Router>
    </>
  )
}

export default App



/*
<div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
*/