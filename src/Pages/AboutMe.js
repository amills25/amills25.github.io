import React from 'react';

export default function AboutMe() {
    return (
        <>
            <img src="./img/AMBlackSmallTrans.jpg" class="rounded img-fluid mx-auto d-block" alt="Small Black Logo" />

            <h1 class="text-center">ABOUT ME</h1>

            <div class="container border border-dark border-5 rounded-3 bg-white">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a class="nav-link fw-bold" href="#">Home</a>
                                <a class="nav-link fw-bold" aria-current="page" href="#">About</a>
                                <a class="nav-link fw-bold" href="#">Blog</a>
                                <a class="nav-link fw-bold" href="#">Portfolio</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <br></br>

            <div className="container bg-white">
                <div className="row border border-dark border-5 rounded-3">
                    <div className="col"></div>
                    <h2 className="text-center">Andrew Mills</h2>
                    <div className="text-center">
                        <img src="./img/glory.png" className="rounded img-fluid" alt="Image of Andrew" />
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

            <div className="row-1">
                <div className="col text-center">
                    <img src="./img/AMBlackSmallTrans.jpg" alt="Andrew Mills Logo" width="30" height="24" />
                    Developed by Andrew Mills, 2021.
                </div>
            </div>
        </>
    );
}