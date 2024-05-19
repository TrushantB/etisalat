import React, { useEffect, useRef } from "react";

const Room = ({ setShowLiveChat, showLiveChat }) => {
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

  useEffect(() => {
    if (!showLiveChat) return;

    const initializeMeeting = async () => {
      const { ZegoUIKitPrebuilt } = await import(
        "@zegocloud/zego-uikit-prebuilt"
      );

      // Generate Kit Token
      const roomID = "Arvind";
      const appID = Number(process.env.NEXT_PUBLIC_APP_ID);
      const serverSecret = process.env.NEXT_PUBLIC_SERVER_SECRETE;
      const kitToken = ZegoUIKitPrebuilt?.generateKitTokenForTest(
        appID,
        serverSecret,
        roomID,
        randomID(5),
        "Setoo Solutions"
      );

      // Clean up the previous instance if exists
      if (zpInstanceRef.current) {
        zpInstanceRef.current.destroy();
      }

      // Create a new ZegoUIKitPrebuilt instance and join the room
      const zpInstance = ZegoUIKitPrebuilt.create(kitToken);
      zpInstanceRef.current = zpInstance;

      zpInstance.joinRoom({
        container: containerRef.current,
        // showPreJoinView: false,
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
        onReturnToHomeScreenClicked: () => {
          setShowLiveChat(false);
        },
      });
    };

    initializeMeeting();

    // Clean up when component unmounts or showLiveChat becomes false
    return () => {
      if (zpInstanceRef.current) {
        zpInstanceRef.current.destroy();
        zpInstanceRef.current = null;
      }
    };
  }, [showLiveChat, setShowLiveChat]);

  return <div className="video-frame" ref={containerRef} />;
};

export default Room;
