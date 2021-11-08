import React from "react";
import Footer from "../Components/Footer";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <body>
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
                  className="image img-fluid"
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
              <div className="container-fluid">
                <h1 className="text-center fw-bold text-black myFont typewriter">
                  Full-stack dev.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
