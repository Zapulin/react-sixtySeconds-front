import top_image from "../Resources/images/top_image.jpg";

//Components
import NotMemberRegister from "../Components/home/NotMemberRegister";
import InformationSection from "../Components/home/InformationSection";
import LoginModal from "../Components/LoginModal";
import RegisterModal from "../Components/RegisterModal";

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
      <LoginModal />
      <RegisterModal />
    </>
  );
}

export default Home;
