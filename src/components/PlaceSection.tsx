import Place from "../type/Place"

function PlaceSection({
    title,
    place,
    country,
    image,
    maps,
    description,
}: Place): JSX.Element {
    return (
        <section className="EachPlace">
            <img src={image} alt={title} />
            <h1>{title}</h1>
            <h3>{place}, {country} (<a href={maps}>google maps</a>)</h3>
            <p>{description}</p>
        </section>
    )
}

export default PlaceSection;