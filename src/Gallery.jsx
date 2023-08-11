export default function Gallery(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.artistDisplayName}</h2>
            <p>{props.medium}</p>
            <p>{props.culture}</p>
            <img style={{maxWidth:'35vw'}}src={props.primaryImage} alt="" />
        </div>
    )
}