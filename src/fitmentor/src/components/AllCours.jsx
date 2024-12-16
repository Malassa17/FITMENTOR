export default function Cours({id,title,vignette}) {
    return (
        <>
            <p>{title}</p>
            <p>{vignette}</p>
            <button>Voir le cours</button>
        </>
    )
}