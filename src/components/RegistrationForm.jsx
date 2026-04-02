import React, { useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
const RegistrationForm = () => {
  const Navigate = useNavigate();
  const [gender, setGender] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
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
  const handleBlur = (field) => {
    setTouched((prev) => ({
      ...prev,
      [field]: true,
    }));
  };
  const [handleview, setHandleview] = useState(false);
  const [aggrement, setAggrement] = useState(false);
  const [confirmPassword, setconfirmPassword] = useState("");
  const strongPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(Password);
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
      email.includes("@") &&
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
    email: !email.includes("@"),
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
          Registration Form
        </div>
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

          <form action="" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 mt-7">
              <div className="col-span-1 flex flex-col mx-6 gap-4 ">
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
                  className="outline-none capitalize border-b border-[rgba(194,201,187,0.5)] text-[#1E1B13] placeholder:text-[rgba(194,201,187,0.3)] tracking-widest man-rope text-xl p-2"
                />
                {touched.firstName &&
                  firstName.trim() === "" &&
                  errors.firstName && (
                    <p className="text-red-500 text-sm">
                      *First name is required
                    </p>
                  )}
              </div>
              <div className="col-span-1 flex flex-col mr-6 gap-4">
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
                  className="outline-none capitalize border-b border-[rgba(194,201,187,0.5)] text-[#1E1B13] placeholder:text-[rgba(194,201,187,0.3)] tracking-widest man-rope text-xl p-2"
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
                className="outline-none  border-b border-[rgba(194,201,187,0.5)] text-[#1E1B13] placeholder:text-[rgba(194,201,187,0.3)] tracking-widest man-rope text-xl p-2"
              />
              {touched.email && email.trim() === "" ? (
                <p className="text-red-500 text-sm">*Email is required</p>
              ) : (
                touched.email &&
                errors.email && (
                  <p className="text-red-500 text-sm">*Invalid Email</p>
                )
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
                className="outline-none capitalize border-b border-[rgba(194,201,187,0.5)] text-[#1E1B13] placeholder:text-[rgba(194,201,187,0.3)] tracking-widest man-rope text-xl p-2"
              />
            </div>
            {touched.phone && phone.trim() === "" && (
              <p className="text-red-500 text-sm">*Phone no. is required</p>
            )}

            <div className="grid grid-cols-2 mt-7 ">
              <div className="col-span-1 flex flex-col mx-6 gap-4 ">
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
                    className="outline-none capitalize border-b border-[rgba(194,201,187,0.5)] text-[#1E1B13] placeholder:text-[rgba(194,201,187,0.3)] tracking-widest man-rope text-xl p-2"
                  />
                  {touched.password && Password.trim() === "" && (
                    <p className="text-red-500 text-sm">
                      *Password is required
                    </p>
                  )}
                  {errors.password && touched.password && (
                    <p className="text-red-500 text-sm">*Password is wrong</p>
                  )}
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

              <div className="col-span-1 flex flex-col mr-6 gap-4">
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
                    className="outline-none capitalize border-b border-[rgba(194,201,187,0.5)] text-[#1E1B13] placeholder:text-[rgba(194,201,187,0.3)] tracking-widest man-rope text-xl p-2"
                  />
                  {touched.confirmPassword && confirmPassword.trim() === "" && (
                    <p className="text-red-500 text-sm">
                      *Password is required
                    </p>
                  )}
                  {errors.confirmPassword && touched.confirmPassword && (
                    <p className="text-red-500 text-sm">
                      *Passwords does not match
                    </p>
                  )}
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
                className="man3-rope text-[#42493E] text-md mt-3"
              >
                Preffered Title
              </label>
              <div className="flex gap-4">
                {["Signore", "Signora", "Neutro"].map((item) => (
                  <button
                    required
                    type="button"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    onClick={() => {
                      setGender(item);
                    }}
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
              <div className=" flex gap-4 mt-3 items-center mb-4 text-center">
                <button
                  type="submit"
                  className="man-rope py-3 px-6 flex justify-center font-medium bg-[#154212] rounded-md text-[#FFF8EF]"
                >
                  Complete My Invitation
                </button>
                <button
                  onClick={() => {
                    Navigate("/orderform");
                  }}
                  type="button"
                  className="man-rope py-3 px-6 flex justify-center underline-offset-6 decoration-[0.1px] font-thin text-[#154212] underline"
                >
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
