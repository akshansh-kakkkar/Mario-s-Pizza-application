import { useNavigate } from "react-router-dom";
import "../index.css";
import { useState } from "react";
const PizzaOrderForm = () => {
  const Navigate = useNavigate();
  const [size, setSize] = useState(null);
  const [crust, setCrust] = useState(null);
  const [toppings, setToppings] = useState([]);
  const [Extras, setExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const toggleTopping = (item) => {
    setToppings((prev) =>
      prev.includes(item) ? prev.filter((t) => t !== item) : [...prev, item],
    );
  };
  const toggleExtra = (item) => {
    setExtras((prev) =>
      prev.includes(item) ? prev.filter((e) => e !== item) : [...prev, item],
    );
  };
  const decreaseQuanitity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const toppingPrice = toppings.length * 1.5;
  const extrasPrice = Extras.length * 5;
  const cartTopping = toppings.map((topping) => (
    <div key={topping}>{topping}</div>
  ));
  const total =
    ((size?.price || 0) + (crust?.price || 0) + toppingPrice + extrasPrice) *
    quantity;
  const cartExtras = Extras.map((extra) => <div key={extra}>{extra}</div>);
  return (
    <>
      <div className="text-[#154212] sticky z-50 top-0 font-bold tracking-widest flex items-center justify-between p-5 text-4xl bg-[#FFF8EF]  backdrop-blur-2xl drop-shadow-sm">
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
          MARIO'S PIZZA
        </div>
      </div>
      <div>
        <div className="mx-12 mt-6 mb-6 noto2-serif text-2xl font-semibold text-[#1E1B13]">
          Choose Size
        </div>
        <div className="grid  grid-cols-4 ">
          <div className="col-span-3 flex-col flex  mx-12">
            <div className="flex gap-12">
              <div
                onClick={() => setSize({ name: "Small Pizza", price: 10 })}
                className="bg-[#FBF3E4] grid grid-cols-2 backdrop-blur-2xl drop-shadow-sm rounded-md px-8 w-70 h-35 p-2  "
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
                className="bg-[#FBF3E4] grid grid-cols-2 backdrop-blur-2xl drop-shadow-sm rounded-md px-8 w-70 h-35 p-2  "
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
                className="bg-[#FBF3E4] grid grid-cols-2 backdrop-blur-2xl drop-shadow-sm rounded-md px-8 w-70 h-35 p-2  "
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
            <div className="flex  flex-col">
              <div className=" mt-6 mb-6 noto2-serif text-2xl font-semibold text-[#1E1B13]">
                Select Crust
              </div>
              <div className="flex gap-12 ">
                <div
                  onClick={() => setCrust({ name: "Thin Crust", price: 2 })}
                  className="bg-[#FBF3E4]  grid grid-cols-2 backdrop-blur-2xl drop-shadow-sm rounded-md px-8 w-70 h-35 p-2  "
                >
                  <div className="flex col-span-1 flex-col justify-center text-xl items-center noto2-serif">
                    <img src="/small-pizza.png" width={75} alt="small-pizza" />{" "}
                    <div className="text-[#154212]">Thin Crust</div>
                  </div>
                  <div className="col-span-1 man-rope text-sm flex justify-center items-center flex-col">
                    <div>crispy and light</div>
                    <div className=" noto-serif text-[#AD302F] text-xl font-bold ">
                      +2
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => setCrust({ name: "Regular", price: 3 })}
                  className="bg-[#FBF3E4] grid grid-cols-2 backdrop-blur-2xl drop-shadow-sm rounded-md px-8 w-70 h-35 p-2  "
                >
                  <div className="flex col-span-1 flex-col justify-center text-xl items-center noto2-serif">
                    <img src="/small-pizza.png" width={75} alt="small-pizza" />{" "}
                    <div className="text-[#154212]">Regular</div>
                  </div>
                  <div className="col-span-1 man-rope  whitespace-nowrap text-sm flex justify-center items-center flex-col">
                    <div>classic hand-tossed</div>
                    <div className=" noto-serif text-[#AD302F] font-bold text-xl">
                      +3
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => setCrust({ name: "Stuffed", price: 5 })}
                  className="bg-[#FBF3E4] grid grid-cols-2 backdrop-blur-2xl drop-shadow-sm rounded-md px-8 w-70 h-35 p-2  "
                >
                  <div className="flex col-span-1 flex-col justify-center text-xl items-center noto2-serif">
                    <img src="/small-pizza.png" width={75} alt="small-pizza" />{" "}
                    <div className="text-[#154212]">Stuffed</div>
                  </div>
                  <div className="col-span-1 man-rope text-sm whitespace-nowrap flex justify-center items-center flex-col">
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
              <div className="  flex flex-wrap gap-5">
                <div
                  onClick={() => toggleTopping("mushroom")}
                  className="flex flex-wrap w-fit py-2 px-4  backdrop-blur-2xl drop-shadow-sm  rounded-2xl font-bold text-md whitespace-nowrap text-[#1E1B13]  noto2-serif items-center gap-4 bg-[#FBF3E4] "
                >
                  <img src="/mushroom.png" alt="mushroom" width={20} />
                  <span>Mushroom</span>
                </div>
                <div
                  onClick={() => toggleTopping("onion")}
                  className="flex flex-wrap w-fit py-2 px-4 rounded-2xl  backdrop-blur-2xl drop-shadow-sm  font-bold text-md whitespace-nowrap text-[#1E1B13]  noto2-serif items-center gap-4 bg-[#FBF3E4] "
                >
                  <img src="/onion.png" alt="onion" width={20} />
                  <span>Onion</span>
                </div>
                <div
                  onClick={() => toggleTopping("sausage")}
                  className="flex flex-wrap w-fit py-2 px-4 rounded-2xl  backdrop-blur-2xl drop-shadow-sm  font-bold text-md whitespace-nowrap text-[#1E1B13]  noto2-serif items-center gap-4 bg-[#FBF3E4]"
                >
                  <img src="/sausage.png" alt="mushroom" width={20} />
                  <span>Sausage</span>
                </div>
                <div
                  onClick={() => toggleTopping("pepperoni")}
                  className="flex flex-wrap w-fit py-2 px-4 rounded-2xl  backdrop-blur-2xl drop-shadow-sm  font-bold text-md whitespace-nowrap text-[#1E1B13]  noto2-serif items-center gap-4 bg-[#FBF3E4] "
                >
                  <img src="/pepporoni.png" alt="mushroom" width={20} />
                  <span>Pepperoni</span>
                </div>
                <div
                  onClick={() => toggleTopping("bacon")}
                  className="flex flex-wrap w-fit py-2 px-4 rounded-2xl  backdrop-blur-2xl drop-shadow-sm  font-bold text-md whitespace-nowrap text-[#1E1B13]  noto2-serif items-center gap-4 bg-[#FBF3E4] "
                >
                  <img src="/bacon.png" alt="mushroom" width={20} />
                  <span>Bacon</span>
                </div>
                <div
                  onClick={() => toggleTopping("cheese")}
                  className="flex flex-wrap w-fit py-2 px-4 rounded-2xl  backdrop-blur-2xl drop-shadow-sm  font-bold text-md whitespace-nowrap text-[#1E1B13]  noto2-serif items-center gap-4 bg-[#FBF3E4] "
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
              <div className=" flex flex-wrap gap-5 mb-12">
                <div
                  onClick={() => toggleExtra("garlic-bread")}
                  className="flex flex-wrap w-fit  py-5 px-8 backdrop-blur-2xl drop-shadow-sm  rounded-2xl font-bold text-md whitespace-nowrap text-[#1E1B13]  noto2-serif items-center gap-4 bg-[#FBF3E4] "
                >
                  <img src="/garlic-bread.png" alt="mushroom" width={40} />
                  <span>Garlic Bread</span>
                </div>
                <div
                  onClick={() => toggleExtra("soda")}
                  className="flex flex-wrap w-fit py-5 px-8 rounded-2xl  backdrop-blur-2xl drop-shadow-sm  font-bold text-md whitespace-nowrap text-[#1E1B13]  noto2-serif items-center gap-4 bg-[#FBF3E4] "
                >
                  <img src="/soda.png" alt="onion" width={40} />
                  <span>Soda</span>
                </div>
                <div
                  onClick={() => toggleExtra("dip")}
                  className="flex flex-wrap w-fit py-5 px-8 rounded-2xl  backdrop-blur-2xl drop-shadow-sm  font-bold text-md whitespace-nowrap text-[#1E1B13]  noto2-serif items-center gap-4 bg-[#FBF3E4]"
                >
                  <img src="/dip.png" alt="mushroom" width={40} />
                  <span>Cheesy dip</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 bg-[#FBF3E4]  backdrop-blur-2xl drop-shadow-sm w-[350px] h-[500px] border-2 border-[rgba(194,201,187,0.5)] rounded-xl">
            <div className="noto2-serif mt-4 text-xl flex justify-center text-[#1E1B13]">
              ORDER SUMMARY
            </div>
            {size && (
              <div className="flex justify-around">
                <div className="mt-4 mx-4 noto2-serif font-bold text-xl text-[#1E1B13]">
                  {size.name}
                </div>
                <div className="mt-4 mx-4 noto2-serif font-bold text-xl text-[#AD302F]">
                  ${size.price}
                </div>
              </div>
            )}
            {crust && (
              <div className="flex justify-around">
                <div className="mt-4 mx-4 noto2-serif font-bold text-xl text-[#1E1B13]">
                  {crust.name}
                </div>
                <div className="mt-4 mx-4 noto2-serif font-bold text-xl text-[#AD302F]">
                  ${crust.price}
                </div>
              </div>
            )}
            {Extras && (
              <div className="flex justify-around">
                <div className="mt-4 mx-4 noto2-serif font-bold text-xl text-[#1E1B13]">
                  {cartExtras}
                </div>
                <div className="mt-4 mx-4 noto2-serif font-bold text-xl text-[#AD302F]">
                  $1.5
                </div>
              </div>
            )}

            <div className="w-[300px] my-5 flex justify-center mx-3 h-[0.1px] bg-[#1e1b1362]"></div>
            <div className="h-[120px]">
              <div className="mt-2 mx-4 noto-serif  font-medium text-sm text-[#1e1b13ad]">
                {cartTopping}
              </div>
            </div>
            <div className="w-[300px] my-5 flex justify-center mx-3 h-[0.1px] bg-[#1e1b1362]"></div>
            <div className="flex justify-between items-center  mt-4 mx-4 ">
              <div className="noto2-serif font-bold text-lg text-[#1E1B13]">
                Quantity
              </div>
              <div className="bg-[#FBF3E4]   backdrop-blur-2xl drop-shadow-sm flex gap-5 items-center justify-center rounded-xl py-2 px-3 text-[#1e1b13]">
                <span
                  className="text-2xl man3-rope "
                  onClick={decreaseQuanitity}
                >
                  -
                </span>
                <span className="text-xl man3-rope ">{quantity}</span>
                <span className="text-2xl man3-rope" onClick={increaseQuantity}>
                  +
                </span>
              </div>
            </div>
            <div className="flex justify-center gap-50 items-center  mt-4 mx-8 ">
              <div className="noto2-serif font-bold text-lg text-[#AD302F]">
                TOTAL
              </div>
              <div className="noto2-serif font-bold text-lg text-[#AD302F]">
                ${total}
              </div>
            </div>
            <div className="flex justify-center gap-50 items-center  bg-[#AD302F] p-2 rounded-2xl mt-4 mx-8 ">
              <div className="noto2-serif font-bold text-lg text-[#FBF3E4]">
                Check Out
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PizzaOrderForm;
