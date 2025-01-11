import { Link } from "react-router-dom"
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

/*Composant react qui représente un cours
utilisé dans App.jsx pour afficher tous les cours*/

export default function Cours({data,input}) {

    if (input === '') {
        return (
            <>
                <div className="item">
                    <h4>{data.title}</h4>
                    <img src={images[data.img]}/> 
                    <div><Link to={`/cours/${data.id}`}>Voir le cours</Link> </div>
                </div>
            </>
        )
    }else if (data.sport.toLowerCase().includes(input)) {
        return (
            <>
                <h4>{data.title}</h4>
                <img src={images[data.img]}/>  
                <div><Link to={`/cours/${data.id}`}>Voir le cours</Link> </div>
            </>
        )
    }
}
