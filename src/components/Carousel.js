import React from 'react'

function Carousel() {
    return (
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img style={{ height: "60vh" }} src={require("../assets/b1.jpg")} className="d-block w-100" alt="Banner 1" />
          </div>
          <div className="carousel-item">
            <img style={{ height: "60vh" }} src={require("../assets/b2.jpg")} className="d-block w-100" alt="Banner 2" />
          </div>
          <div className="carousel-item">
            <img style={{ height: "60vh" }} src={require("../assets/b3.jpg")} className="d-block w-100" alt="Banner 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
  
  export default Carousel;