import React from "react";
import Slider from "react-slick";
import './SliderImg.css';

function SliderImg({ items, desktop, mobile }) {
  console.log(items);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: desktop.slidesToShow > 0 ? desktop.slidesToShow : 3,
    slidesToScroll: desktop.slidesToScroll > 0 ? desktop.slidesToScroll : 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: mobile.slidesToShow > 0 ? mobile.slidesToShow : 1,
          slidesToScroll: mobile.slidesToScroll > 0 ? mobile.slidesToScroll : 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };
  return (
    <div className="container">
      <Slider {...settings}>
        {items}
      </Slider>
    </div>
  );
}
export default SliderImg;