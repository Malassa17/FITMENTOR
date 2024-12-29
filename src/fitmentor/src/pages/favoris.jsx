import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cours from '../components/AllCours'

/*Page des favoris du client */

const Favoris = () => {

    var id = 1 //todo getCurrentClient()

    const [data, setData] = useState([])

    useEffect(() => {

        const fetchUsersData = async () => {

            const response = await axios.get('http://localhost:8080/client/'+id+'/favoris')

            setData(response.data)

        }

        fetchUsersData();

        console.log(data)

    }, []);

    return (
        <>
            <h1>Mes Favoris :</h1>
            {data.length > 0 ? (
                data.map(cours => (
                    <Cours key={cours.id} title={cours.title} vignette={cours.img} />
                ))
            ) : (
                <p>Aucun cours trouvé.</p>
            )}
        </>
    )
}

export default Favoris