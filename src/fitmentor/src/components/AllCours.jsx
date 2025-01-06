import { Link } from "react-router-dom"
import vignette_foot from '../data/img/foot.jpg'

/*Composant react qui représente un cours
utilisé dans App.jsx pour afficher tous les cours*/

export default function Cours(data) {

    return (
        <>
            <p>{data.data.title}</p>
            <img src={vignette_foot}/> 
            <div><Link to={`/cours/${data.data.id}`}>Voir le cours</Link> </div>
        </>
    )
}
