import { useEffect, useState } from "react";
import Header from "@/components/header/header";
import Stepper from "@/components/stepper/stepper";
import { Scene, Persona } from "@soulmachines/smwebsdk";

const apiKeyUAE =
  "eyJzb3VsSWQiOiJkZG5hLWxwZmxleDk4MWQtLWV4cGxvcmVyIiwiYXV0aFNlcnZlciI6Imh0dHBzOi8vZGguc291bG1hY2hpbmVzLmNsb3VkL2FwaS9qd3QiLCJhdXRoVG9rZW4iOiJhcGlrZXlfdjFfNDE5ZTNjYjEtMDRmOS00ZGZmLWFkYjItM2FlY2VjZmY3ODMxIn0=";

const apiKeyEN =
  "eyJzb3VsSWQiOiJkZG5hLWxwZmxleDk4MWQtLWV0aXNhbGF0ZGVtbyIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxX2ExMGQ3MzQ3LTZjZGYtNGFlNi04N2FkLWI5NTBmNDA1YzBkYyJ9";

let scene = null;
let persona = null;

export default function Home() {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState("English");

  useEffect(() => {
    setTimeout(() => {
      connect(language);
    }, 0);
  }, []);

  async function connect(language) {
    // get the video element
    const videoEl = document.getElementById("sm-video");

    // create a new scene object
    scene = new Scene({
      apiKey: language === "English" ? apiKeyEN : apiKeyUAE,
      videoElement: videoEl,
      requestedMediaDevices: { microphone: false, camera: true },
      requiredMediaDevices: { microphone: false, camera: true },
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
    setStep(1);

    // start the video playing
    scene
      .startVideo()
      .then((videoState) =>
        console.info("started video with state:", videoState)
      )
      .catch((error) => console.warn("could not start video:", error));
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

  // Step 1 start
  const onSelectLanguage = async (newLanguage) => {
    if (newLanguage !== language) {
      await scene?.disconnect();
      connect(newLanguage);
      setLoading(true);
    }
    setLanguage(newLanguage);
  };
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
  // Step 4 end

  return (
    <>
      {/* <Script src="https://res.cloudinary.com/di2eukaqk/raw/upload/v1714761656/smwebsdk_wzzdcv.js" /> */}
      <div className="lg:w-[60%] mx-auto shadow-md px-4">
        {/* <Script src="https://res.cloudinary.com/di2eukaqk/raw/upload/v1714761656/smwebsdk_wzzdcv.js" /> */}

        <Header />
        <Stepper
          setStep={setStep}
          step={step}
          loading={loading}
          onSelectLanguage={onSelectLanguage}
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
        />
      </div>
    </>
  );
}
