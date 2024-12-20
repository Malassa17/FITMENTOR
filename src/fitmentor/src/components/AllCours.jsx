import { Link } from "react-router-dom";

//<Link to="/cours">Voir le cours</Link>   FAIRE LA NAVIGATION VERS LA PAGE

export default function Cours({ id, title, vignette }) {

    return (
        <>
            <p>{title}</p>
            <p>{vignette}</p>    
        </>
    );
}
