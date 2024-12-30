import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Cours from './components/AllCours'
import OneCours from './components/OneCours'

import MesCours from './pages/mescours'
import Favoris from './pages/favoris'
import Signup from './pages/signup'
import Login from './pages/login'
import Home from './pages/home'

import axios from 'axios';
import { useEffect, useState } from 'react';

/*Composant principal App. Il est rendu quand l'utilisateurs arrive sur le site. S'appuie sur les composants Navbar et Cours (AllCours) */

function App() {

  const [data, setData] = useState([])
  const [rendered, setRendered] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8080/cours').then(function (response) {
          setData(response.data)
          setRendered(true)
        })
    }, [])

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mescours" element={<MesCours />} />
          <Route path="/favoris" element={<Favoris />} />
          <Route path="/cours/:id" element={<OneCours />}  />
        </Routes>
      </Router>

      {rendered ?
      <></>
      :
      <h1>Bienvenue sur FitMentor</h1>
      }

      {rendered ?
      <></>
      :
      data.map(cours => (
        <Cours key={cours.id} title={cours.title} vignette={cours.img} />
      ))
      }
    </>
  )
}

export default App