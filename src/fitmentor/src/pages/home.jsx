import React, { useEffect, useState } from 'react'
import Cours from '../components/AllCours'
import './home.css'
import TextField from '@mui/material/TextField'
import axios from 'axios'

/*Page qui redirige l'utilisateurs vers l'accueil, pas possible de render le composant react App car on ne peut pas imbriquer
plusieurs composant router (navbar) */

const Home = () => {

    const [data, setData] = useState([])
    const [inputText, setInputText] = useState("")

    /*Fonction qui permet de récupérer l'input de la barre de recherche*/
    const inputHandler = (e) => {

        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    }

    /*Fonction qui permet de récupérer les cours */
    useEffect(() => {
        axios.get('/cours').then(function (response) {
          setData(response.data)
        })
    }, [])


    return (
        <>
            <h1>Bienvenue sur FitMentor</h1>

            <p>Filtrer par type de sport</p>
            <TextField
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            fullWidth
            label="Search"
            />

            <div className="container grid">
                {data.map(cours => (
                    <Cours key={cours.id} data={cours} input={inputText}/>
                ))}
            </div>
        </>
    )
}

export default Home