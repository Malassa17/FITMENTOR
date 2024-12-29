import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import OneCours from "../components/OneCours"

/*Page de consultation d'un cours en particulier (s'appuie sur le composant /components/OneCours.jsx) */

const OneCours = () => {

    const [data, setData] = useState([])
    const { id } = useParams()
  
      useEffect(() => {
          axios.get('http://localhost:8080/cours/'+id).then(function (response) {
            setData(response.data)
          })
      }, [])
  
    return (
      <>
        <h1>Voici plus de détails sur le cours : </h1>
  
        {data.map(cours => (
          <OneCours key={cours.id} title={cours.title} vignette={cours.img} description={cours.description} coach={cours.coach} price={cours.price} irl={cours.irl} sport={cours.sport} />
        ))}
      </>
    )
  }
  
  export default Cours