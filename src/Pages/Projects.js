import React from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function AboutMe() {
  return (
    <>
      <Header />

      <h1 className="text-center myFont typewriter">PORTFOLIO</h1>

      <Navbar />

      <br></br>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card text-center h-100">
              <div className="portContainer">
                <img
                  src="./img/Alarm Clock Snip.png"
                  className="card-img-top portImage"
                  alt="Alarm CLock Project"
                />
              </div>
              <div className="card-body cardAlign">
                <h4 className="card-title">Alarm Clock</h4>
                <p className="card-text">
                  <b>Tech Stack:</b> HTML, CSS, JavaScript
                </p>
                <div className="row justify-content-center">
                  <a
                    href="https://amills25.github.io/AlarmClock/"
                    className="btn border-dark col-4 mx-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                  </a>{" "}
                  <a
                    href="https://github.com/amills25/AlarmClock"
                    className="btn border-dark col-4 mx-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center h-100">
              <div className="portContainer">
                <img
                  src="./img/WeatherAppSnip.png"
                  className="card-img-top portImage"
                  alt="Weather App Project"
                />
              </div>
              <div className="card-body cardAlign">
                <h4 className="card-title">Weather App</h4>
                <p className="card-text">
                  <b>Tech Stack:</b> HTML, CSS, Bootstrap, JavaScript
                </p>
                <div className="row justify-content-center">
                  <a
                    href="https://amills25.github.io/WeatherApp/"
                    className="btn border-dark col-4 mx-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                  </a>{" "}
                  <a
                    href="https://github.com/amills25/WeatherApp"
                    className="btn border-dark col-4 mx-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center h-100">
              <div className="portContainer">
                <img
                  src="./img/TicTacToeSnip.png"
                  className="card-img-top portImage"
                  alt="Tic Tac Toe Project"
                />
              </div>
              <div className="card-body cardAlign">
                <h4 className="card-title">Tic Tac Toe</h4>
                <p className="card-text">
                  <b>Tech Stack:</b> HTML, CSS, Bootstrap, JavaScript
                </p>
                <div className="row justify-content-center">
                  <a
                    href="https://amills25.github.io/TicTacToe/"
                    className="btn border-dark col-4 mx-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                  </a>{" "}
                  <a
                    href="https://github.com/amills25/TicTacToe"
                    className="btn border-dark col-4 mx-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center h-100">
              <div className="portContainer">
                <img
                  src="./img/ToDoSnip.png"
                  className="card-img-top portImage"
                  alt="To Do List Project"
                />
              </div>
              <div className="card-body cardAlign">
                <h4 className="card-title">To Do List</h4>
                <p className="card-text">
                  <b>Tech Stack:</b> HTML, CSS, Bootstrap, JavaScript, React
                </p>
                <div className="row justify-content-center">
                  <a
                    href="https://todo-570c8.web.app/"
                    className="btn border-dark col-4 mx-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                  </a>{" "}
                  <a
                    href="https://github.com/amills25/todo"
                    className="btn border-dark col-4 mx-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center h-100">
              <div className="portContainer">
                <img
                  src="./img/FishingHooksSnip.png"
                  className="card-img-top portImage"
                  alt="Fishing Hooks Project"
                />
              </div>
              <div className="card-body cardAlign">
                <h4 className="card-title">Bait and Tackle Product Page</h4>
                <p className="card-text">
                  <b>Tech Stack:</b> HTML, CSS, React-Bootstrap, JavaScript,
                  React Hooks, React-Router
                </p>
                <div className="row justify-content-center">
                  <a
                    href="https://fishing-hooks-6464e.web.app/"
                    className="btn border-dark col-4 mx-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                  </a>{" "}
                  <a
                    href="https://github.com/amills25/fishing-hooks"
                    className="btn border-dark col-4 mx-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center h-100">
              <div className="portContainer">
                <img
                  src="./img/FishingGroupSnip.png"
                  className="card-img-top portImage"
                  alt="Cat Steve's Project"
                />
              </div>
              <div className="card-body cardAlign">
                <h4 className="card-title">Cat Steve's Consumer Site</h4>
                <p className="card-text">
                  <b>Team Project Addition:</b> Agile, Merge conflicts, Pull
                  request meetings, Code reviews, Team management, Scrum project
                  management.
                </p>
                <div className="row justify-content-center">
                  <a
                    href="https://cat-steves.web.app/"
                    className="btn border-dark col-4 mx-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                  </a>{" "}
                  <a
                    href="https://github.com/amills25/FishingGroup"
                    className="btn border-dark col-4 mx-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center h-100">
              <div className="portContainer">
                <img
                  src="./img/HomeScreenshot.PNG"
                  className="card-img-top portImage"
                  alt="SEC Draft League Project"
                />
              </div>
              <div className="card-body cardAlign">
                <h4 className="card-title">The Original SEC Draft League</h4>
                <p className="card-text">
                  <b>Tech Stack:</b> HTML, CSS, React-Bootstrap, JavaScript,
                  React Hooks, React-Router, PHP, SQL, Laravel
                </p>
                <div className="row justify-content-center">
                  <a
                    href="https://secdraftleague.web.app/"
                    className="btn border-dark col-3 mx-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                  </a>{" "}
                  <a
                    href="https://github.com/amills25/SECDraftLeague"
                    className="btn border-dark col-3 mx-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Front End Repo
                  </a>{" "}
                  <a
                    href="https://github.com/amills25/SECDraftLeagueLaravel"
                    className="btn border-dark col-3 mx-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Back End Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br></br>

      <Footer />
    </>
  );
}
