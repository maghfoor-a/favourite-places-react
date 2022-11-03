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
      <img src={props.image} />
      <h2>{props.title}</h2>
      <p>
        <b>
          {props.place}, {props.country}
        </b>{" "}
        (<a href="https://goo.gl/maps/k6AALyUJydmRSEKT8">google maps</a>)
      </p>
      <p>{props.description}</p>
    </>
  );
}

export default Place;
