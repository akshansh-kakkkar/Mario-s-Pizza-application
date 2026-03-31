import React from "react";
import "../index.css";
const RegistrationForm = () => {
  return (
    <>
      <div className="text-[#154212] font-bold tracking-widest flex noto2-serif justify-center items-center p-5 text-4xl bg-[#FFF8EF]  backdrop-blur-2xl drop-shadow-sm">
        Registration Form
      </div>
      <div className="grid grid-cols-2 gap-4 justify-center items-center mt-12 ml-12">
        <div className="col-span-1">
          <div className="text-[#154212] man-rope ml-2">
            L'ARTIGIANO PIZZA ATELIER
          </div>
          <div className="text-[#1E1B13] noto2-serif  tracking-widest text-7xl text-[#154212]">
            Unisiciti alla <span className="text-[#AD302F]">Famiglia</span>
          </div>
          <div className="man2-rope py-4 text-lg text-[#42493E] w-120">
            Become a part of our artisanal legacy. As a member of our inner
            circle, you receive exclusive access to our seasonal reserves,
            private tasting events, and priority table reservations.
          </div>
          <div className="flex items-center gap-2">
            <div className="w-15 h-[0.3px] bg-[#42493e]"></div>
            <div className="text-[#154212] text-md tracking-widest man3-rope capitalize">
              MEMEBERSHIP PRIVALAGES
            </div>
          </div>
          <div className="mt-8 gap-5 flex flex-col">
            <div className="flex gap-2 items-center ">
              <span>
                <img src="./fork-knife.png" width={20} alt="fork-knife" />
              </span>
              <span className="text-[#154212] text-sm tracking-widest man-rope capitalize">
                Early Seasonal Previews
              </span>
            </div>
            <div className="flex gap-2 items-center ">
              <span>
                <img src="./bar-glass.png" width={20} alt="fork-knife" />
              </span>
              <span className="text-[#154212] text-sm tracking-widest man-rope capitalize">
                Enotica Member Discounts
              </span>
            </div>
            <div className="flex gap-2 items-center ">
              <span>
                <img src="./calendar.png" width={20} alt="fork-knife" />
              </span>
              <span className="text-[#154212] text-sm tracking-widest man-rope capitalize">
               Invitations only Masterclass
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
