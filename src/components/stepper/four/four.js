import React, { useState } from "react";

const Four = ({ 
  handleLiveChat,
  handleFAQ,
  isEnglish,
  setStep,
  onSelectType,
  isMain,
  handleQuickPayRecharge,
  handleAddToBill,
  handleHomeWireless,
  handleTVInternet,
  handlePrepaidPlans,
  handlePostpaidPlans,
  ispostpaid,
  isPrepaid,
  isTv,
  isWifi,
  isAddToBill,
  isRecharge,
  setIsMain,
  setIsPostpaid,
  setIsPrepaid,
  setIsTv,
  setIsWifi,
  setIsAddToBill,
  setIsRecharge,
 }) => {
  const [showPopup, setShowPopup] = useState(false);
  
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const handlePostPaid = () => {
    setIsMain(false);
    setIsPostpaid(true);
    handlePostpaidPlans();
  };

  const handlePrePaid = () => {
    setIsMain(false);
    setIsPrepaid(true);
    handlePrepaidPlans();
  };

  const handleTv = () => {
    setIsMain(false);
    setIsTv(true);
    handleTVInternet();
  };

  const handleBack = () => {
    setIsMain(true);
    setIsPostpaid(false);
    setIsPrepaid(false);
    setIsWifi(false);
    setIsTv(false);
    setIsAddToBill(false);
    setIsRecharge(false);
  };

  const handleWifi = () => {
    setIsMain(false);
    setIsWifi(true);
    handleHomeWireless();
  };

  const handleAddBill = () => {
    setIsMain(false);
    setIsAddToBill(true);
    handleAddToBill();
  };

  const handleRecharge = () => {
    setIsMain(false);
    setIsRecharge(true);
    handleQuickPayRecharge();
  };
  return (
    <>
      {isMain && (
        <div className="bg-gradient-to-r from-[rgba(10,10,10,0.5)] to-[rgba(224,8,0,0.5)] py-5 grid grid-cols-3 px-3 gap-3 gap-y-6 sm:gap-y-3 rounded-[24px]  modal-wrapper">
              <div  
                onClick={handlePostPaid}
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
                onClick={handlePrePaid}
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
                onClick={handleTv}
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
                onClick={handleWifi}
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
                onClick={handleRecharge}
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
      )}
      {ispostpaid && (
        <div className="flex items-center justify-between">
          <div
            onClick={handleBack}
            className="flex items-center justify-center w-5 h-5 bg-[#e00800] rounded-full sm:ms-10 sm:w-10 sm:h-10 min-[1800px]:w-32 min-[1800px]:h-32 button-inner"
          >
            <svg
              fill="white"
              width={10}
              height={10}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </div>
          <div className="bg-gradient-to-r relative from-[rgba(10,10,10,0.5)] to-[rgba(224,8,0,0.5)]  py-8 grid grid-cols-2 px-3 gap-3 rounded-[24px] modal-wrapper pt-top">
            <div className="relative flex flex-col cursor-pointer">
              <div
                className="flex flex-col gap-1 p-2 bg-white rounded-md justify-start min-[1800px]:p-6 min-[1800px]:gap-3"
                dir={isEnglish ? "ltr" : "rtl"}
              >
                <p className="text-sm font-bold text-secondary-in">
                  {isEnglish ? "Freedom Live Plans" : "خطط فريدوم لايف"}
                </p>
                <p className="text-xs text-secondary-in">
                  {isEnglish
                    ? "Up to 40% off on all plans"
                    : "خصم يصل إلى 40% على جميع الخطط"}
                </p>
                <ul className="list-disc ps-5 2xl:ps-10">
                  <li className="text-[11px] text-base">
                    {isEnglish
                      ? "Loads of data and minutes"
                      : "كميات كبيرة من البيانات والدقائق"}
                  </li>
                  <li className="text-[11px] text-base">
                    {isEnglish ? "free Content Passes" : "رصيد محتوى مجاني"}
                  </li>
                  <li className="text-[11px] text-base">
                    {isEnglish
                      ? "Extra data for your favorite apps"
                      : "بيانات إضافية لتطبيقاتك المفضلة"}
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative flex flex-col cursor-pointer">
              <div
                className="flex flex-col justify-start h-full gap-1 p-2 bg-white rounded-md min-[1800px]:p-6 min-[1800px]:gap-3"
                dir={isEnglish ? "ltr" : "rtl"}
              >
                <p className="text-sm font-bold text-secondary-in">
                  {isEnglish ? "Emirati Live Plans" : "خطط إماراتي لايف"}
                </p>
                <p className="text-xs text-secondary-in">
                  {isEnglish
                    ? "Up to 40% off on all plans"
                    : "خصم يصل إلى 40% على جميع الخطط"}
                </p>
                <ul className="list-disc ps-5 2xl:ps-10">
                  <li className="text-[11px] text-base">
                    {isEnglish
                      ? "Loads of GBs and minutes"
                      : "كميات كبيرة من البيانات والدقائق"}
                  </li>
                  <li className="text-[11px] text-base">
                    {isEnglish ? "Premium Numbers" : "أرقام بريميوم"}
                  </li>
                  <li className="text-[11px] text-base">
                    {isEnglish
                      ? "Free Roam like home"
                      : "تجوال مجاني مثل المنزل"}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-5 h-5 sm:ms-10 sm:w-10 sm:h-10 min-[1800px]:w-32 min-[1800px]:h-32" />
        </div>
      )}

      {isPrepaid && (
        <div className="flex items-center justify-center">
          <div
            onClick={handleBack}
            className="flex items-center justify-center w-5 h-5 bg-[#e00800] rounded-full sm:ms-8 me-2 sm:w-10 sm:h-10 min-[1800px]:w-32 min-[1800px]:h-32 button-inner"
          >
            <svg
              fill="white"
              width={10}
              height={10}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </div>
          <div className="bg-gradient-to-r relative from-[rgba(10,10,10,0.5)] to-[rgba(224,8,0,0.5)]  py-8 grid grid-cols-2 px-3 gap-3 rounded-[24px] modal-wrapper pt-top xl:w-10/12 min-[1800px]:w-10/12 mx-auto">
            <div className="relative flex flex-col h-full cursor-pointer">
              <div
                className="flex flex-col h-full  gap-1 p-2 bg-white rounded-md min-[1800px]:p-6 min-[1800px]:gap-3"
                dir={isEnglish ? "ltr" : "rtl"}
              >
                <p className="text-sm font-bold text-secondary-in">
                  {isEnglish ? "Wasel Flexi" : "واصل فليكسي"}
                </p>
                <p className="text-xs text-secondary-in">
                  {isEnglish
                    ? "Get FREE SIM worth AED 55 with Wasel Flexi"
                    : "احصل على شريحة مجانية بقيمة 55 درهم مع واصل فليكسي"}
                </p>
                <ul className="list-disc ps-5 2xl:ps-10">
                  <li className="text-[11px] text-base">
                    {isEnglish
                      ? "Double data on all plans"
                      : "ضعف البيانات على جميع الخطط"}
                  </li>
                  <li className="text-[11px] text-base">
                    {isEnglish
                      ? "Save 50% with Wasel Flexi Yearly plans"
                      : "وفر 50% مع خطط واصل فليكسي السنوية"}
                  </li>
                  <li className="text-[11px] text-base">
                    {isEnglish
                      ? "Unlimited data for GoChat Messenger"
                      : "بيانات غير محدودة لتطبيق GoChat Messenger"}
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative flex flex-col h-full cursor-pointer ">
              <div
                className="flex flex-col justify-between h-full gap-1 p-2 bg-white rounded-md min-[1800px]:p-6 min-[1800px]:gap-3"
                dir={isEnglish ? "ltr" : "rtl"}
              >
                <p className="text-sm font-bold text-secondary-in">
                  {isEnglish ? "Emirati Wasel plan" : "خطة واصل الإماراتية"}
                </p>
                <p className="text-xs text-secondary-in">
                  {isEnglish
                    ? "Get FREE SIM worth AED 55 with Wasel Flexi"
                    : "احصل على شريحة مجانية بقيمة 55 درهم مع واصل فليكسي"}
                </p>
                <p className="text-xs text-secondary-in">
                  {isEnglish
                    ? "Customise your own combination of data, minutes"
                    : "قم بتخصيص مزيج البيانات والدقائق الخاص بك"}
                </p>
                <ul className="list-disc ps-5 2xl:ps-10">
                  <li className="text-[11px] text-base">
                    {isEnglish
                      ? "Get FREE SIM when you shop online"
                      : "احصل على شريحة مجانية عند التسوق عبر الإنترنت"}
                  </li>
                  <li className="text-[11px] text-base">
                    {isEnglish
                      ? "Extra data on all plans"
                      : "بيانات إضافية على جميع الخطط"}
                  </li>
                  <li className="text-[11px] text-base">
                    {isEnglish ? "Special Bronze number" : "رقم برونزي خاص"}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-5 h-5 sm:ms-10 sm:w-10 sm:h-10 min-[1800px]:w-32 min-[1800px]:h-32"></div>
        </div>
      )}

      {isTv && (
        <div className="flex items-center justify-between gap-20">
          <div
            onClick={handleBack}
            className="flex items-center justify-center w-5 h-5 me-auto bg-[#e00800] rounded-full sm:ms-10 sm:w-10 sm:h-10 min-[1800px]:w-32 min-[1800px]:h-32"
          >
            <svg
              fill="white"
              width={10}
              height={10}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </div>
          <div className="bg-gradient-to-r relative from-[rgba(10,10,10,0.5)] to-[rgba(224,8,0,0.5)]  py-8 grid grid-cols-2 px-3 gap-3 rounded-[24px] modal-wrapper pt-top">
            <div className="relative flex flex-col p-1 cursor-pointer">
              <div
                className="flex flex-col justify-center gap-1 p-3 bg-white rounded-md min-[1800px]:p-6 min-[1800px]:gap-3"
                dir={isEnglish ? "ltr" : "rtl"}
              >
                <p className="text-sm font-bold text-secondary-in">
                  {isEnglish ? "Ultra Starter" : "أولترا ستارتر"}
                </p>
                <p className="text-xs text-base text-gray-500">
                  {isEnglish ? "24 Month Commitment" : "التزام لمدة 24 شهرًا"}
                </p>
                <p className="text-xs text-base">
                  {isEnglish ? "AED 299/month" : "299 درهم / شهر"}
                </p>
                <p className=" bg-[#E00800] text-xs px-1 rounded text-white text-base">
                  {isEnglish
                    ? "Free Installation + Smiles Voucher"
                    : "تركيب مجاني + قسيمة سمايل"}
                </p>
                <p className="text-[#e00800] text-xs text-base">
                  {isEnglish
                    ? "6 month rental discount"
                    : "خصم 6 أشهر على الإيجار"}
                </p>
                <p className="text-sm text-base font-bold">
                  {isEnglish
                    ? "INTERNET- 500mbps"
                    : "إنترنت - 500 ميجابت في الثانية"}
                </p>
              </div>
            </div>
            <div className="relative flex flex-col cursor-pointer">
              <div
                className="flex flex-col justify-center gap-1 p-3 bg-white rounded-md min-[1800px]:p-6 min-[1800px]:gap-3"
                dir={isEnglish ? "ltr" : "rtl"}
              >
                <p className="text-sm font-bold text-secondary-in">
                  {isEnglish ? "Ultra Sport" : "أولترا سبورت"}
                </p>
                <p className="text-xs text-base text-gray-500">
                  {isEnglish ? "24 Month Commitment" : "التزام لمدة 24 شهرًا"}
                </p>
                <p className="text-xs text-base">
                  {isEnglish ? "AED 515/month" : "515 درهم / شهر"}
                </p>
                <p className=" bg-[#E00800] text-xs text-base px-1 rounded text-white">
                  {isEnglish
                    ? "Free Installation + Smiles Voucher"
                    : "تركيب مجاني + قسيمة سمايل"}
                </p>
                <p className="text-[#e00800] text-xs text-base">
                  {isEnglish
                    ? "Free speed boost upto 1GB"
                    : "تسريع مجاني حتى 1 جيجابايت"}
                </p>
                <p className="text-sm text-base font-bold">
                  {isEnglish
                    ? "INTERNET- 750mbps"
                    : "إنترنت - 750 ميجابت في الثانية"}
                </p>
              </div>
            </div>
          </div>
          <div className="sm:ms-10 sm:w-10 sm:h-10 min-[1800px]:w-32 min-[1800px]:h-32" />
        </div>
      )}

      {isWifi && (
        <div className="flex items-center justify-between ">
          <div
            onClick={handleBack}
            className="flex items-center justify-center w-3 h-3  bg-[#e00800] rounded-full sm:ms-10 sm:w-10 sm:h-10 min-[1800px]:w-32 min-[1800px]:h-32 button-inner"
          >
            <svg
              fill="white"
              width={10}
              height={10}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </div>
          <div
            dir={isEnglish ? "ltr" : "rtl"}
            className="bg-gradient-to-r relative  from-[rgba(10,10,10,0.5)] to-[rgba(224,8,0,0.5)]  py-8 grid grid-cols-2 px-3 min-[1800px]:px-0 gap-3 rounded-[24px] modal-wrapper pt-top"
          >
            <div className="relative flex flex-col cursor-pointer ">
              <div className="flex flex-col justify-center h-full gap-1 p-3 bg-white rounded-md min-[1800px]:p-6 min-[1800px]:gap-3">
                <p className="text-sm font-bold text-secondary-in">
                  {isEnglish ? "Home Wireless Advance" : "لاسلكي منزلي أدفانس"}
                </p>
                <p className="text-base text-gray-500">
                  {isEnglish ? "12 Month Commitment" : "التزام لمدة 12 شهرًا"}
                </p>
                <p className="text-base">
                  {isEnglish ? "199 AED/month" : "199 درهم / شهر"}
                </p>
                <p className=" bg-[#E00800] text-base px-1 rounded text-white">
                  {isEnglish
                    ? "Limited time offer: 50% OFF"
                    : "عرض محدود: خصم %50"}
                </p>
              </div>
            </div>
            <div className="relative flex flex-col cursor-pointer">
              <div className="flex flex-col justify-center gap-1 p-3 bg-white rounded-md min-[1800px]:p-6 min-[1800px]:gap-3">
                <p className="text-sm font-bold text-secondary-in">
                  {isEnglish ? "Home Wireless Premium" : "لاسلكي منزلي بريميوم"}
                </p>
                <p className="text-base text-gray-500">
                  {isEnglish ? "24 Month Commitment" : "التزام لمدة 24 شهرًا"}
                </p>
                <p className="text-base">
                  {isEnglish ? "299 AED/month" : "299 درهم / شهر"}
                </p>
                <p className=" bg-[#E00800] text-base px-1 rounded text-white">
                  {isEnglish
                    ? "Limited time offer: 25% OFF"
                    : "عرض محدود: خصم %25"}
                </p>
              </div>
            </div>
          </div>
          <div className=" w-3 h-3 sm:ms-10 sm:w-10 sm:h-10 min-[1800px]:w-32 min-[1800px]:h-32"></div>
        </div>
      )}

      {isAddToBill && (
        <div className="flex items-center justify-between">
          <div
            onClick={handleBack}
            className="flex items-center justify-center w-5 h-5  bg-[#e00800] rounded-full sm:ms-10 sm:w-10 sm:h-10 min-[1800px]:w-32 min-[1800px]:h-32 button-inner"
          >
            <svg
              fill="white"
              width={10}
              height={10}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </div>
          <div
            dir={isEnglish ? "ltr" : "rtl"}
            className="bg-gradient-to-r relative from-[rgba(10,10,10,0.5)] to-[rgba(224,8,0,0.5)]  py-8 grid grid-cols-1 w-8/12 mx-auto px-3 rounded-[24px] modal-wrapper pt-top"
          >
            <div className="relative flex flex-col cursor-pointer ">
              <div className="flex flex-col items-start justify-center h-full gap-1 p-3 bg-white rounded-md min-[1800px]:p-6 min-[1800px]:gap-3">
                <p className="text-secondary-in">
                  {isEnglish
                    ? "Pay for your online services with your e& UAE number in a safe secure and hassle-free manner with e& UAEs"
                    : "ادفع مقابل خدماتك عبر الإنترنت باستخدام رقمك الإلكتروني والإماراتي بطريقة آمنة وخالية من المتاعب مع e&الإمارات العربية المتحدة"}
                  <a
                    target="_blank"
                    className="text-blue-400 underline"
                    href="https://www.etisalat.ae/en/c/digital-lifestyle/add-to-bill.html"
                  >
                    {isEnglish ? "learn more" : "يتعلم أكثر"}
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className=" w-3 h-3 sm:ms-10 sm:w-10 sm:h-10 min-[1800px]:w-32 min-[1800px]:h-32"></div>
        </div>
      )}

      {isRecharge && (
        <div className="flex items-center justify-between">
          <div
            onClick={handleBack}
            className="flex items-center justify-center w-5 h-5  bg-[#e00800] rounded-full sm:ms-10 sm:w-10 sm:h-10 min-[1800px]:w-32 min-[1800px]:h-32 button-inner"
          >
            <svg
              fill="white"
              width={10}
              height={10}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </div>
          <div
            dir={isEnglish ? "ltr" : "rtl"}
            className="bg-gradient-to-r relative from-[rgba(10,10,10,0.5)] to-[rgba(224,8,0,0.5)]  py-8 grid grid-cols-1 w-8/12 mx-auto px-3 rounded-[24px]  modal-wrapper pt-top"
          >
            <div className="relative flex flex-col cursor-pointer ">
              <div className="flex flex-col items-start justify-center h-full gap-1 p-3 bg-white rounded-md min-[1800px]:p-6 min-[1800px]:gap-3">
                <p className="text-secondary-in">
                  {isEnglish
                    ? " Take care of yours bills & recharge with Etisalat quick pay and recharge"
                    : "اهتم بفواتيرك واشحن رصيدك مع اتصالات الدفع السريع وإعادة الشحن"}
                  <a
                    target="_blank"
                    className="text-blue-400 underline me-1 ms-1"
                    href="https://www.etisalat.ae/en/c/digital-lifestyle/add-to-bill.html"
                  >
                    {isEnglish ? "learn more" : "يتعلم أكثر"}
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className=" w-3 h-3 sm:ms-10 sm:w-10 sm:h-10 min-[1800px]:w-32 min-[1800px]:h-32"></div>
        </div>
      )}
    </>
  );
};

export default Four;
