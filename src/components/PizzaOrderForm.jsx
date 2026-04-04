import { useNavigate } from "react-router-dom";
import "../index.css";
import { useState } from "react";
const PizzaOrderForm = () => {
  const Navigate = useNavigate();
  const [size, setSize] = useState(null);
  const [crust, setCrust] = useState(null);
  const [toppings, setToppings] = useState([]);
  const [Extras, setExtras] = useState({});
  const [quantity, setQuantity] = useState(1);
  const isFormValid = size && crust;
  const handleChange = (e) => {
    e.preventDefault();
  };
  const toggleTopping = (item) => {
    setToppings((prev) =>
      prev.includes(item) ? prev.filter((t) => t !== item) : [...prev, item],
    );
  };
  const toggleExtra = (item) => {
    setExtras((prev) => {
      if (prev[item]) {
        const updated = { ...prev };
        delete updated[item];
        return updated;
      } else {
        return { ...prev, [item]: 1 };
      }
    });
  };
  const increaseExtraQuantity = (item) => {
    setExtras((prev) => ({
      ...prev,
      [item]: prev[item] + 1,
    }));
  };
  const decreaseExtraQuantity = (item) => {
    setExtras((prev) => {
      if (prev[item] <= 1) return prev;
      return {
        ...prev,
        [item]: prev[item] - 1,
      };
    });
  };
  const decreaseQuanitity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const toppingPrice = toppings.length * 1.5;
  const extrasPrice = Object.values(Extras).reduce(
    (total, qty) => total + qty * 5,
    0,
  );
  const cartTopping = toppings.map((topping) => (
    <div key={topping}>{topping}</div>
  ));
  const total =
    (size?.price || 0) +
    (crust?.price || 0) +
    toppingPrice * quantity +
    extrasPrice;
  return (
    <>
      <div className="text-[#154212]  sticky z-50 top-0 font-bold tracking-widest flex items-center justify-between p-5 text-4xl bg-[#FFF8EF]  backdrop-blur-2xl drop-shadow-sm">
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
              src="https://cdn.lordicon.com/urdbeoyx.json"
              trigger="loop"
              delay="300"
              colors="primary:#629110,secondary:#c71f16"
              style={{ width: 50, height: 50 }}
            ></lord-icon>
          </span>
          <span className="sm:block hidden">MARIO'S PIZZA</span>
        </div>
      </div>
      <form >
        <div className=" relative">
          <div className="mx-12 mt-6 mb-6 noto2-serif text-2xl font-semibold text-[#1E1B13]">
            Choose Size
          </div>
          <div className=" flex flex-col xl:flex-row gap-8 items-center xl:items-start w-full ">
            <div className="flex-col flex mx-4 md:mx-12 items-center md:items-start w-full xl:w-2/3">
              <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-12">
                <div
                  onClick={() => setSize({ name: "Small Pizza", price: 10 })}
                  className={`bg-[#FBF3E4] hover:scale-[108%] grid grid-cols-2 overflow-x-hidden rounded-md px-4 md:px-8 w-[90vw] md:w-70 h-35 p-2 transition-all duration-300 ${size?.name === "Small Pizza" ? "border-2 border-[#AD302F] scale-[105%]" : "drop-shadow-sm"} `}
                >
                  <div className="flex col-span-1 flex-col justify-center text-xl items-center noto2-serif">
                    <img src="/small-pizza.png" width={75} alt="small-pizza" />{" "}
                    <div className="text-[#154212]">small</div>
                  </div>
                  <div className="col-span-1 man-rope text-xl flex justify-center items-center flex-col">
                    <div>6" - 4 slices</div>
                    <div className=" noto-serif text-[#AD302F] font-bold ">
                      $10
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => setSize({ name: "Medium Pizza", price: 20 })}
                  className={`bg-[#FBF3E4] hover:scale-[108%] grid grid-cols-2 rounded-md px-4 md:px-8 w-[90vw] md:w-70 h-35 p-2 transition-all duration-300 ${size?.name === "Medium Pizza" ? "border-2 border-[#AD302F] scale-[105%]" : "drop-shadow-sm"} `}
                >
                  <div className="flex col-span-1 flex-col justify-center text-xl items-center noto2-serif">
                    <img src="/small-pizza.png" width={75} alt="small-pizza" />{" "}
                    <div className="text-[#154212]">medium</div>
                  </div>
                  <div className="col-span-1 man-rope text-xl flex justify-center items-center flex-col">
                    <div>8" - 6 slices</div>
                    <div className=" noto-serif text-[#AD302F] font-bold ">
                      $20
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => setSize({ name: "Large Pizza", price: 30 })}
                  className={`bg-[#FBF3E4] hover:scale-[108%] grid grid-cols-2 rounded-md px-4 md:px-8 w-[90vw] md:w-70 h-35 p-2 transition-all duration-300 ${size?.name === "Large Pizza" ? "border-2 border-[#AD302F] scale-[105%]" : "drop-shadow-sm"} `}
                >
                  <div className="flex col-span-1 flex-col justify-center text-xl items-center noto2-serif">
                    <img src="/small-pizza.png" width={75} alt="small-pizza" />{" "}
                    <div className="text-[#154212]">large</div>
                  </div>
                  <div className="col-span-1 man-rope text-xl flex justify-center items-center flex-col">
                    <div>9" - 8 slices</div>
                    <div className=" noto-serif text-[#AD302F] font-bold ">
                      $30
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="mt-6 mb-6 noto2-serif text-2xl font-semibold text-[#1E1B13]">
                  Select Crust
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-12">
                  <div
                    onClick={() => setCrust({ name: "Thin Crust", price: 2 })}
                    className={`bg-[#FBF3E4] hover:scale-[108%] grid grid-cols-2 rounded-md px-4 md:px-8 w-[90vw] md:w-70 h-35 p-2 transition-all duration-300 ${crust?.name === "Thin Crust" ? "border-2 border-[#AD302F] scale-[105%]" : "drop-shadow-sm"} `}
                  >
                    <div className="flex col-span-1 flex-col justify-center text-xl items-center noto2-serif">
                      <img
                        src="/small-pizza.png"
                        width={75}
                        alt="small-pizza"
                      />{" "}
                      <div className="text-[#154212]">Thin</div>
                    </div>
                    <div className="col-span-1 man-rope text-sm flex justify-center items-center flex-col">
                      <div>crispy and light</div>
                      <div className=" noto-serif text-[#AD302F] text-xl font-bold ">
                        +$2
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() =>
                      setCrust({ name: "Regular Crust", price: 3 })
                    }
                    className={`bg-[#FBF3E4] hover:scale-[108%] grid grid-cols-2 rounded-md px-4 md:px-8 w-[90vw] md:w-70 h-35 p-2 transition-all duration-300 ${crust?.name === "Regular Crust" ? "border-2 border-[#AD302F] scale-[105%]" : "drop-shadow-sm"} `}
                  >
                    <div className="flex col-span-1 flex-col justify-center text-xl items-center noto2-serif">
                      <img
                        src="/small-pizza.png"
                        width={75}
                        alt="small-pizza"
                      />{" "}
                      <div className="text-[#154212]">Regular</div>
                    </div>
                    <div className="col-span-1 man-rope  whitespace-nowrap text-sm flex justify-center items-center flex-col">
                      <div>classic hand-tossed</div>
                      <div className=" noto-serif text-[#AD302F] font-bold text-xl">
                        +$3
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() =>
                      setCrust({ name: "Stuffed Crust", price: 5 })
                    }
                    className={`bg-[#FBF3E4] hover:scale-[108%] grid grid-cols-2 rounded-md px-4 md:px-8 w-[90vw] md:w-70 h-35 p-2 transition-all duration-300 ${crust?.name === "Stuffed Crust" ? "border-2 border-[#AD302F] scale-[105%]" : "drop-shadow-sm"} `}
                  >
                    <div className="flex col-span-1 flex-col justify-center text-xl items-center noto2-serif">
                      <img
                        src="/small-pizza.png"
                        width={75}
                        alt="small-pizza"
                      />{" "}
                      <div className="text-[#154212]">Stuffed</div>
                    </div>
                    <div className="col-span-1 man-rope  text-sm whitespace-nowrap flex justify-center items-center flex-col">
                      <div>chesse-filled crust</div>
                      <div className=" noto-serif text-[#AD302F] text-xl font-bold ">
                        +$5
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-6 mb-6 noto2-serif text-2xl font-semibold text-[#1E1B13]">
                  Add topping ($1.50 each)
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-5">
                  <div
                    onClick={() => toggleTopping("mushroom")}
                    className={`flex flex-wrap hover:scale-[108%] w-fit py-2 px-4  backdrop-blur-2xl drop-shadow-sm  rounded-2xl font-bold text-md whitespace-nowrap text-[#1E1B13]  noto2-serif items-center cursor-pointer duration-300 transition-all scale-[105%] gap-4 bg-[#FBF3E4] ${toppings.includes("mushroom") ? "border-2 border-[#AD302F]" : ""}`}
                  >
                    <img src="/mushroom.png" alt="mushroom" width={20} />
                    <span>Mushroom</span>
                  </div>
                  <div
                    onClick={() => toggleTopping("onion")}
                    className={`flex flex-wrap w-fit py-2 px-4  backdrop-blur-2xl drop-shadow-sm  rounded-2xl font-bold text-md whitespace-nowrap text-[#1E1B13]  noto2-serif items-center cursor-pointer duration-300 transition-all scale-[105%] gap-4 bg-[#FBF3E4] ${toppings.includes("onion") ? "border-2 border-[#AD302F]" : ""}`}
                  >
                    <img src="/onion.png" alt="onion" width={20} />
                    <span>Onion</span>
                  </div>
                  <div
                    onClick={() => toggleTopping("sausage")}
                    className={`flex flex-wrap w-fit py-2 px-4  backdrop-blur-2xl drop-shadow-sm  rounded-2xl font-bold text-md whitespace-nowrap text-[#1E1B13]  noto2-serif items-center cursor-pointer duration-300 transition-all scale-[105%] gap-4 bg-[#FBF3E4] ${toppings.includes("sausage") ? "border-2 border-[#AD302F]" : ""}`}
                  >
                    <img src="/sausage.png" alt="mushroom" width={20} />
                    <span>Sausage</span>
                  </div>
                  <div
                    onClick={() => toggleTopping("pepperoni")}
                    className={`flex flex-wrap hover:scale-[108%] w-fit py-2 px-4  backdrop-blur-2xl drop-shadow-sm  rounded-2xl font-bold text-md whitespace-nowrap text-[#1E1B13]  noto2-serif items-center cursor-pointer duration-300 transition-all scale-[105%] gap-4 bg-[#FBF3E4] ${toppings.includes("pepperoni") ? "border-2 border-[#AD302F]" : ""}`}
                  >
                    <img src="/pepporoni.png" alt="mushroom" width={20} />
                    <span>Pepperoni</span>
                  </div>
                  <div
                    onClick={() => toggleTopping("bacon")}
                    className={`flex flex-wrap hover:scale-[108%] w-fit py-2 px-4  backdrop-blur-2xl drop-shadow-sm  rounded-2xl font-bold text-md whitespace-nowrap text-[#1E1B13]  noto2-serif items-center cursor-pointer duration-300 transition-all scale-[105%] gap-4 bg-[#FBF3E4] ${toppings.includes("bacon") ? "border-2 border-[#AD302F]" : ""}`}
                  >
                    <img src="/bacon.png" alt="mushroom" width={20} />
                    <span>Bacon</span>
                  </div>
                  <div
                    onClick={() => toggleTopping("cheese")}
                    className={`flex flex-wrap hover:scale-[108%] w-fit py-2 px-4  backdrop-blur-2xl drop-shadow-sm  rounded-2xl font-bold text-md whitespace-nowrap text-[#1E1B13]  noto2-serif items-center cursor-pointer duration-300 transition-all scale-[105%] gap-4 bg-[#FBF3E4] ${toppings.includes("cheese") ? "border-2 border-[#AD302F]" : ""}`}
                  >
                    <img src="/cheese.png" alt="mushroom" width={20} />
                    <span>Extra Cheese</span>
                  </div>
                </div>
              </div>
              <div>
                <div className=" mt-6 mb-6 noto2-serif text-2xl font-semibold text-[#1E1B13]">
                  Extras & Sides ($5 each)
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-5 mb-12">
                  <div
                    onClick={() => toggleExtra("garlic-bread")}
                    className={`flex flex-wrap w-60 hover:scale-[108%] py-5 px-8 rounded-2xl transition-all duration-300 cursor-pointer  backdrop-blur-2xl drop-shadow-sm  font-bold text-md whitespace-nowrap text-[#1E1B13]  noto2-serif items-center gap-4 bg-[#FBF3E4] ${Extras["garlic-bread"] ? "border-2 border-[#AD302F]" : ""}`}
                  >
                    <img src="/garlic-bread.png" alt="mushroom" width={40} />
                    <span>Garlic Bread</span>
                  </div>
                  <div
                    onClick={() => toggleExtra("soda")}
                    className={`flex flex-wrap w-60 hover:scale-[108%] py-5 px-8 rounded-2xl transition-all duration-300 cursor-pointer  backdrop-blur-2xl drop-shadow-sm  font-bold text-md whitespace-nowrap text-[#1E1B13]  noto2-serif items-center gap-4 bg-[#FBF3E4] ${Extras["soda"] ? "border-2 border-[#AD302F]" : ""}`}
                  >
                    <img src="/soda.png" alt="onion" width={40} />
                    <span>Soda</span>
                  </div>
                  <div
                    onClick={() => toggleExtra("dip")}
                    className={`flex flex-wrap hover:scale-[108%] w-60 py-5 px-8 rounded-2xl transition-all duration-300 cursor-pointer  backdrop-blur-2xl drop-shadow-sm  font-bold text-md whitespace-nowrap text-[#1E1B13]  noto2-serif items-center gap-4 bg-[#FBF3E4] ${Extras["dip"] ? " border-2 border-[#AD302F]" : ""}`}
                  >
                    <img src="/dip.png" alt="mushroom" width={40} />
                    <span>Cheesy dip</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="sticky  top-36 bg-[#FBF3E4] md:mx-2 drop-shadow-sm w-[95%] md:w-full max-w-[450px] mx-auto mb-10 xl:mb-0 h-[560px] border-2 border-[rgba(194,201,187,0.5)] rounded-xl">
              <div className="noto2-serif mt-4 font-bold  text-xl flex justify-center text-[#1E1B13]">
                ORDER SUMMARY
              </div>
              <div className="w-[90%] items-center my-2 flex justify-center mx-auto h-[0.1px] bg-[#1e1b1362]"></div>
              <div className="h-[290px]">
                {!size && !crust && toppings.length === 0 && Object.keys(Extras).length === 0 ? (
                  <div className="flex flex-col text-center items-center justify-center">
                    <lord-icon
                      src="https://cdn.lordicon.com/qfijwmqj.json"
                      trigger="loop"
                      state="loop-cycle"
                      colors="primary:#AD302F,secondary:#0a5c15"
                      style={{ width: 250, height: 250 }}
                    ></lord-icon>
                    <p className="noto2-serif mt-4 font-bold  text-sm flex justify-center text-[#AD302F]">
                      Add Items in the cart to view them
                    </p>
                  </div>
                ) : (
                  <>
                    {size && (
                      <div className="flex justify-between mx-2">
                        <div className="mx-4 noto2-serif text-xl text-[#1E1B13]">
                          {size.name}
                        </div>
                        <div className="mx-4 noto2-serif font-bold text-xl text-[#AD302F]">
                          ${size.price}
                        </div>
                      </div>
                    )}
                    {crust && (
                      <div className="flex justify-between mx-2">
                        <div className=" mx-4 noto2-serif  text-md text-[#1E1B13]">
                          {crust.name}
                        </div>
                        <div className=" mx-4 noto-serif font-bold text-xl text-[#AD302F]">
                          ${crust.price}
                        </div>
                      </div>
                    )}
                    {cartTopping.length > 0 && (
                      <>
                                          <div className="w-[80%] items-center my-2 flex justify-center mx-auto h-[0.1px] bg-[#1e1b1362]"></div>

                      <div className="noto2-serif mx-2 text-sm text-[#1E1B13]">
                        {toppings.length > 0 && (
                          <div className="mx-4">
                            {toppings.map((item) => (
                              <div
                                key={item}
                                className="flex justify-between text-md "
                              >
                                <div className="text-[#1E1B13] capitalize">
                                  {item}
                                </div>
                                <div className="text-[#AD302F] font-bold">
                                  $1.5
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      </>
                    )}

                    {Object.keys(Extras).length > 0 && (
                      <>
                        <div className="w-[80%] items-center my-2 flex justify-center mx-auto h-[0.1px] bg-[#1e1b1362]"></div>

                        <div className=" noto2-serif mx-2 text-xl text-[#1E1B13]">
                          {Object.keys(Extras).length > 0 && (
                            <div className="mx-4">
                              {Object.keys(Extras).map((item) => (
                                <div
                                  key={item}
                                  className="flex justify-between text-xl gap-8 my-1"
                                >
                                  <div className="text-[#1E1B13] flex gap-2  sm:gap-5 justify-start items-center capitalize">
                                    <div className="w-32 text-left">
                                      {item.replace("-", " ")}
                                    </div>
                                    <div className="text-base bg-[#FBF3E4] drop-shadow-sm backdrop-blur-2xl p-1 px-3 rounded-xl flex gap-4 items-center select-none">
                                      <span
                                        className="cursor-pointer hover:scale-110 transition-transform font-medium px-1"
                                        onClick={() =>
                                          decreaseExtraQuantity(item)
                                        }
                                      >
                                        -
                                      </span>
                                      <span className="font-medium text-sm">
                                        {Extras[item]}
                                      </span>
                                      <span
                                        className="cursor-pointer hover:scale-110 transition-transform font-medium px-1"
                                        onClick={() =>
                                          increaseExtraQuantity(item)
                                        }
                                      >
                                        +
                                      </span>
                                    </div>
                                  </div>

                                  <div className="text-[#AD302F] font-bold flex items-center">
                                    $5
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>
              <div className="flex justify-between items-center  mt-4 mx-4 ">
                <div className="noto2-serif font-bold text-lg text-[#1E1B13]">
                  Quantity
                </div>
                <div className={`bg-[#FBF3E4] backdrop-blur-2xl drop-shadow-sm flex gap-5 items-center justify-center rounded-xl py-2 px-3 text-[#1e1b13] ${!isFormValid ? "opacity-50 cursor-not-allowed" : ""}`}>
                  <span
                    className={`text-2xl man3-rope ${isFormValid ? "cursor-pointer" : "cursor-not-allowed"}`}
                    onClick={() => isFormValid && decreaseQuanitity()}
                  >
                    -
                  </span>
                  <span className="text-xl man3-rope ">{quantity}</span>
                  <span
                    className={`text-2xl man3-rope ${isFormValid ? "cursor-pointer" : "cursor-not-allowed"}`}
                    onClick={() => isFormValid && increaseQuantity()}
                  >
                    +
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center mt-4 mx-8">
                <div className="noto2-serif font-bold text-lg text-[#AD302F]">
                  TOTAL
                </div>
                <div className="noto2-serif font-bold text-lg text-[#AD302F]">
                  ${total}
                </div>
              </div>
              <div
                className={`flex justify-center items-center cursor-pointer hover:scale-[94%] duration-300 transition-all bg-[#AD302F] p-2 rounded-2xl mt-4 mx-4 ${!isFormValid ? "bg-[#ad2f2f65]" : ""}`}
              >
                <button
                  type="submit"
                  onClick={(e) => {
                    if (!size || !crust) {
                      e.preventDefault();
                      alert(
                        "Please select pizza size and crust before checkout!",
                      );
                      return;
                    }
                    Navigate("/orderconfirm");
                  }}
                  disabled={!isFormValid}
                  className={`noto2-serif font-bold text-lg px-4 text-center w-full text-[#FBF3E4] ${!isFormValid ? "cursor-not-allowed" : ""}`}
                >
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default PizzaOrderForm;
