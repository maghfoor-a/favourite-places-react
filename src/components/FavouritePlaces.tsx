import Place from "./Place";

function FavouritePlaces(): JSX.Element {
  return (
    <section className="FavouritePlaces">
      <section className="EachPlace">
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
      </section>
      <section className="EachPlace">
        <Place
          title={"Big and Scary"}
          place={"Alton Towers"}
          country={"United Kingdom"}
          image={"http://www.picturesofengland.com/img/L/1185174.jpg"}
          maps={"https://goo.gl/maps/Z7nXNKpXVsfHrAkE6"}
          description={
            "One of the best theme parks in the UK with many rides ranging from waterslides to big scary rollercoasters."
          }
        />
      </section>
      <section className="EachPlace">
        <Place
          title={"A Place to Push Your Limits"}
          place={"Social Climbing Leicester"}
          country={"United Kingdom"}
          image={
            "https://i.ytimg.com/vi/o8aQchmI9AQ/maxresdefault.jpg"
          }
          maps={"https://goo.gl/maps/Mz8VEejho1sHwgoc6"}
          description={
            "A climbing gym with lots of puzzles and a great community. Welcoming beginners as well as professionals."
          }
        />
      </section>
      <section className="EachPlace">
        <Place
          title={"Another Theme Park"}
          place={"Drayton Manor Theme Park"}
          country={"United Kingdom"}
          image={
            "https://www.draytonmanor.co.uk/fileadmin/user_upload/drayton_manor/Areas/adventure-cove-800x450.jpg"
          }
          maps={"https://goo.gl/maps/bPfmQv2sjKpLNDtr7"}
          description={
            "Drayton Manor Resort is home to a variety of exciting attractions with roller coasters, zoo and Thomas Land. Visit us today for the ultimate family day out!"
          }
        />
      </section>
      
    </section>
  );
}

export default FavouritePlaces;
