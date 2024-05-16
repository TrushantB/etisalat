import { useEffect, useState } from "react";
import Header from "@/components/header/header";
import Stepper from "@/components/stepper/stepper";
import { Scene, Persona } from "@soulmachines/smwebsdk";
import InfoPopup from "@/components/infoPopup/infoPopup";

const apiKeyEN =
  "eyJzb3VsSWQiOiJkZG5hLWxwZmxleDk4MWQtLWFiZHVsLWV0aXNhbGF0ZGVtbyIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxXzBlOTJmYWQwLThlYTMtNGVhOC05YTI1LWI4YTdmZjYzYzk0NCJ9";

let scene = null;
let persona = null;

export default function Home() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState("English");
  const [isMicOn, setIsMicOn] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      connect(language);
    }, 0);
  }, []);

  async function connect() {
    // get the video element
    const videoEl = document.getElementById("sm-video");
    // videoEl.muted = true;

    // create a new scene object
    scene = new Scene({
      apiKey: apiKeyEN,
      videoElement: videoEl,
      requestedMediaDevices: { microphone: true, camera: true },
      requiredMediaDevices: { microphone: true, camera: true },
    });

    persona = new Persona(scene, Date.now());

    // connect the Scene to the session server
    await scene
      .connect()
      .then((sessionId) => onConnectionSuccess(sessionId))
      .catch((error) => onConnectionError(error));
  }

  function onConnectionSuccess(sessionId) {
    console.info("success! session id:", sessionId);
    setLoading(false);

    scene?.onRecognizeResultsEvent.addListener((conversationState) => {
      console.log("conversationState", conversationState);
    });
    // start the video playing
    scene
      .startVideo()
      .then((videoState) =>
        console.info("started video with state:", videoState)
      )
      .catch((error) => console.warn("could not start video:", error));

    scene.setMediaDeviceActive({
      microphone: isMicOn,
    });
  }

  function onConnectionError(error) {
    switch (error.name) {
      case "noUserMedia":
        console.warn("user blocked device access");
        break;
      case "noScene":
      case "serverConnectionFailed":
        console.warn("server connection failed");
        break;
      default:
        console.warn("unhandled error:", error);
    }
  }

  // Step 1 end

  // Step 2 start
  const onSelectType = (type) => {
    console.log({ type });
    // persona
    //   .conversationSend(type)
    //   .then((response) => {
    //     console.log("response", response);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  // Step 2 end

  // Step 3 start
  const handlePostpaidPlans = () => {
    persona
      .conversationSend("Postpaid plans")
      .then((response) => {
        console.log("response", response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePrepaidPlans = () => {
    persona
      .conversationSend("Prepaid plans")
      .then((response) => {
        console.log("response", response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleTVInternet = () => {
    persona
      .conversationSend("TV & Internet")
      .then((response) => {
        console.log("response", response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleHomeWireless = () => {
    persona
      .conversationSend("Home Wireless")
      .then((response) => {
        console.log("response", response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleAddToBill = () => {
    persona
      .conversationSend("Add to bill")
      .then((response) => {
        console.log("response", response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleQuickPayRecharge = () => {
    persona
      .conversationSend("Quick pay recharge")
      .then((response) => {
        console.log("response", response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // Step 3 end

  // Step 4 start
  const handleFAQ = () => {
    persona
      .conversationSend("FAQ")
      .then((response) => {
        console.log("response", response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLiveChat = () => {
    persona
      .conversationSend("Live chat")
      .then((response) => {
        console.log("response", response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleMicOnOff = () => {
    if (isMicOn) {
      scene.setMediaDeviceActive({
        microphone: false,
      });
    } else {
      scene.setMediaDeviceActive({
        microphone: true,
      });
    }
    setIsMicOn(!isMicOn);
  };

  const handleStopTalking = () => {
    persona.stopSpeaking();
  };

  // Step 4 end
  return (
    <>
      {/* <Script src="https://res.cloudinary.com/di2eukaqk/raw/upload/v1714761656/smwebsdk_wzzdcv.js" /> */}
      <div className="xl:w-[60%] pt-5 mx-auto px-4 min-[1800px]:w-full  relative flex flex-col items-center">
        {/* <Script src="https://res.cloudinary.com/di2eukaqk/raw/upload/v1714761656/smwebsdk_wzzdcv.js" /> */}

        <Header />
        <Stepper
          setStep={setStep}
          step={step}
          loading={loading}
          onSelectType={onSelectType}
          handlePostpaidPlans={handlePostpaidPlans}
          handlePrepaidPlans={handlePrepaidPlans}
          handleTVInternet={handleTVInternet}
          handleHomeWireless={handleHomeWireless}
          handleAddToBill={handleAddToBill}
          handleQuickPayRecharge={handleQuickPayRecharge}
          handleFAQ={handleFAQ}
          handleLiveChat={handleLiveChat}
          isEnglish={language === "English"}
          isMicOn={isMicOn}
          handleMicOnOff={handleMicOnOff}
          handleStopTalking={handleStopTalking}
        />
        <div className="absolute bottom-0">
          <InfoPopup />
        </div>
      </div>
    </>
  );
}

// import { useEffect, useState } from "react";
// import Header from "@/components/header/header";
// import Stepper from "@/components/stepper/stepper";
// import { Scene, Persona } from "@soulmachines/smwebsdk";

// const apiKeyUAE =
//   "eyJzb3VsSWQiOiJkZG5hLWxwZmxleDk4MWQtLWFyYWJpY2V0aXNhbGF0ZGVtbyIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxXzMyMTZmMTc5LWUyNzEtNDNkNC1hMTk1LTExYWE1MzRkZWQyOSJ9";

// const apiKeyEN =
//   "eyJzb3VsSWQiOiJkZG5hLWxwZmxleDk4MWQtLWV0aXNhbGF0ZGVtbyIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxX2ExMGQ3MzQ3LTZjZGYtNGFlNi04N2FkLWI5NTBmNDA1YzBkYyJ9";

// let scene = null;
// let persona = null;

// let sceneAR = null;
// let personaAR = null;

// export default function Home() {
//   const [step, setStep] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [language, setLanguage] = useState("English");
//   const [isMicOn, setIsMicOn] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       connect(language);
//       connectAR("Arebic");
//     }, 0);
//   }, []);

//   async function connect(language) {
//     // get the video element
//     const videoEl = document.getElementById("sm-video");
//     // videoEl.muted = true;

//     // create a new scene object
//     scene = new Scene({
//       apiKey: language === "English" ? apiKeyEN : apiKeyUAE,
//       videoElement: videoEl,
//       requestedMediaDevices: { microphone: true, camera: true },
//       requiredMediaDevices: { microphone: true, camera: true },
//     });

//     persona = new Persona(scene, Date.now());

//     // connect the Scene to the session server
//     await scene
//       .connect()
//       .then((sessionId) => onConnectionSuccess(sessionId))
//       .catch((error) => onConnectionError(error));
//   }

//   async function connectAR(language) {
//     // get the video element
//     const videoEl = document.getElementById("sm-video-ar");
//     videoEl.muted = true;

//     // create a new scene object
//     sceneAR = new Scene({
//       apiKey: language === "English" ? apiKeyEN : apiKeyUAE,
//       videoElement: videoEl,
//       requestedMediaDevices: { microphone: true, camera: true },
//       requiredMediaDevices: { microphone: true, camera: true },
//     });

//     personaAR = new Persona(sceneAR, Date.now());

//     // connect the Scene to the session server
//     await sceneAR
//       .connect()
//       .then((sessionId) => onConnectionSuccessAR(sessionId))
//       .catch((error) => onConnectionError(error));
//   }

//   function onConnectionSuccess(sessionId) {
//     console.info("success! session id:", sessionId);
//     setLoading(false);

//     // start the video playing
//     scene
//       .startVideo()
//       .then((videoState) =>
//         console.info("started video with state:", videoState)
//       )
//       .catch((error) => console.warn("could not start video:", error));

//     scene.setMediaDeviceActive({
//       microphone: isMicOn,
//     });
//   }

//   function onConnectionSuccessAR(sessionId) {
//     console.info("success! session id:", sessionId);

//     // start the video playing
//     sceneAR
//       .startVideo()
//       .then((videoState) =>
//         console.info("started video with state:", videoState)
//       )
//       .catch((error) => console.warn("could not start video:", error));

//     sceneAR.setMediaDeviceActive({
//       microphone: isMicOn,
//     });
//   }

//   function onConnectionError(error) {
//     switch (error.name) {
//       case "noUserMedia":
//         console.warn("user blocked device access");
//         break;
//       case "noScene":
//       case "serverConnectionFailed":
//         console.warn("server connection failed");
//         break;
//       default:
//         console.warn("unhandled error:", error);
//     }
//   }

//   // Step 1 start
//   const onSelectLanguage = async (newLanguage) => {
//     const videoEl = document.getElementById("sm-video");
//     const videoElAR = document.getElementById("sm-video-ar");
//     if (newLanguage === "English") {
//       videoElAR.muted = true;
//       videoEl.muted = false;
//     } else {
//       videoEl.muted = true;
//       videoElAR.muted = false;
//     }
//     setLanguage(newLanguage);
//   };
//   // Step 1 end

//   // Step 2 start
//   const onSelectType = (type) => {
//     console.log({ type });
//     // persona
//     //   .conversationSend(type)
//     //   .then((response) => {
//     //     console.log("response", response);
//     //   })
//     //   .catch((err) => {
//     //     console.log(err);
//     //   });
//   };
//   // Step 2 end

//   // Step 3 start
//   const handlePostpaidPlans = () => {
//     persona
//       .conversationSend("Postpaid plans")
//       .then((response) => {
//         console.log("response", response);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const handlePrepaidPlans = () => {
//     persona
//       .conversationSend("Prepaid plans")
//       .then((response) => {
//         console.log("response", response);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const handleTVInternet = () => {
//     persona
//       .conversationSend("TV & Internet")
//       .then((response) => {
//         console.log("response", response);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const handleHomeWireless = () => {
//     persona
//       .conversationSend("Home Wireless")
//       .then((response) => {
//         console.log("response", response);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   const handleAddToBill = () => {
//     persona
//       .conversationSend("Add to bill")
//       .then((response) => {
//         console.log("response", response);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const handleQuickPayRecharge = () => {
//     persona
//       .conversationSend("Quick pay recharge")
//       .then((response) => {
//         console.log("response", response);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   // Step 3 end

//   // Step 4 start
//   const handleFAQ = () => {
//     persona
//       .conversationSend("FAQ")
//       .then((response) => {
//         console.log("response", response);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const handleLiveChat = () => {
//     persona
//       .conversationSend("Live chat")
//       .then((response) => {
//         console.log("response", response);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const handleMicOnOff = () => {
//     if (language === "English") {
//       if (isMicOn) {
//         scene.setMediaDeviceActive({
//           microphone: false,
//         });
//       } else {
//         scene.setMediaDeviceActive({
//           microphone: true,
//         });
//       }
//     } else {
//       if (isMicOn) {
//         sceneAR.setMediaDeviceActive({
//           microphone: false,
//         });
//       } else {
//         sceneAR.setMediaDeviceActive({
//           microphone: true,
//         });
//       }
//     }
//     setIsMicOn(!isMicOn);
//   };

//   const handleStopTalking = () => {
//     persona.stopSpeaking();
//     personaAR.stopSpeaking();
//   };

//   // Step 4 end
//   return (
//     <>
//       {/* <Script src="https://res.cloudinary.com/di2eukaqk/raw/upload/v1714761656/smwebsdk_wzzdcv.js" /> */}
//       <div className="xl:w-[60%] pt-5 mx-auto px-4">
//         {/* <Script src="https://res.cloudinary.com/di2eukaqk/raw/upload/v1714761656/smwebsdk_wzzdcv.js" /> */}

//         <Header />
//         <Stepper
//           setStep={setStep}
//           step={step}
//           loading={loading}
//           onSelectLanguage={onSelectLanguage}
//           onSelectType={onSelectType}
//           handlePostpaidPlans={handlePostpaidPlans}
//           handlePrepaidPlans={handlePrepaidPlans}
//           handleTVInternet={handleTVInternet}
//           handleHomeWireless={handleHomeWireless}
//           handleAddToBill={handleAddToBill}
//           handleQuickPayRecharge={handleQuickPayRecharge}
//           handleFAQ={handleFAQ}
//           handleLiveChat={handleLiveChat}
//           isEnglish={language === "English"}
//           isMicOn={isMicOn}
//           handleMicOnOff={handleMicOnOff}
//           handleStopTalking={handleStopTalking}
//         />
//       </div>
//     </>
//   );
// }
