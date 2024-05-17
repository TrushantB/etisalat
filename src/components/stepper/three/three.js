import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Three = ({
  setStep,
  onSelectType,
  isEnglish,
  isMain,
}) => {
  const [showBillDeviation, setShowBillDeviation] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    let interval;
    if (showBillDeviation) {
      interval = setInterval(() => {
        if (sliderRef.current) {
          sliderRef.current.slickNext();
        }
      }, 2000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [showBillDeviation]);

  const openShowBillDeviation = () => {
    setShowBillDeviation(true);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  };

  const closeShowBillDeviation = () => {
    setShowBillDeviation(false);
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
      {isMain && (
        <div className="bg-gradient-to-r from-[rgba(10,10,10,0.5)] to-[rgba(224,8,0,0.5)] py-5 grid grid-cols-3 px-3 gap-3 gap-y-6 sm:gap-y-3 rounded-[24px]  modal-wrapper">
          <div
            onClick={openShowBillDeviation}
            className="relative flex flex-col cursor-pointer"
          >
            <div className="flex flex-col items-center justify-start h-full gap-1 p-2 bg-white rounded-md min-[1800px]:p-6 min-[1800px]:gap-3">
              <img
                className="w-6 h-6 min-[1800px]:w-24 min-[1800px]:h-24 services-icon"
                src="/images/postpaid.svg"
                alt=""
              />
              <p className="text-xs text-center sm:text-sm text-secondary-in">
                {isEnglish ? "Bill Deviation" : "انحراف الفاتورة"}
              </p>
            </div>
          </div>

          <div
            className="flex flex-col items-center justify-start h-full gap-1 p-2 bg-white rounded-md cursor-pointer min-[1800px]:p-6 min-[1800px]:gap-3"
          >
            <img
              className="w-6 h-6 min-[1800px]:w-24 min-[1800px]:h-24 services-icon  "
              src="/images/postpaid.svg"
              alt=""
            />
            <p className="text-xs text-center sm:text-sm text-secondary-in">
              {isEnglish ? "Internet not working" : "الإنترنت لا يعمل"}
            </p>
          </div>

          <div
            className="relative flex flex-col cursor-pointer"
          >
            <div className="flex flex-col items-center justify-start h-full gap-1 p-2 bg-white rounded-md min-[1800px]:p-6 min-[1800px]:gap-3">
              <img
                className="w-6 h-6 min-[1800px]:w-24 min-[1800px]:h-24 services-icon  min-[1800px]:mt-3  "
                src="/images/tv.svg"
                alt=""
              />
              <p className="text-xs text-center sm:text-sm text-secondary-in">
                {" "}
                {isEnglish ? "Facing an issue with eLife" : "واجهت مشكلة مع إي لايف"}
              </p>
            </div>
          </div>

          <div
            className="relative flex flex-col cursor-pointer"
          >
            <div className="flex flex-col items-center justify-start h-full gap-1 p-2 bg-white rounded-md min-[1800px]:p-6 min-[1800px]:gap-3">
              <img
                className="w-6 h-6 min-[1800px]:w-24 min-[1800px]:h-24 services-icon  "
                src="/images/wifi.svg"
                alt=""
              />
              <p className="text-xs text-center sm:text-sm text-secondary-in">
                {isEnglish ? "Speed is very slow" : "السرعة بطيئة جدًا"}
              </p>
            </div>
          </div>

          <div
            className="flex flex-col items-center justify-start h-full gap-1 p-2 bg-white rounded-md cursor-pointer min-[1800px]:p-6 min-[1800px]:gap-3"
          >
            <img
              className="w-6 h-6 min-[1800px]:w-24 min-[1800px]:h-24 services-icon  "
              src="/images/bill.svg"
              alt=""
            />
            <p className="text-xs text-center sm:text-sm text-secondary-in">
              {" "}
              {isEnglish ? "Live Chat" : "دردشة مباشرة"}{" "}
            </p>
          </div>

          <div
            className="flex flex-col items-center justify-start h-full gap-1 p-2 bg-white rounded-md cursor-pointer min-[1800px]:p-6 min-[1800px]:gap-3"
          >
            <img
              className="w-6 h-6 min-[1800px]:w-24 min-[1800px]:h-24 services-icon "
              src="/images/pay.svg"
              alt=""
            />
            <p className="text-xs text-center sm:text-sm text-secondary-in">
            {isEnglish ? "Faq" : "التعليمات"}{" "}
            </p>
          </div>
        </div>
      )}
       {showBillDeviation && (
        <>
          <div className="fixed inset-0 z-50 flex items-end justify-center -mt-10 overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-5 max-w-3xl 2xl:max-w-[1400px] w-full">
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <div
                  onClick={closeShowBillDeviation}
                  className="absolute z-50 text-xl cursor-pointer top-2 right-5 "
                >
                  x
                </div>
                <Slider ref={sliderRef} {...settings}>
                  <div>
                    <img
                      className="w-full h-auto"
                      src="/images/stepOne.gif"
                    />
                  </div>
                  <div>
                    <img
                      className="w-full h-auto"
                      src="/images/stepTwo.gif"
                    />
                  </div>
                  <div>
                    <img
                      className="w-full h-auto"
                      src="/images/stepThree.gif"
                    />
                  </div>
                  <div>
                    <img
                      className="w-full h-auto"
                      src="/images/stepFour.gif"
                    />
                  </div>
                  <div>
                    <img
                      className="w-full h-auto"
                      src="/images/stepFive.gif"
                    />
                  </div>
                  <div>
                    <img
                      className="w-full h-auto"
                      src="/images/stepSix.gif"
                    />
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
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <div
            className="fixed inset-0 z-40 bg-black opacity-25"
            onClick={closeShowBillDeviation}
          ></div>
        </>
      )}
    </>
  );
};

export default Three;
