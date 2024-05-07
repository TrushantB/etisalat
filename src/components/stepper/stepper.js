"use client";
import React from "react";
import One from "./one/one";
import Two from "./two/two";
import Three from "./three/three";
import Four from "./four/four";

const Stepper = ({
  setStep,
  step,
  loading,
  onSelectLanguage,
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
}) => {
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

  return (
    <div className="a w-100 flex  justify-center relative mx-3 lg:mx-0 sm:h-[calc(100vh-112px)] ">
      <div className="relative flex items-center  flex-col video-container">
        <video
          id="sm-video"
          className={loading ? "opacity-0" : "opacity-100"}
        ></video>

        <img
          className="absolute bottom-5 right-5 w-32 h-12"
          src="/images/full-logo.svg"
        ></img>

        <div
          className="absolute bottom-5 left-5 w-12 h-12 bg-slate-800 rounded-full flex justify-center items-center cursor-pointer"
          onClick={() => handleMicOnOff()}
        >
          {isMicOn ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="!w-5 !h-5"
            >
              <path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              className="!w-6 !h-6"
            >
              <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L472.1 344.7c15.2-26 23.9-56.3 23.9-88.7V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 21.2-5.1 41.1-14.2 58.7L416 300.8V96c0-53-43-96-96-96s-96 43-96 96v54.3L38.8 5.1zm362.5 407l-43.1-33.9C346.1 382 333.3 384 320 384c-70.7 0-128-57.3-128-128v-8.7L144.7 210c-.5 1.9-.7 3.9-.7 6v40c0 89.1 66.2 162.7 152 174.4V464H248c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H344V430.4c20.4-2.8 39.7-9.1 57.3-18.2z" />
            </svg>
          )}
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
      <div className="flex  !self-center  justify-between w-full items-center  gap-10 absolute mt-24">
        <div className="h-full w-full flex items-center justify-between relative">
          {(step !== 1) & !loading ? (
            <button className=" h-full" onClick={handleLeftStep}>
              <div className=" bg-black rounded-full flex justify-center sm:ms-10 items-center w-5 h-5 sm:w-10 sm:h-10">
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
            </button>
          ) : (
            <div className="h-5 w-5 sm:ms-10"></div>
          )}
          {!loading && (
            <div className=" justify-center items-center w-auto">
              {step === 1 && (
                <One setStep={setStep} onSelectLanguage={onSelectLanguage} />
              )}
              {step === 2 && (
                <Two
                  setStep={setStep}
                  onSelectType={onSelectType}
                  isEnglish={isEnglish}
                />
              )}
              {step === 3 && (
                <Three
                  setStep={setStep}
                  isEnglish={isEnglish}
                  handlePostpaidPlans={handlePostpaidPlans}
                  handlePrepaidPlans={handlePrepaidPlans}
                  handleTVInternet={handleTVInternet}
                  handleHomeWireless={handleHomeWireless}
                  handleAddToBill={handleAddToBill}
                  handleQuickPayRecharge={handleQuickPayRecharge}
                />
              )}
              {step === 4 && (
                <Four
                  setStep={setStep}
                  handleFAQ={handleFAQ}
                  handleLiveChat={handleLiveChat}
                  isEnglish={isEnglish}
                />
              )}
            </div>
          )}

          {step !== 3 ? (
            <div className="h-5 w-5 sm:me-10"></div>
          ) : (
            <button onClick={handleRightStep}>
              <div className="bg-black rounded-full sm:me-10  flex justify-center items-center w-5 h-5 sm:h-10 sm:w-10">
                <svg
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                </svg>
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stepper;
