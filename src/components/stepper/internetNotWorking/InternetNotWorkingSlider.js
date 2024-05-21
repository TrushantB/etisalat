"use client";
import { BILL_DEVIATION, INTERNET_NOT_WORKING } from "@/utility/constant";
import React, { useEffect, useRef } from "react";
import Slider from "react-slick";

function InternetNotWorkingSlider({ closeShowInternetNotWorking }) {
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
          sliderRef.current.innerSlider.state.currentSlide === 6 && closeShowInternetNotWorking()
        }
      }, time);
  }
  const slideTime = (slide) => {
    switch (slide) {
      case 0:
        sliderTimeOut(11000)
        break;
      case 1:
        sliderTimeOut(3000)
        break;
      case 2:
        sliderTimeOut(2000)
        break;
      case 3:
        sliderTimeOut(2000)
        break;
      case 4:
        sliderTimeOut(3500)
        break;
      case 5:
        sliderTimeOut(11000)
        break;
      case 6:
        sliderTimeOut(4000)
        break;
      default:
        console.log(`Sorry, we are out of ${slide}.`);
    }
  };
  return (
    <Slider ref={sliderRef} {...settings}>
      {INTERNET_NOT_WORKING.map((item, index) => {
        return (
          <div key={index}>
            <img className="w-full h-auto" src={item.url} />
          </div>
        );
      })}
      {/* <div>
                    <img className="w-full h-auto" src="/images/stepOne.gif" />
                  </div>
                  <div>
                    <img className="w-full h-auto" src="/images/stepTwo.gif" />
                  </div>
                  <div>
                    <img
                      className="w-full h-auto"
                      src="/images/stepThree.gif"
                    />
                  </div>
                  <div>
                    <img className="w-full h-auto" src="/images/stepFour.gif" />
                  </div>
                  <div>
                    <img className="w-full h-auto" src="/images/stepFive.gif" />
                  </div>
                  <div>
                    <img className="w-full h-auto" src="/images/stepSix.gif" />
                  </div>
                  <div>
                    <img
                      className="w-full h-auto"
                      src="/images/stepSeven.gif"
                    />
                  </div>
                  <div>
                    <img
                      className="w-full h-auto"
                      src="/images/stepEight.gif"
                    />
                  </div> */}
    </Slider>
  );
}

export default InternetNotWorkingSlider;
