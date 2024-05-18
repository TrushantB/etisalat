import React, { useState } from 'react';

const NumberPopup = ({ setIsAskForNumber }) => {
  const [openTab, setOpenTab] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.trim() !== '') {
      setIsAskForNumber(false);
      sessionStorage.setItem("isAskForNumber", "true");
    } else {
      alert("Please enter a phone number.");
    }
  };

  return (
    <div className="bg-gradient-to-r mx-auto from-[rgba(10,10,10,0.5)] to-[rgba(224,8,0,0.5)] py-5 px-3 rounded-[24px] w-3/6">
      <div className="flex flex-col justify-center min-h-full px-4 pt-2 pb-4 bg-white rounded-md lg:px-4 number-popup">
        <h2 className="pb-2 text-xl font-bold text-secondary-in min-[1800px]:pb-6">Please enter your number</h2>
        <ul className="flex flex-row flex-wrap pt-3 pb-4 mb-0 list-none" role="tablist">
          <li className="flex-auto mr-2 -mb-px text-center last:mr-0">
            <a
              className={"text-base font-bold uppercase block leading-normal pb-2" +
                (openTab === 1
                  ? "border-b border-b-2 border-red-700 text-gray-600"
                  : "text-gray-600 bg-white")}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
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
              className={"text-base font-bold uppercase block leading-normal pb-2" +
                (openTab === 2
                  ? "border-b border-b-2 border-red-700 text-gray-600"
                  : "text-gray-600 bg-white")}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
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
                    <label htmlFor="mobile-number" className="block text-base font-medium leading-6 text-gray-900">
                      Mobile Number
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <input
                        type="tel" // Change type to 'tel' for mobile number
                        name="mobile-number"
                        id="mobile-number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm text-base sm:leading-6"
                        placeholder="+1 (555) 987-6543"
                        required={true}
                      />
                    </div>
                  </div>
                  <button
                    type='submit'
                    className="bg-gradient-to-r from-[rgba(10,10,10,0.5)] to-[rgba(224,8,0,0.5)] py-2 px-5 rounded-full mt-4 text-white">
                    Submit
                  </button>
                </form>
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="telephone-number" className="block text-base font-medium leading-6 text-gray-900">
                      Telephone Number
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <input
                        type="tel" // Change type to 'tel' for telephone number
                        name="telephone-number"
                        id="telephone-number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm text-base sm:leading-6"
                        placeholder="+1 (555) 987-6543"
                        required={true}
                      />
                    </div>
                  </div>
                  <button
                    type='submit'
                    className="bg-gradient-to-r from-[rgba(10,10,10,0.5)] to-[rgba(224,8,0,0.5)] py-2 px-5 rounded-full mt-4 text-white">
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
