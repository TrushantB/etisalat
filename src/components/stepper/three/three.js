import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BILL_DEVIATION } from "@/utility/constant";
import BillDeviationSlider from "../billDeviationSlider/BillDeviationSlider";
import InternetNotWorkingSlider from "../internetNotWorking/InternetNotWorkingSlider";
import ElifeSlider from "../elifeSlider/ElifeSlider";
import FaqSlider from "../faqSlider/FaqSlider";
import Room from "../room/Room";

const Three = ({
  setStep,
  onSelectType,
  isEnglish,
  isMain,
  billDeviation,
  handleStopTalking,
  internetNotWorking,
  elife,
  slowInternetSpeed,
}) => {
  const [showBillDeviation, setShowBillDeviation] = useState(false);
  const [showInternetNotWorking, setShowInternetNotWorking] = useState(false);
  const [showElif, setShowElif] = useState(false);
  const [showFaq, setShowFaq] = useState(false);
  const [showLiveChat, setShowLiveChat] = useState();

  const zpRef = useRef(null);

  // function randomID(len) {
  //   let result = "";
  //   if (result) return result;
  //   var chars =
  //       "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
  //     maxPos = chars.length,
  //     i;
  //   len = len || 5;
  //   for (i = 0; i < len; i++) {
  //     result += chars.charAt(Math.floor(Math.random() * maxPos));
  //   }
  //   return result;
  // }
  // let myMeeting = async (element) => {
  //   const { ZegoUIKitPrebuilt } = await import(
  //     "@zegocloud/zego-uikit-prebuilt"
  //   );

  //   // generate Kit Token
  //   const roomID = "Arvind";

  //   const appID = Number(process.env.NEXT_PUBLIC_APP_ID);
  //   const serverSecret = process.env.NEXT_PUBLIC_SERVER_SECRETE;
  //   const kitToken = ZegoUIKitPrebuilt?.generateKitTokenForTest(
  //     appID,
  //     serverSecret,
  //     roomID,
  //     randomID(5),
  //     "Setoo Solutions"
  //   );
  //   const zp = ZegoUIKitPrebuilt.create(kitToken);
  //   zpRef.current = zp;
  //   zp?.joinRoom({
  //     container: element,
  //     sharedLinks: [
  //       {
  //         name: "Personal link",
  //         url:
  //           window.location.protocol +
  //           "//" +
  //           window.location.host +
  //           window.location.pathname +
  //           "?roomID=" +
  //           roomID,
  //       },
  //     ],
  //     scenario: {
  //       mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
  //       // showPreJoinView:false;
  //     },
      
  //   });
    
  // };
const leaveCall = async() =>{
  if (zpRef.current && typeof zpRef.current.leaveRoom === 'function') {
    zpRef.current.leaveRoom();
  }
}
  const openShowBillDeviation = (event) => {
    billDeviation();
    setShowBillDeviation(true);
  };
  const openShowInternetNotWorking = (event) => {
    internetNotWorking();
    setShowInternetNotWorking(true);
  };

  const openElif = () => {
    elife();
    setShowElif(true);
  };
  const openLiveChat = () => {
    setShowLiveChat(true);
  };
  const closeShowElife = () => {
    setShowLiveChat(false);
    handleStopTalking();
  };
  const closeShowLiveChat = () => {
    setShowLiveChat(false);
  };

  const closeShowInternetNotWorking = () => {
    setShowInternetNotWorking(false);
    handleStopTalking();
  };

  const closeShowBillDeviation = () => {
    setShowBillDeviation(false);
    handleStopTalking();
  };

  const openFaq = () => {
    setShowFaq(true);
  };
  const closeShowFaq = () => {
    setShowFaq(false);
    handleStopTalking();
  };
 
  return (
    <>
      {isMain && (
        <div className="bg-gradient-to-r from-[rgba(10,10,10,0.5)] to-[rgba(224,8,0,0.5)] py-5 grid grid-cols-3 px-3 gap-3 gap-y-6 sm:gap-y-3 rounded-[24px]  modal-wrapper">
          <div
            onClick={openShowBillDeviation}
            className="relative flex flex-col cursor-pointer"
          >
            <div
              className="flex flex-col items-center justify-start h-full gap-1 p-2 bg-white rounded-md min-[1800px]:p-6 min-[1800px]:gap-3"
              name="bill deviation"
            >
              <img
                className="w-6 h-6 min-[1800px]:w-24 min-[1800px]:h-24 services-icon"
                src="/images/postpaid.svg"
                alt=""
              />
              <p
                className="text-xs text-center sm:text-sm text-secondary-in"
                name="bill deviation"
              >
                {isEnglish ? "Bill Deviation" : "انحراف الفاتورة"}
              </p>
            </div>
          </div>

          <div
            className="flex flex-col items-center justify-start h-full gap-1 p-2 bg-white rounded-md cursor-pointer min-[1800px]:p-6 min-[1800px]:gap-3"
            onClick={openShowInternetNotWorking}
          >
            <img
              className="w-6 h-6 min-[1800px]:w-24 min-[1800px]:h-24 services-icon  "
              src="/images/postpaid.svg"
              alt=""
            />
            <p className="text-xs text-center sm:text-sm text-secondary-in">
              {isEnglish ? "Internet not working" : "الإنترنت لا يعمل"}
            </p>
          </div>

          <div className="relative flex flex-col cursor-pointer">
            <div
              className="flex flex-col items-center justify-start h-full gap-1 p-2 bg-white rounded-md min-[1800px]:p-6 min-[1800px]:gap-3"
              onClick={openElif}
            >
              <img
                className="w-6 h-6 min-[1800px]:w-24 min-[1800px]:h-24 services-icon  min-[1800px]:mt-3  "
                src="/images/tv.svg"
                alt=""
              />
              <p className="text-xs text-center sm:text-sm text-secondary-in">
                {" "}
                {isEnglish
                  ? "Facing an issue with eLife"
                  : "واجهت مشكلة مع إي لايف"}
              </p>
            </div>
          </div>

          <div className="relative flex flex-col cursor-pointer">
            <div
              className="flex flex-col items-center justify-start h-full gap-1 p-2 bg-white rounded-md min-[1800px]:p-6 min-[1800px]:gap-3"
              onClick={slowInternetSpeed}
            >
              <img
                className="w-6 h-6 min-[1800px]:w-24 min-[1800px]:h-24 services-icon  "
                src="/images/wifi.svg"
                alt=""
              />
              <p className="text-xs text-center sm:text-sm text-secondary-in">
                {isEnglish ? "Speed is very slow" : "السرعة بطيئة جدًا"}
              </p>
            </div>
          </div>

          <div
            className="flex flex-col items-center justify-start h-full gap-1 p-2 bg-white rounded-md cursor-pointer min-[1800px]:p-6 min-[1800px]:gap-3"
            onClick={openLiveChat}
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
            onClick={openFaq}
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
      {showBillDeviation && (
        <>
          <div className="fixed inset-0 z-50 flex items-end justify-center -mt-10 overflow-x-hidden overflow-y-auto outline-none focus:outline-none carousel-wrapper">
            <div className="relative w-auto my-6 mx-5 max-w-3xl 2xl:max-w-[1400px] w-full">
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <div
                  onClick={closeShowBillDeviation}
                  className="absolute z-50 text-base cursor-pointer top-2 right-5"
                >
                  x
                </div>
                <BillDeviationSlider
                  showBillDeviation={showBillDeviation}
                  closeShowBillDeviation={closeShowBillDeviation}
                />
              </div>
            </div>
          </div>
          <div
            className="fixed inset-0 z-40 bg-black opacity-25"
            onClick={closeShowBillDeviation}
          ></div>
        </>
      )}
      {showInternetNotWorking && (
        <>
          <div className="fixed inset-0 z-50 flex items-end justify-center -mt-10 overflow-x-hidden overflow-y-auto outline-none focus:outline-none carousel-wrapper">
            <div className="relative w-auto my-6 mx-5 max-w-3xl 2xl:max-w-[1400px] w-full">
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <div
                  onClick={closeShowInternetNotWorking}
                  className="absolute z-50 text-base cursor-pointer top-2 right-5"
                >
                  x
                </div>
                <InternetNotWorkingSlider
                  closeShowInternetNotWorking={closeShowInternetNotWorking}
                />
              </div>
            </div>
          </div>
          <div
            className="fixed inset-0 z-40 bg-black opacity-25"
            onClick={closeShowInternetNotWorking}
          ></div>
        </>
      )}
      {showElif && (
        <>
          <div className="fixed inset-0 z-50 flex items-end justify-center -mt-10 overflow-x-hidden overflow-y-auto outline-none focus:outline-none carousel-wrapper">
            <div className="relative w-auto my-6 mx-5 max-w-3xl 2xl:max-w-[1400px] w-full">
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <div
                  onClick={closeShowElife}
                  className="absolute z-50 text-base cursor-pointer top-2 right-5"
                >
                  x
                </div>
                <ElifeSlider closeShowElife={closeShowElife} />
              </div>
            </div>
          </div>
          <div
            className="fixed inset-0 z-40 bg-black opacity-25"
            onClick={closeShowElife}
          ></div>
        </>
      )}
      {showFaq && (
        <>
          <div className="fixed inset-0 z-50 flex items-end justify-center -mt-10 overflow-x-hidden overflow-y-auto outline-none focus:outline-none carousel-wrapper faq-wrapper">
            <div className="relative w-auto my-6 mx-5 max-w-3xl 2xl:max-w-[1400px] w-full">
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <div
                  onClick={closeShowFaq}
                  className="absolute z-50 text-base cursor-pointer top-2 right-5"
                >
                  x
                </div>
                <FaqSlider closeShowFaq={closeShowFaq} />
              </div>
            </div>
          </div>
          <div
            className="fixed inset-0 z-40 bg-black opacity-25"
            onClick={closeShowFaq}
          ></div>
        </>
      )}
      {showLiveChat && (
        <>
          <div className="fixed inset-0 z-50 flex items-end justify-center -mt-10 overflow-x-hidden overflow-y-auto outline-none focus:outline-none carousel-wrapper">
            <div className="relative w-full my-6 mx-5 max-w-3xl 2xl:max-w-[800px]">
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <div
                  onClick={closeShowLiveChat}
                  className="absolute z-50 text-base text-white cursor-pointer top-2 right-5"
                >
                  x
                </div>
                <Room setShowLiveChat={setShowLiveChat} showLiveChat={showLiveChat}/>

                {/* <div ref={myMeeting}></div> */}
              </div>
            </div>
          </div>
          <div
            className="fixed inset-0 z-40 bg-black opacity-25"
            onClick={closeShowLiveChat}
          ></div>
        </>
      )}
    </>
  );
};

export default Three;
