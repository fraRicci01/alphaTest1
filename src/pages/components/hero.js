import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import First from"./img/hero-carousel/hero-carousel-1.jpg";
import Second from"./img/hero-carousel/hero-carousel-2.jpg";
import Third from"./img/hero-carousel/hero-carousel-3.jpg";

function Hero() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ First }
                alt="First"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ Second }
                alt="Second"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ Third }
                alt="Third"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
  
    );
  }

export default Hero;