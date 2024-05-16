"use client";
import React, { useState } from "react";
import One from "./one/one";
import Two from "./two/two";
import Three from "./three/three";
import Four from "./four/four";
import Login from "../login";

const Stepper = ({
  setStep,
  step,
  loading,
  onSelectType,
  handleQuickPayRecharge,
  handleAddToBill,
  handleHomeWireless,
  handleTVInternet,
  handlePrepaidPlans,
  handlePostpaidPlans,
  handleLiveChat,
  handleFAQ,
  isEnglish,
  isMicOn,
  handleMicOnOff,
  handleStopTalking,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [isMain, setIsMain] = useState(true);
  const [ispostpaid, setIsPostpaid] = useState(false);
  const [isPrepaid, setIsPrepaid] = useState(false);
  const [isTv, setIsTv] = useState(false);
  const [isWifi, setIsWifi] = useState(false);
  const [isAddToBill, setIsAddToBill] = useState(false);
  const [isRecharge, setIsRecharge] = useState(false);

  const handleLeftStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  const handleRightStep = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="flex  justify-center  relative h-[calc(85vh-112px)] mt-[15vh] sm:mt-0 sm:h-[calc(100vh-112px)] w-full main-wrapper">
      <button
        onClick={togglePopup}
        className="fixed right-0 z-10 w-24 h-16 opacity-0 top-28 xl:right-[20%] admin-button"
      >
        test
      </button>
      <div className="relative flex flex-col items-center w-full video-container">
        {showPopup && (
          <div className="fixed inset-0 z-50 flex items-end justify-center">
            <div
              onClick={togglePopup}
              className="h-full w-full bg-[rgba(0,0,0,0.3)] absolute -z-10 cursor-pointer"
            ></div>
            <div className="p-8 bg-gradient-to-r from-[rgba(10,10,10,0.5)] to-[rgba(224,8,0,0.5)] rounded-[24px] shadow-2xl w-96 toggle-popup">
              <Login />
            </div>
          </div>
        )}

        <video
          id="sm-video"
          className={loading ? "opacity-0" : "opacity-100"}
        ></video>

        <img
          className="absolute w-32 h-12 bottom-5 right-5 footer-logo"
          src="/images/full-logo.svg"
        />

        <div
          className="absolute flex items-center justify-center w-12 h-12 rounded-full cursor-pointer bottom-5 left-8 sm:left-5 bg-slate-700 active:bg-slate-900 min-[1800px]:!w-28 min-[1800px]:!h-28"
          onClick={() => handleMicOnOff()}
        >
          {isMicOn ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="!w-5 !h-5 icon"
            >
              <path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              className="!w-6 !h-6 icon"
            >
              <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L472.1 344.7c15.2-26 23.9-56.3 23.9-88.7V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 21.2-5.1 41.1-14.2 58.7L416 300.8V96c0-53-43-96-96-96s-96 43-96 96v54.3L38.8 5.1zm362.5 407l-43.1-33.9C346.1 382 333.3 384 320 384c-70.7 0-128-57.3-128-128v-8.7L144.7 210c-.5 1.9-.7 3.9-.7 6v40c0 89.1 66.2 162.7 152 174.4V464H248c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H344V430.4c20.4-2.8 39.7-9.1 57.3-18.2z" />
            </svg>
          )}
        </div>
        <div
          onClick={() => handleStopTalking()}
          className="absolute flex items-center justify-center w-12 h-12 text-white rounded-full cursor-pointer bottom-5 left-24 sm:left-20 bg-slate-700 active:bg-slate-900 min-[1800px]:!w-28 min-[1800px]:!h-28 min-[1800px]:left-40"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="!w-6 !h-6 icon"
          >
            <path d="M10.5 1.875a1.125 1.125 0 0 1 2.25 0v8.219c.517.162 1.02.382 1.5.659V3.375a1.125 1.125 0 0 1 2.25 0v10.937a4.505 4.505 0 0 0-3.25 2.373 8.963 8.963 0 0 1 4-.935A.75.75 0 0 0 18 15v-2.266a3.368 3.368 0 0 1 .988-2.37 1.125 1.125 0 0 1 1.591 1.59 1.118 1.118 0 0 0-.329.79v3.006h-.005a6 6 0 0 1-1.752 4.007l-1.736 1.736a6 6 0 0 1-4.242 1.757H10.5a7.5 7.5 0 0 1-7.5-7.5V6.375a1.125 1.125 0 0 1 2.25 0v5.519c.46-.452.965-.832 1.5-1.141V3.375a1.125 1.125 0 0 1 2.25 0v6.526c.495-.1.997-.151 1.5-.151V1.875Z" />
          </svg>
        </div>
      </div>
      {loading && (
        <div className="loader !self-center !absolute">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
          <div className="bar4"></div>
          <div className="bar5"></div>
          <div className="bar6"></div>
          <div className="bar7"></div>
          <div className="bar8"></div>
          <div className="bar9"></div>
          <div className="bar10"></div>
          <div className="bar11"></div>
          <div className="bar12"></div>
        </div>
      )}
      <div className="flex  !self-end  justify-between w-full items-center  gap-10 absolute mb-20 lg:mb-16 modal-bottom-space">
        <div className="relative flex items-center justify-between w-full h-full">
          {(step !== 1) & !loading ? (
            <button
              className="h-full mx-2 button-left"
              onClick={handleLeftStep}
            >
              {!isPrepaid &&
                !ispostpaid &&
                !isAddToBill &&
                !isRecharge &&
                !isTv &&
                !isWifi && (
                  <div className="flex items-center justify-center w-5 h-5 bg-[#e00800] rounded-full sm:ms-10 sm:w-10 sm:h-10 min-[1800px]:w-32 min-[1800px]:h-32">
                    <svg
                      fill="white"
                      width={10}
                      height={10}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                    </svg>
                  </div>
                )}
            </button>
          ) : (
            <div className="w-5 h-5 sm:ms-10"></div>
          )}
          {!loading && (
            <div
              className={`items-center justify-center ${
                step == 2 ? "w-full" : "w-auto"
              } `}
            >
              {step === 1 && (
                <Two
                  setStep={setStep}
                  onSelectType={onSelectType}
                  isEnglish={isEnglish}
                />
              )}
              {step === 2 && (
                <Three
                  setStep={setStep}
                  isEnglish={isEnglish}
                  handlePostpaidPlans={handlePostpaidPlans}
                  handlePrepaidPlans={handlePrepaidPlans}
                  handleTVInternet={handleTVInternet}
                  handleHomeWireless={handleHomeWireless}
                  handleAddToBill={handleAddToBill}
                  handleQuickPayRecharge={handleQuickPayRecharge}
                  isMain={isMain}
                  ispostpaid={ispostpaid}
                  isPrepaid={isPrepaid}
                  isTv={isTv}
                  isWifi={isWifi}
                  isAddToBill={isAddToBill}
                  isRecharge={isRecharge}
                  setIsMain={setIsMain}
                  setIsPostpaid={setIsPostpaid}
                  setIsPrepaid={setIsPrepaid}
                  setIsTv={setIsTv}
                  setIsWifi={setIsWifi}
                  setIsAddToBill={setIsAddToBill}
                  setIsRecharge={setIsRecharge}
                />
              )}
              {step === 3 && (
                <Four
                  setStep={setStep}
                  handleFAQ={handleFAQ}
                  handleLiveChat={handleLiveChat}
                  isEnglish={isEnglish}
                />
              )}
            </div>
          )}

          {step !== 2 ? (
            <div className="w-5 h-5 sm:me-10 buton-right"></div>
          ) : (
            <button className="mx-2" onClick={handleRightStep}>
              {!isPrepaid &&
                !ispostpaid &&
                !isAddToBill &&
                !isRecharge &&
                !isTv &&
                !isWifi && (
                  <div className="flex items-center justify-center w-5 h-5 bg-[#e00800] rounded-full sm:me-10 sm:h-10 sm:w-10 min-[1800px]:w-32 min-[1800px]:h-32">
                    <svg
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                    </svg>
                  </div>
                )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stepper;
