import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1 className="text-center fw-bold text-black myFont">
              Andrew Mills
            </h1>
            <h4 className="text-center fw-bold text-black myFont typewriter">
              Web Developer
            </h4>
          </div>
        </div>
      </div>

      <Navbar />
      <div className="container col-md-3 col-sm-12">
        <br></br>
        <div className="border border-dark border-5 rounded-3 bg-white">
          <div className="col">
            <h4 className="text-center fw-bold contH">Contact</h4>
            <div className="row">
              <div className="col-5 text-end">
                <a
                  className="btn"
                  href="mailto:awmills25@gmail.com"
                  role="button"
                >
                  <img
                    src="./img/Email.svg"
                    className="rounded socialLogo"
                    alt="Email Logo"
                  />
                </a>
              </div>
              <div className="col-7 fw-bold">
                <p className="contH">awmills25@gmail.com</p>
              </div>
            </div>
            <div className="row">
              <div className="col-5 text-end">
                <a
                  className="btn"
                  href="#"
                  tabindex="-1"
                  role="button"
                  aria-disabled="true"
                >
                  <img
                    src="./img/Phone.svg"
                    className="rounded socialLogo"
                    alt="Phone Logo"
                  />
                </a>
              </div>
              <div className="col-7 fw-bold">
                <p className="contH">859.327.0988</p>
              </div>
            </div>
            <div className="row">
              <div className="col-5 text-end">
                <a
                  className="btn"
                  href="https://twitter.com/a_mills25"
                  target="_blank"
                  role="button"
                >
                  <img
                    src="./img/Twitter.svg"
                    className="rounded socialLogo"
                    alt="Twitter Logo"
                  />
                </a>
              </div>
              <div className="col-7 fw-bold">
                <p className="contH">a_mills25</p>
              </div>
            </div>
            <div className="row">
              <div className="col-5 text-end">
                <a
                  className="btn"
                  href="https://github.com/amills25"
                  target="_blank"
                  role="button"
                >
                  <img
                    src="./img/Github.svg"
                    className="rounded socialLogo"
                    alt="Github Logo"
                  />
                </a>
              </div>
              <div className="col-7 fw-bold">
                <p className="contH">amills25</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed-bottom">
        <Footer />
      </div>
    </>
  );
}
