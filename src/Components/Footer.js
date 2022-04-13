import '../stylesheets/Footer.css';

function Footer() {
  return (
   
      
      <footer className="bg-dark text-center text-white" >
        <div>
          <div className="container p-2 pb-5 mx-auto">
  
            <span>60"</span>
            <br />
            <span>SixtySeconds</span>
            <br />
            <hr />

                 {/* Linkedin */}

              <a
                className="btn btn-outline-light btn-floating m-1 rounded-circle"
                href="https://www.linkedin.com"
                role="button"
              >
                <i className="fa fa-linkedin"></i>
              </a>

                      {/* Twitter */}
                      <a
                className="btn btn-outline-light btn-floating m-1 rounded-circle"
                href="https://twitter.com"
                role="button"
              >
                <i className="fa fa-twitter"></i>
              </a>

                   {/* Instagram */}
                   <a
                className="btn btn-outline-light btn-floating m-1 rounded-circle"
                href="https://www.instagram.com"
                role="button"
              >
                <i className="fa fa-instagram"></i>
              </a>



              {/* Facebook */}
              <a
                className="btn btn-outline-light btn-floating m-1 rounded-circle"
                href="https://www.facebook.com"
                role="button"
              >
                <i className="fa fa-facebook"></i>
              </a>

            </div>
          </div>
        </footer>


  );
}

export default Footer;
