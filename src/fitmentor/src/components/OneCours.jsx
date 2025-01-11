import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ReactSession } from 'react-client-session'
import './OneCours.css'

import imgFoot from '../../public/img/foot.jpg'
import imgTennis from '../../public/img/tennis.jpg'
import imgYoga from '../../public/img/yoga.jpg'
import imgMuscu from '../../public/img/musculation.jpg'
import imgCallisthenie from '../../public/img/callisthenie.jpg'
import imgVelo from '../../public/img/velo.jpg'
import imgCourse from '../../public/img/course.jpg'

const images = {
    'foot.jpg': imgFoot,
    'tennis.jpg': imgTennis,
    'yoga.jpg': imgYoga,
    'musculation.jpg': imgMuscu,
    'callisthenie.jpg': imgCallisthenie,
    'velo.jpg': imgVelo,
    'course.jpg': imgCourse
}

/*Composant react qui représente un seul cours */

ReactSession.setStoreType("localStorage")

export default function OneCours() {

    const { id } = useParams()
    const [data, setData] = useState([])
    const [comments, setComments] = useState([])
    const [oneComment, setOneComment] = useState('')
    const [contents, setContents] = useState([])
    const [coach, setCoach] = useState([])
    const [achete, setAchete] = useState(true)

    const handleAchete = async () => {

        const response = await axios.post(`/client/mescours`, {
            client: ReactSession.get('id'),
            cours: id,
        })

        if (response.status === 201) {
            alert('Achat confirmé')
            setAchete(true)
        }
        else {
            alert('Erreur lors de l\'achat')
        }
    }

    const handleFavoris = async () => {

        const response = await axios.post(`/client/favoris`, {
            client: ReactSession.get('id'),
            cours: id,
        })

        if (response.status === 201) {
            alert('Ajouté aux favoris')
        }
        else {
            alert('Erreur lors de l\'ajout aux favoris')
        }
    }

    const handleComment = async () => {

        if(!achete) {
            alert('Vous devez acheter le cours pour poster un commentaire')
            return
        }

        const response = await axios.post(`/cours/comments`, {
            comment: oneComment,
            cours: id,
        })

        if (response.status === 201) {
            alert('Commentaire posté')
        }
        else {
            alert('Erreur lors du post du commentaire')
        }
    }

    async function fetchCoach(coach) {
                
        const response = await axios.get(`/coach/${coach}`)

        setCoach(response.data)
    }

    useEffect(() => {

        const fetchUsersData = async () => {

            const response = await axios.get(`/cours/${id}`)

            setData(response.data)

            fetchCoach(response.data.coach)

        }

        const fetchComments = async () => {

            const response = await axios.get(`/cours/${id}/comments`)

            setComments(response.data)

        }

        const fetchContents = async () => {

            const response = await axios.get(`/mescours/content/${id}`)

            setContents(response.data)

        }

        const isAchete = async () => {

            const response = await axios.get(`/client/${ReactSession.get('id')}/mescours/${id}`)

            console.log(response)
    
            if (response.data === "") { 
                setAchete(true)
            }
            else{
                setAchete(false)
            }
        }

        fetchUsersData()
        fetchComments()
        fetchContents()
        isAchete()

        console.log(achete)

    }, [id])

    return (
        <>  
            <div className="container">
            <div className="header">
                <img src={images[data.img]} className="header-image" />
                <div className="info">
                    <h2 className="info-course-title">{data.title}</h2>
                    <p className="price">Prix du cours : {data.price} €</p>
                    {ReactSession.get('id') !== null ? (
                        <>
                            <div className="actions">
                                <button className="button" onClick={handleAchete}>Acheter</button>
                                <button className="button" onClick={handleFavoris}>Mettre en favoris</button>
                            </div>
                            <div className="comment-section">
                                <input 
                                    className="input" 
                                    type="text" 
                                    value={oneComment}
                                    onChange={(ev) => setOneComment(ev.target.value)}
                                    placeholder="Partagez votre expérience"
                                />
                                <button className="button" onClick={handleComment}>Poster</button>
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
                <h4>Coordonnées du coach : {coach.identifier}</h4>
                <p>Email : {coach.mail}</p>
                <p>Téléphone : {coach.tel}</p>
            </div>

            <div className="content">
                <h2>Contenus du cours :</h2>
                {!achete ? (
                    console.log(achete),
                    contents.map(content => (
                        <ul className="content-list" key={content.id}>
                            <a>{content.content}</a>
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