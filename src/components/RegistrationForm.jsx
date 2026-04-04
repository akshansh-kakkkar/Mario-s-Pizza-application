import React, { useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
const RegistrationForm = () => {
  const Navigate = useNavigate();
  const [gender, setGender] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [handleview, setHandleview] = useState(false);
  const [aggrement, setAggrement] = useState(false);
  const [confirmPassword, setconfirmPassword] = useState("");
  const [Password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    password: false,
    confirmPassword: false,
  });
  const strongPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(Password);
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isFormValid =
    firstName.trim() &&
    lastName.trim() &&
    emailValid &&
    phone.trim() &&
    strongPassword &&
    Password === confirmPassword &&
    aggrement &&
    gender;
  const handleBlur = (field) => {
    setTouched((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  const handleSubmit = (e) => {
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      password: true,
      confirmPassword: true,
    });
    e.preventDefault();
    if (
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      emailValid &&
      phone.trim() !== "" &&
      strongPassword &&
      Password === confirmPassword &&
      aggrement === true &&
      gender !== ""
    ) {
      Navigate("/registered");
    } else {
      alert("Please fill all fields correctly");
    }
  };
  const errors = {
    firstName: firstName.trim() === "",
    lastName: lastName.trim() === "",
    email: !emailValid,
    password: !strongPassword,
    confirmPassword: Password !== confirmPassword,
  };
  return (
    <>
      <div className="text-[#154212] font-bold tracking-widest flex items-center justify-between p-5 text-4xl bg-[#FFF8EF]  backdrop-blur-2xl drop-shadow-sm">
        <div
          onClick={() => Navigate("/")}
          className="flex justify-start hover:scale-[112%] transition-all duration-300 "
        >
          <img
            className="backdrop-blur-2xl drop-shadow-sm"
            src="/back(1).png"
            alt="back"
            width={40}
          />
        </div>
        <div className=" gap-4 flex noto2-serif justify-center items-center">
          <span>
            <lord-icon
              src="https://cdn.lordicon.com/shcfcebj.json"
              trigger="loop"
              delay="300"
              colors="primary:#629110,secondary:#0a5c15"
              style={{ width: 50, height: 50 }}
            ></lord-icon>
          </span>
          <span className="sm:block hidden">Registration Form</span>
        </div>
      </div>
      <div className="relative ">
      <div className="xl:grid xl:grid-cols-2 mb-12 flex xl:items-start flex-col gap-4 justify-center items-center mt-12 xl:ml-12">
        <div className="xl:sticky block top-10 h-fit ">
          <div className="text-[#154212] xl:justify-start flex xl:text-start text-center items-center justify-center man-rope ml-2">
            L'ARTIGIANO PIZZA ATELIER
          </div>
          <div className="text-[#1E1B13] noto2-serif  tracking-widest text-5xl md:text-7xl text-[#154212] hidden xl:block">
            Unisciti alla <span className="text-[#AD302F]">Famiglia</span>
          </div>
          <div className="flex justify-center noto2-serif px-4 text-center tracking-widest text-5xl md:text-7xl text-[#154212] block xl:hidden">
            Unisciti alla Famiglia
          </div>
          <div className="man2-rope px-4 py-4 flex justify-center text-center xl:items-start items-center xl:justify-start xl:text-left text-lg text-[#42493E] xl:w-120 max-w-[95vw]">
            Become a part of our artisanal legacy. As a member of our inner
            circle, you receive exclusive access to our seasonal reserves,
            private tasting events, and priority table reservations.
          </div>
          <div className="flex justify-center  xl:justify-start items-center gap-2">
            <div className="xl:w-15 h-[0.3px] bg-[#42493e]"></div>
            <div className="text-[#154212] text-md tracking-widest man3-rope ">
              MEMBERSHIP PRIVILEGES
            </div>
          </div>
          <div className="mt-8 gap-5 xl:justify-start text-center xl:text-start items-center xl:items-start justify-center flex flex-col">
            <div className="flex gap-2 items-center ">
              <span>
                <img src="./fork-knife.png" width={20} alt="fork-knife" />
              </span>
              <span className="text-[#154212] text-sm tracking-widest man-rope">
                Early Seasonal Previews
              </span>
            </div>
            <div className="flex gap-2 items-center ">
              <span>
                <img src="./bar-glass.png" width={20} alt="fork-knife" />
              </span>
              <span className="text-[#154212] text-sm tracking-widest man-rope ">
                Enotica Member Discounts
              </span>
            </div>
            <div className="flex gap-2 items-center ">
              <span>
                <img src="./calendar.png" width={20} alt="fork-knife" />
              </span>
              <span className="text-[#154212] text-sm tracking-widest man-rope ">
                Invitations only Masterclass
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-[#FBF3E4] w-[90vw]  md:w-[600px] flex justify-center h-full relative backdrop-blur-2xl drop-shadow-sm">
          <div className=" absolute top-0 right-0 bg-[#154212] opacity-5 w-[100px] h-[100px]"></div>

          <form action="" onSubmit={handleSubmit}>
            <div className="md:grid md:grid-cols-2 mt-7">
              <div className="md:col-span-1 flex flex-col mx-6 md:mr-3 gap-4 ">
                <label htmlFor="" className="man3-rope text-[#42493E] text-md ">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="GIOVANNI"
                  value={firstName}
                  required
                  onBlur={() => handleBlur("firstName")}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="outline-none border-b border-[rgba(194,201,187,0.5)] text-[#1E1B13] placeholder:text-[rgba(194,201,187,0.3)] tracking-widest man-rope text-xl p-2 w-full"
                />
                {touched.firstName &&
                  firstName.trim() === "" &&
                  errors.firstName && (
                    <p className="text-red-500 text-sm">
                      *First name is required
                    </p>
                  )}
              </div>
              <div className="md:col-span-1 flex flex-col mx-6 md:ml-3 md:mt-0 mt-4 gap-4">
                <label htmlFor="" className="man3-rope text-[#42493E] text-md ">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="ROSSI"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  onBlur={() => handleBlur("lastName")}
                  className="outline-none border-b border-[rgba(194,201,187,0.5)] text-[#1E1B13] placeholder:text-[rgba(194,201,187,0.3)] tracking-widest man-rope text-xl p-2 w-full"
                />
                {touched.lastName &&
                  lastName.trim() === "" &&
                  errors.lastName && (
                    <p className="text-red-500 text-sm">
                      *Last name is required
                    </p>
                  )}
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
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                onBlur={() => handleBlur("email")}
                placeholder="GIOVANNIROSSI@GMAIL.COM"
                className="outline-none border-b border-[rgba(194,201,187,0.5)] text-[#1E1B13] placeholder:text-[rgba(194,201,187,0.3)] tracking-widest man-rope text-xl p-2 w-full"
              />
              {touched.email && (
                <>
                  {email.trim() === "" && (
                    <p className="text-red-500 text-sm">*Email is required</p>
                  )}
                  {email.trim() !== "" && errors.email && (
                    <p className="text-red-500 text-sm">*Invalid Email</p>
                  )}
                </>
              )}
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
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onBlur={() => handleBlur("phone")}
                className="outline-none border-b border-[rgba(194,201,187,0.5)] text-[#1E1B13] placeholder:text-[rgba(194,201,187,0.3)] tracking-widest man-rope text-xl p-2 w-full"
              />
            </div>
            {touched.phone && phone.trim() === "" && (
              <p className="text-red-500 text-sm">*Phone no. is required</p>
            )}

            <div className="md:grid md:grid-cols-2 mt-7 ">
              <div className="md:col-span-1 flex flex-col mx-6 md:mr-3 gap-4 ">
                <label htmlFor="" className="man3-rope text-[#42493E] text-md ">
                  Create Password
                </label>
                <div className="relative">
                  <input
                    type={handleview ? "text" : "password"}
                    placeholder="•••••••"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    value={Password}
                    onBlur={() => handleBlur("password")}
                    className="outline-none border-b border-[rgba(194,201,187,0.5)] text-[#1E1B13] placeholder:text-[rgba(194,201,187,0.3)] tracking-widest man-rope text-xl p-2 pr-10 w-full"
                  />
                  <div className="absolute top-full pt-1 left-0 w-full z-10">
                    {touched.password && Password.trim() === "" && (
                      <p className="text-red-500 text-sm">
                        *Password is required
                      </p>
                    )}
                    {touched.password && Password.trim() !== "" && errors.password && (
                      <p className="text-red-500 text-sm leading-tight">*Requires 8+ chars with uppercase, lowercase, number & symbol</p>
                    )}
                  </div>
                  {handleview ? (
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer">
                      <lord-icon
                        onClick={() => setHandleview(!handleview)}
                        src="https://cdn.lordicon.com/dicvhxpz.json"
                        trigger="loop"
                        delay="1000"
                        colors="primary:#0a5c15,secondary:#109121"
                        style={{ width: 25, height: 25 }}
                      ></lord-icon>
                    </div>
                  ) : (
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer">
                      <lord-icon
                        onClick={() => setHandleview(!handleview)}
                        src="https://cdn.lordicon.com/dicvhxpz.json"
                        trigger="loop"
                        delay="1000"
                        state="hover-cross"
                        colors="primary:#0a5c15,secondary:#109121"
                        style={{ width: 25, height: 25 }}
                      ></lord-icon>
                    </div>
                  )}
                </div>
              </div>

              <div className="md:col-span-1 flex flex-col mx-6 md:ml-3 mt-4 md:mt-0 gap-4">
                <label
                  htmlFor=""
                  className="man3-rope  text-[#42493E] text-md "
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={handleview ? "text" : "password"}
                    placeholder="•••••••"
                    onChange={(e) => setconfirmPassword(e.target.value)}
                    required
                    value={confirmPassword}
                    onBlur={() => handleBlur("confirmPassword")}
                    className="outline-none border-b border-[rgba(194,201,187,0.5)] text-[#1E1B13] placeholder:text-[rgba(194,201,187,0.3)] tracking-widest man-rope text-xl p-2 pr-10 w-full"
                  />
                  <div className="absolute top-full pt-1 left-0 w-full z-10">
                    {touched.confirmPassword && confirmPassword.trim() === "" && (
                      <p className="text-red-500 text-sm">
                        *Confirm password is required
                      </p>
                    )}
                    {touched.confirmPassword && confirmPassword.trim() !== "" && errors.confirmPassword && (
                      <p className="text-red-500 text-sm">
                        *Passwords do not match
                      </p>
                    )}
                  </div>
                  {handleview ? (
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer">
                      <lord-icon
                        src="https://cdn.lordicon.com/dicvhxpz.json"
                        trigger="loop"
                        delay="1000"
                        onClick={() => setHandleview(!handleview)}
                        colors="primary:#0a5c15,secondary:#109121"
                        style={{ width: 25, height: 25 }}
                      ></lord-icon>
                    </div>
                  ) : (
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer">
                      <lord-icon
                        src="https://cdn.lordicon.com/dicvhxpz.json"
                        trigger="loop"
                        onClick={() => setHandleview(!handleview)}
                        delay="1000"
                        colors="primary:#0a5c15,secondary:#109121"
                        style={{ width: 25, height: 25 }}
                        state="hover-cross"
                      ></lord-icon>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col mx-6 gap-4">
              <label
                htmlFor=""
                className="man3-rope text-[#42493E] mt-12 text-md"
              >
                Preferred Title
              </label>
              <div className="flex flex-wrap gap-4">
                {["Male", "Female", "Prefer not to say"].map((item) => (
                  <button
                    required
                    type="button"
                    key={item}
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    onClick={() => {
                      setGender(item);
                    }}
                    className={`px-6 py-2 hover:scale-[94%] rounded-xl border man-rope font-medium transition-all duration-200 ${gender === item
                      ? "bg-[#ede6d891] text-[#154212] border-[#154212]"
                      : "bg-[#EDE6D8] text-[#1E1B13] border-transparent"
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div className="flex gap-4 mt-3">
                <input
                  type="checkbox"
                  checked={aggrement}
                  onChange={(e) => setAggrement(e.target.checked)}
                />
                <p className="man-rope text-[#42493E] text-xs ">
                  I CONSENT TO THE PROCESSING OF MY PERSONAL DATA TO RECEIVE THE
                  L'ARTIGIANO JOURNAL AND SPECIAL INVITATIONS. I HAVE READ THE
                  PRIVACY POLICY.
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-4 mt-3 md:items-center mb-4 text-center">
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`man-rope py-3 px-6 hover:scale-[94%] duration-300 transition-all flex justify-center font-medium rounded-md text-[#FFF8EF] w-full md:w-auto ${isFormValid ? "bg-[#154212]" : "bg-[#15421254] cursor-not-allowed"}`}
                >
                  Complete My Invitation
                </button>
                <button
                  onClick={() => {
                    Navigate("/orderform");
                  }}
                  type="button"
                  className="man-rope hover:scale-[94%] duration-300 transition-all py-3 px-6 flex justify-center underline-offset-6 decoration-[0.1px] font-thin text-[#154212] underline w-full md:w-auto"
                >
                  Already a customer?
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  );
};

export default RegistrationForm;
