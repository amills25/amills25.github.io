import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function AboutMe() {
    return (
        <>
            <Header />

            <h1 className="text-center">ABOUT ME</h1>

            <Navbar />

            <br></br>

            <div className="container bg-white">
                <div className="row border border-dark border-5 rounded-3">
                    <div className="col"></div>
                    <h2 className="text-center">Andrew Mills</h2>
                    <div className="text-center">
                        <img
                            src="./img/glory.png"
                            className="rounded img-fluid"
                            alt="Image of Andrew"
                        />
                    </div>

                    <h3>Currently, I'm:</h3>
                    <ul>An aspiring web developer</ul>

                    <h3>Previously, I:</h3>
                    <ul>Spent five years as an insurance agent</ul>
                    <ul>Did years of volunteer ministry with high schoolers</ul>

                    <h3>In my free time, I enjoy:</h3>
                    <ul>Exploring My Old Kentucky Home</ul>
                    <ul>Playing fantasy sports</ul>
                    <ul>Cheering on the Kentucky Wildcats</ul>
                    <ul>Trying out new restaurants</ul>
                </div>
            </div>
            <Footer />
        </>
    );
}
