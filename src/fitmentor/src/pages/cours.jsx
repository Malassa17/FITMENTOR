import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Cours = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/client/1/mescours/1').then(function (response) {
          setData(response.data)
        })
    }, [])

    return (
    <>
        <h1>todo mes cours</h1>
        <div className="MesCours">
            <header className="MesCours-header">
            <span>Tous les cours du client numéro 1 (pour l'instant que le premier cours) = {data.title}</span>
            </header>
        </div>
    </>
    )
}

export default Cours