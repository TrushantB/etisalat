import { useEffect, useState } from "react";
import Header from "@/components/header/header";
import Stepper from "@/components/stepper/stepper";
import { Scene } from "@soulmachines/smwebsdk";
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
  "eyJzb3VsSWQiOiJkZG5hLWxwZmxleDk4MWQtLWV4cGxvcmVyIiwiYXV0aFNlcnZlciI6Imh0dHBzOi8vZGguc291bG1hY2hpbmVzLmNsb3VkL2FwaS9qd3QiLCJhdXRoVG9rZW4iOiJhcGlrZXlfdjFfNDE5ZTNjYjEtMDRmOS00ZGZmLWFkYjItM2FlY2VjZmY3ODMxIn0=";
let scene;

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
    scene.sendUserText("Hello");
  }
  return (
    <>
      {/* <Script src="https://res.cloudinary.com/di2eukaqk/raw/upload/v1714761656/smwebsdk_wzzdcv.js" /> */}
      <Header />
      <Stepper setStep={setStep} step={step} loading={loading} />
      {/* <button onClick={sendMessage}> Send message</button> */}
    </>
  );
}
