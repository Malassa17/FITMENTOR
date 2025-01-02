import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReactSession } from 'react-client-session'

/*Composant react qui représente un seul cours */

ReactSession.setStoreType("localStorage")

export default function OneCours() {

    const { id } = useParams()
    const [data, setData] = useState([])
    const [comments, setComments] = useState([])

    useEffect(() => {

        const fetchUsersData = async () => {

            const response = await axios.get(`http://localhost:8080/cours/${id}`)

            setData(response.data)

        }

        const fetchComments = async () => {

            const response = await axios.get(`http://localhost:8080/cours/${id}/comments`)

            setComments(response.data)

        }

        fetchUsersData()
        fetchComments()

    }, [id])

    return (
        <>
            <h1>Voici plus de détails sur le cours : </h1>
            <p>{data.title}</p>
            <p>{data.description}</p>
            <img src={data.img}/> 
            <p>{data.sport}</p>
            <p>{data.price}</p>
            <p>{data.irl}</p>
            <p>{data.coach}</p>

            {
                ReactSession.get('id') !== null ? (
                    <>
                    <div>
                        <button onClick={1+1}>Acheter</button>
                    </div>
                    <div>
                        <button onClick={1+1}>Mettre en favoris ce cours</button>
                    </div>
                    <div>
                        <input type='text' placeholder='Vous voulez partager votre expérience ?'></input>
                        <button onClick={1+1}>Poster un commentaire</button>
                    </div>
                    </>
                ) : (
                    <div>
                        <h2>Connectez-vous pour acheter ou mettre en favoris ce cours</h2>
                        <h3>Seuls les membres connectés peuvent écrire des commentaires</h3>
                    </div>
                )
            }

            {
                comments.length !== 0 ? (
                    comments.map(comment => (
                        <div key={comment.id}>
                            <p>{comment.comment}</p>
                        </div>
                    ))
                ) : (
                    <div>
                        <h2>Il n'y a pas encore de commentaires sur ce cours</h2>
                    </div>
                )
            }
            
        </>
    )
}