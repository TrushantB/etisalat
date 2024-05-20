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
        title: "Call invitation",
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

  useEffect(() => {
    if (!showLiveChat) return;

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
