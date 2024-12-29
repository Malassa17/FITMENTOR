import { Link } from "react-router-dom";
import vignette_ from '../data/img/foot.jpg'

/*Composant react qui représente un cours
utilisé dans App.jsx pour afficher tous les cours*/

export default function Cours({ id, title, vignette }) {

    return (
        <>
            <p>{title}</p>
            <img src={vignette_}/> 
            <div><Link to={`/cours/${id}`}>Voir le cours</Link> </div>
        </>
    );
}
