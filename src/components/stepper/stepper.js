"use client";
import React from "react";
import One from "./one/one";
import Two from "./two/two";
import Three from "./three/three";
import Four from "./four/four";

const Stepper = ({ setStep, step, loading }) => {
  return (
    <div className="a w-100 flex items-center justify-center relative mx-3 ">
      <div className="relative video-container">
        <video id="sm-video" className=""></video>
        <img
          className="absolute bottom-5 right-5 w-32 h-12"
          src="/images/full-logo.svg"
        ></img>
      </div>
      {loading && (
        <div class="loader !absolute">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
          <div class="bar4"></div>
          <div class="bar5"></div>
          <div class="bar6"></div>
          <div class="bar7"></div>
          <div class="bar8"></div>
          <div class="bar9"></div>
          <div class="bar10"></div>
          <div class="bar11"></div>
          <div class="bar12"></div>
        </div>
      )}
      <div className="flex flex-col gap-10 absolute">
        {step === 1 && <One setStep={setStep} />}
        {step === 2 && <Two setStep={setStep} />}
        {step === 3 && <Three setStep={setStep} />}
        {step === 4 && <Four setStep={setStep} />}
      </div>
    </div>
  );
};

export default Stepper;
