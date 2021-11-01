import React from "react";
import { NavLink } from "react-router-dom";

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
                                <NavLink className="nav-link fw-bold" to="/home">Home</NavLink>
                                <NavLink className="nav-link fw-bold" to="/about">About</NavLink>
                                <NavLink className="nav-link fw-bold" to="/blog">Blog</NavLink>
                                <NavLink className="nav-link fw-bold" to="/projects">Portfolio</NavLink>
                                <NavLink className="nav-link fw-bold" to="/contact">Contact Me</NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
