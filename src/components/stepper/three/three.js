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
  scene,
  setIsMicOn
}) => {
  const [showBillDeviation, setShowBillDeviation] = useState(false);
  const [showInternetNotWorking, setShowInternetNotWorking] = useState(false);
  const [showElif, setShowElif] = useState(false);
  const [showFaq, setShowFaq] = useState(false);
  const [showLiveChat, setShowLiveChat] = useState();

  const zpRef = useRef(null);

  const containerRef = useRef(null);
  const zpInstanceRef = useRef(null);

  function randomID(len) {
    let result = "";
    const chars =
      "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP";
    const maxPos = chars.length;
    len = len || 5;
    for (let i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
  }

  const invite = async () => {
    const { ZegoUIKitPrebuilt } = await import(
      "@zegocloud/zego-uikit-prebuilt"
    );
    const { ZIM } = await import("zego-zim-web");

    const appID = Number(8213693);
    const serverSecret = "b970e20132df716482149049248bf875";
    const TOKEN = await ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      "Arvind",
      "support",
      "userName"
    );
    const zp = ZegoUIKitPrebuilt.create(TOKEN);
    zp.addPlugins({ ZIM });

    zp.setCallInvitationConfig({
      enableNotifyWhenAppRunningInBackgroundOrQuit: true,
    });

    const targetUser = {
      userID: "support2",
      userName: "support2",
    };
    zp.sendCallInvitation({
      callees: [targetUser],
      callType: ZegoUIKitPrebuilt.InvitationTypeVideoCall,
      notificationConfig: {
        resourcesID: "support",
        title: "Setoo Solutions calling",
        message: "Incoming video call...",
      },
    });
    // const zp = await ZegoUIKitPrebuilt.create(TOKEN);

    // zp.addPlugins({ ZIM });
    // const targetUser = {
    //   userID: "support1",
    //   userName: "support",
    // };
    // zp.sendCallInvitation({
    //   callees: [targetUser],
    //   callType: ZegoUIKitPrebuilt?.InvitationTypeVideoCall,
    //   timeout: 60, // Timeout duration (second). 60s by default, range from [1-600s].
    // })
    //   .then((res) => {
    //     console.warn("res");
    //   })
    //   .catch((err) => {
    //     console.log("error",err);
    //   });
  };

  // useEffect(() => {
  //   if (!showLiveChat) return;


  //   // Clean up when component unmounts or showLiveChat becomes false
  //   return () => {
  //     if (zpInstanceRef.current) {
  //       zpInstanceRef.current.destroy();
  //       zpInstanceRef.current = null;
  //     }
  //   };
  // }, [showLiveChat, setShowLiveChat]);
  
//   const invite =  async () => {
//     const { ZegoUIKitPrebuilt } = await import(
//       "@zegocloud/zego-uikit-prebuilt"
//     );
//     const { ZIM } = await import("zego-zim-web");

//     const appID = Number(8213693);
//     const serverSecret = "b970e20132df716482149049248bf875";
//     const TOKEN = await ZegoUIKitPrebuilt.generateKitTokenForTest(
//       appID,
//       serverSecret,
//       "Arvind",
//       "userID",
//       "userName"
//     );
// console.log("token",TOKEN)
//     const zp = await ZegoUIKitPrebuilt.create(TOKEN);

//     zp.addPlugins({ ZIM });
//     const targetUser = {
//       userID: "support1",
//       userName: "support",
//     };
//     zp.sendCallInvitation({
//       callees: [targetUser],
//       callType: ZegoUIKitPrebuilt?.InvitationTypeVideoCall,
//       timeout: 60, // Timeout duration (second). 60s by default, range from [1-600s].
//     })
//       .then((res) => {
//         console.warn("res");
//       })
//       .catch((err) => {
//         console.log("error",err);
//       });
//   };
  const leaveCall = async () => {
    if (zpRef.current && typeof zpRef.current.leaveRoom === "function") {
      zpRef.current.leaveRoom();
    }
  };
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

    const initializeMeeting = async () => {
      const { ZegoUIKitPrebuilt } = await import(
        "@zegocloud/zego-uikit-prebuilt"
      );

      // Generate Kit Token
      const roomID = "Arvind";
      const appID = Number(8213693);
      //   const appID = Number(process.env.NEXT_PUBLIC_APP_ID);
      const serverSecret = "b970e20132df716482149049248bf875";
      //   const serverSecret = process.env.NEXT_PUBLIC_SERVER_SECRETE;
      const kitToken = ZegoUIKitPrebuilt?.generateKitTokenForTest(
        appID,
        serverSecret,
        roomID,
        "name",
        "Setoo Solutions"
      );

      // Clean up the previous instance if exists
      if (zpInstanceRef.current) {
        zpInstanceRef.current.destroy();
      }

      // Create a new ZegoUIKitPrebuilt instance and join the room
      const zpInstance = ZegoUIKitPrebuilt.create(kitToken);
      zpInstanceRef.current = zpInstance;
      invite();
      scene && scene.setMediaDeviceActive({
        microphone: false,
      });
      setIsMicOn(false)
      // zpInstance.joinRoom({
      //   container: containerRef.current,
      //   // showPreJoinView: false,
      //   sharedLinks: [
      //     {
      //       name: "Personal link",
      //       url:
      //         window.location.protocol +
      //         "//" +
      //         window.location.host +
      //         window.location.pathname +
      //         "?roomID=" +
      //         roomID,
      //     },
      //   ],
      //   scenario: {
      //     mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      //   },
      //   onReturnToHomeScreenClicked: () => {
      //     setShowLiveChat(false);
      //   },
      //   onJoinRoom:()=>{
      //     // console.log("HIIIIII")
      //     invite();
      //   }
      // });
    };

    initializeMeeting();
    // setShowLiveChat(true);
    // invite();
  };
  const closeShowElife = () => {
    setShowElif(false);
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
console.log("scene",scene);
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
            <div className="relative w-auto w-full max-w-3xl mx-5 my-6 inner-slider-wrapper">
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <div
                  onClick={closeShowBillDeviation}
                  className="absolute z-50 text-xl cursor-pointer top-2 right-5 text-small"
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
            className="fixed inset-0 z-40"
            onClick={closeShowBillDeviation}
          ></div>
        </>
      )}
      {showInternetNotWorking && (
        <>
          <div className="fixed inset-0 z-50 flex items-end justify-center -mt-10 overflow-x-hidden overflow-y-auto outline-none focus:outline-none carousel-wrapper">
            <div className="relative w-auto w-full max-w-3xl mx-5 my-6 inner-slider-wrapper">
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <div
                  onClick={closeShowInternetNotWorking}
                  className="absolute z-50 text-xl cursor-pointer top-2 right-5 "
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
            className="fixed inset-0 z-40"
            onClick={closeShowInternetNotWorking}
          ></div>
        </>
      )}
      {showElif && (
        <>
          <div className="fixed inset-0 z-50 flex items-end justify-center -mt-10 overflow-x-hidden overflow-y-auto outline-none focus:outline-none carousel-wrapper">
            <div className="relative w-auto w-full max-w-3xl mx-5 my-6 inner-slider-wrapper">
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <div
                  onClick={closeShowElife}
                  className="absolute z-50 text-xl cursor-pointer top-2 right-5 "
                >
                  x
                </div>
                <ElifeSlider closeShowElife={closeShowElife} />
              </div>
            </div>
          </div>
          <div
            className="fixed inset-0 z-40"
            onClick={closeShowElife}
          ></div>
        </>
      )}
      {showFaq && (
        <>
          <div className="fixed inset-0 z-50 flex items-end justify-center -mt-10 overflow-x-hidden overflow-y-auto outline-none focus:outline-none faq-wrapper">
            <div className="relative w-auto my-6 mx-5 max-w-3xl 2xl:max-w-[1400px] w-full">
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <div
                  onClick={closeShowFaq}
                  className="absolute z-50 text-xl cursor-pointer top-2 right-5 "
                >
                  x
                </div>
                <FaqSlider closeShowFaq={closeShowFaq} />
              </div>
            </div>
          </div>
          <div
            className="fixed inset-0 z-40"
            onClick={closeShowFaq}
          ></div>
        </>
      )}
    </>
  );
};

export default Three;
