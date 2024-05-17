"use client"

import { useSearchParams } from "next/navigation";
import React from "react";

function LiveRoom() {
  const params = useSearchParams();

  function randomID(len) {
    let result = '';
    if (result) return result;
    var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
      maxPos = chars.length,
      i;
    len = len || 5;
    for (i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
  }

   function getUrlParams(
    url = window.location.href
  ) {
    let urlStr = url.split('?')[1];
    return new URLSearchParams(urlStr);
  }
  let myMeeting = async (element) => {
    const { ZegoUIKitPrebuilt } = await import(
      "@zegocloud/zego-uikit-prebuilt"
    );

    // generate Kit Token
    const roomID =  getUrlParams().get('roomID');
    console.log("roomID", typeof roomID)

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
  return <div ref={myMeeting}></div>;
}

export default LiveRoom;
