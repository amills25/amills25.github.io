import React from 'react'
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
                    <div className="col">
                        <h1 className="text-center fw-bold text-black display-3">ANDREW MILLS</h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
                        
                        <div className="row text-center">
                            <div className="col-2">
                            </div>
                            <div className="col-4">
                                <NavLink 
                                    className="nav-link fw-bold fs-2 text-uppercase text-black aboutLink" 
                                    to="/about"
                                >
                                    About
                                </NavLink>
                            </div>
                            <div className="col-3">
                                <NavLink 
                                    className="nav-link fw-bold fs-2 text-uppercase text-black blogLink" 
                                    to="/blog"
                                >
                                    Blog
                                </NavLink>
                            </div>
                            <div className="col-3">
                            </div>
                        </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

                        <div className="row text-center">
                            <div className="col-6">
                                <NavLink 
                                    className="nav-link fw-bold fs-2 text-uppercase text-black projLink" 
                                    to="/projects">
                                        Portfolio
                                </NavLink>
                            </div>
                            <div 
                                className="col-6"                             >
                                <NavLink 
                                    className="nav-link fw-bold fs-2 text-uppercase text-black blogLink" 
                                    to="/contact"
                                >
                                    Contact
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fixed-bottom">
                <Footer />
            </div>

        </body>
        </>
    )
}
