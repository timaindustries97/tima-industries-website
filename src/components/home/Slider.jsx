import React from "react";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="home-slider">
      <Slick {...settings}>
        <div className="slider-item">
          <div
            className="slider-image"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url('/images/factory/factory1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="slider-content">
              <h1>Quality Industrial Components</h1>
              <p>
                Manufacturing excellence with superior materials and precision
                engineering
              </p>
              <a href="/products" className="btn btn-primary">
                Explore Products
              </a>
            </div>
          </div>
        </div>
        <div className="slider-item">
          <div
            className="slider-image"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url('/images/factory/factory1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="slider-content">
              <h1>Custom Industrial Solutions</h1>
              <p>
                Tailored engineering for your specific manufacturing
                requirements
              </p>
              <a href="/contact#contact-us-form" className="btn btn-primary">
                Request Quote
              </a>
            </div>
          </div>
        </div>
        <div className="slider-item">
          <div
            className="slider-image"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url('/images/factory/factory1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="slider-content">
              <h1>Trusted By Industry Leaders</h1>
              <p>
                Delivering reliability and performance across West Bengal and
                beyond
              </p>
              <a href="/about" className="btn btn-primary">
                About Us
              </a>
            </div>
          </div>
        </div>
      </Slick>
    </div>
  );
};

export default Slider;
