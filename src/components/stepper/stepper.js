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
  isEnglish
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
    <div className="flex  justify-center  relative h-[calc(85vh-112px)] mt-[15vh] sm:mt-0 sm:h-[calc(100vh-194px)] w-full main-wrapper">
      <button
        onClick={togglePopup}
        className="fixed right-0 z-10 w-24 h-16 opacity-0 top-28 xl:right-[20%] admin-button"
      >
        test
      </button>
      <div className="relative flex flex-col items-center w-full video-container">
        {showPopup && (
          <div className="fixed inset-0 z-50 flex items-end justify-center login-popup">
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
            <button className="mx-2 button-right" onClick={handleRightStep}>
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
