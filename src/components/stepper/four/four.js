import React, { useState } from "react";

const Four = ({ handleLiveChat, handleFAQ, isEnglish }) => {
  const [showPopup, setShowPopup] = useState(false);
  
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="bg-gradient-to-r from-[rgba(10,10,10,0.5)] to-[rgba(224,8,0,0.5)] py-5 grid grid-cols-3 px-3 gap-3 gap-y-6 sm:gap-y-3 rounded-[24px]  modal-wrapper">
      <div
            className="relative flex flex-col cursor-pointer"
          >
            <div className="flex flex-col items-center justify-start h-full gap-1 p-2 bg-white rounded-md min-[1800px]:p-6 min-[1800px]:gap-3">
              <img
                className="w-6 h-6 min-[1800px]:w-24 min-[1800px]:h-24 services-icon"
                src="/images/postpaid.svg"
                alt=""
              />
              <p className="text-xs text-center sm:text-sm text-secondary-in">
                {isEnglish ? "Postpaid Plans" : "خطط مدفوعة مقدمًا"}
              </p>
            </div>
          </div>

          <div
            className="flex flex-col items-center justify-start h-full gap-1 p-2 bg-white rounded-md cursor-pointer min-[1800px]:p-6 min-[1800px]:gap-3"
          >
            <img
              className="w-6 h-6 min-[1800px]:w-24 min-[1800px]:h-24 services-icon  "
              src="/images/postpaid.svg"
              alt=""
            />
            <p className="text-xs text-center sm:text-sm text-secondary-in">
              {isEnglish ? "Prepaid Plans" : "خطط مسبقة الدفع"}
            </p>
          </div>

          <div
            className="relative flex flex-col cursor-pointer"
          >
            <div className="flex flex-col items-center justify-start h-full gap-1 p-2 bg-white rounded-md min-[1800px]:p-6 min-[1800px]:gap-3">
              <img
                className="w-6 h-6 min-[1800px]:w-24 min-[1800px]:h-24 services-icon  min-[1800px]:mt-3  "
                src="/images/tv.svg"
                alt=""
              />
              <p className="text-xs text-center sm:text-sm text-secondary-in">
                {" "}
                {isEnglish ? "TV & Internet" : "التلفزيون والإنترنت"}
              </p>
            </div>
          </div>

          <div
            className="relative flex flex-col cursor-pointer"
          >
            <div className="flex flex-col items-center justify-start h-full gap-1 p-2 bg-white rounded-md min-[1800px]:p-6 min-[1800px]:gap-3">
              <img
                className="w-6 h-6 min-[1800px]:w-24 min-[1800px]:h-24 services-icon  min-[1800px]:mt-3  "
                src="/images/wifi.svg"
                alt=""
              />
              <p className="text-xs text-center sm:text-sm text-secondary-in">
                {" "}
                {isEnglish ? "Home Wireless" : "لاسلكي المنزلي"}
              </p>
            </div>
          </div>
          
          <div
            className="relative flex flex-col cursor-pointer"
          >
            <div className="flex flex-col items-center justify-start h-full gap-1 p-2 bg-white rounded-md min-[1800px]:p-6 min-[1800px]:gap-3">
              <img
                className="w-6 h-6 min-[1800px]:w-24 min-[1800px]:h-24 services-icon  "
                src="/images/wifi.svg"
                alt=""
              />
              <p className="text-xs text-center sm:text-sm text-secondary-in">
                {isEnglish ? "Quick pay Recharge" : "إعادة شحن سريعة للدفع"}
              </p>
            </div>
          </div>

          <div
            className="flex flex-col items-center justify-start h-full gap-1 p-2 bg-white rounded-md cursor-pointer min-[1800px]:p-6 min-[1800px]:gap-3"
          >
            <img
              className="w-6 h-6 min-[1800px]:w-24 min-[1800px]:h-24 services-icon  "
              src="/images/bill.svg"
              alt=""
            />
            <p className="text-xs text-center sm:text-sm text-secondary-in">
              {" "}
              {isEnglish ? "Live Chat" : "دردشة مباشرة"}{" "}
            </p>
          </div>

          <div
            className="flex flex-col items-center justify-start h-full gap-1 p-2 bg-white rounded-md cursor-pointer min-[1800px]:p-6 min-[1800px]:gap-3"
          >
            <img
              className="w-6 h-6 min-[1800px]:w-24 min-[1800px]:h-24 services-icon "
              src="/images/pay.svg"
              alt=""
            />
            <p className="text-xs text-center sm:text-sm text-secondary-in">
            {isEnglish ? "Faq" : "التعليمات"}{" "}
            </p>
          </div>
    </div>
  );
};

export default Four;
