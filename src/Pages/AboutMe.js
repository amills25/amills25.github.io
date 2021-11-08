import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function AboutMe() {
  return (
    <>
      <Header />

      <h1 className="text-center myFont typewriter">ABOUT ME</h1>

      <Navbar />
      <div className="container col-md-5 col-sm-12">
        <br></br>
        <div className="border border-dark border-5 rounded-3 bg-white">
          <div className="col-5"></div>
          <h2 className="text-center">Andrew Mills</h2>
          <div className="text-center">
            <img
              src="./img/HEADSHOT.JPG"
              className="rounded img-fluid postPic"
              alt="Andrew Mills"
            />
          </div>

          <br></br>

          <row className="text-center">
            <h3>Currently, I'm:</h3>
            <p>An aspiring web developer</p>

            <h3>Previously, I:</h3>
            <p>Spent five years as an insurance agent</p>
            <p>Did years of volunteer ministry with high schoolers</p>

            <h3>In my free time, I enjoy:</h3>
            <p>Exploring My Old Kentucky Home</p>
            <p>Playing fantasy sports</p>
            <p>Cheering on the Kentucky Wildcats</p>
            <p>Trying out new restaurants</p>
          </row>
        </div>
      </div>
      <Footer />
    </>
  );
}
