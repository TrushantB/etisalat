import React, { useState } from "react";

const Three = ({
  setStep,
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
  };

  const handleWifi = () => {
    setIsMain(false);
    setIsWifi(true);
    handleHomeWireless();
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
              <p className="text-center text-sm">Postpaid Plans</p>
            </div>
          </div>

          <div
            onClick={handlePrePaid}
            className="bg-white flex flex-col gap-2 justify-center p-3 items-center rounded-md cursor-pointer"
          >
            <img className="w-8 h-8" src="/images/postpaid.svg" alt="" />
            <p className="text-center text-sm">Prepaid Plans</p>
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
              <p className="text-center text-sm">Tv & Internet</p>
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
              <p className="text-center text-sm">Home Wireless</p>
            </div>
          </div>
          <a
            onClick={() => handleAddToBill()}
            className="bg-white flex flex-col gap-2 p-3 justify-center h-full items-center h-full rounded-md cursor-pointer"
          >
            <img className="w-8 h-8" src="/images/bill.svg" alt="" />
            <p className="text-center text-sm">Add to Bill</p>
          </a>

          <a
            target="_blank"
            href="https://www.etisalat.ae/b2c/quick-pay.html?locale=en"
            onClick={() => handleQuickPayRecharge()}
            className="bg-white flex flex-col gap-2 p-3 justify-center items-center rounded-md cursor-pointer"
          >
            <img className="w-8 h-8" src="/images/pay.svg" alt="" />
            <p className="text-center text-sm">Quick pay Recharge</p>
          </a>
        </div>
      )}
      {ispostpaid && (
        <div className="bg-gradient-to-r relative from-[#0A0A0A] to-[#E00800] mt-28 py-8 grid grid-cols-2 px-3 gap-3 ">
          <button
            onClick={handleBack}
            className="absolute text-white left-4 top-2 text-xs "
          >
            Back
          </button>
          <div className="flex flex-col relative cursor-pointer">
            <div className="bg-white  flex flex-col  justify-center items-center p-3 gap-2 rounded-md">
              <p className="text-sm">Freedom Live Plans</p>
              <p className="text-xs ">Up to 40% off on all plans</p>
              <ul className=" list-disc ps-5">
                <li className="text-[11px]">Loads of data and minutes</li>
                <li className="text-[11px]">free Content Passes</li>
                <li className="text-[11px]">
                  Extra data for your favorite apps
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col relative cursor-pointer">
            <div className="bg-white  flex flex-col  justify-center items-center p-3 gap-2 rounded-md h-full">
              <p className="text-sm">Emirati Live Plans</p>
              <p className="text-xs ">Up to 40% off on all plans</p>
              <ul className=" list-disc ps-5">
                <li className="text-[11px]">Loads of GBs and minutes</li>
                <li className="text-[11px]">Premium Numbers</li>
                <li className="text-[11px]">Free Roam like home </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {isPrepaid && (
        <div className="bg-gradient-to-r relative from-[#0A0A0A] to-[#E00800] mt-28 py-8 grid grid-cols-2 px-3 gap-3 ">
          <button
            onClick={handleBack}
            className="absolute text-white left-4 top-2 text-xs "
          >
            Back
          </button>
          <div className="flex flex-col relative cursor-pointer">
            <div className="bg-white  flex flex-col  justify-center  p-3 gap-2 rounded-md">
              <p className="text-sm">Wasel Flexi</p>
              <p className="text-xs ">
                Get FREE SIM worth AED 55 with Wasel Flexi
              </p>
              <ul className=" list-disc ps-5">
                <li className="text-[11px]">Double data on all plans</li>
                <li className="text-[11px]">
                  Save 50% with Wasel Flexi Yearly plans
                </li>
                <li className="text-[11px]">
                  Unlimited data for GoChat Messenger
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col relative cursor-pointer ">
            <div className="bg-white  flex flex-col  justify-between   p-3 gap-2 rounded-md ">
              <p className="text-sm">Emirati Wasel plan</p>
              <p className="text-xs ">
                Customise your own combination of data, minutes{" "}
              </p>
              <ul className=" list-disc ps-5">
                <li className="text-[11px]">
                  Get FREE SIM when you shop online
                </li>
                <li className="text-[11px]">Extra data on all plans</li>
                <li className="text-[11px]">Special Bronze number </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {isTv && (
        <div className="bg-gradient-to-r relative from-[#0A0A0A] to-[#E00800] mt-28 py-8 grid grid-cols-2 px-3 gap-3 ">
          <button
            onClick={handleBack}
            className="absolute text-white left-4 top-2 text-xs "
          >
            Back
          </button>
          <div className="flex flex-col relative cursor-pointer">
            <div className="bg-white  flex flex-col  justify-center  p-3 gap-1 rounded-md">
              <p className="text-sm font-bold">Ultra Starter</p>
              <p className="text-xs text-gray-500">24 Month Commitment</p>
              <p className="text-xs">AED 299/month</p>
              <p className=" bg-[#E00800] text-xs px-1 rounded text-white">
                Free Installation + Smiles Voucher
              </p>
              <p className="text-[#e00800] text-xs">6 month rental discount</p>
              <p className="font-bold text-sm">INTERNET- 500mbps</p>
            </div>
          </div>

          <div className="flex flex-col relative cursor-pointer">
            <div className="bg-white  flex flex-col  justify-center  p-3 gap-1 rounded-md">
              <p className="text-sm font-bold">Ultra Sport</p>

              <p className="text-xs text-gray-500">24 Month Commitment</p>
              <p className="text-xs">AED 515/month</p>
              <p className=" bg-[#E00800] text-xs px-1 rounded text-white">
                Free Installation + Smiles Voucher
              </p>
              <p className="text-[#e00800] text-xs">
                Free speed boost upto 1GB
              </p>
              <p className="font-bold text-sm">INTERNET- 750mbps</p>
            </div>
          </div>
        </div>
      )}

      {isWifi && (
        <div className="bg-gradient-to-r relative from-[#0A0A0A] to-[#E00800] mt-28 py-8 grid grid-cols-2 px-3 gap-3 ">
          <button
            onClick={handleBack}
            className="absolute text-white left-4 top-2 text-xs "
          >
            Back
          </button>
          <div className="flex flex-col relative cursor-pointer ">
            <div className="bg-white  flex flex-col  justify-center h-full  p-3 gap-1 rounded-md">
              <p className="text-sm font-bold">Home Wireless Advance</p>
              <p className="text-xs text-gray-500">12 Month Commitment</p>
              <p className="text-xs">199 AED/month</p>
              <p className=" bg-[#E00800] text-xs px-1 rounded text-white">
                Limited time offer: 50% OFF
              </p>
            </div>
          </div>
          <div className="flex flex-col relative cursor-pointer">
            <div className="bg-white  flex flex-col  justify-center  p-3 gap-1 rounded-md">
              <p className="text-sm font-bold">Home Wireless Premium</p>
              <p className="text-xs text-gray-500">24 Month Commitment</p>
              <p className="text-xs">299 AED/month</p>
              <p className=" bg-[#E00800] text-xs px-1 rounded text-white">
                Limited time offer: 25% OFF
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Three;
