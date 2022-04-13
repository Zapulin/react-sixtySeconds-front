import top_image from "../Resources/images/top_image.svg";

//Components
import Footer from '../Components/Footer'
import NavbarHome from '../Components/NavbarHome'

function Home() {

  return (
    <> 
    <NavbarHome/>
      <div className="container-fluid xxl">
          <div className="position-relative">
            <img className="img-fluid" src={top_image} alt="" />
            <div className="card rounded m-2 p-2 position-absolute top-50" style={{background:'#FF8638'}}>
                 <span> The audio social media </span>
                 <span> ¿Aún no eres miembro? </span>
                 <span> Regístrate gratis </span>
                <div className="d-flex justify-content-between">
                    <button className="btn rounded-pill"> Iniciar sesión</button>
                    <button className="btn btn-primary ms-2 rounded-pill"> Continuar sin registrarse </button>
                </div>
            </div>
        </div>
      </div>
      <div>
        <div>
            <h3>¿Por qué 60"?</h3>
            <ul>
                <li><span>La nueva red social de audio 60" ¡Es la última moda!</span></li>
                <li><span>Comparte tu contenido con tus propias palabras</span></li>
                <li><span>¡No te lo pierdas!</span></li>
            </ul>
        </div>
        <div>
            <h3>¿Cómo funciona?</h3>
            <ul>
                <li><span>Graba lo que te apetezca</span></li>
                <li><span>Aplica un tema para aumentar visibilidad</span></li>
                <li><span>Elige quien puede verlo</span></li>
                <li><span>Comparte</span></li>
            </ul>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Home;
