import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const InfoPopup = () => {
  const [showModal, setShowModal] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    let interval;
    if (showModal) {
      interval = setInterval(() => {
        if (sliderRef.current) {
          sliderRef.current.slickNext();
        }
      }, 2000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [showModal]);

  const openModal = () => {
    setShowModal(true);
    // Reset slider to the first slide when modal is opened
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <button
        className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-pink-500 rounded shadow outline-none active:bg-pink-600 hover:shadow-lg focus:outline-none"
        type="button"
        onClick={openModal}
      >
        Open regular modal
      </button>
      {showModal && (
        <>
          <div className="fixed inset-0 z-50 flex items-end justify-center -mt-10 overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-5 max-w-3xl 2xl:max-w-[1400px]">
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <div
                  onClick={closeModal}
                  className="absolute z-50 text-xl cursor-pointer top-2 right-5 "
                >
                  x
                </div>
                <Slider ref={sliderRef} {...settings}>
                  <div>
                    <img
                      className="lg:h-[250px] sm:w-[300px] sm:w-[150px] lg:w-[500px] 2xl:w-[1300px] 2xl:h-auto"
                      src="/images/stepOne.gif"
                    />
                  </div>
                  <div>
                    <img
                      className="lg:h-[250px] sm:w-[300px] sm:w-[150px] lg:w-[500px] 2xl:w-[1300px] 2xl:h-auto"
                      src="/images/stepTwo.gif"
                    />
                  </div>
                  <div>
                    <img
                      className="lg:h-[250px] sm:w-[300px] sm:w-[150px] lg:w-[500px] 2xl:w-[1300px] 2xl:h-auto"
                      src="/images/stepThree.gif"
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <div
            className="fixed inset-0 z-40 bg-black opacity-25"
            onClick={closeModal}
          ></div>
        </>
      )}
    </>
  );
};

export default InfoPopup;