import "./Experience.css";
import Navbar from "./Navbar";


import ludz1Image from "../img/ludz1.jpg";
import ludz2Image from "../img/ludz2.jpg";
import ludz3Image from "../img/ludz3.jpg";
import ludz4Image from "../img/ludz4.jpg";


const Experience = () => {
  return (
    <>
      <Navbar />

      

      <section id="portfolio">
        <div className="container">
          <div className="pb-5">
            <h1 className="mt-5 display-1 text-center text-white">My Experiences</h1>
            <br />
           
          </div>
          <div class="isotope">
            <div class="row">
              <h4><p className="display-6 text-white text-center">OJT at the Tourism Office at Mabinay, Negros Oriental</p></h4 >
              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={ludz1Image} alt="one" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={ludz2Image} alt="two" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={ludz3Image} alt="three" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={ludz4Image} alt="three" />
                  <div class="overlay"></div>
                </div>
              </div>

              

              <hr className="text-white" />
              

              
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            
          </div>
          <div class="row mt-3">
            <div class="col-md-12 text-center text-md-left text-light">
              <p> Copyright @ 2024 Ludz Portfolio </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Experience;
