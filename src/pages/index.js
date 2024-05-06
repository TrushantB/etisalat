import { useEffect, useState } from "react";
import Header from "@/components/header/header";
import Stepper from "@/components/stepper/stepper";
import { Scene, Persona } from "@soulmachines/smwebsdk";
import {
  SessionRequest,
  SessionResponse,
  ExecuteRequest,
  ExecuteResponse,
} from "@soulmachines/smskillsdk";
import { Output, Intent, Variables } from "@soulmachines/smskillsdk";

// execute endpoint handler containing response generation logic
// function executeHandler(request) {

//   // response generation logic here

//   const variables = {
//       "public": {
//           "card": { }
//       }
//   } ;

//   const output = {
//       "text": "Text for the digital person to speak",
//       variables
//   } ;

//   const response = {
//       output,
//       "memory": [],
//       "endConversation": true
//   };
//   return response;
// }

// // route method
// app.post("/", (req, res) => {
//   const executeRequest = request.body;
//   const executeResponse = executeHandler(executeRequest);
//   response.json(executeResponse);
// })

// const inter = Inter({ subsets: ["latin"] });
const apiKey =
  "eyJzb3VsSWQiOiJkZG5hLWxwZmxleDk4MWQtLWV0aXNhbGF0ZGVtbyIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxX2ExMGQ3MzQ3LTZjZGYtNGFlNi04N2FkLWI5NTBmNDA1YzBkYyJ9";
let scene = null;
let persona = null;

export default function Home() {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      connect();
    }, 100);
  }, []);

  async function connect() {
    // get the video element
    const videoEl = document.getElementById("sm-video");

    // create a new scene object
    scene = new Scene({
      apiKey: apiKey,
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
  function sendMessage() {
    // scene.sendUserText("Hello");
  }

  // Step 1 start
  const onSelectLanguage = (language) => {
    persona
      .conversationSend(language)
      .then((response) => {
        console.log("response", response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // Step 1 end

  // Step 2 start
  const onSelectType = (type) => {
    persona
      .conversationSend(type)
      .then((response) => {
        console.log("response", response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // Step 2 end

  // Step 3 start
  const handlePostpaidPlans = () => {
    persona
      .conversationSend("postpaid plans")
      .then((response) => {
        console.log("response", response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePrepaidPlans = () => {
    persona
      .conversationSend("prepaid plans")
      .then((response) => {
        console.log("response", response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleTVInternet = () => {
    persona
      .conversationSend("TV and Internet")
      .then((response) => {
        console.log("response", response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleHomeWireless = () => {
    persona
      .conversationSend("Home wireless")
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

  return (
    <>
      {/* <Script src="https://res.cloudinary.com/di2eukaqk/raw/upload/v1714761656/smwebsdk_wzzdcv.js" /> */}
      <Header />
      <Stepper
        setStep={setStep}
        step={step}
        loading={loading}
        onSelectLanguage={onSelectLanguage}
        onSelectType={onSelectType}
        onSelectPostpaidPlans={handlePostpaidPlans}
        handlePrepaidPlans={handlePrepaidPlans}
        handleTVInternet={handleTVInternet}
        handleHomeWireless={handleHomeWireless}
        handleAddToBill={handleAddToBill}
        handleQuickPayRecharge={handleQuickPayRecharge}
      />
    </>
  );
}
