import "./Home.css";
import ppjosh1Image from "../img/ppjosh.png";
import Navbar from "./Navbar";
import ludzImage from "../img/ludz front.jpeg";
const Home = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper">
        
          <div className="container1">
            <div id="banner" className="d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 ok">
                    <div className="card">
                      <h1 className="text display-4 fw-bold text-white">
                        Ludevico Hitoro Jr.
                      </h1>
                      <br />
                      <p className="self text-light">
                             Loves to make FrontEnd Websites
                      </p>
                      <a href="/about" className="btn btn-brand shadow">
                        Know More
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 zoom-effect">
                    <div className="card">
                      <img
                        src={ludzImage}
                        alt="Profile Picture of Ludevico G.Hitoro"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      

      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            <p>Copyright @ 2024 Ludz Portfolio</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
