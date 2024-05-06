import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center lg:items-start px-3 lg:px-10 pt-5  sm:pb-3">
      {/* logo div */}
      <div>
        <img
          className="lg:w-20 lg:h-20 h-14 w-14"
          src="/images/logo.svg"
          alt=""
        />
      </div>
      {/* logo div end */}

      {/* contact main div */}
      <div className="flex  sm:flex-row lg:gap-12 items-center sm:items-start gap-2">
        <div className="flex flex-col sm:flex-row sm:gap-14 order-2 sm:order-1">
          <div className="flex gap-2 lg:gap-4 items-center sm:items-stretch">
            <img
              className="sm:w-6 sm:h-6 w-4 h-4"
              src="/images/phone.svg"
              alt=""
            />
            <a href="tel:8005800">8005800</a>
          </div>

          <div className="flex sm:items-stretch gap-2 lg:gap-4 items-center">
            <img
              className="sm:w-6 sm:h-6 w-4 h-4"
              src="/images/mail.svg"
              alt=""
            />
            <a href="mailto:info@etisalat.ae">info@etisalat.ae</a>
          </div>
        </div>
        <div className="order-1 sm:order-2 shadow-lg rounded-md">
          <img className="w-20 h-20" src="/images/file.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
