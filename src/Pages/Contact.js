import React from "react";
import Navbar from "../Components/Navbar";

export default function Contact() {
    return (
        <>
        <Navbar />
            <div className="container">
                <div className="row" style="padding-top: 60px;">
                    <div className="col text-center">
                        <img
                            src="./img/AMBlackXLTrans.jpg"
                            className="rounded img-fluid"
                            alt="Small Black Logo"
                            style="max-height:250px;"
                        />
                        <h1
                            className="text-center fw-bold"
                            style="font-size: 40px;"
                        >
                            Andrew Mills
                        </h1>
                        <h4 className="text-center fw-bold">Web Developer</h4>
                    </div>
                </div>
            </div>

            <br></br>
            <br></br>

            <div className="container">
                <div className="border border-dark border-5 rounded-3 bg-light">
                    <div className="col">
                        <h4 className="text-center fw-bold">Contact</h4>
                        <div className="row">
                            <div className="col-3">
                                <a
                                    className="btn"
                                    href="mailto:awmills25@gmail.com"
                                    role="button"
                                >
                                    <img
                                        src="./img/Email.svg"
                                        className="rounded socialLogo"
                                        alt="Email Logo"
                                    />
                                </a>
                            </div>
                            <div className="col-9 fw-bold">
                                <p>awmills25@gmail.com</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <a className="btn" href="#!" role="button">
                                    <img
                                        src="./img/Phone.svg"
                                        className="rounded socialLogo"
                                        alt="Phone Logo"
                                    />
                                </a>
                            </div>
                            <div className="col-9 fw-bold">
                                <p>859.327.0988</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <a
                                    className="btn"
                                    href="https://twitter.com/a_mills25"
                                    target="_blank"
                                    role="button"
                                >
                                    <img
                                        src="./img/Twitter.svg"
                                        className="rounded socialLogo"
                                        alt="Twitter Logo"
                                    />
                                </a>
                            </div>
                            <div className="col-9 fw-bold">
                                <p>a_mills25</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <a
                                    className="btn"
                                    href="https://github.com/amills25"
                                    target="_blank"
                                    role="button"
                                >
                                    <img
                                        src="./img/Github.svg"
                                        className="rounded socialLogo"
                                        alt="Github Logo"
                                    />
                                </a>
                            </div>
                            <div className="col-9 fw-bold">
                                <p>amills25</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
