import top_image from "../Resources/images/top_image.svg";

//Components
import NotMemberRegister from "../Components/home/NotMemberRegister";
import InformationSection from "../Components/home/InformationSection";

function Home() {  
  return (
    <>
      <div className="fluid">
        <div className="position-relative">
          <img className="img-fluid" src={top_image} alt="" />
          <NotMemberRegister />
        </div>
      </div>
      <InformationSection />
    </>
  );
}

export default Home;
