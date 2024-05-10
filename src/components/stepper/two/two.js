import React from "react";

const Two = ({ setStep, onSelectType, isEnglish }) => {
  return (
    <div className="" onClick={() => setStep(3)}>
      <div className="text-white flex justify-center gap-3 p-5 py-3 rounded-full bg-gradient-to-r from-[rgba(10,10,10,0.5)] to-[rgba(224,8,0,0.5)]">
        <button onClick={() => onSelectType("Bussiness")}>
          <p className="text-[18px]">{isEnglish ? "Bussiness" : "عمل"}</p>
        </button>
        <button onClick={() => onSelectType("Consumer")}>
          <p className="text-[18px]">{isEnglish ? "Consumer" : "مستهلك"}</p>
        </button>
      </div>
    </div>
  );
};

export default Two;
