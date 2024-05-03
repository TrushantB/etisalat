"use client"
import React from "react";
import One from "./one/one";
import Two from "./two/two";
import Three from "./three/three";
import Four from "./four/four";

const Stepper = ({ setStep, step }) => {
  return (
    <div className="a w-100 flex items-center justify-center relative mx-3 h-[calc(100vh-100px)]">
      <div className="absolute">
         <video
          id="sm-video"
          className="h-[calc(100vh-100px)]"
        ></video>
      </div>
      <div className="flex flex-col gap-10 absolute">
      { step === 1 && <One setStep={setStep}/>}
       { step === 2 && <Two setStep={setStep}/>}
       { step === 3 && <Three setStep={setStep}/>}
       { step === 4 && <Four setStep={setStep}/>}
      </div>
    </div>

  );
};

export default Stepper;
