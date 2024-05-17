import React from "react";

const Two = ({ setStep, onSelectType, isEnglish }) => {
  return (
    <div className="" onClick={() => setStep(2)}>
      <div className="flex justify-center gap-6 text-white button-wrapper">
        <button onClick={() => onSelectType("business")} className="px-12 py-4 rounded-full bg-gradient-to-r from-[rgba(10,10,10,0.5)] to-[rgba(224,8,0,0.5)]">
          <p className="text-[18px] text-primary-in">
            {isEnglish ? "Bussiness" : "عمل"}
          </p>
        </button>
        <button onClick={() => onSelectType("consumer")} className="px-12 py-4 rounded-full bg-gradient-to-r from-[rgba(10,10,10,0.5)] to-[rgba(224,8,0,0.5)]">
          <p className="text-[18px] text-primary-in">
            {isEnglish ? "Consumer" : "مستهلك"}
          </p>
        </button>
      </div>
    </div>
  );
};

export default Two;
