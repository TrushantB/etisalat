import React from "react";

const Three = ({setStep}) => {
  return (
    <div onClick={() => setStep(4)} className="  bg-gradient-to-r from-[#0A0A0A] to-[#E00800] mt-28 py-5 grid grid-cols-3 px-5 gap-5 ">
      <div className="flex flex-col relative cursor-pointer">
        <p className="text-[8px] bg-[#E00800] rounded-md w-auto absolute p-1 -top-2 left-1 flex text-white">
          New Offers
        </p>
        <div className="bg-white  flex flex-col  justify-center items-center p-3 gap-2 rounded-md">
          <img className="w-8 h-8" src="/images/postpaid.svg" alt="" />
          <p className="text-center text-sm">Postpaid Plans</p>
        </div>
      </div>

      <div className="bg-white flex flex-col gap-2 justify-center p-3 items-center rounded-md cursor-pointer">
        <img className="w-8 h-8" src="/images/postpaid.svg" alt="" />
        <p className="text-center text-sm">Prepaid Plans</p>
      </div>

      <div className="flex flex-col relative cursor-pointer">
        <p className="text-[8px] bg-[#E00800] rounded-md w-auto absolute p-1 -top-2 left-1 flex text-white">
          FREE voucher
        </p>
        <div className="bg-white  flex flex-col  justify-center items-center p-3 gap-2 rounded-md">
          <img className="w-8 h-8" src="/images/postpaid.svg" alt="" />
          <p className="text-center text-sm">Tv & Internet</p>
        </div>
      </div>
      <div className="bg-white flex flex-col gap-2 p-3 justify-center items-center h-full rounded-md cursor-pointer">
        <img className="w-8 h-8" src="/images/postpaid.svg" alt="" />
        <p className="text-center text-sm">Home Wireless</p>
      </div>

      <div className="flex flex-col relative cursor-pointer">
        <p className="text-[8px] bg-[#E00800] rounded-md w-auto absolute p-1 -top-2 left-1 flex text-white">
          5G
        </p>
        <div className="bg-white  flex flex-col  justify-center items-center p-3 gap-2 rounded-md">
          <img className="w-8 h-8" src="/images/postpaid.svg" alt="" />
          <p className="text-center text-sm">Home Wireless</p>
        </div>
      </div>
      <div className="bg-white flex flex-col gap-2 p-3 justify-center items-center rounded-md cursor-pointer">
        <img className="w-8 h-8" src="/images/postpaid.svg" alt="" />
        <p className="text-center text-sm">Quick pay Recharge</p>
      </div>
    </div> 
  );
};

export default Three;
