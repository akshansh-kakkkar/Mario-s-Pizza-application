import { useNavigate } from "react-router-dom";

const PizzaOrderForm = () => {
  const Navigate = useNavigate();
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
              src="https://cdn.lordicon.com/urdbeoyx.json"
              trigger="loop"
              delay="300"
              colors="primary:#629110,secondary:#c71f16"
              style={{ width: 50, height: 50 }}
            ></lord-icon>
          </span>
          Registration Form
        </div>
      </div>
      <div className="grid grid-cols-4">
        <div className="col-span-3 flex">
          <div>
            <img width={75} src="/small-pizza.png" alt="" />
          </div>
          <div className="w-30">
            <img width={75} src="/medium-pizza.png" alt="" />
          </div>
          <div>
            <img width={75} src="/large-pizza.png" alt="" />
          </div>
          
        </div>
        <div className="col-span-1"></div>
      </div>
    </>
  );
};

export default PizzaOrderForm;
