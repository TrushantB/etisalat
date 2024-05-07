import React from "react";

const Four = ({ handleLiveChat, handleFAQ, isEnglish }) => {
  return (
    <div className=" bg-gradient-to-r from-[#0A0A0A] to-[#E00800]  sm:py-10 p-5 grid grid-cols-2 sm:px-10 gap-5 ">
      <a
        target="_blank"
        onClick={() => handleLiveChat()}
        className="bg-white flex flex-col gap-2 p-3 lg:w-40 justify-center items-center rounded-md cursor-pointer"
      >
        <img className="w-8 h-8" src="/images/postpaid.svg" alt="" />
        <p className="text-center text-sm">
          {" "}
          {isEnglish ? "Live Chat" : "دردشة مباشرة"}{" "}
        </p>
      </a>
      <a
        target="_blank"
        onClick={() => handleFAQ()}
        className="bg-white flex flex-col gap-2 lg:w-40 justify-center p-3 items-center rounded-md cursor-pointer"
      >
        <img className="w-8 h-8" src="/images/postpaid.svg" alt="" />
        <p className="text-center text-sm">
          {" "}
          {isEnglish ? "Faq" : "التعليمات"}{" "}
        </p>
      </a>
    </div>
  );
};

export default Four;
