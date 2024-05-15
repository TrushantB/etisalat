import React from "react";

const Header = () => {
  return (
    <div className="flex items-center w-full justify-between px-3 lg:items-start lg:px-0 sm:pb-3">
      {/* logo div */}
      <div>
        <img
          className="lg:w-20 lg:h-20 h-14 w-14 logo"
          src="/images/logo.svg"
          alt=""
        />
      </div>
      {/* logo div end */}

      {/* contact main div */}
      <div className="flex items-center gap-2 sm:flex-row lg:gap-12 sm:items-center">
        <div className="flex flex-col order-2 sm:flex-row sm:gap-14 sm:order-1">
          <div className="flex items-center gap-2 lg:gap-4">
            <img
              className="w-4 h-4 sm:w-6 sm:h-6 icon"
              src="/images/phone.svg"
              alt=""
            />
            <a href="tel:8005800" className="text-base">
              8005800
            </a>
          </div>

          <div className="flex items-center gap-2 lg:gap-4">
            <img
              className="w-4 h-4 sm:w-6 sm:h-6 icon"
              src="/images/mail.svg"
              alt=""
            />
            <a href="mailto:info@etisalat.ae" className="text-base">
              info@etisalat.ae
            </a>
          </div>
        </div>
        <div className="order-1 rounded-md shadow-lg sm:order-2">
          <img className="w-20 h-20 scan-code" src="/images/file.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
