import React, { useState } from "react";

const Three = ({
  setStep,
  isEnglish,
  handleQuickPayRecharge,
  handleAddToBill,
  handleHomeWireless,
  handleTVInternet,
  handlePrepaidPlans,
  handlePostpaidPlans,
}) => {
  const [isMain, setIsMain] = useState(true);
  const [ispostpaid, setIsPostpaid] = useState(false);
  const [isPrepaid, setIsPrepaid] = useState(false);
  const [isTv, setIsTv] = useState(false);
  const [isWifi, setIsWifi] = useState(false);
  const [isAddToBill, setIsAddToBill] = useState(false);
  const [isRecharge, setIsRecharge] = useState(false);

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
        <div className="  bg-gradient-to-r from-[#0A0A0A] to-[#E00800]  py-5 grid grid-cols-3 px-3 gap-3 ">
          <div
            className="flex flex-col relative cursor-pointer"
            onClick={handlePostPaid}
          >
            <p className="text-[8px] bg-[#E00800] rounded-md w-auto absolute p-1 -top-2 left-1 flex text-white">
              New Offers
            </p>
            <div className="bg-white  flex flex-col  justify-center items-center p-3 gap-2 rounded-md">
              <img className="w-8 h-8" src="/images/postpaid.svg" alt="" />
              <p className="text-center text-sm">
                {isEnglish ? "Postpaid plans" : "خطط الدفع الآجل"}
              </p>
            </div>
          </div>

          <div
            onClick={handlePrePaid}
            className="bg-white flex flex-col gap-2 justify-center p-3 items-center rounded-md cursor-pointer"
          >
            <img className="w-8 h-8" src="/images/postpaid.svg" alt="" />
            <p className="text-center text-sm">
              {isEnglish ? "Prepaid Plans" : "خطط الدفع المسبق"}
            </p>
          </div>

          <div
            onClick={handleTv}
            className="flex flex-col relative cursor-pointer"
          >
            <p className="text-[8px] bg-[#E00800] rounded-md w-auto absolute p-1 -top-2 left-1 flex text-white">
              FREE voucher
            </p>
            <div className="bg-white  flex flex-col  justify-center items-center p-3 gap-2 rounded-md">
              <img className="w-8 h-8" src="/images/tv.svg" alt="" />
              <p className="text-center text-sm">
                {" "}
                {isEnglish ? "Tv & Internet" : "التلفزيون والإنترنت"}
              </p>
            </div>
          </div>

          <div
            onClick={handleWifi}
            className="flex flex-col relative cursor-pointer"
          >
            <p className="text-[8px] bg-[#E00800] rounded-md w-auto absolute p-1 -top-2 left-1 flex text-white">
              5G
            </p>
            <div className="bg-white  flex flex-col  justify-center items-center p-3 gap-2 rounded-md">
              <img className="w-8 h-8" src="/images/wifi.svg" alt="" />
              <p className="text-center text-sm">
                {isEnglish ? "Home Wireless" : "لاسلكي منزلي"}
              </p>
            </div>
          </div>

          <div
            onClick={() => handleAddBill()}
            className="bg-white flex flex-col gap-2 p-3 justify-center h-full items-center h-full rounded-md cursor-pointer"
          >
            <img className="w-8 h-8" src="/images/bill.svg" alt="" />
            <p className="text-center text-sm">
              {" "}
              {isEnglish ? "Add to Bill" : "إضافة إلى الفاتورة"}
            </p>
          </div>

          <div
            onClick={handleRecharge}
            className="bg-white flex flex-col gap-2 p-3 justify-center items-center rounded-md cursor-pointer"
          >
            <img className="w-8 h-8" src="/images/pay.svg" alt="" />
            <p className="text-center text-sm">
              {isEnglish ? "Quick pay Recharge" : "إعادة شحن الدفع السريع"}
            </p>
          </div>
        </div>
      )}
      {ispostpaid && (
        <div className="bg-gradient-to-r relative from-[#0A0A0A] to-[#E00800]  py-8 grid grid-cols-2 px-3 gap-3 ">
          <button
            onClick={handleBack}
            className="absolute text-white left-4 top-2 text-xs "
          >
            <div className="flex items-center ">
              <svg
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="!w-[14px] !h-[14px]"
              >
                <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>{" "}
            </div>
          </button>
          <div className="flex flex-col relative cursor-pointer">
            <div
              className="bg-white flex flex-col justify-centers p-3 gap-2 rounded-md"
              dir={isEnglish ? "ltr" : "rtl"}
            >
              <p className="text-sm">
                {isEnglish ? "Freedom Live Plans" : "خطط فريدوم لايف"}
              </p>
              <p className="text-xs ">
                {isEnglish
                  ? "Up to 40% off on all plans"
                  : "خصم يصل إلى 40% على جميع الخطط"}
              </p>
              <ul className=" list-disc ps-5">
                <li className="text-[11px]">
                  {isEnglish
                    ? "Loads of data and minutes"
                    : "كميات كبيرة من البيانات والدقائق"}
                </li>
                <li className="text-[11px]">
                  {isEnglish ? "free Content Passes" : "رصيد محتوى مجاني"}
                </li>
                <li className="text-[11px]">
                  {isEnglish
                    ? "Extra data for your favorite apps"
                    : "بيانات إضافية لتطبيقاتك المفضلة"}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col relative cursor-pointer">
            <div
              className="bg-white flex flex-col justify-center p-3 gap-2 rounded-md h-full"
              dir={isEnglish ? "ltr" : "rtl"}
            >
              <p className="text-sm">
                {isEnglish ? "Emirati Live Plans" : "خطط إماراتي لايف"}
              </p>
              <p className="text-xs ">
                {isEnglish
                  ? "Up to 40% off on all plans"
                  : "خصم يصل إلى 40% على جميع الخطط"}
              </p>
              <ul className=" list-disc ps-5">
                <li className="text-[11px]">
                  {isEnglish
                    ? "Loads of GBs and minutes"
                    : "كميات كبيرة من البيانات والدقائق"}
                </li>
                <li className="text-[11px]">
                  {isEnglish ? "Premium Numbers" : "أرقام بريميوم"}
                </li>
                <li className="text-[11px]">
                  {isEnglish ? "Free Roam like home" : "تجوال مجاني مثل المنزل"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {isPrepaid && (
        <div className="bg-gradient-to-r relative from-[#0A0A0A] to-[#E00800]  py-8 grid grid-cols-2 px-3 gap-3 ">
          <button
            onClick={handleBack}
            className="absolute text-white left-4 top-2 text-xs "
          >
            <div className="flex items-center ">
              <svg
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="!w-[14px] !h-[14px]"
              >
                <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>{" "}
            </div>
          </button>
          <div className="flex flex-col relative cursor-pointer">
            <div
              className="bg-white flex flex-col justify-center p-3 gap-2 rounded-md"
              dir={isEnglish ? "ltr" : "rtl"}
            >
              <p className="text-sm">
                {isEnglish ? "Wasel Flexi" : "واصل فليكسي"}
              </p>
              <p className="text-xs ">
                {isEnglish
                  ? "Get FREE SIM worth AED 55 with Wasel Flexi"
                  : "احصل على شريحة مجانية بقيمة 55 درهم مع واصل فليكسي"}
              </p>
              <ul className=" list-disc ps-5">
                <li className="text-[11px]">
                  {isEnglish
                    ? "Double data on all plans"
                    : "ضعف البيانات على جميع الخطط"}
                </li>
                <li className="text-[11px]">
                  {isEnglish
                    ? "Save 50% with Wasel Flexi Yearly plans"
                    : "وفر 50% مع خطط واصل فليكسي السنوية"}
                </li>
                <li className="text-[11px]">
                  {isEnglish
                    ? "Unlimited data for GoChat Messenger"
                    : "بيانات غير محدودة لتطبيق GoChat Messenger"}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col relative cursor-pointer ">
            <div
              className="bg-white flex flex-col justify-between p-3 gap-2 rounded-md h-full"
              dir={isEnglish ? "ltr" : "rtl"}
            >
              <p className="text-sm">
                {isEnglish ? "Emirati Wasel plan" : "خطة واصل الإماراتية"}
              </p>
              <p className="text-xs ">
                {isEnglish
                  ? "Customise your own combination of data, minutes"
                  : "قم بتخصيص مزيج البيانات والدقائق الخاص بك"}
              </p>
              <ul className=" list-disc ps-5">
                <li className="text-[11px]">
                  {isEnglish
                    ? "Get FREE SIM when you shop online"
                    : "احصل على شريحة مجانية عند التسوق عبر الإنترنت"}
                </li>
                <li className="text-[11px]">
                  {isEnglish
                    ? "Extra data on all plans"
                    : "بيانات إضافية على جميع الخطط"}
                </li>
                <li className="text-[11px]">
                  {isEnglish ? "Special Bronze number" : "رقم برونزي خاص"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {isTv && (
        <div className="bg-gradient-to-r relative from-[#0A0A0A] to-[#E00800]  py-8 grid grid-cols-2 px-3 gap-3 ">
          <button
            onClick={handleBack}
            className="absolute text-white left-4 top-2 text-xs "
          >
            <div className="flex items-center ">
              <svg
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="!w-[14px] !h-[14px]"
              >
                <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>{" "}
            </div>
          </button>
          <div className="flex flex-col relative cursor-pointer">
            <div
              className="bg-white flex flex-col justify-center p-3 gap-1 rounded-md"
              dir={isEnglish ? "ltr" : "rtl"}
            >
              <p className="text-sm font-bold">
                {isEnglish ? "Ultra Starter" : "أولترا ستارتر"}
              </p>
              <p className="text-xs text-gray-500">
                {isEnglish ? "24 Month Commitment" : "التزام لمدة 24 شهرًا"}
              </p>
              <p className="text-xs">
                {isEnglish ? "AED 299/month" : "299 درهم / شهر"}
              </p>
              <p className=" bg-[#E00800] text-xs px-1 rounded text-white">
                {isEnglish
                  ? "Free Installation + Smiles Voucher"
                  : "تركيب مجاني + قسيمة سمايل"}
              </p>
              <p className="text-[#e00800] text-xs">
                {isEnglish
                  ? "6 month rental discount"
                  : "خصم 6 أشهر على الإيجار"}
              </p>
              <p className="font-bold text-sm">
                {isEnglish
                  ? "INTERNET- 500mbps"
                  : "إنترنت - 500 ميجابت في الثانية"}
              </p>
            </div>
          </div>
          <div className="flex flex-col relative cursor-pointer">
            <div
              className="bg-white flex flex-col justify-center p-3 gap-1 rounded-md"
              dir={isEnglish ? "ltr" : "rtl"}
            >
              <p className="text-sm font-bold">
                {isEnglish ? "Ultra Sport" : "أولترا سبورت"}
              </p>
              <p className="text-xs text-gray-500">
                {isEnglish ? "24 Month Commitment" : "التزام لمدة 24 شهرًا"}
              </p>
              <p className="text-xs">
                {isEnglish ? "AED 515/month" : "515 درهم / شهر"}
              </p>
              <p className=" bg-[#E00800] text-xs px-1 rounded text-white">
                {isEnglish
                  ? "Free Installation + Smiles Voucher"
                  : "تركيب مجاني + قسيمة سمايل"}
              </p>
              <p className="text-[#e00800] text-xs">
                {isEnglish
                  ? "Free speed boost upto 1GB"
                  : "تسريع مجاني حتى 1 جيجابايت"}
              </p>
              <p className="font-bold text-sm">
                {isEnglish
                  ? "INTERNET- 750mbps"
                  : "إنترنت - 750 ميجابت في الثانية"}
              </p>
            </div>
          </div>
        </div>
      )}

      {isWifi && (
        <div
          dir={isEnglish ? "ltr" : "rtl"}
          className="bg-gradient-to-r relative from-[#0A0A0A] to-[#E00800]  py-8 grid grid-cols-2 px-3 gap-3 "
        >
          <button
            onClick={handleBack}
            className="absolute text-white left-4 top-2 text-xs "
          >
            <div className="flex items-center ">
              <svg
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="!w-[14px] !h-[14px]"
              >
                <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>{" "}
            </div>
          </button>
          <div className="flex flex-col relative cursor-pointer ">
            <div className="bg-white flex flex-col justify-center h-full p-3 gap-1 rounded-md">
              <p className="text-sm font-bold">
                {isEnglish ? "Home Wireless Advance" : "لاسلكي منزلي أدفانس"}
              </p>
              <p className="text-xs text-gray-500">
                {isEnglish ? "12 Month Commitment" : "التزام لمدة 12 شهرًا"}
              </p>
              <p className="text-xs">
                {isEnglish ? "199 AED/month" : "199 درهم / شهر"}
              </p>
              <p className=" bg-[#E00800] text-xs px-1 rounded text-white">
                {isEnglish
                  ? "Limited time offer: 50% OFF"
                  : "عرض محدود: خصم %50"}
              </p>
            </div>
          </div>
          <div className="flex flex-col relative cursor-pointer">
            <div className="bg-white flex flex-col justify-center p-3 gap-1 rounded-md">
              <p className="text-sm font-bold">
                {isEnglish ? "Home Wireless Premium" : "لاسلكي منزلي بريميوم"}
              </p>
              <p className="text-xs text-gray-500">
                {isEnglish ? "24 Month Commitment" : "التزام لمدة 24 شهرًا"}
              </p>
              <p className="text-xs">
                {isEnglish ? "299 AED/month" : "299 درهم / شهر"}
              </p>
              <p className=" bg-[#E00800] text-xs px-1 rounded text-white">
                {isEnglish
                  ? "Limited time offer: 25% OFF"
                  : "عرض محدود: خصم %25"}
              </p>
            </div>
          </div>
        </div>
      )}

      {isAddToBill && (
        <div
          dir={isEnglish ? "ltr" : "rtl"}
          className="bg-gradient-to-r relative from-[#0A0A0A] to-[#E00800]  py-8 grid grid-cols-1 w-8/12 mx-auto px-3 "
        >
          <button
            onClick={handleBack}
            className="absolute text-white left-4 top-2 text-xs "
          >
            <div className="flex items-center ">
              <svg
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="!w-[14px] !h-[14px]"
              >
                <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>{" "}
            </div>
          </button>
          <div className="flex flex-col relative cursor-pointer ">
            <div className="bg-white flex flex-col justify-center items-start h-full p-3 gap-1 rounded-md">
              <p>
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
      )}

      {isRecharge && (
        <div
          dir={isEnglish ? "ltr" : "rtl"}
          className="bg-gradient-to-r relative from-[#0A0A0A] to-[#E00800]  py-8 grid grid-cols-1 w-8/12 mx-auto px-3 "
        >
          <button
            onClick={handleBack}
            className="absolute text-white left-4 top-2 text-xs "
          >
            <div className="flex items-center ">
              <svg
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="!w-[14px] !h-[14px]"
              >
                <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>{" "}
            </div>
          </button>
          <div className="flex flex-col relative cursor-pointer ">
            <div className="bg-white flex flex-col justify-center items-start h-full p-3 gap-1 rounded-md">
              <p>
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
      )}
    </>
  );
};

export default Three;
