import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cours from '../components/AllCours'

/*Page des cours achetés par le clients */

const MesCours = () => {

    var id = 1 //todo getCurrentClient()

    const [data, setData] = useState([])

    useEffect(() => {

        const fetchUsersData = async () => {

            const response = await axios.get('http://localhost:8080/client/'+id+'/mescours')

            setData(response.data)

        }

        fetchUsersData();

        console.log(data)

    }, []);

    return (
        <>
            <h1>Mes Cours :</h1>
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

export default MesCours