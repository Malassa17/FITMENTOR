import { Link } from "react-router-dom";
import vignette_foot from '../data/img/foot.jpg'
import vignette_tennis from '../data/img/tennis.jpg'

/*Composant react qui représente un cours
utilisé dans App.jsx pour afficher tous les cours*/

export default function Cours({ id, title, vignette }) {

    return (
        <>
            <p>{title}</p>
            <img src={vignette_foot}/> 
            <div><Link to={`/cours/${id}`}>Voir le cours</Link> </div>
        </>
    );
}
