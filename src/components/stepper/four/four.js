import React, { useState } from "react";
const Four = ({ handleLiveChat, handleFAQ, isEnglish }) => {
  const [showPopup, setShowPopup] = useState(false);
  // const roomID = getUrlParams().get('roomID') || randomID(5);

  function randomID(len) {
    let result = "";
    if (result) return result;
    var chars =
        "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
      maxPos = chars.length,
      i;
    len = len || 5;
    for (i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
  }
  let myMeeting = async (element) => {
    const { ZegoUIKitPrebuilt } = await import(
      "@zegocloud/zego-uikit-prebuilt"
    );

    // generate Kit Token
    const roomID = "Arvind";

    const appID = Number(process.env.NEXT_PUBLIC_APP_ID);
    const serverSecret = process.env.NEXT_PUBLIC_SERVER_SECRETE;
    const kitToken = ZegoUIKitPrebuilt?.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      randomID(5),
      "Alawa"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(),  "Alawa");

    // Create instance object from Kit Token.
    // const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp?.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Personal link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?roomID=" +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const handleLiveChats = () => {
    console.log("hiii");
    myMeeting("Hello");
  };
  return (
    <div className="bg-gradient-to-r from-[rgba(10,10,10,0.5)] to-[rgba(224,8,0,0.5)] py-5 grid grid-cols-2 px-3 gap-3 gap-y-6 sm:gap-y-3 rounded-[24px]">
      <a
        target="_blank"
        ref={myMeeting}
        onClick={handleLiveChats}
        className="flex flex-col items-center justify-center h-full gap-1 p-2 bg-white rounded-md cursor-pointer min-[1800px]:p-6"
      >
        <img
          className="w-6 h-6  min-[1800px]:w-24 min-[1800px]:h-24 services-icon"
          src="/images/postpaid.svg"
          alt=""
        />
        <p className="text-xs text-center sm:text-sm text-secondary-in">
          {" "}
          {isEnglish ? "Live Chat" : "دردشة مباشرة"}{" "}
        </p>
      </a>
      <a
        target="_blank"
        onClick={() => handleFAQ()}
        className="flex flex-col items-center justify-center h-full gap-1 p-2 bg-white rounded-md cursor-pointer min-[1800px]:p-6"
      >
        <img
          className="w-6 h-6  min-[1800px]:w-24 min-[1800px]:h-24 services-icon"
          src="/images/postpaid.svg"
          alt=""
        />
        <p className="text-xs text-center sm:text-sm text-secondary-in">
          {" "}
          {isEnglish ? "Faq" : "التعليمات"}{" "}
        </p>
      </a>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-end justify-center live-chat-popup">
          <div
            onClick={togglePopup}
            className="h-full w-full bg-[rgba(0,0,0,0.3)] absolute -z-10 cursor-pointer"
          ></div>
          <div className="p-8 bg-gradient-to-r from-[rgba(10,10,10,0.5)] to-[rgba(224,8,0,0.5)] rounded-[24px] shadow-2xl w-96 min-[1800px]:w-2/5 mb-16 min-[1800px]:mb-24">
            <div className="flex flex-col justify-center min-h-full px-4 pt-2 pb-4 bg-white rounded-md lg:px-4 text-secondary-in">
              {isEnglish
                ? "Our customer care representative is currently occupied with other matters. You can interact with our AI avatar instead."
                : "تم الانشغال حاليًا بأمور أخرى. يمكنك التفاعل مع الصورة الرمزية الذكاء الصناعي الخاصة بنا بدلاً من ذلك."}{" "}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Four;
