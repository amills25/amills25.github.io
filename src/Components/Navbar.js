import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="container border border-dark border-5 rounded-3 bg-white col-md-4 col-sm-12">
        <div className="container">
          <nav className="nav nav-item nav-pills nav-fill">
            {/* <NavLink
              className="nav-link fw-bold bg-white text-black"
              to="/home"
            >
              Home
            </NavLink> */}
            <NavLink
              className="nav-link fw-bold bg-white text-black"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className="nav-link fw-bold bg-white text-black"
              to="/blog"
            >
              Blog
            </NavLink>
            <NavLink
              className="nav-link fw-bold bg-white text-black"
              to="/projects"
            >
              Portfolio
            </NavLink>
            <NavLink
              className="nav-link fw-bold bg-white text-black"
              to="/contact"
            >
              Contact Me
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
}
