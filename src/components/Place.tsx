interface PlacesProps {
  title: string;
  place: string;
  country: string;
  image: string;
  maps: string;
  description: string;
}

function Place(props: PlacesProps): JSX.Element {
  return (
    <>
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>
        <b>
          {props.place}, {props.country}
        </b>{" "}
        (<a href={props.maps}>google maps</a>)
      </p>
      <p>{props.description}</p>
    </>
  );
}

export default Place;
