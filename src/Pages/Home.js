import React from "react";
import Footer from "../Components/Footer";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <body className="homebg">
        <br></br>
        <br></br>

        <div className="container">
          <div className="row bg-transparent">
            <div className="col text-center">
              <br></br>

              <h1 className="text-center fw-bold text-black display-1 myFont">
                Andrew Mills
              </h1>

              <div className="homeHover">
                <img
                  src="./img/AMBlackMediumTrans.jpg"
                  alt="Mills Logo"
                  className="image"
                />
                <div className="overlay">
                  <nav>
                    <NavLink
                      className="nav-link fw-bold bg-transparent text-black text"
                      to="/about"
                    >
                      ENTER
                    </NavLink>
                  </nav>
                </div>
              </div>
              <h1 className="text-center fw-bold text-black myFont typewriter">
                Full-stack web developer.
              </h1>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
