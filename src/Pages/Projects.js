import React from "react";
// import Header from "./Components/Header";
// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";

export default function AboutMe() {
    return (
        <>
            <img
                src="./img/AMBlackSmallTrans.jpg"
                className="rounded img-fluid mx-auto d-block"
                alt="Small Black Logo"
            />

            <h1 className="text-center">PORTFOLIO</h1>

            <div className="container border border-dark border-5 rounded-3 bg-white">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarNavAltMarkup"
                        >
                            <div className="navbar-nav">
                                <a className="nav-link fw-bold" href="#">
                                    Home
                                </a>
                                <a
                                    className="nav-link fw-bold"
                                    aria-current="page"
                                    href="#"
                                >
                                    About
                                </a>
                                <a className="nav-link fw-bold" href="#">
                                    Blog
                                </a>
                                <a className="nav-link fw-bold" href="#">
                                    Portfolio
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <br></br>

            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card text-center h-100">
                            <img
                                src="./img/Alarm Clock Snip.png"
                                className="card-img-top"
                                alt="Alarm CLock Project"
                            />
                            <div className="card-body">
                                <h4 className="card-title">Alarm Clock</h4>
                                <p className="card-text">
                                    <b>Tech Stack:</b> HTML, CSS, JavaScript
                                </p>
                                <a
                                    href="https://amills25.github.io/AlarmClock/"
                                    className="btn border-dark"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-center h-100">
                            <img
                                src="./img/WeatherAppSnip.png"
                                className="card-img-top"
                                alt="Weather App Project"
                            />
                            <div className="card-body">
                                <h4 className="card-title">Weather App</h4>
                                <p className="card-text">
                                    <b>Tech Stack:</b> HTML, CSS, Bootstrap,
                                    JavaScript
                                </p>
                                <a
                                    href="https://amills25.github.io/WeatherApp/"
                                    className="btn border-dark"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-center h-100">
                            <img
                                src="./img/TicTacToeSnip.png"
                                className="card-img-top"
                                alt="Tic Tac Toe Project"
                            />
                            <div className="card-body">
                                <h4 className="card-title">Tic Tac Toe</h4>
                                <p className="card-text">
                                    <b>Tech Stack:</b> HTML, CSS, Bootstrap,
                                    JavaScript
                                </p>
                                <a
                                    href="https://amills25.github.io/TicTacToe/"
                                    className="btn border-dark"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-center h-100">
                            <img
                                src="./img/ToDoSnip.png"
                                className="card-img-top"
                                alt="To Do List Project"
                            />
                            <div className="card-body">
                                <h4 className="card-title">To Do List</h4>
                                <p className="card-text">
                                    <b>Tech Stack:</b> HTML, CSS, Bootstrap,
                                    JavaScript, React
                                </p>
                                <a
                                    href="https://todo-570c8.web.app/"
                                    className="btn border-dark"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br></br>

            <div className="row-1">
                <div className="col text-center">
                    <img
                        src="./img/AMBlackSmallTrans.jpg"
                        alt="Andrew Mills Logo"
                        width="30"
                        height="24"
                    />
                    Developed by Andrew Mills, 2021.
                </div>
            </div>
        </>
    );
}
