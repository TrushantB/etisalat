import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const InfoPopup = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [step, setStep] = React.useState(1);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  // const popup = setInterval(() => {
  //   setStep(step + 1);
  // }, 3000);

  // useEffect(() => {
  //   if (setStep == 3) {
  //     clearInterval(popup);
  //     showModal(false);
  //   }
  // }, [step]);

  // console.log(step);

  return (
    // <div>

    //   {" "}
    //   <div className="text-white opacity-100 justify-center mx-auto gap-3 p-5 py-3 ">
    //     <div className="">
    //       <img className="w-[500px] h-[300px]" src="/images/stepOne.gif" />
    //     </div>
    //   </div>
    // </div>
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-end -mt-10  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-5 max-w-3xl 2xl:max-w-[1400px]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div
                  onClick={() => setShowModal(false)}
                  className="absolute top-2 right-5 z-50 cursor-pointer text-xl "
                >
                  x
                </div>
                <div className="relative p-6 flex-auto">
                  <img
                    className=" lg:h-[250px] sm:w-[300px] sm:w-[150px] lg:w-[500px] 2xl:w-[1300px] 2xl:h-auto "
                    src="/images/stepOne.gif"
                  />
                </div>
                {/*footer*/}
                {/* <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default InfoPopup;
