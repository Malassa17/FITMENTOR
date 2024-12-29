import { Link } from "react-router-dom";
import vignette_ from '../data/img/foot.png'

//<Link to="/cours">Voir le cours</Link>   FAIRE LA NAVIGATION VERS LA PAGE

/*Composant react qui représente un cours
utilisé dans App.jsx pour afficher tous les cours*/

export default function Cours({ id, title, vignette }) {

    return (
        <>
            <p>{title}</p>
            <p>{vignette}</p>
            <img src={vignette_}/> 
            <button>Voir le cours</button>  
        </>
    );
}
