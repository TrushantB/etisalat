import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const InfoPopup = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      {" "}
      <div className="text-white opacity-100 justify-center mx-auto gap-3 p-5 py-3 ">
        <Slider>
          <div className="">
            <img className="w-[500px] h-[300px]" src="/images/stepOne.gif" />
          </div>

          <div className="">
            <img className="w-[500px] h-[300px]" src="/images/stepTwo.gif" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default InfoPopup;
