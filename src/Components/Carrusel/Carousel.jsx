import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import "./Carousel.css";


function DarkVariantExample() {
  return (
    <Carousel className='carrusel-slider' data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../img/BANNER-MUSCULACION.png"
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../img/BANNER-CARDIO.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../img/BANNER-CROSSFIT.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;