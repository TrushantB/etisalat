import React from "react";

const One = ({ setStep, onSelectLanguage }) => {
  return (
    <div onClick={() => setStep(2)}>
      <div className="text-white flex gap-3 p-5 py-3 bg-gradient-to-r  from-[rgba(10,10,10,0.5)] to-[rgba(224,8,0,0.5)] rounded-full">
        <button onClick={() => onSelectLanguage("العربية")}>
          <p className="text-lg">العربية</p>
        </button>
        <button onClick={() => onSelectLanguage("English")}>
          <p className="text-lg">English</p>
        </button>
      </div>
    </div>
  );
};

export default One;
