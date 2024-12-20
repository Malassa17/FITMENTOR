import React, { useEffect, useState } from 'react'
import Cours from '../components/AllCours'
import axios from 'axios'

const Home = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/cours').then(function (response) {
          setData(response.data)
        })
    }, [])

    return (
        <>
            <h1>Voici les cours offerts par nos coach de qualités : </h1>

            {data.map(cours => (
                <Cours key={cours.id} title={cours.title} vignette={cours.img} />
            ))}
        </>
    )
}

export default Home