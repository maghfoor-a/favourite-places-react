import Place from "./Place";

function FavouritePlaces(): JSX.Element {
  return (
    <section>
      <Place
        title={"Open and Green"}
        place={"Leicester Bradgate Park"}
        country={"United Kingdom"}
        image={
          "https://i2-prod.leicestermercury.co.uk/incoming/article5251796.ece/ALTERNATES/s615/1_012BradgateJPG.jpg"
        }
        maps={"https://goo.gl/maps/K8nY73Yv6VGwE6Bj7"}
        description={
          "A gigantic park with lots of pretty places. Has deers, a broken down castle and the highest point in Leicester."
        }
      />
      <Place
        title={"Big and Scary"}
        place={"ALton Towers"}
        country={"United Kingdom"}
        image={"http://www.picturesofengland.com/img/L/1185174.jpg"}
        maps={"https://goo.gl/maps/Z7nXNKpXVsfHrAkE6"}
        description={
          "One of the best theme parks in the UK with many rides ranging from waterslides to big scary rollercoasters."
        }
      />
      <Place
        title={"Majestic Castle"}
        place={"Buckingham Palace"}
        country={"United Kingdom"}
        image={
          "https://cdn.londonandpartners.com/asset/buckingham-palace_image-courtesy-of-royal-collection-trust-her-majesty-queen-elizabeth-ii-2021-photo-andrew-holt_247a2afaed0312ad4e8fb6142fdcdd5a.jpg"
        }
        maps={"https://goo.gl/maps/R5hyu1tcXJ4fi9JS9"}
        description={
          "One the most famous royal castles in the UK. This places makes people want to visit the UK. blah blah blah"
        }
      />
    </section>
  );
}

export default FavouritePlaces;
