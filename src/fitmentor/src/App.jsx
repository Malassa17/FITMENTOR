import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import { ReactSession } from 'react-client-session'
import './App.css'
import Navbar from './components/Navbar'
import OneCours from './components/OneCours'

import MesCours from './pages/mescours'
import Favoris from './pages/favoris'
import Signup from './pages/signup'
import Login from './pages/login'
import Home from './pages/home'

/*Composant principal App. Il est rendu quand l'utilisateurs arrive sur le site. S'appuie sur le composant Navbar 
Il sert principalement de router pour l'ensemble des pages de l'application */

ReactSession.setStoreType("localStorage")

function App() {

  if (ReactSession.get('identifier') !== null){
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cours/:id" element={<OneCours />}  />
        </Routes>
      </Router>
    )
  }else{

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
      </>
    )
  }
}

export default App