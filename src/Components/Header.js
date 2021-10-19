import React from 'react'

export default function Header() {
    return (
        <>
            <img src="./img/AMBlackXLTrans.jpg" class="rounded img-fluid mx-auto d-block" alt="Small Black Logo" style="max-height:250px;">
                <h1 class="text-center">Bootcamp Blog</h1>

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
                                    <a class="nav-link fw-bold" href="#">About</a>
                                    <a class="nav-link fw-bold" aria-current="page" href="#">Blog</a>
                                    <a class="nav-link fw-bold" href="#">Portfolio</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
        </>
    );
}
