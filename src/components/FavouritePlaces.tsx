import placesData from "../utils/PlacesData";
import PlaceSection from "./PlaceSection"

function FavouritePlaces(): JSX.Element {
  return (
    <>
      {placesData.map((p1, index) => (
        <PlaceSection
        key={index}
        title={p1.title}
        place={p1.place}
        country={p1.country}
        image={p1.image}
        maps={p1.maps}
        description={p1.description}
        />
      ))}
    </>
  );
}

export default FavouritePlaces;
