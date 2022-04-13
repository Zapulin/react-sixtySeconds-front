import top_image from "../Resources/images/top_image.svg";
import "../stylesheets/Home.css";

//Components
import CardHome from "../Components/CardHome";
import CardImageHome from "../Components/CardImageHome";

function Home() {
  return (
    <>
      <div className="fluid">
        <div className="position-relative">
          <img className="img-fluid" src={top_image} alt="" />
        </div>
      </div>
      <CardImageHome />
      <CardHome />
    </>
  );
}

export default Home;
