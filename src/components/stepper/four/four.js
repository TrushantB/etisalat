import React from "react";

const Four = ({ handleLiveChat, handleFAQ, isEnglish }) => {
  return (
    <div className="bg-gradient-to-r from-[rgba(10,10,10,0.5)] to-[rgba(224,8,0,0.5)] py-5 grid grid-cols-2 px-3 gap-3 gap-y-6 sm:gap-y-3 rounded-[24px]">
      <a
        target="_blank"
        onClick={() => handleLiveChat()}
        className="flex flex-col items-center justify-center h-full gap-1 p-2 bg-white rounded-md cursor-pointer min-[1800px]:p-6"
      >
        <img className="w-6 h-6  min-[1800px]:w-24 min-[1800px]:h-24" src="/images/postpaid.svg" alt="" />
        <p className="text-xs text-center sm:text-sm min-[1800px]:text-6xl">
          {" "}
          {isEnglish ? "Live Chat" : "دردشة مباشرة"}{" "}
        </p>
      </a>
      <a
        target="_blank"
        onClick={() => handleFAQ()}
        className="flex flex-col items-center justify-center h-full gap-1 p-2 bg-white rounded-md cursor-pointer min-[1800px]:p-6"
      >
        <img className="w-6 h-6  min-[1800px]:w-24 min-[1800px]:h-24" src="/images/postpaid.svg" alt="" />
        <p className="text-xs text-center sm:text-sm min-[1800px]:text-6xl">
          {" "}
          {isEnglish ? "Faq" : "التعليمات"}{" "}
        </p>
      </a>
    </div>
  );
};

export default Four;
