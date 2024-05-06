import React from "react";

const One = ({ setStep, onSelectLanguage }) => {
  return (
    <div onClick={() => setStep(2)}>
      <div className="text-white flex gap-3 p-5 py-5 bg-gradient-to-r from-[#0A0A0A] to-[#E00800] ">
      <button onClick={() => onSelectLanguage('العربية')}>
          <p className="text-3xl">العربية</p>
        </button>
        <button onClick={() => onSelectLanguage('English')}>
          <p className="text-3xl">English</p>
        </button>
      </div>
    </div>
  );
};

export default One;
