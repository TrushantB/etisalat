import React from "react";

const Four = ({ setStep }) => {
  return (
    <div className=" bg-gradient-to-r from-[#0A0A0A] to-[#E00800]  sm:py-10 p-5 grid grid-cols-2 sm:px-10 gap-5 ">
      <a
        target="_blank"
        href="https://www.etisalat.ae/en/c/support/index.html"
        className="bg-white flex flex-col gap-2 p-3 lg:w-40 justify-center items-center rounded-md cursor-pointer"
      >
        <img className="w-8 h-8" src="/images/postpaid.svg" alt="" />
        <p className="text-center text-sm">Live Chat </p>
      </a>
      <a
        target="_blank"
        href="https://www.etisalat.ae/en/c/generic/did-you-know/faqs.html"
        className="bg-white flex flex-col gap-2 lg:w-40 justify-center p-3 items-center rounded-md cursor-pointer"
      >
        <img className="w-8 h-8" src="/images/postpaid.svg" alt="" />
        <p className="text-center text-sm">Faq</p>
      </a>
    </div>
  );
};

export default Four;
