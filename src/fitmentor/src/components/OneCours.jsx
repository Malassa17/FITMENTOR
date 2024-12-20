export default function OneCours({id,title,vignette,description,coach,price,irl,sport}) {
    return (
        <>
            <p>{title}</p>
            <p>{vignette}</p>
            <p>{description}</p>
            <p>{coach}</p>
            <p>{price}</p>
            <p>{irl}</p>
            <p>{sport}</p>
        </>
    )
}