import React from "react";

const One = ({ setStep, onSelectLanguage }) => {
  return (
    <>
      {/* <ul role="list" className="grid max-w-2xl grid-cols-2 p-4 mx-auto mt-20 mb-4 text-center bg-white rounded-lg shadow-lg gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none">
          <li className="cursor-pointer">
            <img className="w-24 h-24 mx-auto border rounded-full shadow-sm" src="/images/abdul.png" alt="abdul" />
            <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">Abdul</h3>
          </li>
          <li className="cursor-pointer">
            <img className="w-24 h-24 mx-auto border rounded-full shadow-sm" src="/images/alina.png" alt="alina" />
            <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">Alina</h3>
          </li>
      </ul> */}
      <div className="mx-auto w-max" onClick={() => setStep(2)}>
        <div className="text-white flex gap-3 p-5 py-3 bg-gradient-to-r  from-[rgba(10,10,10,0.5)] to-[rgba(224,8,0,0.5)] rounded-full">
          <button onClick={() => onSelectLanguage("العربية")}>
            <p className="text-lg">العربية</p>
          </button>
          <button onClick={() => onSelectLanguage("English")}>
            <p className="text-lg">English</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default One;
