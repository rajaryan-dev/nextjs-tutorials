"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ImageSlider = () => {
  const settings = {
    dots: true,
  };
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://images.pexels.com/photos/34203371/pexels-photo-34203371.jpeg" />
        </div>
        <div>
          <img src="https://images.pexels.com/photos/11230252/pexels-photo-11230252.jpeg" />
        </div>
        <div>
          <img src="https://images.pexels.com/photos/32132493/pexels-photo-32132493.jpeg" />
        </div>
        <div>
          <img src="https://images.pexels.com/photos/30288211/pexels-photo-30288211.jpeg" />
        </div>
      </Slider>
    </div>
  );
};
