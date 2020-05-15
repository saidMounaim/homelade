import React from 'react'

const HeroSearch = () => {
    return (
        <div className="hero-wrap ftco-degree-bg" 
        style={{ backgroundImage: `url(${window.location.origin}/images/bg_1.jpg)` }} 
        data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
            <div className="row no-gutters slider-text justify-content-center align-items-center">
            <div className="col-lg-8 col-md-6 d-flex align-items-end">
                <div className="text text-center">
                    <h1 className="mb-4">The Simplest <br />Way to Find Property</h1>
                    <p style={{ fontSize: "18px" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts</p>
                    <form className="search-location mt-md-5">
                        <div className="row justify-content-center">
                        <div className="col-lg-10 align-items-end">
                            <div className="form-group">
                            <div className="form-field">
                            <input type="text" className="form-control" placeholder="Search location" />
                            <button><span className="ion-ios-search"></span></button>
                            </div>
                        </div>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
        <div className="mouse">
            <a href="#" className="mouse-icon">
                <div className="mouse-wheel"><span className="ion-ios-arrow-round-down"></span></div>
            </a>
        </div>
        </div>
    )
}

export default HeroSearch
