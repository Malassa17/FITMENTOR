import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Cours from './components/AllCours';

import MesCours from './pages/mescours'
import Favoris from './pages/favoris'
import Signup from './pages/signup'
import Login from './pages/login'

import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/cours').then(function (response) {
          setData(response.data)
        })
    }, [])

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/MesCours" element={<MesCours />} />
          <Route path="/Favoris" element={<Favoris />} />
        </Routes>
      </Router>

      <h1>Voici les cours offerts par nos coach de qualités : </h1>

      {data.map(cours => (
        <Cours key={cours.id} title={cours.title} vignette={cours.img} />
      ))}
    </>
  )
}

export default App