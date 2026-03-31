import React, { useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
const RegistrationForm = () => {
  const Navigate = useNavigate();
  const [gender, setGender] = useState("");
  return (
    <>
      <div className="text-[#154212] font-bold tracking-widest flex items-center justify-between p-5 text-4xl bg-[#FFF8EF]  backdrop-blur-2xl drop-shadow-sm">
        <div onClick={()=>Navigate('/')} className="flex justify-start hover:scale-[112%] transition-all duration-300 ">
          <img className="backdrop-blur-2xl drop-shadow-sm" src="/back(1).png" alt="back" width={40} />
        </div>
        <div className=" gap-4 flex noto2-serif justify-center items-center"><span><lord-icon
            src="https://cdn.lordicon.com/shcfcebj.json"
            trigger="loop"
            delay="300"
            colors="primary:#629110,secondary:#0a5c15"
            style={{ width: 50, height:50}}
          ></lord-icon></span>Registration Form</div>
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
        <div className="col-span-1 bg-[#FBF3E4] overflow-y-scroll w-[600px] h-[600px] relative backdrop-blur-2xl drop-shadow-sm">
          <div className=" absolute top-0 right-0 bg-[#154212] opacity-5 w-[100px] h-[100px]"></div>

          <form action="">
            <div className="grid grid-cols-2 mt-7">
              <div className="col-span-1 flex flex-col mx-6 gap-4 ">
                <label htmlFor="" className="man3-rope text-[#42493E] text-md ">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="GIOVANNI"
                  className="outline-none capitalize border-b border-[rgba(194,201,187,0.5)] text-[#1E1B13] placeholder:text-[rgba(194,201,187,0.3)] tracking-widest man-rope text-xl p-2"
                />
              </div>
              <div className="col-span-1 flex flex-col mr-6 gap-4">
                <label htmlFor="" className="man3-rope text-[#42493E] text-md ">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="ROSSI"
                  className="outline-none capitalize border-b border-[rgba(194,201,187,0.5)] text-[#1E1B13] placeholder:text-[rgba(194,201,187,0.3)] tracking-widest man-rope text-xl p-2"
                />
              </div>
            </div>
            <div className="flex flex-col mx-6 gap-4">
              <label
                htmlFor=""
                className="man3-rope text-[#42493E] text-md mt-8 "
              >
                Email Address
              </label>
              <input
                type="email"
                placeholder="GIOVANNIROSSI@GMAIL.COM"
                className="outline-none  border-b border-[rgba(194,201,187,0.5)] text-[#1E1B13] placeholder:text-[rgba(194,201,187,0.3)] tracking-widest man-rope text-xl p-2"
              />
            </div>
            <div className="flex flex-col mx-6 gap-4">
              <label
                htmlFor=""
                className="man3-rope text-[#42493E] text-md mt-3 "
              >
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="1234567890"
                className="outline-none capitalize border-b border-[rgba(194,201,187,0.5)] text-[#1E1B13] placeholder:text-[rgba(194,201,187,0.3)] tracking-widest man-rope text-xl p-2"
              />
            </div>
            <div className="flex flex-col mx-6 gap-4">
              <label
                htmlFor=""
                className="man3-rope text-[#42493E] text-md mt-3"
              >
                Create Password
              </label>
              <input
                type="tel"
                placeholder="••••••••"
                className="outline-none capitalize border-b border-[rgba(194,201,187,0.5)] text-[#1E1B13] placeholder:text-[rgba(194,201,187,0.3)] tracking-widest man-rope text-xl p-2"
              />
            </div>
            <div className="flex flex-col mx-6 gap-4">
              <label
                htmlFor=""
                className="man3-rope text-[#42493E] text-md mt-3"
              >
                Preffered Title
              </label>
              <div className="flex gap-4">
                {["Signore", "Signora", "Neutro"].map((item) => (
                  <button
                    className={`px-6 py-2 rounded-xl border man-rope font-medium transition-all duration-200 ${
                      gender === item
                        ? "bg-[#154212] text-[#1E1B13] border-[#154212]"
                        : "bg-[#EDE6D8] text-[#1E1B13] border-transparent"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div className="flex gap-4 mt-3">
                <input type="checkbox" />
                <p className="man-rope text-[#42493E] text-xs ">
                  I CONSENT TO THE PROCESSING OF MY PERSONAL DATA TO RECEIVE THE
                  L'ARTIGIANO JOURNAL AND SPECIAL INVITATIONS. I HAVE READ THE
                  PRIVACY POLICY.
                </p>
              </div>
              <div className=" flex gap-4 mt-3 items-center mb-4 text-center">
                <button  onClick={()=>{Navigate('/registered')}} className="man-rope py-3 px-6 flex justify-center font-medium bg-[#154212] rounded-md text-[#FFF8EF]">
                  Complete My Invitation
                </button>
                <button onClick={()=>{Navigate('/orderform')}} className="man-rope py-3 px-6 flex justify-center underline-offset-6 decoration-[0.1px] font-thin text-[#154212] underline">
                 Already a customer?
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
