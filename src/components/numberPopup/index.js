import React, { useState } from "react";

const NumberPopup = ({ setIsAskForNumber, submitNumber }) => {
  const [openTab, setOpenTab] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.trim() !== "") {
      setIsAskForNumber(false);
      sessionStorage.setItem("isAskForNumber", "true");
      submitNumber();
    } else {
      alert("Please enter a phone number.");
    }
  };
  const handleNumberClick = (event) => {
    setPhoneNumber(phoneNumber + event.target.textContent);
  };
  const handleNumberDelete = (event) => {
    setPhoneNumber(phoneNumber.slice(0, -1));
  };
  return (
    <div className="bg-gradient-to-r mx-auto from-[rgba(10,10,10,0.5)] to-[rgba(224,8,0,0.5)] py-5 px-3 rounded-[24px] w-3/6 number-modal-wrapper">
      <div className="flex flex-col justify-center min-h-full px-4 pt-2 pb-4 bg-white rounded-md lg:px-4 number-popup">
        <h2 className="pb-2 text-xl font-bold text-secondary-in min-[1800px]:pb-6">
          Please enter your number
        </h2>
        <ul
          className="flex flex-row flex-wrap pt-3 pb-4 mb-0 list-none"
          role="tablist"
        >
          <li className="flex-auto mr-2 -mb-px text-center last:mr-0">
            <a
              className={
                "text-base font-bold  block leading-normal pb-2" +
                (openTab === 1
                  ? "border-b border-b-2 border-red-700 text-gray-600"
                  : "text-gray-600 bg-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
                setPhoneNumber("");
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              Mobile
            </a>
          </li>
          <li className="flex-auto mr-2 -mb-px text-center last:mr-0">
            <a
              className={
                "text-base font-bold  block leading-normal pb-2" +
                (openTab === 2
                  ? "border-b border-b-2 border-red-700 text-gray-600"
                  : "text-gray-600 bg-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
                setPhoneNumber("");
              }}
              data-toggle="tab"
              href="#link2"
              role="tablist"
            >
              Telephone
            </a>
          </li>
        </ul>
        <div className="relative flex flex-col w-full min-w-0 break-words">
          <div className="flex-auto">
            <div className="tab-content tab-space">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="mobile-number"
                      className="block text-base font-medium leading-6 text-gray-900"
                    >
                      Mobile Number
                    </label>
                    <div className="relative mt-2 mb-4 rounded-md shadow-sm">
                      <input
                        type="tel"
                        name="telephone-number"
                        id="telephone-number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="block w-full p-2 text-base text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="+1 (555) 987-6543"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        required={true}
                        disabled={true}
                      />
                    </div>
                  </div>
                  <div id="container-keybord">
                    <ul id="keyboard" className="grid grid-cols-3 grid-rows-4 gap-4">
                      <li onClick={handleNumberClick} class="letter">
                        1
                      </li>
                      <li onClick={handleNumberClick} class="letter">
                        2
                      </li>
                      <li onClick={handleNumberClick} class="letter">
                        3
                      </li>
                      <li onClick={handleNumberClick} class="letter clearl">
                        4
                      </li>
                      <li onClick={handleNumberClick} class="letter">
                        5
                      </li>
                      <li onClick={handleNumberClick} class="letter">
                        6
                      </li>

                      <li onClick={handleNumberClick} class="letter clearl">
                        7
                      </li>
                      <li onClick={handleNumberClick} class="letter ">
                        8
                      </li>
                      <li onClick={handleNumberClick} class="letter">
                        9
                      </li>
                      <li onClick={handleNumberClick} class="return clearl">
                        +
                      </li>
                      <li onClick={handleNumberClick} class="letter ">
                        0
                      </li>
                      <li
                        onClick={handleNumberDelete}
                        class="delete lastitem"
                      >
                        x
                      </li>
                    </ul>
                  </div>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[rgba(10,10,10,0.5)] to-[rgba(224,8,0,0.5)] py-2 px-5 rounded-full mt-4 text-white text-small"
                  >
                    Submit
                  </button>
                </form>
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="telephone-number"
                      className="block text-base font-medium leading-6 text-gray-900"
                    >
                      Telephone Number
                    </label>
                    <div className="relative mt-2 mb-4 rounded-md shadow-sm">
                      <input
                        type="tel"
                        name="telephone-number"
                        id="telephone-number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="block w-full p-2 text-base text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="+1 (555) 987-6543"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        required={true}
                        disabled={true}
                      />
                    </div>
                  </div>
                  <div id="container-keybord">
                    <ul id="keyboard"  className="grid grid-cols-3 grid-rows-4 gap-4">
                      <li onClick={handleNumberClick} class="letter">
                        1
                      </li>
                      <li onClick={handleNumberClick} class="letter">
                        2
                      </li>
                      <li onClick={handleNumberClick} class="letter">
                        3
                      </li>
                      <li onClick={handleNumberClick} class="letter clearl">
                        4
                      </li>
                      <li onClick={handleNumberClick} class="letter">
                        5
                      </li>
                      <li onClick={handleNumberClick} class="letter">
                        6
                      </li>

                      <li onClick={handleNumberClick} class="letter clearl">
                        7
                      </li>
                      <li onClick={handleNumberClick} class="letter ">
                        8
                      </li>
                      <li onClick={handleNumberClick} class="letter">
                        9
                      </li>
                      <li onClick={handleNumberClick} class="return clearl">
                        +
                      </li>
                      <li onClick={handleNumberClick} class="letter ">
                        0
                      </li>
                      <li
                        onClick={handleNumberDelete}
                        class="delete lastitem"
                      >
                        x
                      </li>
                    </ul>
                  </div>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[rgba(10,10,10,0.5)] to-[rgba(224,8,0,0.5)] py-2 px-5 rounded-full mt-4 text-white text-small"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberPopup;
