"use client";
import {  ELIFE } from "@/utility/constant";
import React, { useEffect, useRef } from "react";
import Slider from "react-slick";

function ElifeSlider({ closeShowElife }) {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    slideTime(sliderRef.current.innerSlider.state.currentSlide);
  }, [sliderRef?.current?.innerSlider?.state?.currentSlide]);

  const sliderTimeOut = (time)=>{
    setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.slickNext();
         slideTime(sliderRef.current.innerSlider.state.currentSlide+1);
          sliderRef.current.innerSlider.state.currentSlide === 6 && closeShowElife()
        }
      }, time);
  }
  const slideTime = (slide) => {
    switch (slide) {
      case 0:
        sliderTimeOut(10000)
        break;
      case 1:
        sliderTimeOut(2000)
        break;
      case 2:
        sliderTimeOut(2500)
        break;
      case 3:
        sliderTimeOut(4000)
        break;
      case 4:
        sliderTimeOut(3000)
        break;
      case 5:
        sliderTimeOut(3000)
        break;
      case 6:
        sliderTimeOut(3000)
        break;
      default:
        console.log(`Sorry, we are out of ${slide}.`);
    }
  };
  return (
    <Slider ref={sliderRef} {...settings}>
      {ELIFE.map((item, index) => {
        return (
          <div key={index}>
            <img className="w-full h-auto" src={item.url} />
          </div>
        );
      })}
    </Slider>
  );
}

export default ElifeSlider;
