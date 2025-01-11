import React, { useEffect, useState } from 'react'
import { ReactSession } from 'react-client-session'
import axios from 'axios'
import Cours from '../components/AllCours'

/*Page des cours achetés par le clients */

ReactSession.setStoreType("localStorage")

ReactSession.set('id', null)
ReactSession.set('identifier', null)

const MesCours = () => {

    var id = ReactSession.get('id')

    const [data, setData] = useState([])

    useEffect(() => {

        const fetchUsersData = async () => {

            const response = await axios.get('/client/'+id+'/mescours')

            setData(response.data)

        }

        fetchUsersData()

    }, [])

    if (ReactSession.get('id') === null){
        return (
            <><h2>Vous n'êtes pas connecté, veuillez vous connecter pour afficher cette ressource ...</h2></>
        )
    }

    return (
        <>
            <h1>Mes Cours :</h1>
            {data.length > 0 ? (
                data.map(cours => (
                    <Cours key={cours.id} data={cours} input={""}/>
                ))
            ) : (
                <p>Aucun cours trouvé.</p>
            )}
        </>
    )
}

export default MesCours