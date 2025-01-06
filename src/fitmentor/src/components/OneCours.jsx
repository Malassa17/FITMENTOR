import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReactSession } from 'react-client-session'
import './OneCours.css'

import vignette_foot from '../data/img/foot.jpg'

/*Composant react qui représente un seul cours */

ReactSession.setStoreType("localStorage")

export default function OneCours() {

    const { id } = useParams()
    const [data, setData] = useState([])
    const [comments, setComments] = useState([])
    const [contents, setContents] = useState([])
    const [achete, setAchete] = useState(false)

    useEffect(() => {

        const fetchUsersData = async () => {

            const response = await axios.get(`http://localhost:8080/cours/${id}`)

            setData(response.data)

        }

        const fetchComments = async () => {

            const response = await axios.get(`http://localhost:8080/cours/${id}/comments`)

            setComments(response.data)

        }

        const fetchContents = async () => {

            const response = await axios.get(`http://localhost:8080/mescours/content/${id}`)

            setContents(response.data)

        }

        const isAchete = async () => {

            const response = await axios.get(`http://localhost:8080/client/${ReactSession.get('id')}/mescours/${id}`)
    
            if (response.data.length !== 0) {
                setAchete(true)
            }
        }

        const handleAchete = async () => {
            alert('Achat confirmé')
            setAchete(true)
        }

        const handleFavoris = async () => {
            alert('Ajouté aux favoris')
        }

        const handleComment = async () => {
            alert('Commentaire posté')
        }

        fetchUsersData()
        fetchComments()
        fetchContents()
        isAchete()

    }, [id])

    return (
        <>  
            <div className="container">
            <div className="header">
                <img src={vignette_foot} className="header-image" />
                <div className="info">
                    <h3 className="info-title">Voici plus de détails sur le cours :</h3>
                    <h2 className="info-course-title">{data.title}</h2>
                    <p className="price">Prix du cours : {data.price} €</p>
                    {ReactSession.get('id') !== null ? (
                        <>
                            <div className="actions">
                                <button className="button" onClick={1+1}>Acheter</button>
                                <button className="button" onClick={1+1}>Mettre en favoris</button>
                            </div>
                            <div className="comment-section">
                                <input 
                                    className="input" 
                                    type="text" 
                                    placeholder="Partagez votre expérience"
                                />
                                <button className="button" onClick={1+1}>Poster</button>
                            </div>
                        </>
                    ) : (
                        <div className="info-message">
                            <h2>Connectez-vous pour acheter ou mettre en favoris ce cours</h2>
                            <h3>Seuls les membres connectés peuvent écrire des commentaires</h3>
                        </div>
                    )}
                </div>
            </div>

            <div className="description">
                <h2>Description</h2>
                <p>{data.description}</p>
                <h2>Informations complémentaires</h2>
                <p>Type de sport : {data.sport}</p>
                <p>{data.irl === 0 ? "Cours uniquement en ligne" : "Cours disponibles en présentiel"}</p>
            </div>

            <div className="content">
                <h2>Contenus du cours :</h2>
                {achete ? (
                    contents.map(content => (
                        <ul className="content-list" key={content.id}>
                            <li>{content.content}</li>
                        </ul>
                    ))
                ) : (
                    <p>Pour accéder à l'ensemble des contenus d'un cours, vous devez l'acheter</p>
                )}
            </div>

            <div className="comments">
                <h2>Commentaires</h2>
                {comments.length !== 0 ? (
                    comments.map(comment => (
                        <div className="comment" key={comment.id}>
                            <p>{comment.comment}</p>
                        </div>
                    ))
                ) : (
                    <div className="no-comments">
                        <h2>Aucun commentaire pour le moment</h2>
                    </div>
                )}
            </div>
        </div>

        </>
    )
}