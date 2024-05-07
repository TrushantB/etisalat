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
  isEnglish
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
    <div className="a w-100 flex items-center justify-center relative mx-3 sm:h-[calc(100vh-112px)] ">
      <div className="relative flex items-center flex-col video-container">
        <video id="sm-video"></video>

        <img
          className="absolute bottom-5 right-5 w-32 h-12"
          src="/images/full-logo.svg"
        ></img>
      </div>
      {loading && (
        <div className="loader !absolute">
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
      <div className="flex  justify-between w-full items-center  gap-10 absolute mt-24">
        {(step !== 1) & !loading ? (
          <button onClick={handleLeftStep}>
            <div className=" bg-black rounded-full flex justify-center  absolute lg:static items-center w-5 h-5 lg:w-10 lg:h-10">
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
          <div></div>
        )}
        {!loading && (
          <div className=" justify-center items-center w-auto">
            {step === 1 && (
              <One setStep={setStep} onSelectLanguage={onSelectLanguage} />
            )}
            {step === 2 && (
              <Two setStep={setStep} onSelectType={onSelectType} isEnglish={isEnglish}/>
            )}
            {step === 3 && (
              <Three
                setStep={setStep}
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
              />
            )}
          </div>
        )}

        {step !== 3 ? (
          <div></div>
        ) : (
          <button onClick={handleRightStep}>
            <div className="bg-black rounded-full  flex justify-center items-center w-5 h-5 lg:h-10 lg:w-10 absolute lg:static right-0">
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
  );
};

export default Stepper;
