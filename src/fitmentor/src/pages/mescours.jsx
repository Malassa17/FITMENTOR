import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cours from '../components/AllCours'

const MesCours = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/client/1/mescours').then(function (response) {
          setData(response.data)
          console.log(data)
        })
    }, [])

    return (
    <>
        <h1>Mes Cours</h1>
        <div className="MesCours">
            <header className="MesCours-header">
            <span>Voici tous vos cours : </span>

            {data.map(cours => (
                <Cours key={cours.id} title={cours.title} vignette={cours.img} />   //TODO FAIRE EN SORTE QUE LES COURS S'AFFICHENT
            ))}
            </header>
        </div>
    </>
    )
}

export default MesCours