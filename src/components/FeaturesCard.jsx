export default function FeaturesCard(props) {
    return(
        <article className="feat-card">
            <span className="emoji">{props.emoji}</span> {/*Emoji*/}
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </article>
    )
}