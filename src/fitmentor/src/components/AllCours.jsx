import { Link } from "react-router-dom"
import vignette_foot from '../data/img/foot.jpg'

/*Composant react qui représente un cours
utilisé dans App.jsx pour afficher tous les cours*/

export default function Cours({data,input}) {

    if (input === '') {
        return (
            <>
                <h4>{data.title}</h4>
                <img src={vignette_foot}/> 
                <div><Link to={`/cours/${data.id}`}>Voir le cours</Link> </div>
            </>
        )
    }else if (data.sport.toLowerCase().includes(input)) {
        return (
            <>
                <h4>{data.title}</h4>
                <img src={vignette_foot}/> 
                <div><Link to={`/cours/${data.id}`}>Voir le cours</Link> </div>
            </>
        )
    }
}
