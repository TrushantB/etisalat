import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BILL_DEVIATION } from "@/utility/constant";
import BillDeviationSlider from "../billDeviationSlider/BillDeviationSlider";
import InternetNotWorkingSlider from "../internetNotWorking/InternetNotWorkingSlider";
import ElifeSlider from "../elifeSlider/ElifeSlider";
import FaqSlider from "../faqSlider/FaqSlider";

const Three = ({
  setStep,
  onSelectType,
  isEnglish,
  isMain,
  billDeviation,
  handleStopTalking,
  internetNotWorking,
  elife,
  slowInternetSpeed,
}) => {
  const [showBillDeviation, setShowBillDeviation] = useState(false);
  const [showInternetNotWorking, setShowInternetNotWorking] = useState(false);
  const [showElif, setShowElif] = useState(false);
  const [showFaq, setShowFaq] = useState(false);

  const openShowBillDeviation = (event) => {
    billDeviation();
    setShowBillDeviation(true);
  };
  const openShowInternetNotWorking = (event) => {
    internetNotWorking();
    setShowInternetNotWorking(true);
  };

  const openElif = () => {
    elife();
    setShowElif(true);
  };
  const closeShowElife = () => {
    setShowElif(false);
    handleStopTalking();
  };

  const closeShowInternetNotWorking = () => {
    setShowInternetNotWorking(false);
    handleStopTalking();
  };

  const closeShowBillDeviation = () => {
    setShowBillDeviation(false);
    handleStopTalking();
  };

  const openFaq = () => {
    // elife();
    setShowFaq(true);
  };
  const closeShowFaq = () => {
    setShowFaq(false);
    handleStopTalking();
  };

  return (
    <>
      {isMain && (
        <div className="bg-gradient-to-r from-[rgba(10,10,10,0.5)] to-[rgba(224,8,0,0.5)] py-5 grid grid-cols-3 px-3 gap-3 gap-y-6 sm:gap-y-3 rounded-[24px]  modal-wrapper">
          <div
            onClick={openShowBillDeviation}
            className="relative flex flex-col cursor-pointer"
          >
            <div
              className="flex flex-col items-center justify-start h-full gap-1 p-2 bg-white rounded-md min-[1800px]:p-6 min-[1800px]:gap-3"
              name="bill deviation"
            >
              <img
                className="w-6 h-6 min-[1800px]:w-24 min-[1800px]:h-24 services-icon"
                src="/images/postpaid.svg"
                alt=""
              />
              <p
                className="text-xs text-center sm:text-sm text-secondary-in"
                name="bill deviation"
              >
                {isEnglish ? "Bill Deviation" : "انحراف الفاتورة"}
              </p>
            </div>
          </div>

          <div
            className="flex flex-col items-center justify-start h-full gap-1 p-2 bg-white rounded-md cursor-pointer min-[1800px]:p-6 min-[1800px]:gap-3"
            onClick={openShowInternetNotWorking}
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

          <div className="relative flex flex-col cursor-pointer">
            <div
              className="flex flex-col items-center justify-start h-full gap-1 p-2 bg-white rounded-md min-[1800px]:p-6 min-[1800px]:gap-3"
              onClick={openElif}
            >
              <img
                className="w-6 h-6 min-[1800px]:w-24 min-[1800px]:h-24 services-icon  min-[1800px]:mt-3  "
                src="/images/tv.svg"
                alt=""
              />
              <p className="text-xs text-center sm:text-sm text-secondary-in">
                {" "}
                {isEnglish
                  ? "Facing an issue with eLife"
                  : "واجهت مشكلة مع إي لايف"}
              </p>
            </div>
          </div>

          <div className="relative flex flex-col cursor-pointer">
            <div
              className="flex flex-col items-center justify-start h-full gap-1 p-2 bg-white rounded-md min-[1800px]:p-6 min-[1800px]:gap-3"
              onClick={slowInternetSpeed}
            >
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

          <div className="flex flex-col items-center justify-start h-full gap-1 p-2 bg-white rounded-md cursor-pointer min-[1800px]:p-6 min-[1800px]:gap-3">
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

          <div className="flex flex-col items-center justify-start h-full gap-1 p-2 bg-white rounded-md cursor-pointer min-[1800px]:p-6 min-[1800px]:gap-3"
          onClick={openFaq}>
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
          <div className="fixed inset-0 z-50 flex items-end justify-center -mt-10 overflow-x-hidden overflow-y-auto outline-none focus:outline-none carousel-wrapper">
            <div className="relative w-auto my-6 mx-5 max-w-3xl 2xl:max-w-[1400px] w-full">
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <div
                  onClick={closeShowBillDeviation}
                  className="absolute z-50 text-xl cursor-pointer top-2 right-5 text-small"
                >
                  x
                </div>
                <BillDeviationSlider
                  showBillDeviation={showBillDeviation}
                  closeShowBillDeviation={closeShowBillDeviation}
                />
              </div>
            </div>
          </div>
          <div
            className="fixed inset-0 z-40 bg-black opacity-25"
            onClick={closeShowBillDeviation}
          ></div>
        </>
      )}
      {showInternetNotWorking && (
        <>
          <div className="fixed inset-0 z-50 flex items-end justify-center -mt-10 overflow-x-hidden overflow-y-auto outline-none focus:outline-none carousel-wrapper">
            <div className="relative w-auto my-6 mx-5 max-w-3xl 2xl:max-w-[1400px] w-full">
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <div
                  onClick={closeShowInternetNotWorking}
                  className="absolute z-50 text-xl cursor-pointer top-2 right-5 "
                >
                  x
                </div>
                <InternetNotWorkingSlider
                  closeShowInternetNotWorking={closeShowInternetNotWorking}
                />
              </div>
            </div>
          </div>
          <div
            className="fixed inset-0 z-40 bg-black opacity-25"
            onClick={closeShowInternetNotWorking}
          ></div>
        </>
      )}
      {showElif && (
        <>
          <div className="fixed inset-0 z-50 flex items-end justify-center -mt-10 overflow-x-hidden overflow-y-auto outline-none focus:outline-none carousel-wrapper">
            <div className="relative w-auto my-6 mx-5 max-w-3xl 2xl:max-w-[1400px] w-full">
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <div
                  onClick={closeShowElife}
                  className="absolute z-50 text-xl cursor-pointer top-2 right-5 "
                >
                  x
                </div>
                <ElifeSlider closeShowElife={closeShowElife} />
              </div>
            </div>
          </div>
          <div
            className="fixed inset-0 z-40 bg-black opacity-25"
            onClick={closeShowElife}
          ></div>
        </>
      )}
       {showFaq && (
        <>
          <div className="fixed inset-0 z-50 flex items-end justify-center -mt-10 overflow-x-hidden overflow-y-auto outline-none focus:outline-none carousel-wrapper faq-wrapper">
            <div className="relative w-auto my-6 mx-5 max-w-3xl 2xl:max-w-[1400px] w-full">
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <div
                  onClick={closeShowFaq}
                  className="absolute z-50 text-xl cursor-pointer top-2 right-5 "
                >
                  x
                </div>
                <FaqSlider closeShowFaq={closeShowFaq} />
              </div>
            </div>
          </div>
          <div
            className="fixed inset-0 z-40 bg-black opacity-25"
            onClick={closeShowFaq}
          ></div>
        </>
      )}
    </>
  );
};

export default Three;
