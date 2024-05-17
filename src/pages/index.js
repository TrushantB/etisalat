import { useEffect, useState } from "react";
import Header from "@/components/header/header";
import Stepper from "@/components/stepper/stepper";
import { Scene, Persona } from "@soulmachines/smwebsdk";
import InfoPopup from "@/components/infoPopup/infoPopup";

const apiKeyEN =
  "eyJzb3VsSWQiOiJkZG5hLXNldG9vLXNvbHV0aW9uc2Y4NzAtLW1ldGFoIiwiYXV0aFNlcnZlciI6Imh0dHBzOi8vZGguc291bG1hY2hpbmVzLmNsb3VkL2FwaS9qd3QiLCJhdXRoVG9rZW4iOiJhcGlrZXlfdjFfYTAxOWNjNzQtMmY2Yi00MzkzLWI0N2EtZmYyZDUzMGVjYmIwIn0=";

let scene = null;
let persona = null;

export default function Home() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState("English");
  const [isMicOn, setIsMicOn] = useState(true);
  const [type, setType] = useState('business');

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

    scene?.onRecognizeResultsEvent.addListener(
      (conversationState) => {
        console.log("conversationState", conversationState);
      }
  );
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
    setType(type);
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
      <div className="xl:w-[60%] mx-auto min-[1800px]:w-full">
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
          type={type}
        />
        {/* <div className="absolute bottom-0">
          <InfoPopup />
        </div> */}
      </div>
    </>
  );
}