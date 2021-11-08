import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="nav justify-content-center">
        <NavLink className="nav-link bg-transparent" to="/home">
          <img
            src="./img/AMBlackXLTrans.jpg"
            className="rounded img-fluid mx-auto d-block postPic"
            alt="Small Black Logo"
          />
        </NavLink>
      </nav>
    </>
  );
}
