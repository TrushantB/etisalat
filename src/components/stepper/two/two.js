import React from "react";

const Two = ({ setStep, onSelectType, isEnglish }) => {
  return (
    <div className="" onClick={() => setStep(3)}>
      <div className="text-white flex justify-center gap-3 p-5 py-5  bg-gradient-to-r from-[#0A0A0A] to-[#E00800] ">
        <button onClick={() => onSelectType("Bussiness")}>
          <p className="text-[27px]">{isEnglish ? "Bussiness" : "عمل"}</p>
        </button>
        <button onClick={() => onSelectType("Consumer")}>
          <p className="text-[27px]">{isEnglish ? "Consumer" : "مستهلك"}</p>
        </button>
      </div>
    </div>
  );
};

export default Two;
