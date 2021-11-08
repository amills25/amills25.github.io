import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      {/* <nav className="sticky-top"> */}
      {/* <NavLink
        className="nav-link fw-bold bg-transparent text-black text"
        to="/home"
      > */}
      <img
        src="./img/AMBlackXLTrans.jpg"
        className="rounded img-fluid mx-auto d-block postPic"
        alt="Small Black Logo"
      />
      {/* </NavLink> */}
      {/* </nav> */}
    </>
  );
}
