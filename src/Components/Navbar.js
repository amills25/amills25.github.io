import React from "react";

export default function Navbar() {
    return (
        <>
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
                                <a className="nav-link fw-bold" href="#">
                                    About
                                </a>
                                <a
                                    className="nav-link fw-bold"
                                    aria-current="page"
                                    href="#"
                                >
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
        </>
    );
}
