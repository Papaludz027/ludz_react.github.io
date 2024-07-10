import React from 'react';
import "./Portfolio.css";
import Navbar from "./Navbar";

import hui from "../img/hui 1.png";
import cms1Image from '../img/cms1.jpeg';
import cms3Image from '../img/cms3.jpeg';
import gui2 from "../img/gui2.png";

const Portfolio = () => {
  return (
    <>
      <Navbar />

      <section id="portfolio">
        <div className="container">
          <div className="pb-5">
            <h1 className="mt-5 display-1 text-center text-white">Projects</h1>
            <br />
            <hr className="text-white" />
          </div>
          <div className="isotope">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-10 mb-8 animate__animated animate__fadeInRight">
                <div className="item mt-10 text-center text-white">
                  <h5>Web Application for Water Consumption in CPSU Main Campus</h5>
                  <p>The Web Application for Water Consumption in CPSU-Main Campus is a dynamic web application designed to revolutionize the consumption of CPSU community using our Capstone Project.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio">
        <div className="container">
          <div className="pb-5">
            <br />
            <hr className="text-white" />
          </div>
          <div className="isotope">
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="item">
                  <img src={hui} alt="one" />
                  <div className="overlay"></div>
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className="item">
                  <img src={gui2} alt="two" />
                  <div className="overlay"></div>
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
          <div className="row mt-3">
            <div className="col-md-12 text-center text-md-left text-light">
              <p> Copyright @ 2024 Ludz Portfolio </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Portfolio;
