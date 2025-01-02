import React, { useEffect, useState } from 'react'
import Cours from '../components/AllCours'
import axios from 'axios'

/*Page qui redirige l'utilisateurs vers l'accueil, pas possible de render le composant react App car on ne peut pas imbriquer
plusieurs composant router (navbar) */

const Home = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/cours').then(function (response) {
          setData(response.data)
        })
    }, [])


    return (
        <>
            <h1>Bienvenue sur FitMentor</h1>

            {data.map(cours => (
                <Cours key={cours.id} data={cours} />
            ))}
        </>
    )
}

export default Home